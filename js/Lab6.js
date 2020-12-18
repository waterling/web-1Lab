window.onload = function() {
    const popUp = document.getElementById("modal")
    let btn = document.getElementById("btn")
    let span = document.getElementById("closePopUp")
    
    let img = document.getElementsByClassName("icon")[0]

    btn.onclick = function() {
        popUp.style.display = "block"
    }

    span.onclick = function() {
        popUp.style.display = "none"
    }

    img.onclick = function() {
        if (img.getAttribute("src") == "resources/Icon.png") {
            img.setAttribute("src", "resources/Delphin.png")
        }
        else {
            img.setAttribute("src", "resources/Icon.png")
        }
        
    }

    
    //Lab7
    let nouns = ['вы', 'сайт', 'звонок', 'телефон']
    let adjs = ['Картофельный', 'Возможный', 'Внимательный']
    let verbs = ['посетить', 'ввести', 'позвонить']

    let btnChat = document.getElementById("btnChat")
    let spanChat = document.getElementById("closeChat")

    const chat = document.getElementById("chat")

    btnChat.onclick = function() {
        chat.style.display = "block"
        btnChat.style.display = "none"
    }

    spanChat.onclick = function() {
        chat.style.display = "none"
        btnChat.style.display = "block"
    }


    document.getElementById("send").onclick = function() {
        let field = document.getElementById("messages")
        let msgArea = document.getElementById("msgArea")

        field.innerHTML = field.innerHTML + "<p class='userMessage'>You: " + msgArea.value + "</p>"
        msgArea.value = ""
        field.innerHTML = field.innerHTML + "<p class='botMessage'>Bot: " + randomWord(adjs) + ' ' + randomWord(nouns) + ' ' + randomWord(verbs) + "</p>"
        field.scrollTop = field.scrollHeight
    }
}

let randomWord = function(array) {
    return array[Math.floor(Math.random()*array.length)]
}
