import type {FC} from 'react'
import {useState} from 'react'
import {Col, Row, Container, Card, Tabs, Tab} from 'react-bootstrap'
import Feed from '../../components/organisms/Feed/Feed'
import ProfileOverview from '../../components/organisms/ProfileOverview/ProfileOverview'
import Dashboard from '../../components/organisms/Dashboard/Dashboard'
import ProgressViewSelector from '../../components/atoms/ProgressViewSelector/ProgressViewSelector'

import * as TestData from '../../_data/TestData';
import {IPost, ItemObject} from '../../lib/interfaces';



const ProfilePage: FC = () => {


    let filteredPosts : Array<IPost>  = TestData.Posts.filter((post)=>{ return TestData.Profile.posts.find((id)=> id == post.id)})

    let [buttonState, setButtonState] = useState({
        leftBtn: {
            id: "latestProgress",
            title: "Latest Progress",
            display_title: "Latest Progress"
        },
        summaryBtn: {
            id: "summary",
            title: "Summary",
            display_title: "Summary"
        }, 
        dayBtn: {
            id: "day",
            title: "Day",
            display_title: "16th December"
        },
        weekBtn: {
            id: "week",
            title: "Week",
            display_title: "December"
        },
        monthBtn : {
            id: "month",
            title: "Month",
            display_title: "December"
        }
    })

    let [activeButton, setActiveButton] = useState(buttonState.summaryBtn)
    
    const onLeftButtonClickHandler = (itemId:ItemObject) => {
        setActiveButton(itemId)
    };
    
    const onItemClickHandler = (itemId:ItemObject) => {
        setActiveButton(itemId)
    };

    const onBackArrowClick = () => {

    }

    const onForwardArrowClick = () => {
        
    }

    let month = [
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], 
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], 
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], 
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], 
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], 
    ]

    return(
    <>
        <Container>
            <Row className="w-100 h-100">
                <Col>
                <ProfileOverview profile={TestData.Profile}/>
                </Col>
                <Col className="col-9">
                    <Dashboard/>
                </Col>
            </Row>
        </Container>
        <Container >
            <Row className="w-100 h-100">
                <Col>
                    <div style={{backgroundColor: "white", padding: "20px 30px", marginTop:"20px"}}>
                        <Tabs defaultActiveKey="activity" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="activity" title="Your Activity">
                                { filteredPosts.length > 0 && <Feed posts={filteredPosts}/> }
                                {filteredPosts.length == 0 && <p className="text-center"> No activity found </p>}
                            </Tab>
                            <Tab eventKey="progress" title="Progress History">
                                <div style={{display:"block", justifyContent: "center"}}>
                                
                                    <ProgressViewSelector 
                                        active_btn={activeButton}
                                        left_item_object={buttonState.leftBtn}
                                        item_ojects={ [buttonState.summaryBtn, buttonState.dayBtn, buttonState.weekBtn, buttonState.monthBtn] }
                                        onItemClickHandler={onItemClickHandler}
                                        onLeftButtonClickHandler={onLeftButtonClickHandler}    
                                        onBackArrowClick={onBackArrowClick}
                                        onForwardArrowClick={onForwardArrowClick}
                                    />
                        
                                    <Row className={`row-cols-7 h-50`}>
                                        {(activeButton.id == "week" || activeButton.id == "month") &&
                                            ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index)=> {
                                                return (
                                                    <Col className="d-block h-100" style={{height: "auto"}}>
                                                        <a type="button" onClick={() => {setActiveButton({id: "day", title: "Day", display_title: "Day"})}}className="text-center p-2 pb-3 w-100">{day}</a>
                                                        {activeButton.id == "week" && 
                                                            <p className="text-center" style={{borderRadius: "40px", backgroundColor:"firebrick", color:"white", width: "40px"}}>{index}</p>
                                                        }
                                                    </Col>
                                                )
                                            })}
                                    </Row>

                                    {activeButton.id == "month" &&
                                                month.map((week)=>{
                                                    return (
                                                        <Row className={`row-cols-7 h-50`}>
                                                            {week.map((day, index)=> {
                                                                return (
                                                                    <Col className="d-block h-100" style={{ border: "solid 1px", height: "auto", padding: "50px", borderColor: "rgb(0,0,0,0.1)"}}>
                                                                        <p className="text-center w-100">{index}</p>
                                                                    </Col>
                                                                )
                                                        })}
                                                        </Row>
                                                    )
                                                })
                                            
                                    }
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
    )
}
export default ProfilePage

/*
<div className="d-block">
                                            <div className="d-flex">
                                                <div className="d-block">
                                                    <p className="text-center">Start date</p>
                                                    <img src="images/breon.jpg" 
                                                        height="500px" 
                                                        width="500px"/>
                                                    <div>
                                                        <p>Current Weight: <b>100</b></p>
                                                        <p >Current BMI: <b>100</b></p>
                                                        <p >Current split: <b>upper, lower body split</b></p>     
                                                    </div>
                                                </div>
                                                <div>
                                                
                                                </div>
                                                <div className="d-block">
                                                    <p className="text-center">Current date</p>
                                                    <img src="images/random.jpg" 
                                                        height="500px" 
                                                        width="500px"/>
                                                    <div>
                                                        <p>Current Weight: <b>100</b></p>
                                                        <p>Current BMI: <b>100</b></p>
                                                        <p>Current split: <b>upper, lower body split</b></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                stats
                                                <ul>
                                                    <li>
                                                        Goal
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
*/