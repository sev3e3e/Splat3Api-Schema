import * as fs from 'fs';

const distPackageJson = JSON.parse(fs.readFileSync('./dist/splat3api-types/package.json', 'utf8'));

console.log(distPackageJson['version']);

const parentPackageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

parentPackageJson['version'] = distPackageJson['version'];

fs.writeFileSync('./package.json', JSON.stringify(parentPackageJson));
