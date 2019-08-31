var items = document.getElementsByClassName("item");

for(var i = 0; i < items.length; i++){
  items[i].addEventListener('click', function(e){
    //get the index of the element
    var itemIndex = Array.from(this.parentElement.children).indexOf(this);
    postIndex(itemIndex);
    window.location.reload();
  })
}
//create a connection and send data to the server
function postIndex(id){
  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", '/todo/'+id, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  xhr.send(id);
}
