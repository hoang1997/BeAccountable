import type {FC} from 'react'
import ProfileOverview from '../../components/organisms/ProfileOverview/ProfileOverview'
import * as TestData from '../../_data/TestData'

const ProfilePage: FC = () => {
    return(
    <div className="container">
        <div className="row w-100 h-100">
        <ProfileOverview profile={TestData.Profile}/>
            <div className="col-8">
                <div className="card" style={{padding: 0, margin: '30px'}}>
                    <div className="card-body">
                        <div>
                            <span>Your Dashboard</span>
                        </div>
                        <div>
                            dashboard to display goals such as weight, strength, 
                        </div>
                    </div>
                </div>
                <div className="card p-4" style={{margin: '30px'}}>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active" 
                            id="home-tab" 
                            data-bs-toggle="tab" 
                            data-bs-target="#home" 
                            type="button" 
                            role="tab" 
                            aria-controls="home" 
                            aria-selected="true">
                            Your Activity
                        
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Progess</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Workout</button>
                    </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active p-4" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                    <div className="tab-pane fade p-4" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                    <div className="tab-pane fade p-4" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProfilePage