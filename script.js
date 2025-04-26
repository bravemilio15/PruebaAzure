// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle")
const body = document.body

// Check for saved theme preference or default to light
const savedTheme = localStorage.getItem("theme")
if (savedTheme === "dark") {
  body.classList.add("dark-theme")
  themeToggle.textContent = "Tema Claro"
}

themeToggle.addEventListener("click", () => {
  // Toggle dark theme
  body.classList.toggle("dark-theme")

  // Update button text
  if (body.classList.contains("dark-theme")) {
    themeToggle.textContent = "Tema Claro"
    localStorage.setItem("theme", "dark")
  } else {
    themeToggle.textContent = "Tema Oscuro"
    localStorage.setItem("theme", "light")
  }
})

// Counter functionality
const decreaseBtn = document.getElementById("decrease")
const increaseBtn = document.getElementById("increase")
const countSpan = document.getElementById("count")

let count = 0

// Update the count display
function updateCount() {
  countSpan.textContent = count

  // Change color based on value
  if (count > 0) {
    countSpan.style.color = "green"
  } else if (count < 0) {
    countSpan.style.color = "red"
  } else {
    countSpan.style.color = ""
  }
}

// Event listeners for counter buttons
decreaseBtn.addEventListener("click", () => {
  count--
  updateCount()
})

increaseBtn.addEventListener("click", () => {
  count++
  updateCount()
})

// Add some animation to the feature cards
const featureCards = document.querySelectorAll(".feature-card")
featureCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)"
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)"
  })
})

// Log a message when the page loads
console.log("¡Sitio de prueba cargado correctamente!")
