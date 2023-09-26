let currency_incr = document.querySelectorAll(".header-currency_incr"),
    currency_decr = document.querySelectorAll(".header-currency_decr"),
    currency_first = document.querySelector(".header-currency_first"),
    currency_second = document.querySelector(".header-currency_second"),
    currency_usd = document.querySelector(".header-currency_usd"),
    currency_uzs = document.querySelector(".header-currency_uzs"),
    notification_opener = document.querySelector(".header-notification_opener"),
    notification_closer = document.querySelector(".header-notification_closer"),
    notification_wrapp = document.querySelector('.header-notification_wrapp'),
    notification_bg = document.querySelector(".header-notification_bg"),
    currency_changer = document.querySelector(".header-currency_changer"),
    currency_current_lang = document.querySelector(".header-currency_current_lang")
var closer = document.querySelector(".closer")


let rub = 0
let usd = 0
let uzs = 0

fetch(`https://cbu.uz/uz/arkhiv-kursov-valyut/json/`)
    .then(response => response.json()).then(response => {
        // console.log(response[0]); // Dollar
        // console.log(response[1]); // Yevro
        // console.log(response[2]); // Rubl
        uzs = response[0].Rate
        usd = 1

        currency_second.value = Number(uzs).toFixed(2)
        currency_first.value = usd
        currency_uzs.textContent = uzs
    }).catch(() => {});
currency_incr.forEach(incr => {
    let input = incr.parentElement.parentElement.previousElementSibling

    incr.addEventListener("click", () => {
        if (incr.classList[1] == "uz") {
            input.value = Number(Number(input.value) + 1000).toFixed(2)
            currency_first.value = Number(input.value / uzs).toFixed(2)
            currency_uzs.textContent = input.value
            currency_usd.textContent = currency_first.value
        } else {
            input.value = Number(Number(input.value) + 1).toFixed(2)
            currency_second.value = Number(input.value * uzs).toFixed(2)
            currency_uzs.textContent = currency_second.value
            currency_usd.textContent = input.value
        }
    })
});

currency_decr.forEach(decr => {
    let input = decr.parentElement.parentElement.previousElementSibling

    decr.addEventListener("click", () => {
        if (decr.classList[1] == "uz") {
            if (input.value >= 1000) {
                input.value = Number(Number(input.value) - 1000).toFixed(2)
                currency_first.value = Number(input.value / uzs).toFixed(2)
            }
            input.value <= 1000 ? input.value = "0.00" : input.value;
            input.value <= 1000 ? currency_first.value = "0.00" : currency_first.value;
            currency_uzs.textContent = input.value
            currency_usd.textContent = currency_first.value
        } else {
            if (input.value >= 1) {
                input.value = Number(Number(input.value) - 1).toFixed(2)
                currency_second.value = Number(input.value * uzs).toFixed(2)
                currency_uzs.textContent = currency_second.value
                currency_usd.textContent = input.value
            }
        }
    })
});

currency_first.addEventListener("keyup", (e) => {
    if (e.key != "-" || e.key != "+") {
        currency_second.value = Number(currency_first.value * uzs).toFixed(2)
        currency_uzs.textContent = currency_second.value
        currency_usd.textContent = currency_first.value
    }
})

currency_second.addEventListener("keyup", (e) => {
    if (e.key != "-" || e.key != "+") {
        currency_first.value = Number(currency_second.value / uzs).toFixed(2)
        currency_uzs.textContent = currency_second.value
        currency_usd.textContent = currency_first.value
    }
})


currency_changer.addEventListener("click", () => {
    currency_changer.classList.toggle("changed")
    prev = currency_changer.previousElementSibling.classList.toggle("changed")
    next = currency_changer.nextElementSibling.classList.toggle("changed")
})


currency_current_lang.addEventListener("click", () => {
    currency_current_lang.classList.toggle("changed")
    lang_list = currency_current_lang.nextElementSibling
    lang_list.getBoundingClientRect().height ? lang_list.style.maxHeight = `0px` : lang_list.style.maxHeight = `${lang_list.scrollHeight}px`
})

notification_opener.addEventListener("click", () => {
    notification_wrapp.classList.toggle("opened")
    notification_bg.classList.toggle("opened")
    notification_wrapp.style.width = `${notification_opener.parentElement.getBoundingClientRect().width *= 1.4}px`
    notification_bg.style.width = `${notification_opener.parentElement.getBoundingClientRect().width *= 1.4}px`
    notification_opener.parentElement.classList.toggle("changed")
})

notification_closer.addEventListener("click", () => {
    notification_wrapp.classList.remove("opened")
    notification_opener.parentElement.classList.remove("changed")
})

let notification_toggler = document.querySelectorAll(".header-notification_toggler")
notification_toggler.forEach(element => {
    element.addEventListener("click", () => {
        element.parentElement.nextElementSibling.getBoundingClientRect().height ? element.parentElement.nextElementSibling.style.maxHeight = 0 : element.parentElement.nextElementSibling.style.maxHeight = `${element.parentElement.nextElementSibling.scrollHeight}px`
    });
});

let sidebar_items = document.querySelectorAll(".header-sidebar_item")
let sidebar_item_active = document.querySelector(".header-sidebar_item.active")
let follower = document.querySelector(".header-sidebar_follower")
let sidebar_ul = document.querySelector(".header-sidebar_ul")

sidebar_items.forEach(element => {
    element.addEventListener("mouseenter", () => {
        follower.style.top = `${element.getBoundingClientRect().top - 4}px`
        follower.style.height = `${element.getBoundingClientRect().height + 6}px`
        follower.style.width = `${element.getBoundingClientRect().width}px`
    })
});

sidebar_ul.addEventListener("mouseleave", () => {
    setTimeout(() => {
        follower.style.top = `${sidebar_item_active.getBoundingClientRect().top - 4}px`
        follower.style.height = `${sidebar_item_active.getBoundingClientRect().height + 6}px`
    }, 500);
})

window.addEventListener("load", () => {
    follower.style.top = `${sidebar_item_active.getBoundingClientRect().top - 4}px`
    follower.style.height = `${sidebar_item_active.getBoundingClientRect().height + 6}px`
    follower.style.width = `${sidebar_item_active.getBoundingClientRect().width}px`
    setTimeout(() => {
        follower.classList.add("opened")
    }, 500);
})

let form_download_opener = document.querySelector(".form_download_opener")

let form_download_links = document.querySelector(".form_download_links")
if (form_download_links) {
    form_download_opener.addEventListener("click", () => {
        form_download_links.getBoundingClientRect().height ? form_download_links.style.maxHeight = 0 : form_download_links.style.maxHeight = `${form_download_links.scrollHeight}px`
    })
}

let filter_opener = document.querySelector(".filter_opener")
filter_opener.addEventListener("click", () => {

    filter_opener.parentElement.getBoundingClientRect().width == 74 ? filter_opener.parentElement.style.maxWidth = `${filter_opener.parentElement.scrollWidth + 20}px` : filter_opener.parentElement.style.maxWidth = `74px`
    filter_opener.parentElement.getBoundingClientRect().width == 74 ? filter_opener.classList.add("active") : filter_opener.classList.remove("active")
})

let filter_closer = document.querySelector(".filter_closer")
filter_closer.addEventListener("click", () => {
    filter_opener.classList.toggle("active")
    filter_opener.parentElement.getBoundingClientRect().width == 74 ? filter_opener.parentElement.style.maxWidth = `${filter_opener.parentElement.scrollWidth + 20}px` : filter_opener.parentElement.style.maxWidth = `74px`
})