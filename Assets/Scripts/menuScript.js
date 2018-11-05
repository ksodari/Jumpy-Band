#pragma strict
public static var playername: String;

function Quitgame(){
		Application.Quit();
	}
	
function PlayGame(){
	Application.LoadLevel(0);
}
function GameMenu(){
	Application.LoadLevel(1);
}
function SinglePlayer(){
	Application.LoadLevel(2);
}

function DoublePlayer(){
	Application.LoadLevel(3);
}
function PlaywithAI(){
	Application.LoadLevel(4);
}

function Update () {
	if(Input.GetKey(KeyCode.Escape))
	{	Application.Quit();}
}
function setName(nickname: String){
	playername = nickname;
}