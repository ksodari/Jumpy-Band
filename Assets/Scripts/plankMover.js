#pragma strict
public static var speed: float = 1;
var plank:GameObject;
function start(){
	SpeedUp();
}
function Update () {
	plank.rigidbody.AddForce(Vector3(0,0,-speed));
}
function SpeedUp(){
	yield WaitForSeconds(60);
	speed+=0.5;
}