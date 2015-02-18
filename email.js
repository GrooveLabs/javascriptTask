$(document).ready(function(){
  $(".btn-compose").click(function() {
    var html = $('.form-div').html();
    $('.form-holder').append(html);
  });
});

$(document).on('click', '.send-email', function(){
  console.log('To: ' + $(this).parent().find('.email').val());
  console.log('Subject: ' + $(this).parent().find('.subject').val());
  console.log('Body: ' + $(this).parent().find('.email-body').html());

  $(this).parent().parent().remove();
 });

$(document).on('click', '.close', function(){ 
  $(this).parent().parent().remove();
 });

$(document).on('click', '.min-max', function(){ 
  var email_body = $(this).parent().parent().find('.email-values')
  if (email_body.is(":visible"))
  {
    $(this).parent().parent().addClass('form-inactive');
    email_body.hide();
    $(this).removeClass('min');
    $(this).addClass('max');
  }
  else
  {
    $(this).parent().parent().removeClass('form-inactive');
    email_body.show();
    $(this).removeClass('max');
    $(this).addClass('min');
  }
 });

$(document).on('click', '.title', function(){ 
  var email_body = $(this).parent().parent().find('.email-values')
  if (email_body.is(":visible"))
  {
    $(this).parent().parent().addClass('form-inactive');
    email_body.hide();
    var min_max = $(this).parent().find('.min-max');
    min_max.removeClass('min');
    min_max.addClass('max');
  }
  else
  {
    $(this).parent().parent().removeClass('form-inactive');
    email_body.show();

    var min_max = $(this).parent().find('.min-max');
    min_max.removeClass('max');
    min_max.addClass('min');
  }
 });