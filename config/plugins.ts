export default () => ({
  upload: {
    config: {
      sizeLimit: 10 * 1024 * 1024, // 10 Mo
      breakpoints: {
        large: 1000,
        medium: 750,
        small: 500,
      },
    },
  },
});
