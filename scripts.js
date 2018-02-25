function each(nodes, cb) {
  if(!nodes || !nodes.length) return
  for(var i=0;i<nodes.length;i++) cb(nodes[i],i)
}

function range(to) {
  var out=[]
  for(var i=0;i<to;i++)
    out.push(i)
  return out
}

each(document.getElementsByClassName('slideShow'), function (slideShowRoot) {
  var slides=slideShowRoot.getElementsByClassName('part')
  var dots=slideShowRoot.getElementsByClassName('dots')[0]
  var slidesCount=slides.length;
  var currentSlide=0;

  function refresh() {
    currentSlide=(currentSlide%slidesCount+slidesCount)%slidesCount
    each(slides, function(slide,i){
      slide.style.display=i===currentSlide? '':'none';
    })
    dots.innerHTML=range(slidesCount).map(function (i) {
      return '<i class="dot '+(i==currentSlide ? 'active ':'')+'"></i>'
    }).join('')
  }
  refresh()
  const prev=slideShowRoot.getElementsByClassName('prev')[0]
  const next=slideShowRoot.getElementsByClassName('next')[0]
  prev.addEventListener('click',function () {
    currentSlide--
    refresh()
  })
  next.addEventListener('click',function () {
    currentSlide++
    refresh()
  })
})

each(document.querySelectorAll('a[href="'+window.location.pathname+'"]'), function (link) {
  link.classList.add('isCurrentPage')
})