function now_age(){
  let date = new Date();
  return date.getFullYear()-2004-1 + (((date.getDay() >= 18 && date.getMonth() === 5) || date.getMonth() > 5) ? 1 : 0);
}

export default now_age;