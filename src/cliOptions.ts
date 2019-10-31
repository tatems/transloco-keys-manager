
export const optionDefinitions = [
  { name: 'input', alias: 'i', type: String, description: 'The source directory for all files using the translation keys' },
  { name: 'output', alias: 'o', type: String, description: 'The target directory for all generated translation files' },
  { name: 'translations-path', alias: 'p', type: String, description: 'Where are the main translation files' },
  {
    name: 'langs',
    alias: 'l',
    type: String,
    multiple: true,
    description: 'The languages files to generate'
  },
  {
    name: 'replace',
    alias: 'r',
    type: Boolean,
    description: 'Replace the contents of a translation file (if it exists) with the generated one (default value is false, in which case files are merged)'
  },
  { name: 'default-value', alias: 'd', type: String, description: `The default value of a generated key` },
  { name: 'marker', alias: 'm', type: String, description: `The marker sign for dynamic values` },

  {
    name: 'add-missing-keys',
    alias: 'a',
    type: Boolean,
    description: 'Add missing keys that were found by the detective (default value is false)'
  },
  { name: 'help', alias: 'h', type: Boolean, description: 'Help me, please!' }
];

export const sections = [
  {
    header: '🔥 Transloco Keys Manager',
    content: 'Extract and find missing keys'
  },
  {
    header: 'Actions',
    content: ['$ transloco-keys-manager extract', '$ transloco-keys-manager find']
  },
  {
    header: 'Options',
    optionList: optionDefinitions
  }
];