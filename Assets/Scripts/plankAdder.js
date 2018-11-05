#pragma strict

var plank: GameObject;
var x:float;
var dir:float;
var points: int;
public static var best: int;
public var myFontSize: float=Screen.width*0.08;

function Start () {
	x=-7;
	dir=2.2;
	wait();
}
function Update(){
	points = coinDestroyer.count; //calling from coinDestroyer file for count variable
}

function wait(){
	while(true){
		yield WaitForSeconds(2);
		var newPlank = Instantiate(plank,Vector3(x,10,171),Quaternion.identity) as GameObject;
		
		x=x+dir*6;
		if(x>12){
			x=12;
			dir=dir*(-1);
		}
		if(x<-7.5){
			x=-7.5;
			dir=dir*(-1);
		}
		newPlank.rigidbody.AddForce(Vector3(0,0,-5));
	}
}

//for back button
function OnGUI(){
    //myFontSize = Screen.width*0.08;
	GUI.Box(new Rect(Screen.width/2-0.2*Screen.width,2,0.4*Screen.width,0.07*Screen.height),"<size=myFontSize>Coins: "+points+"</size>");
	if (GUI.Button(Rect(Screen.width-0.25*Screen.width,1,0.25*Screen.width,0.06*Screen.height),"<size=myFontSize>Back</size>")){
		Application.LoadLevel(1);
	}
	GUI.contentColor = Color.black;
	GUI.Label(new Rect(5,2,0.3*Screen.width,.07*Screen.height),"<size=myFontSize>Best: "+best+"</size>");
}