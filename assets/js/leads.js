let search_input = document.querySelector("#query_s")
let search_result_list = document.querySelector(".leads-search_result_list")
search_input.addEventListener("keyup", () => {
    !search_input.value ? search_result_list.style.maxHeight = 0 : search_result_list.style.maxHeight = `${search_result_list.scrollHeight}px`
})

let form_download_opener = document.querySelector(".leads-form_download_opener")

let form_download_links = document.querySelector(".leads-form_download_links")
form_download_opener.addEventListener("click", () => {
    form_download_links.getBoundingClientRect().height ? form_download_links.style.maxHeight = 0 : form_download_links.style.maxHeight = `${form_download_links.scrollHeight}px`
})

let filter_opener = document.querySelector(".leads-filter_opener")
filter_opener.addEventListener("click", () => {
    filter_opener.classList.toggle("active")
    filter_opener.parentElement.getBoundingClientRect().width == 74 ? filter_opener.parentElement.style.maxWidth = `100%` : filter_opener.parentElement.style.maxWidth = `74px`
})

let list_subcat_dropdown = document.querySelectorAll(".leads-list_subcat_dropdown")
list_subcat_dropdown.forEach(dropdown => {
    dropdown.addEventListener("click", () => {
        dropdown.classList.toggle("nonactive")
        list = dropdown.parentElement.parentElement.nextElementSibling
        list.getBoundingClientRect().height ? list.style.maxHeight = 0 : list.style.maxHeight = `${list.scrollHeight}px`
    })
});

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
adding_form_opener.forEach(element => {
    element.addEventListener("click", () => {
        let el = document.querySelector(`.leads-adding_form_${}`)
        element.classList.value.split(" ")[2] == ""
    })
});