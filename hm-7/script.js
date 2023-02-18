const year  = prompt('Рік народження')
if (year === null|| year === ''){
    alert('Шкода, що ти не зробив свій вибір')
}
const city  = prompt('Вкажіть ваше місто')
if (city === null|| city === ''){
    alert('Шкода, що ти не зробив свій вибір')
}
const sport  = prompt('Улюбллений вид спорту')
if (sport === null|| sport === ''){
    alert('Шкода, що ти не зробив свій вибір')
}

let age = '';
if (year === null|| year === ''){
    age = 'Шкода, що ти не ввів свій рік народження'
} else {
    age = `Ваш вік ${2023 - +year}`
}

let aboutcity = ''; 
switch (city) {
    case null:
    case '':
    aboutcity = 'Шкода, що ти не ввів своє місто';
    break; 
    case 'Київ': 
    aboutcity = 'Ти живеш в столиці України!';
    break;
    case 'Вашингтон':
    aboutcity = 'Ти живеш в столиці США!';
    break;
    case 'Лондон' :
    aboutcity = 'Ти живеш в столиці Британії';
    break;
    default : aboutcity = `Ти живеш в  місті ${city} `
    


}

let aboutsport = ''; 
switch (sport) {
    case null:
    case '':
    aboutsport = 'Шкода, що ви не захотіли ввести свій вибір';
    break; 
    case 'Футбол': 
    aboutsport = 'Круто! Ти хочеш стати Ліонелем  Мессі';
    break;
    case 'Хокей':
    aboutsport = 'Круто! Ти хочеш стати Боббі Орром';
    break;
    case 'Теніс' :
    aboutsport = 'Круто! Ти хочеш Новаком Джоковічем';
    break;
    default : aboutsport = `Круто! Ти любиш  ${sport} `



}

alert (age + '\n' + aboutcity + '\n' + aboutsport);
