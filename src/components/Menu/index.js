
import './menu.css';

import {BsYoutube, BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Menu = () => {
    return ( 
        <div className='menu'>
            <a className='social' href='https://www.youtube.com/channel/UCTSFaf8mhowno_9YJdXG18Q'> <BsYoutube size={24} color='#FFF'/></a>

            <a className='social' href='https://www.instagram.com/omarkusjr/'> <BsInstagram size={24} color='#FFF'/></a>

            <Link className='menu-links' to='/links'>Meus Links</Link>
        </div>

     );
}
 
export default Menu;
