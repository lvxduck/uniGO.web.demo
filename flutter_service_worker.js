'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6e83275be63f46dbe47dc07fff989239",
"assets/assets/icons/disappointed.png": "a186b9dae1fc9771bfc7c706f360d966",
"assets/assets/icons/google.png": "dcc1c44c26cff0ec35fcb5286ca17cef",
"assets/assets/icons/Logo.png": "c62f6a9143bcc3a759213188fd67a8de",
"assets/assets/icons/love.png": "dabea62ba80828442b61330d9c0f03d6",
"assets/assets/icons/normal.png": "bf47cb691b8d487ee55d0f2269b9151e",
"assets/assets/icons/pin.png": "a56d6664ddcaaaf3fc725152ae9773cb",
"assets/assets/images/instruction/drawer.png": "cafbdc387e71cbf4b845ea0546cc2bd3",
"assets/assets/images/instruction/floor.png": "9efb993203a2514ee597ac7d459c6faf",
"assets/assets/images/instruction/locate.png": "fb2a823a160284c59a160b3d8ee447e0",
"assets/assets/images/instruction/location.png": "06db510ca28ebb8114f40657166fa312",
"assets/assets/images/instruction/locationInformation.png": "5b54ccedb52f39b1ebee25a78be3feb4",
"assets/assets/images/instruction/panorama.png": "d101fef85f44ec94aabebc60e7558c4f",
"assets/assets/images/instruction/searchBar.png": "3dcd5ea6ff916e6adbcd7c1470e23db1",
"assets/assets/images/instruction/searchBarPointer.png": "c1639a79eb79b447d02a2a9a9a87a86d",
"assets/assets/images/instruction/smartSearch.png": "636c899fdd256b7544780da6663a6a3b",
"assets/assets/images/introduction/intro1.png": "6518b9237c905adb66350176c1880a5c",
"assets/assets/images/introduction/intro2.png": "d218eec868242758c6800f75591a036b",
"assets/assets/images/introduction/intro3.png": "712c0e4262d379422173502388b30ac5",
"assets/assets/images/introduction/intro4.png": "ca74ecd40da6818986801c115db92509",
"assets/assets/images/logos/DSC.png": "8f3b852b3423c99e922f1dcacbb01200",
"assets/assets/images/logos/DSC_full.png": "faefb4f85a463654e1ae0b5871354700",
"assets/assets/images/logos/DSC_pure_white.gif": "0bf552f2d9b7fd58ececa04a1c73684a",
"assets/assets/images/logos/tinyGif.gif": "c36670fcd2521ca26a374fe68523d851",
"assets/assets/images/sponsor/paradox_logo.png": "fed7acc6e551de2fc4575359997145af",
"assets/assets/images/sponsor/paradox_slide.png": "e23b0b86e7f308048e0804718eef9ca0",
"assets/assets/svgs/begin_location.svg": "548c442f361f8a89cb9e4cfa48785e02",
"assets/assets/svgs/end_location.svg": "176d5ba73400c5f847aff4b03e35325c",
"assets/assets/svgs/facebook.svg": "966e506de3f143fb2e2a8e439bb0b20a",
"assets/assets/svgs/floor.svg": "8da81be1f1aeeb7ce7e8e859c988e75a",
"assets/assets/svgs/focus_all.svg": "c31414578b8aac8a2ce52ae305bc1fb6",
"assets/assets/svgs/focus_place.svg": "19e5b750aaf66d3fb4053339b759812d",
"assets/assets/svgs/hamburger.svg": "cda79a21b2abe6bc4270319f43919590",
"assets/assets/svgs/location.svg": "2fc06766eb51024065e1b49bfb71f64d",
"assets/assets/svgs/location_man.svg": "56a4e322941bb625154ff841173cbd07",
"assets/assets/svgs/mail.svg": "37e0af780a7fc799513817ff798a7f0f",
"assets/assets/svgs/map.svg": "04e4b73cfe7b6adc471a29fd4b3a77d2",
"assets/assets/svgs/marker.svg": "82e0473ceee5dc96f4af274e6b230909",
"assets/assets/svgs/marker_intro.svg": "e58e2d5fe394c40eaa36092b24473ed7",
"assets/assets/svgs/phone.svg": "b278055d9fee8c3a4cc3a7170857f9b1",
"assets/assets/svgs/place_focus.svg": "f58d5d2d86f688f83902c6720e974317",
"assets/assets/svgs/qr_code.svg": "2a19db1faa8994b67a63f1cb6c8fe00c",
"assets/assets/svgs/search.svg": "0b5104f6f9239c06551cd4f7b1e8613c",
"assets/assets/svgs/selected_location.svg": "7ab93bd81242121ffc6263f7a863c430",
"assets/assets/svgs/stair.svg": "fa94d63a78a9e0a92c34f7aefa11d13d",
"assets/assets/svgs/swap.svg": "1756f4a00c9cb1643cba9ca4f6ff952d",
"assets/assets/svgs/uniGO.svg": "486d065319e2d33d2eb5b31417185d18",
"assets/dotenv": "6790d30331f97e0d5909d1a002d2ed6b",
"assets/FontManifest.json": "eb7ae9ba62af95206e93a6ef2fde68a1",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820",
"assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/fonts/Roboto-Light.ttf": "6090d256d88dcd7f0244eaa4a3eafbba",
"assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/fonts/Roboto-MediumItalic.ttf": "cf23e1bb619029496260760b72aebd30",
"assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/fonts/Roboto-Thin.ttf": "4f0b85f5b601a405bdc7b23aad6d2a47",
"assets/NOTICES": "2f9c2690c94cfb5e3073dce1ed4793ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "58a2d25dcc4773fa271fd5a0ab56f09a",
"/": "58a2d25dcc4773fa271fd5a0ab56f09a",
"main.dart.js": "7d079d213c50040d0fb881b5d12c5ff2",
"manifest.json": "08393063717a6e240b673a7eb4994bf3",
"version.json": "e105bce0a7cd3bca6634e2405b69004b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
