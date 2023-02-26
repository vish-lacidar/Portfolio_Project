const label = document.querySelector("label");

label.addEventListener("click", function(){
    const checkbox = document.querySelector("#"+this.htmlFor);
    checkbox.checked = !checkbox.checked
})