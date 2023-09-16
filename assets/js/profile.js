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

let profile_form = document.querySelector(".profile-form")
let form_openers = document.querySelectorAll(".form_opener")
let all_form_details = document.querySelectorAll(".profile-form_details_wrapper")
let form_heading = document.querySelector(".profile-form_heading")

let settings_btn = document.querySelectorAll(".settings_btn")


form_openers.forEach(identifier => {
    identifier.addEventListener("click", () => {
        profile_form.classList.remove("opened")
        setTimeout(() => {
            all_form_details.forEach(detail => {
                detail.classList.remove("opened")
            })
            word_message = identifier.classList.value.split(" ")[2]
            let form_details = document.querySelector(`.profile-form_${word_message}`)
            form_details.classList.add("opened")
            capitalized = word_message.charAt(0).toUpperCase() + word_message.slice(1)
            form_heading.textContent = `${capitalized} yozish`
            profile_form.classList.add("opened")
        }, 500);
    })
});

settings_btn.forEach(identifier => {
    identifier.addEventListener("click", () => {
        profile_form.classList.remove("opened")
        setTimeout(() => {
            all_form_details.forEach(detail => {
                detail.classList.remove("opened")
            })
            word_message = identifier.classList.value.split(" ")[2]
            let form_details = document.querySelector(`.profile-form_${word_message}`)
            if (form_details) {
                form_details.classList.add("opened")
                switch (word_message) {
                    case "edit":
                        form_heading.textContent = `O'zgartirish`
                        let phone_number = document.querySelector("#phone-number")
                        let top_number = document.querySelector(".profile-top_number")
                        phone_number.value = `${top_number.textContent.slice(4, 13)}`
                        break
                    case "message":
                        form_heading.textContent = `Habar yo'zish`
                        break
                    case "delete":
                        form_heading.textContent = `Ochirish`
                        break
                }
                profile_form.classList.add("opened")
            }
        }, 500);
    })
});

let form_icon_closer = document.querySelector(".form_icon_closer")





let sender_time = document.querySelector(".profile-sender_time")
setInterval(() => {
    var currentdate = new Date();
    hour = currentdate.getHours() < 10 ? `0${currentdate.getHours()}` : currentdate.getHours()
    day = currentdate.getDate() < 10 ? `0${currentdate.getDay()}` : currentdate.getDate()
    month = currentdate.getMonth() + 1 < 10 ? `0${currentdate.getMonth() + 1}` : currentdate.getMonth()
    minute = currentdate.getMinutes() < 10 ? `0${currentdate.getMinutes()}` : currentdate.getMinutes()
    sender_time.textContent = `${day}.${month}.${currentdate.getFullYear()} ${hour}:${minute}`
}, 1000);

let top_reset_btn = document.querySelector(".profile-top_reset_btn")
let areatext = document.querySelector("#sender_body")

top_reset_btn.addEventListener("click", () => {
    areatext.value = ""
})

let tab_item_izoxlar = document.querySelector(".profile-tab_item.izoxlar")
let tab_item_eslatma = document.querySelector(".profile-tab_item.eslatma")
let tab_item_follower = document.querySelector(".profile-tab_item_follower")
let tab_item_active = document.querySelector(".profile-tab_item.active")
let profile_top_tabs_wrapper = document.querySelector(".profile_top_tabs_wrapper")
let top_sender_btn = document.querySelector(".profile-top_sender_btn")
let top_tab_list = document.querySelector(".profile-top_tab_list.izoxlar")
let top_tab_list_eslatma = document.querySelector(".profile-top_tab_list.eslatma")
let top_tab_item = document.querySelectorAll(".profile-top_tab_list.izoxlar .profile-top_tab_item")
let top_tab_item_eslatma = document.querySelectorAll(".profile-top_tab_list.eslatma .profile-top_tab_item")
let top_rab_heading = document.querySelector(".profile-top_rab_heading")

window.addEventListener("load", () => {
    tab_item_follower.style.width = `${tab_item_active.getBoundingClientRect().width}px`
})

tab_item_eslatma.addEventListener("mouseenter", () => {
    tab_item_izoxlar.classList.remove("active")
    tab_item_eslatma.classList.add("active")
    tab_item_follower.classList.add("changed")
    tab_item_follower.style.width = `${tab_item_eslatma.getBoundingClientRect().width}px`
})

tab_item_izoxlar.addEventListener("mouseenter", () => {
    tab_item_izoxlar.classList.add("active")
    tab_item_eslatma.classList.remove("active")
    tab_item_follower.classList.remove("changed")
    tab_item_follower.style.width = `${tab_item_izoxlar.getBoundingClientRect().width}px`
})

tab_item_izoxlar.addEventListener("click", () => {
    tab_item_izoxlar.classList.add("active")
    tab_item_eslatma.classList.remove("active")
    tab_item_eslatma.classList.remove("current")
    tab_item_izoxlar.classList.add("current")
    tab_item_follower.classList.remove("changed")
    tab_item_follower.style.width = `${tab_item_izoxlar.getBoundingClientRect().width}px`

    top_tab_list.parentElement.classList.add("blured")

    setTimeout(() => {
        top_rab_heading.textContent = "Izoxlar"
        top_tab_list.classList.remove("noned")
        top_tab_list_eslatma.classList.add("noned")
        top_tab_list.parentElement.classList.remove("blured")
    }, 500);
})

tab_item_eslatma.addEventListener("click", () => {
    tab_item_izoxlar.classList.remove("active")
    tab_item_eslatma.classList.add("active")
    tab_item_izoxlar.classList.remove("current")
    tab_item_eslatma.classList.add("current")
    tab_item_follower.classList.add("changed")
    tab_item_follower.style.width = `${tab_item_eslatma.getBoundingClientRect().width}px`

    top_tab_list.parentElement.classList.add("blured")
    setTimeout(() => {
        top_rab_heading.textContent = "Eslatmalar"
        top_tab_list.classList.add("noned")
        top_tab_list_eslatma.classList.remove("noned")
        top_tab_list.parentElement.classList.remove("blured")
    }, 500);
})

profile_top_tabs_wrapper.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (tab_item_eslatma.classList.value.split(" ").includes("current")) {
            tab_item_izoxlar.classList.remove("active")
            tab_item_eslatma.classList.add("active")
            tab_item_follower.classList.add("changed")
            tab_item_follower.style.width = `${tab_item_eslatma.getBoundingClientRect().width}px`
        } else {
            tab_item_izoxlar.classList.add("active")
            tab_item_eslatma.classList.remove("active")
            tab_item_follower.classList.remove("changed")
            tab_item_follower.style.width = `${tab_item_izoxlar.getBoundingClientRect().width}px`
        }
    }, 500);
})

window.addEventListener("load", () => {
    for (let i = 0; i < top_tab_item.length; i++) {
        top_tab_item[i].firstElementChild.textContent = `${i + 1}. `
    }
})

window.addEventListener("load", () => {
    for (let i = 0; i < top_tab_item_eslatma.length; i++) {
        top_tab_item_eslatma[i].firstElementChild.textContent = `${i + 1}. `
    }
})


top_sender_btn.addEventListener("click", () => {
    if (areatext.value) {
        span = document.createElement("span")
        li = document.createElement("li")
        li.className = "profile-top_tab_item"
        span.className = "profile-top_tab_item_number"
        textNode = document.createTextNode(`${areatext.value}`)
        if (top_tab_list.classList.value.split(" ").includes("noned")) {
            span.textContent = `${top_tab_list_eslatma.childElementCount + 1}. `
            top_tab_list_eslatma.appendChild(li)
        } else {
            span.textContent = `${top_tab_list.childElementCount + 1}. `
            top_tab_list.appendChild(li)
        }
        areatext.value = ""

        li.appendChild(span)
        li.appendChild(textNode)
    }
})

let form_delete_sure = document.querySelector(".profile-form_delete_sure")
let form_closer = document.querySelector(".profile-form_closer")

let form_modal = document.querySelector(".profile-form_modal")

form_delete_sure.addEventListener("click", () => {
    form_modal.classList.add("opened")
    profile_form.classList.remove("opened")
})

form_closer.addEventListener("click", () => {
    profile_form.classList.remove("opened")
    closer.classList.remove("opened")
})

closer.addEventListener("click", () => {
    profile_form.classList.remove("opened")
    closer.classList.remove("opened")
})

let closer_openers = document.querySelectorAll(".closer_opener")

closer_openers.forEach(item => {
    item.addEventListener("click", () => {
        closer.classList.add("opened")
    })
});

form_icon_closer.addEventListener("click", () => {
    profile_form.classList.remove("opened")
    closer.classList.remove("opened")
})

let form_undelete = document.querySelector(".profile-form_undelete")
form_undelete.addEventListener("click", () => {
    profile_form.classList.remove("opened")
    closer.classList.remove("opened")
    form_modal.classList.remove("opened")
})