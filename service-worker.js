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

var precacheConfig = [["/2020/04/26/09/index.html","892067185f79c3a47d2823d4902d2a14"],["/2020/04/26/1/index.html","87d9f6378b449b89446850534f7faf35"],["/2020/04/26/2/index.html","94a5b00db8fdc72308af66598dbd9c50"],["/2020/04/26/3/index.html","1330c737b9cb40acc9507d40b320df1f"],["/2020/04/26/4/index.html","51a5b1022c522ee56cb01962dff32d47"],["/2020/04/26/5/index.html","3dec22f53667e71185793d4197175f0b"],["/2020/04/26/6/index.html","8407f5b224ca8838d69ee271fdc56272"],["/2020/04/26/7/index.html","dcb25bda3ff3907367c67f86db218b69"],["/2020/04/28/08/index.html","ad46309be9dc0abad61e00f4c5696ad7"],["/2020/04/28/10/index.html","f74e192ae36ae37fcaac6550f843c642"],["/2020/04/28/12/index.html","ff13ca6c05c7c7d0ea598efe3f422299"],["/2020/04/28/13/index.html","de5287508f206bb8523d9db50d9e7d15"],["/2020/04/28/14/index.html","11b28143160b25765b0d5fbfb3215e7c"],["/2020/05/05/15/index.html","ab446b51e050f303cec0de64b4b14b7c"],["/2020/05/09/16/index.html","9682f0cd92b4faa4eada233de997091f"],["/2020/05/14/08/index.html","804b2fcf75608b5d6930e176d40b518a"],["/2020/05/21/17/index.html","297ea061271d4351619246905cffa6c7"],["/2020/06/06/18/index.html","9e02d32a6dd75596aacc8b7b946d1716"],["/2020/06/21/19/index.html","a0be2715ae80b05badc0726c7c03954d"],["/404.html","7ce45211b43053423a72dbd7b29d8d39"],["/about/index.html","92da1f851019e5a78c64dbb1213439b9"],["/archives/2020/04/index.html","10698c4f3fe820cf36b44403217c6c21"],["/archives/2020/05/index.html","77e4080a713e385a5c6ae42d2f5ee433"],["/archives/2020/06/index.html","99a3c5b8dfd696d9f0cec707d2bb39d9"],["/archives/2020/index.html","2f5a6ac9d6bf2f7394129a11913e0022"],["/archives/2020/page/2/index.html","23375626877396142b8f649af1bf6e40"],["/archives/index.html","6fdf366ff07bb3ff0a3dcc966e37b2da"],["/archives/page/2/index.html","6fdf366ff07bb3ff0a3dcc966e37b2da"],["/assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["/categories/index.html","d11bdf90ed65a0527ed38c3e821ea9aa"],["/categories/壁纸/index.html","82284da789f97d761c980633d013df91"],["/categories/文章/index.html","1e91e6ef160c534191c899ddb5274ce5"],["/categories/文章/page/2/index.html","2dfeb1fa5344b220303d5bc755e087ed"],["/categories/文章/散文/index.html","a3b54e8ed2330716a4dd7278690cc36f"],["/categories/时事/index.html","99e40e261ac7db521851e42cc1c03f44"],["/categories/时事/疫情/index.html","50c74135208fccf5aa25b01098de87df"],["/categories/网络摘抄/index.html","cc56ba77d3539f35a119715b86465437"],["/categories/网络摘抄/故事会/index.html","03e9d39dd7e0bbb57a3bbc5a22116c25"],["/categories/网络摘抄/故事会/鬼故事/index.html","2422661fee70f3eb3704055b6434e12b"],["/css/style.css","e2cb45ec978e479bc3e73ef51d3d2f56"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","919a5c1057a60b94afd519d4022b1a36"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","53c03804d896ce74d57ba63f502abb77"],["/js/Valine.min.js","b1d2c9b89c70dbf0a8541bfd36afafa1"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/click_show_text.js","0319644a9086979f1d5e48c406762f02"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/mylist/index.html","8fde10b8ee1e4f17180df7974b3c83e0"],["/page/2/index.html","ec87aec59c15896c992f1592f53e2e52"],["/page/3/index.html","11e864a77d28cb82170588f4bbc4e6a9"],["/tags/index.html","57869fcbf0030d6c049b8e8a67cbb9a7"],["/tags/壁纸/index.html","31cc6484875daf247e6ea76923435b18"],["/tags/小说/index.html","6b420ad7627ab9b2dc852059e8949ec1"],["/tags/想你/index.html","bf04dcec0037113f862807e0a6e0bdf5"],["/tags/想说的话/index.html","6ea46bbb1aab348b749d0ec47b9166d5"],["/tags/故事会/index.html","2b2b444a6691712fb53d965d3d15eb12"],["/tags/散文/index.html","c816e9589cd0b7bad48d67cf7d22e3e0"],["/tags/文章/index.html","c70604c2d01998270c918b8f2bfadd97"],["/tags/时事/index.html","f84c76d3bf7c3d69c1ae09920fd226ff"],["/tags/春色/index.html","c9db87f6acd170db87f61503609db3f2"],["/tags/母亲节/index.html","c7982f5e9c16e2755f561feea2b0a2d3"],["/tags/父亲节/index.html","077100b5d9a61c504e6f91e2e2d4892b"],["/tags/疫情/index.html","06ab612ae81ac7bdd59f8ebc506465ee"],["/tags/逸轩/index.html","d0c55493a8b34744ee51a3d4adcc1c55"],["/tags/遇见/index.html","f4d71dfd46ad6f56a74fe3537f580f17"],["/tags/鬼故事/index.html","7d0e12ac1b518cba7746154291229797"]];
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







