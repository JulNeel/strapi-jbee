import { Style, GeneralHtmlSupport } from 'ckeditor5';
import {
  defaultHtmlPreset,
  defaultMarkdownPreset,
  type Preset,
} from '@_sh/strapi-plugin-ckeditor';
import { editorStyles, CALLOUT_CLASSES } from './styles';

/**
 * Custom HTML preset with callout blocks support
 */
export const customHtmlPreset: Preset = {
  ...defaultHtmlPreset,
  name: 'Default HTML editor',
  description: 'HTML editor with custom callout blocks',
  styles: editorStyles,
  editorConfig: {
    ...defaultHtmlPreset.editorConfig,
    plugins: [
      ...(defaultHtmlPreset.editorConfig.plugins || []),
      Style,
      GeneralHtmlSupport,
    ],
    toolbar: [
      'heading',
      'style',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'code',
      'link',
      '|',
      'bulletedList',
      'numberedList',
      '|',
      'alignment',
      'outdent',
      'indent',
      '|',
      'blockQuote',
      'codeBlock',
      'insertTable',
      'strapiMediaLib',
      'horizontalLine',
      '|',
      'sourceEditing',
      'fullScreen',
      '|',
      'undo',
      'redo',
    ],
    style: {
      definitions: [
        {
          name: 'Info',
          element: 'p',
          classes: ['callout-info'],
        },
        {
          name: 'Success',
          element: 'p',
          classes: ['callout-success'],
        },
        {
          name: 'Warning',
          element: 'p',
          classes: ['callout-warning'],
        },
        {
          name: 'Danger',
          element: 'p',
          classes: ['callout-danger'],
        },
        {
          name: 'Primary',
          element: 'p',
          classes: ['callout-primary'],
        },
        {
          name: 'Secondary',
          element: 'p',
          classes: ['callout-secondary'],
        },
      ],
    },
    htmlSupport: {
      allow: [
        {
          name: 'p',
          classes: [...CALLOUT_CLASSES],
        },
      ],
    },
    codeBlock: {
      languages: [
        { language: 'plaintext', label: 'Plain text' },
        { language: 'javascript', label: 'JavaScript' },
        { language: 'typescript', label: 'TypeScript' },
        { language: 'jsx', label: 'JSX' },
        { language: 'tsx', label: 'TSX' },
        { language: 'css', label: 'CSS' },
        { language: 'html', label: 'HTML' },
        { language: 'xml', label: 'XML' },
        { language: 'bash', label: 'Bash' },
        { language: 'sql', label: 'SQL' },
        { language: 'json', label: 'JSON' },
        { language: 'yaml', label: 'YAML' },
        { language: 'markdown', label: 'Markdown' },
      ],
    },
  },
};

export { defaultMarkdownPreset };
