document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => {
        const jsonData = document.getElementById("jsonData");

        data.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.textContent = `Name: ${item.name}, Email: ${item.email}, Body: ${item.body}`;
            jsonData.appendChild(listItem);
        });
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
});