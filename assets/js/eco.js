allImg = document.querySelectorAll('img[data-src],img[data-srcset]');
headerbanner = document.querySelector('.header_banner');

if (window.localStorage.getItem('eco') == 'true') {
    document.querySelector('#ecoInput').checked = true;
}

allImg.forEach(function (img) {

    if (window.localStorage.getItem('eco') == 'true') {
        img.setAttribute('data-srcset', '');
        img.setAttribute('srcset', '');
        if  (img.classList.contains('logoIMG')) {
            img.src = '/wp-content/themes/nc_theme/assets/img/header-logo-eco.svg'
            img.dataset.src = '/wp-content/themes/nc_theme/assets/img/header-logo-eco.svg'
        }else if(img.classList.contains('logoFooter')){
            img.src = '/wp-content/themes/nc_theme/assets/img/footer-logo-eco.png'
            img.dataset.src = '/wp-content/themes/nc_theme/assets/img/footer-logo-eco.png'
        }else{
            img.src = '/wp-content/themes/nc_theme/assets/img/fond.webp'
            img.dataset.src = '/wp-content/themes/nc_theme/assets/img/fond.webp'
        }
    } else {
        img.src = img.dataset.src
    }
})

document.querySelector('#ecoInput').addEventListener('change',(e) => {
    document.querySelector('#eco-modal').classList.add('active');

    if (window.localStorage.getItem('eco') == 'true') {
        document.querySelector('#ecoInput').checked = true;
    }else{
        document.querySelector('#ecoInput').checked = false;
    }
})

document.querySelector('#eco-modal .closeModale').addEventListener('click',(e) => {
    document.querySelector('#eco-modal').classList.remove('active');
})


document.querySelector('#eco').textContent = window.localStorage.getItem('eco') === 'true' ? "Désactiver le mode éco" : "Activer le mode éco"
document.querySelector('#eco-modal .btn').addEventListener('click',(e) => {
    let newEco = window.localStorage.getItem('eco') === 'true' ? "false" : "true";
    window.localStorage.setItem('eco', newEco);
    window.location.reload();
})
