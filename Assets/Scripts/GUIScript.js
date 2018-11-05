#pragma strict

var w : float = Screen.width;
var h :float = Screen.height;
var startGUISkin: GUISkin;
var nickname:String;
function Start(){
	nickname = menuScript.playername;
}
function OnGUI(){
	GUI.skin = startGUISkin;
	GUI.Label(new Rect(w/2-0.4*w,0.05*h,0.8*w,0.08*h),"Let's Play "+nickname+"!");
	
	if(GUI.Button(new Rect(w/2-0.4*w,h/2-0.3*h, 0.8*w, 0.09*h),"Single Player")){
		Application.LoadLevel(2);
	}else if(GUI.Button(new Rect(w/2-0.4*w,h/2-.095*h, 0.8*w, 0.09*h),"Double Player")){
		Application.LoadLevel(3);	
	}else if(GUI.Button(new Rect(w/2-0.4*w,h/2+0.1*h, 0.8*w, 0.09*h),"Play AI")){
		Application.LoadLevel(4);	
	}else if(GUI.Button(new Rect(w/2-0.3*w,h/2+0.3*h, 0.6*w, 0.09*h),"MENU")){
		Application.LoadLevel(0);
	}	 
}