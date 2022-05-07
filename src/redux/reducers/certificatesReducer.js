import math from "../../assets/webp/Math.webp";
import fisic from "../../assets/webp/Fisic.webp";
import school from "../../assets/webp/school.webp";
import itAcademy from "../../assets/webp/ITAcademy.webp";
import certificate from "../../assets/webp/certificate.webp";
import telecom_inf from "../../assets/webp/sertificat_planeta_telecom_inf.webp";
import telecom_math from "../../assets/webp/sertificat_planeta_telecom_math.webp";
import certificate_skfu from "../../assets/webp/certificate_skfu.webp";
import chto_gde_kogda from "../../assets/webp/chto_gde_kogda.webp";
import math_olymp from "../../assets/webp/math_olymp.webp";
import math_online_olymp from "../../assets/webp/math_online_olymp.webp";
import active_school from "../../assets/webp/active_school.webp";
import diplom_tusur_math from "../../assets/webp/diplom_tusur_math.webp";
import diplom_tusur_inf from "../../assets/webp/diplom_tusur_inf.webp";

const initialState = [
  {id: 0, name: "Сертификат об окончании курсов Front-End разработки", image: itAcademy, link: "https://drive.google.com/file/d/1x2T9gkuEGP8Lf1VDafFa46pgPFIzv1oh/view?usp=sharing"},
  {id: 1, name: "Национальная олимпиада по математике", image: certificate, link: "https://drive.google.com/file/d/10WwouvK5QcIM6JjOaDaJuqM9KyeeqDP0/view?usp=sharing"},
  {id: 2, name: "Онлайн курс по JavaScript", image: "https://www.sololearn.com/certificates/course/en/20324776/1024/landscape/png", link: "https://www.sololearn.com/Certificate/1024-20324776/pdf/"},
  {id: 3, name: "Онлайн курс по React + Redux", image: "https://www.sololearn.com/certificates/course/en/20324776/1097/landscape/png", link: "https://www.sololearn.com/Certificate/1097-20324776/pdf/"},
  {id: 4, name: `НИЯУ МИФИ сертификат участника Семинара-практикума "Курс олимпиадной математики для школьников"`, image: math, link: "https://drive.google.com/file/d/1pWIURdJAmIHydgYEieqCB5sX0npaC-c5/view?usp=sharing"},
  {id: 5, name: `НИЯУ МИФИ сертификат участника Семинара-практикума "Курс олимпиадной физики для школьников"`, image: fisic, link: "https://drive.google.com/file/d/1yqd7PVa9wkvpRCmGCVuxhFjrcfWz_Qvu/view?usp=sharing"},
  {id: 6, name: "Онлайн курс по HTML", image: "https://www.sololearn.com/certificates/course/en/20324776/1014/landscape/png", link: "https://www.sololearn.com/Certificate/1014-20324776/pdf/"},
  {id: 7, name: "Онлайн курс по CSS", image: "https://www.sololearn.com/certificates/course/en/20324776/1023/landscape/png", link: "https://www.sololearn.com/Certificate/1023-20324776/pdf/"},
  {id: 8, name: "Школьная олимпиада по Информатике", image: school, link: "https://drive.google.com/file/d/1Q3j_Gi3kBYXC-WbKz6qCbiHAU5XWbt9t/view?usp=sharing"},
  {id: 9, name: "Грамота за активное участие в жизни школы", image: active_school, link: "https://drive.google.com/file/d/18D9BvKxxjb8fUAmH1zrfrUGwFmabOMrR/view?usp=sharing"},
  {id: 10, name: "Сертификат об участии в олимпиаде по информатике", image: telecom_inf, link: "https://drive.google.com/file/d/1ndn9i-JFAR4mgyf2UbQwNFJ0Ni2gt_O2/view?usp=sharing"},
  {id: 11, name: "Сертификат об участии в олимпиаде по математике", image: telecom_math, link: "https://drive.google.com/file/d/1EWPoo9L0dC6IguqdHB5TB-BfYW9K7OCE/view?usp=sharing"},
  {id: 12, name: "Диплом I степени. Открытая олимпиада по математике", image: diplom_tusur_math, link: "https://drive.google.com/file/d/1dzgd0cWoA7dBpG8u3zhA3fI0Hux6H99G/view?usp=sharing"},
  {id: 13, name: "Диплом II степени. Открытая олимпиада по информатике", image: diplom_tusur_inf, link: "https://drive.google.com/file/d/1jPteiVmAnkB_MFz1Py-Ve4PjxngXxTg4/view?usp=sharing"},
  {id: 14, name: "Почетная грамота за участие в финале республиканской математической олимпиады", image: math_olymp, link: "https://drive.google.com/file/d/1KONHkZ8hxHjlZFg71zjUqP8xCLqNhs6t/view?usp=sharing"},
  {id: 15, name: "Диплом победителя I степени по математике", image: math_online_olymp, link: "https://drive.google.com/file/d/1zcUWj0kGCt5k7loBlvxCedCI1G0a4vis/view?usp=sharing"},
  {id: 16, name: `Диплом I степени победителю интеллектуальной игры "Что? Где? Когда?"`, image: chto_gde_kogda, link: "https://drive.google.com/file/d/1tNEvts8qDvvOG-SpRpDfZYEiKKgBUST0/view?usp=sharing"},
  {id: 17, name: "Сертификат участника курса по подготовке к сдаче экзамена по матиматике", image: certificate_skfu, link: "https://drive.google.com/file/d/1ZQ_CnP322STcrst4jVPrHX1AIowEmmKL/view?usp=sharing"},
];

const certificatesReducer = (state=initialState, {type}) => {
  switch(type){
    default: {
      return state;
    }
  }
}

export default certificatesReducer;