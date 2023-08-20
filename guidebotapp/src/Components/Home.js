import NavBar from '../Components/NavBar';
import Button from 'react-bootstrap/Button';
import PedImage from '../Assets/ped.jpeg';
import Section from './Section';
import Part from '../Assets/part.jpeg';
import '../App.css'


function Home() {

    return (

       <div  className='fade-in'>

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

<Section/>
<img src={PedImage} alt="Urban center" width='500px' style={{
  position:'absolute',
  top:'90%',
  left:'60%'
}}/>
<Section/>

<text style={{
  position:'absolute',
  left:'6%',
  fontSize:'65px',
  color: '#3494f4',
  top:'80vh',
  fontWeight:'bold'
}}>What is GuideBot?</text>
<Section/>

<text style={{
  position:'absolute',
  left:'6.5%',
  top:'95.5vh',
  width:'600px',
  fontSize:'20px'
}}>
  A early-warning system for visually impaired individuals to avoid incidents involving motorists in urban and dense cities. 

  <ul style={{
    position:'absolute',
    top:'10vh',
    fontSize:"20px"
  }}>
     <p/>
    <li>
      Intelligent depth sensing to predict potential collisions
    </li>
    <p/>
    <li>
      High-powered motors and long-lasting battery for optimal convenience
    </li>
    <p/>
    <li>
      Gives audible and other sensory cues to assist visually impaired individuals
    </li>
  </ul>
</text>

<text style={{
  position:'absolute',
  left:'53%',
  fontSize:'65px',
  color: '#3494f4',
  top:'140vh',
  fontWeight:'bold'
}}>How it works?</text>

<img src={Part} alt="Urban center" width='550px' style={{
  position:'absolute',
  top:'145%',
  left:'6%'
}}/>

<text style={{
  fontSize:"20px",
  position:"absolute",
  top:"157vh",
  left:'53%',
  width:"630px"
}}>
Uses various sensors and motors to effecitvely navigate city intersections while ensuring accurate depth perception.

<ul style={{
    position:'absolute',
    top:'8 vh',

    fontSize:"20px"
  }}>

    <li>
      Intelligent depth sensing to predict potential collisions
    </li>
    <p/>
    <li>
      High-powered motors and long-lasting battery for optimal convenience
    </li>
    <p/>
    <li>
      Gives audible and other sensory cues to assist visually impaired individuals
    </li>
  </ul>
</text>

</div>





);

}


export default Home;



