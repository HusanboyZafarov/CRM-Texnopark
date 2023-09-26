var start1 = new Datepicker('#form_datetime_start', {});
var end1 = new Datepicker('#form_datetime_end', {});
var expiring = new Datepicker('#list-product_adding_expiring', {});

let info_item_name = document.querySelectorAll(".list-info_item.name")
let product_adding_header = document.querySelector(".list-product_adding_header")
let activeEls = [
    document.querySelector("#list-product_adding_input"),
    document.querySelector("#editing_product_id"),
    document.querySelector("#list-product_adding_select"),
    document.querySelector("#list-product_adding_quantity"),
    document.querySelector("#list-product_adding_expiring"),
    document.querySelector("#list-product_adding_code")
]
info_item_name.forEach((item) => {
    item.addEventListener("click", () => {
        product_adding.classList.remove("opened")
        contentEls = Array.from(item.parentElement.children)
        setTimeout(() => {
            product_adding_header.textContent = "Mahsulot o'zgartirish"
            product_adding.classList.add("opened")
            for (let index = 0; index < activeEls.length; index++) {
                const activeEl = activeEls[index];
                const contentEl = contentEls[index];
                activeEl.value = contentEl.textContent
                index == 0 ? activeEl.value = `${contentEl.textContent.slice(3)}` : 0
                index == 1 ? activeEl.value = `${contentEl.firstElementChild.value}` : 0
            }
        }, 500);
    })
})

let product_adding = document.querySelector(".list-product_adding"),
    product_form_closer = product_adding.querySelector(".list-product_btn_group span"),
    product_adding_closer = document.querySelector(".list-product_adding_closer")

product_form_closer.addEventListener("click", formCloser)
product_adding_closer.addEventListener("click", formCloser)

function formCloser() {
    product_adding.classList.remove("opened")
}

let top_adding_product = document.querySelector(".list-top_adding_product")
top_adding_product.addEventListener("click", () => {
    product_adding.classList.add("opened")
    activeEls.forEach(element => {
        element.value = ""
    });
})  