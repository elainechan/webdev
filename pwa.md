## Tools

* Offline access - service worker, Workbox
* Auditing - Lighthouse
* [WebPage Test](https://www.webpagetest.org/)
* Rendering - Web Components
    * deals with shadow DOM encapsulation
    * create native custom components without frameworks
* Loading and bundling - Babel
    * presets
* Optimize speed by catering to device and network 
    - Device Memory Header & API  
    - Network Information API
* [Fast by default, Addy Osmani](https://www.youtube.com/watch?v=_srJ7eHS3IM)

* Network-only strategy
    * app <--> service worker <--> network
* Stale-while-revalidate strategy (Workbox)
    * service worker + caching
    * service worker calls cache first for assets
* Caching/Pre-caching ([Pinterest example](https://www.pinterest.com/sw.js))
    - Critical assets are served cache-first
    - Automatic cache cleanup and updates
    - precache manifest (build time) <--> service worker 
* Navigation requests
    - cache-first for shell.html
* Image cachining ([Wired example](https://pwa.wired.com/sw.js))
* Offline article listing
    - [Wired example](http://pwa.wired.com)
* workbox-webpack-plugin
    - workbox-sw acts as runtime loader
    - build tools will default to using CDN
