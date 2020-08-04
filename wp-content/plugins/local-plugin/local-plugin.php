<?php
/**
 * Local plugin
 *
 * @package     OrbTest\LocalPlugin
 * @author      DX Team
 * @license     Proprietary
 *
 * @wordpress-plugin
 * Plugin Name: Local plugin
 * Plugin URI:  https://wpengine.com
 * Description: Local plugin that shows versioned code
 * Version:     0.1.0
 * Author:      DX Team
 * Author URI:  https://wpengine.com
 * Text Domain: orb-test
 * License:     Proprietary
 */

namespace OrbTest\LocalPlugin;

add_action(
	'wp_head',
	function() {
		require plugin_dir_path( __FILE__ ) . 'templates/head.php';
	}
);
