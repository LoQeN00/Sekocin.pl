const dropDownMenus = [...document.querySelectorAll('[data-dropdown]')]

dropDownMenus.forEach(item => {
    item.addEventListener('click',() => {
        document.querySelectorAll('.dropdown-link').forEach(link => {
            link.style.pointerEvents = 'none'
        })
        const dropDownLinks = [...item.children[1].children[0].children]
        dropDownLinks.pop()
        dropDownLinks.forEach(link => {
            link.style.pointerEvents = 'all'
        })
    })
})

