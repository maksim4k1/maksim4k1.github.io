import itAcademy from "../../assets/webp/ITAcademy.webp";
import tusurItAcademy from "../../assets/webp/TUSURITAcademy.jpg";
import algoTrainings from "../../assets/webp/algoTrainings.jpg";

const initialState = [
  {id: 0, name: "Сертификат об окончании курсов Front-End разработки на React", image: itAcademy, link: "https://drive.google.com/file/d/1x2T9gkuEGP8Lf1VDafFa46pgPFIzv1oh/view?usp=sharing"},
  {id: 1, name: "Сертификат о прохождении курса теоретической и практической подготовки «Тренировки по алгоритмам 5.0»", image: algoTrainings, link: "https://drive.google.com/file/d/1yrqHXbwWsscZ_dr1wxfoDSJ5xWZMRcVZ/view?usp=sharing"},
  {id: 2, name: "Сертификат ИТ-Академии об успешном прохождении обучения по программе «Front-end разработчик»", image: tusurItAcademy, link: "https://drive.google.com/file/d/1tugSfgAUzmfAlbDwLI1R1DGYTO3mUoFs/view?usp=sharing"},
];

const certificatesReducer = (state=initialState, {type}) => {
  switch(type){
    default: {
      return state;
    }
  }
}

export default certificatesReducer;