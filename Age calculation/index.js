const birthDate = document.querySelector('#input');
const display = document.querySelector('#result')

function agecal()
{
    let dateTime = new Date(birthDate.value);
    let initailMili = new Date().getTime();
    let totalMili = dateTime.getTime();
    let minus = initailMili - totalMili;
    let age = minus/ 1000 / 60 / 60 / 24 / 30 / 12; 
    display.innerHTML = age.toFixed(0);
    
}