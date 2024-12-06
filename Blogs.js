let itemsIcon = document.querySelector('.items')
let itemsMenu = document.querySelector('.shopping-items')
let loadAnimation = document.querySelector('.test')
itemsIcon.addEventListener('click', () => {
    itemsMenu.classList.toggle('active')
})


// make options list appear in mobile and tabs responsive
let options = document.querySelector('.options')
let responsiveList = document.querySelector('.op-list')
options.addEventListener('click', () => {
  responsiveList.classList.toggle('show')
})

let links = document.querySelectorAll('.links-bar li')
function linksBackground(pageHerf, id) {

    if (window.location.pathname.includes(pageHerf)) {
        document.getElementById(id).classList.add('select')
    }

}
window.addEventListener('DOMContentLoaded', () => {

    links.forEach((li) => {
        li.classList.remove('select')
    })
    const pages = [
        { href: 'index.html', id: 'page1' },
        { href: 'product.html', id: 'page2' },
        { href: 'blog.html', id: 'page4' },
        { href: 'contact.html', id: 'page5' }
    ];


    pages.forEach(page => linksBackground(page.href, page.id));


})





let submit = document.querySelector('.selectedProudct');
let addToCard = document.querySelectorAll('.item .op-buy a');
let cancel = document.querySelector('.cancel');
let local = JSON.parse(window.sessionStorage.getItem('item')) || [];
let obj = {};

if (window.sessionStorage.getItem('item')) {
    let addToShopingItems2 = JSON.parse(window.sessionStorage.getItem('item'));
    let shoppingcon2 = document.querySelector('.selected-items');
    let count2 = document.querySelector('.counter');
    for (let key2 of addToShopingItems2) {
        let shoppingItem = document.createElement('div');
        shoppingItem.innerHTML = key2.item;
        shoppingItem.className = "selected"
        shoppingItem.children[0].style.height = '100%'
        shoppingcon2.appendChild(shoppingItem);
    }
    count2.innerText = shoppingcon2.children.length;
}

let shoppingcon = document.querySelector('.selected-items');
addToCard.forEach((a) => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        submit.style.display = 'flex';
        let str = a.closest('.item').innerHTML;
        let indexOfImg = str.indexOf('<div class="op-buy');
        let indexOfPrice = str.indexOf('<div class="item-text');
        let text = str.slice(0, indexOfImg) + str.slice(indexOfPrice);

        obj = { 'item': text };
        let price = Number(a.closest('.item').children[2].children[1].innerText.slice(0, 3))
        if (!window.sessionStorage.getItem('price')) {
            let sum = 0
            sum += price
            window.sessionStorage.setItem('price', sum)
        } else {
            let getPrice = Number(window.sessionStorage.getItem('price'))
            getPrice += price
            window.sessionStorage.setItem('price', getPrice)
        }

        // Avoid adding duplicates
        if (!local.some(Item => Item.item === obj.item)) {
            local.push(obj);
            window.sessionStorage.setItem('item', JSON.stringify(local));
            let shoppingItem = document.createElement('div');
            shoppingItem.innerHTML = obj.item;
            shoppingItem.className = "selected"
            shoppingItem.children[0].style.height = '100%'
            shoppingcon.appendChild(shoppingItem);
            let count = document.querySelector('.counter');
            count.innerText = shoppingcon.children.length;
        }

    });
});
let showMore = document.querySelector('.more')
if (shoppingcon.children.length + 1 > 3) {
    showMore.style.display = 'block'
    showMore.innerText = `And More ${shoppingcon.children.length - 2}`
} else {
    showMore.style.display = 'none'
}




//  show blog after click button
let blogContent = document.querySelector('.blog-content')
let readingButton = document.querySelectorAll('.reading')
let blogName = document.querySelector('.blogName')
let closeBlog = document.querySelector('.close')
let contentImgcon = document.querySelector('.contentImg')
readingButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        blogContent.style.display = 'block'
        blogName.innerText = btn.closest('.text').children[0].innerText
        let contentImg = btn.closest('.blog').children[0].innerHTML
        contentImgcon.innerHTML = contentImg
    })

})

closeBlog.addEventListener('click', () => {
    blogContent.style.display = 'none'
})