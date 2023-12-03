import { firebaseApp } from "./firebase-config.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    onValue,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";

// Firebase Realtime Database 참조 가져오기
const database = getDatabase(firebaseApp);

const dataRef = ref(database, "player");

function objectToArray(data) {
    const dataArray = [];
    // 객체의 각 속성을 순회하며 배열에 추가
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const playerData = data[key];
            // 플레이어 데이터에 고유한 식별자를 추가하거나 원하는 형식으로 변환 가능
            // 예시: playerData.id = key;
            dataArray.push(playerData);
        }
    }
    return dataArray;
}
function gameScore(data, targetGame) {
    const filteredData = Object.values(data).filter(
        (player) => player.game === targetGame
    );
    filteredData.sort((a, b) => b.score - a.score);

    return filteredData;
}

let justdance;

function onDataChange(snapshot) {
    const data = snapshot.val();
    justdance = gameScore(data, "justdance");
    updateRankPlayer();
}

// 데이터 변경을 감지하고 onDataChange 함수를 등록
onValue(dataRef, onDataChange, { onlyOnce: false });
// .rank-player 요소의 참조 가져오기
const rankPlayerElement = document.querySelector(".rank-player");

// justdance 배열이 비어있지 않은 경우

// .rank-player 요소 업데이트 함수
function updateRankPlayer() {
    const rankPlayerElement = document.querySelector(".rank-player");
    const firstPlayer = justdance[0];
    const scoreElement = rankPlayerElement.querySelector("#score");
    const groupElement = rankPlayerElement.querySelector("#group");
    const nameElement = rankPlayerElement.querySelector("#name");

    scoreElement.textContent = firstPlayer.score;
    groupElement.textContent = firstPlayer.group;
    nameElement.textContent = firstPlayer.name;
}