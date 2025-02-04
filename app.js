// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar nombres de amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  let amigoInput = document.getElementById('amigo');
  let amigoNombre = amigoInput.value.trim();

  // Validar la entrada
  if (amigoNombre === '') {
    alert('Por favor, inserte un nombre.');
    return;
  }

  // Actualizar el array de amigos
  amigos.push(amigoNombre);

  // Limpiar el campo de entrada
  amigoInput.value = '';

  // Actualizar la lista de amigos
  actualizarAmigos();
}

// Función para actualizar la lista de amigos
function actualizarAmigos() {
  // Obtener el elemento de la lista
  let listaAmigos = document.getElementById('listaAmigos');

  // Limpiar la lista existente
  listaAmigos.innerHTML = '';

  // Iterar sobre el arreglo
  for (let i = 0; i < amigos.length; i++) {
    // Agregar elementos a la lista
    let elementoLista = document.createElement('li');
    elementoLista.textContent = amigos[i];
    listaAmigos.appendChild(elementoLista);
  }
}

// Función para sortear amigos
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert('No hay amigos disponibles para sortear.');
    return;
  }

  // Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  let amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado
  let resultadoElemento = document.getElementById('resultado');
  resultadoElemento.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}

