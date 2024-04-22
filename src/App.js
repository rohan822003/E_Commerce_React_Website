import './App.css';
import Header from './Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Cart from './Cart';
import Shop from './Shop';
import './Header.css'
import './shop.css';
import './Cart.css';

import { ShopContextProvider } from './context/shop-context';
import { FrameContextProvider } from './context/frame-context';
import { BagContextProvider } from './context/bags-context';
import { WallDecorContextProvider } from './context/walldecor-context';
import { BucketContextProvider } from './context/bucket-context';

import Login from './Login';
import Registration from './Registration';
import { Auth0Provider } from '@auth0/auth0-react';
import Category1 from './Cframe';
import Category2 from './Cbag';
import Category3 from './Cwalldecor';
import Category4 from './Cbucket';

function App() {
  return (
    <div className="App">
      <Auth0Provider
    domain="dev-hgforxvrpogbyyvv.us.auth0.com"
    clientId="KULTZOiXniUADR8XGC5ylRfbOyFPj5Sz"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <BucketContextProvider>
      <WallDecorContextProvider>
      <BagContextProvider>
      <FrameContextProvider>
      <ShopContextProvider>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Registration />}/>
        <Route path="/frame" element={<Category1 />}/>
        <Route path="/bag" element={<Category2 />}/>
        <Route path="/walldecor" element={<Category3 />}/>
        <Route path="/bucket" element={<Category4 />}/>
      </Routes>
      </Router>
      </ShopContextProvider>
      </FrameContextProvider>
      </BagContextProvider>
      </WallDecorContextProvider>
      </BucketContextProvider>
      
      </Auth0Provider>
    </div>
  );
}

export default App;