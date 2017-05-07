// Top bar slide in/out
var slide = document.getElementById('firstSlide');
var bar = document.getElementById('topButtons');

var slideHeight = 0,
    barHeight = 0;

function measureHeights() {
    slideHeight = slide.clientHeight
    barHeight = bar.clientHeight
}

window.addEventListener('resize', measureHeights);
measureHeights();



window.addEventListener('scroll', function() {
    var deltaY = window.scrollY - slideHeight;
    deltaY = Math.min(deltaY, 0)
    deltaY = Math.max(deltaY, -barHeight)

    bar.style.transform = 'translate(0,' + deltaY + 'px)';


});

// Preview images 
document.querySelectorAll('.imageAndCaption > .img > img').forEach(function(thumb) {
    thumb.addEventListener('click', function(ev) {
        var fullSize = document.createElement('img')
        fullSize.src = thumb.src.replace('250', '500')
        fullSize.className = "fullSizePreview"
        var wrapper = document.createElement('div')
        wrapper.className = 'fullSizePreviewWrapper'

        wrapper.appendChild(fullSize)
        document.body.appendChild(wrapper)

        function cleanUp() {
            document.removeEventListener('mousedown', cleanUp)
            wrapper.className += ' fading';
            setTimeout(function() {
                document.body.removeChild(wrapper);

            }, 300)
        }
        document.addEventListener('mousedown', cleanUp)
        ev.stopPropagation()


    })
})
