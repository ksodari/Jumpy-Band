#pragma strict

public static var bol: boolean;
public static var winner: String; 
static var player1Score : int = 3;
static var player2Score : int = 3;
public static var player1triggered: boolean;
public static var player2triggered: boolean;
public var myFontSize: float=Screen.width*0.08;
var W : int = Screen.width;
var H : int = Screen.height;

function Update(){
	if(player1triggered){
		player1Score+=1;
		player2Score-=1;
		player1triggered = false;
	}else if(player2triggered){
		player2Score+=1;
		player1Score-=1;
		player2triggered = false;
	}
}

function OnGUI () {
	if(GUI.Button(new Rect(Screen.width-0.25*Screen.width,0,0.25*Screen.width,0.05*Screen.height),"<size=myFontSize>Back</size>")){
		Application.LoadLevel(1);
	}
	GUI.color=Color.blue;
	GUI.Label(new Rect(0,0,0.4*Screen.width,0.07*H),"<size=myFontSize>Player 1 : "+player1Score+"</size>");
	GUI.color=Color.green;
	GUI.Label(new Rect(0,0.07*H,0.4*Screen.width,0.07*H),"<size=myFontSize>Player 2 : "+player2Score+"</size>");
	GUI.color=Color.white;
	if(bol&&(player1Score&&player2Score!=0)){
		GUI.Box(new Rect(Screen.width/2-0.37*Screen.width,H/2,0.75*Screen.width,0.08*H),winner);
		if(GUI.Button(new Rect(Screen.width/2-0.35*Screen.width,H/2+0.09*H,0.7*Screen.width,0.08*H),"<size=myFontSize>Next round</size>")){
			bol = false;
			Application.LoadLevel(3);
		}
	}else if(bol&&(player1Score==0||player2Score==0)){
		GUI.Box(new Rect(Screen.width/2-0.37*Screen.width,H/2,0.75*Screen.width,0.08*H),"<size=myFontSize>Game Over</size>");
		if(GUI.Button(new Rect(Screen.width/2-0.35*Screen.width,H/2+0.09*H,0.7*Screen.width,0.08*H),"<size=myFontSize>Restart Game</size>")){
			bol = false;
			player1Score = 3;
			player2Score = 3;
			Application.LoadLevel(3);
		}
	}
}