const selectedCar = document.getElementById("selectedCar");

function showInfo(element) {
    const info = element.querySelector(".logo-info");
    if (info.style.display === "block") {
        info.style.display = "none";
    } else {
        info.style.display = "block";
    }
}

function upDate(element) {
    const imageSrc = element.querySelector("img").src;
    const carName = element.querySelector(".card-title").textContent;
    selectedCar.style.backgroundImage = `url(${imageSrc})`;
    selectedCar.querySelector("p").textContent = carName;
}

function upDo() {
    selectedCar.style.backgroundImage = "none";
    selectedCar.querySelector("p").textContent = "No car selected";
}