module.exports = {
	serverConfig: {
		server: {
			baseDir: './dist/'
		},
		startPath: "/dist/index.html",
		host: 'localhost',
		ui: {
			port: 8080
		},
		reloadDelay: 100,
		timestamps: false,
		notify: false,
	},
	path: {
		baseDir: './dist/',
		build: {
			html: './dist/',
			css: './dist/assets/css/',
			js: './dist/assets/js/',
			vendors_js: './dist/assets/js/',
			images: './dist/assets/imgs/',
			favicon: './dist/favicon/',
			// fonts: './local/templates/html/fonts/',
		},
		src: {
			pug: './src/pug/*.pug',
			scss: './src/assets/scss/',
			js: './src/assets/js/',
			vendors_js: './src/assets/js/vendors/',
			images: './src/assets/imgs/**/*.{png,jpg,jpeg,gif,svg,webp}',
			sprites: './src/assets/svg/',
			favicon: './src/assets/favicon/*.{png,ico,xml,webmanifest}',
			// fonts: './src/assets/fonts/**/*',
		},
		watch: {
			pug: './src/pug/**/*.pug',
			scss: './src/assets/scss/**/*.{scss,sass}',
			js: './src/assets/js/*.js',
			vendors_js: './src/assets/js/vendors/*.js',
			images: './src/assets/imgs/**/*.{png,jpg,jpeg,gif,ico,svg,webp}',
			svg: './src/assets/svg/*.svg',
			favicon: './src/assets/favicon/*.{png,ico,xml,webmanifest}',
		}
	},

};
