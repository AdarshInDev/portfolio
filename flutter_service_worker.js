'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
".git/config": "77c6d0a974d12b6b4bb211ea2dec9c2f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c46c1abcfd6eef2e1f799f3392ea99ec",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8bf1471536b751cd799b3e2fa1a9b356",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e4cc991d96ffea92971c6abd6eb2fea6",
".git/logs/refs/heads/master": "e4cc991d96ffea92971c6abd6eb2fea6",
".git/logs/refs/remotes/origin/master": "c0c541bd47734ec77103088c148c8f2b",
".git/objects/03/c8455e6aeb408360850ebeb900f1f82793176d": "bbe19f3c4ddb7a43bfd3987d4be922e9",
".git/objects/09/3cadc263547ae2dfa2e12ad232af30b7fcb516": "b1e619eff4119d8b29465acbb4d131a4",
".git/objects/0a/71be8fe48073d08bfafe9c5c63ab4cce430bf4": "50f3606e65ee73480a20f3e149529c99",
".git/objects/0d/27b2d8392324fd482826867f773402be9695c0": "5cd6d8f765602abab98e894d45b2a47a",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/17/d30abaa2c82153c7b9e04b2b245cc03c9f429a": "6ece5cc9c10f89ec8f022e73f3dff392",
".git/objects/18/afa4b735473b1d0ae6a03e228845cc7ed113dd": "5555caa2d9674e94314a55611b93a924",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/d16840b2f474197fd4cb548cbb2e5f54997135": "d6cc8ae2cd3e73391e5f45fdf9e8747d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/e0b208bd6dd12ce50d8bc1fc7df8d493bdedc2": "5a8b8824a789673c548c867131749edd",
".git/objects/22/f3597156042ae583010263e1b95e4f266da017": "0e450a3bd98d6303ee3975c13ca2f9da",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/37/8ddf1d2c756e25263871298fd6e1197603e49f": "91444d7f77e6f9d1b789715d4a92ddd4",
".git/objects/37/b81fa9a3a10e96cb5431a8c4f74944dc65ee59": "d701d5a2dd69a738f07e99230d6b5901",
".git/objects/38/66d648e519f7c65c719d264b9927a79618cfd9": "bb442d6eb491ffee014898225d83bf7b",
".git/objects/3d/85986f1e9022b32b71158451b05e4528291acc": "8aeaf88f82a271b227a31c7c118fa976",
".git/objects/3f/203f6e9c32e9a6bb514af2e9e9418dd55176a8": "dd4c63a8878abf404614bd3f2993d4cb",
".git/objects/46/deba2cf595f55a660acceb17c03e1f37ea449a": "d5946f05790952f159a8787ebf4ab83e",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/55/5d859f0af70f32d5d0ab58d653d5df6a461f0c": "afca2699e503deb5e67d2ddd812052d6",
".git/objects/55/768249fbe0235ebb0f243e6cfdc9b3ad8f0558": "40e8ff56acd2263b2b46af7027a2803f",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/55/e35dc05dfb2c503e2cd3760b297f724a7efd93": "142885e2ec4ea347ab19cd17aab4b814",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/f9857b24e889a88fe5f0ddec2d59cb4c36d975": "286eb351edaf6ed9d4eb8ff185eb0dd6",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/e7c2c7728f05a9ce4bbbc88d38d9b0146c171b": "1ecb5cf5889d64525bb4133ff5fe71ae",
".git/objects/59/eabae5d0602c2eb43f35e5af446222b1bfe764": "2890dff5fd555f853a399f2b78c8152e",
".git/objects/5b/38495e3b429102004e224f03216a149df4b031": "22fcab4f563631c2e4fd858c834aa05c",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/faacd64240357314611b3e2f9f33f00823bd48": "d02a11010b8fa7bfbb4d9b355216d42b",
".git/objects/67/be99294ae192ce59746f574376a4a977038929": "a87d5cff0578c92b669a2a639c6eddc7",
".git/objects/6a/8de8c10409d1725deb31d88b7783c98241ab37": "0b812776de2dc92e28828a0e7733eb96",
".git/objects/6c/39c235b5c9f3b75ed49c8bfa2ba2eace4d50ae": "c1c91867682b48f3750c99e8e83ea1f1",
".git/objects/6c/e8069189ff621ec5a4836f60327d84ae14cd9a": "416a72615e025af7af9ad8d440a20901",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/b38e27f84797b3cd78d20774b3ef6db36c8297": "0ccbcdf7eabd26b3c35f7f11dda9db6e",
".git/objects/71/d33d904118519302543975b9af7c3164003480": "dc2df675ce04759a5745b350fdd2516d",
".git/objects/81/0ddd12216f3f0f519ce49c78ffc5a18a8cf6e9": "c391a748ef4b342c9082ac6a4272f946",
".git/objects/81/aff7ed2116e5895650a19aab245a12b5087922": "1a89fbf355f98d8d49230399c1e24556",
".git/objects/82/2080807b05d403c7c454b699cbc664f6588115": "c4089834134adc71a68297be7aadbb8f",
".git/objects/82/b98d06b9e27827abed6c1885aa060480452601": "1d5e4ee1a1337ae79a184c5ab01b25dd",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/51f7160365847c5843ec68854fc444802815c0": "957613d9fc0d70c8df1b7263d5640cda",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/b0cf1388ffe6ae74424833f383ac4f6c4ab04f": "ae89bcf56712003e3b25b9b2d7919f38",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/9f/148627c5e3b856258811cef134e546cd77beb0": "55a2974c276bbaf80d519c31b761c6cf",
".git/objects/9f/1be0ca226d83d39c01a1542e2d73f4edea960f": "2f102b6528b4cd641146cad5a4e92823",
".git/objects/a2/ea16ccffa16964e337b68d7c91a953d7e9e84d": "f1fab473190bf0fc3a381e1be73c5612",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/a7/5270ee6151dfddc83ff9a4bc7c4662e9a54329": "f1e5f8db678cbe7158764f2b1052234e",
".git/objects/a9/17c04451b7e331e0076fa71c8d6cb372918d60": "df2886c6f56afb962e623f6d7439cd00",
".git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "42dbb00e47ab6bdec4e0752c63cf8337",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/89e01d20f9c453f6a02cfc3fcb8b9f8de2a164": "297141db39bd0e4900cd7dad74c79067",
".git/objects/b4/adfbace6edd3a74e3d44c373744c5420a1b15c": "3ef20871c9f07ef98ff8a6fdd81d6c9f",
".git/objects/b5/055530822e5f4bed84cefff147bb2317b39f2f": "bf8e42196c1da7b44019101e8dce4fc4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/58564b2f109d181312534381114c0309e3c085": "643346ca0f9dd99a1c330409b2eb345e",
".git/objects/bc/4f785c860f06e29ca47dd00b368b8ac32d182b": "3026b65919f32c9ec54af5007a426535",
".git/objects/bc/73ece8ab35e32407866bde7a20ae090b441105": "be489f945a466d73fbd7d73592e6415d",
".git/objects/c1/afae76880a34d0702588f5d9d5079f2c68dfb5": "4b74cf36a7637b3730f9cf79f293c5a1",
".git/objects/c3/983dcd128baeb65fc868fa76b94cca65329508": "a455b1dfcd19d9dd830bb4e97414d018",
".git/objects/c6/38d50a1274b78acb9fdc578dd0a384f8ca1562": "a1aadbf6f098c0d8d2bcfd39b0c0a71f",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c6/f0608d45c7e32b2521f3d75f69080e53c24c96": "827d36c2ba3fb7c66d14a3c63b30459b",
".git/objects/c7/e8c04764d56b7232d4ea4983b573ff659bead5": "891b181978ca42f14834c75419e4622d",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/a71a7134989e25f19ea8c0a9588142d34c3259": "814f9dcb4957bfd0d8fddd3b25780189",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/9c6e061c1ca5a2200be1fcef37bcf0e2a6226a": "e6ba578849e3724d60bbbaa7614082dc",
".git/objects/e0/e84946924d043cbef4cfd3725ca0843eca25b9": "b59d5e55c3b4ca4f01174bcd9c324da0",
".git/objects/e6/07499e399201b99aed5df6b5231b91576aec85": "09214d1adf602a563a4ab334663c7b22",
".git/objects/e6/49b65f4ee1620ff9a7d08173b540ac8e75da59": "6c4ab8216ffbbc381754fea718aa6519",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/469827a94a513c6d6876f7b8177ee337f98f18": "8c568b92e6ad1187f0dffc9013a1e12e",
".git/objects/ec/e56d086855fb3033b4123e6fce231d3c56bad2": "97ccbbb1de66edc85383b9bd4e3e36e4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/4e884b8fed32b85037a1c002141b2e8477560e": "e1ad4cc3c32f62e84a1584e3fd710877",
".git/objects/fa/d450f424bd43a4ea0c26471357363432663715": "57ef0f1c0560a499826d19a9c74edf9a",
".git/objects/fb/1bdf370c9bdebbabd31adcfee5867afce13c01": "a24a45e441064709af967d6c7f39ab32",
".git/objects/fb/d9f22a0e59fae3b28da67240e9710d45aca3c2": "96749c10ee9ab0ca59480d06ac0af926",
".git/objects/fe/2c70a7140bcf2fe9735121c08ebed40fe3ac2a": "05923cd91e88989c848d6edf34e476ee",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "c8167f35612c16edefd55e685232d6e9",
".git/refs/heads/master": "c8167f35612c16edefd55e685232d6e9",
".git/refs/remotes/origin/master": "c8167f35612c16edefd55e685232d6e9",
"assets/AssetManifest.bin": "710d4d40e11d1cdf45d0e013dc80ccb3",
"assets/AssetManifest.bin.json": "31738e122a161e231699d09c2b634d35",
"assets/AssetManifest.json": "5e66f3603d6b7638d4808011d2ed954a",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "cfc5d2ed145a1f648193e0afc69c5cb3",
"assets/lib/assets/images/4.jpeg": "49ec2026d964e8caa89e13c0a719109f",
"assets/lib/assets/images/chatapp-project.jpg": "cc26fc06dd9d2993d4f38462b1d5dcc8",
"assets/lib/assets/images/IMG20240502195217.jpg": "12b70a2636d96f0264e369d1f5fcdac2",
"assets/lib/assets/images/IMG20240502204402.jpg": "2218d2f61ce38223446595c51b2b3595",
"assets/lib/assets/images/IMG20240503113837.jpg": "198e5609bcdaac3fd4150ba6aff0c464",
"assets/lib/assets/images/IMG20240503171440.jpg": "c1a28608d4e17f2a8032cf05451bc7a7",
"assets/lib/assets/images/IMG20240504163903.jpg": "dcdbe5306377febd205a66a4e88a2e70",
"assets/lib/assets/images/leetcode.gif": "24cfef0927807a62345f3622461faa5e",
"assets/lib/assets/images/pic.jpg": "aed6624352dc2033218591f6f4c8972f",
"assets/lib/assets/images/profile-pic.png": "423d27892e4b8655830524974048769b",
"assets/lib/assets/skills/c++-icon.png": "e4f46516b8d0d4b45f958b7e404f2d55",
"assets/lib/assets/skills/dart-icon.png": "586ecc41d871afc1f3833c33c53294e4",
"assets/lib/assets/skills/dart-icon.svg": "cb35c659a765119026e209eacf38184f",
"assets/lib/assets/skills/firebase-icon.svg": "8e09fe510dfd2abb40f1be63faa4e7cc",
"assets/lib/assets/skills/flutter-icon.png": "8eb09f55da57c413fe416d83f2376a3d",
"assets/lib/assets/skills/flutter-icon.svg": "53cdd4be6bcc798dcd6c9b1ddef00d65",
"assets/lib/assets/skills/flutter.png": "e4ecf6fc1f4d6aef9a97fa10dd6ddced",
"assets/lib/assets/skills/github-icon.png": "3d4c7482f267f5accbb7461766f3f790",
"assets/lib/assets/skills/instagram-icon.png": "0b6b3c8d2c74fc2e0be8f5d940ec1e14",
"assets/lib/assets/skills/js-icon.png": "63cf9c6f8153aef1e884b7ae2815e06d",
"assets/lib/assets/skills/linkedin-icon.png": "d492efc706db983e74258dbd348f2208",
"assets/lib/assets/skills/nodejs-icon.png": "55e83371dbf50a5f027b1fe31a054ad3",
"assets/lib/assets/skills/python-icon.svg": "89ccddbb9a91f983ac816a03531c606d",
"assets/NOTICES": "15904e32f63fc97d7ae48af8df230ad0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "9a6c85167842c8aa0f5073d0a439ade8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "0c78ae314544a36af192e7ec2cfa44f2",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
