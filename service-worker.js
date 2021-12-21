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
    "url": "1970/01/01/posts/index.html",
    "revision": "00ea3e992b0507c7af606804dca3564b"
  },
  {
    "url": "2021/12/21/张九龄-感遇四首之一/index.html",
    "revision": "8cae72a69b78f7176e5d904536984797"
  },
  {
    "url": "2021/12/21/张九龄-感遇四首之三/index.html",
    "revision": "38eb0d557e2ac0c3b41ea828ddd3bc2f"
  },
  {
    "url": "2021/12/21/张九龄-感遇四首之二/index.html",
    "revision": "8422261a5e8d6fc0cd5117a6fbdf567c"
  },
  {
    "url": "2021/12/21/张九龄-感遇四首之四/index.html",
    "revision": "6e0c6be2abd7e442afeda9ee06627b19"
  },
  {
    "url": "2021/12/21/待安装软件列表/index.html",
    "revision": "0f910b70e00b19a283da044b62b6ba3a"
  },
  {
    "url": "2021/12/21/望岳/index.html",
    "revision": "45446b2a7c478659fc111d61e85b2873"
  },
  {
    "url": "2021/12/21/李白-月下独酌/index.html",
    "revision": "6110caa9794cb0348cffe4b95eeb6f99"
  },
  {
    "url": "2021/12/21/李白-金陵酒肆留别/index.html",
    "revision": "507ad10219486e5b7f5a586d816e1579"
  },
  {
    "url": "2021/12/21/王维-送别/index.html",
    "revision": "71a50018a7f1948979aaba5798eb6134"
  },
  {
    "url": "404.html",
    "revision": "9074fbba059f9768ff820f623a53bc38"
  },
  {
    "url": "assets/css/0.styles.f7ac9350.css",
    "revision": "f6a7c89eccb269d6cc0c0b646dad1c5d"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c9cfb6b2.js",
    "revision": "014d03f98bc751e70f95bc03e761f688"
  },
  {
    "url": "assets/js/11.9e527ca0.js",
    "revision": "8faffe428a475f24dd27d280c0d084b1"
  },
  {
    "url": "assets/js/12.f7a84b75.js",
    "revision": "510b203afa1a61bef2b159724e75019e"
  },
  {
    "url": "assets/js/13.9ce8544f.js",
    "revision": "e72c2e165606e3f7a76d7d687bc3bada"
  },
  {
    "url": "assets/js/14.eab6bf43.js",
    "revision": "f473b3ef28d8116d55034e751a32b449"
  },
  {
    "url": "assets/js/15.1f180aeb.js",
    "revision": "4479afc6fd13beaabdfe6a5826eaed45"
  },
  {
    "url": "assets/js/16.d014647f.js",
    "revision": "d792d1e9e4c6cdb530bcf60f1dcb1c72"
  },
  {
    "url": "assets/js/17.c4a51e54.js",
    "revision": "d823a8481d2b25acb70772c183b2d87c"
  },
  {
    "url": "assets/js/18.4045a1e9.js",
    "revision": "c3c73935bdd96e7aadd5c40a38fdc384"
  },
  {
    "url": "assets/js/19.7d73b89e.js",
    "revision": "32d2cb862548df68258a0ff13a520820"
  },
  {
    "url": "assets/js/20.ca8b0966.js",
    "revision": "74886bf6303ed6c8d88f40c8f5156ef5"
  },
  {
    "url": "assets/js/21.8da291bc.js",
    "revision": "cf5c5d29fbe057cc17f1d63794b57250"
  },
  {
    "url": "assets/js/22.93259f98.js",
    "revision": "b12f5e8c84b3fbe232eb52c9c85634f5"
  },
  {
    "url": "assets/js/3.ae22342a.js",
    "revision": "cd0c31689f48cccfe0e009832a7ab124"
  },
  {
    "url": "assets/js/4.782273ff.js",
    "revision": "7111cb026ec873252023a136df696476"
  },
  {
    "url": "assets/js/5.123fa773.js",
    "revision": "b8a6fd968bfc37c82a6b449e933f5c5b"
  },
  {
    "url": "assets/js/6.3e767e9d.js",
    "revision": "9f378808d799339c71e75c979756ceb9"
  },
  {
    "url": "assets/js/7.22af96e1.js",
    "revision": "57703b75e24739fca0da016359733476"
  },
  {
    "url": "assets/js/8.c69de763.js",
    "revision": "e29b4cf5c8e75c652d34e1ef1d08c80e"
  },
  {
    "url": "assets/js/9.de36e841.js",
    "revision": "efcce9c1a0203bbaf9540aaeac635714"
  },
  {
    "url": "assets/js/app.707c77aa.js",
    "revision": "3089839f166ff8de5faa49b90031b6c8"
  },
  {
    "url": "assets/js/vuejs-paginate.83809ca1.js",
    "revision": "42b48b2878726290469d699bd21b0398"
  },
  {
    "url": "index.html",
    "revision": "228ec8e63ef63d2d3297abcc5cbac063"
  },
  {
    "url": "page/2/index.html",
    "revision": "43f04210969ee73f35f6cb7a75850f1f"
  },
  {
    "url": "tag/index.html",
    "revision": "d85e322e884b360f8c03eacddb41f212"
  },
  {
    "url": "tag/唐诗/index.html",
    "revision": "05f7d71f77668a0d3e793784436f7183"
  },
  {
    "url": "tag/唐诗/page/2/index.html",
    "revision": "4d81feb512bb871e97ca961057850390"
  },
  {
    "url": "tag/王维/index.html",
    "revision": "90d968a573e585ec826510b9a8a11007"
  },
  {
    "url": "tag/软件/index.html",
    "revision": "768def484467d4b33f31396d6a6b7987"
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
