<?php
	global $shopkeeper_theme_options, $woocommerce, $wp_version;
?>

<!DOCTYPE html>

<!--[if IE 9]>
<html class="ie ie9" <?php language_attributes(); ?>>
<![endif]-->

<html <?php language_attributes(); ?> ng-app>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="google-site-verification" content="ivb4RxXBCTCUtIi7e1uxB7RlZLsU-DVkxA5Sn7jAnkk" />
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <?php
                $url2= $_SERVER["REQUEST_URI"];
                $tienda2 = strpos($url2, "tienda");

                if ($tienda2 == 1){

                ?>
    <link rel="stylesheet" href="<?php echo home_url(); ?>/wp-content/themes/shopkeeper/css/segundo-menu-productos.css" type="text/css">
    <link rel="stylesheet" href="<?php echo home_url(); ?>/wp-content/themes/shopkeeper/css/productos-estilos.css" type="text/css">
	<?php } ?>
    <link rel="stylesheet" href="<?php echo home_url(); ?>/wp-content/themes/shopkeeper/css/stilos-boostrap.css" type="text/css">
    <!-- Custom Header JS Code -->
    <?php if ( (isset($shopkeeper_theme_options['header_js'])) && ($shopkeeper_theme_options['header_js'] != "") ) : ?>
        <?php echo $shopkeeper_theme_options['header_js']; ?>
    <?php endif; ?>


    <?php wp_head(); ?>
	<style>

		@font-face {
			font-family: 'Google Sans';
			font-style: italic;
			font-weight: 400;
			font-display: fallback;
			src: local('Google Sans Italic'), local('GoogleSans-Italic'), url(//fonts.gstatic.com/s/googlesans/v9/4UaErENHsxJlGDuGo1OIlL3L8phULjtH.woff2)format('woff2');
			unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: italic;
			font-weight: 400;
			font-display: fallback;
			src: local('Google Sans Italic'), local('GoogleSans-Italic'), url(//fonts.gstatic.com/s/googlesans/v9/4UaErENHsxJlGDuGo1OIlL3L8p9ULjtH.woff2)format('woff2');
			unicode-range: U+0370-03FF;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: italic;
			font-weight: 400;
			font-display: fallback;
			src: local('Google Sans Italic'), local('GoogleSans-Italic'), url(//fonts.gstatic.com/s/googlesans/v9/4UaErENHsxJlGDuGo1OIlL3L8pJULjtH.woff2)format('woff2');
			unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: italic;
			font-weight: 400;
			font-display: swap;
			font-display: fallback;
			src: local('Google Sans Italic'), local('GoogleSans-Italic'), url(//fonts.gstatic.com/s/googlesans/v9/4UaErENHsxJlGDuGo1OIlL3L8pxULg.woff2)format('woff2');
			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: italic;
			font-weight: 500;
			font-display: fallback;
			src: local('Google Sans Medium Italic'), local('GoogleSans-MediumItalic'), url(//fonts.gstatic.com/s/googlesans/v9/4UaZrENHsxJlGDuGo1OIlL3L-m93OwBmO24p.woff2)format('woff2');
			unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: italic;
			font-weight: 500;
			font-display: fallback;
			src: local('Google Sans Medium Italic'), local('GoogleSans-MediumItalic'), url(//fonts.gstatic.com/s/googlesans/v9/4UaZrENHsxJlGDuGo1OIlL3L-m93OwdmO24p.woff2)format('woff2');
			unicode-range: U+0370-03FF;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: italic;
			font-weight: 500;
			font-display: fallback;
			src: local('Google Sans Medium Italic'), local('GoogleSans-MediumItalic'), url(//fonts.gstatic.com/s/googlesans/v9/4UaZrENHsxJlGDuGo1OIlL3L-m93OwpmO24p.woff2)format('woff2');
			unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: italic;
			font-weight: 500;
			font-display: fallback;
			src: local('Google Sans Medium Italic'), local('GoogleSans-MediumItalic'), url(//fonts.gstatic.com/s/googlesans/v9/4UaZrENHsxJlGDuGo1OIlL3L-m93OwRmOw.woff2)format('woff2');
			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: italic;
			font-weight: 700;
			font-display: fallback;
			src: local('Google Sans Bold Italic'), local('GoogleSans-BoldItalic'), url(//fonts.gstatic.com/s/googlesans/v9/4UaZrENHsxJlGDuGo1OIlL3L-idxOwBmO24p.woff2)format('woff2');
			unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: italic;
			font-weight: 700;
			font-display: fallback;
			src: local('Google Sans Bold Italic'), local('GoogleSans-BoldItalic'), url(//fonts.gstatic.com/s/googlesans/v9/4UaZrENHsxJlGDuGo1OIlL3L-idxOwdmO24p.woff2)format('woff2');
			unicode-range: U+0370-03FF;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: italic;
			font-weight: 700;
			font-display: fallback;
			src: local('Google Sans Bold Italic'), local('GoogleSans-BoldItalic'), url(//fonts.gstatic.com/s/googlesans/v9/4UaZrENHsxJlGDuGo1OIlL3L-idxOwpmO24p.woff2)format('woff2');
			unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: italic;
			font-weight: 700;
			font-display: fallback;
			src: local('Google Sans Bold Italic'), local('GoogleSans-BoldItalic'), url(//fonts.gstatic.com/s/googlesans/v9/4UaZrENHsxJlGDuGo1OIlL3L-idxOwRmOw.woff2)format('woff2');
			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: normal;
			font-weight: 400;
			font-display: fallback;
			src: local('Google Sans Regular'), local('GoogleSans-Regular'), url(//fonts.gstatic.com/s/googlesans/v9/4UaGrENHsxJlGDuGo1OIlL3Kwp5MKg.woff2)format('woff2');
			unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: normal;
			font-weight: 400;
			font-display: fallback;
			src: local('Google Sans Regular'), local('GoogleSans-Regular'), url(//fonts.gstatic.com/s/googlesans/v9/4UaGrENHsxJlGDuGo1OIlL3Nwp5MKg.woff2)format('woff2');
			unicode-range: U+0370-03FF;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: normal;
			font-weight: 400;
			font-display: fallback;
			src: local('Google Sans Regular'), local('GoogleSans-Regular'), url(//fonts.gstatic.com/s/googlesans/v9/4UaGrENHsxJlGDuGo1OIlL3Awp5MKg.woff2)format('woff2');
			unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: normal;
			font-weight: 400;
			font-display: fallback;
			src: local('Google Sans Regular'), local('GoogleSans-Regular'), url(//fonts.gstatic.com/s/googlesans/v9/4UaGrENHsxJlGDuGo1OIlL3Owp4.woff2)format('woff2');
			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: normal;
			font-weight: 500;
			font-display: fallback;
			src: local('Google Sans Medium'), local('GoogleSans-Medium'), url(//fonts.gstatic.com/s/googlesans/v9/4UabrENHsxJlGDuGo1OIlLU94Yt3CwZ-Pw.woff2)format('woff2');
			unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: normal;
			font-weight: 500;
			font-display: fallback;
			src: local('Google Sans Medium'), local('GoogleSans-Medium'), url(//fonts.gstatic.com/s/googlesans/v9/4UabrENHsxJlGDuGo1OIlLU94YtwCwZ-Pw.woff2)format('woff2');
			unicode-range: U+0370-03FF;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: normal;
			font-weight: 500;
			font-display: fallback;
			src: local('Google Sans Medium'), local('GoogleSans-Medium'), url(//fonts.gstatic.com/s/googlesans/v9/4UabrENHsxJlGDuGo1OIlLU94Yt9CwZ-Pw.woff2)format('woff2');
			unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: normal;
			font-weight: 500;
			font-display: fallback;
			src: local('Google Sans Medium'), local('GoogleSans-Medium'), url(//fonts.gstatic.com/s/googlesans/v9/4UabrENHsxJlGDuGo1OIlLU94YtzCwY.woff2)format('woff2');
			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: normal;
			font-weight: 700;
			font-display: fallback;
			src: local('Google Sans Bold'), local('GoogleSans-Bold'), url(//fonts.gstatic.com/s/googlesans/v9/4UabrENHsxJlGDuGo1OIlLV154t3CwZ-Pw.woff2)format('woff2');
			unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: normal;
			font-weight: 700;
			font-display: fallback;
			src: local('Google Sans Bold'), local('GoogleSans-Bold'), url(//fonts.gstatic.com/s/googlesans/v9/4UabrENHsxJlGDuGo1OIlLV154twCwZ-Pw.woff2)format('woff2');
			unicode-range: U+0370-03FF;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: normal;
			font-weight: 700;
			font-display: fallback;
			src: local('Google Sans Bold'), local('GoogleSans-Bold'), url(//fonts.gstatic.com/s/googlesans/v9/4UabrENHsxJlGDuGo1OIlLV154t9CwZ-Pw.woff2)format('woff2');
			unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
		}

		@font-face {
			font-family: 'Google Sans';
			font-style: normal;
			font-weight: 700;
			font-display: fallback;
			src: local('Google Sans Bold'), local('GoogleSans-Bold'), url(//fonts.gstatic.com/s/googlesans/v9/4UabrENHsxJlGDuGo1OIlLV154tzCwY.woff2)format('woff2');
			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: italic;
			font-weight: 400;
			font-display: fallback;
			src: local('Google Sans Display Italic'), local('GoogleSansDisplay-Italic'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8HacM9Wef3EJPWRrHjgE4B6CnlZxHVDvvNpzfecZU.woff2)format('woff2');
			unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: italic;
			font-weight: 400;
			font-display: fallback;
			src: local('Google Sans Display Italic'), local('GoogleSansDisplay-Italic'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8HacM9Wef3EJPWRrHjgE4B6CnlZxHVDvvNoDfecZU.woff2)format('woff2');
			unicode-range: U+0370-03FF;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: italic;
			font-weight: 400;
			font-display: fallback;
			src: local('Google Sans Display Italic'), local('GoogleSansDisplay-Italic'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8HacM9Wef3EJPWRrHjgE4B6CnlZxHVDvvNrTfecZU.woff2)format('woff2');
			unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: italic;
			font-weight: 400;
			font-display: fallback;
			src: local('Google Sans Display Italic'), local('GoogleSansDisplay-Italic'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8HacM9Wef3EJPWRrHjgE4B6CnlZxHVDvvNozfe.woff2)format('woff2');
			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: italic;
			font-weight: 500;
			font-display: fallback;

			src: local('Google Sans Display Medium Italic'), local('GoogleSansDisplay-MediumItalic'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8KacM9Wef3EJPWRrHjgE4B6CnlZxHVDvvFUBTLSrR5DQA.woff2)format('woff2');
			unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: italic;
			font-weight: 500;
			font-display: fallback;
			src: local('Google Sans Display Medium Italic'), local('GoogleSansDisplay-MediumItalic'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8KacM9Wef3EJPWRrHjgE4B6CnlZxHVDvvFUBTLTbR5DQA.woff2)format('woff2');
			unicode-range: U+0370-03FF;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: italic;
			font-weight: 500;
			font-display: fallback;
			src: local('Google Sans Display Medium Italic'), local('GoogleSansDisplay-MediumItalic'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8KacM9Wef3EJPWRrHjgE4B6CnlZxHVDvvFUBTLQLR5DQA.woff2)format('woff2');
			unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: italic;
			font-weight: 500;
			font-display: fallback;
			src: local('Google Sans Display Medium Italic'), local('GoogleSansDisplay-MediumItalic'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8KacM9Wef3EJPWRrHjgE4B6CnlZxHVDvvFUBTLTrR5.woff2)format('woff2');
			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: italic;
			font-weight: 700;
			font-display: fallback;
			src: local('Google Sans Display Bold Italic'), local('GoogleSansDisplay-BoldItalic'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8KacM9Wef3EJPWRrHjgE4B6CnlZxHVDvvFGBLLSrR5DQA.woff2)format('woff2');
			unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: italic;
			font-weight: 700;
			font-display: fallback;
			src: local('Google Sans Display Bold Italic'), local('GoogleSansDisplay-BoldItalic'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8KacM9Wef3EJPWRrHjgE4B6CnlZxHVDvvFGBLLTbR5DQA.woff2)format('woff2');
			unicode-range: U+0370-03FF;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: italic;
			font-weight: 700;
			font-display: fallback;
			src: local('Google Sans Display Bold Italic'), local('GoogleSansDisplay-BoldItalic'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8KacM9Wef3EJPWRrHjgE4B6CnlZxHVDvvFGBLLQLR5DQA.woff2)format('woff2');
			unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: italic;
			font-weight: 700;
			font-display: fallback;
			src: local('Google Sans Display Bold Italic'), local('GoogleSansDisplay-BoldItalic'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8KacM9Wef3EJPWRrHjgE4B6CnlZxHVDvvFGBLLTrR5.woff2)format('woff2');
			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: normal;
			font-weight: 400;
			font-display: fallback;
			src: local('Google Sans Display Regular'), local('GoogleSansDisplay-Regular'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8FacM9Wef3EJPWRrHjgE4B6CnlZxHVDvr9oS_a.woff2)format('woff2');
			unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: normal;
			font-weight: 400;
			font-display: fallback;
			src: local('Google Sans Display Regular'), local('GoogleSansDisplay-Regular'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8FacM9Wef3EJPWRrHjgE4B6CnlZxHVDv39oS_a.woff2)format('woff2');
			unicode-range: U+0370-03FF;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: normal;
			font-weight: 400;
			font-display: fallback;
			src: local('Google Sans Display Regular'), local('GoogleSansDisplay-Regular'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8FacM9Wef3EJPWRrHjgE4B6CnlZxHVDvD9oS_a.woff2)format('woff2');
			unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: normal;
			font-weight: 400;
			font-display: fallback;
			src: local('Google Sans Display Regular'), local('GoogleSansDisplay-Regular'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8FacM9Wef3EJPWRrHjgE4B6CnlZxHVDv79oQ.woff2)format('woff2');
			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: normal;
			font-weight: 500;
			font-display: fallback;
			src: local('Google Sans Display Medium'), local('GoogleSansDisplay-Medium'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8IacM9Wef3EJPWRrHjgE4B6CnlZxHVBg3etBT7TKx9.woff2)format('woff2');
			unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: normal;
			font-weight: 500;
			font-display: fallback;
			src: local('Google Sans Display Medium'), local('GoogleSansDisplay-Medium'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8IacM9Wef3EJPWRrHjgE4B6CnlZxHVBg3etBP7TKx9.woff2)format('woff2');
			unicode-range: U+0370-03FF;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: normal;
			font-weight: 500;
			font-display: fallback;
			src: local('Google Sans Display Medium'), local('GoogleSansDisplay-Medium'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8IacM9Wef3EJPWRrHjgE4B6CnlZxHVBg3etB77TKx9.woff2)format('woff2');
			unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: normal;
			font-weight: 500;
			font-display: fallback;
			src: local('Google Sans Display Medium'), local('GoogleSansDisplay-Medium'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8IacM9Wef3EJPWRrHjgE4B6CnlZxHVBg3etBD7TA.woff2)format('woff2');
			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: normal;
			font-weight: 700;
			font-display: fallback;
			src: local('Google Sans Display Bold'), local('GoogleSansDisplay-Bold'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8IacM9Wef3EJPWRrHjgE4B6CnlZxHVBkXYtBT7TKx9.woff2)format('woff2');
			unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: normal;
			font-weight: 700;
			font-display: fallback;
			src: local('Google Sans Display Bold'), local('GoogleSansDisplay-Bold'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8IacM9Wef3EJPWRrHjgE4B6CnlZxHVBkXYtBP7TKx9.woff2)format('woff2');
			unicode-range: U+0370-03FF;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: normal;
			font-weight: 700;
			font-display: fallback;
			src: local('Google Sans Display Bold'), local('GoogleSansDisplay-Bold'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8IacM9Wef3EJPWRrHjgE4B6CnlZxHVBkXYtB77TKx9.woff2)format('woff2');
			unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
		}

		@font-face {
			font-family: 'Google Sans Display';
			font-style: normal;
			font-weight: 700;
			font-display: fallback;
			src: local('Google Sans Display Bold'), local('GoogleSansDisplay-Bold'), url(//fonts.gstatic.com/s/googlesansdisplay/v8/ea8IacM9Wef3EJPWRrHjgE4B6CnlZxHVBkXYtBD7TA.woff2)format('woff2');
			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
		}
		.logout_link{
				display: none !important;
		}
		.site-logo {
			height: 22px !important;
			margin-top: 7px;
		}
		#page_wrapper.transparent_header.transparency_dark .site-header, #page_wrapper.transparent_header.transparency_dark .site-header .main-navigation a, #page_wrapper.transparent_header.transparency_dark .site-header .site-tools ul li a, #page_wrapper.transparent_header.transparency_dark .site-header .shopping_bag_items_number, #page_wrapper.transparent_header.transparency_dark .site-header .wishlist_items_number, #page_wrapper.transparent_header.transparency_dark .site-header .site-title a, #page_wrapper.transparent_header.transparency_dark .site-header .widget_product_search .search-but-added, #page_wrapper.transparent_header.transparency_dark .site-header .widget_search .search-but-added {
			color: #808080!important;
			font-size: 14px !important;
			text-transform: capitalize !important;
			font-weight: 400 !important;
			font-family: "Google Sans",Arial,sans-serif !important;

		   padding: 0 4px !important;

		}
		#page_wrapper.transparent_header.transparency_dark .site-header, #page_wrapper.transparent_header.transparency_dark .site-header .main-navigation a, #page_wrapper.transparent_header.transparency_dark .site-header .site-tools ul li a, #page_wrapper.transparent_header.transparency_dark .site-header .shopping_bag_items_number, #page_wrapper.transparent_header.transparency_dark .site-header .wishlist_items_number, #page_wrapper.transparent_header.transparency_dark .site-header .site-title a, #page_wrapper.transparent_header.transparency_dark .site-header .widget_product_search .search-but-added, #page_wrapper.transparent_header.transparency_dark .site-header .widget_search .search-but-added {
			color: #808080 !important;
		}
		@media only screen and (min-width: 40.063em){
		.site-header-wrapper {
			padding: 9px 0px;
				}
		}

		.site-header, .default-navigation, .main-navigation .mega-menu > ul > li > a {
			font-size: 14px !important;
		}
		@media only screen and (max-width: 375px) and (min-width: 360px){
			.site-branding {
			width: 77px;
			margin-top: 2px;
			}
		}
		#site-top-bar {
				font-size: 14px !important;
		}

		body {
		  -webkit-font-smoothing: antialiased;
		font-family: "Google Sans",Arial,sans-serif !important;
		 text-rendering: optimizeLegibility;
				font-weight: 400;
		}
		p {
		  -webkit-font-smoothing: antialiased;
		  font-family: "Google Sans",Arial,sans-serif !important;
		  text-rendering: optimizeLegibility;
		}
		h1{
		font-family: "Google Sans",Arial,sans-serif !important;
		font-weight: 300 !important
		}
		h2{
		font-family: "Google Sans",Arial,sans-serif !important;
		font-weight: 300 !important
		}
		h3{
		font-family: "Google Sans",Arial,sans-serif !important;

		}
		h4{
		font-family: "Google Sans",Arial,sans-serif !important;
		font-weight: 300 !important
		}
		a {
		  -webkit-font-smoothing: antialiased;
		font-family: "Google Sans",Arial,sans-serif !important;
		}
		.shopkeeper-mini-cart .widget.woocommerce.widget_shopping_cart .widget_shopping_cart_content .cart_list.product_list_widget li.empty {
		    padding: 120px 0 100px!important;
		    color: #828186 !important;
		    font-size: 13px;
		    -webkit-transform: translateX(0);
		    -ms-transform: translateX(0);
		    transform: translateX(0);
		    text-align: center;
		    text-transform: uppercase;
		    font-weight: 700;
		}
		.shopkeeper-mini-cart .widget.woocommerce.widget_shopping_cart .widget_shopping_cart_content p.buttons .button {
				    margin-bottom: 7px !important;
				}

		.shopkeeper-mini-cart .widget.woocommerce.widget_shopping_cart .widget_shopping_cart_content p.buttons a.button.checkout.wc-forward {
					background-color: #f7f7f7 !important;
				    color: #0090ff !important;
				    border: 2px !important;
				    border-style: solid !important;
				    border-radius: 6px !important;
				    border-color: #0090ff !important;
				    padding: 10px 0 !important;

		}
		.shopkeeper-mini-cart .widget.woocommerce.widget_shopping_cart .widget_shopping_cart_content p.buttons a.button.checkout.wc-forward:hover {
					background-color: #0090ff !important;
				    color: #f7f7f7 !important;
				    border: 2px !important;
				    border-style: solid !important;
				    border-radius: 6px !important;
				    border-color: #0090ff !important;
		}
		.boton-azul {
					background-color: #0090ff !important;
				    color: #f7f7f7 !important;
				    border: 2px !important;
				    border-style: solid !important;
				    border-radius: 6px !important;
				    border-color: #0090ff !important;
				    padding: 10px 0 !important;

		}
		.boton-azul:hover {
					background-color: #f7f7f7 !important;
				    color: #0090ff !important;
				    border: 2px !important;
				    border-style: solid !important;
				    border-radius: 6px !important;
				    border-color: #0090ff !important;
		}
		.boton-gris {
					background-color: #828186 !important;
				    color: #ffffff !important;
				    border: 2px !important;
				    border-style: solid !important;
				    border-radius: 6px !important;
				    border-color: #828186 !important;
				    padding: 10px 0 !important;

		}
		.boton-gris:hover {
					background-color: #f7f7f7 !important;
				    color: #828186 !important;
				    border: 2px !important;
				    border-style: solid !important;
				    border-radius: 6px !important;
				    border-color: #828186 !important;
		}

			@media (max-width: 767px) {
			  .hidden-xs {
			    display: none !important;
			  }
			}
			@media (min-width: 768px) and (max-width: 991px) {
			  .hidden-sm {
			    display: none !important;
			  }
			}
			@media (min-width: 992px) and (max-width: 1199px) {
			  .hidden-md {
			    display: none !important;
			  }
			}
			@media (min-width: 1200px) {
			  .hidden-lg {
			    display: none !important;
			  }
			}
		<?php $url= $_SERVER["REQUEST_URI"];

		$categorias = strpos($url, "cl/product-category");
		$tienda = strpos($url, "cl/store");
		$producto = strpos($url, "cl/product");
		$busquedasoporte = strpos($url, "cl/?source=kb&s=");
		if ($categorias == 1){
			echo "categorias";
			?>

				@media(max-width:1024px){

					.large-centered, .large-centered:last-child:not(:first-child) {
								float: none;
								clear: both;
								margin: 100px 0px -100px -320px !important;
					}
					.shop_header.with_featured_img .shop_header_bkg {
					    background-position: 100% 0px;
					}
				}
				a.button.product_type_woosb.add_to_cart_button.ajax_add_to_cart {
				    visibility: hidden;
				}

				a.button.product_type_woosb.add_to_cart_button.ajax_add_to_cart:before {
				    content: 'AÑADIR AL CARRITO';
				    visibility: visible;
				}
								@media(max-width:1200px){

					.large-centered, .large-centered:last-child:not(:first-child) {
								float: none;
								clear: both;
								margin: 100px 0px -100px -320px !important;
					}
					.shop_header.with_featured_img .shop_header_bkg {
					    background-position: 100% 0px;
					}
				}
				@media(max-width:1358px){

					.large-centered, .large-centered:last-child:not(:first-child) {
								float: none;
								clear: both;
								margin: 100px 0px -100px -320px !important;
					}
					.shop_header.with_featured_img .shop_header_bkg {
					    background-position: 100% 0px;
					}
				}
				@media(max-width:1558px){

					.large-centered, .large-centered:last-child:not(:first-child) {
								float: none;
								clear: both;
								margin: 122px 0px -105px -320px !important;
					}
					.shop_header.with_featured_img .shop_header_bkg {
					    background-position: 100% 0px;
					}
				}
				@media(max-width:470px){

					.large-centered, .large-centered:last-child:not(:first-child) {
					    float: none;
					    clear: both;
					    margin: 0px 0 0 0 !important;
					    padding-bottom: 33px;
					}
					.shop_header.with_featured_img {
				    padding-bottom: 100px !important;
					}
					.shop_header.with_featured_img .shop_header_bkg {
							background-position: 100% 0px;
					}
				}

			<?php





		}elseif ($tienda == 1){
			echo "tienda";
				?>
				@media screen and (min-width:471px){

					.contenedorq {
					    position: relative;
					    display: block;
					    text-align: center;
					    margin: -84px -63px -92px;
					}
				}
				a.button.product_type_woosb.add_to_cart_button.ajax_add_to_cart {
				    visibility: hidden;
				}

				a.button.product_type_woosb.add_to_cart_button.ajax_add_to_cart:before {
				    content: 'AÑADIR AL CARRITO';
				    visibility: visible;
				}
				@media screen and (min-width:1024px){

					.large-centered, .large-centered:last-child:not(:first-child) {
								float: none;
								clear: both;
								margin: 0px !important;
					}
					.shop_header.with_featured_img .shop_header_bkg {
					    background-position: 100% 0px;
					}
				}
				@media screen and (min-width:1200px){

					.large-centered, .large-centered:last-child:not(:first-child) {
								float: none;
								clear: both;
								margin: 0px !important;
					}
					.shop_header.with_featured_img .shop_header_bkg {
					    background-position: 100% 0px;
					}
				}
				@media screen and (min-width:1358px){

					.large-centered, .large-centered:last-child:not(:first-child) {
								float: none;
								clear: both;
								margin: 0px !important;
					}
					.shop_header.with_featured_img .shop_header_bkg {
					    background-position: 100% 0px;
					}
				}
				@media screen and (min-width:1558px){

					.large-centered, .large-centered:last-child:not(:first-child) {
								float: none;
								clear: both;
								margin: 0px !important;
					}
					.shop_header.with_featured_img .shop_header_bkg {
					    background-position: 100% 0px;
					}
				}
				<?php

			}elseif ($producto == 1){
			echo "producto";
				?>

                        .owl-carousel .owl-item {
                           float: left;
                           width: 225px !important;
                        }

			#page_wrapper.transparent_header .content-area, #page_wrapper.sticky_header .content-area {
			    padding-top: calc(123px + 0px) !important;
			}
			a.button.product_type_woosb.add_to_cart_button.ajax_add_to_cart {
					visibility: hidden;
			}

			a.button.product_type_woosb.add_to_cart_button.ajax_add_to_cart:before {
					content: 'AÑADIR AL CARRITO';
					visibility: visible;
			}
			@media(max-width: 470px){
				.xlarge-6 {
			    	width: 100% !important;
				}
				.mailster-form.mailster-form-5 .mailster-trminos-y-condiciones-wrapper label {
						color: #828186 !important;
						font-size: 9px !important;
						text-transform: none !important;
				}
			}
			.product_infos .cart .single_add_to_cart_button {
			    padding: 10px 0px 10px !important;
			}
			.single_add_to_cart_button {
			    position: absolute;
			    width: 59% !important;
			    top: 98% !important;
			    background-color: #0090ff !important;
			    color: #ffffff !important;
			    border: 4px !important;
			    border-style: solid !important;
			    border-radius: 6px !important;
			    border-color: #0090ff !important;
			    text-transform: none !important;
			    padding: 0;
			}
			.single_add_to_cart_button:hover {

			   	position: absolute;
			    width: 60% !important;
			    top: 98% !important;
			    background-color: #078bf1 !important;
			    color: #ffffff !important;
			    border: 4px !important;
			    border-style: solid !important;
			    border-radius: 6px !important;
			    border-color: #078bf1 !important;
			    text-transform: none !important;
			    box-shadow: 1px 0px 3px #828186 !important;
			}
			.woocommerce div.product form.cart {
			    margin-bottom: 0px !important;
			}
			.yith-wcwl-add-to-wishlist:after, .bg-image-wrapper.no-image, .site-search .spin:before, .site-search .spin:after {
			    background-color: transparent !important;
			}
			.product_layout_classic .product_infos .yith-wcwl-add-to-wishlist {
			    margin: 15px -21px 0px 17px;
			    height: auto;
			    position: relative;
			    height: auto;
			    display: inline-block;
			}
			.product_thumbnail_wrapper {
			    background-color: #f7f7f7;
			}
			@media(max-width: 470px){

				#page_wrapper.transparent_header .content-area, #page_wrapper.sticky_header .content-area {
				    padding-top: calc(0px + 0px) !important;
				}
				.product_layout_classic .product_infos .product_summary_top .woocommerce-breadcrumb {
				    margin: 10px 0 -26px !important;
				}
				.woocommerce #content div.product .product_title, .woocommerce div.product .product_title, .woocommerce-page #content div.product .product_title, .woocommerce-page div.product .product_title {
				    font-size: 25.101px !important;
				}
				.woocommerce-product-details__short-description {
				    margin: -40px 0 40px 0 !important;
				}
				#tab-product_info {
				    margin: 0 0px 0 -20px;
				}
				.titulo-mobile{
					margin: -38px 0px 48px;
				}
				.product_layout_classic .product_infos form.cart .button {
				    min-width: auto;
				    width: -webkit-fit-content;
				    width: -moz-fit-content;
				    width: fit-content;
				    float: left !important;
				    text-align: center;
				    padding: 11px 6px !important;
				}
				.product_layout_classic .product:not(.product-type-grouped) .product_content_wrapper .product_infos .yith-wcwl-add-to-wishlist {
				    margin: 13px 0px 0 12px !important;
				}
				.add_to_wishlist:before, .product_infos .yith-wcwl-wishlistaddedbrowse:before, .product_infos .yith-wcwl-wishlistexistsbrowse:before, .products .yith-wcwl-wishlistaddedbrowse a:before, .products .yith-wcwl-wishlistexistsbrowse a:before {
				    font-size: 24px !important;

				}
				.woocommerce .products ul h3, .woocommerce ul.products h3, .woocommerce-page .products ul h3, .woocommerce-page ul.products h3 {
				    font-size: 13px !important;
				    font-weight: normal;
				    line-height: 1.5;
				    padding: 0px 0px 0px 0;
				    margin: 0;
				    display: inline-block;
				    text-transform: none;
				    -webkit-transition: color .3s ease;
				    -moz-transition: color .3s ease;
				    -o-transition: color .3s ease;
				    -ms-transition: color .3s ease;
				    transition: color .3s ease;
				    /* text-align: center; */
				}
				.woocommerce ul.products-grid, .woocommerce-page ul.products-grid {
				    margin: 0px -20px 16px !important;
				}
				.woocommerce ul.products-grid li {
				    padding-bottom: 0px !important;
				    margin: 0px 4px 0px !important;
				    width: 186px !important;
				}

			}
			.woocommerce ul.products-grid, .woocommerce-page ul.products-grid {
				    margin: 0px -104px 16px !important;
			}
			.woocommerce ul.products-grid li {
				    padding-bottom: 0px !important;
				    padding: 0px 0px;
				    margin: 0 6px;
				    width: 166px;
			}
			.woocommerce .button.getbowtied_product_quick_view_button {
			    display: none;
			}
			.woocommerce .products ul h3, .woocommerce ul.products h3, .woocommerce-page .products ul h3, .woocommerce-page ul.products h3 {
				    font-size: 13px !important;
				    font-weight: normal;
				    line-height: 1.5;
				    padding: 0px 0px 0px 0;
				    margin: 0;
				    display: inline-block;
				    text-transform: none;
				    -webkit-transition: color .3s ease;
				    -moz-transition: color .3s ease;
				    -o-transition: color .3s ease;
				    -ms-transition: color .3s ease;
				    transition: color .3s ease;
				    /* text-align: center; */
				}

			.product_thumbnail.with_second_image {
			    background-color: #f5f5f5;
			}
			.small-up-2 > .column {
			    background-color: #f5f5f5 !important;
			}
			.small-up-2 > .column:hover {
			    box-shadow: 0px 1px 2px 3px #e9e9e9;
			}
			.product_after_shop_loop_buttons {
			    display: none !important;
			}
			.yith-wcwl-add-to-wishlist {
			    display: none;
			}

			<?php


		}elseif ($busquedasoporte){
			?>
			.mkb-content-main.mkb-content-main--has-sidebar {
			    width: 100% !important;
			}
			.mkb-sidebar-right .mkb-sidebar {
			    display: none;
			}
			.mkb-root h1, .mkb-root h2, .mkb-root h3, .mkb-root h4, .mkb-root h5, .mkb-root h6 {
					padding: 110px 0 0 !important;
					font-size: 25px !important;
					font-weight: 500 !important;
			}
			@media(max-width: 480px){
				.mkb-root h1, .mkb-root h2, .mkb-root h3, .mkb-root h4, .mkb-root h5, .mkb-root h6 {
				    padding: 50px 0 0 !important;
				    font-size: 18px !important;
				    font-weight: 500 !important;
				}
			}
			<?php

		}else {
				 echo "todo";

			?> @media print, screen and (min-width: 1040px){
					.large-centered, .large-centered:last-child:not(:first-child) {
					    margin: 0px !important;
					}
				}
				.single_add_to_cart_button {
				    background-color: transparent !important;
				    color: #0090ff !important;
				    border: 4px !important;
				    border-style: solid !important;
				    border-radius: 6px !important;
				    border-color: #0090ff !important;
				}
				.single_add_to_cart_button:hover {

				    background-color: #0090ff !important;
				    color: #fff !important;
				    border: 4px !important;
				    border-style: solid !important;
				    border-radius: 6px !important;
				    border-color: #0090ff !important;
				}
			<?php
		}

		?>

		.woocommerce form .form-row input.input-text, .woocommerce form .form-row textarea {
			border-radius: 0px !important;
		    border-top: 0px !important;
		    border-left: 0px !important;
		    border-right: 0px !important;
		    border-bottom: 2px !important;
		    border-style: solid !important;
		    border-color: #c7c5cc !important;
		}
		#billing_country_field .select2-selection--single, #billing_state_field .select2-selection--single, #calc_shipping_country_field .select2-selection--single, #calc_shipping_state_field .select2-selection--single, #shipping_country_field .select2-selection--single, #shipping_state_field .select2-selection--single, .woocommerce-widget-layered-nav-dropdown .select2-selection--single {
			border-radius: 0px !important;
		    border-top: 0px !important;
		    border-left: 0px !important;
		    border-right: 0px !important;
		    border-bottom: 2px !important;
		    border-style: solid !important;
		    border-color: #c7c5cc !important;
		}

				.sticky2 {
				  position: fixed;
				  top: 13.8%;
				}
				.sticky3 {
				  position: fixed;
				  top: 7.8%;
				}

				@media(max-width:1023px){

					.sticky2 {
					  position: fixed;
					  top: 50.98px;
					}
					.sticky3 {
					  position: fixed;
					  top: 50.98px;
					}
				}
				@media(min-width:1024px){

					.sticky2 {
					  position: fixed;
					  top: 121.98px;
					}
					.sticky3 {
					  position: fixed;
					  top: 82.98px;
					}
				}
		<?php
		$blog = strpos($url, "cl/smart-blog");
		$blogcategory = strpos($url, "cl/category/");
		$blogcategory1 = strpos($url, "cl/ideas-para-tu-hogar/");
		$blogcategory2 = strpos($url, "cl/mundo-inmobiliario/");
		$blogcategory3 = strpos($url, "cl/trucos-tecnicos/");

		if ($blog == 1 || $blogcategory == 1 || $blogcategory1 == 1 || $blogcategory2 == 1 || $blogcategory3 == 1)  {		?>
				@media(min-width: 471px){
					body.blog .large-12.columns.with-sidebar .blog-post-container, body.category .large-12.columns.with-sidebar .blog-post-container {
					    width: 75%;
					    float: left;
					}
					.blog-sidebar {
					    position: inherit;
					    width: 25%;
					    float: left;
					}
				}
				input[type="text"]:focus, input[type="password"]:focus, input[type="date"]:focus, input[type="datetime"]:focus, input[type="datetime-local"]:focus, input[type="month"]:focus, input[type="week"]:focus, input[type="email"]:focus, input[type="number"]:focus, input[type="search"]:focus, input[type="tel"]:focus, input[type="time"]:focus, input[type="url"]:focus, textarea:focus, select:focus, #coupon_code, .chosen-container-single .chosen-single:focus, .select2-dropdown, .woocommerce .product_infos .quantity input.qty, .woocommerce #content .product_infos .quantity input.qty, .woocommerce-page .product_infos .quantity input.qty, .woocommerce-page #content .product_infos .quantity input.qty, .post_tags a, .wpb_widgetised_column .tagcloud a, .coupon_code_wrapper, .woocommerce ul.digital-downloads:before, .woocommerce-page ul.digital-downloads:before, .woocommerce ul.digital-downloads li:after, .woocommerce-page ul.digital-downloads li:after, .widget_search .search-form, .woocommerce .widget_layered_nav ul li a:before, .woocommerce-page .widget_layered_nav ul li a:before, .widget_layered_nav ul li a:before, .woocommerce .widget_product_categories ul li a:before, .woocommerce-page .widget_product_categories ul li a:before, .widget_product_categories ul li a:before, .woocommerce-cart.woocommerce-page #content .quantity input.qty, .cd-quick-view .cd-item-info .product_infos .cart .quantity input.qty, .cd-quick-view .cd-item-info .product_infos .cart .woocommerce .quantity .qty, .woocommerce .order_review_wrapper table.shop_table tfoot tr:first-child td, .woocommerce-page .order_review_wrapper table.shop_table tfoot tr:first-child td, .woocommerce .order_review_wrapper table.shop_table tfoot tr:first-child th, .woocommerce-page .order_review_wrapper table.shop_table tfoot tr:first-child th, .select2-container .select2-dropdown--below {
				    border-color: #ddd !important;
				}
				.comments_section textarea, .comments_section input[type="text"], .comments_section input[type="password"], .comments_section input[type="date"], .comments_section input[type="datetime"], .comments_section input[type="datetime-local"], .comments_section input[type="month"], .comments_section input[type="week"], .comments_section input[type="email"], .comments_section input[type="number"], .comments_section input[type="search"], .comments_section input[type="tel"], .comments_section input[type="time"], .comments_section input[type="url"] {
				    background-color: #fff;
				    border-color: #ddd !important;
				}
				[class^="spk-icon-"], [class*=" spk-icon-"] {
				    font-family: "Shopkeeper-Icon-Font" !important;
				    speak: none;
				    margin-left: -15px;
				    font-style: normal;
				    font-weight: normal;
				    font-variant: normal;
				    text-transform: none;
				    line-height: 1;
				    -webkit-font-smoothing: antialiased;
				    -moz-osx-font-smoothing: grayscale;
				}

				.wpb_widgetised_column .widget {
				    border-bottom-width: 0px;
				    border-bottom-style: solid;
				    margin-bottom: 0;
				    padding-top: 10px;
				    padding-bottom: 2px;
				}
				.content-area {
				    padding: 20px 0 0 0;
				}
				@media only screen and (min-width: 63.9375em){
				    #page_wrapper.transparent_header .content-area, #page_wrapper.sticky_header .content-area {
				        padding-top: calc(1px + 85px);
				    }
				}
				@media only screen and (max-width: 40.063em){
				    .content-area {
				        padding: 1px 0 0 0;
				    }
				}
				#section-newsletter {
				  padding: 3rem 0;
				}

				#section-newsletter .btn.btn-primary {

				}



				#section-newsletter .form-group input {
				  width: 100%;
				  transition: all 250ms ease;
				  border-radius: 4px;
				  box-shadow: none;
				  background-color: #fff;
				}


				.widget form>div {
				    padding-top: 1px;
				}
				.form_sidebar_subscribe {
				    border: 1px solid #cecece;
				    border-radius: 4px;
				    padding: 18px 8px;
				}

				.form_sidebar_subscribe p {
				  font-weight: 300;
				}

				.form_sidebar_subscribe .form-group input {
				  width: 100%;
				  transition: all 250ms ease;
				  border-radius: 4px;
				  box-shadow: none;
				  background-color: #fff;
				}

				.form_sidebar_subscribe .form-group input:active,
				.form_sidebar_subscribe .form-group input:focus {
				  border-color: #0090ff;
				}

				.form_sidebar_subscribe .form-group {
				  margin-bottom: 1rem !important;
				}

				.form_sidebar_subscribe input[type="submit"] {
				  width: 100%;
				  border: 1px solid #0090ff;
				}
				.form_sidebar_subscribe input[type="submit"]:hover {
				  background-color: transparent;
				  border: 1px solid #0090ff;
				  color: #0090ff;
				}
				.boton-activar {
				    cursor: pointer;
				    font-size: 16px !important;
				    background-color: #0090ff !important;
				    border: 1px solid #0090ff !important;
				    border-radius: 4px !important;
				    color: white !important;
				    text-transform: none !important;
				    text-decoration: none !important;
				    transition: .3s all !important;
				    padding: 6px 30px !important;
				}
				.boton-activar:hover {
				  background-color: #fff !important;
				  color: #0090ff !important;
				  border: 3px solid #0090ff !important;
				  border-radius: 5px !important;
				}
				.entry-title-archive {
				    font-size: 24px !important;
				}
				.titulo-blog-post{
				    font-size: 17px;
				    font-weight: 400;
				    text-align: justify;
				    color: #434244;
				}

				.entry-content-archive {
				    padding: 0 37px 20px;
				    text-align: justify;
				}
				.entry-title-archive .thumbnail_archive_container {
				    border-radius: 13px 13px 0 0;
				}
				.blog-posts2{
				    display: contents;
				}
				.blog-post-inner {
				    display: inline-block;
				    height: 520px;

				}
				.blog-posts .blog-post-inner {
				    padding: 0 12px 10px;
				}
				.post_meta_archive {
				    padding: 0px 37px 0;
				}
				.widget h3, .wpb_wrapper .widget h3, .widget-area .widget-title {
				   font-weight: 500 !important;
				    text-transform: none !important;
				}.widget.widget_recent_entries ul li a {
				    font-weight: 400 !important;
				}
				.list-centered li a {
				    text-transform: none !important;
				}
				.page-title.blog-listing, .woocommerce .page-title, .page-title, .single .entry-title, .woocommerce-cart .page-title, .woocommerce-checkout .page-title, .woocommerce-account .page-title {
				    font-size: 34px !important;
				}
				.entry-header-page {
				    margin-bottom: 9px !important;
				}

				.transparent_header .single-post-header.with-thumb .title {
				    padding-top: 200px !important;
				}
				.single-post-header.with-thumb {
				    margin-top: -85px;
				    margin-bottom: 40px !important;
				    position: relative;
				    max-height: 460px;
				}
				.single-post-header-bkg {
				    width: 100%;
				    height: 100%;
				    opacity: 0;
				    background-size: cover;
				    background-position: 50% -50px !important;
				}
				.single-post-header.with-thumb .entry-title, .single-post-header.with-thumb .post_meta, .single-post-header.with-thumb .post_meta a {
				    color: #fff !important;
				}
				.nav-next .nav-next-title, .nav-previous .nav-previous-title {
				    color: #828186 !important;
				}
				@media(max-width: 470px){

					.single-post-header.with-thumb {
					    margin-top: -91px;
					    margin-bottom: 0px!important;
					    position: relative;
					    max-height: 616px;
					}
					.entry-content.blog-single {
					    margin-top: -14px;
					}
					.single-post-header-overlay {
					    height: 92%;
					}
					.single-post .with-sidebar .large-9 {
					    padding-right: 10px;
					}
				    .entry-header-page {
				        margin-bottom: 0px;
				    }
				    .blog-posts2{
				        display: inline-block;
				    }
				    .blog-posts .blog-post-inner {
					    padding: 0 0px 0px;
					}
				    h2, .woocommerce h2, .woocommerce-page h2 {
				        font-size: 24px;
				        color: #828186!important;
				        padding: 8px 0px 3px !important;
				        font-weight: 450!important;
				    }
				    .entry-content-archive {
				        padding: 0 0px 20px;
				        text-align: justify;
				    }
				    .blog-post-inner {
				        display: inline-block;
				        height: 520px;
				    }
				}

			<?php } ?>

				#pop-up-newsletter {
				  margin-top: 4vh;
				}
				.blocker {
				    position: fixed;
				    top: 0;
				    right: 0;
				    bottom: 0;
				    left: 0;
				    width: 100%;
				    height: 100%;
				    overflow: auto;
				    z-index: 10000 !important;
				}
				.modal {
				    max-width: 650px !important;
				    box-sizing: border-box !important;
				    width: 90% !important;
				    background: #fff !important;
				    padding: 0px 0px 10px !important;
				    text-align: center !important;
				    z-index: 999 !important;
				}
				@media(max-width: 470px){
                    .woocommerce button.button, .woocommerce input.button, .woocommerce-checkout a.button.wc-backward {
                        left: 0% !important;
                            }
                    #checkout_timeline.horizontal.style2 li .timeline-wrapper {
                        padding: 10px 10px 10px 36px;
                    }
                    .checkout_coupon_box + .woocommerce-checkout, form.checkout.woocommerce-checkout {
                            max-width: 92% !important;
                    }
                    #checkout_timeline.horizontal.style2 li {
                        display: table-cell !important;
                        width: 100%;
                        border-left-width: 1px;
                    }
                    #checkout_timeline.style2 {
                        display: block !important;
                        overflow: auto !important;
                    }
                    #checkout_timeline {
                        display: block !important;
                    }
                    #checkout_timeline.style2 li .timeline-wrapper .timeline-step {
					    border-width: 1px;
					    border-style: solid;
					    position: absolute;
					    left: 9px !important;
					}
                }


	</style>

	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->


	<!-- Global site tag (gtag.js) - Google Ads: 852004901 -->



</head>



<body <?php body_class(); ?> >
	<!-- Global site tag (gtag) - Google Ads: 852004901 -->

	<?php
	if ( (isset($shopkeeper_theme_options['smooth_transition_between_pages'])) && ($shopkeeper_theme_options['smooth_transition_between_pages'] == "1" ) ) {
		include(locate_template('header-loader.php'));
	}
	?>

	<div id="st-container" class="st-container">
	<?php

                if ($tienda2 == 1){

                ?>
                    <div class="sticky-magnet">
                        <div class="bar-wrap2">
                            <div jsname="Qq0F0c" class="sticky-component2 onscreen" style="height: 56px;">
                                <div class="sticky-stacky2" style="transform: translate3d(0px, 0px, 0px);">
                                    <div class="v2" pdp-bar="">

                                        <div>
                                            <div class="hidden-xs hidden-sm bar-container2 background-white">
                                                <div class="content-wrapper2 flex-center">
                                                    <div jsname="r4nke" class="bar-component2 title-price-container2">
                                                        <h1 class="title-text2 header-text-3" itemprop="name" id="nombre-producto" style="text-transform: capitalize;"></h1>
                                                        <div jsname="g89bGd" class="hidden-lg hidden-md subpage-menu2 hidden" jscontroller="sw3wpc" jsaction="aLn7Wb:Af65Pc">
                                                            <div role="listbox" aria-expanded="false" class="quantumWizMenuPaperselectEl subpage-dropdown" jscontroller="YwHGTd" jsaction="click:cOuCgd(LgbsSe); keydown:I481le; keypress:Kr2w4b; mousedown:UX7yZ(LgbsSe),npT2md(preventDefault=true); mouseup:lbsD7e(LgbsSe); mouseleave:JywGue; touchstart:p6p2H(LgbsSe); touchmove:FwuNnf; touchend:yfqBxc(LgbsSe|preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd(LgbsSe); focus:AHmuwe; blur:O22p3e;b5SvAb:TvD9Pc;" jsshadow="">
                                                                <div jsname="LgbsSe" role="presentation">
                                                                    <select class="quantumWizMenuPaperselectOptionList quantumWizMenuPaperselectFlexButtonWidth" jsname="d9BH4c" role="presentation">
                                                                        <option class="quantumWizMenuPaperselectOption preselected exportOption isSelected" jsname="wQNmvb" jsaction="" data-value="/product/google_home_mini" aria-selected="true" role="option" tabindex="0">
                                                                            <div class="quantumWizMenuPaperselectRipple exportInk" jsname="ksKsZd"></div><span jsslot="" class="quantumWizMenuPaperselectContent exportContent">General</span></option>



                                                                        <option class="quantumWizMenuPaperselectOption exportOption" jsname="wQNmvb" jsaction="" data-value="/product/google_home_mini_specs" aria-selected="false" role="option" tabindex="-1">
                                                                            <div class="quantumWizMenuPaperselectRipple exportInk" jsname="ksKsZd"></div><span jsslot="" class="quantumWizMenuPaperselectContent exportContent">Especificaciones</span></option>
                                                                        <option class="quantumWizMenuPaperselectOption exportOption" jsname="wQNmvb" jsaction="" data-value="/product/google_home_mini_setup" aria-selected="false" role="option" tabindex="-1">
                                                                            <div class="quantumWizMenuPaperselectRipple exportInk" jsname="ksKsZd"></div><span jsslot="" class="quantumWizMenuPaperselectContent exportContent">Configuraci�n</span></option>
                                                                    </select>
                                                                    <div class="quantumWizMenuPaperselectDropDown exportDropDown" role="presentation"></div>
                                                                </div>
                                                                <div class="exportSelectPopup quantumWizMenuPaperselectPopup" jsaction="click:dPTK6c(wQNmvb); mousedown:uYU8jb(wQNmvb); mouseup:LVEdXd(wQNmvb); mouseover:nfXz1e(wQNmvb); touchstart:Rh2fre(wQNmvb); touchmove:hvFWtf(wQNmvb); touchend:MkF9r(wQNmvb|preventMouseEvents=true)" role="presentation" jsname="V68bde" style="display:none;"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="bar-component2 subpage-link2s-container">
                                                        <div jsname="NewBAd" class="subpage-link2s-list" style="">
                                                            <a class="subpage-link2 selected" href="/product/google_home_mini">General</a>


                                                            <a class="subpage-link2" href="/product/google_home_mini_specs">Especificaciones</a>
                                                            <a class="subpage-link2" href="/product/google_home_mini_setup">Configuraci�n</a>
                                                        </div>
                                                    </div>
                                                    <div jsname="qCDwBb" class="bar-component2 price-and-button-container2">
                                                        <div class="description-text">
                                                            <div class="is-was-price-text2"><span aria-label="Is $49."><span class="is-price" id="precio-producto"></span><span class="footnote-pointer" jsaction="bBt2Lc"></span></span>
                                                                <div class="additional-message2"><span class="additional-message2-text2" id="estado-producto"></span><sup class="footnote-pointer"></sup></div>
                                                            </div>
                                                        </div>
                                                        <div class="button-wrap2 pdp-bar-button-wrap2">
                                                            <div id="comprar-boton">

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="hidden-lg hidden-md bar-container2 background-white">
                                                <div class="content-wrapper2 flex-center">
                                                    <div class="bar-component2 title-price-container2">
                                                        <h1 class="title-text2 header-text-3" itemprop="name" id="nombre-producto2" style="text-transform: capitalize;"></h1></div>
                                                    <div class="bar-component2">
                                                        <div jscontroller="sw3wpc" class="subpage-menu2" jsaction="aLn7Wb:Af65Pc">
                                                            <div role="listbox" aria-expanded="false" class="quantumWizMenuPaperselectEl subpage-dropdown" jscontroller="YwHGTd" jsaction="click:cOuCgd(LgbsSe); keydown:I481le; keypress:Kr2w4b; mousedown:UX7yZ(LgbsSe),npT2md(preventDefault=true); mouseup:lbsD7e(LgbsSe); mouseleave:JywGue; touchstart:p6p2H(LgbsSe); touchmove:FwuNnf; touchend:yfqBxc(LgbsSe|preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd(LgbsSe); focus:AHmuwe; blur:O22p3e;b5SvAb:TvD9Pc;" jsshadow="">
                                                                <div jsname="LgbsSe" role="presentation">
                                                                    <select class="quantumWizMenuPaperselectOptionList quantumWizMenuPaperselectFlexButtonWidth" jsname="d9BH4c" role="presentation">
                                                                        <option class="quantumWizMenuPaperselectOption preselected exportOption isSelected" jsname="wQNmvb" jsaction="" data-value="/product/google_home_mini" aria-selected="true" role="option" tabindex="0">
                                                                            <div class="quantumWizMenuPaperselectRipple exportInk" jsname="ksKsZd"></div><span jsslot="" class="quantumWizMenuPaperselectContent exportContent">General</span></option>
                                                                        <option class="quantumWizMenuPaperselectOption exportOption" jsname="wQNmvb" jsaction="" data-value="/product/google_home_mini_specs" aria-selected="false" role="option" tabindex="-1">
                                                                            <div class="quantumWizMenuPaperselectRipple exportInk" jsname="ksKsZd"></div><span jsslot="" class="quantumWizMenuPaperselectContent exportContent">Especificaciones</span></option>
                                                                        <option class="quantumWizMenuPaperselectOption exportOption" jsname="wQNmvb" jsaction="" data-value="/product/google_home_mini_setup" aria-selected="false" role="option" tabindex="-1">
                                                                            <div class="quantumWizMenuPaperselectRipple exportInk" jsname="ksKsZd"></div><span jsslot="" class="quantumWizMenuPaperselectContent exportContent">Configuraci�n</span></option>
                                                                    </select>

                                                                </div>
                                                                <div class="exportSelectPopup quantumWizMenuPaperselectPopup isActive" jsaction="click:dPTK6c(wQNmvb); mousedown:uYU8jb(wQNmvb); mouseup:LVEdXd(wQNmvb); mouseover:nfXz1e(wQNmvb); touchstart:Rh2fre(wQNmvb); touchmove:hvFWtf(wQNmvb); touchend:MkF9r(wQNmvb|preventMouseEvents=true)" role="presentation" jsname="V68bde" style="min-width: 107px; top: 0px; display: none;" aria-hidden="true"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                        <div class="hidden-lg  menu-bottom-mobile">
                            <div class="content-wrapper2 flex-center">
                                <div class="description-text">
                                    <div class="is-was-price-text2"><span ><span class="is-price" id="precio-producto2"></span><span class="footnote-pointer" jsaction="bBt2Lc"></span></span>
                                        <div class="additional-message2"><span class="additional-message2-text2" id="estado-producto2"></span><sup class="footnote-pointer"></sup></div>
                                    </div>
                                </div>

                                <div class="button-wrap2 pdp-bar-button-wrap2">
                                    <div id="comprar-boton2">

                                    </div>
                                </div>
                            </div>
                            <style type="text/css">
                                @media (max-width: 990px){
                                    .siq_bR {
                                        bottom: 91px !important;
                                        right: 10px;
                                    }
                                }
                            </style>
                        </div>



                <?php } ?>
        <div class="st-content">

            <?php

			$header_sticky_class = "";
			$header_transparency_class = "";
			$transparency_scheme = "";

			if ( (isset($shopkeeper_theme_options['sticky_header'])) && ($shopkeeper_theme_options['sticky_header'] == "1" ) ) {
				$header_sticky_class = "sticky_header";
			}

			if ( (isset($shopkeeper_theme_options['main_header_transparency'])) && ($shopkeeper_theme_options['main_header_transparency'] == "1" ) ) {
				$header_transparency_class = "transparent_header";
			}

			if ( (isset($shopkeeper_theme_options['main_header_transparency_scheme'])) ) {
				$transparency_scheme = $shopkeeper_theme_options['main_header_transparency_scheme'];
			}

			$page_id = "";
			if ( is_single() || is_page() ) {
				$page_id = get_the_ID();
			} else if ( is_home() ) {
				$page_id = get_option('page_for_posts');
			} else if (class_exists('WooCommerce') && is_shop()) {
				$page_id = get_option( 'woocommerce_shop_page_id' );
			}

			if ( (get_post_meta($page_id, 'page_header_transparency', true)) && (get_post_meta($page_id, 'page_header_transparency', true) != "inherit") ) {
				$header_transparency_class = "transparent_header";
				$transparency_scheme = get_post_meta( $page_id, 'page_header_transparency', true );
			}

			if ( (get_post_meta($page_id, 'page_header_transparency', true)) && (get_post_meta($page_id, 'page_header_transparency', true) == "no_transparency") ) {
				$header_transparency_class = "";
				$transparency_scheme = "";
			}

			if (class_exists('WooCommerce'))
            {
                if ( is_product_category() && is_woocommerce() )
                {
                	if ( $shopkeeper_theme_options['shop_category_header_transparency_scheme'] == 'inherit' )
                	{
                		// do nothing, inherit
                	}
                	else if ( $shopkeeper_theme_options['shop_category_header_transparency_scheme'] == 'no_transparency' )
                	{
                		$header_transparency_class = "";
						$transparency_scheme = "";
                	}
                	else
                	{
                        $header_transparency_class = "transparent_header";
                        $transparency_scheme = $shopkeeper_theme_options['shop_category_header_transparency_scheme'];
                	}
                }
            }

			?>

            <div id="page_wrapper" class="<?php echo $header_sticky_class; ?> <?php echo $header_transparency_class; ?> <?php echo $transparency_scheme; ?>">

                <?php do_action( 'before' ); ?>

                <?php

				$header_max_width_style = "100%";
				if ( (isset($shopkeeper_theme_options['header_width'])) && ($shopkeeper_theme_options['header_width'] == "custom") ) {
					$header_max_width_style = $shopkeeper_theme_options['header_max_width']."px";
				} else {
					$header_max_width_style = "100%";
				}

				?>

                <div class="top-headers-wrapper">

                    <?php if ( (isset($shopkeeper_theme_options['top_bar_switch'])) && ($shopkeeper_theme_options['top_bar_switch'] == "1" ) ) : ?>
                        <?php include(locate_template('header-topbar.php')); ?>
                    <?php endif; ?>

                    <?php if ( isset($shopkeeper_theme_options['main_header_layout']) ) : ?>

						<?php if ( $shopkeeper_theme_options['main_header_layout'] == "1" || $shopkeeper_theme_options['main_header_layout'] == "11" ) : ?>
							<?php include(locate_template('header-default.php')); ?>
                        <?php elseif ( $shopkeeper_theme_options['main_header_layout'] == "2" || $shopkeeper_theme_options['main_header_layout'] == "22" ) : ?>
                        	<?php include(locate_template('header-centered-2menus.php')); ?>
                        <?php elseif ( $shopkeeper_theme_options['main_header_layout'] == "3" ) : ?>
                        	<?php include(locate_template('header-centered-menu-under.php')); ?>
						<?php endif; ?>

                    <?php else : ?>

                    	<?php include(locate_template('header-default.php')); ?>

                    <?php endif; ?>

                </div>
