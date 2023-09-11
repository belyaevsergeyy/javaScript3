let arr = [];
for (var i = 0; i < 10; i++) {
    var numb = Math.floor(Math.random() * 100);
    arr.push(numb);
}
function print(mas){
    console.log(mas);
}

function qwerty(mas) {
    for (let index = 0; index <= mas.length; index++) {
        if (mas[index] % 2 == 0) {
            console.log("Четный эллемент: " + mas[index])
        }
        
    }
}

function sum(mas) {
    let a = mas[0];
    for (let index = 1; index < mas.length; index++) {
        a += mas[index];
    }
    console.log("Сумма элементов: " + a);
}
function max(mas) {
    let a = mas[0];
    for (let index = 1; index < mas.length; index++) {
        if (mas[index] > a) {
            a = mas[index];
        }  
    }
    console.log("Максимальный элемент: " + a);
}
function add(mas) {
    let a = prompt('Введите элемент, который надо добавить: ')
    let b = prompt('Введите индекс');
    mas[b] = a;
    console.log(mas);
}
function del(mas) {
    let a = prompt('Введите элемент, который надо добавить: ')
    let b = prompt('Введите индекс');
    mas[b] = a;
    console.log(mas);
}

print(arr);
qwerty(arr);
sum(arr);
max(arr);
add(arr);






