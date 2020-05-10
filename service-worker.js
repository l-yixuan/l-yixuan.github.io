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

var precacheConfig = [["/2020/04/26/09/index.html","fad8964bdc1dfa1970e344f3e21760d4"],["/2020/04/26/1/index.html","8c99ad036c83ea2fcf6efa6dbb8e16c2"],["/2020/04/26/2/index.html","ab0b81cc9366f2c6a57b2ce737a31eb6"],["/2020/04/26/3/index.html","60bc5875828454974e91c19d49b20a8f"],["/2020/04/26/4/index.html","e500db3d4d2edf847bdb8ea2c82069fb"],["/2020/04/26/5/index.html","1b8ce20b75b5e66634cad0986160078e"],["/2020/04/26/6/index.html","c887075a12050845686bbd73ddf9ca40"],["/2020/04/26/7/index.html","82a90831cc2106be1b44ee23c2b8c4a3"],["/2020/04/28/08/index.html","1b492033bcccf5013be660c9252594c1"],["/2020/04/28/10/index.html","377bd24db4783b4531ff99387cf733b9"],["/2020/04/28/12/index.html","9ae24aeefb40b4ae692561deee4fa5f1"],["/2020/04/28/13/index.html","7add255c696e1ecf17ff9b49f5e6a600"],["/2020/04/28/14/index.html","d17bef3bcc28d2046af84762d4cfa601"],["/2020/05/05/15/index.html","2d90c487b9ef889e9cbe39d5a886db31"],["/2020/05/09/16/index.html","c97c3a725e4e43fcf882d80c94898d36"],["/404.html","a3b5d1209e5f7b492408b5578bb4ca15"],["/about/index.html","ef3247a0e97be04211b784501c6ebc9c"],["/archives/2020/04/index.html","cfd08663aefc5fffd56860b98d9e92e8"],["/archives/2020/05/index.html","718718fa09748f00904f4aee7fe0fa3f"],["/archives/2020/index.html","4dbc6974d4398027a80d5b8144222044"],["/archives/index.html","21c1d981efbe8fc24e5d1fa8c13c7c69"],["/categories/index.html","4fcc33bfe890fcdbf06f66c3e2d75365"],["/categories/壁纸/index.html","604ee1cdc2f5b664710d65d1f5fbba3b"],["/categories/文章/index.html","1c7d5d663fd5f1855e617d9546f13710"],["/categories/文章/散文/index.html","7bce1edf170d76514ef0d0baa27751d4"],["/categories/网络摘抄/index.html","af8253b8cce7aebefa688f3ccc503266"],["/categories/网络摘抄/故事会/index.html","9d2147327d8c919e257c732736dab81a"],["/categories/网络摘抄/故事会/鬼故事/index.html","b3b1b9abee8a8664cbcf026102126e36"],["/categories/逸轩/index.html","bdd5c2050e3fb58ca140a5e72fd01d12"],["/categories/逸轩/文章/index.html","219f1cbc8fb4efb1b3aac5e6e711fd59"],["/css/style.css","4d91fe8d38d673e4574d601ad3c40a17"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","fc6c3fe731b1eeb3475ba0b9d72563b0"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/img/loading.gif","0eaa9b90b7e529b483369c9d9fd5b404"],["/index.html","e9f2b7b276a03e38396a693484e2b71b"],["/js/Valine.min.js","b1d2c9b89c70dbf0a8541bfd36afafa1"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/click_show_text.js","0319644a9086979f1d5e48c406762f02"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/mylist/index.html","9c23df97256b3f4ab970f0b4ce5e2563"],["/page/2/index.html","b8c514a8be582621bc325748480e72c3"],["/page/3/index.html","4e5798a435d13727c8ad66cea227e89d"],["/tags/index.html","5d012f7a066e9f01afe172cf79f9bdde"],["/tags/壁纸/index.html","77be5eef32efc0c6ca208919c705848c"],["/tags/小说/index.html","c3ca5a986e52021655096747ab455709"],["/tags/想你/index.html","2eda4795a3fe24f1013eb2a22b070585"],["/tags/想说的话/index.html","b7fecd40200f08010d7f8ea6f5fb27e5"],["/tags/故事会/index.html","36b4cb01bcdd4dd250ff113ad6d60787"],["/tags/散文/index.html","4fe10a72aa4a4d99cd31fb56d9d1ee54"],["/tags/文章/index.html","49e773670891c63c1843bb3680d52a70"],["/tags/春色/index.html","25b9823067e21ea9765a3239539c9469"],["/tags/母亲节/index.html","19d34d5df4d78dd8f286c4e4d9a21f1e"],["/tags/逸轩/index.html","7633285150afe2807f8dd990f26a28a1"],["/tags/遇见/index.html","7f2097fa86429be44a07760fff9dc27c"],["/tags/鬼故事/index.html","307096226a2b46d69a157b33d08ed6e1"]];
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







