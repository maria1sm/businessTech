let array = [
    {
        name: "Introduction to databases",
        category: "Database",
        oldPrice: "$160",
        newPrice: "$70",
        img: "img/databaseintro.jpg"
    },
    {
        name: "Advanced SQL",
        category: "Database",
        oldPrice: "$200",
        newPrice: "$95",
        img: "img/sql.avif"
    },
    {
        name: "Basic cybersecurity for companies",
        category: "Cybersecurity",
        oldPrice: "$180",
        newPrice: "$120",
        img: "img/cyber.png"
    },
    {
        name: "Introduction to software development for business",
        category: "Business",
        oldPrice: "$140",
        newPrice: "$100.5",
        img: "img/softbusiness.jpg"
    },
    {
        name: "Office suit course",
        category: "Business",
        oldPrice: "$124",
        newPrice: "$105",
        img: "img/office.jpg"
    },
    {
        name: "Introduction to corporate finance",
        category: "Business",
        oldPrice: "$110",
        newPrice: "$95",
        img: "img/finances.jpg"
    },
    {
        name: "Digital Marketing",
        category: "Marketing",
        oldPrice: "$250",
        newPrice: "$210",
        img: "img/webmark.jpg"
    }
]


let i = 0;
for (let card of array) {
    ++i;
    card.id = i;
    addCard(card, createCard, "product");
}
