using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using GooglePlayGames;
using UnityEngine.SocialPlatforms;
public class Post : MonoBehaviour {
    void Start()
    {
        Social.ReportScore(PlayerPrefs.GetInt("highScore"), "CgkI4KLb8NwYEAIQAQ", (bool success) => {
        });
        if (PlayerPrefs.GetInt("highScore") >= 10)
        {
            Social.ReportProgress("CgkI4KLb8NwYEAIQAA", 100.0f, (bool success) => {
            });
        }
        if (PlayerPrefs.GetInt("highScore") >= 20)
        {
            Social.ReportProgress("CgkI4KLb8NwYEAIQAw", 100.0f, (bool success) => {
            });
        }
        if (PlayerPrefs.GetInt("highScore") >= 30)
        {
            Social.ReportProgress("CgkI4KLb8NwYEAIQBA", 100.0f, (bool success) => {
            });
        }
        if (PlayerPrefs.GetInt("highScore") >= 40)
        {
            Social.ReportProgress("CgkI4KLb8NwYEAIQBQ", 100.0f, (bool success) => {
            });
        }
        if (PlayerPrefs.GetInt("highScore") >= 50)
        {
            Social.ReportProgress("CgkI4KLb8NwYEAIQBg", 100.0f, (bool success) => {
            });
        }
    }
}
