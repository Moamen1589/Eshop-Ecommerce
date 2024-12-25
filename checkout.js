// make options list appear in mobile and tabs responsive
let options = document.querySelector('.options')
let responsiveList = document.querySelector('.op-list')
options.addEventListener('click', () => {
    responsiveList.classList.toggle('show')
})


let localItems = JSON.parse(window.sessionStorage.getItem('item'));
let con = document.querySelector('.itemscon')
let ItemsConHead = document.querySelector('.no-items ')
let links = document.querySelectorAll('.links-bar li')
let priceCon = document.querySelector('.price')
links.forEach((li) => {
    li.classList.remove('select')
})
for (let key of localItems) {
    let div = document.createElement('div')
    let delBtn = document.createElement('button')
    delBtn.innerText = 'Delete'
    delBtn.style.cssText = 'width:100px; padding:15px ;background-color:red; color:white; display:block'
    div.className = 'selected-item'
    div.innerHTML = key.item
    div.style.cssText = 'align-items:center'
    div.appendChild(delBtn)
    con.appendChild(div)
    // sum prive of products and add it to session storage

    let getPrice = Number(window.sessionStorage.getItem('price'))
    priceCon.innerText = `${getPrice}.00$`
    delBtn.addEventListener('click', () => {
        localItems = localItems.filter(localItem => localItem.item !== key.item);
        window.sessionStorage.setItem('item', JSON.stringify(localItems));
        div.remove()
        if (itemsCon.children.length == 2) {
            ItemsConHead.innerText = 'No Items Selected'
        } else {
            ItemsConHead.innerText = `You Select ${itemsCon.children.length - 2} Items`
        }
        let subItemPrice = Number(delBtn.closest('.selected-item').children[1].children[1].innerText.slice(0, 3))
        getPrice -= subItemPrice
        priceCon.innerText = `${getPrice}.00$`
        window.sessionStorage.setItem('price', getPrice)
    })
}
// show selected products when clicked on button
let itemsCon = document.querySelector('.itemscon')
let itemsBtn = document.querySelector('.showSelected')
let closeBtn = document.querySelector('.close')
itemsBtn.addEventListener('click', () => {
    itemsCon.style.display = 'block'
})
if (itemsCon.children.length == 2) {
    ItemsConHead.innerText = 'No Items Selected'
}
else {
    ItemsConHead.innerText = `You Select ${itemsCon.children.length - 2} Items`
}
closeBtn.addEventListener('click', () => {
    itemsCon.style.display = 'none'
})


let visa = document.getElementById('visa')
let pyoneer = document.getElementById('pyoneer')
let master = document.getElementById('master-card')
let discountAmount = document.querySelector('.discount')
let totalPrice = document.querySelector('.total-price')
let discount = Number(window.sessionStorage.getItem('price'))
visa.addEventListener('input', () => {
    priceCon.innerText = `${discount}.00$`
    let visaDiscount = discount * 5 / 100
    discountAmount.innerText = `5%`
    totalPrice.innerText = `${ discount - visaDiscount.toFixed()}.00$`
})
pyoneer.addEventListener('input', () => {
    priceCon.innerText = `${discount}.00$`
    let pyoneerDiscount = discount * 7 / 100
    discountAmount.innerText = `7%`
    totalPrice.innerText = `${discount - pyoneerDiscount.toFixed()}.00$`
})
master.addEventListener('input', () => {
    priceCon.innerText = `${discount}.00$`
    let masterDiscount = discount * 8 / 100
    discountAmount.innerText = `8%`
    totalPrice.innerText = `${discount - masterDiscount.toFixed()}.00$`
})
let checkoutBtn = document.querySelector('.checkout')
let paymentWays = document.querySelectorAll('.payment-ways input')
let submit = document.querySelector('.selectedProudct');
let alertMassage = document.querySelector('.alert')
let creditWorng = document.querySelector('.credit-wrong')
let finalMassage = document.querySelector('.finalMassage')
let creditCardMassage = document.querySelector('.credit-card')
let cardInput = document.querySelector('.credit')
let SubmitCard = document.querySelector('.submit')
let yes = document.querySelector('.yes')
let no = document.querySelector('.no')
let regcard = /^(\d{4}-){3}\d{4}$/
paymentWays.forEach((input) => {
    input.addEventListener('input', () => {
        alertMassage.classList.add('not-appear')
    })
})
checkoutBtn.addEventListener('click', () => {
    if (window.sessionStorage.getItem('price') == 0) {
        checkoutBtn.disabled = true
    } else {
        paymentWays.forEach((input) => {
            if (input.checked) {
                creditCardMassage.classList.add('showSubmit')
            } else {
                alertMassage.style.display = 'block'
            }

            cardInput.addEventListener('input', () => {
                if (regcard.test(cardInput.value)) {
                    creditWorng.style.display = 'none'
                    SubmitCard.disabled = false
                }
            })

            SubmitCard.addEventListener('click', () => {
                if (regcard.test(cardInput.value)) {
                    creditCardMassage.classList.remove('showSubmit')
                    submit.classList.add('showSubmit')
                } else {
                    creditWorng.style.display = 'block'
                    SubmitCard.disabled = true
                }


            })
        })
    }

})
yes.addEventListener('click', () => {
    submit.classList.remove('showSubmit')
    finalMassage.classList.add('showSubmit')
    window.sessionStorage.clear()
    priceCon.innerText = ''
    totalPrice.innerText = ''
    discountAmount.innerText = ''
    setTimeout(() => {
        finalMassage.classList.remove('showSubmit')
        location.reload();
    }, 1700)
})

no.addEventListener('click', () => {
    submit.classList.remove('showSubmit')
    location.reload();
})









