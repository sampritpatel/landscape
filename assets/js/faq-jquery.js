/*FAQ JQUERY STARTS*/

	$(function(){
			$('li dt').each(function(){
				$(this).click(function(){					
				$(this).siblings('dd').toggle();  
				}); 
			});
	});

/*FAQ JQUERY ENDS*/