
const Button = ({text, color, onclick}) => {
  return (
    <button onClick ={onclick} style = {{backgroundColor: color}}className='btn'>{text}</button>

  )
}
// Button.defaultProps = {
//     text: 'Default text',
// }   
export default Button
