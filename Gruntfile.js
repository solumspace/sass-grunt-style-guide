'use strict';

module.exports = function(grunt) {
    // Required Sass task
    const sass = require('node-sass');
    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);
    var log = function(err, stdout, stderr, cb) {
        if (stdout) {
            grunt.log.writeln(stdout);
        }
        if (stderr) {
            grunt.log.error(stderr);
        }
        cb();
    };
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        svg_sprite: {
            complex: {

                // Target basics
                expand: true,
                cwd: 'icons',
                src: ['**/*.svg'],
                dest: '_site/icons',

                // Target options
                options: {
                    shape: {
                        dimension: { // Set maximum dimensions
                            maxWidth: 32,
                            maxHeight: 32
                        },
                        spacing: { // Add padding
                            padding: 10
                        },
                        dest: 'dist/intermediate-svg' // Keep the intermediate files
                    },
                    mode: {
                        view: { // Activate the «view» mode
                            bust: false,
                            render: {
                                scss: true // Activate Sass output (with default options)
                            }
                        },
                        symbol: true // Activate the «symbol» mode
                    }
                }
            }
        },
        // shell commands for use in Grunt tasks
        shell: {
            jekyllClean: {
                command: 'jekyll clean',
                options: {
                    callback: log
                }
            },
            jekyllBuild: {
                command: 'jekyll build --draft --incremental JEKYLL_ENV=dev',
                options: {
                    callback: log
                }
            },
            jekyllServe: {
                command: 'jekyll serve'
            }
        },

        // watch for files to change and run tasks when they do
        watch: {
            posts: {
                files: [
                    '_config.yml',
                    '*.html',
                    '*.md',
                    '_layouts/**',
                    '_posts/**',
                    '_drafts/**',
                    '_includes/**',
                    'assets/**/*.*',
                    '_sass/**/*.*',
                    'css/**/*.*'
                ],
                tasks: ['shell:jekyllBuild']
            },
            sass: {
                files: ['_sass/**/*.{scss,sass}'],
                tasks: ['sass']
            }
        },

        // sass (libsass) config
        sass: {
            options: {
                implementation: sass,
                sourceMap: true,
                relativeAssets: false,
                outputStyle: 'expanded',
                sassDir: '_sass',
                cssDir: '_site/css'
            },
            build: {
                files: [{
                    expand: true,
                    cwd: '_sass/',
                    src: ['**/*.{scss,sass}'],
                    dest: '_site/css',
                    ext: '.css'
                }]
            }
        },

        // run tasks in parallel
        concurrent: {
            serve: [
                'svg_sprite',
                'sass',
                'watch',
                'shell:jekyllServe'
            ],
            options: {
                logConcurrentOutput: true
            }
        },

    });

    // Register the grunt serve task
    grunt.registerTask('serve', [
        'concurrent:serve'
    ]);

    // Register the grunt build task
    grunt.registerTask('build', [
        'shell:jekyllBuild',
        'sass',
        'svg_sprite'
    ]);

    // Register the grunt clean task
    grunt.registerTask('clean', [
        'shell:jekyllClean'
    ]);

    // Register build as the default task fallback
    grunt.registerTask('default', 'build');

};
