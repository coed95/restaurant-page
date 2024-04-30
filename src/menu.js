export function addFood(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;

    const foodImage = new Image();
    foodImage.src = `./assets/images/sushi/${name.toLowerCase()}.png`;
    foodImage.alt = `${name}`;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

export function getMenu()
{
    const foodList = [
        {
            name: "Tamago",
            description: "Try the egg sushi if you want to see how good the rest of a restaurant's menu is. Of course, I take special pride in mine!"
        },
        {
            name: "Maguro",
            description: "There are many kinds of tuna out there, but this happens to be my top-grade bluefin tuna."
        },
        {
            name: "Ama-Ebi",
            description: "This tender, sweet shrimp will melt in your mouth. It's unbelievably fresh!"
        },
        {
            name: "Engawa",
            description: "Greenland halibut and arrowtooth flouder don't cut it. Japanese flounder makes the tastiest engawa."
        }
    ];

    return foodList;
}