const initialState = [
  {id: 0, name: "Авто Дом", image: "", link: "https://maksim4k1.github.io/avtodom-landing-page.kg/"},
  {id: 1, name: "Список задач", image: "", link: "https://maksim4k1.github.io/todolist/"},
  {id: 2, name: "Twitter", image: "", link: "https://maksim4k1.github.io/twitter/"},
  {id: 3, name: "Lucas Montana", image: "", link: "https://maksim4k1.github.io/Lucas-Montana/"},
  {id: 4, name: "Uber Eats", image: "", link: "https://maksim4k1.github.io/UberEats-Vanila/"},
  {id: 5, name: "TRANS LIGHT", image: "", link: "https://maksim4k1.github.io/TRANS-LIGHT/"},
];

const portfolioReducer = (state=initialState, {type}) => {
  switch(type){
    default: {
      return state;
    }
  }
}

export default portfolioReducer;