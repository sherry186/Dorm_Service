const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              "@primary-color": "#138796",
              "@error-color": "#F17FB2",
              "@body-background": "#F6F6F6",
              "@menu-bg": "#CCDCD7",
              "@table-bg": "@body-background",
              "@table-header-bg": "#E2E2E2"
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
