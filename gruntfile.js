module.exports=function(grunt){
	require('time-grunt')(grunt);
	grunt.initConfig({
		jade: {
			// works
			coffee: {
				options: {
					filters: {
						sass: function(block){
							return require('node-sass').render(block);
						}
					}
				},
				src: 'source/coffee.jade',
				dest: 'build/coffee.html'
			},
			// broken
			sass: {
				options: {
					filters: {
						sass: function(block){
							return require('node-sass').render(block);
						}
					}
				},
				src: 'source/sass.jade',
				dest: 'build/sass.html'
			},
			// broken
			mammouth: {
				options: {
					filters: {
						mammouth: function(block){
							return require('mammouth').compile(block);
						}
					}
				},
				src: 'source/mammouth.jade',
				dest: 'build/mammouth.php'
			},
			// works
			styl: {
				options: {
					filters: {
						mammouth: function(block){
							return require('stylus').render(block);
						}
					}
				},
				src: 'source/styl.jade',
				dest: 'build/styl.html'
			}
		}
	});
	require('jit-grunt')(grunt);
	grunt.registerTask('default', 'jade');
};
