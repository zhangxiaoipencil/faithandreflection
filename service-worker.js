/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1970/01/01/愚蠢的-爱心/index.html",
    "revision": "5a68d8a5f3843efaf6b5c5f7e0cb3362"
  },
  {
    "url": "1970/01/01/懊悔、赎罪与良心的平息/index.html",
    "revision": "c80d7d560e4aa5873e77faa1ceb01045"
  },
  {
    "url": "1970/01/01/打破绿墙-妻子的顺服、丈夫的迁就/index.html",
    "revision": "e87bc6914bf4320bbafe768039642ede"
  },
  {
    "url": "1970/01/01/教会传统和在神面前的良心/index.html",
    "revision": "f6dc8b0616b75785f324bfdb845f0e43"
  },
  {
    "url": "1970/01/01/新冠之下-顺服-悖逆-信任/index.html",
    "revision": "0eac49a545f9bd71eb768dadf7d9941c"
  },
  {
    "url": "1970/01/01/林前释经分享-18-神所创造的男女/index.html",
    "revision": "1d5389737567ca5740ac980c9de84c3d"
  },
  {
    "url": "1970/01/01/林前释经分享-19-圈子教会/index.html",
    "revision": "8ef6cf1d825b1bbdcbd36d6ecc07fd06"
  },
  {
    "url": "1970/01/01/林前释经分享-20-认识属灵恩赐-追求彼此合一/index.html",
    "revision": "45e3f46083dc59b43f34f9aa3a9560c7"
  },
  {
    "url": "1970/01/01/林前释经分享-21-爱的真谛/index.html",
    "revision": "7a66e5d399b31f34c0966c60d51dcb04"
  },
  {
    "url": "1970/01/01/祷告的实然与应然/index.html",
    "revision": "1cd1d27eb5c7520b2836a4e611908723"
  },
  {
    "url": "1970/01/01/答非所问-3-洗澡与洗脚/index.html",
    "revision": "02c4300bd21f2687de4c31de8ea18066"
  },
  {
    "url": "1970/01/01/答非所问-4-彪悍的人进天国/index.html",
    "revision": "8317fb9019b9168386d87a25540650ab"
  },
  {
    "url": "1970/01/01/答非所问-5-谁是我的邻舍/index.html",
    "revision": "e0e86c838056915f0aaec454c4fde3c3"
  },
  {
    "url": "2021/12/17/posts/index.html",
    "revision": "b10c290e83255270d231a45804f00077"
  },
  {
    "url": "2021/12/28/markdown基本语法/index.html",
    "revision": "bf711744b207f57aa804b3c8a24d3d4b"
  },
  {
    "url": "2021/12/28/window运行sh文件/index.html",
    "revision": "c2ceab5fdb883b2cf569f35425cf9e19"
  },
  {
    "url": "404.html",
    "revision": "5605634891dd39b92250f0f7bebd8e4d"
  },
  {
    "url": "assets/css/0.styles.bc55dee7.css",
    "revision": "02c970f51b2425bcf66dce4c939af7ef"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.10824af7.woff",
    "revision": "10824af77e9961cfd548c8a458f10851"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.56573229.ttf",
    "revision": "56573229753fad48910bda2ea1a6dd54"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.66c67820.woff2",
    "revision": "66c678209ce93b6e2b583f02ce41529e"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.497bf407.ttf",
    "revision": "497bf407c4c609c6cf1f1ad38f437f7f"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.e6fb499f.ttf",
    "revision": "e6fb499fc8f9925eea3138cccba17fff"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.40934fc0.woff",
    "revision": "40934fc076960bb989d590db044fef62"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.796f3797.woff2",
    "revision": "796f3797cdf36fcaea18c3070a608378"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.b9d7c449.ttf",
    "revision": "b9d7c4497cab3702487214651ab03744"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.97a699d8.ttf",
    "revision": "97a699d83318e9334a0deaea6ae5eda2"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.e435cda5.woff",
    "revision": "e435cda5784e21b26ab2d03fbcb56a99"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.f9e6a99f.woff2",
    "revision": "f9e6a99f4a543b7d6cad1efb6cf1e4b1"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.4cdba646.woff",
    "revision": "4cdba6465ab9fac5d3833c6cdba7a8c3"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.8e431f7e.ttf",
    "revision": "8e431f7ece346b6282dae3d9d0e7a970"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.a9382e25.woff2",
    "revision": "a9382e25bcf75d856718fcef54d7acdb"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.52fb39b0.ttf",
    "revision": "52fb39b0434c463d5df32419608ab08a"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.5f875f98.woff",
    "revision": "5f875f986a9bce1264e8c42417b56f74"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.d8737343.woff2",
    "revision": "d873734390c716d6e18ff3f71ac6eb8b"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.39349e0a.ttf",
    "revision": "39349e0a2b366f38e2672b45aded2030"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.65297062.woff2",
    "revision": "652970624cde999882102fa2b6a8871f"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.8ffd28f6.woff",
    "revision": "8ffd28f6390231548ead99d7835887fa"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.818582da.ttf",
    "revision": "818582dae57e6fac46202cfd844afabb"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.f1cdb692.woff",
    "revision": "f1cdb692ee31c10b37262caffced5271"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.f8a7f19f.woff2",
    "revision": "f8a7f19f45060f7a177314855b8c7aa3"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.1320454d.woff2",
    "revision": "1320454d951ec809a7dbccb4f23fccf0"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.48155e43.woff",
    "revision": "48155e43d9a284b54753e50e4ba586dc"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.6589c4f1.ttf",
    "revision": "6589c4f1f587f73f0ad0af8ae35ccb53"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.d8b7a801.woff2",
    "revision": "d8b7a801bd87b324efcbae7394119c24"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.ed7aea12.woff",
    "revision": "ed7aea12d765f9e2d0f9bc7fa2be626c"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.fe5ed587.ttf",
    "revision": "fe5ed5875d95b18c98546cb4f47304ff"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.0e897d27.woff",
    "revision": "0e897d27f063facef504667290e408bd"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.ad546b47.woff2",
    "revision": "ad546b4719bcf690a3604944b90b7e42"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.f2ac7312.ttf",
    "revision": "f2ac73121357210d91e5c3eaa42f72ea"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.e934cbc8.woff2",
    "revision": "e934cbc86e2d59ceaf04102c43dc0b50"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.ef725de5.woff",
    "revision": "ef725de572b71381dccf53918e300744"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.f60b4a34.ttf",
    "revision": "f60b4a34842bb524b562df092917a542"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.1ac3ed6e.woff2",
    "revision": "1ac3ed6ebe34e473519ca1da86f7a384"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.3243452e.ttf",
    "revision": "3243452ee6817acd761c9757aef93c29"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.5f8637ee.woff",
    "revision": "5f8637ee731482c44a37789723f5e499"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.a189c37d.ttf",
    "revision": "a189c37d73ffce63464635dc12cbbc96"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.a82fa2a7.woff",
    "revision": "a82fa2a7e18b8c7a1a9f6069844ebfb9"
  },
  {
    "url": "assets/fonts/KaTeX_Size1-Regular.0d8d9204.ttf",
    "revision": "0d8d9204004bdf126342605f7bbdffe6"
  },
  {
    "url": "assets/fonts/KaTeX_Size2-Regular.1fdda0e5.ttf",
    "revision": "1fdda0e59ed35495ebac28badf210574"
  },
  {
    "url": "assets/fonts/KaTeX_Size4-Regular.27a23ee6.ttf",
    "revision": "27a23ee69999affa55491c7dab8e53bf"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.0e046058.woff",
    "revision": "0e0460587676d22eae09accd6dcfebc6"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.6bf42875.ttf",
    "revision": "6bf4287568e1d3004b54d5d60f9f08f9"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.b8b8393d.woff2",
    "revision": "b8b8393d2e65fcebda5fa99fa3264f41"
  },
  {
    "url": "assets/img/danger-dark.7b1d6aa1.svg",
    "revision": "7b1d6aa1bdcf013d0edfe316ab770f8e"
  },
  {
    "url": "assets/img/danger.b143eda2.svg",
    "revision": "b143eda243548a9982491dca4c81eed5"
  },
  {
    "url": "assets/img/default-skin.b257fa9c.svg",
    "revision": "b257fa9c5ac8c515ac4d77a667ce2943"
  },
  {
    "url": "assets/img/info-dark.f8a43cf6.svg",
    "revision": "f8a43cf67fa96a27a078530a3a43253c"
  },
  {
    "url": "assets/img/info.88826912.svg",
    "revision": "88826912d81d91c9e2d03164cd1481a1"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/img/tip-dark.075a244c.svg",
    "revision": "075a244c83d1403c167defe81b4d7fe7"
  },
  {
    "url": "assets/img/tip.a2b80aa5.svg",
    "revision": "a2b80aa50b769a26da12fe352322a657"
  },
  {
    "url": "assets/img/warning-dark.aac7e30c.svg",
    "revision": "aac7e30c5fafc6748e21f7a9ef546698"
  },
  {
    "url": "assets/img/warning.ec428b6d.svg",
    "revision": "ec428b6d6d45ac5d0c610f08d757f40f"
  },
  {
    "url": "assets/js/10.c9eae0a1.js",
    "revision": "8a2aab1893e1370536d9b07cc8eb2285"
  },
  {
    "url": "assets/js/11.70c59fa2.js",
    "revision": "6b0070fc065cdcd473175b20ad87d794"
  },
  {
    "url": "assets/js/12.d09d84a3.js",
    "revision": "3d13776474f3bef99286be515072aeba"
  },
  {
    "url": "assets/js/13.dd622e09.js",
    "revision": "c15c717660e3a344e3c415a6c61e3892"
  },
  {
    "url": "assets/js/14.17219340.js",
    "revision": "8341104104dcb51ad7d109846e5adbcf"
  },
  {
    "url": "assets/js/15.7c0e797b.js",
    "revision": "1180d6d3f64923c13f413bf20f37ebf1"
  },
  {
    "url": "assets/js/16.7252d020.js",
    "revision": "b3fe811ff1bb7be94b332bc6f10fdd4d"
  },
  {
    "url": "assets/js/17.b01626aa.js",
    "revision": "4762a4cfabc4cfbf4fae6a2390123031"
  },
  {
    "url": "assets/js/18.ae3103d5.js",
    "revision": "1618137ed11eb80b328a2f2d217497ff"
  },
  {
    "url": "assets/js/19.18ce4962.js",
    "revision": "bd88206a1b1571b8dfbf21847069a73e"
  },
  {
    "url": "assets/js/20.ce47c9a2.js",
    "revision": "706fc429ce4229f7b131f51efe54913b"
  },
  {
    "url": "assets/js/21.453099b1.js",
    "revision": "09587528b4ba21a5b82d2a63626d7712"
  },
  {
    "url": "assets/js/22.613e52f8.js",
    "revision": "70ad839df00d6edf94a7c6e0570e04d3"
  },
  {
    "url": "assets/js/23.1f789383.js",
    "revision": "89ad53e417e439247134a9ca252e4961"
  },
  {
    "url": "assets/js/24.ec98b553.js",
    "revision": "193658bb1f3a88d994c9c96fd527db68"
  },
  {
    "url": "assets/js/25.cb6cbd13.js",
    "revision": "84461f5a760a136f334f3dc2a331a605"
  },
  {
    "url": "assets/js/26.48d930c2.js",
    "revision": "22e7a617cbaee3070c17fc97cc9f386f"
  },
  {
    "url": "assets/js/27.597d0f22.js",
    "revision": "a1359ffd316aac5bee54040853b477c0"
  },
  {
    "url": "assets/js/28.1dd91ad3.js",
    "revision": "126e3c046d4bc0065935060a2a978c32"
  },
  {
    "url": "assets/js/29.73ad027e.js",
    "revision": "2fe67379f84b76ad3e863fc0843eee0d"
  },
  {
    "url": "assets/js/30.1fc6207b.js",
    "revision": "67a0403b0af944421c35b7118bf2ff8a"
  },
  {
    "url": "assets/js/31.740b10c9.js",
    "revision": "2e22cfebf8a828efff5bb3b8aa10703b"
  },
  {
    "url": "assets/js/32.8b7a63bc.js",
    "revision": "0d8cd79185cb8768e762628b38029f9f"
  },
  {
    "url": "assets/js/33.9cbb0a75.js",
    "revision": "b7f7109d3bb9074691db996b14db2351"
  },
  {
    "url": "assets/js/34.00964c55.js",
    "revision": "5d43060acf17fb13ba35255e739a2eef"
  },
  {
    "url": "assets/js/35.a95c8394.js",
    "revision": "fc44f95a4a5b7b9621b1a0809ab2a7f1"
  },
  {
    "url": "assets/js/4.850481a2.js",
    "revision": "fb7abe9da032c5017870cf1748b28cb7"
  },
  {
    "url": "assets/js/5.35387b84.js",
    "revision": "ab7e90bf8614b46adc0b9725b4ef6235"
  },
  {
    "url": "assets/js/6.cdae108b.js",
    "revision": "00d4f862ef56828001b20dd855ecee0f"
  },
  {
    "url": "assets/js/7.de0b667e.js",
    "revision": "d78b556e131a2b21ca8a75383866218f"
  },
  {
    "url": "assets/js/8.c95089c9.js",
    "revision": "0cc68f310c0cab0b2e6cd1594b6fef25"
  },
  {
    "url": "assets/js/9.2b24ad88.js",
    "revision": "028e62b814f66e16af7b7caae7121591"
  },
  {
    "url": "assets/js/app.1e4957db.js",
    "revision": "9f0fa8cdc22bc78f511227eab9d14c79"
  },
  {
    "url": "assets/js/vendors~photo-swipe.ff57e33f.js",
    "revision": "b402cf6c8bf729b4b3d103b94be60c97"
  },
  {
    "url": "assets/js/vuejs-paginate.e4a0d068.js",
    "revision": "d46520154c6368e7d03cdcc88bc87f33"
  },
  {
    "url": "drafts/草稿.html",
    "revision": "a7aedc65c7415179680c6318fc76f859"
  },
  {
    "url": "image/error1.png",
    "revision": "ff5b0c2d12caf4f92a249cc8360b4c31"
  },
  {
    "url": "image/greenwall1.jpg",
    "revision": "0c7bfeb0c7bf107026a311ac61783810"
  },
  {
    "url": "image/greenwall2.jpg",
    "revision": "cbb198b4cdb16eb7b70b94bbe4e27547"
  },
  {
    "url": "image/greenwall3.jpg",
    "revision": "72c55496c0362b32e7de942a439e2dba"
  },
  {
    "url": "image/greenwall4.jpg",
    "revision": "6cc2c7027ff000e294a171f1ced40929"
  },
  {
    "url": "image/operation_1.png",
    "revision": "4086194c4663725d5d60c442e6f93649"
  },
  {
    "url": "image/operation_2.png",
    "revision": "b8e546f205ff003ab988af5ca8134b97"
  },
  {
    "url": "image/operation_3.png",
    "revision": "1cc3d3f1bdb52e24489e455afd1b4f2a"
  },
  {
    "url": "image/operation_4.png",
    "revision": "dd23398d504d2acbe9126695ad0c3dcb"
  },
  {
    "url": "image/operation_5.png",
    "revision": "be450025f369673b5d1e2e8e3d55b352"
  },
  {
    "url": "image/save_cloud.png",
    "revision": "54b67c795c450de66736ac35fd10e4e0"
  },
  {
    "url": "index.html",
    "revision": "a983c03c30f73e955b4138cfe8813f45"
  },
  {
    "url": "page/2/index.html",
    "revision": "a7d55b85916729b94148a1ab1f20c749"
  },
  {
    "url": "page/3/index.html",
    "revision": "27158c8f9eaa77fdc5121e057a05e2b6"
  },
  {
    "url": "page/4/index.html",
    "revision": "dc1997035d47fdbea46ba51c537f6ca0"
  },
  {
    "url": "tag/index.html",
    "revision": "567e64284005e65c8f8c802b9733b94f"
  },
  {
    "url": "tag/信仰生活/index.html",
    "revision": "1aa344cd84c98d8d4841a0ca042f1bbc"
  },
  {
    "url": "tag/信仰生活/page/2/index.html",
    "revision": "a30dbc02345116a8523bba3386b4ae4e"
  },
  {
    "url": "tag/唐诗/index.html",
    "revision": "51ebb445a3b1aeeb90e5520878857023"
  },
  {
    "url": "tag/圣经/index.html",
    "revision": "5038101c8709e16d780017eec42a5365"
  },
  {
    "url": "tag/旧约/index.html",
    "revision": "3af377a5b6ea8cdc3ee5e03dbd0c4f43"
  },
  {
    "url": "tag/柯南/index.html",
    "revision": "86ad4b74c1d2bbc8bb266f9def2e9ba6"
  },
  {
    "url": "tag/滕王阁序/index.html",
    "revision": "9f6f2bd8cec1f74d0a29fa3bf69f0baa"
  },
  {
    "url": "tag/答非所问/index.html",
    "revision": "ced484cde75c1e358f93f79b687abf36"
  },
  {
    "url": "tag/解经/index.html",
    "revision": "c1f2e9a5a65f215c90d39797d1f5d94f"
  },
  {
    "url": "tag/软件/index.html",
    "revision": "e8deeeef067bbfce049bb08b1f994bff"
  },
  {
    "url": "tag/释经/index.html",
    "revision": "a2fdb1d0e228c5938da728edc736f5fc"
  },
  {
    "url": "哥林多前书释经讲道系列/旧约.html",
    "revision": "c6e0bf1a08163e2b9ae60be719c56350"
  },
  {
    "url": "哥林多前书释经讲道系列/自动打包.html",
    "revision": "32a33fd42c1134823f332d3c567ad149"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
