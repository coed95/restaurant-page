import Chef from "./assets/images/chef.jpg";

import { addFood, getMenu } from "./menu.js";
import { handleButtonClick,
         setActiveButton } from "./buttonUtils.js";

export const Website = {
    createContent: () => {
        const content = document.getElementById("content");

        content.appendChild(createHeader());
        content.appendChild(createMain());

        setActiveButton(document.querySelector(".button"));
        load("home");
    },

    createHeader: () => {
        const header = document.createElement("header");
        header.classList.add("header");

        const title = document.createElement('h1');
        title.classList.add("restaurant-name");
        title.textContent = "Sushi Gin";

        const nav = document.createElement("nav");

        const home = createButton("Home");

        home.addEventListener("click", () => {
            handleButtonClick(home);
            load("home");
        });

        const menu = createButton("Menu");

        menu.addEventListener("click", () => {
            handleButtonClick(menu);
            load("menu");
        });

        const contact = createButton("Contact");

        contact.addEventListener("click", () => {
            handleButtonClick(contact);
            load("contact");
        });

        nav.appendChild(home);
        nav.appendChild(menu);
        nav.appendChild(contact);

        header.appendChild(title);
        header.appendChild(nav);

        return header;
    },

    createMain: () => {
        const main = document.createElement("main");

        main.classList.add("main");
        main.setAttribute("id", "main");

        return main;
    },

    createButton: (buttonName) => {
        const button = document.createElement("button");
        button.classList.add("button");
        button.textContent = buttonName;

        return button;
    },

    createParagraph: (text) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;

        return paragraph;
    },

    createHome: () => {
        const home = document.createElement("div");
        home.classList.add("home");

        const image = new Image();
        image.src = Chef;
        image.alt = "Chef";

        home.appendChild(createParagraph("Sushi Bar"));
        home.appendChild(createParagraph("Known for fresh fish"));
        home.appendChild(image);
        home.appendChild("Come visit us!");

        return home;
    },

    createMenu: () => {
        const menu = document.createElement("div");
        menu.classList.add("menu");

        const foodList = getMenu();

        foodList.forEach((food) => {
            const foodElement = addFood(food.name, food.description);
            menu.appendChild(foodElement);
        });

        return menu;
    },

    createContact: () => {
        const contact = document.createElement("div");
        contact.classList.add("contact");

        const phone = createParagraph("📞 03-1234-5678");
        const address = createParagraph("🏠 Kamurocho, West Showa St.");
        const location = new Image();

        location.src = "./assets/images/location.png";
        location.alt = "Location";

        contact.appendChild(phone);
        contact.appendChild(address);
        contact.appendChild(location);

        return contact;
    },

    load: (contentName) => {
        const main = document.getElementById("main");
        main.textContent = "";
    
        switch (contentName) {
            case "home":
                main.appendChild(createHome());
                break;
    
            case "menu":
                main.appendChild(createMenu());
                break;
    
            case "contact":
                main.appendChild(createContact());
                break;
        }
    },
};