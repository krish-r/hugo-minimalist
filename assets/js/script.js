const themeToggleBtn = document.querySelector("#theme-toggle");
const themeToggleDarkIcon = themeToggleBtn.querySelector("#theme-toggle #moon");
const themeToggleLightIcon = document.querySelector("#theme-toggle #sun");
const themeIdentifier = "preferred-theme";
const yearPlaceholder = document.querySelector("#year-placeholder");

// Add Event Listener for Toggle button
function toggleTheme() {
    const theme = localStorage.getItem(themeIdentifier);
    if (theme === null || theme === "dark") {
        document.documentElement.classList.remove("dark");
        themeToggleDarkIcon.classList.add("hidden");
        themeToggleLightIcon.classList.remove("hidden");
        localStorage.setItem(themeIdentifier, "light");
    } else {
        document.documentElement.classList.add("dark");
        themeToggleLightIcon.classList.add("hidden");
        themeToggleDarkIcon.classList.remove("hidden");
        localStorage.setItem(themeIdentifier, "dark");
    }
}
themeToggleBtn.addEventListener("click", toggleTheme);

// Set theme on every page load
function setTheme() {
    const theme = localStorage.getItem(themeIdentifier);
    if (theme === null || theme === "dark") {
        document.documentElement.classList.add("dark");
        themeToggleLightIcon.classList.add("hidden");
        themeToggleDarkIcon.classList.remove("hidden");
    } else {
        document.documentElement.classList.remove("dark");
        themeToggleDarkIcon.classList.add("hidden");
        themeToggleLightIcon.classList.remove("hidden");
    }
}
window.addEventListener("load", setTheme);

function setYear() {
    const year = new Date().getFullYear();
    yearPlaceholder.textContent = year.toString();
}
window.addEventListener("load", setYear);
