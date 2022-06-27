//functions

// generate a random number between 2 integers inclusive
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// BEGINNING OF CODE

// create a teachers database
const teachersDatabase = [
  {
    image: 'assets/pictures/1.png',
    name: 'Tiago Marin',
    highlight: 'Graduated in business, worked in multinational companies and lived in different countries',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi assumenda quod at facere incidunt fuga aperiam quaerat quo dolorum?'
  },
  {
    image: 'assets/pictures/2.png',
    name: 'name2',
    highlight: 'higlights2',
    description: 'description2'
  },
  {
    image: 'assets/pictures/3.png',
    name: 'name3',
    highlight: 'higlights3',
    description: 'description4'
  },
  {
    image: 'assets/pictures/4.png',
    name: 'name4',
    highlight: 'higlights4',
    description: 'description4'
  },
  {
    image: 'assets/pictures/5.png',
    name: 'name5',
    highlight: 'higlights5',
    description: 'description5'
  },
  {
    image: 'assets/pictures/6.png',
    name: 'name6',
    highlight: 'higlights6',
    description: 'description6'
  },
  {
    image: 'assets/pictures/7.png',
    name: 'name7',
    highlight: 'higlights7',
    description: 'description7'
  },
  {
    image: 'assets/pictures/8.png',
    name: 'name8',
    highlight: 'higlights8',
    description: 'description8'
  },
  {
    image: 'assets/pictures/9.png',
    name: 'name9',
    highlight: 'higlights9',
    description: 'description9'
  },
  {
    image: 'assets/pictures/10.png',
    name: 'name10',
    highlight: 'higlights10',
    description: 'description10'
  },
  {
    image: 'assets/pictures/11.png',
    name: 'name11',
    highlight: 'higlights11',
    description: 'description11'
  },
  {
    image: 'assets/pictures/12.png',
    name: 'name12',
    highlight: 'higlights12',
    description: 'description12'
  },
  {
    image: 'assets/pictures/13.png',
    name: 'name13',
    highlight: 'higlights13',
    description: 'description13'
  },
  {
    image: 'assets/pictures/14.png',
    name: 'name14',
    highlight: 'higlights14',
    description: 'description14'
  }
];
// ps. data base could increase overtime


// create array with 5 ramdon integers
//to be used as index to SHUFFLE through the teachersDatabase

let sixRamdonIndexes = [];
sixRamdonIndexes.push(random(0, 14));

while (sixRamdonIndexes.length < 6) {
  let ramdonIndex = random(0, 14);
  if (sixRamdonIndexes.includes(ramdonIndex) == false) {
    sixRamdonIndexes.push(ramdonIndex);
    console.log(sixRamdonIndexes);
  }
};

// ----------------


let featTeachers = document.getElementById('feat-teachers');

//Section heading
let h2 = document.createElement('h2');
h2.className = 'card-heading';
h2.textContent = 'Our Amazin Teachers';
featTeachers.appendChild(h2);

// create a card-gird ul list for teachers
let ul = document.createElement('ul');
ul.id = 'teachers-grid';
featTeachers.appendChild(ul);




// create a card li items

for (let i = 0; i < 6; i++) {


  let li = document.createElement('li');
  li.id = 'teachers-card';
  ul.appendChild(li);

  // create elements & put in the cards li

  // card image
  let img = document.createElement('img');
  img.src = teachersDatabase[sixRamdonIndexes[i]].image;
  li.appendChild(img);

  //div for card info
  let div = document.createElement('div');
  div.className = 'card-info';
  li.appendChild(div);

  // heading - teacher NAME
  let h3 = document.createElement('h3');
  h3.className = 'card-heading';
  h3.textContent = teachersDatabase[sixRamdonIndexes[i]].name;
  div.appendChild(h3);

  // sub-heading "teacher highlight"
  let p = document.createElement('p');
  p.className = 'teacher-highlight';
  p.textContent = teachersDatabase[sixRamdonIndexes[i]].highlight;
  div.appendChild(p);

  //short description
  p = document.createElement('p');
  p.className = 'card-para';
  p.textContent = teachersDatabase[sixRamdonIndexes[i]].description;
  div.appendChild(p);
}