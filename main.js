let semanticCore = {

    cart: {
        "ua":"0 Предметів добавлено",
        "en":"0 Items Added",
    },
    autorization: {
        "ua":"Увійти чи Зарєструватись",
        "en":"Login or Sign Up",

    },
    features: {
        "ua":"Вибране",
        "en":"Features",

    },
    products: {
        "ua":"Продукти",
        "en":"Products",

    },
    blog: {
        "ua":"Блог",
        "en":"Blog",

    },
    about: {
        "ua":"Про нас",
        "en":"About",

    },
}

let allLang = ['en', 'ua']
let lang = 'en';

ua.onclick = function(){
    lang = 'ua'
    changeURL();
}

en.onclick = function(){
    lang = 'en'
    changeURL();
}


function changeURL(){
    location.href = window.location.pathname + `#` + lang;
    location.reload()
}

function changeLang(){
    let hash = (window.location.hash).substring(1);
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    for(let key in semanticCore){
        document.querySelector('.language-'+key).innerText = semanticCore[key][hash]
    }
}

changeLang()