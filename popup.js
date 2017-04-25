//обработка нажатия ссылок с тегом <a>
document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {$('#tweetText').val();
                //создание новой вкладки при нажании на ссылку
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
});

 var datTweet = " ";
 
 $(document).ready(function () {
     $('#btnTweet').click(function (e) {
         datTweet =  $('#tweetText').val();
             var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(datTweet);
             window.open(twtLink,'_blank');
         
     });
 });