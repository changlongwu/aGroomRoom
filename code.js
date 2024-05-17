onEvent("buttonSubmit", "click", function( ) {
	setScreen("screenResult");
	var userPetColor = getText("text_inputPetColor");
	var userPetType = getText("text_inputPetType");
	var userPetActivity = getText("text_inputPetActivity");
	var userBallSize = getText("dropDown_BallSize");
	setText("text_result", "I have a pet " + userPetType+". "+ "He is " + userPetColor+'. '+'His favorite ball size is '+ userBallSize + '.');
});
