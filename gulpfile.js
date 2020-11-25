const gulp = require('gulp');
const Nodemon = require('gulp-nodemon');
const dotenv = require('dotenv');

gulp.task('dotenv', (done) => {
    dotenv.config();
    done();
});


gulp.task('nodemon', () => {
    const nodeArgs = ['--exec'];
    if (process.env.DEBUGGER) {
        nodeArgs.push('--inspect');
    }

    Nodemon({
        script: './src/bin/www.ts',
        ignore: [
            'node_modules/',
            'test/',
        ],
        nodeArgs,
    })
        .on('restart', (files) => {
        // eslint-disable-next-line no-console
            console.log('Change detected:', files);
        });
});


gulp.task('default', gulp.series(['dotenv', 'nodemon']));