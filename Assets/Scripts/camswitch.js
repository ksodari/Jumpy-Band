//Script for switching between cameras within your scene.

public var topCamera : Camera ;
public var player1Cam : Camera ;
public var player2Cam : Camera ;

function start(){
	player1Cam.camera.enabled = true;
  	player2Cam.camera.enabled = false;
  	topCamera.camera.enabled = false;
}
function toggle() {
  if(player1Cam.camera.enabled == true){  	
  	player1Cam.camera.enabled = false;
  	topCamera.camera.enabled = true;
  	player2Cam.camera.enabled = false;
  }
   else if(player2Cam.camera.enabled == true){  	
  	player2Cam.camera.enabled = false;
  	topCamera.camera.enabled = true;
  	player1Cam.camera.enabled = false;
  }
  else if(topCamera.camera.enabled == true){  	
  	if(flick2player.isPlayer1Turn || flick.isPlayer1Turn){
  		topCamera.camera.enabled = false;
  		player1Cam.camera.enabled = true;
  		player2Cam.camera.enabled = false;
  	}else{
  		topCamera.camera.enabled = false;
  		player2Cam.camera.enabled = true;
  		player1Cam.camera.enabled = false;
  	}
  }
}