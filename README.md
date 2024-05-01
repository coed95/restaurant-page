nvm: this will never work. Showing the error here if someone has any clue about what it means:

```
Uncaught TypeError: ({createContent:(function(){const n=this,e=document.getElementById("content");e.appendChild(n.createHeader()),e.appendChild(n.createMain()),function(n){document.querySelectorAll(".button").forEach((n=>{n!==this&&n.classList.remove("active")})),n.classList.add("active")}(document.querySelector(".button")),n.load("home")}), createHeader:(function(){const n=this,e=document.createElement("header");e.classList.add("header");const t=document.createElement("h1");t.classList.add("restaurant-name"),t.textContent="Sushi Gin";const r=document.createElement("nav"),o=n.createButton("Home");o.addEventListener("click",(function(){g(o),n.load("home")}));const a=n.createButton("Menu");a.addEventListener("click",(function(){g(a),n.load("menu")}));const i=n.createButton("Contact");return i.addEventListener("click",(function(){g(i),n.load("contact")})),r.appendChild(o),r.appendChild(a),r.appendChild(i),e.appendChild(t),e.appendChild(r),e}), createMain:(function(){const n=document.createElement("main");return n.classList.add("main"),n.setAttribute("id","main"),n}), createButton:(function(n){const e=document.createElement("button");return e.classList.add("button"),e.textContent=n,e}), createParagraph:(function(n){const e=document.createElement("p");return e.textContent=n,e}), createHome:(function(){const n=this,e=document.createElement("div");e.classList.add("home");const t=new Image;return t.src=h,t.alt="Chef",e.appendChild(n.createParagraph("Sushi Bar")),e.appendChild(n.createParagraph("Known for fresh fish")),e.appendChild(t),e.appendChild(n.createParagraph("Come visit us!")),e}), createMenu:(function(){const n=document.createElement("div");return n.classList.add("menu"),[{name:"Tamago",description:"Try the egg sushi if you want to see how good the rest of a restaurant's menu is. Of course, I take special pride in mine!"},{name:"Maguro",description:"There are many kinds of tuna out there, but this happens to be my top-grade bluefin tuna."},{name:"Ama-Ebi",description:"This tender, sweet shrimp will melt in your mouth. It's unbelievably fresh!"},{name:"Engawa",description:"Greenland halibut and arrowtooth flouder don't cut it. Japanese flounder makes the tastiest engawa."}].forEach((e=>{const t=function(n,e){const t=document.createElement("div");t.classList.add("menu-item");const r=document.createElement("h2");r.textContent=n;const o=document.createElement("p");o.textContent=e;const a=new Image;return a.src=`./assets/images/sushi/${n.toLowerCase()}.png`,a.alt=`${n}`,t.appendChild(a),t.appendChild(r),t.appendChild(o),t}(e.name,e.description);n.appendChild(t)})),n}), createContact:(function(){const n=document.createElement("div");n.classList.add("contact");const e=this.createParagraph("📞 03-1234-5678"),t=this.createParagraph("🏠 Kamurocho, West Showa St."),r=new Image;return r.src="./assets/images/location.png",r.alt="Location",n.appendChild(e),n.appendChild(t),n.appendChild(r),n}), load:(function(n){const e=this,t=document.getElementById("main");switch(t.textContent="",n){case"home":t.appendChild(e.createHome());break;case"menu":t.appendChild(e.createMenu());break;case"contact":t.appendChild(e.createContact())}})}) is not a function
```

# Restaurant Page

### This is a Restaurant Web Page for a fictional place of Yakuza 0 named Sushi Gin.

This was part of The Odin Project JavaScript Assignment.
Its aim was to make a functional multi page website using Webpack to bundle files.

## Built With 

- HTML5
- CSS3
- JavaScript


## Setup

1. Clone the project:  
`git clone https://github.com/coed95/restaurant-page.git`

2. Install the required dependencies:  
`npm install`

3. Run a live demo:  
`npm start`

4. Run files distribution:  
`npm run build`