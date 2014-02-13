document.querySelector('.notify').addEventListener('click', function() {
  'use strict';

  if (!("Notification" in window)) {
    alert("Your browser doesn't support Notifications, but I brought this ooold alert for you :)")
  } else if (Notification.permission === 'granted') {
    var notification = new Notification('Notification API', {
      icon: 'icon.png',
      body: 'This is a HTML5 Notification :)'
    });
  } else {
    Notification.requestPermission(function(permission) {
      if (!('permission' in Notification)) {
        Notification.permission = permission;
      }
      if (Notification.permission === 'granted') {
        var notification = new Notification('Notification API', {
          icon: 'icon.png',
          body: 'This is a HTML5 Notification :)'
        })
      }
    })
  }
})