const fs = require('fs');
const path = require('path');

const packageJson = require('../package.json');

delete packageJson.browserslist;
delete packageJson.devDependencies;
delete packageJson.eslintConfig;

fs.writeFileSync(path.resolve(__dirname, '../', 'build/components', 'package.json'), JSON.stringify(packageJson, null, 2), 'utf8');
