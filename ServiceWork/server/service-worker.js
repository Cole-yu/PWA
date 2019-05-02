self.addEventListener('push', function (event) {
 // 检查服务端是否发来了任何有效载荷数据
  var payload = event.data ? JSON.parse(event.data.text()) : 'no payload';
  var title = 'Progressive Times';
  event.waitUntil(
    // 使用提供的信息来显示 Web 推送通知
    self.registration.showNotification(title, {                           
      body: payload.msg,
      url: payload.url,
      icon: payload.icon
    })
  );
});