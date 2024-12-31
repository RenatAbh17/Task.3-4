const carName = 'BMW';
let maxCarSpeed = 320;
let carOwner = 'Renat';

const carUserInfo = {
    carName: carName, 
    maxCarSpeed: maxCarSpeed,
    carOwner: carOwner,
};

function carUserInfoFunction (carUserInfo){
    for(let key in carUserInfo) {
        alert(`${key}: ${carUserInfo[key]}`);
    };

};
// переопределяем значения переменных
maxCarSpeed = 280;
carOwner = 'Ivan';

carUserInfo.maxCarSpeed = maxCarSpeed;
carUserInfo.carOwner = carOwner;
// вызываем функцию с обновленным оъектом carUserInfo
carUserInfoFunction(carUserInfo);


