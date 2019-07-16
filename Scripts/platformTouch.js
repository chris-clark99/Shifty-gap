var movement : Animation;
var audi: AudioSource;
function move(){
	if (gameObject.transform.position.x == -1.6){
		movement.Play("right");
		audi.Play();
	}
	if (gameObject.transform.position.x == 1.6){
		movement.Play("left");
		audi.Play();
	}
}
if (PlayerPrefs.GetInt("Direction")==1){
	movement.Play("startLeft");
}
if (PlayerPrefs.GetInt("Direction")==2){
	movement.Play("startRight");
}