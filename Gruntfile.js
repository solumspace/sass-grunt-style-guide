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

        // svg commands to build icons
        svg_sprite: {
            target: {
                expand: true,
                cwd: 'svg',
                src: ['**/*.svg'],
                dest: '_sass',

                // Target options
                options: {
                    shape: {
                         dimension: { // Set maximum dimensions
                             maxWidth: 52,
                             maxHeight: 52
                         }
                     },
                    mode: {
                        view: {
                            dest: 'svg',
                            mixin: 'svg-sprite',
                            prefix: '%ab-%s',
                            sprite: 'svg-sprite.svg',
                            bust: false,
                            render: {
                                scss: {
                                    dest: 'svg-sprite.scss'
                                }
                            }
                        }
                    }
                }
            }
        },

        // copy over images not covered by jekyll
        copy: {
          main: {
            files: [
              {expand: true, src: ['_sass/svg/svg-sprite.svg'], flatten: true, dest: '_site/css/', filter: 'isFile'},
            ],
          },
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
            stylesheets: {
                files: ['_sass/**/*.{scss,sass}'],
                tasks: ['sass', 'shell:jekyllBuild']
            },
            scripts: {
                files: ['js/**/*.js'],
                tasks: ['concat', 'uglify', 'shell:jekyllBuild']
            },
            site: {
                files: ['**/*.html', '_layouts/*.html', '_posts/*.markdown', '_includes/*.html', '_config.yml', 'js/**/*.js', '_data/*.yml'],
                tasks: ['shell:jekyllBuild']
            },
            svgIcons: {
                files: ['svg/**/*.svg'],
                tasks: ['svg_sprite', 'shell:jekyllBuild']
            },
            options: {
                spawn : false,
                livereload: true
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
                ['svg_sprite', 'shell:jekyllServe'],
                'copy',
                'sass',
                'watch'
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
        'sass'
    ]);

    // Register the grunt clean task
    grunt.registerTask('clean', [
        'shell:jekyllClean'
    ]);

    // Register build as the default task fallback
    grunt.registerTask('default', 'build');

};
