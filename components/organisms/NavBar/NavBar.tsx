import type { FC } from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import Link from 'next/link'

const NavBar: FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/">spotme.</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link href="/feed" passHref>
              <Nav.Link>Feed</Nav.Link>
          </Link>
          <Link href="/workout-plans" passHref>
              <Nav.Link>Workout plans</Nav.Link>
          </Link>
        </Nav>
        <Nav>
          <Link href="/account" passHref>
              <Nav.Link><img id="profile-pic-id" 
                src="/images/breon.jpg"
                style={{
                    height: "40px", 
                    width: "40px", 
                    borderRadius: 50,
                    padding: "2px"
                }}/>
                <span style={{marginLeft:"10px"}}>My Account</span></Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
