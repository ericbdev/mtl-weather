// @flow
const standardizeAction = (actionType: string) => ({
  error: `${actionType}_ERROR`,
  request: `${actionType}_REQUEST`,
  success: `${actionType}_SUCCESS`,
});

export {
  standardizeAction,
};
