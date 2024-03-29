/**
 * Laravel Mix configuration file.
 *
 * Laravel Mix is a layer built on top of WordPress that simplifies much of the
 * complexity of building out a Webpack configuration file. Use this file to
 * configure how your assets are handled in the build process.
 *
 * @link https://laravel.com/docs/5.6/mix
 *
 * @package   Exhale
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright 2018 Justin Tadlock
 * @link      https://themehybrid.com/themes/exhale
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 */

// Import required packages.
const mix = require( 'laravel-mix' );
const ImageminPlugin = require( 'imagemin-webpack-plugin' ).default;
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const imageminMozjpeg = require( 'imagemin-mozjpeg' );

/*
 * -----------------------------------------------------------------------------
 * Theme Export Process
 * -----------------------------------------------------------------------------
 * Configure the export process in `webpack.mix.export.js`. This bit of code
 * should remain at the top of the file here so that it bails early when the
 * `export` command is run.
 * -----------------------------------------------------------------------------
 */

if ( process.env.export ) {
	const exportTheme = require( './webpack.mix.export.js' );
	return;
}

/*
 * -----------------------------------------------------------------------------
 * Build Process
 * -----------------------------------------------------------------------------
 * The section below handles processing, compiling, transpiling, and combining
 * all of the theme's assets into their final location. This is the meat of the
 * build process.
 * -----------------------------------------------------------------------------
 */

/*
 * Sets the development path to assets. By default, this is the `/resources`
 * folder in the theme.
 */
const devPath = 'assets';

/*
 * Sets the path to the generated assets. By default, this is the `/public` folder
 * in the theme. If doing something custom, make sure to change this everywhere.
 */
mix.setPublicPath( 'public' );

/*
 * Set Laravel Mix options.
 *
 * @link https://laravel.com/docs/5.6/mix#postcss
 * @link https://laravel.com/docs/5.6/mix#url-processing
 */
mix.options( {
	postCss: [ require( 'postcss-preset-env' )() ],
	processCssUrls: false,
} );

/*
 * Builds sources maps for assets.
 *
 * @link https://laravel.com/docs/5.6/mix#css-source-maps
 */
mix.sourceMaps();

/*
 * Versioning and cache busting. Append a unique hash for production assets. If
 * you only want versioned assets in production, do a conditional check for
 * `mix.inProduction()`.
 *
 * @link https://laravel.com/docs/5.6/mix#versioning-and-cache-busting
 */
if (mix.inProduction()) {
	mix.version();
}

/*
 * Compile JavaScript.
 *
 * @link https://laravel.com/docs/5.6/mix#working-with-scripts
 */
mix.js( `${ devPath }/js/project.js`, 'js' )
	.js( `${ devPath }/js/modernizr-custom.js`, 'js' )
	.extract();


//mix.react( `${devPath}/js/editor.js`, 'js' );


/*
 * Compile CSS. Mix supports Sass, Less, Stylus, and plain CSS, and has functions
 * for each of them.
 *
 * @link https://laravel.com/docs/5.6/mix#working-with-stylesheets
 * @link https://laravel.com/docs/5.6/mix#sass
 * @link https://github.com/sass/node-sass#options
 */

// Sass configuration. [compressed, expanded ]
var sassConfig = {
	outputStyle: 'compressed',
	indentType: 'tab',
	indentWidth: 1
};

var sassEditorConfig = {
	outputStyle: 'compressed',
	indentType: 'tab',
	indentWidth: 1
};

// Compile SASS/CSS.
mix.sass( `${ devPath }/scss/style.scss`, 'css', sassConfig );
mix.sass( `${ devPath }/scss/login.scss`, 'css', sassEditorConfig );
//mix.sass( `${ devPath }/scss/editor.scss`, 'css', sassEditorConfig );

/*
 * Add custom Webpack configuration.
 *
 * Laravel Mix doesn't currently minimize images while using its `.copy()`
 * function, so we're using the `CopyWebpackPlugin` for processing and copying
 * images into the public folder.
 *
 
 * @link https://laravel.com/docs/5.6/mix#custom-webpack-configuration
 * @link https://webpack.js.org/configuration/
 */
mix.webpackConfig( {
	stats: 'minimal',
	devtool: mix.inProduction() ? false : 'source-map',
	performance: { hints: false },
	externals: { jquery: 'jQuery' },
	plugins: [
		// @link https://github.com/webpack-contrib/copy-webpack-plugin
		new CopyWebpackPlugin( [
			{ from: `${ devPath }/images`, to: 'images' },
			{ from: `${ devPath }/svg`, to: 'svg' },
            { from: `${ devPath }/favicon`, to: 'favicon' },
			{ from: `${ devPath }/languages`, to: 'languages', ignore: [ '*.pot', '*.po' ] },
		] ),
		// @link https://github.com/Klathmon/imagemin-webpack-plugin
		new ImageminPlugin( {
			test: /\.(jpe?g|png|gif|svg)$/i,
			disable: process.env.NODE_ENV !== 'production',
			optipng: { optimizationLevel: 3 },
			gifsicle: { optimizationLevel: 3 },
			pngquant: {
				quality: '65-90',
				speed: 4,
			},
			svgo: {
				plugins: [
					{ cleanupIDs: false },
					{ removeViewBox: false },
					{ removeUnknownsAndDefaults: false },
				],
			},
			plugins: [
				// @link https://github.com/imagemin/imagemin-mozjpeg
				imageminMozjpeg( { quality: 75 } ),
			],
		} )
	],
} );


if ( process.env.sync ) {

	mix.browserSync( {
		proxy: 'http://accesslaser.local',
        port: 3000,
		notify: true,
		open: true,
		files: [
			'public/**/*.css',
			'**/*.php',
		],
	} );
}
