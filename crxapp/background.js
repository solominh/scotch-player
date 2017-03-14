chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    'alwaysOnTop' : true,
    'outerBounds': {
      'width': 700,
      'height': 500
    }
  });
});
