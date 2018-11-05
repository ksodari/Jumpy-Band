#pragma strict
var collided: boolean;

function OnTriggerEnter(collider:Collider){
	if(collider.gameObject.tag == "Player1"||"Player2"){
		Destroy(collider.gameObject);
		collided = true;
	}
}
function OnGUI(){
	if(collided){
		GUI.Box(new Rect(Screen.width/2-0.3*Screen.width,Screen.height/2,0.6*Screen.width, 0.06*Screen.height),"Game Over");
		if (GUI.Button(Rect(Screen.width/2-0.3*Screen.width,Screen.height/2-0.16*Screen.height,0.6*Screen.width, 0.08*Screen.height),"Restart")){
			Application.LoadLevel(4);
		}
	}
}
