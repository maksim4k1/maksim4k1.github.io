import portfolio from "../../assets/webp/Portfolio.webp";
import avtodom from "../../assets/webp/AvtoDom.webp";
import weather from "../../assets/webp/Weather.webp";
import timer from "../../assets/webp/Timer.webp";
import todolist from "../../assets/webp/Todolist.webp";
import uploadimages from "../../assets/webp/UploadImages.webp";
import game from "../../assets/webp/Game.webp";
import twitter from "../../assets/webp/Twitter.webp";
import lucasmontana from "../../assets/webp/LucasMontana.webp";
import translight from "../../assets/webp/TransLight.webp";
import ubereats from "../../assets/webp/UberEats.webp";
import sweetbakery from "../../assets/webp/SweetBakery.webp";
import quizApp from "../../assets/webp/quiz-app.webp";

const initialState = {
  projects: [
    {id: 0, name: 'Мой сайт портфолио', image: `${portfolio}`, link: "https://maksim4k1.github.io/Maksim-Bazhenov/"},
    {id: 1, name: 'Одностраничный сайт автозапчастей "Авто Дом"', image: `${avtodom}`, link: "https://maksim4k1.github.io/avtodom-landing-page.kg/"},
    {id: 2, name: 'Погодное приложение', image: `${weather}`, link: "https://maksim4k1.github.io/Weather/"},
    {id: 3, name: 'Веб-приложение "Таймер"', image: `${timer}`, link: "https://maksim4k1.github.io/Timer/"},
    {id: 4, name: 'Веб-приложение "Список задач"', image: `${todolist}`, link: "https://maksim4k1.github.io/todolist/"},
    {id: 5, name: 'Веб-приложение "Загрузчик фотографий"', image: `${uploadimages}`, link: "https://maksim4k1.github.io/upload-images/"},
    {id: 6, name: 'Игра "Крестики-Нолики"', image: `${game}`, link: "https://maksim4k1.github.io/noughts-and-crosses/"},
    {id: 7, name: 'Веб-приложение Twitter', image: `${twitter}`, link: "https://maksim4k1.github.io/twitter/"},
    {id: 8, name: 'Сайт портфолио "Lucas Montana"', image: `${lucasmontana}`, link: "https://maksim4k1.github.io/Lucas-Montana/"},
    {id: 9, name: 'Одностраничный сайт "TRANS LIGHT"', image: `${translight}`, link: "https://maksim4k1.github.io/TRANS-LIGHT/"},
  ],
  projectsWithApi: [
    {id: 0, name: 'Приложение для просмотра меню в ресторанах "Uber Eats"', image: `${ubereats}`, link: "https://maksim4k1.github.io/UberEats/"},
    {id: 1, name: 'Мини интернет-магазин "Sweet Bakery"', image: `${sweetbakery}`, link: "https://maksim4k1.github.io/Sweet-Bakery/"},
  ],
  quizProject: [
    {id: 0, name: 'Quiz - приложени онлайн викторин', image: `${quizApp}`, link: "https://maksim4k1.github.io/Quiz/"},
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