let settings = document.querySelectorAll(".clients-top_info_item.settings")
let clients_form = document.querySelector(".clients-form")
let clients_adding_closer = document.querySelector(".clients-adding_closer")
let form_adding_btn = document.querySelector(".form_adding_btn")
settings.forEach(setting => {
    setting.addEventListener("click", () => {
        setting.classList.toggle("active")
        if (setting.classList.value.split(" ").includes("active")) {
            setting.nextElementSibling.classList.toggle("noned")
            setTimeout(() => {
                setting.nextElementSibling.classList.toggle("opened")
            }, 500);
        } else {
            setting.nextElementSibling.classList.toggle("opened")
            setTimeout(() => {
                setting.nextElementSibling.classList.toggle("noned")
            }, 500);
        }
    })
});

let updates = document.querySelectorAll(".clients-top_info_item.update")
let adding_name = document.querySelector("#clients-adding_name")
let adding_phone_number = document.querySelector("#clients-adding_phone-number")
let adding_comment = document.querySelector("#clients-adding_comment")
let client_adding_header = document.querySelector(".clients-adding_header")
updates.forEach(update => {
    update.addEventListener('click', () => {
        closer.classList.add("opened")
        adding_name.value = ""
        adding_phone_number.value = ""
        adding_comment.value = ""
        client_adding_header.textContent = "O'zgartirish"
        clients_form.classList.add("opened")
        arr = update.parentElement.parentElement.children[1].textContent.split(" ")
        arr2 = update.parentElement.parentElement.children[2].textContent.split(" ")
        arr3 = update.parentElement.parentElement.children[3].textContent.split(" ")
        arr2.forEach(element => {
            if (element !== true || element !== "\n") {
                adding_phone_number.value += element.slice(4, 19)
            }
        });
        arr.forEach(element => {
            if (element !== false && element !== "\n" && element !== "") {
                adding_name.value += `${element} `
            }
        });

        arr3.forEach(element => {
            if (element !== false && element !== "\n" && element !== "") {
                adding_comment.value += `${element} `
            }
        });

        settings.forEach(setting => {
            setting.classList.remove("active")
            setting.nextElementSibling ? setting.nextElementSibling.classList.add("noned") : false
            setTimeout(() => {
                setting.nextElementSibling ? setting.nextElementSibling.classList.remove("opened") : false
            }, 500);
        });
    })
});

clients_adding_closer.addEventListener('click', () => {
    closer.classList.remove("opened")
    clients_form.classList.remove("opened")
})

closer.addEventListener('click', () => {
    closer.classList.remove("opened")
    clients_form.classList.remove("opened")
})

form_adding_btn.addEventListener("click", () => {
    closer.classList.add("opened")
    adding_name.value = ""
    adding_phone_number.value = ""
    adding_comment.value = ""
    client_adding_header.textContent = "Mijoz qo'shish"
    clients_form.classList.add("opened")
})

let clients_adding_btn_reset = document.querySelector(".clients-adding_btn-reset")
clients_adding_btn_reset.addEventListener('click', () => {
    closer.classList.remove("opened")
    adding_name.value = ""
    adding_phone_number.value = ""
    adding_comment.value = ""
    client_adding_header.textContent = "Mijoz qo'shish"
    clients_form.classList.remove("opened")
})

let item_deletes = document.querySelectorAll(".clients-top_info_item.delete")
let waiting_sec = document.querySelector(".clients-form_delete_wait")
item_deletes.forEach(delete_item => {
    delete_item.addEventListener('click', () => {
        sec = 15
        setInterval(() => {
            
        }, 1000);
    })
});