<?php global $page_id, $woocommerce, $shopkeeper_theme_options; ?>

    <?php

					$page_footer_option = "on";

if (get_post_meta( $page_id, 'footer_meta_box_check', true )) {
	$page_footer_option = get_post_meta( $page_id, 'footer_meta_box_check', true );
}

if (class_exists('WooCommerce')) {
	if (is_shop() && get_post_meta( get_option( 'woocommerce_shop_page_id' ), 'footer_meta_box_check', true )) {
		$page_footer_option = get_post_meta( get_option( 'woocommerce_shop_page_id' ), 'footer_meta_box_check', true );
	}
}

?>

        <?php if ( $page_footer_option == "on" ) : ?>
            <style>
                .footer-container .container {
                    background-color: #f7f7f7;
                    border: 0
                }

                .footer-container .footer-list-1>.footer-item>a:hover,
                .footer-container .footer-list-2>.footer-item>a:hover {
                    color: #448aff;
                    cursor: pointer;
                    -webkit-transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
                }

                .footer-container .footer-list-1>.footer-item>a:focus,
                .footer-container .footer-list-2>.footer-item>a:focus {
                    color: #448aff
                }

                @media (min-width:760px) and (max-width:1143px) {
                    .footer-container .logo {
                        height: 30px;
                        width: 140px
                    }
                }

                .footer-container .footer-list-1,
                .footer-container .footer-list-2,
                .footer-container .social-icons,
                .footer-container .bottom-items {
                    list-style: none;
                    margin: 0;
                    padding: 0
                }

                .footer-container .main-footer {
                    width: 100%
                }

                @media (min-width:760px) {
                    .footer-container .container {
                        padding: 0 24px
                    }
                    .footer-container .main-footer {
                        display: table;
                        padding: 96px 0 72px;
                        table-layout: fixed;
                        width: 100%
                    }
                    .footer-container .main-footer-inner {
                        display: table-row;
                        width: 100%
                    }
                    .footer-container .logo-container,
                    .footer-container .footer-items-1,
                    .footer-container .footer-items-2 {
                        display: table-cell
                    }
                    .footer-container .logo-container {
                        vertical-align: top
                    }
                    .footer-container .footer-items-2 {
                        background-clip: padding-box;
                        border-left: 16px solid transparent;
                        box-sizing: content-box
                    }
                    .footer-container .footer-items-1,
                    .footer-container .footer-items-2 {
                        vertical-align: top;
                        width: 164px
                    }
                }

                @media (min-width:1024px) {
                    .footer-container .footer-bottom-main {
                        border-top: 1px solid #eee;
                        height: 52px;
                        margin: 0 auto;
                        padding: 16px 0;
                        position: relative;
                        width: 100%
                    }
                    .footer-container .social-icons {
                        position: absolute
                    }
                    .footer-container .bottom-items {
                        display: -webkit-flex;
                        display: flex;
                        -webkit-justify-content: flex-end;
                        justify-content: flex-end
                    }
                    .footer-container .bottom-items>.footer-item {
                        display: inline-block;
                        margin-left: 40px;
                        white-space: nowrap
                    }
                    .footer-container .bottom-items>.footer-item:first-child {
                        margin-left: 0
                    }
                    .footer-container .legal-text-footer {
                        text-align: right
                    }
                }

                @media (min-width:760px) and (max-width:1143px) {
                    .footer-container .footer-items-1,
                    .footer-container .footer-items-2 {
                        width: 152px
                    }
                    .footer-container .footer-items-2 {
                        border-left: 8px solid transparent
                    }
                }

                @media (max-width:759px) {
                    .footer-container .container {
                        padding: 0 16px
                    }
                    .footer-container .logo-container {
                        margin-bottom: 40px
                    }
                    .footer-container .main-footer {
                        padding-bottom: 20px;
                        padding-top: 40px
                    }
                    .footer-container .footer-items-1,
                    .footer-container .footer-items-2,
                    .footer-container .footer-items-both {
                        width: 160px
                    }
                    .footer-container .footer-items-1 {
                        margin-bottom: 24px
                    }
                    .footer-container .footer-items-both {
                        display: inline-block;
                        margin-bottom: 20px;
                        vertical-align: top
                    }
                }

                @media (max-width:1023px) {
                    .footer-container .footer-bottom-main {
                        border-top: 1px solid #eee;
                        padding: 16px 0 24px
                    }
                    .footer-container .social-icons {
                        margin-bottom: 16px
                    }
                    .footer-container .bottom-items>.footer-item {
                        display: inline-block;
                        margin-top: 8px;
                        vertical-align: top
                    }
                    .footer-container .bottom-items>.footer-item:not(:last-child) {
                        margin-right: 16px
                    }
                }

                .footer-container .footer-list-1>.footer-item,
                .footer-container .footer-list-2>.footer-item {
                    font-size: 14px;
                    font-family: "Google Sans", Arial, sans-serif;
                    font-weight: 400;
                    line-height: 22px;
                    margin-top: 24px
                }

                .footer-container .footer-list-1>.footer-item:first-child,
                .footer-container .footer-list-2>.footer-item:first-child {
                    margin-top: 0
                }

                .footer-container .bottom-items>.footer-item {
                    font-size: 11px;
                    font-family: "Google Sans", Arial, sans-serif;
                    font-weight: 400;
                    line-height: 16px
                }

                .footer-container .footer-list-1>.footer-item>a,
                .footer-container .footer-list-2>.footer-item>a {
                    color: #3c4043;
                    -webkit-transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
                }

                .footer-container .bottom-items>.footer-item>a {
                    color: #3c4043
                }

                .footer-container .footer-logo {
                    background-clip: padding-box;
                    border-right: 16px solid transparent;
                    display: table-cell;
                    vertical-align: top;
                    width: 24px
                }

                .footer-container .footer-logo.svg-icon-component {
                    fill: #3c4043
                }

                .footer-container .footer-logo.country-flag {
                    border-right: 12px solid transparent;
                    height: 18px;
                    width: 24px
                }

                .footer-container .footer-logo-item-text {
                    vertical-align: top
                }

                .footer-container .social-icon {
                    display: inline-block
                }

                .footer-container .social-icon+.social-icon {
                    margin-left: 16px
                }

                .footer-container .social-icon>a>.svg-icon-component {
                    height: 20px;
                    width: 20px
                }

                .footer-container .social-icon>a>.svg-icon-component g {
                    fill: #3c4043
                }

                .footer-container .legal-text-footer {
                    color: #3c4043;
                    font-size: 11px;
                    font-family: "Google Sans", Arial, sans-serif;
                    font-weight: 400;
                    line-height: 11px;
                    margin-top: 10px
                }

                .footer-container .legal-text-footer>a {
                    color: inherit
                }

                @media (min-width:1144px) {
                    .footer-container.facelift .main-footer,
                    .footer-container.facelift .footer-bottom {
                        padding-left: 72px;
                        padding-right: 72px
                    }
                }

                @media (min-width:760px) and (max-width:1143px) {
                    .footer-container.facelift .main-footer,
                    .footer-container.facelift .footer-bottom {
                        padding-left: 32px;
                        padding-right: 32px
                    }
                }

                @media (max-width:759px) {
                    .footer-container.facelift .main-footer,
                    .footer-container.facelift .footer-bottom {
                        padding-left: 8px;
                        padding-right: 8px
                    }
                }

                @media (max-width:759px) {
                    #footer-bottom-padding.expanded {
                        height: 88px
                    }
                }

                .footer-container .logo {
                    background-image: url("<?php echo home_url()?>/wp-content/uploads/2019/08/Logo-TAMED-Color-1.webp");
                    background-size: cover;
                    display: block;
                    width: 124px;
                    height: 32px
                }

                @media (min-width:760px) {
                    .footer-container .logo {
                        background-image: url("<?php echo home_url()?>/wp-content/uploads/2019/08/Logo-TAMED-Color-1.webp");
                        width: 124px;
                        height: 32px
                    }
                }

                @media (max-width:760px) and (-webkit-min-device-pixel-ratio:2),
                (max-width:760px) and (min-resolution:192dpi) {
                    .footer-container .logo {
                        background-image: url("<?php echo home_url()?>/wp-content/uploads/2019/03/tamed-logo-2017.svg");
                    }
                }

                @media (min-width:760px) and (-webkit-min-device-pixel-ratio:2),
                (min-width:760px) and (min-resolution:192dpi) {
                    .footer-container .logo {
                        background-image: url("<?php echo home_url()?>/wp-content/uploads/2019/03/tamed-logo-2017.svg");
                    }
                }

                .country-flags .country-flags {
                    background-size: 100% 100%;
                    height: 18px;
                    width: 24px
                }

                .country-flags .cl-flag {
                    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAkBAMAAAA9a6Q5AAAAG1BMV…IlcNpBvMSoq8iQSMMByJAwxgGIkhjSrirDLp7O0I5dogIAUXDnDwdhbAgAAAAASUVORK5CYII=);
                }
            </style>
            <div class="footer-container country-picker-enabled facelift">

                <div class="container">
                    <div class="row">
                        <div class="main-footer">
                            <div class="main-footer-inner">
                                <div class="logo-container">
                                    <div class="logo"></div>
                                </div>
                                <div class="footer-items-1">
                                    <ul class="footer-list-1">

                                        <li class="footer-item"><a class="id-no-nav" onclick="Redireccionar('<?php echo home_url(); ?>/product-category/apple-homekit/')" target="_blank">Apple homekit</a></li>
                                        <li class="footer-item"><a class="id-no-nav" onclick="Redireccionar('<?php echo home_url(); ?>/product-category/asistentes-del-hogar/)" target="_blank">Asistentes del hogar</a></li>
                                        <li class="footer-item"><a class="id-no-nav" onclick="Redireccionar('<?php echo home_url(); ?>/product-category/conectividad/')" target="_blank">Conectividad</a></li>

                                        <li class="footer-item"><a class="id-no-nav" onclick="Redireccionar('<?php echo home_url(); ?>/product-category/entretenimiento/')">Entretenimiento</a></li>
                                        <li class="footer-item"><a class="id-no-nav" onclick="Redireccionar('<?php echo home_url(); ?>/product-category/iluminacion/')" target="_blank">Energía & Iluminación</a></li>
                                        <li class="footer-item"><a class="id-no-nav" onclick="Redireccionar('<?php echo home_url(); ?>/product-category/kits/')" target="_blank">Kits</a></li>
                                        <li class="footer-item"><a class="id-no-nav" onclick="Redireccionar('<?php echo home_url(); ?>/product-category/seguridad/')" target="_blank">Seguridad</a></li>
                                    </ul>
                                </div>
                                <div class="footer-items-2">
                                    <ul class="footer-list-2">
                                        <li class="footer-item"><a class="id-no-nav" onclick="Redireccionar('<?php echo home_url(); ?>/contactenos/')" target="_blank">Contacto</a></li>
                                        <li class="footer-item"><a onclick="Redireccionar('<?php echo home_url(); ?>/portafolio/')">Proyectos</a></li>
                                        <li class="footer-item"><a class="id-no-nav" onclick="Redireccionar('<?php echo home_url(); ?>/soporte/')" target="_blank">Soporte</a></li>
                                        <li class="footer-item"><a class="id-no-nav" onclick="Redireccionar('<?php echo home_url(); ?>/poliza-de-seguro/')" target="_blank">Póliza de seguro</a></li>
                                        <li class="footer-item"><a class="id-no-nav" onclick="Redireccionar('<?php echo home_url(); ?>/trabaja-con-nosotros/')" target="_blank">Trabaja con nosotros</a></li>
                                        <li class="footer-item"><a class="id-no-nav" href="mailto:press@tamed.global" target="_blank">Prensa</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="footer-bottom">
                            <div class="footer-bottom-main">
                                <ul class="social-icons">
                                    <li class="social-icon">
                                        <a href="https://twitter.com/TAMED_Global/" target="_blank" title="Twitter">
                                            <div class="svg-icon-component" data-icon-size="DEFAULT" svg-icon="">
                                                <svg viewBox="0 0 48 48">
                                                    <g class="gray-fill">
                                                        <path d="M40.9331436,11.1940288 C42.810084,10.0689342 44.2513785,8.28745345 44.9301304,6.16481389 C43.1737706,7.20644208 41.2282743,7.96298797 39.1576594,8.37075777 C37.4993523,6.6040254 35.1368481,5.5 32.5223241,5.5 C27.501861,5.5 23.4316182,9.57008073 23.4316182,14.5902197 C23.4316182,15.3026824 23.5121673,15.9965069 23.6671068,16.661807 C16.1120205,16.2827237 9.4138018,12.6636857 4.93027879,7.16397957 C4.1478016,8.50657299 3.69951412,10.0681239 3.69951412,11.7340483 C3.69951412,14.8877815 5.30449997,17.6702107 7.74366355,19.3003175 C6.25342374,19.253155 4.85183659,18.8442507 3.62609611,18.1633918 C3.62544783,18.2013163 3.62544783,18.2394029 3.62544783,18.2776516 C3.62544783,22.6820841 6.75892216,26.3562262 10.9174935,27.1912143 C10.1546268,27.3989889 9.35156666,27.5100073 8.52241311,27.5100073 C7.93668971,27.5100073 7.36717338,27.4531205 6.81224341,27.3469642 C7.96894178,30.958547 11.3260736,33.586685 15.3039361,33.660103 C12.1928276,36.0981321 8.27314842,37.5514198 4.01425536,37.5514198 C3.28056144,37.5514198 2.5569159,37.5084711 1.8457498,37.4245184 C5.86866797,40.0037111 10.6469975,41.5085373 15.780586,41.5085373 C32.5010928,41.5085373 41.6444717,27.6568433 41.6444717,15.6443274 C41.6444717,15.2501715 41.6357199,14.8581225 41.6182163,14.4683426 C43.3941867,13.1866877 44.9354788,11.5855916 46.1542502,9.76262068 C44.5239813,10.4856179 42.7719974,10.974261 40.9331436,11.1940288 Z"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="social-icon">
                                        <a href="https://www.instagram.com/tamed.global/" target="_blank" title="INSTAGRAM">
                                            <div class="svg-icon-component" data-icon-size="DEFAULT" svg-icon="">
                                                <svg viewBox="0 0 48 48">
                                                    <g class="gray-fill">
                                                        <path d="M23.9,7.1c5.5,0,6.1,0,8.3,0.1c2,0.1,3.1,0.4,3.8,0.7c0.9,0.3,1.7,0.9,2.4,1.5c0.7,0.7,1.2,1.5,1.5,2.4 c0.3,0.7,0.6,1.8,0.7,3.8c0.1,2.2,0.1,2.8,0.1,8.3s0,6.1-0.1,8.3c-0.1,2-0.4,3.1-0.7,3.8c-0.7,1.8-2.1,3.2-3.9,3.9 c-0.7,0.3-1.8,0.6-3.8,0.7c-2.2,0.1-2.8,0.1-8.3,0.1s-6.1,0-8.3-0.1c-2-0.1-3.1-0.4-3.8-0.7c-0.9-0.3-1.7-0.9-2.4-1.5 c-0.7-0.7-1.2-1.5-1.5-2.4c-0.3-0.7-0.6-1.8-0.7-3.8c-0.1-2.2-0.1-2.8-0.1-8.3s0-6.1,0.1-8.3c0.1-2,0.4-3.1,0.7-3.8 c0.3-0.9,0.9-1.7,1.5-2.4c0.7-0.7,1.5-1.2,2.4-1.5c0.7-0.3,1.8-0.6,3.8-0.7C17.8,7.1,18.5,7.1,23.9,7.1 M23.9,3.4 c-5.6,0-6.3,0-8.5,0.1c-2.2,0.1-3.7,0.4-5,1C9.1,5,7.9,5.8,6.9,6.8c-1,1-1.9,2.3-2.4,3.6c-0.5,1.3-0.9,2.8-1,5 c-0.1,2.2-0.1,2.9-0.1,8.5s0,6.3,0.1,8.5c0.1,2.2,0.4,3.7,1,5C5,38.7,5.8,40,6.9,41c1,1,2.3,1.9,3.6,2.4c1.3,0.5,2.8,0.9,5,1 c2.2,0.1,2.9,0.1,8.5,0.1s6.3,0,8.5-0.1c2.2-0.1,3.7-0.4,5-1c2.8-1.1,4.9-3.2,6-6c0.5-1.3,0.9-2.8,1-5c0.1-2.2,0.1-2.9,0.1-8.5 s0-6.3-0.1-8.5c-0.1-2.2-0.4-3.7-1-5c-0.5-1.4-1.3-2.6-2.4-3.6c-1-1-2.3-1.9-3.6-2.4c-1.3-0.5-2.8-0.9-5-1 C30.2,3.4,29.5,3.4,23.9,3.4L23.9,3.4L23.9,3.4z"></path>
                                                        <path d="M23.9,13.4c-5.8,0-10.5,4.7-10.5,10.5s4.7,10.5,10.5,10.5s10.5-4.7,10.5-10.5l0,0C34.5,18.1,29.8,13.4,23.9,13.4z M23.9,30.8c-3.8,0-6.8-3.1-6.8-6.8c0-3.8,3.1-6.8,6.8-6.8c3.8,0,6.8,3.1,6.8,6.8C30.8,27.7,27.7,30.8,23.9,30.8z"></path>
                                                        <circle cx="34.9" cy="13" r="2.5"></circle>
                                                    </g>
                                                </svg>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="social-icon">
                                        <a href="https://www.facebook.com/TAMED.Global/" target="_blank" title="Facebook">
                                            <div class="svg-icon-component" data-icon-size="DEFAULT" svg-icon="">
                                                <svg viewBox="0 0 18 18">
                                                    <g class="gray-fill">
                                                        <path d="M15.7,1.5H2.3c-0.5,0-0.8,0.4-0.8,0.8v13.3c0,0.5,0.4,0.8,0.8,0.8h7.2v-5.8h-2V8.4h2V6.8c0-1.9,1.2-3,2.9-3 c0.8,0,1.5,0.1,1.7,0.1v2l-1.2,0c-0.9,0-1.1,0.4-1.1,1.1v1.4h2.2l-0.3,2.3h-1.9v5.8h3.8c0.5,0,0.8-0.4,0.8-0.8V2.3 C16.5,1.9,16.1,1.5,15.7,1.5z"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="social-icon">
                                        <a href="https://www.youtube.com/channel/UCyq2iy8aEUjKmFatmGPicYg" target="_blank" title="YOUTUBE">
                                            <div class="svg-icon-component" data-icon-size="DEFAULT" svg-icon="">
                                                <svg viewBox="0 0 48 48">
                                                    <g class="gray-fill">
                                                        <path d="M47.48 13.21s-.46-3.3-1.9-4.74c-1.82-1.92-3.86-1.92-4.8-2.04C34.08 5.94 24 6 24 6s-10.04-.06-16.74.42c-.92.12-2.96.12-4.78 2.04C1.04 9.9.56 13.2.56 13.2S.08 17.09 0 20.96v4.05c.08 3.88.56 7.75.56 7.75s.48 3.3 1.92 4.76c1.82 1.9 4.2 1.84 5.28 2.04 3.76.36 15.82.44 16.24.44 0 0 10.1.02 16.8-.46.92-.12 2.96-.12 4.78-2.04 1.44-1.44 1.92-4.74 1.92-4.74s.48-3.88.5-7.75v-4.05c-.04-3.87-.52-7.75-.52-7.75zM19.14 30V15.98L32 23.26 19.14 30z"></path>
                                                        <path d="M0 0h47.99v48H0z" fill="none"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="social-icon">
                                        <a href="https://www.linkedin.com/company/tamed-spa/" target="_blank" title="linkedin">
                                            <div class="svg-icon-component" data-icon-size="DEFAULT" svg-icon="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="height: 19px;">
                                                    <g class="gray-fill">
                                                        <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
                                                    </g>
                                                </svg>

                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <ul class="bottom-items">
                                    <li class="footer-item">
                                        <a href="https://tamed.global/">
                                            <div class="footer-logo country-flag" country-flags="">
                                                <div class="country-flags cl-flag" style="background-size: 100% 100%; height: 18px; width: 18px;background-image: url(<?php echo home_url(); ?>/wp-content/uploads/2019/07/cl.png);"> </div>
                                            </div><span class="country-name footer-logo-item-text">Chile</span></a>
                                    </li>
                                    <li class="footer-item"><a class="id-no-nav" onclick="Redireccionar('https://tamed.global/cl/wp-content/uploads/2019/11/Catalogo_Digital_nuevo-1_compressed.pdf')">Catálogo</a></li>
                                    <li class="footer-item"><a class="id-no-nav" onclick="Redireccionar('<?php echo home_url(); ?>/condiciones-de-compra/')" target="_blank">Condiciones de compra</a></li>
                                    <li class="footer-item"><a class="id-no-nav" onclick="Redireccionar('<?php echo home_url(); ?>/terminos-de-garantia/')" target="_blank">Terminos de garantía</a></li>
                                    <li class="footer-item"><a class="id-no-nav" onclick="Redireccionar('<?php echo home_url(); ?>/politicas-de-privacidad/')" target="_blank">Políticas de privacidad</a></li>
                                    <li class="footer-item"><a class="id-no-nav" onclick="Redireccionar('<?php echo home_url(); ?>/terminos-y-condiciones/')" target="_blank">Terminos y condiciones</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer-bottom-padding"></div>

            </div>

            <?php endif; ?>

                </div>
                <!-- #page_wrapper -->

                </div>
                <!--</st-content -->

                <?php if (class_exists('WooCommerce') && (is_shop() || is_product_category() || is_product_tag() || (is_tax() && is_woocommerce() ))) : ?>
                    <div class="off-canvas-wrapper">
                        <div class="off-canvas <?php echo is_rtl() ? 'position-right' : 'position-left' ?> <?php echo ( is_active_sidebar( 'catalog-widget-area' ) && ( isset($shopkeeper_theme_options['sidebar_style']) && ( $shopkeeper_theme_options['sidebar_style'] == " 0 " ) ) ) ? 'hide-for-large':''; ?> <?php echo ( is_active_sidebar( 'catalog-widget-area' ) ) ? 'shop-has-sidebar':''; ?>" id="offCanvasLeft1" data-off-canvas>

                            <div class="menu-close hide-for-medium">
                                <button class="close-button" aria-label="Close menu" type="button" data-close>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div class="nano">
                                <div class="content">
                                    <div class="offcanvas_content_left wpb_widgetised_column">
                                        <div id="filters-offcanvas">
                                            <?php if ( is_active_sidebar( 'catalog-widget-area' ) ) : ?>
                                                <?php dynamic_sidebar( 'catalog-widget-area' ); ?>
                                                    <?php endif; ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php endif; ?>

                        <div class="off-canvas-wrapper">
                            <div class="off-canvas <?php echo is_rtl() ? 'position-left' : 'position-right' ?> " id="offCanvasRight1" data-off-canvas style="margin: 42px 0px;">

                                <div class="menu-close hide-for-medium">
                                    <button class="close-button" aria-label="Close menu" type="button" data-close>
                                        <span aria-hidden="true" style="font-size: 44px; z-index: 1; position: relative;">&times;</span>
                                    </button>
                                </div>

                                <div class="nano">
                                    <div class="content">
                                        <div class="offcanvas_content_right">

                                            <div id="mobiles-menu-offcanvas">

                                                <?php if ( (isset($shopkeeper_theme_options['main_header_layout'])) && ( $shopkeeper_theme_options['main_header_layout'] != "2" ) && ( $shopkeeper_theme_options['main_header_layout'] != "22" ) ) : ?>

                                                    <?php if( has_nav_menu("main-navigation") ) : ?>
                                                        <nav class="mobile-navigation primary-navigation hide-for-large" role="navigation">
                                                            <?php
																//wp_nav_menu(array(
																//    'theme_location'  => 'main-navigation',
																//    'fallback_cb'     => false,
																//    'container'       => false,
																//    'items_wrap'      => '<ul id="%1$s">%3$s</ul>',
																//));
														?>
                                                                <style type="text/css">
                                                                    section2 {
                                                                        width: 100%;
                                                                        display: block;
                                                                        float: left;
                                                                        height: 100%;
                                                                        margin: 0 auto;
                                                                    }

                                                                    .icon-container {
                                                                        display: block;
                                                                        float: left;
                                                                        width: calc((55% / 2) - 0em);
                                                                        height: calc(110px - 1em);
                                                                        margin: 38px;
                                                                        position: relative;
                                                                        transition: all 0.25s ease-in;
                                                                    }

                                                                    .icon-container:hover {
                                                                        cursor: pointer;
                                                                    }

                                                                    .icon-container:before {
                                                                        display: block;
                                                                        height: 110px;
                                                                        width: 150px;
                                                                        border: 5px solid #5aadcb;
                                                                        border-left: none;
                                                                        border-right: none;
                                                                        content: "";
                                                                        position: absolute;
                                                                        top: 0;
                                                                        left: calc(50% + 5px);
                                                                        transform: translatex(-50%);
                                                                        opacity: 0;
                                                                        transition: all 0.5s ease-in;
                                                                    }

                                                                    .icon-container:after {
                                                                        display: block;
                                                                        height: 100px;
                                                                        width: 100%;
                                                                        border: 5px solid #5aadcb;
                                                                        border-top: none;
                                                                        border-bottom: none;
                                                                        content: "";
                                                                        position: absolute;
                                                                        left: 0;
                                                                        top: calc(50% - 5px);
                                                                        opacity: 0;
                                                                        transform: translatey(calc(-50% + 10px));
                                                                        transition: all 0.5s ease-in;
                                                                    }

                                                                    .icon-container .icon {
                                                                        width: 130px;
                                                                        height: auto;
                                                                        display: block;
                                                                        float: none;
                                                                        margin: auto;
                                                                        padding: 1em;
                                                                        margin-bottom: -5px;
                                                                    }

                                                                    .icon-container .icon img {
                                                                        display: block;
                                                                        width: 100%;
                                                                        max-width: 100%;
                                                                    }

                                                                    .icon-container .text {
                                                                        text-align: center;
                                                                        font-size: 16px;
                                                                        color: #828186;
                                                                        margin-left: 13px;
                                                                    }

                                                                    .off-canvas.position-right {
                                                                        width: 100% !important;
                                                                    }

                                                                    .js-off-canvas-overlay.is-overlay-fixed {
                                                                        position: relative !important;
                                                                    }

                                                                    .site-top-message {
                                                                        font-size: 13px !important;
                                                                    }
                                                                </style>

                                                                <section2>
                                                                    <div class="icon-container" onclick="Redireccionar('<?php echo home_url(); ?>')">
                                                                        <div class="icon">
                                                                            <img src="<?php echo home_url(); ?>/wp-content/uploads/2019/08/home-1-small.png" />
                                                                        </div>
                                                                        <div class="text">Home</div>
                                                                    </div>
                                                                    <div class="icon-container" onclick="Redireccionar('<?php echo home_url(); ?>/store')">
                                                                        <div class="icon">
                                                                            <img src="<?php echo home_url(); ?>/wp-content/uploads/2019/08/productos-small.png" />
                                                                        </div>
                                                                        <div class="text">Productos</div>
                                                                    </div>
                                                                    <div class="icon-container" onclick="Redireccionar('<?php echo home_url(); ?>/smart-blog')">
                                                                        <div class="icon">
                                                                            <img src="<?php echo home_url(); ?>/wp-content/uploads/2019/08/blog-small.png" />
                                                                        </div>
                                                                        <div class="text">Blog</div>
                                                                    </div>
                                                                    <div class="icon-container" onclick="Redireccionar('<?php echo home_url(); ?>/inmobiliarias-smart')">
                                                                        <div class="icon">
                                                                            <img src="<?php echo home_url(); ?>/wp-content/uploads/2019/08/proyectos-small.png" />
                                                                        </div>
                                                                        <div class="text">Inmobiliarias</div>
                                                                    </div>
                                                                    <div class="icon-container" onclick="Redireccionar('<?php echo home_url(); ?>/soporte')">
                                                                        <div class="icon">
                                                                            <img src="<?php echo home_url(); ?>/wp-content/uploads/2019/08/soporte-small.png" />
                                                                        </div>
                                                                        <div class="text">Soporte</div>
                                                                    </div>
                                                                    <div class="icon-container" onclick="Redireccionar('<?php echo home_url(); ?>/contactenos')">
                                                                        <div class="icon">
                                                                            <img src="<?php echo home_url(); ?>/wp-content/uploads/2019/08/contacto-small.png" />
                                                                        </div>
                                                                        <div class="text">Contacto</div>
                                                                    </div>

                                                                    </section>
                                                                    <script type="text/javascript">
                                                                        function Redireccionar(url) {

                                                                            window.location.href = url;

                                                                        }
                                                                    </script>

                                                        </nav>
                                                        <?php endif; ?>

                                                            <?php endif; ?>

                                                                <?php if ( (isset($shopkeeper_theme_options['main_header_layout'])) && ( $shopkeeper_theme_options['main_header_layout'] == "2" || $shopkeeper_theme_options['main_header_layout'] == "22" ) ) : ?>

                                                                    <?php if( has_nav_menu("centered_header_left_navigation") ) : ?>
                                                                        <nav class="mobile-navigation hide-for-large" role="navigation">
                                                                            <?php
																wp_nav_menu(array(
																		'theme_location'  => 'centered_header_left_navigation',
																		'fallback_cb'     => false,
																		'container'       => false,
																		'items_wrap'      => '<ul id="%1$s">%3$s</ul>',
																));
														?>
                                                                        </nav>
                                                                        <?php endif; ?>

                                                                            <?php if( has_nav_menu("centered_header_right_navigation") ) : ?>
                                                                                <nav class="mobile-navigation hide-for-large" role="navigation">
                                                                                    <?php
																wp_nav_menu(array(
																		'theme_location'  => 'centered_header_right_navigation',
																		'fallback_cb'     => false,
																		'container'       => false,
																		'items_wrap'      => '<ul id="%1$s">%3$s</ul>',
																));
														?>
                                                                                </nav>
                                                                                <?php endif; ?>

                                                                                    <?php endif; ?>

                                                                                        <?php if ( (isset($shopkeeper_theme_options['main_header_off_canvas'])) && (trim($shopkeeper_theme_options['main_header_off_canvas']) == "1" ) ) : ?>
                                                                                            <?php if( has_nav_menu("secondary_navigation") ) : ?>
                                                                                                <nav class="mobile-navigation" role="navigation">
                                                                                                    <?php
																wp_nav_menu(array(
																		'theme_location'  => 'secondary_navigation',
																		'fallback_cb'     => false,
																		'container'       => false,
																		'items_wrap'      => '<ul id="%1$s">%3$s</ul>',
																));
														?>
                                                                                                </nav>
                                                                                                <?php endif; ?>
                                                                                                    <?php endif; ?>

                                                                                                        <?php
				$theme_locations  = get_nav_menu_locations();
				if (isset($theme_locations['top-bar-navigation'])) {
					$menu_obj = get_term($theme_locations['top-bar-navigation'], 'nav_menu');
				}

				if ( (isset($menu_obj->count) && ($menu_obj->count > 0)) || (is_user_logged_in()) ) {
				?>

                                                                                                            <?php if ( (isset($shopkeeper_theme_options['top_bar_switch'])) && ($shopkeeper_theme_options['top_bar_switch'] == "1" ) ) : ?>
                                                                                                                <?php if( has_nav_menu("top-bar-navigation") ) : ?>
                                                                                                                    <nav class="mobile-navigation hide-for-large" role="navigation">
                                                                                                                        <?php
																		wp_nav_menu(array(
																				'theme_location'  => 'top-bar-navigation',
																				'fallback_cb'     => false,
																				'container'       => false,
																				'items_wrap'      => '<ul id="%1$s">%3$s</ul>',
																		));
																?>

                                                                                                                            <?php if ( is_user_logged_in() ) { ?>
                                                                                                                                <ul>
                                                                                                                                    <li>
                                                                                                                                        <a href="<?php echo get_site_url(); ?>/?<?php echo get_option('woocommerce_logout_endpoint'); ?>=true" class="logout_link">
                                                                                                                                            <?php _e('Logout', 'woocommerce'); ?>
                                                                                                                                        </a>
                                                                                                                                    </li>
                                                                                                                                </ul>
                                                                                                                                <?php } ?>
                                                                                                                    </nav>
                                                                                                                    <?php endif; ?>
                                                                                                                        <?php endif; ?>

                                                                                                                            <?php } ?>

                                            </div>
                                            <?php if ( is_active_sidebar( 'offcanvas-widget-area' ) ) : ?>
                                                <div class="shop_sidebar wpb_widgetised_column">
                                                    <?php dynamic_sidebar( 'offcanvas-widget-area' ); ?>
                                                </div>
                                                <?php endif; ?>

                                        </div>
                                        <!-- offcanvas_content_right -->
                                    </div>
                                    <!-- content -->
                                </div>
                                <!-- nano -->
                            </div>
                            <!-- offcanvas -->
                        </div>
                        <!-- offcanvas wrapper -->

                        <!-- Mini Cart -->
                        <?php if (class_exists('WooCommerce')) { ?>
                            <?php if ( (isset($shopkeeper_theme_options['main_header_shopping_bag'])) && ($shopkeeper_theme_options['main_header_shopping_bag'] == "1") ) : ?>
                                <div class="shopkeeper-mini-cart">
                                    <?php if ( class_exists( 'WC_Widget_Cart' ) ) { the_widget( 'WC_Widget_Cart' ); } ?>

                                        <?php
	if (!empty($shopkeeper_theme_options['main_header_minicart_message'])):
		echo '<div class="minicart-message">'. esc_html__( $shopkeeper_theme_options['main_header_minicart_message'], 'shopkeeper' ) .'</div>';
	endif;
?>
                                </div>
                                <?php endif; ?>
                                    <?php } ?>

                                        <!-- Site Search -->
                                        <div class="off-canvas-wrapper">
                                            <div class="site-search off-canvas position-top is-transition-overlap" id="offCanvasTop1" data-off-canvas>
                                                <div class="row has-scrollbar">
                                                    <div class="site-search-close">
                                                        <button class="close-button" aria-label="Close menu" type="button" data-close>
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <p class="search-text">
                                                        <?php _e('What are you looking for?', 'shopkeeper'); ?>
                                                    </p>
                                                    <?php
if (class_exists('WooCommerce')) {
if ( isset($shopkeeper_theme_options['predictive_search']) && $shopkeeper_theme_options['predictive_search'] ) {
	do_action( 'getbowtied_product_search' );
} else {
	the_widget( 'WC_Widget_Product_Search', 'title=' );
}
} else {
the_widget( 'WP_Widget_Search', 'title=' );
}
?>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- .site-search -->

                                        <!-- Back To Top Button -->
                                        <?php $shopkeeper_theme_options['back_to_top_button'] = isset($shopkeeper_theme_options['back_to_top_button']) ? $shopkeeper_theme_options['back_to_top_button'] : '1'; ?>
                                            <?php if ( $shopkeeper_theme_options['back_to_top_button'] == '1') : ?>
                                                <a href="#0" class="cd-top">
                                                    <i class="spk-icon spk-icon-up-small" aria-hidden="true"></i>
                                                </a>
                                                <?php endif; ?>

                                                    <!-- Product Quick View -->
                                                    <div class="cd-quick-view woocommerce"></div>

                                                    <!-- Custom Footer JS Code -->
                                                    <?php if ( (isset($shopkeeper_theme_options['footer_js'])) && ($shopkeeper_theme_options['footer_js'] != "") ) : ?>
                                                        <?php echo $shopkeeper_theme_options['footer_js']; ?>
                                                            <?php endif; ?>

                                                                <?php wp_footer(); ?>

                                                                    <?php
$url2 = $_SERVER["REQUEST_URI"];
$blog1 = strpos($url2, "/cl/smart-blog/");
$inmobiliarias1 = strpos($url2, "/cl/inmobiliarias-smart/");
$tienda1 = strpos($url2, "/cl/store/");
$tienda11 = strpos($url2, "/cl/product-category/");
$producto1 = strpos($url2, "/cl/product/");

switch ($url2) {
case "/cl/smart-blog/": ?>
                                                                        <script src="<?php echo home_url(); ?>/wp-content/themes/shopkeeper/modales/js/jquery.min.js"></script>
                                                                        <script src="<?php echo home_url(); ?>/wp-content/themes/shopkeeper/modales/js/jquery.modal.min.js"></script>
                                                                        <link rel="stylesheet" href="<?php echo home_url(); ?>/wp-content/themes/shopkeeper/modales/css/jquery.modal.min.css" />
                                                                        <script type="text/javascript">
                                                                            var mostrar = localStorage.getItem('visibleblog');
                                                                            if (mostrar !== "no_mostrar") {
                                                                                jQuery(document).ready(function($) {
                                                                                    //-- Crear Cookie si se subscribio ---------------------------------------------
                                                                                    jQuery('#form65').on('submit', function() {

                                                                                    });

                                                                                    //-- Si no hay cookie de subscripci贸n ------------------------------------------
                                                                                    var storage = localStorage.getItem('subscribe');
                                                                                    console.log(storage);
                                                                                    if (storage !== "newsletter_blog") {
                                                                                        /* Con retraso de 6 seg disparar ventana modal de subscripcion */
                                                                                        setTimeout(function() {
                                                                                            jQuery('#pop-up-newsletter').modal();
                                                                                        }, 25000);
                                                                                    } else {
                                                                                        console.log('Ya está subscrito');
                                                                                    }
                                                                                });
                                                                            }

                                                                            function click_form() {
                                                                                localStorage.setItem('subscribe', 'newsletter_blog');
                                                                            }

                                                                            function click_nomostrar() {
                                                                                localStorage.setItem('visibleblog', 'no_mostrar');
                                                                            }
                                                                        </script>
                                                                        <div class="modal fade" id="pop-up-newsletter" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                                                                            <img src="<?php echo home_url(); ?>/wp-content/uploads/2019/10/nuevo-modal-blog.jpg" alt="TAMED" width="100%">
                                                                            <div class="modal-dialog">

                                                                                <div class="modal-content">

                                                                                    <!-- <h4 class="modal-title" id=""></h4> -->

                                                                                    <div class="modal-body">
                                                                                        <div class="form_popup_subscribe" style="border:0;">

                                                                                            <!-- inicio stilos de eloqua -->
                                                                                            <link rel='stylesheet' id='mailster-form-default-css' href='https://tamed.global/cl/wp-content/plugins/mailster/assets/css/form-default-style.min.css' type='text/css' media='all' />
                                                                                            <style type="text/css" media="screen" class="mailster-custom-form-css">
                                                                                                .mailster-form-fields {
                                                                                                    padding: 0px 70px !important;
                                                                                                }

                                                                                                @media(max-width: 470px) {
                                                                                                    .mailster-form-fields {
                                                                                                        padding: 0px 20px !important;
                                                                                                    }
                                                                                                }

                                                                                                .mailster-form.mailster-form-8 .submit-button {
                                                                                                    background-color: #0090ff !important;
                                                                                                    color: #ffffff !important;
                                                                                                }

                                                                                                .mailster-form.mailster-form-8 .submit-button:hover {
                                                                                                    background-color: #ffffff !important;
                                                                                                    color: #0090ff !important;
                                                                                                }

                                                                                                .mailster-form.mailster-form-8 .mailster-firstname-wrapper label {
                                                                                                    color: #828186 !important;
                                                                                                }

                                                                                                .mailster-form.mailster-form-8 .mailster-lastname-wrapper label {
                                                                                                    color: #828186 !important;
                                                                                                }

                                                                                                .mailster-form.mailster-form-8 .mailster-email-wrapper label {
                                                                                                    color: #828186 !important;
                                                                                                }

                                                                                                .mailster-form.mailster-form-8 .mailster-trminos-y-condiciones-wrapper label {
                                                                                                    color: #828186 !important;
                                                                                                    text-transform: none !important;
                                                                                                }

                                                                                                @media(max-width: 470px) {
                                                                                                    .mailster-form.mailster-form-8 .mailster-trminos-y-condiciones-wrapper label {
                                                                                                        color: #828186 !important;
                                                                                                        font-size: 9px !important;
                                                                                                        text-transform: none !important;
                                                                                                    }
                                                                                                }

                                                                                                .mailster-form.mailster-form-8 .mailster-form-info.success {
                                                                                                    color: #ffffff !important;
                                                                                                    background-color: #0090ff !important;
                                                                                                }

                                                                                                .mailster-form.mailster-form-8 .mailster-form-info.error {
                                                                                                    background-color: #dd3333 !important;
                                                                                                }

                                                                                                .mailster-form-5 .submit-button:hover {}

                                                                                                .mailster-form-5 .submit-button {
                                                                                                    padding: 7px 30px !important;
                                                                                                    border-radius: 4px !important;
                                                                                                    font-weight: 500 !important;
                                                                                                    text-align: center !important;
                                                                                                }

                                                                                                .mailster-form-5 .mailster-trminos-y-condiciones-wrapper label {}

                                                                                                .mailster-form-5 .mailster-form-info.success {}

                                                                                                .mailster-form-5 .mailster-form-info.error {
                                                                                                    text-align: center !important;
                                                                                                    border-radius: 4px !important;
                                                                                                }

                                                                                                .mailster-form-5 .mailster-form-info.success {
                                                                                                    text-align: center !important;
                                                                                                    border-radius: 4px !important;
                                                                                                }

                                                                                                .mailster-form-5 .submit-button:hover {
                                                                                                    border-style: Solid !important;
                                                                                                    border-color: #0090ff !important;
                                                                                                    border-size: 2px
                                                                                                }

                                                                                                .mailster-form-5 .mailster-trminos-y-condiciones-wrapper .input {
                                                                                                    border-color: #0090ff !important;
                                                                                                }
                                                                                            </style>
                                                                                            <form action="https://tamed.global/cl/mailster/subscribe" method="post" class="mailster-form mailster-form-submit extern mailster-form-8" novalidate>
                                                                                                <input name="_action" type="hidden" value="subscribe">
                                                                                                <input name="_referer" type="hidden" value="extern">
                                                                                                <input name="_nonce" type="hidden" value="71ecb127c4">
                                                                                                <input name="formid" type="hidden" value="8">
                                                                                                <div class="mailster-form-fields">
                                                                                                    <div class="mailster-wrapper mailster-firstname-wrapper">
                                                                                                        <label for="mailster-firstname-8" style="text-align: left !important; font-weight: 400; text-transform: none; font-size: 16px">Nombre <span class="mailster-required">*</span></label>
                                                                                                        <input id="mailster-firstname-8" name="firstname" type="text" value="" class="input mailster-firstname mailster-required" aria-required="true" aria-label="Nombre">
                                                                                                    </div>
                                                                                                    <div class="mailster-wrapper mailster-lastname-wrapper">
                                                                                                        <label for="mailster-lastname-8" style="text-align: left !important; font-weight: 400; text-transform: none; font-size: 16px">Apellido <span class="mailster-required">*</span></label>
                                                                                                        <input id="mailster-lastname-8" name="lastname" type="text" value="" class="input mailster-lastname mailster-required" aria-required="true" aria-label="Apellido">
                                                                                                    </div>
                                                                                                    <div class="mailster-wrapper mailster-email-wrapper">
                                                                                                        <label for="mailster-email-8" style="text-align: left !important; font-weight: 400; text-transform: none; font-size: 16px">Email <span class="mailster-required">*</span></label>
                                                                                                        <input id="mailster-email-8" name="email" type="email" value="" class="input mailster-email mailster-required" aria-required="true" aria-label="Email" spellcheck="false">
                                                                                                    </div>
                                                                                                    <div class="mailster-wrapper mailster-trminos-y-condiciones-wrapper">
                                                                                                        <label for="mailster-trminos-y-condiciones-8">
                                                                                                            <input type="hidden" name="trminos-y-condiciones" value="0">
                                                                                                            <input id="mailster-trminos-y-condiciones-8" name="trminos-y-condiciones" type="checkbox" value="1" class="mailster-trminos-y-condiciones mailster-required" aria-required="true" aria-label="Acepto los términos y condiciones y las políticas de privacidad"> Acepto los <a href="<?php echo home_url(); ?>/terminos-y-condiciones/">términos y condiciones</a> y las <a href="<?php echo home_url(); ?>/politicas-de-privacidad/">políticas de privacidad <span class="mailster-required">*</span></label>
						</div>
						<div class="mailster-wrapper mailster-submit-wrapper form-submit">
								<input name="submit" type="submit" onclick="no_mostrar()" style="font-weight: 400; text-transform: none; font-size: 16px" value="Suscribirse" class="submit-button button" aria-label="Suscribirse">
						</div>
						<a href="#close-modal" rel="modal:close" onclick="click_nomostrar()" style="font-size: 10px">No, gracias</a>
                                                                                                    </div>
                                                                                            </form>

                                                                                            <!-- fin formulario de eloqua -->
                                                                                            <!-- inicio script de eloqua -->
                                                                                            <script type="text/javascript" src="https://img04.en25.com/i/livevalidation_standalone.compressed.js">
                                                                                            </script>
                                                                                            <!-- fin script de eloqua -->
                                                                                            <script src="<?php echo home_url(); ?>/wp-content/themes/shopkeeper/modales/js/blog.js"></script>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <!-- Pop up SUBSCRIPCION -->
                                                                            <?php  break;
                                                                            case  "/cl/inmobiliarias-smart/": ?>
                                                                                <!--<script src="<?php echo home_url(); ?>/wp-content/themes/shopkeeper/modales/js/jquery.min.js"></script> -->
                                                                                <script src="<?php echo home_url(); ?>/wp-content/themes/shopkeeper/modales/js/jquery.modal.min.js"></script>
                                                                                <link rel="stylesheet" href="<?php echo home_url(); ?>/wp-content/themes/shopkeeper/modales/css/jquery.modal.min.css" />
                                                                                <script type="text/javascript">
                                                                                    var mostrar = localStorage.getItem('visibleinmobiliaria');
                                                                                    if (mostrar !== "no_mostrar") {
                                                                                        jQuery(document).ready(function($) {
                                                                                            //-- Crear Cookie si se subscribio ---------------------------------------------
                                                                                            jQuery('#form67').on('submit', function() {

                                                                                            });

                                                                                            //-- Si no hay cookie de subscripci贸n ------------------------------------------
                                                                                            var storage = localStorage.getItem('subscribeinmobiliaria');
                                                                                            console.log(storage);
                                                                                            if (storage !== "newsletter_inmobiliaria") {
                                                                                                /* Con retraso de 6 seg disparar ventana modal de subscripcion */
                                                                                                setTimeout(function() {
                                                                                                    jQuery('#pop-up-newsletter3').modal();
                                                                                                }, 30000);
                                                                                            } else {
                                                                                                console.log('Ya está subscrito');
                                                                                            }
                                                                                        });
                                                                                    }

                                                                                    function click_form() {
                                                                                        localStorage.setItem('subscribeinmobiliaria', 'newsletter_inmobiliaria');
                                                                                    }

                                                                                    function click_nomostrar() {
                                                                                        localStorage.setItem('visibleinmobiliaria', 'no_mostrar');
                                                                                    }
                                                                                </script>
                                                                                <div class="modal fade" id="pop-up-newsletter3" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                                                                                    <img src="<?php echo home_url(); ?>/wp-content/uploads/2019/09/brochure-form.jpg" alt="TAMED" width="100%">
                                                                                    <div class="modal-dialog">

                                                                                        <div class="modal-content">

                                                                                            <!-- <h4 class="modal-title" id=""></h4> -->

                                                                                            <div class="modal-body">
                                                                                                <div class="form_popup_subscribe" style="border:0;">
                                                                                                    <link rel='stylesheet' id='mailster-form-default-css' href='https://tamed.global/cl/wp-content/plugins/mailster/assets/css/form-default-style.min.css' type='text/css' media='all' />
                                                                                                    <style type="text/css" media="screen" class="mailster-custom-form-css">
                                                                                                        .mailster-form-fields {
                                                                                                            padding: 0px 70px !important;
                                                                                                        }

                                                                                                        @media(max-width: 470px) {
                                                                                                            .mailster-form-fields {
                                                                                                                padding: 0px 20px !important;
                                                                                                            }
                                                                                                        }

                                                                                                        .mailster-form.mailster-form-9 .submit-button {
                                                                                                            background-color: #0090ff;
                                                                                                            color: #ffffff;
                                                                                                        }

                                                                                                        .mailster-form.mailster-form-9 .submit-button:hover {
                                                                                                            background-color: #ffffff;
                                                                                                            color: #0090ff;
                                                                                                        }

                                                                                                        .mailster-form.mailster-form-9 .mailster-firstname-wrapper label {
                                                                                                            color: #828186;
                                                                                                        }

                                                                                                        .mailster-form.mailster-form-9 .mailster-lastname-wrapper label {
                                                                                                            color: #828186;
                                                                                                        }

                                                                                                        .mailster-form.mailster-form-9 .mailster-email-wrapper label {
                                                                                                            color: #828186;
                                                                                                        }

                                                                                                        .mailster-form.mailster-form-9 .mailster-trminos-y-condiciones-wrapper label {
                                                                                                            color: #828186 !important;
                                                                                                            text-transform: none !important;
                                                                                                        }

                                                                                                        @media(max-width: 470px) {
                                                                                                            .mailster-form.mailster-form-9 .mailster-trminos-y-condiciones-wrapper label {
                                                                                                                color: #828186 !important;
                                                                                                                font-size: 9px !important;
                                                                                                                text-transform: none !important;
                                                                                                            }
                                                                                                        }

                                                                                                        .mailster-form.mailster-form-9 .mailster-form-info.success {
                                                                                                            color: #ffffff;
                                                                                                            background-color: #0090ff;
                                                                                                        }

                                                                                                        .mailster-form.mailster-form-9 .mailster-form-info.error {
                                                                                                            background-color: #dd3333;
                                                                                                        }

                                                                                                        .mailster-form-5 .submit-button:hover {}

                                                                                                        .mailster-form-5 .submit-button {
                                                                                                            padding: 7px 30px;
                                                                                                            border-radius: 4px;
                                                                                                            font-weight: 500;
                                                                                                            text-align: center;
                                                                                                        }

                                                                                                        .mailster-form-5 .mailster-trminos-y-condiciones-wrapper label {}

                                                                                                        .mailster-form-5 .mailster-form-info.success {}

                                                                                                        .mailster-form-5 .mailster-form-info.error {
                                                                                                            text-align: center;
                                                                                                            border-radius: 4px;
                                                                                                        }

                                                                                                        .mailster-form-5 .mailster-form-info.success {
                                                                                                            text-align: center;
                                                                                                            border-radius: 4px;
                                                                                                        }

                                                                                                        .mailster-form-5 .submit-button:hover {
                                                                                                            border-style: Solid;
                                                                                                            border-color: #0090ff;
                                                                                                            border-size: 2px
                                                                                                        }
                                                                                                    </style>
                                                                                                    <form action="https://tamed.global/cl/mailster/subscribe" method="post" class="mailster-form mailster-form-submit extern mailster-form-9" novalidate>
                                                                                                        <input name="_action" type="hidden" value="subscribe">
                                                                                                        <input name="_referer" type="hidden" value="extern">
                                                                                                        <input name="_nonce" type="hidden" value="71ecb127c4">
                                                                                                        <input name="formid" type="hidden" value="9">
                                                                                                        <div class="mailster-form-fields">
                                                                                                            <div class="mailster-wrapper mailster-firstname-wrapper">
                                                                                                                <label for="mailster-firstname-9">Nombre <span class="mailster-required">*</span></label>
                                                                                                                <input id="mailster-firstname-9" name="firstname" type="text" value="" class="input mailster-firstname mailster-required" aria-required="true" aria-label="Nombre">
                                                                                                            </div>
                                                                                                            <div class="mailster-wrapper mailster-lastname-wrapper">
                                                                                                                <label for="mailster-lastname-9">Apellido <span class="mailster-required">*</span></label>
                                                                                                                <input id="mailster-lastname-9" name="lastname" type="text" value="" class="input mailster-lastname mailster-required" aria-required="true" aria-label="Apellido">
                                                                                                            </div>
                                                                                                            <div class="mailster-wrapper mailster-email-wrapper">
                                                                                                                <label for="mailster-email-9">Email <span class="mailster-required">*</span></label>
                                                                                                                <input id="mailster-email-9" name="email" type="email" value="" class="input mailster-email mailster-required" aria-required="true" aria-label="Email" spellcheck="false">
                                                                                                            </div>
                                                                                                            <div class="mailster-wrapper mailster-trminos-y-condiciones-wrapper">
                                                                                                                <label for="mailster-trminos-y-condiciones-9">
                                                                                                                    <input type="hidden" name="trminos-y-condiciones" value="0">
                                                                                                                    <input id="mailster-trminos-y-condiciones-9" name="trminos-y-condiciones" type="checkbox" value="1" class="mailster-trminos-y-condiciones mailster-required" aria-required="true" aria-label="Acepto los términos y condiciones y las políticas de privacidad"> Acepto los <a href="<?php echo home_url(); ?>/terminos-y-condiciones/">términos y condiciones</a> y las <a href="<?php echo home_url(); ?>/politicas-de-privacidad/">políticas de privacidadcepto los términos y condiciones y las políticas de privacidad <span class="mailster-required">*</span></label>
							</div>
							<div class="mailster-wrapper mailster-submit-wrapper form-submit">
									<input name="submit" type="submit" value="Suscribirse" class="submit-button button" aria-label="Suscribirse">
							</div>
					</div>
			</form>
		<!-- inicio stilos de eloqua -->
			<!-- fin script de eloqua -->
<script src="<?php echo home_url(); ?>/wp-content/themes/shopkeeper/modales/js/inmobiliaria.js"></script>
	</div>
</div>
</div>
</div>
</div>
<!-- Pop up SUBSCRIPCION -->
<?php  break;
case  "/cl/": ?>
<script src="<?php echo home_url(); ?>/wp-content/themes/shopkeeper/modales/js/jquery.modal.min.js"></script>
<link rel="stylesheet" href="<?php echo home_url(); ?>/wp-content/themes/shopkeeper/modales/css/jquery.modal.min.css" />
<script type="text/javascript">
var mostrar = localStorage.getItem('visiblehome');
if (mostrar !== "no_mostrar"){
jQuery(document).ready(function ($) {
//-- Crear Cookie si se subscribio ---------------------------------------------
jQuery('#form63').on('submit', function () {

});

//-- Si no hay cookie de subscripci贸n ------------------------------------------
var storage = localStorage.getItem('subscribe');
console.log(storage);
if ( storage !== "newsletter_home" ) {
	/* Con retraso de 6 seg disparar ventana modal de subscripcion */
	setTimeout(function(){
		jQuery('#pop-up-newsletter2').modal();
	}, 6000);
} else {
	console.log('Ya está subscrito');
}
});
}

function click_form() {
localStorage.setItem('subscribe','newsletter_home');
}
function click_nomostrar() {
localStorage.setItem('visiblehome','no_mostrar');
}
</script>
<div class="modal fade" id="pop-up-newsletter2" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
<img src="<?php echo home_url(); ?>/wp-content/uploads/2019/11/nueva-imagen-pop-up.jpg" alt="TAMED" width="100%">
<div class="modal-dialog">
<div class="modal-content">
	<!-- <h4 class="modal-title" id=""></h4> -->
		<div class="modal-body">
	<div class="form_popup_subscribe" style="border:0;">
		<!-- inicio stilos de eloqua -->
		<link rel='stylesheet' id='mailster-form-default-css' href='https://tamed.global/cl/wp-content/plugins/mailster/assets/css/form-default-style.min.css' type='text/css' media='all' />
		<style type="text/css" media="screen" class="mailster-custom-form-css">
				.mailster-form-fields {
					padding: 0px 70px !important;
				}
				@media(max-width: 470px){
					.mailster-form-fields {
						padding: 0px 20px !important;
					}
				}
				.mailster-form.mailster-form-5 .submit-button {
						background-color: #0090ff !important;
						color: #ffffff important;
				}

				.mailster-form.mailster-form-5 .submit-button:hover {
						background-color: #ffffff !important;
						color: #0090ff !important;
				}

				.mailster-form.mailster-form-5 .mailster-firstname-wrapper label {
						color: #828186 !important;
				}

				.mailster-form.mailster-form-5 .mailster-lastname-wrapper label {
						color: #828186 !important;
				}

				.mailster-form.mailster-form-5 .mailster-email-wrapper label {
						color: #828186 !important;
				}

				.mailster-form.mailster-form-5 .mailster-trminos-y-condiciones-wrapper label {
						color: #828186 !important;
						text-transform: none !important;
				}
				@media(max-width: 470px){
					.mailster-form.mailster-form-5 .mailster-trminos-y-condiciones-wrapper label {
							color: #828186 !important;
							font-size: 9px !important;
							text-transform: none !important;
					}
				}

				.mailster-form.mailster-form-5 .mailster-trminos-y-condiciones-wrapper .input {
						color: #0090ff !important;
				}

				.mailster-form.mailster-form-5 .mailster-form-info.success {
						color: #ffffff !important;
						background-color: #0090ff !important;
				}

				.mailster-form.mailster-form-5 .mailster-form-info.error {
						background-color: #dd3333 !important;
				}

				.mailster-form-5 .submit-button:hover {}

				.mailster-form-5 .submit-button {
						padding: 7px 30px !important;
						border-radius: 4px !important;
						font-weight: 500 !important;
						text-align: center !important;
				}

				.mailster-form-5 .mailster-trminos-y-condiciones-wrapper label {}

				.mailster-form-5 .mailster-form-info.success {}

				.mailster-form-5 .mailster-form-info.error {
						text-align: center !important;
						border-radius: 4px !important;
				}

				.mailster-form-5 .mailster-form-info.success {
						text-align: center !important;
						border-radius: 4px !important;
				}

				.mailster-form-5 .submit-button:hover {
						border-style: Solid !important;
						border-color: #0090ff !important;
						border-size: 2px !important;
				}

				.mailster-form-5 .mailster-trminos-y-condiciones-wrapper .input {
						border-color: #0090ff !important;
				}
		</style>
		<form action="https://tamed.global/cl/mailster/subscribe" method="post" class="mailster-form mailster-form-submit extern mailster-form-5" novalidate>
				<input name="_action" type="hidden" value="subscribe">
				<input name="_referer" type="hidden" value="extern">
				<input name="_nonce" type="hidden" value="71ecb127c4">
				<input name="formid" type="hidden" value="5">
				<div class="mailster-form-fields">
						<div class="mailster-wrapper mailster-firstname-wrapper">
								<label for="mailster-firstname-5" style="text-align: left !important; font-weight: 400; text-transform: none; font-size: 16px">Nombre <span class="mailster-required">*</span></label>
								<input id="mailster-firstname-5" name="firstname" type="text" value="" class="input mailster-firstname mailster-required" aria-required="true" aria-label="Nombre">
						</div>
						<div class="mailster-wrapper mailster-lastname-wrapper">
								<label for="mailster-lastname-5" style="text-align: left !important; font-weight: 400; text-transform: none; font-size: 16px">Apellidos <span class="mailster-required">*</span></label>
								<input id="mailster-lastname-5" name="lastname" type="text" value="" class="input mailster-lastname mailster-required" aria-required="true" aria-label="Apellidos">
						</div>
						<div class="mailster-wrapper mailster-email-wrapper">
								<label for="mailster-email-5" style="text-align: left !important; font-weight: 400; text-transform: none; font-size: 16px">Email <span class="mailster-required">*</span></label>
								<input id="mailster-email-5" name="email" type="email" value="" class="input mailster-email mailster-required" aria-required="true" aria-label="Email" spellcheck="false">
						</div>
						<div class="mailster-wrapper mailster-trminos-y-condiciones-wrapper">
								<label for="mailster-trminos-y-condiciones-5">
										<input type="hidden" name="trminos-y-condiciones" value="0">
										<input id="mailster-trminos-y-condiciones-5" name="trminos-y-condiciones" style="font-weight: 400; text-transform: none; font-size: 16px" type="checkbox" value="1" class="mailster-trminos-y-condiciones mailster-required" aria-required="true" aria-label="Acepto los términos y condiciones y las políticas de privacidad"> Acepto los <a href="<?php echo home_url(); ?>/terminos-y-condiciones/">términos y condiciones</a> y las <a href="<?php echo home_url(); ?>/politicas-de-privacidad/">políticas de privacidad</a> <span class="mailster-required">*</span></label>
                                                                                                            </div>
                                                                                                            <div class="mailster-wrapper mailster-submit-wrapper form-submit">
                                                                                                                <input name="submit" type="submit" onclick="click_form()" value="Suscribirse" class="submit-button button" aria-label="Suscribirse">
                                                                                                            </div>
                                                                                                            <a href="#close-modal" rel="modal:close" onclick="click_nomostrar()" style="font-size: 10px">No, gracias</a>
                                                                                                        </div>
                                                                                                    </form>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <!-- Pop up SUBSCRIPCION -->

                                                                                <script type="text/javascript">
                                                                                    function mostrar_video() {
                                                                                        jQuery('#pop-up-videohome').modal();
                                                                                    }
                                                                                </script>
                                                                                <div class="modal fade" id="pop-up-videohome" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" style="max-width: 639px !important; padding: 0 0 0px !important;">
                                                                                    <div class="contenedorq" style="margin-bottom: -40px;">

                                                                                        <video preload="auto" autoplay="autoplay" loop="loop" muted="" width="100%" height="auto">
                                                                                            <source src="http://tamed.global/video_tamed_fibaro.mp4" type="video/mp4"> Tu navegador no soporta HTML5 Video
                                                                                        </video>

                                                                                    </div>
                                                                                </div>
                                                                                <?php  break;
                                                                                case  "/cl/store/": ?>
                                                                                    <script src="<?php echo home_url(); ?>/wp-content/themes/shopkeeper/modales/js/jquery.min.js"></script>
                                                                                    <script src="<?php echo home_url(); ?>/wp-content/themes/shopkeeper/modales/js/jquery.modal.min.js"></script>
                                                                                    <link rel="stylesheet" href="<?php echo home_url(); ?>/wp-content/themes/shopkeeper/modales/css/jquery.modal.min.css" />
                                                                                    <script type="text/javascript">
                                                                                        var mostrar = localStorage.getItem('visiblehome');
                                                                                        if (mostrar !== "no_mostrar") {
                                                                                            jQuery(document).ready(function($) {
                                                                                                //-- Crear Cookie si se subscribio ---------------------------------------------
                                                                                                jQuery('#form63').on('submit', function() {

                                                                                                });

                                                                                                //-- Si no hay cookie de subscripci贸n ------------------------------------------
                                                                                                var storage = localStorage.getItem('subscribe');
                                                                                                console.log(storage);
                                                                                                if (storage !== "newsletter_home") {
                                                                                                    /* Con retraso de 6 seg disparar ventana modal de subscripcion */
                                                                                                    setTimeout(function() {
                                                                                                        jQuery('#pop-up-newsletter2').modal();
                                                                                                    }, 25000);
                                                                                                } else {
                                                                                                    console.log('Ya está subscrito');
                                                                                                }
                                                                                            });
                                                                                        }

                                                                                        function click_form() {
                                                                                            localStorage.setItem('subscribe', 'newsletter_home');
                                                                                        }

                                                                                        function click_nomostrar() {
                                                                                            localStorage.setItem('visiblehome', 'no_mostrar');
                                                                                        }
                                                                                    </script>
                                                                                    <div class="modal fade" id="pop-up-newsletter2" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                                                                                        <img src="<?php echo home_url(); ?>/wp-content/uploads/2019/10/pop-up-home.jpg" alt="TAMED" width="100%">
                                                                                        <div class="modal-dialog">
                                                                                            <div class="modal-content">
                                                                                                <!-- <h4 class="modal-title" id=""></h4> -->
                                                                                                <div class="modal-body">
                                                                                                    <div class="form_popup_subscribe" style="border:0;">
                                                                                                        <!-- inicio stilos de eloqua -->
                                                                                                        <link rel='stylesheet' id='mailster-form-default-css' href='https://tamed.global/cl/wp-content/plugins/mailster/assets/css/form-default-style.min.css' type='text/css' media='all' />
                                                                                                        <style type="text/css" media="screen" class="mailster-custom-form-css">
                                                                                                            .mailster-form-fields {
                                                                                                                padding: 0px 70px !important;
                                                                                                            }

                                                                                                            @media(max-width: 470px) {
                                                                                                                .mailster-form-fields {
                                                                                                                    padding: 0px 20px !important;
                                                                                                                }
                                                                                                            }

                                                                                                            .mailster-form.mailster-form-5 .submit-button {
                                                                                                                background-color: #0090ff !important;
                                                                                                                color: #ffffff important;
                                                                                                            }

                                                                                                            .mailster-form.mailster-form-5 .submit-button:hover {
                                                                                                                background-color: #ffffff !important;
                                                                                                                color: #0090ff !important;
                                                                                                            }

                                                                                                            .mailster-form.mailster-form-5 .mailster-firstname-wrapper label {
                                                                                                                color: #828186 !important;
                                                                                                            }

                                                                                                            .mailster-form.mailster-form-5 .mailster-lastname-wrapper label {
                                                                                                                color: #828186 !important;
                                                                                                            }

                                                                                                            .mailster-form.mailster-form-5 .mailster-trminos-y-condiciones-wrapper label {
                                                                                                                color: #828186 !important;
                                                                                                                text-transform: none !important;
                                                                                                            }

                                                                                                            @media(max-width: 470px) {
                                                                                                                .mailster-form.mailster-form-5 .mailster-trminos-y-condiciones-wrapper label {
                                                                                                                    color: #828186 !important;
                                                                                                                    font-size: 9px !important;
                                                                                                                    text-transform: none !important;
                                                                                                                }
                                                                                                            }

                                                                                                            .mailster-form.mailster-form-5 .mailster-trminos-y-condiciones-wrapper label {
                                                                                                                color: #828186 !important;
                                                                                                            }

                                                                                                            .mailster-form.mailster-form-5 .mailster-trminos-y-condiciones-wrapper .input {
                                                                                                                color: #0090ff !important;
                                                                                                            }

                                                                                                            .mailster-form.mailster-form-5 .mailster-form-info.success {
                                                                                                                color: #ffffff !important;
                                                                                                                background-color: #0090ff !important;
                                                                                                            }

                                                                                                            .mailster-form.mailster-form-5 .mailster-form-info.error {
                                                                                                                background-color: #dd3333 !important;
                                                                                                            }

                                                                                                            .mailster-form-5 .submit-button:hover {}

                                                                                                            .mailster-form-5 .submit-button {
                                                                                                                padding: 7px 30px !important;
                                                                                                                border-radius: 4px !important;
                                                                                                                font-weight: 500 !important;
                                                                                                                text-align: center !important;
                                                                                                            }

                                                                                                            .mailster-form-5 .mailster-trminos-y-condiciones-wrapper label {}

                                                                                                            .mailster-form-5 .mailster-form-info.success {}

                                                                                                            .mailster-form-5 .mailster-form-info.error {
                                                                                                                text-align: center !important;
                                                                                                                border-radius: 4px !important;
                                                                                                            }

                                                                                                            .mailster-form-5 .mailster-form-info.success {
                                                                                                                text-align: center !important;
                                                                                                                border-radius: 4px !important;
                                                                                                            }

                                                                                                            .mailster-form-5 .submit-button:hover {
                                                                                                                border-style: Solid !important;
                                                                                                                border-color: #0090ff !important;
                                                                                                                border-size: 2px !important;
                                                                                                            }

                                                                                                            .mailster-form-5 .mailster-trminos-y-condiciones-wrapper .input {
                                                                                                                border-color: #0090ff !important;
                                                                                                            }
                                                                                                        </style>
                                                                                                        <form action="https://tamed.global/cl/mailster/subscribe" method="post" class="mailster-form mailster-form-submit extern mailster-form-5" novalidate>
                                                                                                            <input name="_action" type="hidden" value="subscribe">
                                                                                                            <input name="_referer" type="hidden" value="extern">
                                                                                                            <input name="_nonce" type="hidden" value="71ecb127c4">
                                                                                                            <input name="formid" type="hidden" value="5">
                                                                                                            <div class="mailster-form-fields">
                                                                                                                <div class="mailster-wrapper mailster-firstname-wrapper">
                                                                                                                    <label for="mailster-firstname-5" style="text-align: left !important; font-weight: 400; text-transform: none; font-size: 16px">Nombre <span class="mailster-required">*</span></label>
                                                                                                                    <input id="mailster-firstname-5" name="firstname" type="text" value="" class="input mailster-firstname mailster-required" aria-required="true" aria-label="Nombre">
                                                                                                                </div>
                                                                                                                <div class="mailster-wrapper mailster-lastname-wrapper">
                                                                                                                    <label for="mailster-lastname-5" style="text-align: left !important; font-weight: 400; text-transform: none; font-size: 16px">Apellidos <span class="mailster-required">*</span></label>
                                                                                                                    <input id="mailster-lastname-5" name="lastname" type="text" value="" class="input mailster-lastname mailster-required" aria-required="true" aria-label="Apellidos">
                                                                                                                </div>
                                                                                                                <div class="mailster-wrapper mailster-email-wrapper">
                                                                                                                    <label for="mailster-email-5" style="text-align: left !important; font-weight: 400; text-transform: none; font-size: 16px">Email <span class="mailster-required">*</span></label>
                                                                                                                    <input id="mailster-email-5" name="email" type="email" value="" class="input mailster-email mailster-required" aria-required="true" aria-label="Email" spellcheck="false">
                                                                                                                </div>
                                                                                                                <div class="mailster-wrapper mailster-trminos-y-condiciones-wrapper">
                                                                                                                    <label for="mailster-trminos-y-condiciones-5">
                                                                                                                        <input type="hidden" name="trminos-y-condiciones" value="0">
                                                                                                                        <input id="mailster-trminos-y-condiciones-5" name="trminos-y-condiciones" style="font-weight: 400; text-transform: none; font-size: 16px" type="checkbox" value="1" class="mailster-trminos-y-condiciones class-check mailster-required" aria-required="true" aria-label="Acepto los términos y condiciones y las políticas de privacidad"> Acepto los <a href="<?php echo home_url(); ?>/terminos-y-condiciones/">términos y condiciones</a> y las <a href="<?php echo home_url(); ?>/politicas-de-privacidad/">políticas de privacidad</a>
                                                                                                                        <span class="mailster-required">*</span></label>
                                                                                                                </div>
                                                                                                                <div class="mailster-wrapper mailster-submit-wrapper form-submit">
                                                                                                                    <input name="submit" type="submit" onclick="click_form()" value="Suscribirse" class="submit-button button" aria-label="Suscribirse">
                                                                                                                </div>
                                                                                                                <a href="#close-modal" rel="modal:close" onclick="click_nomostrar()" style="font-size: 10px">No, gracias</a>
                                                                                                            </div>
                                                                                                        </form>

                                                                                                        <!-- fin formulario de eloqua -->
                                                                                                        <!-- inicio script de eloqua -->
                                                                                                        <script type="text/javascript" src="https://img04.en25.com/i/livevalidation_standalone.compressed.js">
                                                                                                        </script>
                                                                                                        <!-- fin script de eloqua -->
                                                                                                        <script src="<?php echo home_url(); ?>/wp-content/themes/shopkeeper/modales/js/home.js"></script>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <!-- Pop up SUBSCRIPCION -->
                                                                                    <?php  break; ?>

                                                                                        <?php } ?>

                                                                                            <script type="text/javascript">
                                                                                                _linkedin_partner_id = "1530388";
                                                                                                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                                                                                                window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                                                                                            </script>
                                                                                            <script type="text/javascript">
                                                                                                (function() {
                                                                                                    var s = document.getElementsByTagName("script")[0];
                                                                                                    var b = document.createElement("script");
                                                                                                    b.type = "text/javascript";
                                                                                                    b.async = true;
                                                                                                    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                                                                                                    s.parentNode.insertBefore(b, s);
                                                                                                })();
                                                                                            </script>
                                                                                            <noscript>
                                                                                                <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=1530388&fmt=gif" />
                                                                                            </noscript>
                                                                                            <style>
                                                                                            .woocommerce .widget_layered_nav ul li.chosen a::before, .woocommerce-page .widget_layered_nav ul li.chosen a::before, .widget_layered_nav ul li.chosen a::before, .woocommerce .widget_layered_nav ul li.chosen:hover a::before, .woocommerce-page .widget_layered_nav ul li.chosen:hover a::before, .widget_layered_nav ul li.chosen:hover a::before, .woocommerce .widget_layered_nav_filters ul li a::before, .woocommerce-page .widget_layered_nav_filters ul li a::before, .widget_layered_nav_filters ul li a::before, .woocommerce .widget_layered_nav_filters ul li a:hover::before, .woocommerce-page .widget_layered_nav_filters ul li a:hover::before, .widget_layered_nav_filters ul li a:hover::before, .woocommerce .widget_rating_filter ul li.chosen a::before, .shopkeeper-mini-cart, .minicart-message, .woocommerce-message, .woocommerce-store-notice, p.demo_store {

                                                                                              background-color: #f3f3f3 !important;

                                                                                              }
                                                                                                input[type="checkbox"]:checked::after,
                                                                                                .input-checkbox:checked::after {
                                                                                                    background-color: #0090ff !important;
                                                                                                }
                                                                                            </style>
                                                                                            </body>

                                                                                            </html>
