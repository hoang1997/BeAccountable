import type { FC } from 'react'
import  {IPost } from '../../../lib/interfaces'

import Post from '../../molecules/Post/Post';

type Props = {
    posts: Array<IPost>
}

const Feed: FC<Props> = ({posts} : Props) => {
  return (
    <div className="col-8 h-100">
        <div style={{height: "90vh", overflowY: "scroll" }}>
            {posts.map((post: IPost, index: number) => {
                return <Post post={post} />
            })}
        </div>
    </div>
  )
}

export default Feed
