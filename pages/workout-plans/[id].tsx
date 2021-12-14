import type { FC } from 'react'
import {useState} from 'react'
import {Row, Col, Container, Table, Card, Tab, Tabs} from 'react-bootstrap'
import WorkoutDiary from '../../components/organisms/WorkoutDiary/WorkoutDiary'
import type { ItemObject } from '../../lib/interfaces'
import * as TestData from "../../_data/TestData"
import { getDayDisplayName } from '../../lib/utilities'


const WorkoutPlansPage: FC = () => {

    const  workout_plan = TestData.WorkoutPlan;



  return (
    <>
     <Container>
        <Row className="w-100 h-100">
          <Col className="p-4" style={{backgroundColor: "white"}}>
           
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
            <WorkoutDiary workout_diary={workout_plan.details.diary}/>
          </Col>
          
        </Row>
      </Container>
    </>
  )
}

export default WorkoutPlansPage
