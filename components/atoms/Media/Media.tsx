import type { FC } from 'react'
import  { IMediaSrc } from '../../../lib/interfaces'
import {MediaSrcType} from '../../../lib/enums'

type Props = {
    media: IMediaSrc
}

const Media : FC<Props> = ({media} : Props) => {

    if(media.type === MediaSrcType.Image) {
        return (
            <img className="card-img-top" src={media.url} alt="img" style={{width:"auto",height:"auto"}}/>
        )
    } 
    
    return (
        <div>
            Currently do no support video media
        </div>
    )
        
}

export default Media
