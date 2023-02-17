// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  // eslint-disable-next-line unused-imports/no-unused-vars
  process(sourceText, sourcePath, options) {
    const toUppercase = JSON.stringify(path.basename(sourcePath));
    const upperCase =
      toUppercase.charAt(0).toUpperCase() + toUppercase.slice(1);

    return {
      code: `module.exports = ${upperCase};`,
    };
  },
  getCacheKey() {
    return 'svgTransform';
  },
};
