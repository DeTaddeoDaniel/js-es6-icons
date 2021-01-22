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

const categoria = ['animali', 'vegetali', 'utenti']
const color = ['--card-blue','--card-orange','--card-purple']
const iconList = document.getElementById('iconsList')

document.addEventListener('DOMContentLoaded', function () {
  console.log('-- page load --')
  printCard(icons)
})

function printCard(icons) {
  
  icons.forEach(icon => {
    const {name, prefix, type, family} = icon

    let card = /*html*/ `
      <div class='card'>
        <div class="content">
          <i class="${family} ${prefix}${name}"></i>
          <p>${name}</p>
        </div>
      </div>
    `

    console.log(card)

    iconList.innerHTML = iconList.innerHTML +card

  });
}
