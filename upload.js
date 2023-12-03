import { firebaseApp } from "./firebase-config.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const database = getDatabase(firebaseApp);

const uploadData = (name, message) => {
  // 데이터베이스 참조
  const dataRef = ref(database, 'item');

  // 데이터 업로드
  const newData = {
    name: name,
    message: message
  };

  return push(dataRef, newData)
    .then(() => {
      return true; // 성공적으로 업로드됨
    })
    .catch((error) => {
      console.error('데이터 업로드 실패:', error);
      return false; // 업로드 실패
    });
};

export { uploadData };