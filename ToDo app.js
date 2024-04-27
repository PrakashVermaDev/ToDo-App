let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        let li = document.createElement("li");
        li.innerText = input.value;

        let button = document.createElement("button");
        button.innerText = "delete";
        button.classList.add("delete");

        ul.appendChild(li);
        li.appendChild(button);

        input.value = "";
    } else {
        alert("Please enter a task.");
    }
});

ul.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
        let listInp = event.target.parentElement;
        listInp.remove();
        console.log("task deleted");
    }
});
