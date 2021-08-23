import { takeEvery, put } from "redux-saga/effects";
import NewsAPI from "newsapi";
import axios from "axios";

function* fetchData() {
  const newsapi = new NewsAPI("c24429aa962d4771910ffbaff2ba5039");

  yield axios
    .get(
      "https://newsapi.org/v2/everything?q=Apple&from=2021-08-22&sortBy=popularity&apiKey=c24429aa962d4771910ffbaff2ba5039"
    )
    .then((data) => {
      console.log(data);
    });

  yield put({ type: "FETCH_DATA_ASYNC", value: "Api Called(Check Console)" });
}
export function* watchAgeUp() {
  yield takeEvery("FETCH_DATA", fetchData);
}
