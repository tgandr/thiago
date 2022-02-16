let changePict = document.querySelector(".frame")

changePict.addEventListener("mouseover", changeP)
function changeP(obj) {
    let changePict2 = obj.target.innerText
    if (changePict2 == "ZOOTECNIA") {
        changePict.style.backgroundColor = "blue";
        console.log("true")
    }
}