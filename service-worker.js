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

var precacheConfig = [["/2020/04/26/09/index.html","9b6b8bdd93a84f04fb21ceb6898a8852"],["/2020/04/26/1/index.html","2753c4de162c462fefde525314727eab"],["/2020/04/26/2/index.html","128b77afef12a4042837fe2f3746d849"],["/2020/04/26/3/index.html","d00758607ebca538b0c0ace8af759572"],["/2020/04/26/4/index.html","c6bdde40b06c34866e4eaaef7e2a059b"],["/2020/04/26/5/index.html","dc219520ede27c5a4801b3b4f2e2437d"],["/2020/04/26/6/index.html","8f83df24edfcce5b7e457f3f3fad9985"],["/2020/04/26/7/index.html","761b3efd0abe5405e7c07943a26d28d4"],["/2020/04/28/08/index.html","3fe61c159ecdd2578d17e9187c967e2c"],["/2020/04/28/10/index.html","195d6b50e376e2342b0920a7b40211b8"],["/2020/04/28/12/index.html","1d54ebb4b3ee51766b0a60455d092037"],["/2020/04/28/13/index.html","cf807187b8cc4cc796cd6b6cb0dfe1a4"],["/2020/04/28/14/index.html","dc78285f6e9810b0d4724b5ca8aaacbc"],["/2020/05/05/15/index.html","66f321fa6c475181798269697c01e0ff"],["/2020/05/09/16/index.html","2498a32e58788b89391071d3f8c5e206"],["/2020/05/14/08/index.html","91958cd257137a30010cda4c282a84f0"],["/2020/05/21/17/index.html","e961003fbe2af3f67be1f084fd2bf87e"],["/2020/06/06/18/index.html","3a6fb7f2dabbf18b5b340e66ee21d667"],["/404.html","7006d8fb5acbe8485a8337e60784a204"],["/about/index.html","4905b45ba17f4d0995e67520f3671101"],["/archives/2020/04/index.html","4cfcea2f744eddfc61f670be73a6cff3"],["/archives/2020/05/index.html","2cd8f3e43dc4b899a943526fdcc3e17f"],["/archives/2020/06/index.html","d5c86807faf917e78e71aa44aa8769c7"],["/archives/2020/index.html","d6c05fb2cf25b63a62bc0d705f956c2f"],["/archives/2020/page/2/index.html","05a34a3e1fe3b50f5fe273b931e0e2c7"],["/archives/index.html","a1830403fc140ad51d817bcf09b8d31d"],["/archives/page/2/index.html","a1830403fc140ad51d817bcf09b8d31d"],["/assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["/categories/index.html","0ccc77c71889e36dd74cb0942db8d098"],["/categories/壁纸/index.html","e2e8f91d9aaad09f76e1b9765e398b22"],["/categories/文章/index.html","6c75e38e3f3d6cbf0d9333f1d18795d5"],["/categories/文章/page/2/index.html","c24677bdd6565c81e7acc0176e39a0ed"],["/categories/文章/散文/index.html","6b943cd5376c79aa962b950b9adea019"],["/categories/时事/index.html","d1f4aed70207353273c2960f7ae2509a"],["/categories/时事/疫情/index.html","35ce948fd66acdba1646e6463d3af89c"],["/categories/网络摘抄/index.html","c29f2250d4c04a3c12fb5eb120b15676"],["/categories/网络摘抄/故事会/index.html","da612249736a48642635d324641d4772"],["/categories/网络摘抄/故事会/鬼故事/index.html","ddfde09357d02b73474e8b796c87ca95"],["/css/style.css","e2cb45ec978e479bc3e73ef51d3d2f56"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","ec0ec778a2987da0ef1ebcd5e0e6d9a6"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","89f59c2a43bd0c4d55621bd398d87f60"],["/js/Valine.min.js","b1d2c9b89c70dbf0a8541bfd36afafa1"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/click_show_text.js","0319644a9086979f1d5e48c406762f02"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/mylist/index.html","211c48f6d470c1141f5f1217453ac36f"],["/page/2/index.html","ddc602fb87c337356d263ae4fe0658d3"],["/page/3/index.html","fd7c6c652ebf7893e55f36e900c0ea34"],["/tags/index.html","5f3605cebaf973b1590bb0ad9b3cc317"],["/tags/壁纸/index.html","027f00f1321ba3340f9e0c7b92ff3e96"],["/tags/小说/index.html","2b87b15ed90015605dcfc9e5cf7bab89"],["/tags/想你/index.html","df20c4b8bb581ac4cad197a142266aa4"],["/tags/想说的话/index.html","69b718190966602507a47e40558be375"],["/tags/故事会/index.html","a07a97bc2805d862bc41e00564097d46"],["/tags/散文/index.html","2582516021cccd8fa3937e2cd9887173"],["/tags/文章/index.html","a8894f916efde28800014ad5f3060806"],["/tags/时事/index.html","e85a974ce3c2061f834acc970c0cee08"],["/tags/春色/index.html","b53c7338a8da3105a89b598916118638"],["/tags/母亲节/index.html","14fae96672e17cfda115cb7c68fff0da"],["/tags/疫情/index.html","20e59693598a06b19d1201fffa6a6832"],["/tags/逸轩/index.html","9d0704fa8243205f5d6da3b688dfe135"],["/tags/遇见/index.html","1fce8a2e74ed7a376d5df91d88c34fb7"],["/tags/鬼故事/index.html","894c51fd2de21d2b4b9f3a57cbd5f1cf"]];
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







