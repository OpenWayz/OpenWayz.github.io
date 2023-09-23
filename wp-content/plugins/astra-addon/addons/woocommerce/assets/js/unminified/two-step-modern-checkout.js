function twoStepModernCheckout(e) {
    e.preventDefault();
    const stepButtons       = document.querySelectorAll('.ast-embed-checkout-form-steps .steps');
    const activeClass       = 'ast-current';
    const stepOneClass      = 'step-one';
    const stepTwoClass      = 'step-two';
    const twoStepWrap       = document.querySelector( '.ast-two-step-wrap' );

    const activeTab = document.querySelector( '.ast-embed-checkout-form-steps .steps.ast-current' );
    const currentTab = e.currentTarget.querySelector( 'a' );

    if( activeTab ) {
        activeTab.classList.remove( activeClass );
    }

    if( currentTab && twoStepWrap ) {
        const stepsWrapper    = twoStepWrap.querySelector( '.woocommerce' );
        const currentTabValue = currentTab.getAttribute( 'href' );
        const stepTwoTrigger  = document.querySelector( '.ast-embed-checkout-form-steps .step-two' ); 

        stepButtons.forEach( single => {
            single.classList.remove( activeClass );
        });

        if( '#customer_details' === currentTabValue && stepsWrapper ) {
            stepsWrapper.classList.remove( stepTwoClass );
            stepsWrapper.classList.add( stepOneClass );
            e.currentTarget.classList.add( activeClass );
        } else if( '#ast-order-wrap' === currentTabValue && stepsWrapper ) {
            stepsWrapper.classList.remove( stepOneClass );
            stepsWrapper.classList.add( stepTwoClass );
            stepTwoTrigger.classList.add( activeClass );
        }
    }
}

function validateInputs( inputs ) {

    let access = true;
    let flag = false;

    inputs.forEach( single => {

        const type        = single.getAttribute( 'type' );
        const fieldRow    = single.closest( '.form-row' );
        if( fieldRow ) {

            const isSelect2   = fieldRow.querySelector( '.select2' );
            const fieldValue  = fieldRow && isSelect2 ? fieldRow.querySelector( '.select2-selection__rendered' ).getAttribute( 'title' ) : single.value ?  single.value.trim() : '';
            let hasClass      = fieldRow.classList.contains( 'validate-required' );
            let fieldFocus    = '';
    
            if( hasClass ) {
            //Check if checkbox is checked 
                if ( 'checkbox' === type && single.checked ) {
                    fieldValueCheckbox = true;
    
                    if ( false === fieldValueCheckbox ) {
                        if ( '' === fieldFocus ) {
                            fieldRow.classList.add( 'woocommerce-invalid' );
                            access = false;
                            fieldFocus = single;
                        } 
                    }
                } else {
                    fieldRow.classList.remove( 'woocommerce-invalid' ); 
                }
    
                //Check if value is a valid email or if value is empty
                if ( ( 'email' === type && false === /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( fieldValue ) ) || ( '' === fieldValue ) ) {
                    if ( '' === fieldFocus ) {
                        fieldRow.classList.add( 'woocommerce-invalid' );
                        access = false;
                        fieldFocus = single;
                    }
                } else {
                    fieldRow.classList.remove( 'woocommerce-invalid' ); 
                }

                
                //Focus the errored field
                if ( '' !== fieldFocus && false === flag ) {
                    flag = true;
                    fieldFocus.focus();
                }
            }
        }

    } );

    return access;

}

function validateCheckoutInputs() {
    const billingInputsParent    = document.querySelector( '.ast-two-step-wrap form.woocommerce-checkout .woocommerce-billing-fields, .ast-two-step-wrap form.woocommerce-checkout .woocommerce-account-fields' );
    const customerInformation    = document.querySelector( '.woocommerce-billing-fields__customer-info-wrapper' ); 
    const shippingInputParent    = document.querySelector( '.ast-two-step-wrap form.woocommerce-checkout .woocommerce-shipping-fields' ); 
    let access                   = false;
    const selectedInputs         = 'input[type="text"], input[type="tel"], input[type="email"], input[type="password"], input[type="checkbox"], .select2';
    let validationInputs;

    if( customerInformation ) {
        let customerInfoFields;
        const isLogin = document.querySelector( '#ast-customer-login-url' );
        const isCreateAccount = document.querySelector( '.ast-create-account-section' );
        const isCreateAccountOptional = customerInformation.querySelector( '#createaccount' );

        if( isLogin && isLogin.classList.contains( 'active' ) ) {
            customerInfoFields = customerInformation.querySelectorAll( '#billing_email, #billing_password' );
        } else if( ( astraAddon.is_registration_required && isCreateAccount && "block" === isCreateAccount.style.display ) || ( isCreateAccountOptional && isCreateAccountOptional.checked ) ) {
            customerInfoFields = customerInformation.querySelectorAll( '#billing_email, #account_username, #account_password' );
        } else {
            customerInfoFields = customerInformation.querySelectorAll( '#billing_email' );
        }

        if( customerInfoFields ) {
            if( ! validationInputs ) {
                validationInputs = customerInfoFields;
            } else {
                validationInputs = Array.prototype.slice.call(validationInputs).concat( Array.prototype.slice.call( customerInfoFields ) );
            }
        }
    }

    if( billingInputsParent ) {

        if( ! validationInputs ) {
            validationInputs = billingInputsParent.querySelectorAll( selectedInputs );
        } else {
            validationInputs = Array.prototype.slice.call(validationInputs).concat( Array.prototype.slice.call( billingInputsParent.querySelectorAll( selectedInputs ) ) );
        }   
    }

    if( shippingInputParent ) {  
        const isShippingToDifferenceChecked = shippingInputParent.querySelector( 'h3#ship-to-different-address input[type="checkbox"]' );

        if( isShippingToDifferenceChecked && isShippingToDifferenceChecked.checked ) {

            if( ! validationInputs ) {
                validationInputs = shippingInputParent.querySelectorAll( selectedInputs );
            } else {
                validationInputs = Array.prototype.slice.call(validationInputs).concat( Array.prototype.slice.call( shippingInputParent.querySelectorAll( selectedInputs ) ) );
            }
        }
    }

    access = validateInputs( validationInputs );

    return access;

}

document.addEventListener( "DOMContentLoaded" , function( event ) {
    const body =  document.querySelector( 'body' );

    if( ! astraAddon.cartflows_version && body && body.classList.contains( 'woocommerce-checkout' ) && body.classList.contains( 'ast-woo-two-step-modern-checkout' ) ) {
        const stepButtons = document.querySelectorAll('.ast-embed-checkout-form-steps .steps')
        const nextButton  = document.querySelector( '.ast-embed-checkout-form-nav-btns' ); 


        if( nextButton ) {
            nextButton.addEventListener( 'click' , function(e) {
                if( validateCheckoutInputs() ) {
                    twoStepModernCheckout(e);
                }
                
            });
        }
        if( stepButtons ) {
            stepButtons.forEach( single => {
                single.addEventListener( 'click' , function(e) {
                    if( validateCheckoutInputs() ) {
                        twoStepModernCheckout(e);
                    }
                });
            });
        }
    }
});
