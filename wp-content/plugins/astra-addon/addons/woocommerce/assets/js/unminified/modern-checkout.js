function slideInAndOutContent(trigger, triggerContent) {
    const collapseToggle  = document.querySelector( trigger );
    const orderReviewText = document.querySelector( '.ast-order-review-toggle-text' );

    if( collapseToggle ) {

        collapseToggle.addEventListener( 'click', function( e ) {
            const collapseContentWrapper = document.querySelector( triggerContent );
            const collapseContent = collapseContentWrapper.querySelector('*');

            if( collapseContentWrapper ) {

                if( ! e.currentTarget.classList.contains( 'active' ) ) {
                    if( collapseContent ) {
                        e.currentTarget.classList.add( 'active' );
                        collapseContentWrapper.style.display = 'block';
                        collapseContentWrapper.style.maxHeight = `${collapseContent.clientHeight}px`;
                        if( orderReviewText ) {
                            orderReviewText.textContent = astraAddon.order_review_toggle_texts.toggle_hide_text;

							const mobileOrderReviewWrap = document.querySelector( '#ast-order-review-content' );
							const desktopOrderReviewWrap = document.querySelector( '#order_review' );

							// Update checkout when shipping methods changes.
							['change','select.shipping_method, input[name^="shipping_method"]'].forEach( event =>
								mobileOrderReviewWrap.addEventListener( event, function () {
								/**
								 * Uncheck all shipping radio buttons of desktop. Those will be auto updated by update_checkout action.
								 * While performing the update checkout, it searches for the selected shipping method in whole page.
								 */
								desktopOrderReviewWrap.querySelectorAll(
									'input[name^="shipping_method"][type="radio"]:checked'
									).forEach( checkedInput => {
										checkedInput.removeAttribute( 'checked' );
									} );
									document.querySelector( 'body' ).dispatchEvent( new CustomEvent( "update_checkout", { "detail": { update_shipping_method: true } }) );
								} )
							);
						}
					}
				} else {
					e.currentTarget.classList.remove( 'active' );
					collapseContentWrapper.style.maxHeight = 0;
                    setTimeout(() => {
                        collapseContentWrapper.style.display = 'none';
                    }, 300);
					if( orderReviewText ) {
						orderReviewText.textContent = astraAddon.order_review_toggle_texts.toggle_show_text;
					}
				}
			}
		} )
	}
}

let xhrCountEmail = 0;
let delayTimerEmail;

function validateInlineEmail() {

    const emailInput = document.querySelector( '#billing_email' );

    if( emailInput ) {
        // Email or username value.
        const emailText = emailInput.value;

        if ( 'undefined' === typeof emailText || astraAddon.is_logged_in ) {
			return;
		}

        const createAccountSection  = document.querySelector( '.ast-create-account-section' );
        const loginLabel            = document.querySelector( '.woocommerce-billing-fields__customer-login-label' );
        const validationMsgWrap     = document.querySelector( '.ast-email-validation-block' );
        const isLoginActive         = document.querySelector( '#ast-customer-login-url' );

        if ( '' !== emailText ) {

            if( validationMsgWrap ) {
                validationMsgWrap.remove();
            }

            clearTimeout( delayTimerEmail );

			const seqNumber = ++xhrCountEmail;

			delayTimerEmail = setTimeout( async function () {

                let xhrRequest = new XMLHttpRequest();
                xhrRequest.open( 'POST', astra.ajax_url, true );

                // Send the proper header information along with the request
                xhrRequest.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );

                xhrRequest.send( 'action=astra_woo_check_user_exist&user_name_email=' + emailText + '&security=' + astraAddon.check_user_exist_nonce );
                
                xhrRequest.onload = function () {
                    if ( xhrRequest.readyState == XMLHttpRequest.DONE ) {   // XMLHttpRequest.DONE == 4
                        if ( 200 <= xhrRequest.status || 400 <= xhrRequest.status ) {

							document.cookie = "ast_modern_checkout_useremail=" + emailText;

                            const jsonResponse = JSON.parse(xhrRequest.responseText);

                            if ( seqNumber !== xhrCountEmail ) {
                                return;
                            }

                            if( validationMsgWrap ) {
                                validationMsgWrap.remove();
                            }

                            if (
                                jsonResponse.data.success &&
                                isLoginActive &&
                                isLoginActive.classList.contains( 'active' )
                            ) {
                                emailInput.insertAdjacentHTML(
                                    'afterend',
                                    '<span class="ast-email-validation-block success">' +
                                        astraAddon.user_validation_msgs
                                            .success_msg +
                                        '</span>'
                                );
                                return;
                            }

                            if ( jsonResponse.data.success ) {
                                if ( jsonResponse.data.is_login_allowed ) {

                                    emailInput.insertAdjacentHTML(
                                        'afterend',
                                        '<span class="ast-email-validation-block success">' +
                                            astraAddon.user_validation_msgs
                                                .success_msg +
                                            '</span>'
                                    );

                                    if( isLoginActive && ! isLoginActive.classList.contains( 'active' ) ) {
                                        isLoginActive.click();
                                    }
                                }

                                if( createAccountSection ) {
                                    createAccountSection.style.display = 'none';
                                }

                                if( loginLabel ) {
                                    loginLabel.style.display = 'block';
                                }

                            } else {
                                if( isLoginActive && isLoginActive.classList.contains( 'active' ) ) {
                                    isLoginActive.click();
                                }

                                if( createAccountSection ) {

                                    const createAccountCheckbox = createAccountSection.querySelector( '.create-account label.checkbox' );

                                    // LearnDash fix.
                                    if( createAccountCheckbox ) {
                                        createAccountCheckbox.style.display = 'block';
                                    }

                                    createAccountSection.style.display = 'block';
                                }

                                if( loginLabel && '' == emailText ){
                                    loginLabel.style.display = 'none';
                                }

                            }
                        }
                    }
                }

            }, 300 );


        } else {

            if( isLoginActive && isLoginActive.classList.contains( 'active' ) ) {
                isLoginActive.click();
            }

            if( validationMsgWrap ) {
                validationMsgWrap.style.display = 'none';
            }

            if( loginLabel ) {
                loginLabel.style.display = 'block';
            }

            if( createAccountSection ) {
                createAccountSection.style.display = 'none';
            }
        }
    }

    return false;
}

function supportNativeEmailFunctionality() {

	const emailInput = document.querySelector( '#billing_email' );

	if( emailInput ) {
		// Email or username value.
		const emailText = emailInput.value;

		if ( 'undefined' === typeof emailText || astraAddon.is_logged_in ) {
			return;
		}

		const createAccountSection  = document.querySelector( '.ast-create-account-section' );

		if ( createAccountSection ) {
			if ( '' !== emailText ) {
				createAccountSection.style.display = 'block';
			} else {
				createAccountSection.style.display = 'none';
			}
		}
	}

	return false;
}

function woocommerceUserLogin() {
    const loginButton = document.querySelector( '.ast-customer-login-section__login-button' );

    if( ! loginButton ) {
        return;
    }

    loginButton.addEventListener( 'click' , function() {
        const emailAddress = document.querySelector( '#billing_email' );
        const password     = document.querySelector( '#billing_password' );

        if( ! emailAddress && password ) {
            return;
        }

        let xhrRequest = new XMLHttpRequest();

        xhrRequest.open( 'POST', astra.ajax_url, true );

        // Send the proper header information along with the request
        xhrRequest.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );

        xhrRequest.send( 'action=astra_woocommerce_login_user&user_name_email=' + emailAddress.value + '&password=' + password.value + '&security=' + astraAddon.woocommerce_login_nonce );

        xhrRequest.onload = function () {
            if ( xhrRequest.readyState == XMLHttpRequest.DONE ) {   // XMLHttpRequest.DONE == 4
                if ( 200 <= xhrRequest.status || 400 <= xhrRequest.status ) {

                    const jsonResponse = JSON.parse(xhrRequest.responseText);

                    if( jsonResponse.data.success ) {
                        location.reload();
                    } else {
                        const customerInfoNotice = document.querySelector( '.ast-customer-info__notice' );

                        if( customerInfoNotice ) {
                            customerInfoNotice.classList.add('active');
                            customerInfoNotice.innerHTML = jsonResponse.data.error;
                        }

                    }
                }
            }
        }
    } );
}

document.addEventListener("DOMContentLoaded", function (event) {
    const body = document.querySelector('body');
    if (!astraAddon.cartflows_version && body && body.classList.contains('woocommerce-checkout')) {
        const isNotWPComPackage = astraAddon.is_complete_package;
        const emailInput = document.querySelector('#billing_email');

        if (emailInput) {
            if (isNotWPComPackage) {
                emailInput.addEventListener('input', validateInlineEmail);
                validateInlineEmail();
            } else {
                emailInput.addEventListener('input', supportNativeEmailFunctionality);
                supportNativeEmailFunctionality();
            }
        }

        if (body && !body.classList.contains('ast-woo-two-step-modern-checkout')) {
            slideInAndOutContent('#ast-order-review-toggle', '#ast-order-review-content');
        }

        if (isNotWPComPackage) {
            slideInAndOutContent('#ast-customer-login-url', '#ast-customer-login-section');
            woocommerceUserLogin();
        }
    }
});
