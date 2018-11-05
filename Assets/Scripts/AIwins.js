#pragma strict

function OnTriggerEnter(info: Collider){
	if(info.gameObject.tag == "Player2"){
		AIscoreHandler.winner="AI wins it!";
		AIscoreHandler.AIwintriggered = true;
		AIscoreHandler.player1triggered = false;
		AIscoreHandler.bol=true;
		Destroy(info.gameObject);
	}
}