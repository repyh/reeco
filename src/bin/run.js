const executionDirectory = process.cwd();
const { exec } = require('child_process');

(async () => {
    try {
        exec('electron .', { cwd: executionDirectory + '/_build/' }, (err, stdout, stderr) => {
            if(err) return console.error(err);
            if(stderr) return console.error(stderr);
            console.log(stdout);
        })
    } catch(e) {
        console.log('Failed to run the game');
        console.error(e);
    }
})();