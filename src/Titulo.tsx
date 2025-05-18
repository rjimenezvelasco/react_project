function Titulo() {
  // jsx traduce el html a js
  // tsx es un tipo de archivo que permite escribir html dentro de js
  const nombre = "";

  if (nombre) {
    return <h1 >Hola {nombre}</h1>;
  } else {
    return <h1>Hola Mundo desde el Componente</h1>;
  }
}

export default Titulo;
