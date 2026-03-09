/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject();
//startButton.img.src="images/mrt.jpg"
startButton.width=400;
startButton.hitBoxWidth=800
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/MENU.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			sounds.play(`Resident`, 0, 1)
		}

		//Hover Effect Graffic
		//startButton.color = `yellow`
		startButton.img.src = "images/ButtonNext.png"
	}
	else
	{
		//Default Button Graphic
		startButton.img.src = "images/ButtonNormal.png"
		//startButton.color = `red`
	}
	
	menuBackground.drawStaticImage();
	startButton.drawStaticImage();
	//startButton.render()
}
	
	
