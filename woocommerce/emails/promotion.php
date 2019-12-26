<?php
/**
 * Customer promotional email
 *
 * @author Your Inspiration Themes
 * @package YITH WooCommerce Wishlist
 * @version 2.0.13
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly ?>

	<p style="color: #828186;"><?php echo $email_content ?></p>

<?php do_action( 'woocommerce_email_footer', $email ); ?>