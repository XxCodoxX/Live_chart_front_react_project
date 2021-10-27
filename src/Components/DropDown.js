import React from 'react';
const dropDown = (props) => {

  

  function hadelChange (event) {
    // console.log(event.target.value);
    props.select(event.target.value);

    

  }

    return (

      

    < div>
    <label className="h4">{props.dropname}</label>

    <select
                onChange={hadelChange}
                className="custom-select"
                style={{ width: "100%", border: "1" }}
              >
                <option selected>Choose...</option>

                {props.did.map((item) => {
                  // console.log("item");
                  // console.log(item);
                  return (
                    <option key={item.id} value={item.deviceId}>
                      {item.deviceId}
                    </option>
                  );
                })}
              </select>
      
  </div >

    );


}

export default dropDown;