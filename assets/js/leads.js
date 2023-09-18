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