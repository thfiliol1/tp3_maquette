jQuery(document).ready(function() {
    console.log( "ready!" );
    
    
    
    jQuery("#buttonAuth").click(function() {
		var email = jQuery("#field_email").val();
		var pwd = jQuery("#field_pwd").val();
		console.log("toto");
		console.log(pwd);
		console.log(email);
		
		jQuery.ajax({
			url: 'http://fc.isima.fr/~thfiliol1/web/tp3_maquette/mapage.php',
			type: 'POST', 
			data: {
				"email":email,
				"pwd":pwd 
			},
			beforeSend : function() { // traitements JS à faire AVANT l'envoi
					jQuery('#result').html('<div id="chargement" class="container" align="center"><img src="images/load.gif" alt="loader" id="ajax-loader" /></div>'); // ajout d'un loader pour signifier l'action
			},                 
			success : function(data, statut){
				jQuery("#result").remove();
				jQuery("#message").html(data);
				
			}
		});
	})
});
