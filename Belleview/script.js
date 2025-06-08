// Global variables

let siteData = {}

let visitorCount = 1247

const productRatings = {

"whitening-toothpaste": 4,

"electric-brush": 5,

"kids-toothpaste": 4,

"dental-floss": 3,

}

// Initialize the website

document.addEventListener("DOMContentLoaded", () => {

loadData()

initializeNavigation()

initializeTicker()

initializeVisitorCounter()

initializeMobileMenu()

initializeTabs()

initializeContactForm()

getLocation()

})

// Load data from JSON file

async function loadData() {

try {

const response = await fetch("index.json")

siteData = await response.json()

renderContent()

} catch (error) {

console.error("Error loading data:", error)

// Fallback data if JSON fails to load

loadFallbackData()

renderContent()

}

}

// Fallback data

function loadFallbackData() {

siteData = {

courses: [

  { title: "Advanced Periodontics", duration: "40 hours", level: "Advanced" },

  { title: "Pediatric Dentistry", duration: "30 hours", level: "Intermediate" },

  { title: "Oral Surgery Techniques", duration: "50 hours", level: "Advanced" },

],

documents: [

  { title: "Clinical Guidelines", description: "Comprehensive clinical practice guidelines and protocols." },

  { title: "Treatment Protocols", description: "Step-by-step treatment procedures and best practices." },

],

patientEducation: [

  {

    title: "Oral Hygiene Basics",

    description: "Learn proper brushing and flossing techniques for optimal oral health.",

    icon: "🦷",

  },

  {

    title: "Gum Disease Prevention",

    description: "Understanding gingivitis and periodontitis, and how to prevent them.",

    icon: "🩺",

  },

  {

    title: "Cavity Prevention",

    description: "Tips and techniques to prevent tooth decay and maintain healthy teeth.",

    icon: "🛡",

  },

  {

    title: "Children's Dental Care",

    description: "Special considerations for maintaining your child's oral health.",

    icon: "👶",

  },

  {

    title: "Emergency Dental Care",

    description: "What to do in case of dental emergencies and when to seek help.",

    icon: "🚨",

  },

  {

    title: "Nutrition & Oral Health",

    description: "How diet affects your teeth and gums, and foods that promote oral health.",

    icon: "🥗",

  },

],

publications: [

  { title: "Advanced Techniques in Periodontal Therapy", journal: "Journal of Dental Research", year: "2024" },

  { title: "AI Applications in Dental Diagnostics", journal: "Journal of Dental Research", year: "2024" },

  { title: "Minimally Invasive Restorative Procedures", journal: "Journal of Dental Research", year: "2024" },

  { title: "Oral Health and Systemic Disease Connections", journal: "Journal of Dental Research", year: "2024" },

],

products: [

  {

    id: "whitening-toothpaste",

    name: "Advanced Whitening Toothpaste",

    category: "toothpaste",

    price: "$12.99",

    description: "Professional whitening formula for brighter teeth",

  },

  {

    id: "electric-brush",

    name: "Pro Electric Toothbrush",

    category: "brushes",

    price: "$89.99",

    description: "Advanced sonic technology for superior cleaning",

  },

  {

    id: "kids-toothpaste",

    name: "Kids Fruity Toothpaste",

    category: "kids",

    price: "$6.99",

    description: "Gentle formula with fun fruity flavors",

  },

  {

    id: "dental-floss",

    name: "Premium Dental Floss",

    category: "accessories",

    price: "$4.99",

    description: "Waxed floss for effective plaque removal",

  },

],

}

}

// Render all content

function renderContent() {

renderCourses()

renderDocuments()

renderPatientEducation()

renderPublications()

renderMediaLibrary()

renderProducts()

renderGallery()

}

// Render courses

function renderCourses() {

const coursesGrid = document.getElementById("courses-grid")

if (!coursesGrid || !siteData.courses) return

coursesGrid.innerHTML = siteData.courses

.map(

  (course) => `

    <div class="card course-card">

        <h3>${course.title}</h3>

        <div class="course-header">

            <span class="badge ${course.level.toLowerCase()}">${course.level}</span>

            <span class="course-duration">${course.duration}</span>

        </div>

    </div>

`,

)

.join("")

}

// Render documents

function renderDocuments() {

const documentsGrid = document.getElementById("documents-grid")

if (!documentsGrid || !siteData.documents) return

documentsGrid.innerHTML = siteData.documents

.map(

  (doc) => `

    <div class="card">

        <h3>${doc.title}</h3>

        <p>${doc.description}</p>

    </div>

`,

)

.join("")

}

// Render patient education

function renderPatientEducation() {

const patientGrid = document.getElementById("patient-education-grid")

if (!patientGrid || !siteData.patientEducation) return

patientGrid.innerHTML = siteData.patientEducation

.map(

  (item) => `

    <div class="card patient-card">

        <div class="patient-icon">${item.icon}</div>

        <h3>${item.title}</h3>

        <p>${item.description}</p>

    </div>

`,

)

.join("")

}

// Render publications

function renderPublications() {

const publicationsList = document.getElementById("publications-list")

if (!publicationsList || !siteData.publications) return

publicationsList.innerHTML = siteData.publications

.map(

  (pub) => `

    <div class="publication-item">

        <div class="publication-title">${pub.title}</div>

        <div class="publication-meta">Published in ${pub.journal} - ${pub.year}</div>

    </div>

`,

)

.join("")

}

// Render media library

function renderMediaLibrary() {

const mediaGrid = document.getElementById("media-grid")

if (!mediaGrid) return

const mediaItems = Array.from(

{ length: 4 },

(_, i) => `

    <div class="card">

        <div class="product-image">

            <i class="fas fa-play-circle"></i>

        </div>

        <p><strong>Research Video ${i + 1}</strong></p>

    </div>

`,

).join("")

mediaGrid.innerHTML = mediaItems

}

// Render products

function renderProducts() {

const productsGrid = document.getElementById("products-grid")

if (!productsGrid || !siteData.products) return

const renderProductsGrid = (products) => {

productsGrid.innerHTML = products

  .map(

    (product) => `

        <div class="card product-card" data-category="${product.category}">

            <div class="product-image">

                <i class="fas fa-tooth"></i>

            </div>

            <h3 class="product-name">${product.name}</h3>

            <p class="product-description">${product.description}</p>

            <div class="product-footer">

                <span class="product-price">${product.price}</span>

                <span class="product-category">${product.category}</span>

            </div>

            <div class="rating">

                <span>Rate:</span>

                ${[1, 2, 3, 4, 5]

                  .map(

                    (star) => `

                    <i class="fas fa-star star ${star <= (productRatings[product.id] || 0) ? "filled" : ""}" 

                       onclick="rateProduct('${product.id}', ${star})"></i>

                `,

                  )

                  .join("")}

                <span class="rating-text">(${productRatings[product.id] || 0}/5)</span>

            </div>

        </div>

    `,

  )

  .join("")

}

renderProductsGrid(siteData.products)

// Initialize product filter

const productFilter = document.getElementById("product-filter")

if (productFilter) {

productFilter.addEventListener("change", function () {

  const filterValue = this.value

  const filteredProducts =

    filterValue === "all"

      ? siteData.products

      : siteData.products.filter((product) => product.category === filterValue)

  renderProductsGrid(filteredProducts)

})

}

}

// Render gallery

function renderGallery() {

const galleryGrid = document.getElementById("gallery-grid")

if (!galleryGrid) return

const galleryItems = Array.from(

{ length: 8 },

(_, i) => `

    <div class="gallery-item">

        <i class="fas fa-image"></i>

    </div>

`,

).join("")

galleryGrid.innerHTML = galleryItems

}

// Rate product function

function rateProduct(productId, rating) {

productRatings[productId] = rating

renderProducts() // Re-render to update the rating display

}

// Navigation functionality

function initializeNavigation() {

const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link")

navLinks.forEach((link) => {

link.addEventListener("click", function (e) {

  e.preventDefault()

  const sectionId = this.getAttribute("data-section")

  scrollToSection(sectionId)



  // Update active state

  document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"))

  document.querySelectorAll('.nav-link[data-section="' + sectionId + '"]').forEach((l) => l.classList.add("active"))



  // Close mobile menu

  document.getElementById("mobile-nav").style.display = "none"

})

})

// Update active navigation on scroll

window.addEventListener("scroll", updateActiveNavigation)

}

// Scroll to section function

function scrollToSection(sectionId) {

const element = document.getElementById(sectionId)

if (element) {

element.scrollIntoView({ behavior: "smooth" })

}

}

// Update active navigation based on scroll position

function updateActiveNavigation() {

const sections = document.querySelectorAll("section[id]")

const scrollPos = window.scrollY + 100

sections.forEach((section) => {

const sectionTop = section.offsetTop

const sectionHeight = section.offsetHeight

const sectionId = section.getAttribute("id")



if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {

  document.querySelectorAll(".nav-link").forEach((link) => {

    link.classList.remove("active")

    if (link.getAttribute("data-section") === sectionId) {

      link.classList.add("active")

    }

  })

}

})

}

// Initialize mobile menu

function initializeMobileMenu() {

const mobileMenuBtn = document.getElementById("mobile-menu-btn")

const mobileNav = document.getElementById("mobile-nav")

if (mobileMenuBtn && mobileNav) {

mobileMenuBtn.addEventListener("click", () => {

  if (mobileNav.style.display === "flex") {

    mobileNav.style.display = "none"

  } else {

    mobileNav.style.display = "flex"

  }

})

}

}

// Initialize tabs

function initializeTabs() {

const tabButtons = document.querySelectorAll(".tab-btn")

const tabPanes = document.querySelectorAll(".tab-pane")

tabButtons.forEach((button) => {

button.addEventListener("click", function () {

  const tabId = this.getAttribute("data-tab")



  // Remove active class from all buttons and panes

  tabButtons.forEach((btn) => btn.classList.remove("active"))

  tabPanes.forEach((pane) => pane.classList.remove("active"))



  // Add active class to clicked button and corresponding pane

  this.classList.add("active")

  document.getElementById(tabId).classList.add("active")

})

})

}

// Initialize ticker

function initializeTicker() {

updateTime()

setInterval(updateTime, 1000)

}

// Update time in ticker

function updateTime() {

const now = new Date()

const timeElement = document.getElementById("current-time")

const dateElement = document.getElementById("current-date")

if (timeElement) {

timeElement.textContent = now.toLocaleTimeString()

}

if (dateElement) {

dateElement.textContent = now.toLocaleDateString()

}

}

// Initialize visitor counter

function initializeVisitorCounter() {

const visitorCountElement = document.getElementById("visitor-count")

// Simulate visitor count increment

setInterval(() => {

visitorCount += Math.floor(Math.random() * 3)

if (visitorCountElement) {

  visitorCountElement.textContent = visitorCount.toLocaleString()

}

}, 30000)

}

// Get user location

function getLocation() {

const locationElement = document.getElementById("location")

if (navigator.geolocation) {

navigator.geolocation.getCurrentPosition(

  (position) => {

    const lat = position.coords.latitude.toFixed(2)

    const lng = position.coords.longitude.toFixed(2)

    if (locationElement) {

    locationElement.textContent = `Lat: ${lat}, Lng: ${lng}`;


    }

  },

  () => {

    if (locationElement) {

      locationElement.textContent = "Location unavailable"

    }

  },

)

} else {

if (locationElement) {

  locationElement.textContent = "Geolocation not supported"

}

}

}

// Initialize contact form

function initializeContactForm() {

const contactForm = document.getElementById("contact-form")

if (contactForm) {

contactForm.addEventListener("submit", function (e) {

  e.preventDefault()

  alert("Thank you for your message! We will get back to you soon.")

  this.reset()

})

}

}