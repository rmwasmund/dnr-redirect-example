chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [1, 2],
}, () => {
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        "id": 1,
        "action": {
            "redirect": {
                "extensionPath": "/web_accessible_resources/noop-1s.mp4"
            },
            "type": "redirect"
        },
        "condition": {
            "domains": ["open.spotify.com"],
            "isUrlFilterCaseSensitive": false,
            "resourceTypes": ["media"],
            "urlFilter": "||spotifycdn.com/audio/"
        },
        "priority": 50
      },
      {
        "id": 2,
        "action": {
            "redirect": {
                "regexSubstitution": "\\1video-js\\2"
            },
            "type": "redirect"
        },
        "condition": {
            "isUrlFilterCaseSensitive": false,
            "regexFilter": "(^https://embed\\.wcostream.com/inc/embed/)index(\\.php\\?file=.*)"
        },
        "priority": 50
      },
    ],
  });
});
