import { type PluginConfig } from '@_sh/strapi-plugin-ckeditor';
import { customHtmlPreset, defaultMarkdownPreset } from './presets';

export const ckeditorConfig: PluginConfig = {
  presets: [customHtmlPreset, defaultMarkdownPreset],
};

export { customHtmlPreset, defaultMarkdownPreset } from './presets';
export { editorStyles, CALLOUT_CLASSES, type CalloutClass } from './styles';
