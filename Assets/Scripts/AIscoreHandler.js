#pragma strict

public static var bol: boolean;
public static var winner: String; 
static var player1Score : int = 3;
static var AIScore : int = 3;
public static var player1triggered: boolean;
public static var AIwintriggered: boolean;
public var myFontSize: float=Screen.width*0.08;
var w : int = Screen.width;
var h : int = Screen.height;

function Update(){
	if(player1triggered){
		player1Score+=1;
		AIScore-=1;
		player1triggered = false;
	}else if(AIwintriggered){
		AIScore+=1;
		player1Score-=1;
		AIwintriggered = false;
	}
}

function OnGUI () {
	if(GUI.Button(new Rect(w-0.25*w,0,0.25*w,0.05*h),"<size=myFontSize>Back</size>")){
		Application.LoadLevel(1);
	}
	GUI.color=Color.green;
	GUI.Label(new Rect(2,0,0.4*w,0.07*h),"<size=myFontSize>Player : "+player1Score+"</size>");
	GUI.color=Color.grey;
	GUI.Label(new Rect(2,0.04*h,0.4*w,0.07*h),"<size=myFontSize>AI : "+AIScore+"</size>");
	GUI.color=Color.white;
	if(bol&&(player1Score&&AIScore!=0)){
		GUI.Box(new Rect(w/2-0.37*w,h/2,0.75*w,0.08*h),winner);
		if(GUI.Button(new Rect(w/2-0.35*w,h/2+0.09*h,0.7*w,0.08*h),"<size=myFontSize>Next round</size>")){
			bol = false;
			Application.LoadLevel(4);
		}
	}else if(bol&&(player1Score==0||AIScore==0)){
		GUI.Box(new Rect(w/2-0.37*w,h/2,0.75*w,0.08*h),"<size=myFontSize>Game Over</size>");
		if(GUI.Button(new Rect(w/2-0.35*w,h/2+0.09*h,0.7*w,0.08*h),"<size=myFontSize>Restart Game</size>")){
			bol = false;
			player1Score = 3;
			AIScore = 3;
			Application.LoadLevel(4);
		}
	}
}