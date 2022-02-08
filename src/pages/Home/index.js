import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./Home.css";


import LinkItem from "../../components/LinkItem";
import Menu from '../../components/Menu';
import {saveLink} from '../../services/storeLinks';

import api from '../../services/api';

const Home = () => {
  const [link, setLink] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  
   async function handeleShort(){
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })

       setData(response.data);
       setShowModal(true);
       saveLink('@encurtalink', response.data)
       setLink('');

    }catch{
      alert('PREENCHA O CAMPO VAZIO!')
      setLink('');
    }
  }

  return (
    <div class="container-home">

      <div className="logo">
        <img src="/logo.png" alt="My links logo" />
        <h1>MyLinks</h1>
        <span>Cole seu link para encurtar</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input  placeholder="Cole seu link aqui..." 
                  value={link}
                  onChange={(e) => setLink(e.target.value)}/>
                 
                  
            
        </div>

        <button onClick={handeleShort}>Gerar link</button>
        
      </div>
       
      <Menu/>

     {showModal &&  
     (<LinkItem
       closeModal={() => setShowModal(false)}
       content={data}

     />
     )}
     

      
    </div>
  );
};

export default Home;
