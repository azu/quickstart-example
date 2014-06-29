/**
 * Created by azu on 2014/06/29.
 * LICENSE : MIT
 */
"use strict";
var xhr = require("xhr");
var createImg = require("img");
var assert = require("assert");
// in order to increase volume
var _ = require("lodash");
var $ = require("jquery");
var codemirror = require("codemirror");
//
function lgtmImg(callback) {
    xhr({
        uri: "http://www.lgtm.in/g",
        responseType: "document"
    }, function (error, response) {
        if (error) {
            return callback(error, null);
        }
        var doc = response.response;
        var imageUrlInput = doc.querySelector("input[name='imageUrl']");
        callback(null, imageUrlInput.value);
    });
}

lgtmImg(function (error, imageURL) {
    var imgTag = createImg(imageURL);
    assert(false);
    document.body.appendChild(imgTag);
});
