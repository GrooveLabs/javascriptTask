$(document).ready(function() {
    var flag = true;
    $('#compose').click(function(){
        $('.mainCompose').show();
    });
    $('.header').click(function(){
        if (flag) 
        {
        	$('.inner').hide();
        	flag = false;
        } 
        else
        {
        	$('.inner').show();
        	flag = true;
        };
    });
    $('#send').click(function(e){
    	e.preventDefault();
    	console.log("To:"+$('.email_to').val());
		console.log("Subject:"+$('.email_subject').val());
    	console.log("Content:"+$('.email_content').val());
    	$('.mainCompose').hide();
    });
});