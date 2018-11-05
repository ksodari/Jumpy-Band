#pragma strict
	
	var touchStart : Vector2;
	var touchEnd : Vector2;
	var flickLength = 0;
	var worldAngle : Vector3;
	var bandPrefab : GameObject;
	var swipeDist: float;
	var cam: Camera;
	var Sound : AudioSource;
	var factor : float;
	var xlimiter : float;
	var ylimiter : float;
	
	function Start(){
		//factor = 1.0;
		xlimiter = 100;
		ylimiter = 100;;
   	}
  
	function Update () {
		if (Input.touchCount > 0) {
			var touch = Input.touches[0];
			switch (touch.phase) {
			case TouchPhase.Began:
				touchStart= touch.position;
				break;
			case TouchPhase.Ended:
				touchEnd = touch.position;
				swipeDist = (touchEnd - touchStart).magnitude;
				Debug.Log(swipeDist);
				if(swipeDist>2.0){
					moveBand();
				}
			}
		}
	}
	function moveBand(){
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
		bandPrefab.rigidbody.AddForce(Vector3(dx*factor,dy*factor,dz*factor));
	}
 