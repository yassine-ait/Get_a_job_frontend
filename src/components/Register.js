
import React, {useState} from 'react'
import { Button, Form,Image,Col} from 'react-bootstrap'
import Offre from '../images/offre.jpg'
import {LinkContainer} from 'react-router-bootstrap'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';




function Register() {
  
  
    const initialRecruterState={
        id:null,
        nom:"",
        prenom:"",
        email:"",
        password:"",
        civilite:"",
        telephone:"",
        namecampany:"",
       
    };
    const [recruter,setRecruter]=useState(initialRecruterState);

    function handleRecruterChange(e){
      const {name,value}=e.target;
      setRecruter({...recruter,[name]:value});
      console.log(recruter);
    }

    function submitRecruter(){
      
      let form_data=new FormData();
      form_data.append("nom",recruter.nom);
      form_data.append("prenom",recruter.prenom);
      form_data.append("email",recruter.email);
      form_data.append("password",recruter.password);
      form_data.append("civilite",recruter.civilite);
      form_data.append("telephone",recruter.telephone);
      form_data.append("namecampany",recruter.namecampany);
   
      toast.success('Ajout de recruteur avec succée')
      axios.post("/api/recruters/",form_data).then((response)=>{
        
      setRecruter({
      id:response.data.id,
      nom:response.data.nom,
      prenom:response.data.prenom,
      email:response.data.email,
      password:response.data.password,
      civilite:response.data.civilite,
      telephone:response.data.telephone,
      namecampany:response.data.namecampany,
     
      });
     
    }).catch(function(e) {
      alert('erreuuur')
      console.error(e.message)});
    setRecruter(form_data);
    }



    return (
        <div>
          <Form >
          <Image src={Offre} fluid />
          </Form>
          
          
            <Form onSubmit={submitRecruter}>
            <ToastContainer></ToastContainer>

            <Form.Row>
    <Form.Group as={Col} controlId="civilite">
      <Form.Label>Civilité*</Form.Label>
      <Form.Control as="select" name="civilite" defaultValue="Choose..." onChange={handleRecruterChange}>
        <option>Choisir...</option>
        <option>Mr</option>
        <option>Mme</option>
        <option>Mlle</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="nom">
      <Form.Label>Nom*</Form.Label>
      <Form.Control type="text" name="nom" placeholder="Votre nom de famille" onChange={handleRecruterChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="prenom">
      <Form.Label>Prénom*</Form.Label>
      <Form.Control type="text" name="prenom" placeholder="Votre prénom" onChange={handleRecruterChange} />
    </Form.Group>

   
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="email">
      <Form.Label>Adresse email*</Form.Label>
      <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleRecruterChange} />
    </Form.Group>

    <Form.Group as={Col} controlId="password">
      <Form.Label>Mot de passe* <i class="fas fa-key"></i>

</Form.Label>
      <Form.Control type="password" name="password" placeholder="*********" onChange={handleRecruterChange} />
    </Form.Group>

    <Form.Group as={Col} controlId="namecampany">
      <Form.Label>Nom de l'entreprise* 

</Form.Label>
      <Form.Control type="text" name="namecampany" placeholder="Nom de l'entreprise" onChange={handleRecruterChange}/>
    </Form.Group>
  </Form.Row>

  
  <Form.Row>
  <Form.Group controlId="telephone">
    <Form.Label>Telephone*</Form.Label>
    <Form.Control name="telephone" placeholder="+212 6 ********" onChange={handleRecruterChange}/>
  </Form.Group>

 
  </Form.Row>

  <Button variant="primary" type="submit">
   Inscription <i class="fas fa-check"></i>
  </Button>

 
</Form>
<hr></hr>

<LinkContainer to="/login">
<Button variant="outline-success" type="submit">
    Vous avez déja un compte ! 
  </Button>
  
</LinkContainer>

        </div>
    )
}

export default Register
