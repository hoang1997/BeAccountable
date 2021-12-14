import type { FC } from 'react'
import {Row, Col, Container} from 'react-bootstrap'

import ProfileOverviewSection from '../../components/organisms/ProfileOverview/ProfileOverview'
import FeedSection  from '../../components/organisms/Feed/Feed';
import * as TestData from '../../_data/TestData';



const FeedPage: FC = () => {
  return (
    <>
     <Container>
        <Row className="w-100 h-100">
          <Col className="col-3">
            <ProfileOverviewSection profile={TestData.Profile}/>
          </Col>
          <Col className="col-9">
            <FeedSection posts={TestData.Posts}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FeedPage
