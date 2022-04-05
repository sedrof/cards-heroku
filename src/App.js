import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './hocs/layout';
import { Provider } from 'react-redux';
import store from './state/store';
import Login from './components/authenticate/SignIn';
import SignUp from './components/authenticate/Register';
import DataTable from './components/cards/ListTemplate';
import PrivateRoute from './components/authenticate/PrivateRoute';
import HomePage from './components/base/HomePage';
import MyCart from './components/cards/MyCart';
import MyCards from './components/cards/MyCards';
import Deposite from './components/cards/Deposite';
import Tickets from './components/cards/Tickets';
import TicketDetail from './components/cards/TicketDetail';
import addTicet from './components/cards/addTicet';



const App = () => {

  return (
  <Provider store={store}>
    <Router>
        <Layout>
      <Switch>
        
            <Route exact path="/login" component={Login}/>
           <PrivateRoute exact path="/" component={HomePage} />
           <PrivateRoute exact path="/user-tickets" component={Tickets} />
           <PrivateRoute exact path="/:id/tiket-detail" component={TicketDetail} />
           <PrivateRoute exact path="/list" component={DataTable} />
           <PrivateRoute exact path="/add-ticket" component={addTicet} />
           <PrivateRoute exact path="/my-cart" component={MyCart} />
           <PrivateRoute exact path="/my-cards" component={MyCards} />
           <PrivateRoute exact path="/deposite" component={Deposite} />
           <Route exact path="/signup" component={SignUp} />
        </Switch>
          </Layout>
      </Router>
  </Provider>

  );
};
export default App;




