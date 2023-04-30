<?php
/**
 * Plugin Name:       Client Review
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Nazmul Huda
 * Author URI:        https://www.elementpack.pro/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       clr
 *
 * @package           @wordpress/create-block 
 */

 /**
  * @package Zero Configuration with @wordpress/create-block
  *  [clr] && [CLR] ===> Prefix
  */

// Stop Direct Access 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Blocks Final Class
 */

final class CLR_BLOCKS_CLASS {
	public function __construct() {

		// define constants
		$this->clr_define_constants();

		// block initialization
		add_action( 'init', [ $this, 'clr_blocks_init' ] );

		// blocks category
		if( version_compare( $GLOBALS['wp_version'], '5.7', '<' ) ) {
			add_filter( 'block_categories', [ $this, 'clr_register_block_category' ], 10, 2 );
		} else {
			add_filter( 'block_categories_all', [ $this, 'clr_register_block_category' ], 10, 2 );
		}

		// enqueue block assets
		add_action( 'enqueue_block_assets', [ $this, 'clr_external_libraries' ] );
	}

	/**
	 * Initialize the plugin
	 */

	public static function init(){
		static $instance = false; 
		if( ! $instance ) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Define the plugin constants
	 */
	private function clr_define_constants() {
		define( 'CLR_VERSION', '1.0.0' );
		define( 'CLR_URL', plugin_dir_url( __FILE__ ) );
		define( 'CLR_INC_URL', CLR_URL . 'includes/' );		
	}

	/**
	 * Blocks Registration 
	 */

	public function clr_register_block( $name, $options = array() ) {
		register_block_type( __DIR__ . '/build/blocks/' . $name, $options );
	 }

	/**
	 * Blocks Initialization
	*/
	public function clr_blocks_init() {
		// client review block
		$this->clr_register_block( 'client-review', [
			'render_callback' => [$this, 'clr_client_review'],
		] );

		// review item block
		$this->clr_register_block( 'review-item', [
			'render_callback' => [$this, 'clr_review_item'],
		] );
	}

	// client review callback
	public function clr_client_review($attributes, $content) {
		// require client review template
		
		// register inline style
		// $this->clr_register_inline_style(
		// 	'clr-review',
		// 	clr_cl
		// )

		return $content;
	}
	// client review item callback
	public function clr_review_item($attributes, $content) {
		// require client review template
		
		// register inline style
		// $this->clr_register_inline_style(
		// 	'clr-review',
		// 	clr_cl
		// )

		return $content;
	}
	/**
	 * Register Block Category
	 */

	public function clr_register_block_category( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug'  => 'clr',
					'title' => __( 'Client Review', 'clr' ),
				),
			),
			$categories,
		);
	}

	/**
	 * Enqueue Block Assets
	 */
	public function clr_external_libraries() {
		// enqueue JS
		wp_enqueue_script( 'clr-lib', CLR_INC_URL . 'js/plugin.js', array(), CLR_VERSION, true );
	}

}

/**
 * Kickoff
*/

CLR_BLOCKS_CLASS::init();
