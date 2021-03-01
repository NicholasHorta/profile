const itemHi = document.querySelectorAll('.item_hi_change');
const itemIm = document.querySelectorAll('.item_im_change');
const itemName = document.querySelectorAll('.item_name_change');
const dogeIcon = document.querySelector('#doge');

function iconSpin() {
    itemHi.forEach(i => {
        setTimeout(() => {
            i.classList.remove('item_hi_change')
        }, 1000);
    })
    itemIm.forEach(i => {
        setTimeout(() => {
            i.classList.remove('item_im_change')
        }, 2000);
    })
    itemName.forEach(i => {
        setTimeout(() => {
            i.classList.remove('item_name_change')
        }, 3000);
    })
};

window.addEventListener('scroll', function () {
    var html = document.documentElement;
    if (window.visualViewport.pageTop >= html.scrollHeight - 1000) return dogeIcon.classList.add('show-doge');
});


dogeIcon.querySelector('button').addEventListener('click', function () {
    dogeIcon.classList.remove('show-doge');
})


window.onload = iconSpin;





// var body = document.body,
    //     html = document.documentElement;

    // var height = Math.max(body.scrollHeight, body.offsetHeight,
    //     html.clientHeight, html.scrollHeight, html.offsetHeight);
