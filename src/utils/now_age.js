function now_age(){
  let date = new Date();

  const age = date.getFullYear()-2004-1 + (((date.getDay() >= 18 && date.getMonth() === 5) || date.getMonth() > 5) ? 1 : 0);
  const ageLastNumber = Number(String(age)[String(age).length - 1]);

  return age + " " + (ageLastNumber === 1 ? "год" : ageLastNumber > 0 && ageLastNumber < 5 ? "года" : "лет");
}

export default now_age;