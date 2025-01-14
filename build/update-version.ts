import sh from 'shelljs';
import path from 'node:path';

const version = process.argv[2];

if (version == null) {
    console.error(`Usage: 'npm run all:update-version -- $version' (XX.X.X)`);
    process.exit(1);
}

sh.set('-e');

const MONOREPO_ROOT = path.join(__dirname, '..');
const packagesPath = path.join(MONOREPO_ROOT, 'packages', '**', 'package.json');
const playgroundsPath = path.join(MONOREPO_ROOT, 'playgrounds', '**', 'package.json');

sh.exec(`npm version ${version} -ws --allow-same-version --include-workspace-root --git-tag-version=false --workspaces-update=false`);

sh.sed('-i', /"devextreme(-angular|-react|-vue)?": ".*"/, `"devextreme$1": "~${version}"`, [packagesPath, playgroundsPath]);

sh.exec('npm i');
