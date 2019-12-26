<?php
/**
 * Checkout coupon form
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     3.4.4
 */

defined( 'ABSPATH' ) || exit;

if ( ! wc_coupons_enabled() ) { // @codingStandardsIgnoreLine.
	return;
}
?>

<div class="checkout_coupon_box">

	<div class="shopkeeper_checkout_coupon">
		<?php echo apply_filters( 'woocommerce_checkout_coupon_message', __( '¿Tienes un cupón?', 'woocommerce' ) . ' <a href="#" class="showcoupon">' . __( 'Click acá e ingresa tu cupón', 'woocommerce' ) . '</a>' ); ?>
	</div>

	<div class="row">
		<form class="checkout_coupon woocommerce-form-coupon" method="post" style="display:none">
			<div class="checkout_coupon_inner">
				<input type="text" name="coupon_code" class="input-text" placeholder="<?php esc_attr_e( 'Cupón de descuento', 'woocommerce' ); ?>" id="coupon_code" value="" />
				<button type="submit" class="button" name="apply_coupon" value="<?php esc_attr_e( 'Apply cupón', 'woocommerce' ); ?>"><?php esc_html_e( 'Aplicar cupón', 'woocommerce' ); ?></button>
				<div class="clear"></div>
			</div>
		</form>
	</div><!-- .row-->

</div><!-- .checkout_coupon_box-->
