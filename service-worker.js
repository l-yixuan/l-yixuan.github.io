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

var precacheConfig = [["/2020/04/26/09/index.html","f82d83f8583a3041ecec0e0abae9733f"],["/2020/04/26/1/index.html","3aea84b4ab7a56cdf25883a244c67ed0"],["/2020/04/26/2/index.html","83e70972ecac042318dfe8b74f5c5a2c"],["/2020/04/26/3/index.html","985ac498b46ce6e918a96ed78d4898fc"],["/2020/04/26/4/index.html","62608d94c255444defb15aeb457cae25"],["/2020/04/26/5/index.html","317d2ff39b7abfde8081e2dd4c0bf949"],["/2020/04/26/6/index.html","274621594fee3ddad245722796b984fa"],["/2020/04/26/7/index.html","65819b9d743b11340f8fb6add64b6a05"],["/2020/04/28/08/index.html","04ab2d00116840bf7c0b745b2ff2cdf7"],["/2020/04/28/10/index.html","805b987728c6143f5fc4ae1edf87c2f3"],["/2020/04/28/12/index.html","5cc555e2378fd071339e597b075805fa"],["/2020/04/28/13/index.html","b706269983df0a56715bf99012395e86"],["/2020/04/28/14/index.html","56954f8049bbc1f02e491cf05d7c19e9"],["/2020/05/05/15/index.html","181f53205d80df2304439968c7954f32"],["/2020/05/09/16/index.html","e9e51e7eea5ac7b77fcc888d3fd5490e"],["/2020/05/14/08/index.html","4bd6fc5771039623a0925157885f6804"],["/2020/05/21/17/index.html","b0d22926c93479f6f3d723e1d28281e5"],["/404.html","787220cecd5fd08bb555156020829413"],["/about/index.html","56c8744bbf257cd284bcdd01de04321d"],["/archives/2020/04/index.html","7504fbdba7c40ed1d5779deb50eee5a2"],["/archives/2020/05/index.html","37da8557e548bb88df37ffe47c464361"],["/archives/2020/index.html","c7400538829ebd6d7c256726d36edb90"],["/archives/2020/page/2/index.html","cd0e557c6260bdad4a8ba740400ecaa6"],["/archives/index.html","d7e682aaaa774b9fdb83f7da14f5206b"],["/archives/page/2/index.html","d7e682aaaa774b9fdb83f7da14f5206b"],["/categories/index.html","85778b299cd89e9149fac9962a1332c2"],["/categories/壁纸/index.html","f7944bf24f6cffadfce568331749f634"],["/categories/文章/index.html","56fa27aeead870126355a69dce142100"],["/categories/文章/散文/index.html","d95f1dd08cffa4cd03f2d5682b6beda0"],["/categories/时事/index.html","5e8876aea4b8dd7ccf65012e8bca2574"],["/categories/时事/疫情/index.html","6e01794b8958095c98a6a9493ab12ef2"],["/categories/网络摘抄/index.html","20491e7a142e5148562253f8478f4682"],["/categories/网络摘抄/故事会/index.html","45dd728df1806d2d97cde773b37ee9d7"],["/categories/网络摘抄/故事会/鬼故事/index.html","ca2ee27bd0973d6ef548eb9737718273"],["/categories/逸轩/index.html","082e51ca5004ed0c382924c5d52e231e"],["/categories/逸轩/文章/index.html","fe61af3c422426d89da69725a32a0fc0"],["/css/style.css","bf5715b35433459a5e94a07f5837e2fc"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","1f4e132a0349c447cd92a71497b711fb"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","29c196ec34073808adb0741fe89dd6eb"],["/js/Valine.min.js","b1d2c9b89c70dbf0a8541bfd36afafa1"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/click_show_text.js","0319644a9086979f1d5e48c406762f02"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/mylist/index.html","3960cff7e3a21c4022b86355b0bdf89e"],["/page/2/index.html","571cc153354f37d14fd7ed751eb975c4"],["/page/3/index.html","5c0b60646a94bcc13a4edd2179b9dfb7"],["/tags/index.html","cc7c3742f62a00c4e6bc4484d0807ff6"],["/tags/壁纸/index.html","9f115e850cfcc460f7868bdc95135532"],["/tags/小说/index.html","790d07a26044d54b4fa661be92384bc1"],["/tags/想你/index.html","dbbbb043c9722ae7e7b678d0e46408e3"],["/tags/想说的话/index.html","f1e6d40aba15ca70c63eeb891bb554d4"],["/tags/故事会/index.html","1b4e57376a262865a8affe61a55262a0"],["/tags/散文/index.html","36309dc60ecebdc5b7dbe5f2c5b144a5"],["/tags/文章/index.html","c4558fc6ffe8ec518ba9c094a8de3618"],["/tags/时事/index.html","169fa2056c78e50296f4d6602cd0d177"],["/tags/春色/index.html","170d3f600ccc958af63baab8f89bbbdc"],["/tags/母亲节/index.html","99759b23b6fb65dcdbd31185363c6f6f"],["/tags/疫情/index.html","87dc1eb7f3e86a6b679bafb86c4dca37"],["/tags/逸轩/index.html","1f4a765749e7eeb6efcc5145e639b52e"],["/tags/遇见/index.html","c8c44c87a904befc020f1f28079d20d5"],["/tags/鬼故事/index.html","56d78588b36c29970d5bdbcee420eabd"]];
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







