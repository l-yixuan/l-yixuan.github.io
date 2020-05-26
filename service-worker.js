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

var precacheConfig = [["/2020/04/26/09/index.html","ca62df213a5dbeead514c7f69f13cf00"],["/2020/04/26/1/index.html","017b8d508fc0b87caa856f2ed2ba038c"],["/2020/04/26/2/index.html","2760c687ded054ee4256247a378f1145"],["/2020/04/26/3/index.html","8de6a366fed3d776225c5af12079e01d"],["/2020/04/26/4/index.html","f21b5422567749d05b7d63c900cec469"],["/2020/04/26/5/index.html","f0cbfe0af6afd553330348150c770443"],["/2020/04/26/6/index.html","843fe4c6f025f2c838ecd16294044482"],["/2020/04/26/7/index.html","992f46cf91f8204276afeb79bec19f4f"],["/2020/04/28/08/index.html","c2e15702039539f315f7c811add490e2"],["/2020/04/28/10/index.html","f42cc4b087678d2219f337f0ec288596"],["/2020/04/28/12/index.html","fc1d8ecddf62e779d772990e7cf5d6a2"],["/2020/04/28/13/index.html","228477e3c65875677cf2816776492f1f"],["/2020/04/28/14/index.html","159560f4cce0e7d3155cda55b9eb3612"],["/2020/05/05/15/index.html","d3c36dfd081b78111f22cec3e5597fc4"],["/2020/05/09/16/index.html","e7758b22b9f31187dc5373c42283d8e1"],["/2020/05/14/08/index.html","34e54e7b6176969f478bba32f5f64be9"],["/2020/05/21/17/index.html","1fb8e083628cffedf5ce91a93faab16a"],["/404.html","d5596a8894a57a4001a518da30257f2a"],["/about/index.html","3973799dff8f30933708606922d65f92"],["/archives/2020/04/index.html","578ba2ec449a4fb2e28e15ceba37d3cb"],["/archives/2020/05/index.html","d031794a179850faea14924b04465e81"],["/archives/2020/index.html","84cf4952fc03cf00108163c88e769aff"],["/archives/2020/page/2/index.html","eea4f9004c6e46aa63f69bd950667ec8"],["/archives/index.html","a11aec8988d6083b1bb5ad4738069607"],["/archives/page/2/index.html","a11aec8988d6083b1bb5ad4738069607"],["/categories/index.html","2b786da8adca9716b56085b4598ebab8"],["/categories/壁纸/index.html","831ad826fabb8881730524bce5a1b4b0"],["/categories/文章/index.html","e27e74cce6fdb00cbfed004dda49cea8"],["/categories/文章/散文/index.html","6cf4df37cba8772c0387744184cd6af4"],["/categories/时事/index.html","edb5d08da502a171638a83450e540185"],["/categories/时事/疫情/index.html","de144af82f3ebf9586e5019106b12863"],["/categories/网络摘抄/index.html","fcefe3454f3f9136cec237d711602ef8"],["/categories/网络摘抄/故事会/index.html","417be1d15247449590c31b9ed277153e"],["/categories/网络摘抄/故事会/鬼故事/index.html","e052563f47f497af3645a952d43ac14d"],["/categories/逸轩/index.html","e3219e79dd0e761e8484dc7402eae363"],["/categories/逸轩/文章/index.html","a11ad048a256bf44fcde715c86e78131"],["/css/style.css","e2cb45ec978e479bc3e73ef51d3d2f56"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","4fd808e6230ba24923527bd293fd7427"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","89a1df68e3bf164042ab53a21d74900f"],["/js/Valine.min.js","b1d2c9b89c70dbf0a8541bfd36afafa1"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/click_show_text.js","0319644a9086979f1d5e48c406762f02"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/mylist/index.html","3865dd18f5168f45b0bd6e484981bbbb"],["/page/2/index.html","384736939f52f9c59391a57de35e6437"],["/page/3/index.html","ab631b54db9e3c32b0eb9e10941c5c68"],["/tags/index.html","c06252b62f9c22f69f08fb7b4e5e3889"],["/tags/壁纸/index.html","8dfe074fcac2c1f9b1bb6e869732a430"],["/tags/小说/index.html","2b8b3007f29af867efaa9ec52f3a1188"],["/tags/想你/index.html","de04d29b9e5ed473e9ee008372d398b8"],["/tags/想说的话/index.html","ebd7c3ddbb71d0749376092d49b806d1"],["/tags/故事会/index.html","9efbf9bcc9bc6f735acc683fac4b98b2"],["/tags/散文/index.html","217f1b30fd6800c8d5c7695101ad8a72"],["/tags/文章/index.html","ea9e460757b1acb03d86c12894046e3a"],["/tags/时事/index.html","77e7d3cf039489f2646264b28d3aff35"],["/tags/春色/index.html","c3e1d3ded77881ff43655ddd5bcf3f2e"],["/tags/母亲节/index.html","d8a743408cc0a039e9dae65f8c5cfce7"],["/tags/疫情/index.html","ad04e430ca64a78d3b53dcc8ceca1c45"],["/tags/逸轩/index.html","7ecae9332c985e3e8eaa4c980d5a85f1"],["/tags/遇见/index.html","799f92ab6acd5b2db64cf26fb47356db"],["/tags/鬼故事/index.html","6c27d9643ade37e3694665460eddb3d4"]];
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







