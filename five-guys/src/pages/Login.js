import fiveguys from '../images/fiveguys-logo.webp'
import envelope from '../images/envelope.png'
import lock from '../images/lock.png'
import restaurant from '../images/five-restaurant.png'
import '../Login.css';
const LoginPage = () => {
    //Funciones
    return ( 
        <body>
            <div className='bg-light d-flex justify-content-center align-items-center vh-100 w-50'>
           <div className='bg-white p-5 rounded-5'>
            <div className='d-flex justify-content-center'>
                <img src={fiveguys} alt="five guys logo" style={{
                    width: 120,
                    height: 75,
                }} />
            </div>
            <div style={{width: '20rem'}}>
                <h3 className='fw-bold'>Hello Again!</h3>
                <h6 className='text-secondary'>Welcome Back</h6>
            </div>
            <div className='input-group mt-4'>
                <div className='input-group-text border border-danger'>
                    <img src={envelope} alt="envelope"  style={{
                    width: 20,
                    height: 20,
                }}/>
                </div>
                <input className='form-control border border-danger' type="text" placeholder='Username'/>
            </div>
            <div className='input-group  mt-2'>
                <div className='input-group-text border border-danger'>
                    <img src={lock} alt="lock"  style={{
                    width: 20,
                    height: 20,
                }}/>
                </div>
                <input className='form-control border border-danger' type="password" placeholder='Password'/>
            </div>
            <div className='d-flex justify-content-around' >
                <a href="www.google.com" className='pt-2 text-decoration-none text-secondary fw-light ForgotPassword'>Forgot Password?</a>
            </div>
            <div className='btn bg-danger text-white w-100 mt-4 rounded-5'>Login</div>
            <div className=' d-flex justify-content-around'>
                <a href="/pin" className='text-danger mt-4 ContinuePin'>Continue with PIN</a>
            </div>
        </div> 
        </div>
        <div className='ml-auto'>
            <img src={restaurant} alt="restaurant" />
        </div>
        </body> 
     );
}
 
export default LoginPage;