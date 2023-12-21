const question  = document.querySelectorAll('.question');
const pregunta      = document.querySelectorAll('.pregunta');

// Cuando CLICK en h2,
  // QUITAR la clase activo de TODOS los bloque
  // Vamos a añadir la clase activo al BLOQUE con la POSICION del h2


// Recorresr TODOS los h2  
pregunta.forEach( ( cadaPregunta , i )=>{
  // Asignando un CLICK a cada h2
  pregunta[i].addEventListener('click', ()=>{
    // Recorrer TODOS los bloque
    question.forEach( ( cadaQuestion , i )=>{
      // Quitamos la clase activo de TODOS los bloque
      question[i].classList.remove('activo')
    })
    // Añadiendo la clase activo al bloque cuya posición sea igual al del h2
    // (Linea número 10)
    question[i].classList.add('activo')

  })
}) 