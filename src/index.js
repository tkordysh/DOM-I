const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

//HEADER SECTION

// NAV SECTION
//links section
const navLinks = document.querySelectorAll('header nav a');

navLinks[0].textContent = siteContent.nav["nav-item-1"];
navLinks[1].textContent = siteContent.nav["nav-item-2"];
navLinks[2].textContent = siteContent.nav["nav-item-3"];
navLinks[3].textContent = siteContent.nav["nav-item-4"];
navLinks[4].textContent = siteContent.nav["nav-item-5"];
navLinks[5].textContent = siteContent.nav["nav-item-6"];

//adding italics 
navLinks[0].classList.add('italic');
navLinks[1].classList.add('italic');
navLinks[2].classList.add('italic');
navLinks[3].classList.add('italic');
navLinks[4].classList.add('italic');
navLinks[5].classList.add('italic');

//adding img
const logoImg = document.querySelector(".logo");
logoImg.src = "http://localhost:9000/img/logo.png";


//CTA SECTION
//h1 element 
const siteTitle = document.querySelector("h1");
//h1 setting text content 
siteTitle.textContent = siteContent["cta"]["h1"];
//button element
const buttonElem = document.querySelector("button");
//button setting text content 
buttonElem.textContent = siteContent["cta"]["button"];
//cta img 
const ctaImg = document.querySelector("#cta-img");
ctaImg.src = "http://localhost:9000/img/cta.png"


//MAIN CONTENT SECTION
//TOP and BOTTOM CONTENT VARIABLES
const topContent = document.querySelector(".top-content");
const bottomContent = document.querySelector(".bottom-content");

//separating h tags and p tags 

//top content h tags
const topHTags = topContent.querySelectorAll(".text-content h4");
topHTags[0].textContent = siteContent["main-content"]["features-h4"];
topHTags[1].textContent = siteContent["main-content"]["about-h4"];

//bottom content h tags
const bottomHTags = bottomContent.querySelectorAll(".text-content h4");
bottomHTags[0].textContent = siteContent["main-content"]["services-h4"];
bottomHTags[1].textContent = siteContent["main-content"]["product-h4"];
bottomHTags[2].textContent = siteContent["main-content"]["vision-h4"];

//top content p tags
const topPTags = topContent.querySelectorAll(".text-content p");
topPTags[0].textContent = siteContent["main-content"]["features-content"];
topPTags[1].textContent = siteContent["main-content"]["about-content"];

//bottom content p tags
const bottomPTags = bottomContent.querySelectorAll(".text-content p");
bottomPTags[0].textContent = siteContent["main-content"]["services-content"];
bottomPTags[1].textContent = siteContent["main-content"]["product-content"];
bottomPTags[2].textContent = siteContent["main-content"]["vision-content"];

//adding main cont img
const mainContImg = document.querySelector(".middle-img")
mainContImg.src = "http://localhost:9000/img/accent.png"


//CONTACT SECTION
//setting contact variable
const contactSect = document.querySelector(".contact");
//contact h4
const contactH4 = contactSect.querySelector("h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];
//contact p tags
const contactPTags = contactSect.querySelectorAll("p");
contactPTags[0].textContent = siteContent.contact.address;
contactPTags[1].textContent = siteContent.contact.phone;
contactPTags[2].textContent = siteContent.contact.email;


//FOOTER SECTION
const copyrightLink = document.querySelector("footer a");
copyrightLink.textContent = siteContent.footer.copyright;

copyrightLink.classList.add('bold');