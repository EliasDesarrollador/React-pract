
// Fundamentos de React
// Creación y anidamiento de componentes 
//  Las aplicaciones React están hechas de componentes. Un componente es una parte de la interfaz de usuario que tiene su propia lógica y apariencia.
//  Un componente puede ser tan pequeño como un botón o tan grande como una página entera.
//  Los componentes de React son funciones de JavaScript que devuelven marcado:
// Ejemplo 1: 
function MyButton() {
  return (
      <button> Soy un boton </button>
  );
}

// Creación y anidamiento de componentes 
export default function MyApp(){
  return (
      <div>
          <h1>Bienvenido a mi app</h1>
          <MyButton/>
      </div>
  )

}
