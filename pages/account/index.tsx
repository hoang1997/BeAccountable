import type {FC} from 'react'
import {useState} from 'react'
import {Col, Row, Container, Card, Tabs, Tab} from 'react-bootstrap'
import Feed from '../../components/organisms/Feed/Feed'
import ProfileOverview from '../../components/organisms/ProfileOverview/ProfileOverview'
import Dashboard from '../../components/organisms/Dashboard/Dashboard'
import ProgressViewSelector from '../../components/molecules/ProgressViewSelector/ProgressViewSelector'

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
        [1,2,3,4,5,6,7], 
        [8,9,10,11,12,13,14], 
        [15,16,17,18,19,20,21], 
        [22,23,24,25,26,27,28], 
        [29,30,31,32,33,34,35], 
    ]

    let lastDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
    let firstDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1)

    let firstDay = firstDate.getDay() - 1;
    let lastDay = lastDate.getDay() - 1;

    let date = -1;

    for(var week = 0; week > month.length; week++) {
        for(var day= 0; day>month[week].length; day++) {
            if(week==0) {
                if (day == 6 &&  date == -1) {
                    month[week][day] = 1;
                    week = 1;
                    break;
                } else if(firstDate.getDay() == day) {
                    month[week][day] = 2;
                } else {
                    month[week][day] = date;
                }
            } else {
                month[week][day] = date;
            }
            date++;
        }
    }

    return(
    <>
        <Container style={{ overflowX: "auto"}}>
            <Row className="w-100 h-100" style={{minWidth: "650px"}}>
                <Col className="mt-4">
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
                            <Tab eventKey="progress" title="Progress History" style={{overflowX: "scroll", padding: "10ox"}}>
                                <div style={{display:"block", justifyContent: "center", minWidth:"700px"}}>
                                
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
                                                    <Col className="h-100" style={{height: "auto"}}>
                                                        <a type="button" onClick={() => {setActiveButton({id: "day", title: "Day", display_title: "Day"})}}className="text-center p-2 pb-3 w-100">{day}</a>
                                                        {activeButton.id == "week" && 
                                                            <p className="text-center" style={{borderRadius: "40px", backgroundColor:"firebrick", color:"white", width: "30px"}}>{index}</p>
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
                                                                    <Col className="h-100" style={{ border: "solid 1px", height: "auto", padding: "0px", borderColor: "rgb(0,0,0,0.1)"}}>
                                                                        <p className="text-center w-100">{day}</p>
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