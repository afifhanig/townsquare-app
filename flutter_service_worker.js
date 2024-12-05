'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "03e9cf764780ec3cd3c9e869c10c05d0",
".git/config": "656f4a9cc3ba87535bce5879f26ea391",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d15f02f9e3ea2eb043b5941522c4cdd9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "82f9866b6544b73423375a20134d9578",
".git/logs/refs/heads/main": "475c49ac069bcb92a88a0d7081219a38",
".git/logs/refs/remotes/origin/main": "c55fc2e8ed8039f9cc8f63ff0b42e5d3",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/be0e24c901dda8cac89aed69ea28abc434df9b": "58f56f1227c302bf0cb6fa28139744a4",
".git/objects/09/aaca9fcc08ccfd0666b128a23a3ba6066757a5": "a6dc58a9dcb4a85de6f457a17012f39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/a3433cbeee6dc1d513f7cd320341cee426fe64": "c02b2c4a37d6228abeefea5cbeefa25c",
".git/objects/16/53be37d1bf7eb12982fb1b6eb6f6f76457b19f": "bebe2fdd42051a200345aea168c3c4fa",
".git/objects/1d/213d94ca4e3b88bc76f7a28fe1870592b405b6": "8773440c08e2f15ea8ceaa48ba6beab4",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/29/2966bffcb8e198cc7d5e69e6435e7c33d6d5f3": "02d80e447bc0133053fe7a6dd846be0d",
".git/objects/2b/e1fe5614c10eb36bcc74e9c345c510728e5ea8": "df33c5a7339a8ca091d226fe98066e32",
".git/objects/30/79315dae2f844c428ed9e888f5ea28bd7b14d5": "5d252663ec0a8471df525c465c8365f5",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/45/ba8ebbcab511024291b73f4ad2b53fcb218f3c": "bb4b480bb2f4127174d11635b33b9ac2",
".git/objects/4d/220c14c5c2489fbd5b06b8e0e2aa56c02e47c0": "bfc07319a231248b7ee869d0efbc531c",
".git/objects/4e/b56884c182add504bed3083fb4935b8e35a989": "a4ba73e72cea8bfb8a7ffe26103b735e",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/7b657b9fa8457eaf987ffb9c2e9f8108a6a4e5": "2639b105b66ef0c0cb181d11618aa8d5",
".git/objects/5c/eb6a02e368bc22eaa1d81386d84de70f0528cf": "d1789f558f9b9b0199f22687e5b17012",
".git/objects/5e/79151c5f9774da8080a11db3b3a694df0df82c": "91ea13012917b95cba3b2c31969b06e5",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/81/5868a03a3aa4dec91aba5b2fffcf8a3f76b07f": "cc92a9c2b2552088f544c91f1f661057",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/ca058d9010f367ae51a2b619c525a3114e008f": "e144ee66694a0e7eab4359d3de918f31",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/91/663e4cf8f4a66dc6c667e956f07f6c0eff9d36": "138ed0ca40ecf4a5cc6fd2bc82292d1c",
".git/objects/96/c94201eb8e0b6a38bcaf1b023066701b40dc6c": "215c8235bd04f3c79331d036d9b1c658",
".git/objects/9a/33aff28c96b0f3932949a89d397d3515ba4d22": "8787adba732dc7ff12d85732c1b56002",
".git/objects/9e/66f0aed787109561e6f60904187abf22732213": "0efaadff9486c54251694cfff72f6d8b",
".git/objects/a2/767b1c958a8d8eb11736812fd3a9f07b3d5974": "237447f27cd196cc76891de56175f085",
".git/objects/a3/f01eecb47ff0f72ecbaee3444692ade5231733": "d76190f05b530fb157423f27eda7c262",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/dad7d95c566241b3d21b611794451b96959d2e": "c95d87d1bfd23a77b3786bc081cdea93",
".git/objects/c3/42a327e487fb96243cb5785d05818e4d1ed776": "2d910db3b66eaefd28a89c12df4134af",
".git/objects/c3/af82875437e8cc0ae1720b4ab9dbc08a8823b9": "81a83b879ca1197f1c6c531e2b659be2",
".git/objects/c8/f0ae7d9f1d75af7b64e679d666532dab736f16": "fe0c564121c58077c9a916443e1f7c14",
".git/objects/ce/cd120d958b66f61ae60af00435ab099f3b05b1": "40ff96e1a6ba9624c39ec9a5ac595a05",
".git/objects/d0/82e3c6d9e832d7009cfa25f408a6391a4c50bd": "baa216c05609aba41b24952b96984bc8",
".git/objects/d2/7c6b5152d716275dd6ac56b788f3171b2d0969": "ae7a268f008417ad9de04342296376a3",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/6aa6dbf64c93fb0eaaf5c7bfd4e4418ac73574": "95552e334f8debc0e0c08421694d52c8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/291c97b3f5aa561d3a193be943cc7d8788aff5": "a517c23722b7cc7e8204d7d402c474bf",
".git/objects/de/3540f0902e34d7c33ac00ffae1382912ed17bb": "9b89f99b30c47040899d91f3b4f63d92",
".git/objects/e0/bd985132af0e755ccaccc1d55b4695e7efd785": "7b623afa556d46b0979e870902bd8493",
".git/objects/e3/fc1aff5f962556ff3b53acac98afcf8441471a": "d42992b5f5d4c886efb16ab3357956a4",
".git/objects/e7/50aadfc3d25d9bfebd35e4fc9a230586fd44b0": "cfa31105028748084c221841bcbdcf38",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/main": "9c9b0e17e2af75b6ea63541c22f62a6a",
".git/refs/remotes/origin/main": "9c9b0e17e2af75b6ea63541c22f62a6a",
"assets/AssetManifest.json": "49acdca415d2388ab9d19141577c5ca6",
"assets/AssetManifest.smcbin": "3996f660e2cb6fc58a6133764748843c",
"assets/assets/fonts/crows/Crowsink.ttf": "ef67096eb6bd0236718c019104b16182",
"assets/assets/fonts/sf-pro/SFPRODISPLAYREGULAR.otf": "aaeac71d99a345145a126a8c9dd2615f",
"assets/assets/images/avatar.png": "5aad78214cf890564ddc640ba02c561f",
"assets/assets/images/avatar_2.png": "0e44627d5155de28640dd420af78b4b2",
"assets/assets/images/avatar_3.png": "c9a818ae2ef169a2eaf101d269eef10e",
"assets/assets/images/avatar_4.png": "0f723808d20729c089c809d73833d8bf",
"assets/assets/images/popular_near_bg.jpeg": "14d8491709b36940a759459af06edaa9",
"assets/FontManifest.json": "07ea4baf20f149afc3bc5d7f0468b051",
"assets/fonts/MaterialIcons-Regular.otf": "705dfbae1009d2ea1dce5fcdd8b4e78f",
"assets/NOTICES": "92c661b73f8d5cdde0ba7ac6e0674c49",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "02a142599227436dfaeb370439e8e340",
"/": "02a142599227436dfaeb370439e8e340",
"main.dart.js": "0d55dcd535e6e1fff035b312292f3068",
"manifest.json": "a2e51b548e229b9b9ce9e39c082041cc",
"version.json": "857effe375a4961fac03eb2235f7e223"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
