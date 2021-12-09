import type { FC } from 'react'
import  { IProfile } from '../../../lib/interfaces'

type Props = {
    profile: IProfile
}

const ProfileOverview: FC<Props> = ({profile} : Props) => {
  return (
    <div className="col-3 h-50">
        <div className="card mt-4 pt-5">
            <h5 className="text-center">{profile.name}</h5>
            <div className="card-body">
            <div className="row">
                <div className="col">
                <p className="text-center">Following</p>
                <p className="text-center" style={{fontWeight: "bold"}}>{profile.following}</p>
                </div>
                <div className="col">
                <p className="text-center">Followers</p>
                <p className="text-center" style={{fontWeight: "bold"}}>{profile.followers}</p>
                </div>
                <hr/>
            </div>
            <div className="p-4">
                <p style={{textAlign:'center'}}>Height: <b>{profile.height}</b></p>
                <p style={{textAlign:'center'}}>Weight: <b>{profile.weight}</b></p>
                <p style={{textAlign:'center'}}>BMI: <b>{profile.bmi}</b></p>
                <p style={{textAlign:'center'}}>Current split: <b>{profile.current_split}</b></p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileOverview
