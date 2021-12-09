import type { FC } from 'react'
import  { IPost, IPR } from '../../../lib/interfaces'
import {FiThumbsUp} from 'react-icons/fi'
import Media from '../../atoms/Media/Media'

type Props = {
    post: IPost
}

const Post: FC<Props> = ({post} : Props) => {
  return (
        <div className="card" style={{padding: 0, margin: '30px'}}>

            {post.media_src !== null && <Media media={post.media_src}/>}

            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <span style={{fontWeight: 500}}>
                            {post.display_name}
                        </span>
                        <br/>
                        <span style={{fontSize: "0.7rem"}}>
                            {post.date_time} - {post.location}
                        </span>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <h5>{post.title}</h5>
                </div>
                <div className="row p-3">
                    <div className="col" style={{borderLeft: "solid"}}>
                        <span style={{fontSize: "0.9rem"}}>Type:</span>
                        <br/>
                        <span style={{fontWeight: 500}}>{post.workout.type}</span>
                    </div>
                    <div className="col" style={{borderLeft: "solid"}}>
                        <span style={{fontSize: "0.9rem"}}>Time:</span>
                        <br/>
                        <span style={{fontWeight: 500}}>{post.workout.time}</span>
                    </div>
                    <div className="col" style={{borderLeft: "solid"}}>
                        <span style={{fontSize: "0.9rem"}}>Calories: </span>
                        <br/>
                        <span style={{fontWeight: 500}}> {post.workout.calories}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{ fontSize: "0.9rem", marginLeft: "5px"}}>
                        <span>PR: </span>
                        {post.workout.prs.map((pr: IPR, index: number)=> {
                                return (<span>{pr.exercise} ({pr.record}) </span>)
                            })
                        }
                    </div>
                </div>
                </div>
                <div className="card-header">
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <div className="p-2" style={{fontSize: "0.8rem"}}>
                    {post.respects.length} respects
                    </div>
                    <div>
                    <button type="button" className="btn btn-light">
                        <FiThumbsUp/>
                    </button>
                    </div>  
                </div>
            </div>
        </div>
              
  )
}

export default Post
