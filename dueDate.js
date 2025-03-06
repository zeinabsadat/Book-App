const lastUpdateElements = document.getElementsByClassName("lastUpdate");
if (lastUpdateElements.length > 0) {
    const lastUpdateElement = lastUpdateElements[0];
    const currentDate = new Date();
    const germanFormat = currentDate.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "numeric",
        year: "numeric"
    });

    lastUpdateElement.textContent = `Last Updated: ${germanFormat}`;
}
