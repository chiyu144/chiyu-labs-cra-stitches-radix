// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoAlias = require('craco-alias');

// eslint-disable-next-line no-undef
module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
};
