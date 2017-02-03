var no=0;
$(document).ready(function() {


	$('#compose_button').click(function(event) {
		var Message='<div class="new_message" id="message'+no+'" hidden="hidden"><div id="new_message_logo">New Message<a class="close'+no+'">x</a><a class="hidethis'+no+'">_</a></div><div class="message"><form><div class="Recipients" ><input name="Tobox" id="to'+no+'" placeholder="Recipients"></div><div class="Subject" ><input id="subject'+no+'" name="subjectbox" placeholder="Subject"></div><div  id="content'+no+'" contenteditable="true" class="MessageContent" >Message'+no+'</div> <div class="Send" ><div class="send_button" id="send'+no+'"> SEND</div></div></form></div></div>';
	    $('#MessagesBoard').append(Message);
	    var scriptadd = "<script>$('.close"+no+"').click(function(event) { $('#message"+no+"').remove();});";
	    scriptadd+= "$('.hidethis"+no+"').click(function(event) {$('#message"+no+"').hide(); messagebox='<div class=\"messagebox\" id =\"messagebox"+no+"\">Message No "+no+"</div>';$('#MessagesBoard').append(messagebox);});";
	    scriptadd+= "$('#send"+no+"').click(function(event) {console.log('Sending mail to : '+$('#to"+no+"').val());console.log('Message Subject :'+$('#subject"+no+"').val()); console.log('Message content : '+$('#content"+no+"').text()); });";
	    scriptaddmessage= "$('#messagebox"+no+"').click(function(event) {alert('dw');});</script>";

	    $('head').append(scriptadd);
	    $("#message"+no).show();
	    no+=1;
	});





});






