window.onload = () => {
    //Lab 6
    let modal = document.getElementById('myModal')
    let btn = document.getElementById('myBtn')
    let span = document.getElementById('spanModal')

    let spiritAnimal = document.getElementsByClassName("animalPre")[0]

    let body = document.getElementsByTagName("body")[0]

    btn.onclick = function () {
        modal.style.display = "block"
    }

    span.onclick = function () {
        modal.style.display = "none"
    }

    spiritAnimal.onclick = function () {
        if (body.style.backgroundColor === "rgb(80, 200, 120)") {
            body.style.backgroundColor = "#ffffff"
            body.style.backgroundImage = "url('recources/BackGround.png')"
        } else {
            body.style.backgroundImage = "none"
            body.style.backgroundColor = "#50c878"
        }
    }

    //Lab 7
    let modalChat = document.getElementById('myChatModal')
    let btnChat = document.getElementById('myChat')
    let spanChat = document.getElementById('spanChat')

    let btnSend = document.getElementById('btnSend')
    let btnClear = document.getElementById('btnClear')

    let adjectives = ['красивый', 'угрюмый', 'отвратный', 'угрожающий', 'добрый']
    let nouns = ['единорог', 'медведь', 'заяц', 'хрен', 'киберпанк']
    let verbs = ['убивает', 'любит', 'ненавидит', 'кайфует', 'играет']

    btnChat.onclick = function () {
        modalChat.style.display = "block"
    }

    spanChat.onclick = function () {
        modalChat.style.display = "none"
    }

    btnSend.onclick = function () {
        let chatMessages = document.getElementById('chatMessages')
        let msgTextArea = document.getElementById('msgTextArea')

        let adjective = adjectives[Math.floor(Math.random()*adjectives.length)];
        let noun = verbs[Math.floor(Math.random()*verbs.length)];
        let verb = nouns[Math.floor(Math.random()*nouns.length)];

        chatMessages.innerHTML = chatMessages.innerHTML + "<p class='userMessage'> User: " + msgTextArea.value + "</p>"
        msgTextArea.value = ""

        chatMessages.innerHTML = chatMessages.innerHTML + "<p class='botMessage'> Bot: " + adjective + ' ' + verb + ' ' + noun + "</p>"
        chatMessages.scrollTop = chatMessages.scrollHeight;

    }

    btnClear.onclick = function () {
        let chatMessages = document.getElementById('chatMessages')

        chatMessages.innerHTML = ''
    }
}
