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

var precacheConfig = [["/2020/04/26/09/index.html","a64d8ee7b5d22f1ab2aa9225348cb0fd"],["/2020/04/26/1/index.html","c31146eddebfa3d781f63e4922898dcd"],["/2020/04/26/2/index.html","987f80674c4a0e6bef06780e308b33e0"],["/2020/04/26/3/index.html","32f4fdd89dc37df4dc3565a7d5c2c911"],["/2020/04/26/4/index.html","2a5b9d9de4517e1ebd84ddff2078675f"],["/2020/04/26/5/index.html","f3283751e4e537883830ae6bce37551d"],["/2020/04/26/6/index.html","38af6d8a231c06890d717c927b4b0a3e"],["/2020/04/26/7/index.html","efe354af7bc8c600e5e109589e889cca"],["/2020/04/28/08/index.html","35e0d52b1d5c30ce3030f84076967453"],["/2020/04/28/10/index.html","38f70be674bee75465a2a6c9a8337fb5"],["/2020/04/28/12/index.html","463f1619b103c769df3131c5fd265747"],["/2020/04/28/13/index.html","52728d48cb88edfbb8c0f9bb2b8a2475"],["/2020/04/28/14/index.html","9964bcef1602a2f752a8979fe7166066"],["/2020/05/05/15/index.html","1d3201af840b378420fa5ad6d18cbb72"],["/2020/05/09/16/index.html","eea8bb79a4062023f2a69310c0d85c0a"],["/2020/05/14/08/index.html","1f21850a725e74e7e1b6ecd4e3ff6872"],["/2020/05/21/17/index.html","43ae0b54d69f026f8decbe69ccbd8e6a"],["/2020/06/06/18/index.html","e7d7446ccf3d6945c747f80563f6cf9b"],["/2020/06/21/19/index.html","20ce021ad9bfccaf88376526b4071060"],["/2020/07/05/20/index.html","31673f94e58914c546ac1189ee8f750e"],["/404.html","c875dc2e9a69728b52f058e353d9e44b"],["/about/index.html","6f23df966cecaeb25096f22db388fd34"],["/archives/2020/04/index.html","5cf921d243739e72a7f7d74a9375b9f0"],["/archives/2020/05/index.html","11ab59750e5bb25528c3935684925a38"],["/archives/2020/06/index.html","a092c5eaa86ef8a762c5ede2615dad4a"],["/archives/2020/07/index.html","d65f2459cd29ca4da26a9d83240c6c5f"],["/archives/2020/index.html","8c73619b3fd788a83f7cf226c140b179"],["/archives/2020/page/2/index.html","4d2ade7c4738dfa4c7ea1590265da8cb"],["/archives/index.html","7bf9548a60644cd3575ff6a24b8edc61"],["/archives/page/2/index.html","7bf9548a60644cd3575ff6a24b8edc61"],["/assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["/categories/index.html","c51ce559e1fe71dd0c683cf947982344"],["/categories/壁纸/index.html","a5d9105480320a6cd9f0fa1871551341"],["/categories/文章/index.html","f9e91a5c493c719521533fb5c3e99c90"],["/categories/文章/page/2/index.html","66572ee00f8a7564856e691de03ee90f"],["/categories/文章/散文/index.html","d040c553e23f083f8675168c0dd1bbd9"],["/categories/时事/index.html","f2b14f0b53e65860542aaa5b241b7da1"],["/categories/时事/疫情/index.html","caa2ca1ac10bdccd79fe6c00acf332b8"],["/categories/网络摘抄/index.html","52c0df0a470c716341266edcee453d82"],["/categories/网络摘抄/故事会/index.html","23dbfa74d6e5117e52d6133ef956ca53"],["/categories/网络摘抄/故事会/鬼故事/index.html","3b1f8086ca2579fa48c7cc3534ca9c0f"],["/css/style.css","e2cb45ec978e479bc3e73ef51d3d2f56"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","2e500f523902623bf8e9613e7b48fc89"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","a527261c6677eac8119042cee968bb81"],["/js/Valine.min.js","b1d2c9b89c70dbf0a8541bfd36afafa1"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/click_show_text.js","0319644a9086979f1d5e48c406762f02"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/mylist/index.html","d33f442079a5849766b1ac678dfeae0b"],["/page/2/index.html","6ce0847508b20f077c24418f9bc77d1a"],["/page/3/index.html","064b11300437c398a02d2b2d3a5910d7"],["/tags/index.html","acc6edbbe6758c395b5e7360ed330417"],["/tags/壁纸/index.html","16de4d757a391490fe880ad4282e614a"],["/tags/小说/index.html","b4f7dcb15c70b17fecf9ae54a7850559"],["/tags/想你/index.html","70bdb89affd5eb287f1bc378c0057c7e"],["/tags/想说的话/index.html","97bd48709026aee5046a5bcbe0895eb0"],["/tags/故事会/index.html","caaa0884962c092f20f932e795c9a2be"],["/tags/散文/index.html","6de19e0456b60380d9a402e87a8dfc1c"],["/tags/文章/index.html","8b80830717166e84bbbc4cfacc15c2f1"],["/tags/时事/index.html","0e4aca8ec9d7b97f435fd4f17fb25aa7"],["/tags/春色/index.html","166cc0bead466f42dd82e76a3c2357c1"],["/tags/母亲节/index.html","7b589fc704f1d75b8deca9bb14b36099"],["/tags/父亲节/index.html","65f42162a9a55640329ce0b1b6fba3c2"],["/tags/疫情/index.html","aa3155e2ee158d781ee4f9346854873d"],["/tags/逸轩/index.html","13cd249d79e9ba6b60ec85e1c2cdcad6"],["/tags/遇见/index.html","fdaec030bef120f0ecf811fc54bc5557"],["/tags/鬼故事/index.html","b8da10fe387b041cd8abb57a8caf34ab"]];
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







