import { FiLink } from "react-icons/fi";
import "./Home.css";

import Menu from '../../components/Menu'

const Home = () => {
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
          <input placeholder="Cole seu link aqui..." />
        </div>

        <button>Gerar link</button>
        
      </div>
      <Menu/>
    </div>
  );
};

export default Home;
