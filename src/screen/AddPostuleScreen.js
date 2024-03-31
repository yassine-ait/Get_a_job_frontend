
import {  Button, Form,Image, Badge,Container,Row,Col,Dropdown } from 'react-bootstrap'
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Logo from '../images/21259.jpg'

function AddPostuleScreen({match}) {
    const [offre,setOffre]=useState([])

    useEffect(()=>{
        async function fetchOffre(){
            const{data}=await axios.get(`/api/offres/${match.params.id}`)
            setOffre(data)
            
        }
        fetchOffre()
    })

    
    const initialPostuleState={
        
        id:null,
        nom:"",
        prenom:"",
        email:"",
        motivation:"",
        cvfile:null,
        idoffre:`${match.params.id}`,
        namecampany:`${match.params.namecampany}`,   
    };
    const [postule,setPostule]=useState(initialPostuleState);

    function handlePostuleChange(e){
        const {name,value}=e.target;
        setPostule({...postule,[name]:value});
        console.log(postule);
      }

      function handleCvChange(e){
        setPostule({...postule,cvfile:e.target.files[0]});
        console.log(postule);
      }

      function submitPostule(){
        alert('Postule avec succée')
        let form_data=new FormData();
        form_data.append("nom",postule.nom);
        form_data.append("prenom",postule.prenom);    
        form_data.append("email",postule.email);
        form_data.append("motivation",postule.motivation);
        form_data.append("cvfile",postule.cvfile,postule.cvfile.name);  
        form_data.append("idoffre",postule.idoffre);
        form_data.append("namecampany",postule.namecampany);

        
        axios.post("/api/postules/",form_data).then((response)=>{
        setPostule({
        id:response.data.id,
        nom:response.data.nom,
        prenom:response.data.prenom,
        email:response.data.email,
        motivation:response.data.motivation,
        cvfile:response.data.cvfile,
        idoffre:response.data.idoffre,
        namecampany:response.data.namecampany,
    
        });
      }).catch(function(e) {
        alert('erreur dajout !!')
        console.error(e.message)});
      setPostule(form_data);
      }



    return (
        <div>
            
            <Container className="mt-5">
            <Row>
            

                <Col lg={5} md={4} sm={8} className="text-center mt-5 p-3" style={{backgroundColor:'#deeeea',borderRadius:'8px'}}>
                <Form onSubmit={submitPostule}>
                    <img  width="100px" src={offre.image} alt=""/>
                    <h4 style={{color:"green"}}>{offre.name}</h4>
                    <hr></hr>
  <Form.Group className="mb-3" controlId="nom">
    <Form.Label>Nom</Form.Label>
    <Form.Control type="text" name="nom" placeholder="Entrer votre nom" onChange={handlePostuleChange} />   
  </Form.Group>

  <Form.Group className="mb-3" controlId="prenom">
  <Form.Label>Prénom</Form.Label>
    <Form.Control type="text" name="prenom" placeholder="Entrer votre prenom" onChange={handlePostuleChange}  />    
  </Form.Group>

  <Form.Group className="mb-3" controlId="email">
  <Form.Label>email</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" onChange={handlePostuleChange}  />    
  </Form.Group>

  <Form.Group className="mb-3" controlId="motivation">
  <Form.Label>Lettre de motivation</Form.Label>
    <Form.Control type="textarea" name="motivation" onChange={handlePostuleChange}   />    
  </Form.Group>

  <Form.Group controlId="cvfile">
 <Form.Label>importer cv: </Form.Label>
 <Form.File id="cv-file" name="cvfile" label="choisir fichier" custom onChange={handleCvChange} >
 </Form.File>
</Form.Group>

<Form.Group as={Col} controlId="idoffre">
      <Form.Label>Offre</Form.Label>
      <Form.Control as="select" name="idoffre" defaultValue="Choose..." onChange={handlePostuleChange}>
      <option>Choisire...</option>
        <option>{offre.name}</option>
      
      </Form.Control>
    </Form.Group>


  
  <Button variant="primary" type="submit">
    Postuler
  </Button>
</Form>
                </Col>

                <Col lg={7} md={6} sm={8}>
                <img className="w-100" src={Logo} alt=""/>
                </Col>

                </Row>
                </Container>
           
        </div>
    )
}

export default AddPostuleScreen
