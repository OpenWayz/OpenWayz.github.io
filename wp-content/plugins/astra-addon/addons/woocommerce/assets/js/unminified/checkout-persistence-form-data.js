/**
 * Checkout Labels as Placeholders
 *
 * @package Astra Addon
 * @since 1.1.0
 */
jQuery( function( $ ) {
	var ast_check_is_local_storage = function(){ 
		var test = 'test';
		try {
			localStorage.setItem(test, test);
			localStorage.removeItem(test);
			return true;
		} catch(e) {
			return false;
		}
	}

	if ( false === ast_check_is_local_storage() ) {
		return;
	}

	var ast_form_data = {
		set : function (){
			
			var checkout_data 	= [];
			var checkout_form 	= $('form.woocommerce-checkout');
			
			localStorage.removeItem('ast_checkout_form');

			checkout_form.find('input[type=text], select').each(function(){
				checkout_data.push({ name: this.name, value: this.value});
			});

			ast_checkout_form = JSON.stringify(checkout_data);
			localStorage.setItem('ast_checkout_form', ast_checkout_form);
		},
		get : function (){
			
	
			if( localStorage.getItem('ast_checkout_form') != null ){
				
				checkout_data = JSON.parse( localStorage.getItem('ast_checkout_form') );
				
				for (var i = 0; i < checkout_data.length; i++) {
					$('form.woocommerce-checkout [name='+checkout_data[i].name+']').val(checkout_data[i].value);
				}
			}
		}
	}
	
	ast_form_data.get();
	
	$("form.woocommerce-checkout input, form.woocommerce-checkout select").change( function() {
		ast_form_data.set();
	});
});
