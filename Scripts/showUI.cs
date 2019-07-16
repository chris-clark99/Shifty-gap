using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using GooglePlayGames;
using GooglePlayGames.BasicApi;
using UnityEngine.SocialPlatforms;
public class showUI : MonoBehaviour {
    public void Achievements()
    {
        Social.ShowAchievementsUI();
    }

    public void Leaderboards()
    {
        PlayGamesPlatform.Instance.ShowLeaderboardUI("CgkI4KLb8NwYEAIQAQ");
    }
}
