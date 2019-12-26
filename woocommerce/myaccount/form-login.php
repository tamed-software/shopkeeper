<?php
/**
 * Login Form
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version 	3.5.0
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
?>

<style>
	.entry-header .entry-title,
	.entry-header .page-title,
	form .page-title {
		display: none !important;
	}
	.account-forms-container {
	    display: inline-block;
	    max-width: 100%;
	    width: 390px !important;
	    text-align: left;
	    height: auto;
	    padding-left: 0px;
	}
	.woocommerce form .form-row label {

	    line-height: 2;
	    font-size: 14px !important;
	    font-weight: 400 !important;
	    text-transform: none !important;

	}
	.woocommerce form .form-row input.input-text, .woocommerce form .form-row textarea {
	    font-size: 14px;
	    font-weight: 500;
	    color: #828186;
	    border-bottom: 1px !important;
	    height: 25px;
	    border-style: solid !important;
	    border-color: #c7c5cc !important;

	}
	.woocommerce form .form-row label.inline {
	    font-size: 14px !important;
	    font-weight: 400 !important;
	    text-transform: none !important;
	}
	.login-register-container .lost-pass-link {
	    font-size: 14px !important;
	    font-weight: 500 !important;
	    text-transform: none !important;
	}
	.account-tab-link {
	    font-size: 12px !important;
	    color: #0090ff !important;
	    font-weight: 500 !important;
	}
	.account-tab-item.last {
	    margin-right: 0;
	    font-size: 12px !important;
	}
	.woocommerce-Button {
	    position: absolute;
	    width: 15% !important;
	    background-color: #0090ff !important;
	    color: #ffffff !important;
	    border: 4px !important;
	    border-style: solid !important;
	    border-radius: 4px !important;
	    border-color: #0090ff !important;
	    text-transform: none !important;
	    padding: 8px 20px !important;
	}
	.woocommerce-Button:hover {
	    position: absolute;
	    background-color: #097dd7  !important;
	    color: #ffffff !important;
	    border: 4px !important;
	    border-style: solid !important;
	    border-radius: 4px !important;
	    border-color: #097dd7  !important;
	    text-transform: none !important;
	    padding: 8px 20px !important;
	}
	.woocommerce form .form-row, .woocommerce-page form .form-row {
	    padding: 7px 12px 0 7px !important;
	    margin: 0;
	}
	.registro-form{
		border-style: none !important;
	}
	.input-form-registro{
		height: 24px !important;
		margin: -12px 0 !important;
	}
	.ur-frontend-form {
	    padding: 0px !important;

	}
	.woocommerce form .form-row label {
	    font-size: 13px !important;
	}
	.ur-frontend-form:last-child {
	    margin-bottom: 0;
	    margin-top: -24px;
	}
	.ur-frontend-form .ur-form-row .ur-form-grid {
	    padding: 0 0px !important;
	}
	.woocommerce button.button, .woocommerce input.button, .woocommerce-checkout a.button.wc-backward {
	    background-color: #0090ff !important;
		color: #fff !important;
		border-radius: 4px !important;
		padding: 10px 20px !important;
		float: none !important;
		left: 20% !important;
	}
	.woocommerce button.button:hover, .woocommerce input.button:hover, .woocommerce-checkout a.button.wc-backward:hover {
	    background-color: #0090ff !important;
		color: #fff !important;
		border-radius: 4px !important;
		padding: 11px 22px !important;
	}
	.ur-frontend-form .ur-form-row .ur-form-grid input[type="checkbox"], .ur-frontend-form .ur-form-row .ur-form-grid input[type="radio"] {
	    vertical-align: top !important;
	}
	.woocommerce form .form-row .required {
	   display: none !important;
	}
	span.description {
	    font-size: 13px !important;
	}
	.input-checkbox:after,
	input[type="checkbox"]:after {
	  border-radius: 2px;
	  z-index: 999; 
	}

	.input-checkbox:checked:after,
	input[type="checkbox"]:checked:after {
	  border-color: #0090ff !important; 
	  color: #0090ff !important;
	}

	.input-checkbox:checked:before,
	input[type="checkbox"]:checked:before {
	  content: "";
	  position: absolute;
	  top: 2px;
	  left: 6px;
	  display: table;
	  width: 5px;
	  height: 10px;
	  border: 2px solid #0090ff;
	  border-top-width: 0;
	  border-left-width: 0;
	  -webkit-transform: rotate(45deg);
	  -ms-transform: rotate(45deg);
	  transform: rotate(45deg); 
	}
	@media(max-width: 470px){
		.woo-slg-login-wrapper {
		    display: inline-block;
		    margin-right: 5px;
		    margin-bottom: 5px;
		    width: 46%;
		    margin-left: 5px;	
		}
		.column, .columns {
		    width: 100%  !important; 
		    float: left  !important; 
		    padding-right: 0px !important; 
		    padding-left: 0px !important; 
		    margin: 0 0px 0 -2px !important; 
		}
		.woocommerce-Button {

		    position: absolute;
		    width: 49% !important;
		}	
		.wp-block-image {
		    max-width: 58% !important;
		    margin-left: auto !important;
		    margin-right: auto !important;
		}
		.woo-slg-social-container .woo-slg-social-btn, .woo-slg-social-container .woo-slg-social-btn:hover, .woo-slg-social-container .woo-slg-social-btn:active, .woo-slg-social-container .woo-slg-social-btn:visited {
		    padding: 6px 0px 6px 26px  !important;
		    font-size: 10px !important;
		    margin-bottom: 5px  !important;
		    min-width: 165px  !important;
		    min-height: 34px  !important;
		    max-width: 188px  !important;
		}
		.stilo-titulo{
			font-size: 14px; font-weight: 400; text-align: center; padding: 10px 0 20px;
		}
		
	}
</style>

<div class="row">
	
	
	<div class="medium-10 medium-centered large-6 large-centered columns" style="margin-bottom: -116px;">
		
		<?php do_action( 'woocommerce_before_customer_login_form' ); ?>

		<div class="login-register-container">
				
					<div class="account-forms-container">
						
						
						<div class="account-forms">
							<form id="login" method="post" class="woocommerce-form woocommerce-form-login login login-form">
								<p class="stilo-titulo">Bienvenid@, inicia sesión para tener una mejor experiencia </p>
								<?php do_action( 'woocommerce_login_form_start' ); ?>
								
								    <p style="font-size: 14px; font-weight: 400; text-align: center;">----------------- o ingresa con tu cuenta --------------------</p>
								
									<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
									<label for="username"><?php _e( 'Username or email address', 'woocommerce' ); ?> <span class="required">*</span></label>
										<input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" value="<?php if ( ! empty( $_POST['username'] ) ) echo esc_attr( $_POST['username'] ); ?>" />
									</p>
									<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
										<label for="password"><?php _e( 'Password', 'woocommerce' ); ?> <span class="required">*</span></label>
										<input class="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" id="password" />
									</p>

									<?php do_action( 'woocommerce_login_form' ); ?>

									<p class="form-row form-footer">
										<?php wp_nonce_field( 'woocommerce-login' ); ?>
										<label for="rememberme" class="inline">
											<input class="woocommerce-Input woocommerce-Input--checkbox" name="rememberme" type="checkbox" id="rememberme" value="forever" /> <?php _e( 'Remember me', 'woocommerce' ); ?>
										</label>
										<button type="submit" class="woocommerce-Button" name="login" style="margin-left: 65px;margin-top: -5px; font-weight: 500" value="<?php esc_attr_e( 'Login', 'woocommerce' ); ?>"><?php esc_html_e( 'Login', 'woocommerce' ); ?></button>
										<br/><br/>
										
										
									</p>
									
									<?php do_action( 'woocommerce_login_form_end' ); ?>
									<a class="lost-pass-link" style="text-align: center; margin: 0 23px 9px 0px;" href="<?php echo esc_url( wp_lostpassword_url() ); ?>"><?php _e( 'Lost your password?', 'woocommerce' ); ?></a>
							</form>
							<p style="font-size: 12px; font-weight: 400; text-align: center; margin: 32px 0 18px;">Al ingresar aceptas las <a href="<?php echo home_url(); ?>/condiciones-de-compra">políticas de privacidad</a> de TAMED Store. </p>
							<ul class="account-tab-list">
								
								<?php if ( get_option( 'woocommerce_enable_myaccount_registration' ) === 'yes' ) : ?>
									
									
										 <a class="account-tab-link" href="#register" style="color: #0090ff; font-weight: 500; font-size: 12px; opacity: 1 !important;"><b style="font-size: 12px; color: #828186; text-align: center; font-weight: 400;">¿Nuevo en TAMED? </b><?php _e( 'Crear una cuenta', 'woocommerce' ); ?></a>
										
									
								<?php endif; ?>
						 
							</ul>
							
						<?php if ( get_option( 'woocommerce_enable_myaccount_registration' ) === 'yes' ) : ?>
								
							
							<form id="register" method="post" class="woocommerce-form woocommerce-form-register register register-form" <?php do_action( 'woocommerce_register_form_tag' ); ?> >
								<p style="font-size: 14px; font-weight: 400; text-align: center; margin: 10px 0 18px;">Bienvenid@, regístrate con tu red social o ingresa tus datos </p>
								<?php do_action( 'woocommerce_register_form_start' ); ?>

								<?php if ( 'no' === get_option( 'woocommerce_registration_generate_username' ) ) : ?>

									<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
										<label for="reg_username"><?php esc_html_e( 'Username', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
										<input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="reg_username" autocomplete="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" /><?php // @codingStandardsIgnoreLine ?>
									</p>

								<?php endif; ?>

								<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
									<label for="reg_email"><?php esc_html_e( 'Email address', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
									<input type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" autocomplete="email" value="<?php echo ( ! empty( $_POST['email'] ) ) ? esc_attr( wp_unslash( $_POST['email'] ) ) : ''; ?>" /><?php // @codingStandardsIgnoreLine ?>
								</p>

								<?php if ( 'no' === get_option( 'woocommerce_registration_generate_password' ) ) : ?>

									<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
										<label for="reg_password"><?php esc_html_e( 'Password', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
										<input type="password" class="woocommerce-Input woocommerce-Input--text input-text" name="password" id="reg_password" autocomplete="new-password" />
									</p>

								<?php else : ?>

									<p><?php esc_html_e( 'A password will be sent to your email address.', 'woocommerce' ); ?></p>

								<?php endif; ?>

								<?php do_action( 'woocommerce_register_form' ); ?>

								<p class="woocommerce-FormRow form-row">
									<?php wp_nonce_field( 'woocommerce-register', 'woocommerce-register-nonce' ); ?>
									<button type="submit" class="woocommerce-Button button" name="register" value="<?php esc_attr_e( 'Register', 'woocommerce' ); ?>"><?php esc_html_e( 'Register', 'woocommerce' ); ?></button>
								</p>

								<?php do_action( 'woocommerce_register_form_end' ); ?>

							</form><!-- .register-->

								
						<?php endif; ?>	
						</div><!-- .account-forms-->
							
					</div><!-- .account-forms-container-->
		</div><!-- .login-register-container-->
		
		<?php do_action( 'woocommerce_after_customer_login_form' ); ?>

	</div><!-- .large-6-->
</div><!-- .rows-->