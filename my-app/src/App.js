import logo from './logo.svg';
import './App.css';
  
//Agregando estilo a los componentes con inline style
const estilo = (bg='#333' ) => ({
  backgroundColor:   bg, 
  color: '#fff',
  padding: ' 10px 15px',
  margin: '10px 15px '
})
const Li = ({  children }) => {
  return (
    <li style={estilo ( '#457')} className = 'CLase-Li'>{children}</li>
  )
}

// Anatomía de un componente 
function Boton () {
  return (
    <button>Yo soy un botón</button>
  )
} 
// Con arrow function 
const BotonArrow = () => {
  return <button>Yo soy un botón con Arrow Function </button>
}
const  App  =   ( ) =>  {
  const  valor = 'Triste'
  return (
    <>
     <ul style= {estilo('#333')} className = "CLase-css">  
        <Li estado = 'Feliz'>Valor de LI </Li>
     </ul>
     <Boton />
     <BotonArrow />
    </>
  ); 
}

export default App;
