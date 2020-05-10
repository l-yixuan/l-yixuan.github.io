/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2020/04/26/09/index.html","b789e71ecc55681cf16680df513e1b24"],["/2020/04/26/1/index.html","4f9905f535f9350323117dccffd9abb4"],["/2020/04/26/2/index.html","71e2890f28c526f573652cc13aa22acc"],["/2020/04/26/3/index.html","120754bb20df4ce96da8bf0cbb99c41b"],["/2020/04/26/4/index.html","6f336163e344f1f9f93b184050460d7c"],["/2020/04/26/5/index.html","80a7785546a6bfebdb6a1d1c9af89e30"],["/2020/04/26/6/index.html","30db3f3a440945469c65c3aab5ef514b"],["/2020/04/26/7/index.html","3415902cfc5f4e65f6392b6307e9f508"],["/2020/04/28/08/index.html","5f33f78960136ad487ba2c8239d9afba"],["/2020/04/28/10/index.html","53b19ca997c6c48cde0e5893e9f86211"],["/2020/04/28/12/index.html","8a8025395d2509b23088fc0342d3dcb5"],["/2020/04/28/13/index.html","fa48be930db34095aa3b462e1dc5f188"],["/2020/04/28/14/index.html","8de459719d56a63aaf2ebeac1ee1f77b"],["/2020/05/05/15/index.html","98081efac334c0634cfa7a34e5d4050f"],["/2020/05/09/16/index.html","bc2d077a95822f33cf55d80d3b735050"],["/404.html","8fcd0a590b95339414120f5771412333"],["/about/index.html","92bf5a9ae19bd294b6a5e6ffd6135c19"],["/archives/2020/04/index.html","e8a871e6d162d2c5d91043615faceabc"],["/archives/2020/05/index.html","8d7e4cc40a9d9240c01edc5bd382c68a"],["/archives/2020/index.html","5cd52d1fcce3701a323719238a513658"],["/archives/index.html","dca60906ec65c8e00199b9e5677aa633"],["/categories/index.html","0a8c7f96687aa5048f65bf237e353538"],["/categories/壁纸/index.html","ef6e51dc492c7278a5106bda757f1510"],["/categories/文章/index.html","9ed45e11935b77fe51c9c9dfc140826c"],["/categories/文章/散文/index.html","064c651d7df82d58f24c1ef6319386e0"],["/categories/网络摘抄/index.html","082865f05e00d73e39589b7db40787d9"],["/categories/网络摘抄/故事会/index.html","2c0fa6346c78806a61c99c8cfd39a533"],["/categories/网络摘抄/故事会/鬼故事/index.html","b2d5cba4d72bb9d7905e9aaad06bfa42"],["/categories/逸轩/index.html","ac5dc0df9eb156e483aee7c8611b080e"],["/categories/逸轩/文章/index.html","14946230ed06041eac9231604c587b71"],["/css/style.css","e2cb45ec978e479bc3e73ef51d3d2f56"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","8e040a1cb13e0cb77ff52b1cc338a5a4"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/img/loading.gif","0eaa9b90b7e529b483369c9d9fd5b404"],["/index.html","29be5b96f3013bc569225c863e3f0dfc"],["/js/Valine.min.js","58f0edceb336ee7af148f672f4e5905a"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/click_show_text.js","0319644a9086979f1d5e48c406762f02"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/mylist/index.html","d4e35d0b06f67c3eca49695533bbbd1f"],["/page/2/index.html","5cb1abd8ff5e550e90c52238fe1fae20"],["/page/3/index.html","fb0f4fc613567cb45913d6af4ee93fe8"],["/tags/index.html","64cac1d44a134a2b5732d86ba4e7214e"],["/tags/壁纸/index.html","d5186f0f044b03f00a589bb84551635d"],["/tags/小说/index.html","1cb0d6940ef079720022f94b3874b77f"],["/tags/想你/index.html","05f6d847c243a36e8bed519f6a2d62ea"],["/tags/想说的话/index.html","39f8c88f1cc0c75d2512c263c57af484"],["/tags/故事会/index.html","e69e20bf7dd69bef1a9b429557c9b49c"],["/tags/散文/index.html","46c6b373aa6b0845037e9b847634f8d9"],["/tags/文章/index.html","02b52a67d3a2ba1a7e9727481beba568"],["/tags/春色/index.html","f5d1c2053a194bfd2e2fa357bb39a6cd"],["/tags/母亲节/index.html","a9272d200d89c26d918b0bfb76a715a0"],["/tags/逸轩/index.html","8b4be95aab048297c3215c422d04c192"],["/tags/遇见/index.html","e2ab04a83067ad523f78cbbf02ab35ad"],["/tags/鬼故事/index.html","f5598e8492d3fc63b72b11ad9a0ce327"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







