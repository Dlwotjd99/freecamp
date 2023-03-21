function changePhone1() {
    const phone1 = document.getElementById("phone1").value
    if (phone1.length === 3) {
        document.getElementById("phone2").focus()
    }
}

function changePhone2() {
    const phone2 = document.getElementById("phone2").value
    if (phone2.length === 4) {
        document.getElementById("phone3").focus()
    }
}

function changePhone3() {
    const phone1 = document.getElementById("phone1").value
    const phone2 = document.getElementById("phone2").value
    const phone3 = document.getElementById("phone3").value
    if (phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
        document.getElementById("send__button").style = "background-color: #FFFFFF; color: #0068FF; cursor: pointer;"
        document.getElementById("send__button").removeAttribute("disabled")
    }
}

function auth() {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("target").innerText = token

    document.getElementById("send__button").style = "background-color: #ffffff; cursor: default;"
    document.getElementById("send__button").setAttribute("disabled", "true")
    document.getElementById("finish").style = "background-color: #0068ff; color: #ffffff; cursor: pointer;"
    document.getElementById("finish").removeAttribute("disabled")
    getTokenTimer()
}

let interval;
function getTokenTimer() {
    let timer = 180
    interval = setInterval(() => {
        if (timer >= 0) {
            const min = Math.floor(timer / 60)
            const sec = timer % 60

            document.getElementById("timer").innerText = min + ":" + String(sec).padStart(2, "0")
            timer -= 1
        } else {
            document.getElementById("target").innerText = "000000"
            document.getElementById("send__button").style = ""
            document.getElementById("send__button").setAttribute("disabled","true")

            document.getElementById("send__button").innerText = "3:00"
            document.getElementById("finish").style = ""
            document.getElementById("finish").setAttribute("disabled","true")

            clearInterval(interval)
        }

    }, 1000)
}

function auth__clear() {
    document.getElementById("signup__button").style = "background-color: #FFFFFF; color: #0068FF; cursor: pointer; border-color:#0068FF;"
    document.getElementById("signup__button").removeAttribute("disabled")
    document.getElementById("finish").style = "background-color: #ffffff; cursor: default;"
    document.getElementById("finish").setAttribute("disabled", "true")
}