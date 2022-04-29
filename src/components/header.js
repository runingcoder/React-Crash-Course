import { useLocation } from 'react-router-dom';
import Button from './button';
const Header = ({ title, addclick, addStatus}) => {
    const location = useLocation();
  return (
      <header className="header">
                 <h1 style={headerStyle}>{title}</h1>
{location.pathname === '/' && < Button
  text={addStatus? 'Close': 'Add'} 
 color={addStatus? 'red': 'green'} 
 onclick ={addclick}/>}
{/* <Button text='Update' color="blue"  onclick ={updateit}/>
<Button text='Delete' color="red"  onclick ={deleteit}/> */}

          {/* <h1 style ={headerStyle}>{anothertitle}</h1> */}
      </header>
  )
}

// const updateit = () =>{
//     console.log("updated");
// }
// const deleteit = () =>{
//     console.log("deleted");
// }
const headerStyle ={
    color: 'green',
    backgroundColor: "cyan",
}
Header.defaultProps = {
    title: 'Task Tracker',	
// anothertitle: 'React Task Tracker2',
}

export default Header
