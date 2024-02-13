let array = [
    {
        name: "Antonio Jurado",
        job: "SEO Specialist",
        description: "Optimizes websites to improve their search engine rankings and visibility.",
        img: "../img/jurado.jpeg"
    },
    {
        name: "José Antonio Márquez",
        job: "Cloud Computing Consultant",
        description: "Advises on and implements cloud computing solutions for businesses.",
        img: "../img/jouse.jpeg"
    },
    {
        name: "Marcelo Herce",
        job: "Database Administrator",
        description: "Manages and maintains an organization's databases to ensure data integrity and security.",
        img: "../img/Marcelo.jpeg"
    },
    {
        name: "Pablo López",
        job: "Digital Marketing Specialist",
        description: "Develops and implements digital marketing strategies to promote products or services online.",
        img: "../img/pablo.jpeg"
    },
    {
        name: "Alberto Fernández",
        job: "Cybersecurity Analyst",
        description: "Identifies and mitigates security risks in software applications and computer networks.",
        img: "../img/alberto.jpg"
    },
    {
        name: "María Sisamón",
        job: "Software Developer",
        description: "Designs and develops software solutions, extensive experience in business environments.",
        img: "../img/maria.jpeg"
    },
    {
        name: "Francisco de Paula Osuna",
        job: "Corporate Finance Analyst",
        description: "Analyzes financial data to provide insights and recommendations for business decisions.",
        img: "../img/curro.jpeg"
    }
];

let i = 0;
for (let card of array) {
    ++i;
    card.id = i;
    addCard(card, createUserCard, "user");
}
