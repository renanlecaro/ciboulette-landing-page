function each(nodes, cb) {
  if(!nodes || !nodes.length) return
  for(var i=0;i<nodes.length;i++) cb(nodes[i],i)
} 

each(document.querySelectorAll('a[href="'+window.location.pathname+'"]'), function (link) {
  link.classList.add('isCurrentPage')
})