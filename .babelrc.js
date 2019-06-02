const presets = [
  "@babel/preset-react",
  [
    "@babel/env",
    {
      modules: 'commonjs',
    }
  ],
  "@babel/preset-flow"
];

const plugins = [
  "@babel/plugin-proposal-export-default-from",
  "@babel/transform-runtime"
];

module.exports = {
  compact: false,
  presets,
  plugins,
};
