import logo from './logo.svg';
import './App.css';
  
//Agregando estilo a los componentes con inline style

// Agregamos estilo con objetos js 
const estilo2 = {
  boxShadow: '0  5px  3px rgba( 0 ,0 ,0 , 0.5) '
}
const estilo = ( { bg  = '#889'}) => ({
  backgroundColor:   bg, 
  color: '#fff',
  padding: ' 10px 15px',
  margin: '10px 15px '
})
const Li = ({  children }) => {
  return (
    <li style= { {...estilo2, ...estilo( { bg : '#333'}) }}
    className = 'CLase-Li'>{children}</li>
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
