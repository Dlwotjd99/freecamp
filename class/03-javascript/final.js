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


//타이머
let interval;

function getTokenTimer() {
    let timer = 180;
    interval = setInterval(() => {
        if (timer >= 0) {
            const min = Math.floor(timer / 60)
            const sec = timer % 60

            document.getElementById("timer").innerText = min + ":" + String(sec).padStart(2, "0")
            timer -= 1
        } else {
            document.getElementById("target").innerText = "000000"
            document.getElementById("send__button").style = ""
            document.getElementById("send__button").setAttribute("disabled", "true")

            document.getElementById("send__button").innerText = "3:00"
            document.getElementById("finish").style = ""
            document.getElementById("finish").setAttribute("disabled", "true")

            clearInterval(interval)
        }

    }, 1000)
}

//인증번호 버튼 누르면 초기화
function auth__clear() {
    clearInterval(interval)
    document.getElementById("signup__button").style = "background-color: #FFFFFF; color: #0068FF; cursor: pointer; border-color:#0068FF;"
    document.getElementById("signup__button").removeAttribute("disabled")
    document.getElementById("finish").style = "background-color: #ffffff; cursor: default;"
    document.getElementById("finish").setAttribute("disabled", "true")
    document.getElementById("finish").innerText = "인증완료"
    alert("인증이 완료되었습니다")
    document.getElementById("timer").innerText = "3:00"
}

//가입 완료 누른 후
function signup() {
    const email = document.getElementById("email").value
    const name = document.getElementById("name").value
    const password1 = document.getElementById("password").value
    const password2 = document.getElementById("password2").value
    const location = document.getElementById("location").value
    const gender = document.getElementById("radio__sex").checked

    let isValid = true
    if (email.includes("@") === false) {
        document.getElementById("error__email").innerText = "이메일이 올바르지 않습니다."
        isValid = false
    } else {
        document.getElementById("error__email").innerText = ""
    }

    if (name === "") {
        document.getElementById("error__name").innerText = "이름이 올바르지 않습니다."
        isValid = false
    } else {
        document.getElementById("error__name").innerText = ""
    }

    if (password1 === "") {
        document.getElementById("error__password1").innerText = "비밀번호를 입력해 주세요."
        isValid = false
    } else {
        document.getElementById("error__password1").innerText = ""
    }

    if (password2 === "") {
        document.getElementById("error__password2").innerText = "비밀번호를 입력해 주세요."
        isValid = false
    } else {
        document.getElementById("error__password2").innerText = ""
    }

    if (password1 !== password2) {
        document.getElementById("error__password2").innerText = "비밀번호가 일치하지 않습니다."
        isValid = false
    } else {
        document.getElementById("error__password2").innerText = ""
    }

    if (location !== "서울" && location !== "경기" && location !== "인천") {
        document.getElementById("error__location").innerText = "지역을 선택해 주세요."
        isValid = false
    } else {
        document.getElementById("error__location").innerText = ""
    }

    if (gender === false) {
        document.getElementById("error__radio").innerText = "성별을 선택해 주세요."
        isValid = false
    } else {
        document.getElementById("error__radio").innerText = ""
    }

    if (isValid === true) {
        alert("코드캠프 가입을 축하합니다.")
    }

}