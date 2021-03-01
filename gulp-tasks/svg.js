module.exports = function (gulp, options, plugins) {

	return function (cb) {

		var svg_arr = [];

		gulp.src(options.path.src.sprites+'*.svg')
			.pipe(plugins.plumber())
			.pipe(plugins.svgmin({
				js2svg: {
					pretty: true
				}
			}))
			.pipe(plugins.cheerio({
				run: function ($, el) {
					$('[fill]').removeAttr('fill');
					// $('[stroke]').removeAttr('stroke');
					$('[style]').removeAttr('style');
				},
				parserOptions: {xmlMode: true}
			}))
			.pipe(plugins.tap(file => {
				const file_input_path = file.path;
				const file_dir = plugins.path.dirname(file_input_path);
				const file_name = plugins.path.basename(file_input_path).replace('.svg', '');
				svg_arr.push(file_name)
			}))
			.pipe(plugins.replace('&gt;', '>'))
			.pipe(plugins.svgSprite({
				mode: {
					symbol: {
						sprite: "../sprite.svg"
					}
				}
			}))
			.pipe(plugins.plumber.stop())
			.pipe(gulp.dest(options.path.build.images))
			.on('end', function () {
				const svg_arr_string = '["' + svg_arr.join('", "') + '"]';
				plugins.fs.writeFileSync(options.path.src.sprites + 'svg.pug', "- var $svg = " + svg_arr_string)
			});

		cb();
	};
};
