let itemsIcon = document.querySelector('.items')
let itemsMenu = document.querySelector('.shopping-items')
let loadAnimation = document.querySelector('.test')
itemsIcon.addEventListener('click', () => {
  itemsMenu.classList.toggle('active')
})

// add background to each nav link when selected

let links = document.querySelectorAll('.links-bar li')
let a = document.querySelectorAll('.links-bar li a')


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

const header = document.querySelector('.main-header')
const header2 = document.querySelector('.main-header-2')
window.onscroll = () => {
  if (window.scrollY >= 875) {
    header.classList.add('smooth')
    header.style.position = 'fixed'
    header.style.backgroundColor = 'white'
    header.style.top = 0
    header.style.boxShadow = "0px 3px 3px rgba(0, 0, 0, 0.2)";
    header.style.zIndex = '10'
    header.style.height = '85px'

    links.forEach((li) => {
      li.style.color = '#333333'
      if (li.classList.contains('select')) {
        li.style.color = 'white'
      }
    })

  }
  if (window.scrollY <= 875) {
    header.classList.remove('smooth')
    header.style.position = 'relative'
    header.style.backgroundColor = '#333333'
    links.forEach((li) => {
      li.style.color = 'white'
    })
  }
}

// make options list appear in mobile and tabs responsive
let options = document.querySelector('.options')
let responsiveList = document.querySelector('.op-list')
options.addEventListener('click', () => {
  responsiveList.classList.toggle('show')
})


// make this variable global scope to use it in function and out
let types = document.querySelectorAll('.types li')



// function to show products of category
function showProduct(target, className) {
  let productsbtn = document.getElementById(target)
  let productItem = document.querySelector(`.products .${className}`)
  let productsCon = document.querySelectorAll('.products > div')

  types.forEach((li) => {
    li.className = ''
  })
  productsbtn.classList.add('type-color')
  productsCon.forEach((item) => {
    item.style.display = 'none'
    item.classList.remove('appear')
  })

  productItem.classList.add('appear')

}
// search on product
let input = document.querySelector('.input input')
let categoryItems = document.querySelectorAll('.products > div .item ')
let category = document.querySelectorAll('.products > div .item ')

let categoryItemsText = document.querySelectorAll('.products > div  div:not(.container) .item-text p ')
let searchBtn = document.getElementById('search-button')

input.addEventListener('input', () => {
  categoryItems.forEach((item) => {
    if (input.value == '') {
      item.classList.add('appear')
    }
    item.classList.remove('appear')
    item.style.display = 'block'

  })
  categoryItemsText.forEach((p) => {
    if (p.innerText === input.value) {
      categoryItems.forEach((item) => {
        item.style.display = 'none'
      })
      p.closest('.item').classList.add('appear')
    }
  })

})
let love = document.querySelectorAll('.love')
love.forEach((love) => {
  love.addEventListener('click', () => {
    love.classList.toggle('love-color')
  })
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

cancel.addEventListener('click', () => {
  submit.style.display = 'none'
})



