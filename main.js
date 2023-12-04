import { firebaseApp } from "./firebase-config.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

// Firebase Realtime Database 참조 가져오기
const database = getDatabase(firebaseApp);
const dataRef = ref(database, "item");

// 데이터가 표시될 div 요소 가져오기
const dataContainer = document.getElementById("dataContainer");

// 데이터베이스에서 변경 사항 감지 및 div 생성
onValue(dataRef, (snapshot) => {
    dataContainer.innerHTML = ""; // 기존 내용 비우기

    const data = snapshot.val();
    if (data) {
        Object.keys(data).forEach((key) => {
            const { name, message } = data[key];

            // 새로운 div 생성 및 내용 추가
            const newDiv = document.createElement("div");
            newDiv.innerHTML = `<p>Name: ${name}</p><p>Message: ${message}</p>`;

            // 생성한 div를 컨테이너에 추가
            dataContainer.appendChild(newDiv);
        });
    } else {
        dataContainer.innerHTML = "<p>No data available</p>";
    }
});