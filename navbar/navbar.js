let currency_incr = document.querySelectorAll(".header-currency_incr"),
    currency_decr = document.querySelectorAll(".header-currency_decr"),
    currency_first = document.querySelector(".header-currency_first"),
    currency_second = document.querySelector(".header-currency_second")

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
        } else {
            input.value = Number(Number(input.value) + 1).toFixed(2)
            currency_second.value = Number(input.value * uzs).toFixed(2)
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
            input.value <= 1000 ? input.value = 0 : input.value;
            input.value <= 1000 ? currency_first.value = 0 : currency_first.value;
        } else {
            if (input.value >= 1) {
                input.value = Number(Number(input.value) - 1).toFixed(2)
                currency_second.value = Number(input.value * uzs).toFixed(2)
            }
        }
    })
});

currency_first.addEventListener("keyup", (e) => {
    if (e.key != "-" || e.key != "+") {
        currency_second.value = Number(currency_first.value * uzs).toFixed(2)
    }
})

currency_second.addEventListener("keyup", (e) => {
    if (e.key != "-" || e.key != "+") {
        currency_first.value = Number(currency_second.value / uzs).toFixed(2)
    }
})