//Importar as dependências
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importar as páginas
import Home from './views/Home';
import Categories from './views/Categories';
import Cart from './views/Cart';

//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/categories" component={Categories} />
                <Route path="/cart" component={Cart} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;