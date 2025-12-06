let para = document.querySelectorAll(".left .box p");
const suffixText = " ...(More on GitHub)";
const maxHeight = 85;

para.forEach((p) => {
    p.setAttribute("original-text", p.textContent.trim());
});

function handleResize() {
    para.forEach((p) => {
        let originalText = p.getAttribute("original-text");
        p.textContent = originalText;
        let change = false;
        while (p.scrollHeight > p.clientHeight) {
            originalText = originalText.slice(0, -5);
            p.textContent = originalText + suffixText;
            change = true;
        }
        if (change) {
            p.innerHTML = `${originalText}<span class="read-more">${suffixText}</span>`;
        }
    });
}

window.addEventListener("resize", handleResize);

handleResize(); // if user enters from mobile


const triggerBtn = document.querySelector(".mobile button");
const menu = document.querySelector(".dropdown-menu");
const mobileContainer = document.querySelector(".mobile");

triggerBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    mobileContainer.classList.toggle("is-open");
});

// close menu if user click outside
document.addEventListener("click", (e) => {
    if(menu.classList.contains("active") && !menu.contains(e.target) && e.target !== triggerBtn) {
        menu.classList.remove("active");
        mobileContainer.classList.remove("is-open");
    }
});