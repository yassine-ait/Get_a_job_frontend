import React from 'react'
import {Navbar, Nav , Button, Form,Image} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import Logo from '../images/getjoblogo.png'

function Header() {


    return (
        <div>
            <header>
             <Navbar bg="light" expand="lg">
             <LinkContainer to="/">
                   <Navbar.Brand href="#home"> <h4>
                        <Image src={Logo} width="90px"></Image>
                     </h4></Navbar.Brand>
                     </LinkContainer> 

                             <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <LinkContainer to="/">
                                           <Nav.Link href="#home"><i class="fas fa-home"></i> Acceuil</Nav.Link>
                                         </LinkContainer>    
                                             <Nav.Link href="/register" ><i class="fas fa-users"></i> Recruteur</Nav.Link> 
                                                
                                     </Nav>
    
    <Form inline>
     
     
    {/* <LinkContainer to="/login">
    <Button variant="outline-success" id="inscription" ><i class="fas fa-bolt"></i> Ajouter une nouvelle offre</Button>
    </LinkContainer> */}
      
    </Form>
   
    
                             </Navbar.Collapse>
</Navbar>
            </header>
        </div>
    )
}

export default Header
