using UnityEngine;
using System.Collections;

public class Loader : MonoBehaviour {
	public string[] items;
	// Use this for initialization
	IEnumerator Start () {
		WWW itemsData = new WWW ("http://localhost/JumpyBand_game/asdf.php");
		yield return itemsData;
		string itemsDataString = itemsData.text;
		print (itemsDataString);
		items = itemsDataString.Split (';');	
		print (GetDataValue (items [0], "Highscore:"));
	}

	string GetDataValue(string data,string index){
		string value = data.Substring (data.IndexOf (index) + index.Length);
		if (value.Contains ("|")) {
			value = value.Remove (value.IndexOf ("|"));
		}
		return value;
	}
	// Update is called once per frame
	void Update () {
	
	}
}
 