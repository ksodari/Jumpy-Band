#pragma strict
var collided: boolean;

function OnTriggerEnter(collider:Collider){
	if(collider.gameObject.tag == "Player"){
		Destroy(collider.gameObject);
		collided = true;
	}
}
function OnGUI(){
	if(collided){
		GUI.Box(new Rect(Screen.width/2-40,Screen.height/2,80,20),"Game Over");
		if (GUI.Button(Rect(Screen.width/2-40,Screen.height/2-40,80,30),"Restart")){
			if(coinDestroyer.count>plankAdder.best){
				plankAdder.best = coinDestroyer.count;
				coinDestroyer.count=0;
			}else{
				coinDestroyer.count=0;
			}
			Application.LoadLevel(2);
		}
	}
}