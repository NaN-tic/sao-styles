/*! jQuery UI - v1.10.3 - 2013-10-26
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
var active_sao_theme = function () {
    // This function is anonymous, is executed immediately and
    // the return value is assigned to active_sao_theme
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0; i<vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == "sao_theme") {
            return pair[1];
        }
    }
    return '';
} ();
console.log("active_sao_theme: ", active_sao_theme);
