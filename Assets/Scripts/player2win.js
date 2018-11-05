#pragma strict

function OnTriggerEnter(info: Collider){
	if(info.gameObject.tag == "Player2"){
		scoreHandler.winner="P2 wins the band";
		scoreHandler.player1triggered = false;
		scoreHandler.player2triggered = true;
		scoreHandler.bol=true;
		Destroy(info.gameObject);
	}
}