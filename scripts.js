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
