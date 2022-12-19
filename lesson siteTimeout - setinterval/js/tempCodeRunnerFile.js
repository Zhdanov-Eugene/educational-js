let id = setTimeout(function log() {
  console.log("sos");
  id = setTimeout(log, 500);
}, 500);