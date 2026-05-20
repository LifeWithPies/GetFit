var CACHE = 'getfit-v1';
var PRECACHE = [
  'workouts/index.html',
  'workouts/day1-push.html',
  'workouts/day2-pull.html',
  'workouts/day3-legs.html',
  'workouts/day4-upper.html',
  'workouts/day5-lower.html',
  'nutrition/calorie-targets.html',
  'nutrition/meal-templates.html',
  'assets/style.css',
  'assets/tracker.js',
  'assets/exercise-placeholder.svg',
  'assets/body-outline-anterior.svg',
  'assets/body-outline-posterior.svg',
  'assets/today.json',
  'manifest.json',
  'assets/icon-192.svg',
  'assets/icon-512.svg'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (cache) { return cache.addAll(PRECACHE); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE; })
            .map(function (k) { return caches.delete(k); })
      );
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(function (cached) {
      var network = fetch(e.request).then(function (res) {
        if (res && res.status === 200 && res.type !== 'opaque') {
          caches.open(CACHE).then(function (c) { c.put(e.request, res.clone()); });
        }
        return res;
      }).catch(function () { return null; });
      return cached || network;
    })
  );
});
