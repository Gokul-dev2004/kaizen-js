let data = [];

function openProduct() {

    document.getElementById("topic").innerHTML = "Anime BrandNew Products"

    data = [
        {
            id: 101,
            img: "./assets/ts-1.webp",
            para: "Levi Ackerman Oversized T-Shirt (Buy 2 @999)",
            price: 599.00,
            old: 1499.00,
            buy: "Add to Cart"
        },
        {
            id: 102,
            img: "/assets/ts-2.webp",
            para: "Monkey D Luffy Art T-Shirt (Buy 2 @999)",
            price: 599.00,
            old: 1499.00,
            buy: "Add to Cart"
        },
        {
            id: 103,
            img: "/assets/ts-3.webp",
            para: "One Piece Luffy Name T-Shirt (Buy 2 @999)",
            price: 599.00,
            old: 1499.00,
            buy: "Add to Cart"
        },
        {
            id: 104,
            img: "/assets/ts-4.webp",
            para: "Luffy Gear 5 Oversized T-Shirt (Buy 2 @999)",
            price: 599.00,
            old: 1499.00,
            buy: "Add to Cart"
        },
        {
            id: 105,
            img: "/assets/ts-5.webp",
            para: "Roronoa Zoro Oversized T-Shirt (Buy 2 @999)",
            price: 599.00,
            old: 1499.00,
            buy: "Add to Cart"
        },
        {
            id: 106,
            img: "/assets/ts-6.webp",
            para: "Jujutsu Kaisen Oversized T-Shirt (Buy 2 @999)",
            price: 599.00,
            old: 1499.00,
            buy: "Add to Cart"
        },
        {
            id: 107,
            img: "/assets/ts-7.webp",
            para: "Itachi Uchiha Oversized T-Shirt (Buy 2 @999)",
            price: 599.00,
            old: 1499.00,
            buy: "Add to Cart"
        },
        {
            id: 108,
            img: "/assets/ts-8.webp",
            para: "Solo Leveling Oversized T-Shirt (Buy 2 @999)",
            price: 599.00,
            old: 1499.00,
            buy: "Add to Cart"
        },
        {
            id: 109,
            img: "/assets/ts-9.webp",
            para: "Luffy Joyboy Oversized T-Shirt (Buy 2 @999)",
            price: 599.00,
            old: 1499.00,
            buy: "Add to Cart"
        },
        {
            id: 110,
            img: "/assets/ts-10.webp",
            para: "Naruto Ramen King T-Shirt (Buy 2 @999)",
            price: 599.00,
            old: 1499.00,
            buy: "Add to Cart"
        },
        {
            id: 111,
            img: "/assets/ts-11.webp",
            para: "Dragon Ball Goku T-Shirt (Buy 2 @999)",
            price: 599.00,
            old: 1499.00,
            buy: "Add to Cart"
        },
        {
            id: 112,
            img: "/assets/ts-12.webp",
            para: "Gear 5 Luffy Oversized T-Shirt (Buy 2 @999)",
            price: 599.00,
            old: 1499.00,
            buy: "Add to Cart"
        },
        {
            id: 113,
            img: "/assets/ts-13.webp",
            para: "Son Goku DBS Oversized T-Shirt (Buy 2 @999)",
            price: 599.00,
            old: 1499.00,
            buy: "Add to Cart"
        },
        {
            id: 114,
            img: "/assets/ts-14.webp",
            para: "Goku & Gohan Oversized T-Shirt (Buy 2 @999)",
            price: 599.00,
            old: 1499.00,
            buy: "Add to Cart"
        },
        {
            id: 115,
            img: "/assets/ts-15.webp",
            para: "Madara Uchiha Oversized T-Shirt (Buy 2 @999)",
            price: 599.00,
            old: 1499.00,
            buy: "Add to Cart"
        },
        {
            id: 116,
            img: "/assets/ts-16.webp",
            para: "Sasuke Sharingan T-Shirt (Buy 2 @999)",
            price: 599.00,
            old: 1499.00,
            buy: "Add to Cart"
        },
        {
            id: 117,
            img: "/assets/ts-3.webp",
            para: "One Piece Luffy Name T-Shirt (Buy 2 @999)",
            price: 599.00,
            old: 1499.00,
            buy: "Add to Cart"
        },
        {
            id: 118,
            img: "/assets/ts-10.webp",
            para: "Naruto Ramen King T-Shirt (Buy 2 @999)",
            price: 599.00,
            old: 1499.00,
            buy: "Add to Cart"
        },
        {
            id: 201,
            img: "./assets/bc-1.webp",
            para: "Sasuke Uchiha Red Moon Phone Cover",
            price: 299.00,
            old2: 749.00,
            buy: "Add to Cart"
        },
        {
            id: 202,
            img: "/assets/bc-2.webp",
            para: "Luffy Nika Sun God Phone Cover",
            price: 299.00,
            old2: 749.00,
            buy: "Add to Cart"
        },
        {
            id: 203,
            img: "/assets/bc-3.webp",
            para: "Kakashi Hatake Manga Phone Cover",
            price: 299.00,
            old2: 749.00,
            buy: "Add to Cart"
        },
        {
            id: 204,
            img: "/assets/bc-4.webp",
            para: "Itachi Uchiha Sharingan Phone Cover",
            price: 299.00,
            old: 749.00,
            buy: "Add to Cart"
        },
        {
            id: 205,
            img: "/assets/bc-5.webp",
            para: "Roronoa Zoro Action Phone Cover",
            price: 299.00,
            old: 749.00,
            buy: "Add to Cart"
        },
        {
            id: 206,
            img: "/assets/bc-6.webp",
            para: "Luffy Joyboy Phone Cover",
            price: 299.00,
            old: 749.00,
            buy: "Add to Cart"
        },
        {
            id: 207,
            img: "/assets/bc-7.webp",
            para: "Sasuke Uchiha Clan Phone Cover",
            price: 299.00,
            old: 749.00,
            buy: "Add to Cart"
        },
        {
            id: 208,
            img: "/assets/bc-8.webp",
            para: "Roronoa Zoro Graphic Phone Cover",
            price: 299.00,
            old: 749.00,
            buy: "Add to Cart"
        },
        {
            id: 209,
            img: "/assets/bc-9.webp",
            para: "Itachi Uchiha White Phone Cover",
            price: 299.00,
            old: 749.00,
            buy: "Add to Cart"
        },
        {
            id: 210,
            img: "/assets/bc-10.webp",
            para: "Itachi Uchiha Throne Phone Cover",
            price: 299.00,
            old: 749.00,
            buy: "Add to Cart"
        },
        {
            id: 211,
            img: "/assets/bc-11.webp",
            para: "Eren Yeager Phone Cover",
            price: 299.00,
            old: 749.00,
            buy: "Add to Cart"
        },
        {
            id: 212,
            img: "/assets/bc-12.webp",
            para: "Straw Hat Trio Phone Cover",
            price: 299.00,
            old: 749.00,
            buy: "Add to Cart"
        },
        {
            id: 213,
            img: "/assets/bc-13.webp",
            para: "Goku Sketch Phone Cover",
            price: 299.00,
            old: 749.00,
            buy: "Add to Cart"
        },
        {
            id: 214,
            img: "/assets/bc-14.webp",
            para: "Monkey D Luffy Manga Phone Cover",
            price: 299.00,
            old: 749.00,
            buy: "Add to Cart"
        },
        {
            id: 215,
            img: "/assets/bc-15.webp",
            para: "Eren Broken Humanity Phone Cover",
            price: 299.00,
            old: 749.00,
            buy: "Add to Cart"
        },
        {
            id: 216,
            img: "/assets/bc-16.webp",
            para: "Akatsuki Red Cloud Phone Cover",
            price: 299.00,
            old: 749.00,
            buy: "Add to Cart"
        },
        {
            id: 217,
            img: "/assets/bc-17.webp",
            para: "Super Vegeta Phone Cover",
            price: 299.00,
            old: 749.00,
            buy: "Add to Cart"
        },
        {
            id: 218,
            img: "/assets/bc-18.webp",
            para: "Sung Jinwoo Darkness Phone Cover",
            price: 299.00,
            old: 749.00,
            buy: "Add to Cart"
        },
        {
            id: 301,
            img: "./assets/dm-1.webp",
            para: "Itachi Red Moon Desk Mat",
            price: 499.00,
            old3: 1400.00,
            buy: "Add to Cart"
        },
        {
            id: 302,
            img: "/assets/dm-2.webp",
            para: "Luffy Nika Desk Mat",
            price: 499.00,
            old: 1400.00,
            buy: "Add to Cart"
        },
        {
            id: 303,
            img: "/assets/dm-3.webp",
            para: "Iron Hunter Desk Mat",
            price: 499.00,
            old: 1400.00,
            buy: "Add to Cart"
        },
        {
            id: 304,
            img: "/assets/dm-4.webp",
            para: "Zoro Graphic Desk Mat",
            price: 499.00,
            old: 1400.00,
            buy: "Add to Cart"
        },
        {
            id: 305,
            img: "/assets/dm-5.webp",
            para: "Itachi Red Moon Desk Matt",
            price: 499.00,
            old: 1400.00,
            buy: "Add to Cart"
        },
        {
            id: 306,
            img: "/assets/dm-6.webp",
            para: "Tanjiro Kamado Graphic Desk Mat",
            price: 499.00,
            old: 1400.00,
            buy: "Add to Cart"
        },
        {
            id: 307,
            img: "/assets/dm-7.webp",
            para: "Flame Hashira Rengoku Desk Mat",
            price: 499.00,
            old: 1400.00,
            buy: "Add to Cart"
        },
        {
            id: 308,
            img: "/assets/dm-8.webp",
            para: "Bleach Bankai Desk Mat",
            price: 499.00,
            old: 1400.00,
            buy: "Add to Cart"
        },
        {
            id: 309,
            img: "/assets/dm-9.webp",
            para: "Luffy Gear 5 Power Desk Mat",
            price: 499.00,
            old: 1400.00,
            buy: "Add to Cart"
        },
        {
            id: 310,
            img: "/assets/dm-10.webp",
            para: "Naruto Six Path Sage Desk Mat",
            price: 499.00,
            old: 1400.00,
            buy: "Add to Cart"
        },
        {
            id: 311,
            img: "/assets/dm-11.webp",
            para: "Itachi Red Eye Desk Mat",
            price: 499.00,
            old: 1400.00,
            buy: "Add to Cart"
        },
        {
            id: 312,
            img: "/assets/dm-12.webp",
            para: "Tanjiro Rage Burst Desk Mat",
            price: 499.00,
            old: 1400.00,
            buy: "Add to Cart"
        },
        {
            id: 313,
            img: "/assets/dm-13.webp",
            para: "Igris Dark Armor Desk Mat",
            price: 499.00,
            old: 1400.00,
            buy: "Add to Cart"
        },
        {
            id: 314,
            img: "/assets/dm-14.webp",
            para: "Sun God Nika Desk Mat",
            price: 499.00,
            old: 1400.00,
            buy: "Add to Cart"
        },
        {
            id: 315,
            img: "/assets/dm-15.webp",
            para: "Tanjiro and Nezuko Action Desk Mat",
            price: 499.00,
            old: 1400.00,
            buy: "Add to Cart"
        },
        {
            id: 316,
            img: "/assets/dm-16.webp",
            para: "Ryomen Sukuna Power Desk Mat",
            price: 499.00,
            old: 1400.00,
            buy: "Add to Cart"
        },
        {
            id: 317,
            img: "/assets/dm-17.webp",
            para: "Hashira United Desk Mat",
            price: 499.00,
            old: 1400.00,
            buy: "Add to Cart"
        },
        {
            id: 318,
            img: "/assets/dm-18.webp",
            para: "Luffy and Kaido Desk Mat",
            price: 499.00,
            old: 1400.00,
            buy: "Add to Cart"
        },
        {
            id: 401,
            img: "./assets/spc-1.webp",
            para: "Goku Ultra Instinct Silicone Armored Phone Case",
            price: 399.00,
            old: 999.00,
            buy: "Add to Cart"
        },
        {
            id: 402,
            img: "/assets/spc-2.webp",
            para: "Zenitsu Blue Moon Silicone Armored Phone Case",
            price: 399.00,
            old: 999.00,
            buy: "Add to Cart"
        },
        {
            id: 403,
            img: "/assets/spc-3.webp",
            para: "Naruto Shippuden Silicone Armored Phone Case",
            price: 399.00,
            old: 999.00,
            buy: "Add to Cart"
        },
        {
            id: 404,
            img: "/assets/spc-4.webp",
            para: "Sasuke Smoke Silicone Armored Phone Case",
            price: 399.00,
            old: 999.00,
            buy: "Add to Cart"
        },
        {
            id: 405,
            img: "/assets/spc-5.webp",
            para: "Scouting Legion Silicone Armored Phone Case",
            price: 399.00,
            old: 999.00,
            buy: "Add to Cart"
        },
        {
            id: 406,
            img: "/assets/spc-6.webp",
            para: "Goku Darklight Silicone Armored Phone Case",
            price: 399.00,
            old: 999.00,
            buy: "Add to Cart"
        },
        {
            id: 407,
            img: "/assets/spc-7.webp",
            para: "One Piece Crew Silicone Armored Phone Case",
            price: 399.00,
            old: 999.00,
            buy: "Add to Cart"
        },
        {
            id: 408,
            img: "/assets/spc-8.webp",
            para: "One Piece Silicone Armored Phone Case",
            price: 399.00,
            old: 999.00,
            buy: "Add to Cart"
        },
        {
            id: 409,
            img: "/assets/spc-9.webp",
            para: "Vegeta Manga Silicone Armored Phone Case",
            price: 399.00,
            old: 999.00,
            buy: "Add to Cart"
        },
        {
            id: 410,
            img: "/assets/spc-10.webp",
            para: "Itachi Uchiha Silicone Armored Phone Case",
            price: 399.00,
            old: 999.00,
            buy: "Add to Cart"
        },
        {
            id: 411,
            img: "/assets/spc-11.webp",
            para: "Tanjiro White Moon Silicone Armored Phone Case",
            price: 399.00,
            old: 999.00,
            buy: "Add to Cart"
        },
        {
            id: 412,
            img: "/assets/spc-12.webp",
            para: "Satoru Cursed Silicone Armored Phone Case",
            price: 399.00,
            old: 999.00,
            buy: "Add to Cart"
        },
        {
            id: 413,
            img: "/assets/spc-13.webp",
            para: "Itachi Uchiha Silicone Armored Phone Case",
            price: 399.00,
            old: 999.00,
            buy: "Add to Cart"
        },
        {
            id: 414,
            img: "/assets/spc-14.webp",
            para: "Naruto Clone Silicone Armored Phone Case",
            price: 399.00,
            old: 999.00,
            buy: "Add to Cart"
        },
        {
            id: 415,
            img: "/assets/spc-15.webp",
            para: "Sung Jinwoo Arise Silicone Armored Phone Case",
            price: 399.00,
            old: 999.00,
            buy: "Add to Cart"
        },
        {
            id: 416,
            img: "/assets/spc-16.webp",
            para: "Zenitsu Katana Silicone Armored Phone Case",
            price: 399.00,
            old: 999.00,
            buy: "Add to Cart"
        },
        {
            id: 417,
            img: "/assets/spc-17.webp",
            para: "Goku Dark Silicone Armored Phone Case",
            price: 399.00,
            old: 999.00,
            buy: "Add to Cart"
        },
        {
            id: 418,
            img: "/assets/spc-18.webp",
            para: "Satoru Funko Silicone Armored Phone Case",
            price: 399.00,
            old: 999.00,
            buy: "Add to Cart"
        }

    ]


    let result = document.getElementById("item");

    data.map((ts) => {

        result.innerHTML += `<div class="ts">
                                <img src=${ts.img} alt="">
                                <p>${ts.para}</p>
                                <h6>${ts.price}</h6>
                                <button onclick="buy(${ts.id})" class="btn bg-warning">${ts.buy}</button>
                            </div>`
    })

    document.getElementById("openbtn").style.display = "none"
    document.getElementById("head").innerHTML = "Kaizen Welcome You All..!"



}


function check() {
    let item = document.getElementById("item")
    let search = document.getElementById("search").value;

    item.innerHTML = ``

    let result = data.filter((ts) => {
        return (ts.para.toLowerCase()).includes(search.toLowerCase())
    })

    document.getElementById("topic").innerHTML = (search) + "  Products"

    result.map((ts) => {
        item.innerHTML += `<div class="ts">
                                <img src=${ts.img} alt="">
                                <p>${ts.para}</p>
                                <h6>${ts.price}</h6>
                                <button onclick="buy()" class="btn bg-warning">${ts.buy}</button>
                            </div>`
    })
}