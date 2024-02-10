// 랜덤번호 지정
// 유저 번호 입력 & 버튼 클릭
// 유저가 번호 맞추면 정답
// 유저 번호 < 랜덤번호 : Up!
// 유저 번호 > 랜덤 번호 : Down!
// reset 버튼 누르면 게임 리셋
// 5번의 기회. 다 쓰면 버튼 비활성화
// 1~100 범위 밖의 숫자 입력시 알려주고 라이프는 유지
// 입력한 숫자를 다시 입력시 알려주고 라이프 유지

let comNum = 0
let playBtn = document.getElementById("play_btn")
let userInput = document.getElementById("user-input")

playBtn.addEventListener("click", play);

function pickRandomNum() {
    comNum = Math.floor(Math.random() * 100)+1
    console.log("직쏘의 숫자" + comNum)
}

function play() {
    let userValue = userInput.value
    console.log(userValue)
}

pickRandomNum();
