let hiddenMenus = document.getElementsByClassName('hiddenMenu')
let hiddenMenu = hiddenMenus[0]
let menuBtns = document.getElementsByClassName('menuBtn')
let menuBtn = menuBtns[0]

function showMenu(hiddenMenu){
  console.log('Hit')
  if (hiddenMenu.classList.contains('expand')){
    hiddenMenu.classList.remove('expand')
  } else {
    hiddenMenu.classList.add('expand')
  }
}

menuBtn.addEventListener('click', () => showMenu(hiddenMenu))