// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){

		//VALIDATION FOR PASSWORD FIELD (COLOR CODED)
	 $('input[name="user[password]"]').on('keyup', function(evt){
        evt.preventDefault();
        var emailField = $(this);
        var emailLength = $(this).val().length;
        if (emailLength >= 8 && emailLength <= 20){
          emailField.css("background-color", "rgb(89,193,114)");
        } else {
          emailField.css("background-color", "rgb(255,1,1)");
        }
      });

	 //VALIDATION FOR FORM FIELDS (DISABLE SUBMIT BUTTON UNTIL INPUTS ARE FILLED)
	 $('input.signup').on('keyup', function(evt){
	 	evt.preventDefault();
	 	var emailLength = $('input[type="text"]').val().length;
	 	var passwordLength = $('input[type="password"]').val().length;
	 	if(emailLength > 0 && passwordLength >= 8 && passwordLength <= 20){
		 	$('input[type="submit"]').removeAttr('disabled');
		 	$('#validation-detector').css('display', 'none');
		 	$('#validation-message').text('')
		 } else {
		 	$('input[type="submit"]').attr('disabled', 'disabled');
		 	$('#validation-detector').css('display', 'block');
		 };
	 });

	 //VALIDATION FOR FORM FIELDS (NOTIFIES USER OF ERROR)
	 $('#validation-detector').on('click', function(evt){
	 	evt.preventDefault();
	 	console.log('hello');
	 	var emailLength = $('input[type="text"]').val().length;
	 	var passwordLength = $('input[type="password"]').val().length;
	 	if(emailLength < 1){
		 	$('#validation-message').text('Please enter an email address.');
		 } else if(passwordLength < 8 || passwordLength > 20){
		 	$('#validation-message').text('Password must be between 8 and 20 characters long.');
		 } else {
		 };
	 });
	 
});