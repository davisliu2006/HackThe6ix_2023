import './App.css';
import NavBar from './Components/NavBar';
import Button from 'react-bootstrap/Button';

function App() {
  return (

    <div>
      <NavBar />

      <text style={{
        position:'absolute',
        left:'5%',
        top:'15%',
        color:'#3494f4',
        fontSize:"130px"
      }}>
        <text style={{
          fontSize: '200px',
          fontWeight:'bold'
        }}>
        G
        </text>
        uideBot
      </text>

      <text style={{
        position:'absolute',
        left:'6%',
        top:'50%',
        fontSize:"30px"

      }}>
        Reimaging urban center commutes for the visually-impaired population
      </text>
      
      <Button variant="primary" style={{
        backgroundColor:'#3494f4',
        fontSize:"20px ",
        borderRadius:"15px",
        position:'absolute',
        left:"6%",
        top:"60%",
        width:"250px",
        height:"60px"
      }}>See Demo</Button>{''}
        
      </div>
  

  );
}

export default App;
