module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
	    concat: {
            css: {
                src: [
                    'css/gridism.css',
					'css/normalize.css',
					'css/style.css',
					'css/font.css',
                ],
                dest: 'css/combined.css'
            },
            
             js1: {
                src: [
                    'shared/js/modernizr.com/Modernizr-2.5.3.forms.js',
                    'shared/js/html5Forms.js',
                ],
                dest: 'js/combined.js'
            },

            js2: {
                src: [
                    'js/jquery.min.js',
                    'js/animate.js',
                    'js/jquery.h5validate.js',

                ],
                dest: 'js/combined_appendix.js'
            }
        },
        cssmin: {
            css: {
                src: 'css/combined.css',
                dest: 'css/combined.min.css'
            }
        },
       /* uglify: {
            js: {
                files: {
                    'js/combined.js': ['js/combined.min.js']
                }
            }
        },*/
        watch: {
			files: ['css/*.*', 'js/*.js'],
			tasks: ['concat', 'cssmin']
	   }
	});

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', [ 'concat:css', 'cssmin:css', 'concat:js', 'uglify:js' ]);
    grunt.loadNpmTasks('grunt-dev-update');
};


