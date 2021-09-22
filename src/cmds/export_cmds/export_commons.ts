import fs, { PathLike } from 'fs';
import path from 'path';

// lodash methodes
import groupBy from 'lodash/groupBy';
import flattenDeep from 'lodash/flattenDeep';
import get from 'lodash/get';

// For typings
import {
  CommonExportArguments,
  I18N_Merged_Data,
} from '../../types/exportTypes';

// middelware
import {
  parsePathToJSON,
  parsePathToFunction,
} from '../../middlewares/middlewares';
import getLeavesPathes from '../../commons/getLeavesPathes';
import CommandBuilder from '../../commons/commandBuilder';
type I18N_Object = { [x: string]: string | Array<any> | I18N_Object };
type I18N_Result = {
  technical_key: string;
  label: string;
  locale: string;
}[];

// Builder for yargs
export class CommonExportYargsBuilder extends CommandBuilder {
  addFilesOption() {
    this.y = this.y
      .option('files', {
        describe:
          'Absolute path to a JSON object that have as key an unique identifier and value the absolute path to a i18n file, such as : { "FR": "/somePath/fr.json", "NL": "/somePath/nl.json"}',
        demandOption: true,
      })
      // coerce files into Object
      .middleware(parsePathToJSON('files'), true);
    return this;
  }

  addFilenameOption() {
    this.y = this.y
      .option('filename', {
        type: 'string',
        alias: 'of',
        describe:
          'Name of the output file generated by this CLI (without extension)',
      })
      // default value for filename
      .default('filename', function () {
        const date = new Date();
        const timestamp = `${date.getDate()}-${
          date.getMonth() + 1
        }-${date.getFullYear()} ${date.getHours()}h${date.getMinutes()}m${date.getSeconds()}`;
        return `translations_${timestamp}`;
      });
    return this;
  }

  addOutputDirOption() {
    this.y = this.y
      .option('outputDir', {
        type: 'string',
        alias: 'od',
        describe: 'Output folder where to store the output file',
        default: process.cwd(),
      })
      // coerce path provided by outputDir
      .coerce(['outputDir'], path.resolve);
    return this;
  }

  addResultsFilterOption() {
    this.y = this.y
      .option('resultsFilter', {
        description:
          'Absolute path to a JS module to filter rows that will be exported. This js file exports a default function with the following signature : (x: I18N_Merged_Data) => I18N_Merged_Data)',
      })
      // coerce resultsFilter into function
      .middleware(parsePathToFunction('resultsFilter'), true);
    return this;
  }
}

// turns n i18n file(s) into a merged version
export function merge_i18n_files(
  argv: CommonExportArguments
): Promise<I18N_Merged_Data> {
  return new Promise((resolve, reject) => {
    Promise
      // Read files and convert them to useful obj
      .all(Object.entries(argv.files).map((entry) => readFile(entry)))
      // merge results
      .then((results) => mergeResults(results))
      .then((data) => resolve(data))
      .catch(/* istanbul ignore next */ (err) => reject(err));
  });
}

// merge_i18n_files sub functions

// read file and turning into a useful array of objects
function readFile([locale, file_path]: [
  string,
  PathLike
]): Promise<I18N_Result> {
  return new Promise((resolve, reject) => {
    fs.promises
      .readFile(file_path, 'utf8')
      .then((jsonData) => Promise.resolve(JSON.parse(jsonData)))
      .then((json) => i18n_to_result_format(json, locale))
      .then((result) => resolve(result))
      .catch(/* istanbul ignore next */ (err) => reject(err));
  });
}

// turns i18n object to usable format
function i18n_to_result_format(obj: I18N_Object, locale: string): I18N_Result {
  let leafPaths = getLeavesPathes(obj);
  return leafPaths.map((leafPath) => ({
    locale: locale,
    technical_key: leafPath,
    label: get(obj, leafPath) as string,
  }));
}

// merge array of {"technical_key": "...", "label": "...", "locale": "..."}
// into {"technical_key": ..., "labels": { "FR": ..., "NL": ..., "DE": ... }}
function mergeResults(results: I18N_Result[]): Promise<I18N_Merged_Data> {
  const flattenResults = flattenDeep(results);
  let groupBy_technical_key = groupBy(flattenResults, 'technical_key');

  let final_result = Object.keys(groupBy_technical_key)
    .sort()
    .map((key) => {
      return {
        technical_key: key,
        labels: groupBy_technical_key[key].reduce((prev: any, curr: any) => {
          prev[curr['locale']] = curr['label'];
          return prev;
        }, {}),
      };
    });
  return Promise.resolve(final_result);
}
