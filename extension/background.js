opera.extension.onmessage = function (event) {
    console.log("opera.extension.onmessage: " + event.data);

    var data = event.data.split("|");

    console.log("Playing " + data[0] + " video ts " + data[1] + "(" + data + ")");

    switch (data[0]) {
    case "youtube":
        playYoutubeMovie(data[1], data[2]);
        break;
    case "vimeo":
        playVimeoMovie(data[1],  data[2]);
        break;
    case "ted":
        playTEDMovie(data[1], data[2], data[3]);
        break
    case "twitch":
        playTwitchMovie(data[1], data[2].toLowerCase(), data[3]);
        break;

    default:
        console.log("Unknown supplied: " + data[0]);
    }

    console.log("Bye");
}

// Set the properties of the button
var buttonProperties = {
    disabled: false,
    title: 'Play',
    icon: 'images/control_play.png',
    onclick: function () {
        var data = {
            "jsonrpc": "2.0",
            "method": "Player.PlayPause",
            "params": {
                "playerid": 1
            },
            "id": 0
        };

        console.log("Response: " + rpc(createURL(), data));
    }
};

// Create the button and add it to the toolbar
var button = opera.contexts.toolbar.createItem(buttonProperties);
opera.contexts.toolbar.addItem(button);

function createURL() {
    return "http://" + widget.preferences.getItem("xbmcServerUser") + ":" + widget.preferences.getItem("xbmcServerPassword") + "@" + widget.preferences.getItem("xbmcServerHost") + ":" + widget.preferences.getItem("xbmcServerPort") + "/jsonrpc";
}

function playYoutubeMovie(timestamp, id) {
    var data = {
        "jsonrpc": "2.0",
        "method": "Player.Open",
        "params": {
            "item": {
                "file": "plugin://plugin.video.youtube/?action=play_video&videoid=" + id
            }
        },
        "id": 1
    };
    console.log("Response: " + rpc(createURL(), data, timestamp));
}

function playTwitchMovie(timestamp, channel, icon) {
    var data = {
        "jsonrpc": "2.0",
        "method": "Player.Open",
        "params": {
            "item": {
                "file": "plugin://plugin.video.twitch/?mode=play&channelname=" + channel // + "&icon=" + encodeURIComponent(icon)
            }
        },
        "id": 1
    };
    console.log("Response: " + rpc(createURL(), data, timestamp));
}


function playTEDMovie(timestamp, url, icon) {
    console.log("Playing TED movie");
    var data = {
        "jsonrpc": "2.0",
        "method": "Player.Open",
        "params": {
            "item": {
                "file": "plugin://plugin.video.ted.talks/?url=" + encodeURIComponent(url) + "&mode=playVideo&icon=" + encodeURIComponent(icon)
            }
        },
        "id": 1
    };
    console.log("Response: " + rpc(createURL(), data, timestamp));
}

function playVimeoMovie(timestamp, id) {
    var data = {
        "jsonrpc": "2.0",
        "method": "Player.Open",
        "params": {
            "item": {
                "file": "plugin://plugin.video.vimeo/?action=play_video&videoid=" + id
            }
        },
        "id": 1
    };

    console.log("Response: " + rpc(createURL(), data, timestamp));
}

function rpc(url, data, timestamp) {
    // Try to get the contents of the URL
    var response;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, false);

    xhr.onreadystatechange = function () {        
        if (xhr.readyState == 4 && xhr.status == 200) {
            opera.extension.broadcastMessage(timestamp + "|ok");
			response = this.responseText;
        }
		else if (xhr.readyState == 4) {
            opera.extension.broadcastMessage(timestamp + "|fail");
			response = this.responseText;
        }
        return false;
    };

    xhr.setRequestHeader("Content-type", "application/json");
	console.log(JSON.stringify(data));

    xhr.send(JSON.stringify(data));
    return response;
}

function postPluginMessage(url) {
    // Try to get the contents of the URL
    var response;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, false);

    xhr.onreadystatechange = function () {

        opera.postError("Status: " + this.status + " Data: " + this.responseText + " from " + url);
        return false;
    };

    xhr.setRequestHeader("Content-type", "application/json");
    var request = {
        "jsonrpc": "2.0",
        "method": "Player.PlayPause",
        "params": {
            "playerid": 0
        },
        "id": 0
    };

    console.log(JSON.stringify(request));

    xhr.send(JSON.stringify(request));
    return response;
}