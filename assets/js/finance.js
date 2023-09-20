let sidebar_item_span = document.querySelector(".header-sidebar_item span")
sidebar_item_span.addEventListener("click", () => {
    sidebar_item_span.nextElementSibling.classList.toggle("opened")
    console.log(sidebar_item_span.nextElementSibling.style.right);

    if (sidebar_item_span.nextElementSibling.style.right || sidebar_item_span.nextElementSibling.style.right == "0px") {
        sidebar_item_span.nextElementSibling.style.right = "0px"
    } else {
        sidebar_item_span.nextElementSibling.style.right = `-${sidebar_item_span.style.width + sidebar_item_span.nextElementSibling.getBoundingClientRect().width}px`
    }
})