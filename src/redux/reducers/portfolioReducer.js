import portfolio from "../../assets/webp/Portfolio.webp";
import avtodom from "../../assets/webp/AvtoDom.webp";
import timer from "../../assets/webp/Timer.webp";
import todolist from "../../assets/webp/Todolist.webp";
import uploadimages from "../../assets/webp/UploadImages.webp";
import game from "../../assets/webp/Game.webp";
import twitter from "../../assets/webp/Twitter.webp";
import lucasmontana from "../../assets/webp/LucasMontana.webp";
import translight from "../../assets/webp/TransLight.webp";
import ubereats from "../../assets/webp/UberEats.webp";
import sweetbakery from "../../assets/webp/SweetBakery.webp";

const initialState = {
  projects: [
    {id: 0, name: 'Мой сайт портфолио', image: `${portfolio}`, link: "/"},
    {id: 1, name: 'Одностраничный сайт автозапчастей "Авто Дом"', image: `${avtodom}`, link: "https://maksim4k1.github.io/avtodom-landing-page.kg/"},
    {id: 2, name: 'Веб-приложение "Таймер"', image: `${timer}`, link: "https://maksim4k1.github.io/Timer/"},
    {id: 3, name: 'Веб-приложение "Список задач"', image: `${todolist}`, link: "https://maksim4k1.github.io/todolist/"},
    {id: 4, name: 'Веб-приложение "Загрузчик фотографий"', image: `${uploadimages}`, link: "https://maksim4k1.github.io/upload-images/"},
    {id: 5, name: 'Игра "Крестики-Нолики"', image: `${game}`, link: "https://maksim4k1.github.io/noughts-and-crosses/"},
    {id: 6, name: 'Веб-приложение Twitter', image: `${twitter}`, link: "https://maksim4k1.github.io/twitter/"},
    {id: 7, name: 'Сайт портфолио "Lucas Montana"', image: `${lucasmontana}`, link: "https://maksim4k1.github.io/Lucas-Montana/"},
    {id: 8, name: 'Одностраничный сайт "TRANS LIGHT"', image: `${translight}`, link: "https://maksim4k1.github.io/TRANS-LIGHT/"},
  ],
  projectsWithApi: [
    {id: 0, name: 'Приложение для просмотра меню в ресторанах "Uber Eats"', image: `${ubereats}`, link: "https://maksim4k1.github.io/UberEats/"},
    {id: 1, name: 'Мини интернет-магазин "Sweet Bakery"', image: `${sweetbakery}`, link: "https://maksim4k1.github.io/Sweet-Bakery/"},
  ],
};

const portfolioReducer = (state=initialState, {type}) => {
  switch(type){
    default: {
      return state;
    }
  }
}

export default portfolioReducer;