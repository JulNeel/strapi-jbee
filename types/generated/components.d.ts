import type { Schema, Struct } from '@strapi/strapi';

export interface PostCodeBlock extends Struct.ComponentSchema {
  collectionName: 'components_post_code_blocks';
  info: {
    displayName: 'Code Block';
    icon: 'code';
  };
  attributes: {
    code: Schema.Attribute.Text;
    language: Schema.Attribute.Enumeration<
      [
        'js',
        'ts',
        'jsx',
        'tsx',
        'bash',
        'node',
        'css',
        'sass',
        'html',
        'yml',
        'javascript',
        'typescript',
        'php',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface PostImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_post_image_blocks';
  info: {
    displayName: 'Image Block';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    width: Schema.Attribute.Enumeration<['full', 'large', 'medium', 'small']>;
  };
}

export interface PostTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_post_text_blocks';
  info: {
    displayName: 'Text Block';
    icon: 'feather';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'post.code-block': PostCodeBlock;
      'post.image-block': PostImageBlock;
      'post.text-block': PostTextBlock;
    }
  }
}
