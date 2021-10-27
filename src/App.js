import './App.css';
import React, { Component } from 'react';
import CardDrop from './Components/CardComp';
import DropDown from './Components/DropDown';
import TimedropDown from './Components/TimeDropDown';
import LinChart from './Components/LineChart';
import Service from './service/dataService';

var service = new Service();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deviceIdList: [],
      TimeList: [],
      selectedeviceid:"",
      selectedstartTime:"",
      selectedendTime:"",
      valueForChart: [
        { valueforyaxis: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], }

      ]
      
    }
    

    //this.retrieveAllData();
    // this.retrieveStartTime();
    // this.retrieveEndTime();

    
    this.setdeviceidfuntion = this.setdeviceidfuntion.bind(this);
    this.setstartTimefuntion = this.setstartTimefuntion.bind(this);
    this.setendTimefuntion = this.setendTimefuntion.bind(this);
    this.datafuntion = this.datafuntion.bind(this);
    this.loopfuntion = this.loopfuntion.bind(this);


  }

  componentDidMount() {
    this.retrieveAllData();
    this.timer= setInterval(() => this.loopfuntion(),10000)
  }

  retrieveAllData() {
    service.getDeviceData().then((response) => {
      // console.log(response.data[0]);
      // console.log(response.data[1]);
      this.setState({
        deviceIdList:response.data[0],
        TimeList:response.data[1]


      })



    });

  }


  // geting deviceid from dropdown
  setdeviceidfuntion(deviceid) {

    this.setState({
      selectedeviceid: deviceid,

    })
    this.datafuntion(deviceid,this.state.selectedstartTime,this.state.selectedendTime);
    

  }

  // geting starttime from dropdown
  setstartTimefuntion(starttime) {

    this.setState({
      selectedstartTime: starttime,

    })

    this.datafuntion(this.state.selectedeviceid,starttime,this.state.selectedendTime);

    

  }

  // geting endtime from dropdown
  setendTimefuntion(endtime) {

    this.setState({
      selectedendTime: endtime,

    })

    this.datafuntion(this.state.selectedeviceid,this.state.selectedstartTime,endtime);

  }


  // main function for get data from database
  datafuntion(deviceid,starttime,endtime) {

    

    if(deviceid === "" || starttime === "" || endtime === ""){
      return;
    }
    

      service.getDeciceValue(deviceid+"/"+starttime+"/"+endtime).then((response) => {
        // console.log(response);
        let temparray = response.data;
  
        
        let tempData = {
  
  
          valueforyaxis: []
        }
  
        temparray.map(item => (  
          tempData.valueforyaxis.push(item.value)
        ))
  
        // console.log(tempData);
  
  
  
  
        this.setState({
          selectedendTime: endtime,
          valueForChart:[
            tempData
          ]
  
        })
  
      })

    

    

    

  }


  // this one looping for get updated data from database
  loopfuntion() {

    console.log("Every 10 second")

    let id = this.state.selectedeviceid;
    let startt = this.state.selectedstartTime;
    let endt = this.state.selectedendTime;

    if(id === "" || startt === "" || endt === ""){

      console.log("no data")

    }else{

      service.getDeciceValue(id+"/"+startt+"/"+endt).then((response) => {
        // console.log(response);
        let temparray = response.data;
  
        
        let tempperson = {
  
  
          valueforyaxis: []
        }
  
        temparray.map(item => (  
          tempperson.valueforyaxis.push(item.value)
        ))
  
        console.log(tempperson);
  
  
  
  
        this.setState({
          valueForChart:[
            tempperson
          ]
  
        })
  
      })

    }

    

    

  }

  


  render() {
    return (
      <div>
        <br />
        <CardDrop>
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center">
              <DropDown dropname="Device ID" did = {this.state.deviceIdList} select = {this.setdeviceidfuntion} />
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <TimedropDown dropname="Start Time" did = {this.state.TimeList} select = {this.setstartTimefuntion}/>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <TimedropDown dropname="End Time" did = {this.state.TimeList} select = {this.setendTimefuntion}/>
            </div>
          </div>
        </CardDrop>


        <CardDrop>

          <LinChart value={this.state.valueForChart[0].valueforyaxis} />

        </CardDrop>
      </div>

    );
  }
}

export default App;
