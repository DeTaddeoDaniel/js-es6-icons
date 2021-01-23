// Aggiungere i colori ad ogni categoria: 
// - blue per gli animali, 
// - orange per i vegetali
// - viola per gli utenti. 

// Prendete i colori da un altro array.

// Stampare poi tutte le icone utilizzando il template literal.

// Stampare quindi nella select tutti i tipi che avete in precedenza selezionato (animal, vegetable, icon).

// Filtrare i risultati in base alla categoria (ricordate di svuotare il container).

// Utilizzate forEach, map e filter e cercate di strutturare tutto con le funzioni.

const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    }
  ];

const categoria = ['animal', 'vegetable', 'user']
const color = ['--card-blue','--card-orange','--card-purple']
const iconList = document.getElementById('iconsList')
const filter = document.getElementById('categoria')
const search = document.getElementById('search')
const numIcon = document.getElementById('numberIcon')

document.addEventListener('DOMContentLoaded', function () {
  console.log('-- page load --')
  filterArray()

  filter.addEventListener('change', () => {
    console.log('-- change filter --')
    filterArray()
  })

  search.addEventListener('input', () => {
    console.log('-- change search--')
    filterArray()
  })

})

// filtro elementi categoria
function filterArray(){
  console.log('-- filter function --');
  const valueFiltrer = filter.value;
  const valueSearch = search.value;
  // console.log(valueSearch)

  let iconsFilter = icons.filter( icon => {
    if (icon.type == valueFiltrer|| valueFiltrer == 'all'){
      return icon;
    }
  });

  iconsFilter = iconsFilter.filter( icon => {
    if (icon.name.includes(valueSearch) || valueSearch == ''){
      return icon;
    }
  });

  console.log(iconsFilter);
  addColor(iconsFilter);
}

// aggoungi icon il colore
function addColor(inputArray){
  console.log('-- add color --')

  const iconWithColor = [];
  
  inputArray.forEach( icon => {
    const indexColor = categoria.indexOf(icon.type);
    // console.log(indexColor)

    const colorImage = color[indexColor]
    // console.log(colorImage)
    
    iconWithColor.push(
      { ...icon, colorImage}
    )

  });

  console.log(iconWithColor)
  printCard(iconWithColor)
}

function printCard(icons) {

  console.log('-- print function --')

  numIcon.innerText = icons.length;
  console.log(icons.length)
  
  // reset lista dinamica
  iconList.innerHTML = '';
  
  // inserimento lista dinamica
  icons.forEach(icon => {
    const {name, prefix, type, family, colorImage} = icon

    // console.log(icon)

    let card = /*html*/ `
      <div class='card'>
        <div class="content">
          <i 
              class="${family} ${prefix}${name}"
              style = 'color: var(${colorImage});'
            ></i>
          <p>${name}</p>
        </div>
      </div>
    `

    // console.log(card)

     iconList.innerHTML += card;
  });
}
