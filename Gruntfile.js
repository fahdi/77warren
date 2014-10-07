module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
	    concat: {
            css: {
                src: [
                    'src/css/gridism.css',
					'src/css/normalize.css',
					'src/css/style.css',
					'src/css/font.css',
                ],
                dest: 'src/css/combined.css'
            },
            
             js1: {
                src: [
                    'src/shared/js/modernizr.com/Modernizr-2.5.3.forms.js',
                    'src/shared/js/html5Forms.js',
                ],
                dest: 'src/js/combined.js'
            },

            js2: {
                src: [
                    'src/js/jquery.js',
                    'src/js/animate.js',
                    'src/js/jquery.h5validate.js',

                ],
                dest: 'src/js/combined_appendix.js'
            }
                    },
        cssmin: {
            css: {
                src: 'src/css/combined.css',
                dest: 'dest/css/combined.min.css'
            }
        },
       uglify: {
            dist: {
                files: {
                    'dest/js/combined.js': ['src/js/combined.js'],
                    'dest/js/combined_appendix.js': ['src/js/combined_appendix.js'],
                    //'src/shared/js/modernizr.com/Modernizr-2.5.3.forms.js','src/shared/js/html5Forms.js': 'dest/js/combined.js',
                    //'src/js/jquery.js','src/js/animate.js','src/js/jquery.h5validate.js': 'dest/js/combined_appendix.js'
                },
            },
        },
        watch: {
			files: [ 'src/css/gridism.css','src/css/normalize.css','src/css/style.css','src/css/font.css','shared/js/modernizr.com/Modernizr-2.5.3.forms.js',
                    'shared/js/html5Forms.js', 'js/jquery.min.js',
                    'js/animate.js',
                    'js/jquery.h5validate.js'],
			tasks: ['concat', 'cssmin','uglify']
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


