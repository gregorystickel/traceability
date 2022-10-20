//const axios = require("axios");
const getRider = document.querySelector("#teams");
const options = {
    method: 'GET',
    url: 'https://pro-cycling-stats.p.rapidapi.com/riders/julian-alaphilippe',
    headers: {
      'X-RapidAPI-Key': '6c6a650323msh4e92ec679eccab3p1b5200jsnd3c0c4917891',
      'X-RapidAPI-Host': 'pro-cycling-stats.p.rapidapi.com'
    }
  };
  

function chkButton () {
    
    console.log(`button clicked!`);
    rollbar.log('Button clicked!');
    // axios.get(options).then(res => {
    //         console.log(res.data)
    //         let { teams } = res.data
    //         let div = document.createElement("div")
    //         let p = document.createElement("p")
    //         div.append(teams, p)

         
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
}

getRider.addEventListener(`click`, chkButton);