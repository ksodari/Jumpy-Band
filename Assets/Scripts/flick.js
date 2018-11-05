#pragma strict
	
	var touchStart : Vector2;
	var touchEnd : Vector2;
	var flickLength = 0;
	var worldAngle : Vector3;
	var bandPrefab : GameObject;
	var swipeDist: float;
	var cam: Camera;
public static var isPlayer1Turn : boolean;
	var enemyObject : GameObject;
	var Sound : AudioSource;
	var factor : float;
	var xlimiter : float;
	var ylimiter : float;
	
	function Start(){
		isPlayer1Turn = true;
		//factor = 2;
		xlimiter = 120;
		ylimiter = 120;;
   	}
  
	function Update () {
		if (isPlayer1Turn) {
			if (Input.touchCount > 0) {
				var touch = Input.touches[0];
				switch (touch.phase) {
				case TouchPhase.Began:
					touchStart= touch.position;
					break;
				case TouchPhase.Ended:
					touchEnd = touch.position;
					swipeDist = (touchEnd - touchStart).magnitude;
					//Debug.Log(swipeDist);
					if(swipeDist>5.0){
						moveBand();
					}
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
		isPlayer1Turn = false;
		yield WaitForSeconds(3);
		enemyObject.GetComponent(EnemyAI).isTurn = true;
	}
 