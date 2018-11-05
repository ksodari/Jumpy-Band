#pragma strict

function OnTriggerEnter(info: Collider){
	if(info.gameObject.tag == "Player1"){
		scoreHandler.winner="P1 wins the band";
		scoreHandler.player1triggered = true;
		scoreHandler.player2triggered = false;
		scoreHandler.bol=true;
		Destroy(info.gameObject);
	}
}