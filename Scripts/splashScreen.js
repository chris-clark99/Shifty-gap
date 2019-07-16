import UnityEngine.SceneManagement;
var anim : Animation;
while (true){
	if (!anim.IsPlaying("splashRotate")){
		SceneManager.LoadScene("menu");
	}
	yield;
}