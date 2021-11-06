const fs = require('fs-extra');
const { exec } = require('child_process');
const executionDirectory = process.cwd();
const config = require(executionDirectory + '/ree.conf.json');
const sourceFile = fs.readFileSync(executionDirectory + '/index.js');

if(!sourceFile) console.log('No index.js file detected.');

(async () => {
    try {
        await fs.copy(__dirname + '/../../_build', executionDirectory + '/_build');
        console.log('\x1b[32m' + 'Game build complete' + '\x1b[0m');
        console.log('\x1b[33m' + 'Installing all dependencies' + '\x1b[0m');

        exec('npm install', { cwd: executionDirectory + '/_build' }, async (err, stdout, stderr) => {
            if(err) return console.error(err);
            if(stderr) return console.error(stderr);
            console.log(stdout);
            console.log('\x1b[32m' + '\nBuild complete' + '\x1b[0m');
        })
    } catch(e) {
        console.log('Failed to build project');
        console.error(e);
    }
})(); 