const helplines = [
    {
        name: "Police",
        number: "100",
        category: "emergency",
        icon: "🚓",
        description: "For police emergencies"
    },

    {
        name: "Ambulance",
        number: "108",
        category: "health",
        icon: "🚑",
        description: "Emergency medical assistance"
    },

    {
        name: "Fire Department",
        number: "101",
        category: "emergency",
        icon: "🚒",
        description: "For fire emergencies"
    },

    {
        name: "Emergency",
        number: "112",
        category: "emergency",
        icon: "🆘",
        description: "National emergency number"
    },

    {
        name: "Women Helpline",
        number: "181",
        category: "support",
        icon: "👩",
        description: "Women support services"
    },

    {
        name: "Child Helpline",
        number: "1098",
        category: "support",
        icon: "🧒",
        description: "Child assistance and protection"
    }
];


const container =
    document.getElementById("helplineContainer");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");


function displayHelplines() {

    const searchText =
        searchInput.value.toLowerCase();

    const category =
        categoryFilter.value;


    const filteredHelplines =
        helplines.filter(function (helpline) {

            const matchesSearch =
                helpline.name
                    .toLowerCase()
                    .includes(searchText);

            const matchesCategory =
                category === "all" ||
                helpline.category === category;

            return matchesSearch && matchesCategory;

        });


    container.innerHTML = "";


    filteredHelplines.forEach(function (helpline) {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <div class="card-icon">
                ${helpline.icon}
            </div>

            <h3>
                ${helpline.name}
            </h3>

            <p class="card-category">
                ${helpline.description}
            </p>

            <div class="number">
                ${helpline.number}
            </div>

            <a
                href="tel:${helpline.number}"
                class="call-button"
            >
                Call Now
            </a>
        `;

        container.appendChild(card);

    });

}


searchInput.addEventListener(
    "input",
    displayHelplines
);

categoryFilter.addEventListener(
    "change",
    displayHelplines
);


// Display cards when website loads

displayHelplines();
