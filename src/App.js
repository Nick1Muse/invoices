import React from 'react';
import InvoicesList from "./containers/InvoicesList/InvoicesList";
import InvoicesCreator from "./containers/InvoiceCreator/InvoiceCreator";
import Layout from './hoc/Layout/Layout';
import './App.css';
import {Route} from 'react-router-dom';

function App() {
  return (
    <Layout>
        {/*<InvoicesList/>*/}
        {/*/!*<InvoicesCreator />*!/*/}

        <Route path='/' exact component={InvoicesList}/>
        <Route path='/createInvoice' component={InvoicesCreator}/>
    </Layout>
  );
}

export default App;
