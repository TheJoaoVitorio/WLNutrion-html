// const navLinks = document.querySelectorAll('.item-lateral');
// navLinks.forEach(navLinks => {
//     navLinks.addEventListener('click', () => {
//         document.querySelector('.active').classList.remove('active');
//         navLinks.classList.add('active');
        
//     });
// })
const currentLocation = location.href;
const navItem = document.querySelectorAll(".item-lateral img");
const menuLength = navItem.length;

for (var i=0 ; i < menuLength; i++){
    if (navItem [i].href === currentLocation){
        navItem[i].className = "active";
    }
}