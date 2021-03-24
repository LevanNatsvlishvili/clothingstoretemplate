import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from 'common/@mui';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { ThemeProvider } from '@material-ui/styles';
import Header from 'Layout/Header/Header';
import Layout from 'Layout';
import { RenderRoutes } from 'Routes';
import Modules from 'Modules/Modules';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <RenderRoutes />
          <Modules />
        </Layout>
      </Router>
    </ThemeProvider >

  );
}

{/* <Route exact path='/clothingstore/' component={HomePage}></Route>
        <Route exact path='/clothingstore/Login' component={Login}></Route>
        <Route exact path='/clothingstore/Cart' component={Cart}></Route>
        <Route exact path='/clothingstore/Checkout' component={Checkout}></Route>
        <Route exact path='/clothingstore/Orders' component={Orders}></Route>
        <Route exact path='/clothingstore/Product:id' component={Product}></Route>
        <Route exact path='/clothingstore/:Category/Product:id' component={Product}></Route>
        <Route exact path='/clothingstore/Wishlist' component={Wishlist}></Route>
        <Route exact path='/clothingstore/:Category' component={Catalog}></Route>
        <Route exact path='/clothingstore/:Category/:SubCategory' component={Catalog}></Route>
        <Route component={ErrorPage}></Route> */}


export default App;