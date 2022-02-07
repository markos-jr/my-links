import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LinkItem from './components/LinkItem';
import Error from './pages/Error';

import Home from './pages/Home';
import Links from './pages/Links';



const RoutesApp  = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path= '/' element={<Home/>} />
                <Route path= '/Links' element={<Links/>} />
                <Route path= '*' element={<Error/>} />
                
                

                

            </Routes>     

        </BrowserRouter>
      );
}
 
export default RoutesApp ;