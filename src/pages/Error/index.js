import './error.css'

import { Link } from 'react-router-dom';


const Error = () => {
    return ( 
        <div className='container'>
            <img src='error.png'  alt='Página não encontrada :('></img>
            <h1>Página não encontrada :(</h1>
            <Link to='/' className='voltar'>
            
             Voltar para Home    

            </Link>
            
        </div>
     );
}
 
export default Error;