
$(document).ready(function() {
  $.ajax({
    url: "https://www.googleapis.com/blogger/v3/blogs/7666529089934918798/posts",
    data: {
      key: "AIzaSyDalPoBDyrr9BZBf0674UNweT4GFXlbBXg"
    }
  }).then(function(data) {
    var posts = data.items;
    
    posts.forEach(function(post) {
      var d = new Date(post.published);
      var months = new Array("JANUARY", "FEBRUARY", "MARCH",
            "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER",
            "OCTOBER", "NOVEMBER", "DECEMBER");
      var formattedDate = months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();

      var html = "<article id='" + post.id + "'>" +
          "<header>" + 
          "<a href='#" + post.id + "'>" + post.title + "</a>" +
          "</header>" + "<time>" + formattedDate + "</time>" + "<div class='post-body'>" + post.content + "</div>" +
          "</article>";

      $("#blog").append(html).show();
    });
    
    if(location.hash) $(location.hash)[0].scrollIntoView();
  });
});
