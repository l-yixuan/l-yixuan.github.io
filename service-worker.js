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

var precacheConfig = [["/2020/04/26/09/index.html","fb0b104a702c3ed5fdb4b0903fc63534"],["/2020/04/26/1/index.html","7bf995fe399c9bb0afdbe4192028c51f"],["/2020/04/26/2/index.html","5ba205032083d5de8b4cb0f0be7be6b2"],["/2020/04/26/3/index.html","14fa1d3a1297bab09f38d72afc8ffcff"],["/2020/04/26/4/index.html","de756f512c327de09465cd47f655d470"],["/2020/04/26/5/index.html","a402e0171b64e0923739a240ebfa20d9"],["/2020/04/26/6/index.html","5f6b379050cf8c2093e36cb81e347c8e"],["/2020/04/26/7/index.html","65e1a65d5fc2d94f5ad9d4a35bbca39a"],["/2020/04/28/08/index.html","a20546446331466d044109875722acb4"],["/2020/04/28/10/index.html","916977e6fb08cb5377c86b20c01e4247"],["/2020/04/28/12/index.html","759c3b307745bb1917ba89269bbd7bf6"],["/2020/04/28/13/index.html","927e18a6891b470d18dc2d684a10f1fd"],["/2020/04/28/14/index.html","3aa3de290f3f96ad4e0819d6d366c23a"],["/2020/05/05/15/index.html","e822f37a1f04084efb96d217abb5b7d8"],["/2020/05/09/16/index.html","8a832c770ff5387c6c07d2e4e553a7ce"],["/2020/05/14/08/index.html","6b6c7e1e4b2c7be0ebfa474bf9f506e6"],["/2020/05/21/17/index.html","c47e0a11525c94beab0da60b46c296eb"],["/404.html","787220cecd5fd08bb555156020829413"],["/about/index.html","9693583f33bcf1d58ca9915bd3be4b01"],["/archives/2020/04/index.html","51a6ae4bcb30c85d9788e68204578c01"],["/archives/2020/05/index.html","4fa109c64a87663d1ba8a2b3032d9d7d"],["/archives/2020/index.html","ce0551022b4038b1300882e31abde156"],["/archives/2020/page/2/index.html","825412427b8e226e299448b809b7d202"],["/archives/index.html","499f5de2ba70da09aff4e63f5839f11a"],["/archives/page/2/index.html","499f5de2ba70da09aff4e63f5839f11a"],["/categories/index.html","99b70656f54a50a2572d12af86ba2b1a"],["/categories/壁纸/index.html","2048d1e2aaf51ccf5a963485a37f3137"],["/categories/文章/index.html","74dd60468cc1896154ddd8504c5c97a9"],["/categories/文章/散文/index.html","d59f8684b4edf19c597805cf24217e61"],["/categories/时事/index.html","d8a3945c85b41cad654a0752aa072e91"],["/categories/时事/疫情/index.html","af9c906ff0113f1a0ffab02bc784894e"],["/categories/网络摘抄/index.html","6679daddd0c0a7af860055b1a50f1ef8"],["/categories/网络摘抄/故事会/index.html","bda1093a7ca91b68b3bd82487324f76c"],["/categories/网络摘抄/故事会/鬼故事/index.html","84b81ba1b6d52501c96ff5665001ccd9"],["/categories/逸轩/index.html","dc860deb31850665a59381747140fbae"],["/categories/逸轩/文章/index.html","eae32157713cf5865dd0982f4a8299e6"],["/css/style.css","bf5715b35433459a5e94a07f5837e2fc"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","102429d95b38da4a5754218b2ea7d749"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","9014a62542bea38089d8c5ba2455d744"],["/js/Valine.min.js","b1d2c9b89c70dbf0a8541bfd36afafa1"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/click_show_text.js","0319644a9086979f1d5e48c406762f02"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/mylist/index.html","ae9fe189e6d2a9c523625aa5a9ebc8f9"],["/page/2/index.html","8aed5710ef588a11031befab71dcf579"],["/page/3/index.html","99ad04b0f3e45195caf5645ad5c6a3a3"],["/tags/index.html","752af57e5756c423cefbf7c08af13df5"],["/tags/壁纸/index.html","28c7752ba3a26884742974186f13eb85"],["/tags/小说/index.html","94e9406ed033e8723d6f8a02979cefd9"],["/tags/想你/index.html","9890cf7eb4a115264c0b12d8a6986219"],["/tags/想说的话/index.html","b021dd72b097a4aa31bcbbfa27727006"],["/tags/故事会/index.html","c1c98e794d9319a27f40173e506b2831"],["/tags/散文/index.html","52e4492f0253761f83ae9eef024dae89"],["/tags/文章/index.html","295f34f20c7e8f137a52240eadce093c"],["/tags/时事/index.html","d425b3d3b9f3f0b01f9313399e5790f3"],["/tags/春色/index.html","e4464e6edb1e7b6452f7273737c390bc"],["/tags/母亲节/index.html","6a5c98fb5d39cd204617442cc62d3fab"],["/tags/疫情/index.html","4501c8fb0229cc882036650b1ab52d9f"],["/tags/逸轩/index.html","6a5f33182784c3b0f54be6b37d42cd79"],["/tags/遇见/index.html","40896cfdc494af2ad331bf1774925030"],["/tags/鬼故事/index.html","c81961134b1d54cbbc7460051943c848"]];
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







