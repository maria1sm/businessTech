let array = [
    {
        name: "Database management",
        category: "Database",
        oldPrice: "$400",
        newPrice: "$140",
        img: "../img/databasemgm.jpg"
    }
    ,
    {
        name: "Website hosting",
        category: "Web",
        oldPrice: "$1800",
        newPrice: "$120",
        img: "../img/development.png"
    }
    ,
    {
        name: "SEO",
        category: "Service",
        oldPrice: "$200",
        newPrice: "$150",
        img: "../img/Maintenance.jpg"
    },
    {
        name: "Cloud computing",
        category: "Web",
        oldPrice: "$200",
        newPrice: "$350",
        img: "../img/cloud.jpg"
    }
    ,
    {
        name: "Office package installation",
        category: "Office suit",
        oldPrice: "$200",
        newPrice: "$200",
        img: "../img/install.webp"
    }
    ,
    {
        name: "Database development",
        category: "Database",
        oldPrice: "$20",
        newPrice: "$500",
        img: "../img/Troubleshooting.jpg"
    }

]

let i = 0;
for (let card of array) {
    ++i;
    card.id = i;
    addCard(card, createCard, "service");
}
