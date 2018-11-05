#pragma strict
public var distance :Vector3;
public var range : float;
public var player : GameObject;
public var enemyObject : GameObject;
public var isTurn : boolean;
public var factor : int;
public static var isLevelHard:boolean;
function Start () {
	isTurn = false;
	//isLevelHard = false;
}

function Update () {
	if(isLevelHard){
		range = 9;
	}else{
		range = 5;
	}
	if(isTurn){
		distance = (player.transform.position - enemyObject.transform.position);
		if(distance.magnitude<range){
			//flickOnTarget();
			factor = 75+Random.Range(1,10);
		}else{
			//flickRandom();
			factor = 20+Random.Range(10,25);
		}
		flickThatBand();
		isTurn = false;
		enemyObject.GetComponent(flick).isPlayer1Turn = true;
	}
}

function flickThatBand(){
	player.rigidbody.AddForce(Vector3(-distance.x*factor,distance.magnitude*factor,-distance.z*factor));
}