var Text : UI.Text;
PlayerPrefs.SetInt("score", 0);
function Update () {
	var score = PlayerPrefs.GetInt("score");
	Text.text = score.ToString();
}