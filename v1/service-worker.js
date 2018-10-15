"use strict";

console.log('WORKER: executing.');

// List of files to be cached
var cachedFiles = [
	'offline-version1.html',
	'assets/favicon.ico',
	'assets/apple-touch-icon.png',
	'assets/maven-header-logo.png',
	'assets/Pill.png',
	'assets/Tablet1.png',
	'assets/Tablets4.png',
	'assets/Tablets6.png',
	'assets/white_arrow_right.png',
	'assets/merck_logo-splash.png',
	'assets/Dosing3.png',
	'assets/Dosing2.png',
	'assets/Mavenclad-PI.PDF',
	'css/library.css',
	'css/custom.css',
	'js/library.js',
	'js/components.js',
	'js/dosing.js',
	'global.js'
];

var CACHE = 'dosing-offline-cache-v1';
/*
On install, cache some resources.
*/
self.addEventListener('install', function(evt) {
  console.log('The service worker is being installed.');

  //Ask the service worker to keep installing until the returning promise resolves.
  evt.waitUntil(precache());
});

/*
On fetch, use cache only strategy.
*/
self.addEventListener('fetch', function(evt) {
  console.log('The service worker is serving the asset.');
  evt.respondWith(fromCache(evt.request));
});

/*
Open a cache and use addAll() with an array of assets to add all of them to the cache. 
Return a promise resolving when all the assets are added.
*/
function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll(cachedFiles);
  });
}

/*
Open the cache where the assets were stored and search for the requested resource. 
Notice that in case of no matching, the promise still resolves but it does with undefined as value.
*/
function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}
