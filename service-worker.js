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

var precacheConfig = [["/2020/04/26/09/index.html","d30358b946f58b09b4a1377d0e594d86"],["/2020/04/26/1/index.html","f63351f23f9b1e30cd32afba9104b263"],["/2020/04/26/2/index.html","96696d8b874f183c6cc4b7f447dd2a07"],["/2020/04/26/3/index.html","5c3a32e5d881ce96b0fe3e53b4d20993"],["/2020/04/26/4/index.html","5c08929656db26f6b49329cc7e244c6c"],["/2020/04/26/5/index.html","5f6dd9647cc45849645b79b77f00642d"],["/2020/04/26/6/index.html","d43e2228d3821eb0bc71fcdad078037b"],["/2020/04/26/7/index.html","ccfdf881b99f754fdd6760bf99434f1c"],["/2020/04/28/08/index.html","bcfb6fdeb09d2826842c62f298dc47d9"],["/2020/04/28/10/index.html","9568c59139b6f1e3a446fa3fc06899ae"],["/2020/04/28/12/index.html","b1eff1779a0ad4a570b57c4bfb226c1d"],["/2020/04/28/13/index.html","3045bc7e04fbb3e427dd64c2b24219be"],["/2020/04/28/14/index.html","4ef8a4343b96c657485ea921746a8494"],["/2020/05/05/15/index.html","17e9d1e6e11fa872dbc370442b08b380"],["/2020/05/09/16/index.html","18ad41805d4b94cb0bca12e1f035261c"],["/2020/05/14/08/index.html","15dcb24939fb0ceb7d3cf6dbfe16575b"],["/404.html","a3b5d1209e5f7b492408b5578bb4ca15"],["/about/index.html","9b4346ce551b54919dcb9c6b98f72416"],["/archives/2020/04/index.html","922a9861041ea1de69045275dc11fbdf"],["/archives/2020/05/index.html","027aa55730c35e94b7002fa53e103ec4"],["/archives/2020/index.html","80df0fec6c65f138294337d153cf0d80"],["/archives/2020/page/2/index.html","96e018006c6ec3c4d05bbfd19e524721"],["/archives/index.html","469e05f1eaa2969083db3a1c185dba55"],["/archives/page/2/index.html","469e05f1eaa2969083db3a1c185dba55"],["/categories/index.html","38132d7d78182d763dc631a5a3e3367b"],["/categories/壁纸/index.html","73a45e348c4d93bfa333473126f669b3"],["/categories/文章/index.html","fac3280ec8033c64016c7db776466c8e"],["/categories/文章/散文/index.html","22b50e382449d3cc56af8e3c19ea81e0"],["/categories/时事/index.html","15d6b83a66401024cb436f4ee2f6399b"],["/categories/时事/疫情/index.html","e11a0a7879a63c65c82a690681e6efb3"],["/categories/网络摘抄/index.html","4bf0dfcec4404ebe035f7fef903784b7"],["/categories/网络摘抄/故事会/index.html","ec1e62902fd978a9568049140cc026a4"],["/categories/网络摘抄/故事会/鬼故事/index.html","f4e61dd75bafd7f338ea26a8875cd700"],["/categories/逸轩/index.html","20b61c10f909aa7a8c7c0756281c8ad2"],["/categories/逸轩/文章/index.html","c2a1b9d7c2a2e259ec86c3b2e07db401"],["/css/style.css","4d91fe8d38d673e4574d601ad3c40a17"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","5ff67f97c2ad791c57b7e714ae82c29a"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/img/loading.gif","0eaa9b90b7e529b483369c9d9fd5b404"],["/index.html","2fa02eff8bcd2557fe32160fd35ad099"],["/js/Valine.min.js","b1d2c9b89c70dbf0a8541bfd36afafa1"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/click_show_text.js","0319644a9086979f1d5e48c406762f02"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/mylist/index.html","c9ab98405ecb82571fe11f39f1d46d2d"],["/page/2/index.html","0814e01cc9066302223397da464fe779"],["/tags/index.html","7240f47c98ca0f29ee982d8e26766cf8"],["/tags/壁纸/index.html","dbd7331facc9f56b3b201242a4839b59"],["/tags/小说/index.html","1c18b6aabb2a0a4b5781dfc0be196035"],["/tags/想你/index.html","7aee572736d10a4fdeb2e422ae0bd7a4"],["/tags/想说的话/index.html","ee86287263a9778ea97d3945f8ffa6d5"],["/tags/故事会/index.html","4dcf619a54b5f21c5b38f85e8f57b0b7"],["/tags/散文/index.html","a08988c5351ead55fd1d281069fe2251"],["/tags/文章/index.html","77e98e959a37bbf06c0950de498e8495"],["/tags/时事/index.html","f7d3d9d7eeed9d31658e84be9c56d5cd"],["/tags/春色/index.html","28583ae48f03423d04cdc2e33bd56037"],["/tags/母亲节/index.html","1e16e9a82a0903003968781c6730e621"],["/tags/疫情/index.html","8caec6a0fbb060868f436f4aa5e13224"],["/tags/逸轩/index.html","5b38c25e6459112ec287943e154669b8"],["/tags/遇见/index.html","84cd94a49a4ec4c3e51d1bef0797882d"],["/tags/鬼故事/index.html","29a4117f092840b963f0791d090efbe5"]];
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







