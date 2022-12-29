import itAcademy from "../../assets/webp/ITAcademy.webp";

const initialState = [
  {id: 0, name: "Сертификат об окончании курсов Front-End разработки", image: itAcademy, link: "https://drive.google.com/file/d/1x2T9gkuEGP8Lf1VDafFa46pgPFIzv1oh/view?usp=sharing"},
  {id: 1, name: "Онлайн курс по JavaScript", image: "https://www.sololearn.com/certificates/course/en/20324776/1024/landscape/png", link: "https://www.sololearn.com/Certificate/1024-20324776/pdf/"},
  {id: 2, name: "Онлайн курс по React + Redux", image: "https://www.sololearn.com/certificates/course/en/20324776/1097/landscape/png", link: "https://www.sololearn.com/Certificate/1097-20324776/pdf/"},
  {id: 3, name: "Онлайн курс по HTML", image: "https://www.sololearn.com/certificates/course/en/20324776/1014/landscape/png", link: "https://www.sololearn.com/Certificate/1014-20324776/pdf/"},
  {id: 4, name: "Онлайн курс по CSS", image: "https://www.sololearn.com/certificates/course/en/20324776/1023/landscape/png", link: "https://www.sololearn.com/Certificate/1023-20324776/pdf/"},
];

const certificatesReducer = (state=initialState, {type}) => {
  switch(type){
    default: {
      return state;
    }
  }
}

export default certificatesReducer;