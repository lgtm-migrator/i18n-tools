import os from 'os';
import path from 'path';
import yargs from 'yargs';
// export command
import {
  command,
  description as describeText,
  builder,
} from '../src/cmds/export';
// XLSX description
import { description as xlsx_description } from '../src/cmds/export_cmds/export_xlsx';

// temp folder
const TEMP_FOLDER = os.tmpdir();
// test folders constants
const ROOT_TEST_FOLDER = 'tests-for-export';
const [VALID_TEST_FOLDER, USELESS_TEST_FOLDER] = [
  'correct', // folder where every file are correct
  'useless', // folder where file has an useless content ([])
];

// initialise fsify
const fsify: {
  [x: string]: any;
  DIRECTORY: any;
  FILE: any;
  (_: { [x: string]: any }): Promise<any>;
} = require('fsify')({
  cwd: TEMP_FOLDER,
  persistent: false,
  force: true,
});

// Translations keys for test
const TRANSLATIONS_KEYS = ['FR', 'NL', 'DE'];
const KEYS_LABEL: { [key: string]: string } = {
  FR: 'French',
  NL: 'Dutch',
  DE: 'German',
};
const locale_label = (locale: string) => `${KEYS_LABEL[locale]} translation`;

// i18n example
const generate_i18n = (locale: string) => ({
  commons: {
    myNestedKey: `Hello world ${locale}`,
  },
  array: ['1', '2', '3'].map(item => `${item} ${locale}`),
});

// Export files
const generate_files = (
  locales: string[],
  fnMapper: (locale: string) => string
) =>
  locales.reduce((acc: { [x: string]: string }, locale: string) => {
    acc[locale] = fnMapper(locale);
    return acc;
  }, {});

// Export columns
const EXPORT_COLUMNS = (locales: string[]) =>
  locales.map(locale => ({
    locale,
    label: locale_label(locale),
  }));

// flat operation
const flat = (arr: any[]) => [].concat(...arr);

// type for fsify structure
type fsify_structure = {
  type: any;
  name: string;
  contents: string | fsify_structure;
}[];

// to access easier the paths of test file paths
const test_files_list = [
  // correct files
  'exportColumns.json',
  'files.json',
  'settings1.json',
  'settings2.json',
  // wrong files
  'emptyObject.json',
  'emptyArray.json',
  'files-duplicatedValues.json',
  'exportColumns-missingLabelProp.json',
  'exportColumns-wrongPropValue.json',
  'exportColumns-duplicatedValues.json',
  'exportColumns-missingKey.json',
] as const;
const [
  TEST_FILE_EXPORT_COLUMNS,
  TEST_FILE_FILES,
  TEST_FILE_SETTINGS1,
  TEST_FILE_SETTINGS2,
  TEST_FILE_EMPTY_OBJECT,
  TEST_FILE_EMPTY_ARRAY,
  TEST_FILE_FILES_DUP,
  TEST_FILE_EXPORT_COLUMNS_MISS_PROP,
  TEST_FILE_EXPORT_COLUMNS_WRONG_PROP,
  TEST_FILE_EXPORT_COLUMNS_DUP_VALS,
  TEST_FILE_EXPORT_COLUMNS_MISS_KEY
] = test_files_list;
type test_files_type = typeof test_files_list[number];

// file structure for fsify, in order to run the tests
const structure: fsify_structure = [
  {
    type: fsify.DIRECTORY,
    name: ROOT_TEST_FOLDER,
    contents: [
      // In this folder, everything in correct
      {
        type: fsify.DIRECTORY,
        name: VALID_TEST_FOLDER,
        contents: flat([
          // 3 i18n files
          TRANSLATIONS_KEYS.map(locale => ({
            type: fsify.FILE,
            name: `${locale.toLowerCase()}.json`,
            contents: JSON.stringify(generate_i18n(locale)),
          })),
          // the exportColumns.json
          {
            type: fsify.FILE,
            name: TEST_FILE_EXPORT_COLUMNS,
            contents: JSON.stringify(EXPORT_COLUMNS(TRANSLATIONS_KEYS)),
          },
          // the files.json
          {
            type: fsify.FILE,
            name: TEST_FILE_FILES,
            contents: JSON.stringify(
              generate_files(TRANSLATIONS_KEYS, locale =>
                path.resolve(
                  TEMP_FOLDER,
                  ROOT_TEST_FOLDER,
                  VALID_TEST_FOLDER,
                  `${locale.toLowerCase()}.json`
                )
              )
            ),
          },
          // First format of settings.json (Path)
          {
            type: fsify.FILE,
            name: TEST_FILE_SETTINGS1,
            contents: JSON.stringify({
              "files": path.resolve(
                  TEMP_FOLDER,
                  ROOT_TEST_FOLDER,
                  VALID_TEST_FOLDER,
                  TEST_FILE_FILES
              ),
              "exportColumns": path.resolve(
                TEMP_FOLDER,
                ROOT_TEST_FOLDER,
                VALID_TEST_FOLDER,
                TEST_FILE_EXPORT_COLUMNS
              ),
              "worksheetName": "Settings 1 - Worksheet",
              "filename": "settings1-output",
              "outputDir": TEMP_FOLDER,
            })
          },
          // Second format of settings.json (Object/Array instead of Paths)
          {
            type: fsify.FILE,
            name: TEST_FILE_SETTINGS2,
            contents: JSON.stringify({
              "files": generate_files(TRANSLATIONS_KEYS, locale =>
                path.resolve(
                  TEMP_FOLDER,
                  ROOT_TEST_FOLDER,
                  VALID_TEST_FOLDER,
                  `${locale.toLowerCase()}.json`
                )
              ),
              "exportColumns": EXPORT_COLUMNS(TRANSLATIONS_KEYS),
              "worksheetName": "Settings 2 - Worksheet",
              "filename": "settings2-output",
              "outputDir": TEMP_FOLDER,
            })
          }
        ]),
      },
      // In this folder, files used for validations
      {
        type: fsify.DIRECTORY,
        name: USELESS_TEST_FOLDER,
        contents: [
          // An empty object
          {
            type: fsify.FILE,
            name: TEST_FILE_EMPTY_OBJECT,
            contents: JSON.stringify({}),
          },
          // An empty array
          {
            type: fsify.FILE,
            name: TEST_FILE_EMPTY_ARRAY,
            contents: JSON.stringify([]),
          },
          // files.json with duplicated values
          {
            type: fsify.FILE,
            name: TEST_FILE_FILES_DUP,
            contents: JSON.stringify(
              generate_files(TRANSLATIONS_KEYS, _ =>
                path.resolve(
                  TEMP_FOLDER,
                  ROOT_TEST_FOLDER,
                  VALID_TEST_FOLDER,
                  `${TRANSLATIONS_KEYS[0].toLowerCase()}.json`
                )
              )
            ),
          },
          // exportColumns.json with missing property (label)
          {
            type: fsify.FILE,
            name: TEST_FILE_EXPORT_COLUMNS_MISS_PROP,
            contents: JSON.stringify([{ locale: 'FR' }]),
          },
          // exportColumns.json with wrong property type
          {
            type: fsify.FILE,
            name: TEST_FILE_EXPORT_COLUMNS_WRONG_PROP,
            contents: JSON.stringify([{ locale: 'FR', label: 42 }]),
          },
          // exportColumns.json with duplicated value
          {
            type: fsify.FILE,
            name: TEST_FILE_EXPORT_COLUMNS_DUP_VALS,
            contents: JSON.stringify([
              { locale: 'FR', label: 'Hello World' },
              { locale: 'NL', label: 'Hello World' },
            ]),
          },
          // exportColumns.json with missing key for files.json
          {
            type: fsify.FILE,
            name: TEST_FILE_EXPORT_COLUMNS_MISS_KEY,
            contents: JSON.stringify([
              { locale: 'FR', label: 'French translation' },
            ]),
          },
        ],
      },
    ],
  },
];

// files path
const TEST_FILES: { [x in test_files_type]: string } = test_files_list.reduce(
  (acc: any, curr: test_files_type, idx: number) => {
    // improvement for later : handle generically nested stuff
    let arr = [
      TEMP_FOLDER,
      ROOT_TEST_FOLDER,
      idx < 2 ? VALID_TEST_FOLDER : USELESS_TEST_FOLDER,
      curr,
    ];
    acc[curr] = path.resolve(...arr);
    return acc;
  },
  {}
);

beforeAll(() => {
  // write temporary files
  //console.log(structure);
  return fsify(structure);
  //return Promise.resolve();
});

// Build the parser used for that command
const parser = yargs.command(command, describeText, builder).help();

// return the output of a given command to the parser
function fetchOutput(cmd: string): Promise<string> {
  return new Promise(resolve => {
    parser.parse(cmd, (_err: Error | undefined, _argv: any, output: string) => {
      resolve(output);
    });
  });
}

// return the expected error of a given command to the parser
function fetchError(cmd: string) : Promise<Error> {
  return new Promise((resolve, reject) => {
    parser.parse(cmd, (err: Error | undefined, _argv: any, _output: string) => {
      if (err){
        resolve(err);
      } else {
        reject("Expected error wasn't thrown");
      }
    })
  });
}

// to concat faster command
type concat_cmd_type = (args : string[]) => string;
type prepare_mandatory_args_type = (...args : string[]) => string[];
const concat_cmd : concat_cmd_type = (args : string[]) => `export to_xlsx ${args.join(' ')}`;
const prepare_mandatory_args : prepare_mandatory_args_type = (...args : string[]) => ["--files", `"${args[0]}"`, "--exportColumns", `"${args[1]}"`];

describe('[export_xlsx command]', () => {
  describe('Check command availability', () => {

    it('Should list to_xlsx in export command', async () => {
      const output = await fetchOutput('export --help');
      expect(output).toMatch('to_xlsx');
    });

    it('Should display to_xlsx help output', async () => {
      const output = await fetchOutput('export to_xlsx --help');
      expect(output).toMatch(xlsx_description);
    });
  });

  describe('Validations', () => {

    it('Filename with extension should be rejected', async () => {
      let filename = "test.xlsx";
      let test_cmd = concat_cmd([
        // mandatory args
        ...prepare_mandatory_args(
          TEST_FILES[TEST_FILE_FILES], 
          TEST_FILES[TEST_FILE_EXPORT_COLUMNS]
        ),
        "--filename",
        `"${filename}"`
      ]);
      let error = await fetchError(test_cmd);
      // Test out the message : Error: test.xlsx has an extension : Remove it please
      expect(error.message).toMatch(filename);
      expect(error.message).toMatch("extensio");
    });
/*
    it('', async () => {

    });
*/    
  });
});