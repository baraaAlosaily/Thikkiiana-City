import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAppContext } from '../context/appContext';
import LogoutButton from './LogoutButton';

const NavbarComponent=()=> {
  const {handleChange,user}=useAppContext()

  const handleChangeSubmit=(e)=>{
    const name=e.target.value;
    handleChange(name)
  }

  return (
    <Navbar className='navbar'bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Thikkiiana City</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChangeSubmit}
            />
          </Form>
        </Navbar.Collapse>
        <LogoutButton/>
        <section className='navbar__user--info'>
        <img src={user.imageUrl} alt="" />
        <Navbar.Brand >{user.givenName.charAt(0).toUpperCase()+user.givenName.slice(1)}</Navbar.Brand>
        </section>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;