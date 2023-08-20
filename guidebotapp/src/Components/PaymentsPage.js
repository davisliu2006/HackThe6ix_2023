
import '../../src/App.css';
import Button from 'react-bootstrap/Button';

function PaymentsPage() {

    return (
       <div className='fade-in'>

        <text style={{

            fontSize:'40px',
            position:'absolute',
            left:'24%',
            top:'20%',
            fontWeight:'bold',
            color:'#3494f4'
        }}>
        GuideBot is available for purchase now!
        </text>

        <Button variant='primary' style={{
            backgroundColor:'#3494f4',
            width:'300px',
            height:'70px',
            borderRadius:'15px',
            position:'absolute',
            left:'38%',
            right:'50%',
            top:'60%' ,
            fontSize:'25px'  
        }}>Order Now!</Button>
       </div>
    )
    
}

export default PaymentsPage;