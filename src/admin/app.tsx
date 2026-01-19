import type { StrapiApp } from '@strapi/strapi/admin';
import { setPluginConfig } from '@_sh/strapi-plugin-ckeditor';
import { ckeditorConfig } from './config/ckeditor';

export default {
  config: {
    locales: ['fr'],
  },
  register() {
    setPluginConfig(ckeditorConfig);
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
