
import {  Button, Form,Image, Badge,Col } from 'react-bootstrap'
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Logo from '../images/getjoblogo.png'

function AddOffreScreen({match}) {

  const [recruter,setRecruter]=useState([])

  useEffect(()=>{
      async function fetchRecruter(){
          const{data}=await axios.get(`/api/recruters/${match.params.namecampany}`)
          setRecruter(data)
      }
      fetchRecruter()
  })


  var today = new Date();
  console.log(today)
    const initialOffreState={
        id:null,
        name:"",
        image:null,
        namecampany:`${match.params.namecampany}`,
        region:"",
        description:"",
        category:"",
        typetime:"Full time",
        experience:"",
        diplome:"",
        salaire:"",
        contrat:"",
    };
    const [offre,setOffre]=useState(initialOffreState);
    
    function handleOffreChange(e){
      const {name,value}=e.target;
      setOffre({...offre,[name]:value});
      console.log(offre);
    }

    function handleImageChange(e){
      setOffre({...offre,image:e.target.files[0]});
      console.log(offre);
    }

    function submitOffre(){
      alert('Ajout avec succée')
      let form_data=new FormData();
      form_data.append("name",offre.name);
      form_data.append("image",offre.image,offre.image.name);      
      form_data.append("namecampany",offre.namecampany);
      form_data.append("region",offre.region);
      form_data.append("description",offre.description);
      form_data.append("category",offre.category);
      form_data.append("typetime",offre.typetime);
      form_data.append("experience",offre.experience);
      form_data.append("diplome",offre.diplome);
      form_data.append("salaire",offre.salaire);
      form_data.append("contrat",offre.contrat);
      axios.post("/api/offres/",form_data).then((response)=>{
        alert('hehoo')
      setOffre({
      id:response.data.id,
      name:response.data.name,
      image:response.data.image,
      date:response.data.date,
      namecampany:response.data.namecampany,
      region:response.data.region,
      description:response.data.description,
      category:response.data.category,
      typetime:response.data.typetime,
      experience:response.data.experience,
      diplome:response.data.diplome,
      salaire:response.data.salaire,
      contrat:response.data.contrat,
      });
    }).catch(function(e) {
      alert('dkhooool')
      console.error(e.message)});
    setOffre(form_data);
    }


    return (
        
        <div>
          <div style={{textAlign:"center"}}>
          <Image  height="100px" src={Logo}></Image>
          </div>
         
          <h4><Badge pill variant="success">
            Ajouter votre offre d'emploi 
              </Badge></h4>
          <hr></hr>
          <div style={{textAlign:"right"}}>
          <h4><Badge  variant="danger">
             {match.params.namecampany}
              </Badge></h4>
          </div>
         
          <hr></hr>
          <div >
            
          
           <Form onSubmit={submitOffre}>
                <Form.Group controlId="name">
              <Form.Label>Nom du poste: </Form.Label>
    <Form.Control type="text" name="name" placeholder="Entrer le nom du poste" onChange={handleOffreChange} />   
  </Form.Group>

  <Form.Group controlId="image">
 <Form.Label>Image: </Form.Label>
 <Form.File id="image-file" name="image" label="choisir fichier" custom onChange={handleImageChange}>
 </Form.File>
</Form.Group>

  



  <Form.Group controlId="region">
    <Form.Label>Région: </Form.Label>
    <Form.Control type="text" name="region" placeholder="Entrer la région" onChange={handleOffreChange} />   
  </Form.Group>

  <Form.Group controlId="description">
    <Form.Label>Déscription du poste:</Form.Label>
    <Form.Control as="textarea" name="description" rows={3} onChange={handleOffreChange} />
  </Form.Group>

  <Form.Group as={Col} controlId="category">
      <Form.Label>Catégorie*</Form.Label>
      <Form.Control as="select" name="category" defaultValue="Choisir..." onChange={handleOffreChange}>
        <option>Choisire...</option>
        <option>Achat</option>
        <option>Commercial, vente</option>
        <option>Informatique, nouvelles technologie</option>
        <option>Juridique</option>
        <option>Management, direction générale</option>
        <option>Marketing, communication</option>
        <option>Métier de la santé et du social</option>
        <option>Métier des services</option>
        <option>Transport, logistique</option>
      </Form.Control>
    </Form.Group>

  <Form.Group as={Col} controlId="typetime">
      <Form.Label>Temps de travail*</Form.Label>
      <Form.Control as="select" name="typetime" defaultValue="Choisir..." onChange={handleOffreChange}>
        <option>Choisire...</option>
        <option>Full time</option>
        <option>Part time</option>
        
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="experience">
      <Form.Label>Experience*</Form.Label>
      <Form.Control as="select" name="experience" defaultValue="Choisir..." onChange={handleOffreChange}>
        <option>Choisire...</option>
        <option>Moin d'un an</option>
        <option>Plus 1 an</option>
        <option>Plus 2 ans</option>
        <option>Plus 3 ans</option>
        <option>Plus 4 ans</option>
        
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="diplome">
      <Form.Label>Diplome*</Form.Label>
      <Form.Control as="select" name="diplome" defaultValue="Choisir..." onChange={handleOffreChange}>
        <option>Choisire...</option>
        <option>Bac</option>
        <option>Bac + 2</option>
        <option>Bac + 3</option>
        <option>Bac + 5</option>
        
      </Form.Control>
    </Form.Group>

  <Form.Group controlId="salaire">
    <Form.Label>Salaire: </Form.Label>
    <Form.Control type="number" name="salaire" placeholder="Entrer le salaire" onChange={handleOffreChange} />   
  </Form.Group>

  <Form.Group as={Col} controlId="contrat">
      <Form.Label>Contrat*</Form.Label>
      <Form.Control as="select" name="contrat" defaultValue="Choisir..." onChange={handleOffreChange}>
        <option>Choisire...</option>
        <option>CDI</option>
        <option>CDD</option>
        <option>CTT</option>
        
      </Form.Control>
    </Form.Group>

  <hr></hr>
 <div style={{textAlign:"center"}} >
 <Button variant="primary" type="submit">
    Ajouter l'offre
  </Button>
 </div>
 
</Form>
</div>

        </div>
    )
}

export default AddOffreScreen
