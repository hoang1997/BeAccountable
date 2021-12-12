import type {FC} from 'react'
import {Col, Row, Container, Card} from 'react-bootstrap'

const Dashboard: FC = () => {
    return(
        <>
            <Card className=" h-100">
                <Card.Body className="card-body">
                    <div>
                        <h2>Your Dashboard</h2>
                    </div>
                    <div>
                        dashboard to display goals such as weight, strength, 
                    </div>
                </Card.Body >
            </Card>
        </>
    )
}
export default Dashboard