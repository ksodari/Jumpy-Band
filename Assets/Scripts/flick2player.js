#pragma strict
	
	var touchStart : Vector2;
	var touchEnd : Vector2;
	var flickLength = 0;
	var worldAngle : Vector3;
	var swipeDist: float;
	var cam1: Camera;
	var cam2: Camera;
	var player1 : GameObject;
	public static var isPlayer1Turn : boolean;
	var player2 : GameObject;
	public var isPlayer2Turn : boolean;
	var Sound : AudioSource;
	var factor : float;
	var xlimiter : float;
	var ylimiter : float;
	var touch: Touch;
	
	function Start(){
		isPlayer1Turn = true;
		isPlayer2Turn = false;
		//xlimiter = 100;
		//ylimiter = 100;
   	}
  
	function Update () {
		
		if (isPlayer1Turn) {
			if (Input.touchCount > 0) {
				var touch1 = Input.touches[0];
				switch (touch1.phase) {
				case TouchPhase.Began:
					touchStart= touch1.position;
					break;
				case TouchPhase.Ended:
					touchEnd = touch1.position;
					swipeDist = (touchEnd - touchStart).magnitude;
					//Debug.Log(swipeDist);
					if(swipeDist>5.0){
						isPlayer1Turn = false;
						moveBand(player1);
						isPlayer2Turn = true;
					}
				}
			}
		}
		else{
			if (Input.touchCount > 0) {
				var touch2 = Input.touches[0];
				switch (touch2.phase) {
				case TouchPhase.Began:
					touchEnd= touch2.position;
					break;
				case TouchPhase.Ended:
					touchStart = touch2.position;
					swipeDist = (touchEnd - touchStart).magnitude;
					//Debug.Log(swipeDist);
					if(swipeDist>5.0){
						isPlayer2Turn = false;
						moveBand(player2);
						isPlayer1Turn = true;
					}
				}
			}
		}
	}
	function moveBand(player:GameObject){
		Sound.Play();
		var dx = touchEnd.x-touchStart.x;
		if(dx>xlimiter){
			dx = xlimiter;
		}
		var dz = touchEnd.y-touchStart.y;
		if(dz>ylimiter){
			dz = ylimiter;
		}
		var dy = swipeDist;
		player.rigidbody.AddForce(Vector3(dx*factor,dy*factor,dz*factor));
		yield WaitForSeconds(2);
		if(isPlayer1Turn){
			cam1.camera.enabled = true;
			cam2.camera.enabled = false;
		}else{
			cam2.camera.enabled = true;
			cam1.camera.enabled = false;
		}
	}
 