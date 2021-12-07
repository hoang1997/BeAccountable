import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
     <div className="container">
        <div className="row w-100 h-100">
          <div className="col-4 outlined h-50">
            <div className="outlined mt-4">
              <div className="card-header">
                Account Overview
              </div>
              <div className="card-body">
                <p>Height: 160cm</p>
                <p>Weight: 100kg</p>
                <p>BMI: 104 (Good)</p>
                <p>Current split: Push, pull, legs</p>
              </div>
              <div className="card-footer">
                footer
              </div>
            </div>
          </div>
          <div className="col-8 outlined h-100">
            <h3 className="mt-3" >Feed</h3>
          {[0, 1, 2, 3, 4].map((value)=> {
            return (<div className="card outlined no-gutters" style={{padding: 0, margin: '30px'}}>
              <div className="card-body no-gutters">
                <div style={{display: "flex", justifyContent:"center"}}>
                  <Image src="/images/c-bum.jpg" alt="cbum" width="400" height="400"/>
                </div>
              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="col-3">
                    @userid1234
                  </div>
                  <div className="col-9">
                    descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
                  </div>
                </div>
              </div>
            </div>)
          })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
