import './Button.css'
/*componente reutilizado con sus estilos utilizando childrens */
const Button = ( props) => { 
    return (
         <button  {...props}className =  'btn'/>

    )
}
export default Button