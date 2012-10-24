// ==UserScript==
// @include http://www.youtube.com/*
// @include http://youtube.com/*
// @include http://vimeo.com/*
// @include http://www.ted.com/*
// @include http://ted.com/*
// @include http://www.twitch.tv/*
// @include http://twitch.tv/*
// ==/UserScript==
opera.extension.onmessage = function (event) {
    var message = event.data.split("|");

    var container = document.getElementById('pox' + message[0]);
	if (container != null) {
		if (message[1] == "fail") {
			//alert("Failed to play video, sorry :(");						
			setMessage("Play on XBMC ", container, "fail");
		} else {					
			setMessage("Play on XBMC ", container, "ok");
		}			
	}
};


// Icons from the Silk icon set by Mark James at famfamfam (http://www.famfamfam.com/lab/icons/silk/)
function setMessage(text, container, icon) {
	var img = document.createElement('img');
	switch (icon) {
		case "ok":
			img.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKfSURBVDjLpZPrS1NhHMf9O3bOdmwDCWREIYKEUHsVJBI7mg3FvCxL09290jZj2EyLMnJexkgpLbPUanNOberU5taUMnHZUULMvelCtWF0sW/n7MVMEiN64AsPD8/n83uucQDi/id/DBT4Dolypw/qsz0pTMbj/WHpiDgsdSUyUmeiPt2+V7SrIM+bSss8ySGdR4abQQv6lrui6VxsRonrGCS9VEjSQ9E7CtiqdOZ4UuTqnBHO1X7YXl6Daa4yGq7vWO1D40wVDtj4kWQbn94myPGkCDPdSesczE2sCZShwl8CzcwZ6NiUs6n2nYX99T1cnKqA2EKui6+TwphA5k4yqMayopU5mANV3lNQTBdCMVUA9VQh3GuDMHiVcLCS3J4jSLhCGmKCjBEx0xlshjXYhApfMZRP5CyYD+UkG08+xt+4wLVQZA1tzxthm2tEfD3JxARH7QkbD1ZuozaggdZbxK5kAIsf5qGaKMTY2lAU/rH5HW3PLsEwUYy+YCcERmIjJpDcpzb6l7th9KtQ69fi09ePUej9l7cx2DJbD7UrG3r3afQHOyCo+V3QQzE35pvQvnAZukk5zL5qRL59jsKbPzdheXoBZc4saFhBS6AO7V4zqCpiawuptwQG+UAa7Ct3UT0hh9p9EnXT5Vh6t4C22QaUDh6HwnECOmcO7K+6kW49DKqS2DrEZCtfuI+9GrNHg4fMHVSO5kE7nAPVkAxKBxcOzsajpS4Yh4ohUPPWKTUh3PaQEptIOr6BiJjcZXCwktaAGfrRIpwblqOV3YKdhfXOIvBLeREWpnd8ynsaSJoyESFphwTtfjN6X1jRO2+FxWtCWksqBApeiFIR9K6fiTpPiigDoadqCEag5YUFKl6Yrciw0VOlhOivv/Ff8wtn0KzlebrUYwAAAABJRU5ErkJggg==');
			break;
		case "fail":
			img.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJPSURBVDjLpZPLS5RhFMYfv9QJlelTQZwRb2OKlKuINuHGLlBEBEOLxAu46oL0F0QQFdWizUCrWnjBaDHgThCMoiKkhUONTqmjmDp2GZ0UnWbmfc/ztrC+GbM2dXbv4ZzfeQ7vefKMMfifyP89IbevNNCYdkN2kawkCZKfSPZTOGTf6Y/m1uflKlC3LvsNTWArr9BT2LAf+W73dn5jHclIBFZyfYWU3or7T4K7AJmbl/yG7EtX1BQXNTVCYgtgbAEAYHlqYHlrsTEVQWr63RZFuqsfDAcdQPrGRR/JF5nKGm9xUxMyr0YBAEXXHgIANq/3ADQobD2J9fAkNiMTMSFb9z8ambMAQER3JC1XttkYGGZXoyZEGyTHRuBuPgBTUu7VSnUAgAUAWutOV2MjZGkehgYUA6O5A0AlkAyRnotiX3MLlFKduYCqAtuGXpyH0XQmOj+TIURt51OzURTYZdBKV2UBSsOIcRp/TVTT4ewK6idECAihtUKOArWcjq/B8tQ6UkUR31+OYXP4sTOdisivrkMyHodWejlXwcC38Fvs8dY5xaIId89VlJy7ACpCNCFCuOp8+BJ6A631gANQSg1mVmOxxGQYRW2nHMha4B5WA3chsv22T5/B13AIicWZmNZ6cMchTXUe81Okzz54pLi0uQWp+TmkZqMwxsBV74Or3od4OISPr0e3SHa3PX0f3HXKofNH/UIG9pZ5PeUth+CyS2EMkEqs4fPEOBJLsyske48/+xD8oxcAYPzs4QaS7RR2kbLTTOTQieczfzfTv8QPldGvTGoF6/8AAAAASUVORK5CYII=');
			break;
		case "wait":
			img.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ6SURBVDjLjZO7T1NhGMY7Mji6uJgYt8bElTjof6CDg4sMSqIxJsRGB5F4TwQSIg1QKC0KWmkZEEsKtEcSxF5ohV5pKSicXqX3aqGn957z+PUEGopiGJ583/A+v3znvPkJAAjWR0VNJG0kGhKahCFhXcN3YBFfx8Kry6ym4xIzce88/fbWGY2k5WRb77UTTbWuYA9gDGg7EVmSIOF4g5T7HZKuMcSW5djWDyL0uRf0dCc8inYYxTcw9fAiCMBYB3gVj1z7gLhNTjKCqHkYP79KENC9Bq3uxrrqORzy+9D3tPAAccspVx1gWg0KbaZFbGllWFM+xrKkFQudV0CeDfJsjN4+C2nracjunoPq5VXIBrowMK4V1gG1LGyWdbZwCalsBYUyh2KFQzpXxVqkAGswD3+qBDpZwow9iYE5v26/VwfUQnnznyhvjguQYabIIpKpYD1ahI8UTT92MUSFuP5Z/9TBTgOgFrVjp3nakaG/0VmEfpX58pwzjUEquNk362s+PP8XYD/KpYTBHmRg9Wch0QX1R80dCZhYipudYQY2Auib8RmODVCa4hfUK4ngaiiLNFNFdKeCWWscXZMbWy9Unv9/gsIQU09a4pwvUeA3Uapy2C2wCKXL0DqTePLexbWPOv79E8f0UWrencZ2poxciUWZlKssB4bcHeE83NsFuMgpo2iIpMuNa1TNu4XjhggWvb+R2K3wZdLlAZl8Fd9jRb5sD+Xx0RJBx5gdom6VsMEFDyWF0WyCeSOFcDKPnRxZYTQL5Rc/nn1w4oFsBaIhC3r6FRh5erPRhYMyHdeFw4C6zkRhmijM7CnMu0AUZonCDCnRJBqSus5/ABD6Ba5CkQS8AAAAAElFTkSuQmCC');
			break;
	}
	
	container.innerHTML = '';
	container.appendChild(document.createTextNode(text));
	container.appendChild(img);
}
function getTimestamp() {
    var time = new Date;
    return time.getTime();
}

function getMeta(meta) {
    var m = document.getElementsByTagName('meta');
    for (var i in m) {
        if (m[i].getAttribute("property") == meta) {
            return m[i].getAttribute("content");
        }
    }
}

window.addEventListener('DOMContentLoaded', function () {
    var timestamp = getTimestamp();

    if (document.URL.search(/youtube/i) != -1) {
        var button = document.createElement('button');
        button.setAttribute("type", "button");
        button.setAttribute("role", "button");
        button.className = "yt-uix-button-default yt-uix-button";

        var span = document.createElement('span');
        span.setAttribute("class", "yt-uix-button-content");
        span.setAttribute("id", "pox" + timestamp);
        button.appendChild(span);
        span.appendChild(document.createTextNode("Play on XBMC"));

        var container = document.getElementById('watch-headline-user-info');

        if (container != null) {
            button.addEventListener("click", function () {
                var myRegexp = /[\?|&|#]v=([\w|-]*)/i;
                var match = myRegexp.exec(document.URL);

                if (match != null) {
                    opera.extension.postMessage("youtube|" + timestamp + "|" + match[1]);
					setMessage("Play on XBMC ", span, "wait");
                } else {
                    alert("Could not find video id!");
                }
            }, false);

            container.appendChild(button);
        }
    } else if (document.URL.search(/vimeo/i) != -1) {
        var button = document.createElement('a');
        button.className = "playontv btn iconify_plus_b";
		button.setAttribute("id", "pox" + timestamp);
        button.appendChild(document.createTextNode("Play on XBMC"));
        var container = document.getElementById('tools');

        if (container != null) {
            button.addEventListener("click", function () {

                var n = document.URL.lastIndexOf("/");
                var id = document.URL.substr(n);

                if (n > 0) {
                    opera.extension.postMessage("vimeo|" + timestamp + "|" + id);
					setMessage("Play on XBMC ", button, "wait");
                } else {
                    alert("Could not find video id!");
                }

            }, false);

            container.appendChild(button);
        }
    } else if (document.URL.search(/twitch/i) != -1) {
        var button = document.createElement('a');
        button.className = "primary_button";
        button.setAttribute("float", "right");
        var span = document.createElement('span');
        span.appendChild(document.createTextNode("Play on XBMC"));
		span.setAttribute("id", "pox" + timestamp);
        button.appendChild(span);

        var container = document.getElementById('follow_and_filters');

        if (container != null) {
            button.addEventListener("click", function () {
				var myRegexp = /.*[\/]([\w|0-9].*?)([\?]|$)/i;
				var match = myRegexp.exec(document.URL + "?");

				if (match != null) {
					opera.extension.postMessage("twitch|" + timestamp + "|" +  match[1] + /*getMeta("og:title") */ "|" +getMeta("og:image"));
					setMessage("Play on XBMC ", span, "wait");
				} else {
					alert("Could not find video id!");
				}				
            }, false);

            container.appendChild(button);
        }
    } else if (document.URL.search(/ted/i) != -1) {

        var button = document.createElement('a');
        button.className = "playontv btn iconify_plus_b";
		button.setAttribute("id", "pox" + timestamp);
        button.appendChild(document.createTextNode("Play on XBMC"));		
        var container = document.getElementById('maincontent');

        if (container != null) {
            button.addEventListener("click", function () {
                opera.extension.postMessage("ted|" + timestamp + "|" + document.URL + "|" + getMeta('og:image'));
				setMessage("Play on XBMC ", button, "wait");
            }, false);

            container.appendChild(button);
        }
    } else {
        console.log("******************************************************************************** not supported!!");
    }



}, false);