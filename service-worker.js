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
    "url": "1.jpeg",
    "revision": "e01e6434c0106d634b27e693cd9c13a2"
  },
  {
    "url": "2.jpeg",
    "revision": "8a01e649a335bde2478c53f6e04a2d30"
  },
  {
    "url": "3.jpeg",
    "revision": "c83fbf16b12b4f9ddd83b79235a94f09"
  },
  {
    "url": "4.jpeg",
    "revision": "b016e356a0ea52104f6f466de76bc66a"
  },
  {
    "url": "404.html",
    "revision": "a69e6929854004a7749e4214d4ebb165"
  },
  {
    "url": "5.jpeg",
    "revision": "ff00ccffeeeedebacc53fb2f02e52fea"
  },
  {
    "url": "assets/css/0.styles.d70e82e9.css",
    "revision": "3a2d15f25c256a8783fd87b16996c5e6"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.28cda475.js",
    "revision": "9668f3ad4e4f99d4898163931c9be79f"
  },
  {
    "url": "assets/js/11.ebbada60.js",
    "revision": "1f2942fbc6a06bb5685e41a00a33b304"
  },
  {
    "url": "assets/js/12.97e25e9d.js",
    "revision": "bdf00cccf6a4c3c5ab25842cc66c0d85"
  },
  {
    "url": "assets/js/13.6ee5004c.js",
    "revision": "fc52d9c99f2c25a249341204142aa741"
  },
  {
    "url": "assets/js/14.39f8faad.js",
    "revision": "8692a3fd8bd99892ea6627898c6ea36e"
  },
  {
    "url": "assets/js/15.0675e208.js",
    "revision": "1b1e75c84d9a919292fd41d5bef72fd2"
  },
  {
    "url": "assets/js/16.578d300f.js",
    "revision": "1c5b6154cce16a5a9492a790ebabfc5c"
  },
  {
    "url": "assets/js/17.a9e4e635.js",
    "revision": "2667b6514923cb7c9187428929dbc154"
  },
  {
    "url": "assets/js/18.ae43a99a.js",
    "revision": "9026cba7624a89808df472801b02d1c8"
  },
  {
    "url": "assets/js/19.8a4c6a9c.js",
    "revision": "34efd6c66d58180f83ac47b783910ad0"
  },
  {
    "url": "assets/js/20.086a8e4a.js",
    "revision": "aee96f6df9d38575106ec444cf329924"
  },
  {
    "url": "assets/js/21.855e755c.js",
    "revision": "d8e006797f10d1d998a11cb8585abf2e"
  },
  {
    "url": "assets/js/22.6df69732.js",
    "revision": "4935b3a17a02a1eaa14d86ae2e0f74a0"
  },
  {
    "url": "assets/js/23.18a7c719.js",
    "revision": "622c97141fc3d658024bdbed62f400f8"
  },
  {
    "url": "assets/js/24.1c8ed13a.js",
    "revision": "e5f9dd0b294937e0bc96aa879bcf94bd"
  },
  {
    "url": "assets/js/25.795b6d33.js",
    "revision": "3458b8cf45c68e56f91a6d44c8a35d31"
  },
  {
    "url": "assets/js/26.693b845b.js",
    "revision": "8b1746d9f0dc5bfea59da7916ead25b9"
  },
  {
    "url": "assets/js/27.d209a2b4.js",
    "revision": "03188695eef2464ebb89d49955ecd241"
  },
  {
    "url": "assets/js/28.1bc832ee.js",
    "revision": "bec76b2a6c0643869e829cd124537640"
  },
  {
    "url": "assets/js/29.ef33fd21.js",
    "revision": "59739ee1624b7bb8f4159acd43d415b0"
  },
  {
    "url": "assets/js/3.1949e09c.js",
    "revision": "99f3f8686a3b5bc860dac6dd8a65f1a7"
  },
  {
    "url": "assets/js/30.de091c9b.js",
    "revision": "661ca60343d1ef1c9ec4e336ce0b6b0e"
  },
  {
    "url": "assets/js/31.0c553a35.js",
    "revision": "e700b957507a913396daebc7eed28d4e"
  },
  {
    "url": "assets/js/4.822e3c8a.js",
    "revision": "fad0f0108310dfc6b4cefa3eb41a556d"
  },
  {
    "url": "assets/js/5.00cf9798.js",
    "revision": "41d988ddd196093f8d8b318c214119a4"
  },
  {
    "url": "assets/js/6.170c0cc0.js",
    "revision": "b4a411c476a7e116630ea18e42097f53"
  },
  {
    "url": "assets/js/7.701ebf1f.js",
    "revision": "26505a691e41ea994f0bd1abdcdc7ab4"
  },
  {
    "url": "assets/js/8.35e12711.js",
    "revision": "34e7b333b6ebe8953fbe388fce76816c"
  },
  {
    "url": "assets/js/9.9f99cc8a.js",
    "revision": "63dd70894d854fe6b679c556f7f104c0"
  },
  {
    "url": "assets/js/app.828f6e0c.js",
    "revision": "5a5fda404876c0ca21177dd96622c5f0"
  },
  {
    "url": "assets/js/vendors~notification.d03de14c.js",
    "revision": "76eef74b179624d2d6595ae14e3ac2f7"
  },
  {
    "url": "coffee.jpeg",
    "revision": "f4fb651968cef56e279e1c10ed51b053"
  },
  {
    "url": "frp.png",
    "revision": "ddd3398a3de5a3ea2ba77881487787e5"
  },
  {
    "url": "guide/common/accesstoken.html",
    "revision": "c73b4d0388be274f5d8bf7d5b7eddfcb"
  },
  {
    "url": "guide/common/init.html",
    "revision": "47ecdbb4cce1610c9c7e4fd86d368621"
  },
  {
    "url": "guide/donate/index.html",
    "revision": "edb0d7ed1c2497d13ef0c5ceee3e143c"
  },
  {
    "url": "guide/index.html",
    "revision": "68fe77bb84d0ff7f1677bfd34458d83d"
  },
  {
    "url": "guide/miniprogram/login.html",
    "revision": "dac55ba864edbf5e52a7bc4f65f99d25"
  },
  {
    "url": "guide/miniprogram/ocr.html",
    "revision": "549dc9b366de38f3d1a6cf51cf3363a9"
  },
  {
    "url": "guide/miniprogram/qrcode.html",
    "revision": "dabcdc8e382f25ca9e87885ada47f960"
  },
  {
    "url": "guide/miniprogram/subscribemsg.html",
    "revision": "a7300d7d6af2adbf9970f1118be63115"
  },
  {
    "url": "guide/tools/frp.html",
    "revision": "d4c373130db34200e06f1f74cb1069fb"
  },
  {
    "url": "guide/wxcp/callback.html",
    "revision": "dfcd7bd62de82381bef466393da4d0f4"
  },
  {
    "url": "guide/wxcp/handmsg.html",
    "revision": "fcb8fa8b77fad0910810bff0e5e80bcd"
  },
  {
    "url": "guide/wxcp/media.html",
    "revision": "e658b4fc6d89e8f933f7863508bf534a"
  },
  {
    "url": "guide/wxcp/oauth.html",
    "revision": "3e4a86219dad26f977547b6517464082"
  },
  {
    "url": "guide/wxcp/sendmsg.html",
    "revision": "fc10e54677d88aca2205dbcf443041a7"
  },
  {
    "url": "guide/wxmp/callback.html",
    "revision": "30dff4bca32151d23e479f6155f470fc"
  },
  {
    "url": "guide/wxmp/custom_menu.html",
    "revision": "3bde21cb56784c33008a408378a46e68"
  },
  {
    "url": "guide/wxmp/jssdk.html",
    "revision": "61520d100c336a04a51862075e3497f8"
  },
  {
    "url": "guide/wxmp/oauth.html",
    "revision": "8e548597a5d306e22e822254f4b3035e"
  },
  {
    "url": "guide/wxmp/sendmsg.html",
    "revision": "1f6a3f2c2074385470d4a65e09c13b12"
  },
  {
    "url": "guide/wxmp/templatemsg.html",
    "revision": "24c2ddc54ac9f3b6264398c92cc5b635"
  },
  {
    "url": "guide/wxpay/api-v2.html",
    "revision": "2926572ca9ffe192285eab07c9173eb4"
  },
  {
    "url": "guide/wxpay/api-v3.html",
    "revision": "3d3d86cf8d9a9fb9d23218a44feba4d7"
  },
  {
    "url": "guide/wxpay/index.html",
    "revision": "181f690d7dda759b5a6f3a59d99cfbeb"
  },
  {
    "url": "index.html",
    "revision": "42e449160b78e5697caa4216314ff6e5"
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
