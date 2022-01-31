import math from "../../assets/webp/Math.webp";
import fisic from "../../assets/webp/Fisic.webp";
import school from "../../assets/webp/school.webp";
import itAcademy from "../../assets/webp/ITAcademy.webp";
import certificate from "../../assets/webp/certificate.webp";

const initialState = [
  {id: 0, name: "Сертификат об окончании курсов Front-End разработки", image: itAcademy, link: "https://drive.google.com/file/d/1x2T9gkuEGP8Lf1VDafFa46pgPFIzv1oh/view?usp=sharing"},
  {id: 1, name: "Национальная олимпиада по математике", image: certificate, link: "https://drive.google.com/file/d/10WwouvK5QcIM6JjOaDaJuqM9KyeeqDP0/view?usp=sharing"},
  {id: 2, name: "Онлайн курс по JavaScript", image: "https://www.sololearn.com/certificates/course/en/20324776/1024/landscape/png", link: "https://www.sololearn.com/Certificate/1024-20324776/pdf/"},
  {id: 4, name: "Онлайн курс по React + Redux", image: "https://www.sololearn.com/certificates/course/en/20324776/1097/landscape/png", link: "https://www.sololearn.com/Certificate/1097-20324776/pdf/"},
  {id: 3, name: `НИЯУ МИФИ сертификат участника Семинара-практикума "Курс олимпиадной физики для школьников"`, image: fisic, link: "https://drive.google.com/file/d/1yqd7PVa9wkvpRCmGCVuxhFjrcfWz_Qvu/view?usp=sharing"},
  {id: 5, name: "Онлайн курс по HTML", image: "https://www.sololearn.com/certificates/course/en/20324776/1014/landscape/png", link: "https://www.sololearn.com/Certificate/1014-20324776/pdf/"},
  {id: 8, name: "Онлайн курс по CSS", image: "https://www.sololearn.com/certificates/course/en/20324776/1023/landscape/png", link: "https://www.sololearn.com/Certificate/1023-20324776/pdf/"},
  {id: 6, name: `НИЯУ МИФИ сертификат участника Семинара-практикума "Курс олимпиадной математики для школьников"`, image: math, link: "https://drive.google.com/file/d/1pWIURdJAmIHydgYEieqCB5sX0npaC-c5/view?usp=sharing"},
  {id: 7, name: "Школьная олимпиада по Информатике", image: school, link: "https://drive.google.com/file/d/1Q3j_Gi3kBYXC-WbKz6qCbiHAU5XWbt9t/view?usp=sharing"},
];

const certificatesReducer = (state=initialState, {type}) => {
  switch(type){
    default: {
      return state;
    }
  }
}

export default certificatesReducer;