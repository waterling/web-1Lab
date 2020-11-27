window.onload = () => {
    var modal = document.getElementById('myModal')
    var btn = document.getElementById('myBtn')
    var span = document.getElementsByClassName("close")[0]

    var spiritAnimal = document.getElementsByClassName("animalPre")[0]

    var body = document.getElementsByTagName("body")[0]

    btn.onclick = function() {
        modal.style.display = "block"
    }

    span.onclick = function() {
        modal.style.display = "none"
    }

    spiritAnimal.onclick = function() {
        if (body.style.backgroundColor == "rgb(80, 200, 120)"){
            body.style.backgroundColor = "#ffffff"
            body.style.backgroundImage = "url('recources/BackGround.png')"
        }
        else {
            body.style.backgroundImage = "none"
            body.style.backgroundColor = "#50c878"
        }
    }
}
