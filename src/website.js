import Chef from "./assets/images/chef.jpg";

import { addFood, getMenu } from "./menu.js";
import { handleButtonClick,
         setActiveButton } from "./buttonUtils.js";

export const Website = {
    createContent: function() {
        const content = document.getElementById("content");

        content.appendChild(this.createHeader());
        content.appendChild(this.createMain());

        setActiveButton(document.querySelector(".button"));
        load("home");
    },

    createHeader: function() {
        const header = document.createElement("header");
        header.classList.add("header");

        const title = document.createElement('h1');
        title.classList.add("restaurant-name");
        title.textContent = "Sushi Gin";

        const nav = document.createElement("nav");

        const home = this.createButton("Home");

        home.addEventListener("click", () => {
            handleButtonClick(home);
            this.load("home");
        });

        const menu = this.createButton("Menu");

        menu.addEventListener("click", () => {
            handleButtonClick(menu);
            this.load("menu");
        });

        const contact = this.createButton("Contact");

        contact.addEventListener("click", () => {
            handleButtonClick(contact);
            this.load("contact");
        });

        nav.appendChild(home);
        nav.appendChild(menu);
        nav.appendChild(contact);

        header.appendChild(title);
        header.appendChild(nav);

        return header;
    },

    createMain: function() {
        const main = document.createElement("main");

        main.classList.add("main");
        main.setAttribute("id", "main");

        return main;
    },

    createButton: function(buttonName) {
        const button = document.createElement("button");
        button.classList.add("button");
        button.textContent = buttonName;

        return button;
    },

    createParagraph: function(text) {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;

        return paragraph;
    },

    createHome: function() {
        const home = document.createElement("div");
        home.classList.add("home");

        const image = new Image();
        image.src = Chef;
        image.alt = "Chef";

        home.appendChild(this.createParagraph("Sushi Bar"));
        home.appendChild(this.createParagraph("Known for fresh fish"));
        home.appendChild(image);
        home.appendChild(this.createParagraph("Come visit us!"));

        return home;
    },

    createMenu: function() {
        const menu = document.createElement("div");
        menu.classList.add("menu");

        const foodList = getMenu();

        foodList.forEach((food) => {
            const foodElement = addFood(food.name, food.description);
            menu.appendChild(foodElement);
        });

        return menu;
    },

    createContact: function() {
        const contact = document.createElement("div");
        contact.classList.add("contact");

        const phone = this.createParagraph("📞 03-1234-5678");
        const address = this.createParagraph("🏠 Kamurocho, West Showa St.");
        const location = new Image();

        location.src = "./assets/images/location.png";
        location.alt = "Location";

        contact.appendChild(phone);
        contact.appendChild(address);
        contact.appendChild(location);

        return contact;
    },

    load: function(contentName) {
        const main = document.getElementById("main");
        main.textContent = "";
    
        switch (contentName) {
            case "home":
                main.appendChild(this.createHome());
                break;
    
            case "menu":
                main.appendChild(this.createMenu());
                break;
    
            case "contact":
                main.appendChild(this.createContact());
                break;
        }
    },
};