onmessage = function(e) {
 if( e.data == undefined ) {
  setInterval(() => {
    postMessage(new Date());
  }, 1000)
 }
}