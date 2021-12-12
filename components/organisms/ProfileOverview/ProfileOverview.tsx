import type { FC } from 'react'
import {Card, Col, Row, Container} from 'react-bootstrap'
import  { IProfile } from '../../../lib/interfaces'

type Props = {
    profile: IProfile
}

const ProfileOverview: FC<Props> = ({profile} : Props) => {
  return (
        <div className="pt-4" style={{position:"relative", display: "flex", justifyContent:"center"}}>
           
            <img id="profile-pic-id" 
                src="/images/breon.jpg"
                style={{
                    borderStyle:"solid", 
                    borderWidth: 1, 
                    height: "75px", 
                    width: "75px", 
                    zIndex: 1, 
                    top: -15, 
                    position: 
                    "absolute", 
                    backgroundColor:"white",
                    borderRadius: 50
                }}/>
            <Card className="pt-5" style={{position:"relative"}}>
                <h5 className="text-center">{profile.name}</h5>
                <Card.Body>
                    <Row >
                        <Col >
                            <p className="text-center">Following</p>
                            <p className="text-center" style={{fontWeight: "bold"}}>{profile.following}</p>
                        </Col>
                        <Col>
                            <p className="text-center">Followers</p>
                            <p className="text-center" style={{fontWeight: "bold"}}>{profile.followers}</p>
                        </Col>
                        <hr/>
                    </Row>
                        
                    <div className="p-4">
                        <p className="text-center">Height: <b>{profile.height}</b></p>
                        <p className="text-center">Start Weight: <b>{profile.weight}</b></p>
                        <p className="text-center">Current Weight: <b>{profile.weight}</b></p>
                        <p className="text-center">Current BMI: <b>{profile.bmi}</b></p>
                        <p className="text-center">Current split: <b>{profile.current_split}</b></p>
                    </div>
                </Card.Body>
            </Card>
        </div>
  )
}

export default ProfileOverview
