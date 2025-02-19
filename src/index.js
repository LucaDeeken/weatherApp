import './styles.css';
import { getWeather, getCondition } from './getWeather.js';


const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");


getWeather();

// const today = json.days[0];
// const condition = today.condition;
