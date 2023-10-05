import {Container, Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FaHome, FaHandHoldingUsd, FaCreditCard, FaRegCreditCard} from 'react-icons/fa';
import {BsPhone} from 'react-icons/bs'



const Header = () =>{
    return (
    <Container fluid='md'>
        <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand as={Link} to="/" > <span className='home'>SILVER BANK</span></Navbar.Brand>
        <Navbar.Toggle className='shadow-none bg-white' aria-controls="basic-navbar-nav" />
      </Container>
      
      <Container>
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-end">
            <Nav.Link as={Link} to="/dashboard" ><span className='text-white'><FaHome/></span> <span className='list-item'>Home</span></Nav.Link>
            <Nav.Link as={Link}  to="/transfer"><span className='text-white'><FaCreditCard/></span> <span className='list-item '>Transfer</span> </Nav.Link>
            <Nav.Link as={Link}  to="/deposit"><span className='text-white'><FaRegCreditCard/></span> <span className='list-item '>Deposit</span></Nav.Link>
            <Nav.Link as={Link}  to="/pay"> <span className='text-white'><FaHandHoldingUsd/></span> <span className='list-item '>Pay Bills</span></Nav.Link>
            <Nav.Link as={Link}  to="/airtime"><span className='text-white'><BsPhone/></span> <span className='list-item '>Airtime</span></Nav.Link>
            <Nav.Link as={Link}  to="/data"><span className='text-white'><BsPhone/></span> <span className='list-item '>Data</span></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
    </Container>
    )
}
export default Header;