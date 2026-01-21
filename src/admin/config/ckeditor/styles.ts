/**
 * CKEditor custom styles for the admin panel
 */

export const CALLOUT_CLASSES = [
  'callout-info',
  'callout-success',
  'callout-warning',
  'callout-danger',
  'callout-primary',
  'callout-secondary',
] as const;

export const IMAGE_CLASSES = [
  'image-rounded',
] as const;

export type ImageClass = (typeof IMAGE_CLASSES)[number];

export type CalloutClass = (typeof CALLOUT_CLASSES)[number];

export const editorStyles = `
  /* Callout blocks styles in the editor */
  .ck-content .callout-info,
  .ck-content .callout-success,
  .ck-content .callout-warning,
  .ck-content .callout-danger,
  .ck-content .callout-primary,
  .ck-content .callout-secondary {
    padding: 1rem 1.5rem;
    margin: 1rem 0;
    border-radius: 6px;
    border-left: 4px solid;
  }

  .ck-content .callout-info {
    background-color: #e7f3ff;
    border-left-color: #2196f3;
    color: #0d47a1;
  }

  .ck-content .callout-success {
    background-color: #e8f5e9;
    border-left-color: #4caf50;
    color: #1b5e20;
  }

  .ck-content .callout-warning {
    background-color: #fff8e6;
    border-left-color: #ff9800;
    color: #e65100;
  }

  .ck-content .callout-danger {
    background-color: #ffebee;
    border-left-color: #f44336;
    color: #b71c1c;
  }

  .ck-content .callout-primary {
    background-color: #424242;
    border-left-color: #212121;
  }

  .ck-content .callout-secondary {
    background-color: #616161;
    border-left-color: #424242;
  }

  /* Rounded image style */
  .ck-content figure.image-rounded img {
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
`;
