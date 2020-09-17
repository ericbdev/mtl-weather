const presets = [
  "@babel/preset-react",
  "@babel/preset-flow",
  [
    "@babel/env",
    {
      modules: 'commonjs',
    }
  ]
];

const plugins = [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-proposal-export-default-from",
  "@babel/transform-runtime"
];

module.exports = {
  compact: false,
  presets,
  plugins,
};
