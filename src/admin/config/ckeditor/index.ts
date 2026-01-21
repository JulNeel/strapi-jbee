import { type PluginConfig } from '@_sh/strapi-plugin-ckeditor';
import { customHtmlPreset, defaultMarkdownPreset } from './presets';

export const ckeditorConfig: PluginConfig = {
  presets: [customHtmlPreset, defaultMarkdownPreset],
};

export { customHtmlPreset, defaultMarkdownPreset } from './presets';
export { editorStyles, CALLOUT_CLASSES, IMAGE_CLASSES, type CalloutClass, type ImageClass } from './styles';
