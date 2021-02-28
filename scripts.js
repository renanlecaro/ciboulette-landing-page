function each(nodes, cb) {
  if(!nodes || !nodes.length) return
  for(var i=0;i<nodes.length;i++) cb(nodes[i],i)
} 

each(document.querySelectorAll('a[href="'+window.location.pathname+'"]'), function (link) {
  link.classList.add('isCurrentPage')
})


// remove ref args
window.history.replaceState(
  {},
  '',
  window.location.origin + window.location.pathname
);


// sort faq nodes

var list = document.getElementById('faq');
if(list){

  var items = list.childNodes;
  var itemsArr = [];

  for (var i in items) {
      if (items[i].nodeType == 1) { // get rid of the whitespace text nodes
          itemsArr.push({
            item:items[i],
            height:items[i].childNodes[1].getBoundingClientRect().height
          });
      }
  }


  itemsArr.sort(function(a, b) {
    return a.height-b.height
  });

  for (i = 0; i < itemsArr.length; ++i) {
    list.appendChild(itemsArr[i].item);
  } 
}