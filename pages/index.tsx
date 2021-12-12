import type { NextPage } from 'next'

import ProfileOverviewSection from '../components/organisms/ProfileOverview/ProfileOverview'
import FeedSection  from '../components/organisms/Feed/Feed';
import * as TestData from '../_data/TestData';


const Home: NextPage = () => {
  return (
    <>
     <div className="container">
        <div className="row w-100 h-100">
         Login Page, once logged in redirect to account page
        </div>
      </div>
    </>
  )
}

export default Home
