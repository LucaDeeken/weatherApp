import './styles.css';
import { getWeather, getCondition } from './getWeather.js';


const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");


searchBtn.addEventListener("click", (event) => {
let searchValue = searchInput.value;
getWeather(searchValue);

})


// const today = json.days[0];
// const condition = today.condition;
