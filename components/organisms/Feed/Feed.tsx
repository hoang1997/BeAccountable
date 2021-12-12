import type { FC } from 'react'
import {Col, Button} from 'react-bootstrap'
import  {IPost } from '../../../lib/interfaces'

import Post from '../../molecules/Post/Post';


type Props = {
    posts: Array<IPost>
}

const Feed: FC<Props> = ({posts} : Props) => {
  return (
        <div style={{height: "90vh", overflowY: "scroll" }}>
            <div className="d-flex px-5" style={{justifyContent:'right'}} >
              <Button className="btn-secondary mt-2">
                Add Activity
              </Button>
            </div>
            {posts.map((post: IPost, index: number) => {
                return <Post post={post} />
            })}
        </div>
  )
}

export default Feed
