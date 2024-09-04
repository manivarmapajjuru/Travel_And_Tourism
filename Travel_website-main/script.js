function redirectToSelectedPage() {
    var destinationInput = document.getElementById("destinationInput");
    var selectedOption = destinationInput.value;

    if (selectedOption) {
        switch (selectedOption) {
            case "Meghalaya":
                window.location.href = "Meghalaya.html";
                break;
            case "Goa":
                window.location.href = "resume.html";
                break;
            case "Kashmir":
                window.location.href = "monaco.html";
                break;
            case "West Bengal":
                window.location.href = "france.html";
                break;
            case "Shimla":
                window.location.href = "japan.html";
                break;
            case "Assam":
                window.location.href = "switzerland.html";
                break;
            case "Nepal":
                window.location.href = "seoul.html";
                break;
            default:
                break;
        }
    }
}
