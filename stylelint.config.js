module.exports = {
  plugins: [
    'stylelint-scss',
    'stylelint-prettier',
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
  ],
  rules: {
    'prettier/prettier': true,
  },
};
