portfolio1.onclick = function () {
    portfolioBar.className = 'bar state-1'
}

portfolio2.onclick = function () {
    portfolioBar.className = 'bar state-2'
}

portfolio3.onclick = function () {
    portfolioBar.className = 'bar state-3'
}
var topbar =document.getElementById('topbar')
setTimeout(function () {
    startWelcome.classList.remove('active')
}, 1000);

window.onload=function(){
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky')
    }
    else {
        topNavBar.classList.remove('sticky')
    }

    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i
        }
        specialTags[i].classList.add('offset')
    }

    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brother = li.parentNode.children
    for (let i = 0; i < brother.length; i++) {
        brother[i].classList.remove('hightlight')
    }
    li.classList.add('hightlight')
    setTimeout(function () {
        topbar.classList.remove('offset')
        specialTags[0].classList.remove('offset')
    }, 1000);
}


window.onscroll = function () {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky')
    }
    else {
        topNavBar.classList.remove('sticky')
    }

    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i
        }
    }
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brother = li.parentNode.children
    for (let i = 0; i < brother.length; i++) {
        brother[i].classList.remove('hightlight')
    }
    li.classList.add('hightlight')
}



function animate(time) {
    requestAnimationFrame(animate)
    TWEEN.update(time)
}
requestAnimationFrame(animate)

let liTags = document.querySelectorAll('nav.menu > ul > li')
let aTags = document.querySelectorAll('nav.menu > ul > li > a')

for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active')
    }
}

for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault()
        let a = x.currentTarget
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop
        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop//路程
        var coords = { y: currentTop }//起始位置
        var t = Math.abs((s / 100) * 300)//时间
        if (t > 500) { t = 500 }
        var tween = new TWEEN.Tween(coords)//起始位置
            .to({ y: targetTop }, t)//结束位置与时间
            .easing(TWEEN.Easing.Quadratic.InOut)//缓动类型
            .onUpdate(function () {
                window.scrollTo(0, coords.y)
            })//更新界面
            .start()//开始缓动
    }
}
