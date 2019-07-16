var audi : Sprite;
var noAudio : Sprite;
var icon : UI.Image;
function toggle(){
	if (PlayerPrefs.GetInt("Mute") == 0){
		PlayerPrefs.SetInt("Mute", 1);
	}
	else{
		PlayerPrefs.SetInt("Mute", 0);
	}
}
while (true){
	if (PlayerPrefs.GetInt("Mute") == 0){
		icon.sprite = audi;
		AudioListener.volume = 1;
	}
	else{
		icon.sprite = noAudio;
		AudioListener.volume = 0;
	}
	yield;
}