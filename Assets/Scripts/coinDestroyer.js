#pragma strict
public static var count:int;
public var coin_sound : AudioSource;
function OnTriggerEnter(info: Collider){
	if(info.gameObject.tag == "pickups"){
		Destroy(info.gameObject);
		coin_sound.Play();
		count++;
	}
}
