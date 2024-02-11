// 랜덤번호 지정
// 유저 번호 입력 & 버튼 클릭
// 유저가 번호 맞추면 정답
// 유저 번호 < 랜덤번호 : Up!
// 유저 번호 > 랜덤 번호 : Down!
/// reset 버튼 누르면 게임 리셋
/// 5번의 기회. 다 쓰면 버튼 비활성화
/// 1~100 범위 밖의 숫자 입력시 알려주고 라이프는 유지
/// 입력한 숫자를 다시 입력시 알려주고 라이프 유지

let comNum = 0
let playBtn = document.getElementById("play_btn")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("resultArea")
let resetBtn = document.getElementById("reset_btn")
let userLife = 5
let gameOver = false
let lifeLeft = document.getElementById("lifeLeft")

playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset)

function pickRandomNum() {
    comNum = Math.floor(Math.random() * 100)+1
    console.log("직쏘의 숫자" + comNum)
}

function play() {
    let userValue = userInput.value
    userLife --
    lifeLeft.textContent = `Your Life : ${userLife}`
    if (userValue < comNum) {
        resultArea.textContent = "Up!!!"
    } else if (userValue >comNum) {
        resultArea.textContent = "Down!!!"
    } else {
        resultArea.textContent = "Correct...But you took something for granted."
    }
    if (userLife < 1) {
        gameOver = true
    }
    if (gameOver == true) {
        playBtn.disabled = true
        resultArea.textContent = "You Died"
    }
}

function reset() {
    userInput.value = ""
    userLife = 5
    gameOver = false
    playBtn.disabled = false
    pickRandomNum()
    resultArea.textContent = "결과를 여기서 확인하시오"
}

pickRandomNum();
