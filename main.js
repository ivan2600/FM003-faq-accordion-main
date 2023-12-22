const question    = document.querySelectorAll('.question');
const pregunta    = document.querySelectorAll('.pregunta');
const activo      = document.querySelectorAll('.activo')

// Recorrer TODOS los pregunta  
pregunta.forEach( ( cadaPregunta , i )=>{
  // Asignando un CLICK a cada pregunta
  pregunta[i].addEventListener('click', ()=>{
    // Si el question CONTIENE la clase activo
    if (question[i].classList.contains('activo')) {
      // Borrar la clase activo
      question[i].classList.remove('activo')
    } else {
      // Si no la contiene, agregarla.
      question[i].classList.add('activo')
    }
        
  })
}) 