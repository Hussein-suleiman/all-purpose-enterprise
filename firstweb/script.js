const swiperContainer = document.querySelector(".swiper");

if (swiperContainer) {

    const swiper = new Swiper(".swiper", {
        loop: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        effect: "slide",
        speed: 1000,
    });
}

const products = {
    "Florida Water":"perfumes.html#florida-water",
    "Divine Grace":"perfumes.html#divine-grace",
    "Onalia":"perfumes.html#onalia",
    "Seyfou":"perfumes.html#seyfou",
    "St Michiel":"perfumes.html#st michiel",
    "Seyfou Big":"perfumes.html#seyfou big",
    "Mont St Michel":"perfumes.html#mont st michel",
    "Back tO Sender Extra":"perfumes.html#ack tO sender extra",
    "Mami Water":"perfumes.html#mami water",
    "Arouna":"perfumes.html#arouna",
    "Rose Musc":"perfumes.html#rose musc",
    "Salamalekum":"perfumes.html#salamalekum",
    "Dan Duala":"perfumes.html#dan duala",
    "Divine Attraction":"perfumes.html#divine attraction",
    "16":"perfumes.html#16",
    "17":"perfumes.html#17",
    "Aoussarabia":"perfumes.html#aoussarabia",
    "Zamzam Incense":"perfumes.html#zamzam incense",
    "Blue Musk Incense":"perfumes.html#blue musk incense",
    "Money Drawing Incense":"perfumes.html#money drawing incense",
    "Rainbow Incense":"perfumes.html#rainbow incense",
    "Ramadhan Karim Incense":"perfumes.html#ramadhan karim incense",
    "Padmini Incense":"perfumes.html#padmini incense",

    "Aicha":"oils.html#aicha",
    "Bint El Sudan":"oils.html#bint-el-sudan",
    "Six Flowers Perfume":"oils.html#six-flowers-perfume",

    "Bitter Cola":"herbals.html#bitter-cola",
    "White Cola":"herbals.html#white-cola",
    "Red Cola":"herbals.html#red-cola",
    "Calabash":"herbals.html#calabash",
    "Alligator Pepper":"herbals.html#alligator pepper",
    "Cowries":"herbals.html#cowries",
    "Cloves":"herbals.html#cloves",
    "Mix1":"herbals.html#mix1",
    "Mix2":"herbals.html#mix2",
    "Cinnamon":"herbals.html#cinnamon",
    "White Stone":"herbals.html#white stone",
    "Dried pepper":"herbals.html#dried pepper",
    "Chameleon":"herbals.html#chameleon",
};

const search = document.getElementById("search");
const results = document.getElementById("results");

if (search && results) {

    search.onkeyup = function () {

        let text = search.value.toLowerCase();
        results.innerHTML = "";

        if (text === "") return;

        for (let product in products) {

            if (product.toLowerCase().includes(text)) {

                results.innerHTML +=
                `<a href="${products[product]}">${product}</a>`;
            }
        }
    };
}

// ==========================================
// SHOP STATUS (HOME & CONTACT PAGE)
// ==========================================

function updateShopStatus(elementId, title) {

    const container = document.getElementById(elementId);

    // Stop if the element doesn't exist on this page
    if (!container) return;

    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    let status;

    // Monday - Friday
    if (day >= 1 && day <= 5) {
        status = (hour >= 9 && hour < 19)
            ? "🟢 OPEN"
            : "🔴 CLOSED";
    }
    // Saturday - Sunday
    else {
        status = (hour >= 10 && hour < 20)
            ? "🟢 OPEN"
            : "🔴 CLOSED";
    }

    container.innerHTML = `
        <h2>${title}</h2>
        <p><strong>Status:</strong> ${status}</p>
        <p><strong>Date:</strong> ${now.toDateString()}</p>
        <p><strong>Time:</strong> ${now.toLocaleTimeString()}</p>
        <hr>
        <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
        <p>Saturday - Sunday: 10:00 AM - 8:00 PM</p>
    `;
}

// Update Home Page
updateShopStatus("shop-status", "Shop Opening Hours");

// Update Contact Page
updateShopStatus("shop-info", "Business Hours");

// Refresh every second
setInterval(function () {
    updateShopStatus("shop-status", "Shop Opening Hours");
    updateShopStatus("shop-info", "Business Hours");
}, 1000);