
import  {Component} from 'react'

class App  extends  Component {
    render() {
        return (
         <p>Hola Mundo</p>
        )
    }
}


export default App


// import Button from "./Button"

// const arr = [
// 'Chanchito Feliz',
// 'Chanchito Feliz',
// 'Chanchito Feliz',
// ]
// // Reutilizar componentes con estilo 
// const App =  () => { 
//     const miVariable = false

//     if (miVariable) {
//         return  <p>Mi variable dio True </p>
//     }
//     return (    
//      <div>
//         <h1 onClick={( e) => console.log('click', e)}>Hola mundo 
//             </h1> 
//                 {arr.map(el => <p key={el}>{el}</p>)}
//         <Button onClick = { () => console.log('Clikeado')}> 
//             Enviar
//         </Button>

//      </div>
//     )
// }