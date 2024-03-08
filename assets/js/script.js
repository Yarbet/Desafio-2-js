// Pregunta 1
const image = document.getElementById('myImage');

let hasBorder = false;

image.addEventListener('click', () => {
  if (!hasBorder) {
    image.style.border = '2px solid red';
    hasBorder = true;
  } else {
    image.style.border = '';
    hasBorder = false;
  }
});



// pregunta 2
const stickers = [
    document.getElementById('sticker1'),
    document.getElementById('sticker2'),
    document.getElementById('sticker3')
  ];
  
  const messageElement = document.getElementById('message');
  
  function validateInput(input) {
    const value = parseInt(input.value, 10);
  
    if (isNaN(value) || value < 0 || value > 10) {
      input.setCustomValidity('Ingrese un valor entre 1 y 10');
    } else {
      input.setCustomValidity('');
    }
  }
  
  function updateMessage() {
    let total = 0;
  
    for (const sticker of stickers) {
      const value = parseInt(sticker.value, 10);
      total += value;
    }
  
    if (total <= 10) {
      messageElement.textContent = `Llevas ${total} stickers`;
    } else {
      messageElement.textContent = 'Llevas demasiados stickers';
    }
  }
  
  for (const sticker of stickers) {
    sticker.addEventListener('input', () => {
      validateInput(sticker);
      updateMessage();
    });
  }
  
  updateMessage();


  //Pregunta 3

const passwordSelect1 = document.getElementById('passwordSelect1');
const passwordSelect2 = document.getElementById('passwordSelect2');
const passwordSelect3 = document.getElementById('passwordSelect3');
const ingresarButton = document.getElementById('ingresarButton');
const mensajeElement = document.getElementById('message');

function checkPassword(password) {
  if (password === '911') {
    return 'password 1 correcto';
  } else if (password === '714') {
    return 'password 2 correcto';
  } else {
    return 'password incorrecto';
  }
}

ingresarButton.addEventListener('click', () => {
  const password = `${passwordSelect1.value}${passwordSelect2.value}${passwordSelect3.value}`;
  mensajeElement.textContent = checkPassword(password);
});

