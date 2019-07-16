import UnityEngine.SceneManagement;
function Prompt () {
	SceneManager.LoadScene("exitPrompt");
}

function Quit () {
	Application.Quit();
}

function No () {
	SceneManager.LoadScene("menu");
}