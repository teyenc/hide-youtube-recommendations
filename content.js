// content.js
document.addEventListener("DOMContentLoaded", function () {
    // Select the recommendation sidebar
    let recommendationSidebar = document.querySelector("#secondary");

    // Hide the sidebar if it exists
    if (recommendationSidebar) {
        recommendationSidebar.style.display = "none";
    }

    // Hide the sidebar on URL change (single-page applications like YouTube)
    let observer = new MutationObserver(() => {
        let newSidebar = document.querySelector("#secondary");
        if (newSidebar) {
            newSidebar.style.display = "none";
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
