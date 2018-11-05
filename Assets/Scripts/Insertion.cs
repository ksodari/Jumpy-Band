using UnityEngine;
using System.Collections;

public class Insertion : MonoBehaviour {
	public GameObject text;
	public string username;
	// Use this for initialization
	void Start () {

		WWWForm form = new WWWForm ();
		form.AddField ("user", username);
		form.AddField ("score", "");

		WWW postGarneSite = new WWW ("http://localhost/Jumpyband/InsertData.php",form);

	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
