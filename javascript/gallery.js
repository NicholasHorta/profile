const lightbox = document.createElement('div');
lightbox.id = 'lightbox'

document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')

images.forEach(i => {
    i.addEventListener('click', function () {
        lightbox.classList.add('active');
        const newImage = document.createElement('img');
        newImage.src = i.src;
        lightbox.appendChild(newImage);
        newImage.classList.add('imageSelect');
    })
})

lightbox.addEventListener('click', function (e) {
    lightbox.removeChild(lightbox.firstChild)
    lightbox.classList.remove('active')
})

//* The currentTarget read-only property of the Event interface identifies the current target for the event, as the event traverses the DOM. It always refers to the element to which the event handler has been attached, as opposed to Event.target, which identifies the element on which the event occurred and which may be its descendant.

// % Below would be used if we did not want to exit from the image if we clicked on anything BUT the outside the image

// lightbox.addEventListener('click', function (e) {
//     if (e.target !== e.currentTarget) {
//         return
//     } else {
//         lightbox.removeChild(lightbox.firstChild)
//         lightbox.classList.remove('active')
//     }
// })