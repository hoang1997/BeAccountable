import type { FC } from 'react'
import {Row, Col, Container, Tabs, Tab, Nav, Card} from 'react-bootstrap'



const WorkoutPlansPage: FC = () => {
    const followData = [
       {
           user: "Jeff Nippard",
           plans: [1,2,3]
       },
       {
        user: "Joe",
        plans: [1,2,3,4,5]
       }
    ]

  return (
    <>
     <Container>
        <Row className="w-100 h-100">
          <Col className="p-4" style={{backgroundColor: "white"}}>
            <Tabs defaultActiveKey="yourPlans" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="yourPlans" title="Your Plans">
                    {followData[0].plans.map((plan: any, j: number)=> {
                        return (
                            <Card className="mt-3">
                                <div className="d-flex">
                                    <div className="d-block" style={{padding: "0px 10px"}}>
                                        <div>^</div>
                                        <div>20</div>
                                        <div>v</div>
                                    </div>
                                    <Card.Body>
                                        <span style={{fontSize: "13px"}}>Created: 20/11/2021</span>
                                        <div className="d-flex" style={{justifyContent: "space-between"}}>
                                            <span style={{fontWeight: "bold", fontSize: 20 }}>Push Pull Legs</span>
                                        </div>
                                        <div className="d-flex" style={{justifyContent:"space-between", margin: "10px 10px"}}>
                                            <span style={{fontSize: 13, borderLeft: "solid 1px", padding: "0 20px"}}>Focus: Hypertrophy</span>
                                            <span style={{fontSize: 13, borderLeft: "solid 1px", padding: "0 20px"}}>Duration: 12 weeks</span>
                                            <span style={{fontSize: 13, borderLeft: "solid 1px", padding: "0 20px"}}>Workouts (p/w): 5-6</span>
                                        </div>
                                        <div>
                                            <p>Description</p>
                                            <article>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </article>
                                        </div>
                                    </Card.Body>
                                </div>
                            </Card>
                        )
                    })}
                </Tab>
                <Tab eventKey="followedPlans" title="Followed Plans">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="0">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    {followData.map((user, index)=>{
                                        return (
                                            <Nav.Item>
                                                <Nav.Link eventKey={index}>{user.user}</Nav.Link>
                                            </Nav.Item>
                                    )})}
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    {followData.map((user, i)=>{
                                        return (
                                            <Tab.Pane eventKey={i}>
                                            {   user.plans.map((plan: any, j: number)=> {
                                                    return (
                                                        <Card className="mt-3">
                                                            <div className="d-flex">
                                                                <div className="d-block" style={{padding: "0px 10px"}}>
                                                                    <div>^</div>
                                                                    <div>20</div>
                                                                    <div>v</div>
                                                                </div>
                                                                <Card.Body>
                                                                    <span style={{fontSize: "13px"}}>Created: 20/11/2021</span>
                                                                    <div className="d-flex" style={{justifyContent: "space-between"}}>
                                                                        <span style={{fontWeight: "bold", fontSize: 20 }}>Push Pull Legs</span>
                                                                    </div>
                                                                    <div className="d-flex" style={{justifyContent:"space-between", margin: "10px 10px"}}>
                                                                        <span style={{fontSize: 13, borderLeft: "solid 1px", padding: "0 20px"}}>Focus: Hypertrophy</span>
                                                                        <span style={{fontSize: 13, borderLeft: "solid 1px", padding: "0 20px"}}>Duration: 12 weeks</span>
                                                                        <span style={{fontSize: 13, borderLeft: "solid 1px", padding: "0 20px"}}>Workouts (p/w): 5-6</span>
                                                                    </div>
                                                                    <div>
                                                                        <p>Description</p>
                                                                        <article>
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                                        </article>
                                                                    </div>
                                                                </Card.Body>
                                                            </div>
                                                        </Card>
                                                    )})}
                                            </Tab.Pane>
                                        )
                                    })}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Tab>
                <Tab eventKey="search" title="Search">

                </Tab>
            </Tabs>
          </Col>
          
        </Row>
      </Container>
    </>
  )
}

export default WorkoutPlansPage
