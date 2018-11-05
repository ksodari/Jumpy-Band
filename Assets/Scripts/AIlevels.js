#pragma strict
var but1:boolean;
var but2:boolean;
var but3:boolean;
var AI:GameObject;
public static var modes: String = "Modes";
function Start () {
	but1 = true;but2 = false;but3 = false;
}

function OnGUI () {
	if(but1){
		
		if(GUI.Button(new Rect(Screen.width-0.3*Screen.width,Screen.height-0.06*Screen.height, 0.3*Screen.width, 0.06*Screen.height),""+modes)){
			but1 = false;but2 = true;but3 = true;
		}
	}
	if(but2){
		if(GUI.Button(new Rect(Screen.width-0.2*Screen.width,Screen.height-0.06*Screen.height, 0.2*Screen.width, 0.06*Screen.height),"Easy")){
			but1 = true;but2 = false;but3 = false;
			modes = "Easy";
			AI.GetComponent(EnemyAI).isLevelHard = false;
		}
	}
	if(but3){
		if(GUI.Button(new Rect(Screen.width-0.2*Screen.width,Screen.height-0.16*Screen.height, 0.2*Screen.width, 0.06*Screen.height),"Hard")){
			but1 = true;but2 = false;but3 = false;
			modes = "Hard";
			AI.GetComponent(EnemyAI).isLevelHard = true;
		}
	}
}