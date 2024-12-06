// view bag items
let itemsIcon = document.querySelector('.items')
let itemsMenu = document.querySelector('.shopping-items')
let loadAnimation = document.querySelector('.test')
itemsIcon.addEventListener('click', () => {
  itemsMenu.classList.toggle('active')
})
// add background to each nav link when selected
let links = document.querySelectorAll('.links-bar li')
let landText = document.querySelector('.land-text')
let toProduct = document.querySelector('.pro')

// make options list appear in mobile and tabs responsive
let options = document.querySelector('.options')
let responsiveList = document.querySelector('.op-list')
options.addEventListener('click', () => {
  responsiveList.classList.toggle('show')
})
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



let NewArrivals = document.querySelector('.New-Arrivals')
let list = document.querySelector('.hoverd-list-container')


NewArrivals.addEventListener('mouseover', () => {
  list.style.display = 'block'
})

NewArrivals.addEventListener('mouseout', () => {
  list.style.display = 'none'
})

list.addEventListener('mouseover', () => {
  list.style.display = 'block'
})
list.addEventListener('mouseout', () => {
  list.style.display = 'none'
})




// make header nav bar appper when scroll

const header = document.querySelector('.main-header')
const header2 = document.querySelector('.main-header-2')
const categoryList = document.querySelector('.category-list')
const mainList = document.querySelector('.main-list')
window.onscroll = () => {
  console.log(window.scrollY)
  if (window.scrollY > 875) {
    mainList.style.display = 'none'
    categoryList.addEventListener('click', () => {
      mainList.classList.toggle('show')
    })
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
  if (window.scrollY < 875) {

    mainList.classList.remove('show')
    mainList.style.display = 'flex'
    header.classList.remove('smooth')
    header.style.position = 'relative'
    header.style.backgroundColor = '#333333'
    links.forEach((li) => {
      li.style.color = 'white'
    })
  }
}

let shoppingItems = document.querySelector('.selected-items')
if (window.sessionStorage.getItem('item')) {
  let localItems = JSON.parse(window.sessionStorage.getItem('item'));
  let count = document.querySelector('.counter')
  for (let key of localItems) {
    let div = document.createElement('div')
    div.innerHTML = key.item
    count.innerText = shoppingItems.children.length + 1
    div.className = 'selected'
    div.children[0].style.cssText = 'height:100%'
    shoppingItems.appendChild(div)
  }
}
// make swiper in home page
const swiper = new Swiper('.swiper', {

  loop: true,       // Enable looping

  autoplay: {
    delay: 2700,
    disableOnInteraction: false,
  },
  // Pagination



  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints (optional)
  breakpoints: {
    1000: {
      slidesPerView: 2,
      spaceBetween: 10,

    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 10,
    }
  },
});



