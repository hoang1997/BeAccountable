import type { NextPage } from 'next'
import {FiThumbsUp} from 'react-icons/fi'

const Home: NextPage = () => {
  return (
    <>
     <div className="container">
        <div className="row w-100 h-100">
          <div className="col-4 h-50">
            <div className="card mt-4 pt-5">
              <h3 className="text-center">Joe Hoang </h3>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <p className="text-center">Following</p>
                    <p className="text-center" style={{fontWeight: "bold"}}>1</p>
                  </div>
                  <div className="col">
                    <p className="text-center">Followers</p>
                    <p className="text-center" style={{fontWeight: "bold"}}>10</p>
                  </div>
                  <hr/>
                </div>
                <div className="p-4">
                  <p style={{textAlign:'center'}}>Height: <b>167cm</b></p>
                  <p style={{textAlign:'center'}}>Weight: <b>60kg</b></p>
                  <p style={{textAlign:'center'}}>BMI: <b>160 (Good)</b></p>
                  <p style={{textAlign:'center'}}>Current split: <b>Push, Pull, Legs</b></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 h-100">
            <div style={{height: "90vh", overflowY: "scroll" }}>
              {[0, 1, 2, 3, 4].map((value)=> {
                return (<div className="card" style={{padding: 0, margin: '30px'}}>
                  <img className="card-img-top" src="/images/c-bum.jpg" alt="cbum" style={{borderRadius: "20", width:"auto",height:"auto"}}/>
                  
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <span style={{fontWeight: 500}}>
                          Joseph Hoang
                        </span>
                        <br/>
                        <span style={{fontSize: "0.7rem"}}>
                          Today at 16:01 - RP Fitness, Cambridge
                        </span>
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <h5> Afternoon workout</h5>
                    </div>
                    <div className="row p-3">
                        <div className="col" style={{borderLeft: "solid"}}>
                          <span style={{fontSize: "0.9rem"}}>Type:</span>
                          <br/>
                          <span style={{fontWeight: 500}}>Push</span>
                        </div>
                        <div className="col" style={{borderLeft: "solid"}}>
                          <span style={{fontSize: "0.9rem"}}>Time:</span>
                          <br/>
                          <span style={{fontWeight: 500}}>1h 20m</span>
                        </div>
                        <div className="col" style={{borderLeft: "solid"}}>
                          <span style={{fontSize: "0.9rem"}}>Calories: </span>
                          <br/>
                          <span style={{fontWeight: 500}}> 450</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{ fontSize: "0.9rem", marginLeft: "5px"}}>
                          <span>PR: </span>
                          <span>Barbell bench (100kg)</span>
                        </div>
                    </div>
                  </div>
                  <div className="card-header">
                    <div style={{display:"flex", justifyContent: "space-between"}}>
                      <div className="p-2" style={{fontSize: "0.8rem"}}>
                        100 respects
                      </div>
                      <div>
                        <button type="button" className="btn btn-light">
                          <FiThumbsUp/>
                        </button>
                      </div>  
                    </div>
                  </div>
                </div>)
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
