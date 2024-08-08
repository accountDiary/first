import axios from "axios";

// 가계부 기록 불러오기
export const loadRecords = async (date) => {
  return await axios
    .get("/api/record/records", { params: { date } })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    })
}


// 가계부 기록 저장
export const saveRecords = async (records) => {
  return await axios
    .post("/api/record/save", records)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.data;
    });
};

// 해당되는 날짜에 따른 가계부 개수
export const recordCntDate = async (date) => {
  return await axios
    .get("/api/record/recordCnt", { params: { date } }) // 쿼리 파람을 넘기려면 이런 형태를 취해줘야 함
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return 0;
    });
};
