import React, {useState,useEffect} from 'react'
import { Button, Form,Image,Alert,Modal} from 'react-bootstrap'
import { LinkContainer,Link,location } from 'react-router-bootstrap'
import Cnx from '../images/cnx.jpg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router-dom'

function Login() {

  
   
  //DATA RECRUTERS//////////////////////////////////////////////////////////
  const [recruters,setRecruters]=useState([])

  useEffect(()=>{
      async function fetchRecruters(){
          const{data}=await axios.get('/api/recruters')
          
          setRecruters(data)
      }
      fetchRecruters();
  },)
  //////////////////////////////////////////////////////////////////////////
  
//FONCTION LOGIN////////////////////////////////////////////////////////////
let usrid;
function LoginTo(){
  var e=document.getElementById("email").value;
  var p=document.getElementById("password").value;

 recruters.forEach(element => {
   if(e==element.email && p==element.password){

    usrid=element.id;
   
    toast.success(`connexion réussie : ${element.email}`,
    {onClick:()=>{window.location.href=`/choix/${element.namecampany}`;},
    progress:0,
    hideProgressBar:true,
    position: "top-center",
    autoClose: 9000,})
                   
   }
   
 });

 

  
 
}
//FIN FONCTION LOGIN////////////////////////////////////////////////////////




    return (
        <div>
          <Alert variant="warning">
  <Alert.Heading>Imporatant</Alert.Heading>
  <p>
   Il est obligatoire de s'autentifier pour ajouter votre offre et consulter la liste des cadidats
  </p>
 
</Alert>
             <Image src={Cnx} fluid />

             {/* FORMULAIRE LOGIN */}
            <Form  >
  <Form.Group >
    <Form.Label>Adresse email</Form.Label>
    <Form.Control type="email" id="email" name="email" placeholder="Entrer votre adresse email" />
    <Form.Text className="text-muted">
      Ne partagez pas votre identification.
    </Form.Text>
  </Form.Group>

  <Form.Group >
    <Form.Label>Mot de passe</Form.Label>
    <Form.Control type="password" id="password" name="password" placeholder="**********" />
  </Form.Group>
 
  {/* <LinkContainer to="/choix"> */}
  <Button variant="primary"  onClick={LoginTo.bind()}>
    Se connecter <i class="fas fa-lock-open"></i>
  </Button>
  <ToastContainer ></ToastContainer>
  {/* </LinkContainer> */}
  
  
</Form>

{/* FIN FORMULAIRE */}

<hr></hr>

<LinkContainer to="/register">
<Button variant="outline-success"  >
    Crrer un nouveau compte ! 
  </Button>
</LinkContainer>



        </div>
    )
}

export default Login
