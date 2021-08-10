const fs = require('fs');
const path = require('path');
const shell = require('child_process').execSync;

const packageJson = require('../package.json');

delete packageJson.browserslist;
delete packageJson.devDependencies;
delete packageJson.eslintConfig;

fs.writeFileSync(path.resolve(__dirname, '../', 'build/components', 'package.json'), JSON.stringify(packageJson, null, 2), 'utf8');

const src = path.resolve(__dirname, '../', 'src/components/Icon/files');
const dist = path.resolve(__dirname, '../', 'build/components/Icon/files');
shell(`mkdir -p ${dist}`);
shell(`cp -r ${src}/* ${dist}`);