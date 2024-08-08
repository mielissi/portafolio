// alert("Hola Mundo<3"); -- prueba de que js está conectado.

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

//reconoces una acción porque tiene paréntesis después del nombre de la acción, a veces tiene el operador punto " . "
typewriter
  .pauseFor(2500) //valor en milisegundos - 2500 igual a 2.5 segundos. 
  .typeString('Melissa Romero')
  .pauseFor(400)
  .deleteAll()
  .typeString('Economista')  
  .pauseFor(400)
  .deleteAll()
  .typeString('Desarrolladora Front-End Jr')
  .pauseFor(1000)
  .start();

  async function copiarAlPortapapeles(texto) {
    try {
      await navigator.clipboard.writeText(texto);
      alert('Texto copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  }
