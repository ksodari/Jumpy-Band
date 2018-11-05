#pragma strict

function OnTriggerEnter(info: Collider){
	if(info.gameObject.tag == "Player1"){
		AIscoreHandler.winner="You Are Champ";
		AIscoreHandler.player1triggered = true;
		AIscoreHandler.AIwintriggered = false;
		AIscoreHandler.bol=true;
		Destroy(info.gameObject);
	}
}