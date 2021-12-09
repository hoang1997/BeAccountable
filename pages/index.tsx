import type { NextPage } from 'next'

import ProfileOverviewSection from '../components/organisms/ProfileOverview/ProfileOverview'
import FeedSection  from '../components/organisms/Feed/Feed';
import * as TesData from '../_data/TestData';


const Home: NextPage = () => {
  return (
    <>
     <div className="container">
        <div className="row w-100 h-100">
          <ProfileOverviewSection profile={TesData.Profile}/>
          <FeedSection posts={TesData.Posts}/>
        </div>
      </div>
    </>
  )
}

export default Home
