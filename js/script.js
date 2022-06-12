console.log("Zadanie 2- Dodaj elementy listy");

let itemArray = ['Item 1', 'Item 2', 'Item 3']

document.write("<h1>Elementy listy</h1>");

document.write("<ul id ='items'></ul>");

const items = (tablica) => {
    console.log(tablica);
    let liElement = 0;
    let item = 0;
    let list = 0;
    for (let i = 0; i < tablica.length; i++) {
        let liElement = document.createElement('li');
        let item = document.createTextNode(`${tablica[i]}`);
        let atrrNode1 = document.createAttribute('class');
        atrrNode1.value = 'item';
        liElement.appendChild(item);
        liElement.setAttributeNode(atrrNode1);
        let list = document.getElementById('items');
        list.appendChild(liElement);

    }

    return list;
}
console.log(items(itemArray));

// let list1 = document.getElementById('items');
// let lastEl = list1.lastElementChild;
// lastEl.classList.add('item');
// console.log(lastEl);


document.write("<button id ='button'>Add item</button>");

let button = document.getElementById('button');

const clickButton = (element) => {
    let liElement1 = 0;
    let item1 = 0;
    let list1 = 0;
    for (let i = 3; i < element.length; i++) {
        // let liElement1 = document.createElement('li');
        // let item1 = document.createTextNode(`${element[i]+1}`);
        // let atrrNode1 = document.createAttribute('class');
        // atrrNode2.value = 'item';
        // liElement1.appendChild(item1);
        // liElement1.setAttributeNode(atrrNode2);
        // let list1 = document.getElementById('items');
        // let lastEl = list1.lastElementChild;
        // lastEl.classList.add('item');
        // list1.appendChild(liElement);
    }
    return list1;
}

button.addEventListener('click', clickButton);
console.log(button);





// let liElement = document.createElement('li');
// let city1 = document.createTextNode('Warsaw');
// let atrrNode1 = document.createAttribute('class');
// atrrNode1.value = 'city';

// liElement.appendChild(city1);
// liElement.setAttributeNode(atrrNode1);

// let list2 = document.getElementById('items');
// console.log(list2);
// list.appendChild(liElement);




// console.log(cities);
// console.log(liElement);
// console.log(city);
// console.log(atrrNode1);