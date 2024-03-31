import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './components/Register'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Offre from './components/Offre'
import HomeScreen from './screen/HomeScreen'
import OffreScreen from './screen/OffreScreen'
import AddOffreScreen from './screen/AddOffreScreen'
import AddPostuleScreen from './screen/AddPostuleScreen'
import Postule from './components/Postule'
import PostuleScreen from './screen/PostuleScreen'
import Login from './components/Login'
import ChoixScreen from './screen/ChoixScreen'



function App() {
  return (
    <div className="app">
    <Router>

     <Header/>

     <main className="py-3">

     <Container>

       <switch>

       <Route path='/'                                  component={HomeScreen}       exact/>
       <Route path='/offre/:id/'                        component={OffreScreen}      exact/>
       <Route path='/offres/add/:namecampany'           component={AddOffreScreen}   exact/>
       <Route path='/register'                          component={Register}         exact/> 
       <Route path='/login'                             component={Login}            exact/>
       <Route path='/offre'                             component={Offre}            exact/>
       <Route path='/addpostulescreen/:id/:namecampany' component={AddPostuleScreen} exact/>
       <Route path='/postule'                           component={Postule}          exact/>
       <Route path='/postulescreen/'                    component={PostuleScreen}    exact/>
       <Route path='/choix/:namecampany'                component={ChoixScreen}      exact/>
       
     </switch>


     </Container>
     
     </main>
     <Footer />
       
    </Router>
    </div>
  );
}

export default App;
