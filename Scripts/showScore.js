var Text : UI.Text;
var Text1 : UI.Text;
var audi : AudioSource;
var audi1 : AudioSource;
Text.text = PlayerPrefs.GetInt("score").ToString();
if (PlayerPrefs.GetInt("score") > PlayerPrefs.GetInt("highScore")){
	PlayerPrefs.SetInt("highScore", PlayerPrefs.GetInt("score"));
	Text1.text = ("NEW HIGHSCORE!");
	audi.Play();
}
else{
	Text1.text = ("HIGHSCORE: " + PlayerPrefs.GetInt("highScore").ToString());
	audi1.Play();
}