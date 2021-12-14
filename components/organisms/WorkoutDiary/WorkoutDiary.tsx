import type { FC } from 'react'
import {Row, Col, Table, Tab, Tabs, Nav} from 'react-bootstrap'
import type { IWorkoutDiaryDay } from '../../../lib/interfaces'
import { getDayDisplayName } from '../../../lib/utilities'
import { IWorkoutDiaryWeek } from '../../../lib/interfaces'

type Props =  {
    workout_diary: Array<IWorkoutDiaryWeek>
}

const WorkoutDiary: FC<Props> = ({workout_diary}) => {

  return (
    <>
        <Tabs defaultActiveKey={`week-${workout_diary[0].week}`} id="uncontrolled-tab-example" className="mt-3 mb-3">
            {workout_diary.map((week:IWorkoutDiaryWeek, index:number)=>{
                return (
                    <Tab eventKey={`week-${week.week}`} title={`Week ${week.week}`}className="p-4">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="0">
                        <Row>
                            <Col sm={2}>
                                <Nav variant="pills" className="flex-column">
                                    {week.workouts.map((day:IWorkoutDiaryDay, index:number)=>{
                                        return (
                                            <Nav.Item style={{width: "30%", borderRadius: "50px"}}>
                                                <Nav.Link eventKey={index}  style={{width: "70px", height: "40px",borderRadius: "100px"}}>{getDayDisplayName(day.day)}</Nav.Link>
                                            </Nav.Item>
                                    )})}
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    {week.workouts.map((day:IWorkoutDiaryDay, index:number)=>{
                                        return (
                                            <Tab.Pane eventKey={index}>
                                                        <Table bordered hover responsive="md" size="sm">
                                                            <thead>
                                                                <tr style={{borderStyle: "none"}}>
                                                                    <th colSpan={2} style={{borderStyle: "none"}}/>
                                                                    <th className="th-sm" colSpan={3} style={{borderTop: "solid 0.5px #f5f5f5"}}>Warmup set (kg/lbs)</th>
                                                                    <th colSpan={4} style={{borderTop: "solid 0.5px #f5f5f5"}}>Working set (kg/lbs)</th>
                                                                    <th  className="th-lg" colSpan={3} style={{borderStyle: "none"}}/>
                                                                </tr>
                                                                <tr>
                                                                    <th className="w-auto">#</th>
                                                                    <th className="w-auto">Exercise</th>
                                                                    <th className="th-sm"> 1</th>
                                                                    <th className="w-auto"> 2</th>
                                                                    <th className="w-auto"> 3</th>
                                                                    <th className="w-auto"> 1</th>
                                                                    <th className="w-auto"> 2</th>
                                                                    <th className="w-auto"> 3</th>
                                                                    <th className="w-auto"> 4</th>
                                                                    <th className="th-lg" >RPE</th>
                                                                    <th className="th-lg">1RPM</th>
                                                                    <th className="th-lg">Notes</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {week.workouts[index].workout.map((day, index)=>{
                                                                    return(
                                                                        <tr>
                                                                            <td>{index}</td>
                                                                            <td>{day.exercise}</td>
                                                                            {day.warmup_set.map((set)=><td style={{width: "70px"}}><input type="text" value={set ? set : ""} style={{border:"none", width: "60px"}}/></td>)}
                                                                            {day.working_set.map((set)=><td>{set}</td>)}
                                                                            <td>{day.rpe}</td>
                                                                            <td>{day.rpm}</td>
                                                                            <td>{day.notes}</td>
                                                                        </tr>
                                                                    )})}
                                                            </tbody>
                                                        </Table>
                                            </Tab.Pane>
                                        )
                                    })}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                    </Tab>
                )})
            }
        </Tabs>
    </>
  )
}

export default WorkoutDiary
