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

var precacheConfig = [["/2020/04/26/09/index.html","6855a3cea4db1c0bad13ad3fce55a6d2"],["/2020/04/26/1/index.html","5264da30b8bc2bf8309cb2a8edd04f64"],["/2020/04/26/2/index.html","282ad3959daccc566e78e05d1628ea4c"],["/2020/04/26/3/index.html","a4819119d62558ace06c1c54d868ea22"],["/2020/04/26/4/index.html","5dad25ba74e8278bf02b9687ba9954c5"],["/2020/04/26/5/index.html","1b61d304f5969e99486ff0bd386b7516"],["/2020/04/26/6/index.html","2e5cae2f5923cba035a30a3959bf8435"],["/2020/04/26/7/index.html","159e44b31f90ad71cd15903793de4ba7"],["/2020/04/28/10/index.html","ef0ac3ba946c27c5257289bd5dc38d07"],["/2020/04/28/12/index.html","690bd29dc664e4c8bbde4e15561b4e48"],["/2020/04/28/13/index.html","3ed96f089ed111723fd1888b51d9514e"],["/2020/04/28/14/index.html","e6e71975a05bd03b081f9b38bdbf126c"],["/2020/04/28/15/index.html","a2b44262cfb79b035740e57573964a33"],["/404.html","cc0c5b3a44493842288297bbb7c928f8"],["/about/index.html","6d4a7f575ab3b38abd716bbdbbd46a84"],["/archives/2020/04/index.html","2e44858f9b11de1a652cae85c3e49b97"],["/archives/2020/index.html","d7a22502d7de46f300fa40f8a9631fbb"],["/archives/index.html","4bf96e9295095a285c0639b0cd5a4575"],["/categories/index.html","8010fd616ebc4ba686bcf65a738744e2"],["/categories/壁纸/index.html","3dce4647f7207c768e5683b56f486d1c"],["/categories/文章/index.html","6bb243d2b510a11a4f3dab9b785421f6"],["/categories/文章/散文/index.html","7f54493a02f6f5d87dba5ee2349338be"],["/categories/网络摘抄/index.html","764dd9f92a9c1ce8ab28fbf463ee7b4c"],["/categories/网络摘抄/故事会/index.html","b08c7b644ccdc0eaa3198f9ef1158c93"],["/categories/网络摘抄/故事会/鬼故事/index.html","b4369c38fffe59b156564a434d5472d8"],["/css/style.css","e2cb45ec978e479bc3e73ef51d3d2f56"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","e7fda38d5faf535e43801e9be75f1417"],["/img/1.jpg","71ef703bb7b7ab2d64967afcf4dba9ac"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","de439c66926cc4c82bd5af7fc118f044"],["/js/Valine.min.js","dd3552d0872be847d331c5da67279eb4"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/click_show_text.js","0319644a9086979f1d5e48c406762f02"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/valine.js","c5c9473e2af6ab5fe16ffbb0bd09c6a7"],["/mylist/index.html","cd0c15a8d28163acfdde05974e9bad04"],["/page/2/index.html","6a4d15a92c65ac56541b7e51eefab5af"],["/page/3/index.html","649a941591153e2aa43dee9f0e5767e2"],["/tags/index.html","2b8bc44543782f2192541ecfe5ab9cb5"],["/tags/壁纸/index.html","d07cadacd1ed5922fac660fc7bb86b6b"],["/tags/小说/index.html","5aee790a1187e06b8d8a3a105f67c7f4"],["/tags/想你/index.html","4e942907fce1057479847a0863744c8e"],["/tags/故事会/index.html","f2a98537aa0f39c3e6dad9980376aee6"],["/tags/散文/index.html","c7390be3e206b0c95e6f96d032c7970a"],["/tags/文章/index.html","f8551ec2888864a99f60329e7243f9c1"],["/tags/春色/index.html","64e1080e4804b852c1abc08e070d4eea"],["/tags/逸轩/index.html","2b70f15a1a56acb1d3362880b78dff6b"],["/tags/遇见/index.html","f4efe7bb11e03ce4d756fa70c6ee0ace"],["/tags/鬼故事/index.html","b8efe661995f2df666c5a8b2c3ae869c"]];
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







