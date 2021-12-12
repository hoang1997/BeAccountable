import type { FC } from 'react'
import  { IPost, IPR } from '../../../lib/interfaces'
import Media from '../../atoms/Media/Media'
import {Card, Row, Col, Button} from 'react-bootstrap'; 

type Props = {
    post: IPost
}

const Post: FC<Props> = ({post} : Props) => {
    return (
        <Card style={{padding: 0, margin: '30px'}}>

            {post.media_src !== null && 
                    <Media media={post.media_src}/>
            
            }

            <Card.Body>
                <Row>
                    <Col>
                        <span style={{fontWeight: 500}}>
                            {post.display_name}
                        </span>
                        <br/>
                        <span style={{fontSize: "0.7rem"}}>
                            {post.date_time} - {post.location}
                        </span>
                    </Col>
                </Row>

                <hr/>

                <Row>
                    <h5>{post.title}</h5>
                </Row>

                <Row className="p-3">
                    <Col style={{borderLeft: "solid"}}>
                        <span style={{fontSize: "0.9rem"}}>Type:</span>
                        <br/>
                        <span style={{fontWeight: 500}}>{post.workout.type}</span>
                    </Col>
                    <Col style={{borderLeft: "solid"}}>
                        <span style={{fontSize: "0.9rem"}}>Time:</span>
                        <br/>
                        <span style={{fontWeight: 500}}>{post.workout.time}</span>
                    </Col>
                    <Col style={{borderLeft: "solid"}}>
                        <span style={{fontSize: "0.9rem"}}>Calories: </span>
                        <br/>
                        <span style={{fontWeight: 500}}> {post.workout.calories}</span>
                    </Col>
                </Row>
                
                <Row>
                    <Col style={{ fontSize: "0.9rem", marginLeft: "5px"}}>
                        <span>PR: </span>
                        {post.workout.prs.map((pr: IPR, index: number)=> {
                                return (<span>{pr.exercise} ({pr.record}) </span>)
                            })
                        }
                    </Col>
                </Row>
            </Card.Body>

            <Card.Footer>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <div className="p-2" style={{fontSize: "0.8rem"}}>
                    {post.respects.length} respects
                    </div>
                    <div>
                        <Button className="btn btn-light">
                            Like
                        </Button>
                    </div>  
                </div>
            </Card.Footer>
        </Card>
    )
}

export default Post
