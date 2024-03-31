
import React, {useState,useEffect} from 'react'
import { Button, Image, Badge,Form,Col,Row} from 'react-bootstrap'
import Logo from '../images/logowhite.png'
import Emploi from '../images/emploi.jpg'
import '../index.css'
import {LinkContainer} from 'react-router-bootstrap'
// import offres from '../offres'
import Offre from '../components/Offre'
import axios from 'axios'

function HomeScreen() {

    const[search,setSearch]=useState("");

    //DATA OFFRES////////////////////////////////////////////////////
    const [offres,setOffres]=useState([])

    useEffect(()=>{
        async function fetchOffres(){
            const{data}=await axios.get('/api/offres')
            setOffres(data)
        }
        fetchOffres();
    },[])
    ////////////////////////////////////////////////////////////////
    return (
        <div>
             <br></br>
            <div class="divhead">
            <h6>La plateforme <span style={{color:"yellow"}}>Getjob.ma</span> pour chercher et postuler chez une entreprise de votre choix.</h6>
            <Image src={Logo} width="300px"></Image>
            <h3 >
                  <span style={{color:"white"}} class="badge bg-danger">+500 000</span> offres d'emplois. <i class="fas fa-check"></i>

                </h3>
                <p>
                TROUVEZ L'EMPLOI QUI CORRESPOND À VOTRE VIE, Mettre en relation
                <p>
                des personnes exceptionnelles avec les entreprises les plus
                  innovantes du monde.
                </p>
                 
                </p>
                {/* <h6>Démarrer par :</h6> */}
              
                
                {/* <LinkContainer to="/login">
                <Button variant="warning"><i class="fas fa-user-edit"></i> Ajout d'une offre</Button>
                </LinkContainer> */}
                
             </div>
           
                <hr></hr>
                <div>
                  
                </div>
                <hr></hr>
                <Row>
                    <Col lg={4} md={3} sm={10} >
                    <div   style={{backgroundColor:"#E7F2F8", textAlign:"center",borderRadius:'8px'}}>
                <h4 >
                  <span style={{color:"white"}} class="badge bg-secondary">Choisisez votre catégorie</span>

                </h4>               
                <Form.Group as={Col} controlId="category">
      
      <Form.Control as="select" name="poste" id="recherche" defaultValue="Sélectionnez une categorie..." onClick={(e)=>{
           setSearch(e.target.value);
       }}>
          <option>Choisir...</option>
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

        <br></br>
                
                </div>
                
                
                    </Col>
                    <Col lg={8} md={8} sm={12} style={{borderRadius:'11px'}}>
                    <img  className="w-100" src={Emploi} alt=""/>
                </Col>
               
                </Row>
                
                <hr></hr>
                
                <div>
                <h3><Badge variant="success">Offres disponible</Badge></h3>

                {offres.filter(item =>{
      
     if(item.category==document.getElementById("recherche").value){
        if(search==""){
            return item
        }
        else if(item.category.toLowerCase().includes(search.toLowerCase())){
            return item
         }
      }
      
  })
  .map((offre)=>(

    <Offre offre={offre}></Offre>
    ))}

                </div>
                

                




        </div>
    )
}

export default HomeScreen
