import UnityEngine.SceneManagement;
var anim : Animation;
function OnCollisionEnter(coll: Collision) {
    if ((coll.gameObject.name == "right") || (coll.gameObject.name == "left")){
    	anim.Stop();
        SceneManager.LoadScene("highscore");
		}
}