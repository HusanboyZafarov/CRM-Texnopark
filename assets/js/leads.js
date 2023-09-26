let list_subcat_dropdown = document.querySelectorAll(".leads-list_subcat_dropdown")
list_subcat_dropdown.forEach(dropdown => {
    dropdown.addEventListener("click", () => {
        dropdown.classList.toggle("nonactive")
        list = dropdown.parentElement.parentElement.nextElementSibling
        list.getBoundingClientRect().height ? list.style.maxHeight = 0 : list.style.maxHeight = `${list.scrollHeight}px`
    })
});
let adding_header = document.querySelector(".leads-adding_header")
let block_properer = document.querySelectorAll(".leads-block_properer")

block_properer.forEach(changer => {
    changer.addEventListener("click", () => {
        changer.parentElement.parentElement.classList.toggle("changed")
        changer.firstElementChild.classList.toggle("fa-bars")
        changer.firstElementChild.classList.toggle("fa-grid-2")
    })
});

let adding_form_checkbox_wrapper = document.querySelector(".leads-adding_form_checkbox_wrapper")
let adding_form = document.querySelector(".leads-adding_form")
adding_form_checkbox_wrapper.addEventListener("click", () => {
    document.querySelector("#leads-adding_form_checkbox").checked ? adding_form_checkbox_wrapper.nextElementSibling.classList.remove("noned") : adding_form_checkbox_wrapper.nextElementSibling.classList.add("noned")
})

closer.addEventListener('click', () => {
    closer.classList.remove("opened")
    adding_form.classList.remove("opened")
})
let adding_form_user = document.querySelector(".leads-adding_form_user")
let adding_form_cat = document.querySelector(".leads-adding_form_cat")
let adding_form_opener = document.querySelectorAll(".adding_form_opener")
let adding_closer = document.querySelector(".leads-adding_closer")
adding_form_opener.forEach(element => {
    element.addEventListener("click", () => {
        adding_form.classList.add("opened")
        closer.classList.add("opened")
        if (element.classList.value.split(" ")[2] == "mijoz") {
            adding_form_user.classList.remove("closed")
            adding_form_cat.classList.add("closed")
            adding_header.textContent = "Yangi mijoz qo'shish"
        } else {
            adding_form_user.classList.add("closed")
            adding_header.textContent = "Yangi kategoriya qo'shish"
            adding_form_cat.classList.remove("closed")
        }
    })
});

adding_closer.addEventListener("click", () => {
    adding_form.classList.remove("opened")
    closer.classList.remove("opened")
})

let adding_form_btn_group = document.querySelector(".leads-adding_form_btn_group button:last-child")
adding_form_btn_group.addEventListener("click", () => {
    closer.classList.remove("opened")
    adding_form.classList.remove("opened")
})

let list_subcat_settings = document.querySelectorAll(".leads-list_subcat_setting")

list_subcat_settings.forEach(setting => {
    setting.addEventListener("click", () => {
        let adding_form_title = document.querySelector(".leads-adding_form_title input")
        adding_form.classList.add("opened")
        adding_form_cat.classList.remove("closed")
        adding_form_user.classList.add("closed")
        adding_header.textContent = "O'zgartitish"
        closer.classList.add("opened")

        r_text = ""
        setting.parentElement.previousElementSibling.textContent.split(" ").forEach(element => {
            element ? r_text += `${element} ` : element
            checkbox = document.querySelector(".leads-adding_form_checkbox")
            checkbox.checked = true
            checkbox.checked ? adding_form_checkbox_wrapper.nextElementSibling.classList.remove("noned") : adding_form_checkbox_wrapper.nextElementSibling.classList.add("noned")
        });
        adding_form_title.value = r_text
    })
});

let list_item_alter = document.querySelectorAll(".leads-list_item_alter")
list_item_alter.forEach(setting => {
    setting.addEventListener("click", () => {
        adding_form.classList.add("opened")
        adding_form_cat.classList.add("closed")
        adding_form_user.classList.remove("closed")
        adding_header.textContent = "O'zgartitish"
        closer.classList.add("opened")
    })
});