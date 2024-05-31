var CACHE_NAME = "my-site-cache-v1";
var filesToCache = [
    "./",
    "./index.js",
    "./styles.css",
    "./Components/App.js",
    "./Components/Header.js",
    "./Components/Home.js",
    "./Components/Product.js",
    "./Components/StateProvider.js",
    "./Components/Reducer.js",
    "./Components/Checkout.js",
    "./Components/Login.js",
    "./Components/ServiceWorker.js"
];


 /* eslint-disable no-restricted-globals */
self.addEventListener("install", function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(filesToCache);
        }) 
    );
  });
  /* eslint-enable no-restricted-globals */
  
  


 