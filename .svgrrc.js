const path = require('path');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const categoryName = path.basename(path.dirname(filePath));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `export { default as ${exportName}${capitalizeFirstLetter(categoryName)}Icon } from './${basename}';\n`;
  });
  return exportEntries.join('\n');
}

module.exports = {
  typescript: true,
  indexTemplate: defaultIndexTemplate,
};
