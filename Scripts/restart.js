var rb : GameObject;
gameObject.transform.position = Vector2(Random.Range(-1.0, 1.0), 5.5);
function Update (){
	if (gameObject.transform.position.y <= -6){
		gameObject.transform.position = Vector2(Random.Range(-1.0, 1.0), 5.5);
		rb.GetComponent.<Rigidbody>().velocity = Vector3.zero;
		PlayerPrefs.SetInt("score", PlayerPrefs.GetInt("score")+1);
	}
}