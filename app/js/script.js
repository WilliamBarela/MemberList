//script.js

(function(){
    const peopleJsonUrl = "https://raw.githubusercontent.com/WilliamBarela/MemberList/master/app/assets/json/people.json";

    fetch(peopleJsonUrl).then(function(response) {
			return(response.json());
		}).then(function(response) {
			updateUISuccess(response);
		}).catch(function() {
			updateUIFailure();
		});

    function updateUISuccess(response) {
      const people = document.querySelector('#people')
      const config = response.config;
      const staff = response.staff;


      // change to for person in staff
      for(let i=10; i>0; i--){
        let row = document.createElement('div');
        let img_div = document.createElement('div');
        let info_div = document.createElement('div');

        //add person to the arguments:
        genPersonRow(row, img_div, info_div);
      };

      function genImgDiv(img_div){

      };

      function genInfoDiv(info_div){

      };

      function joinAttachRow(row, img_div, info_div){
        row.appendChild(img_div);
        row.appendChild(info_div);
        console.log(row);
        people.appendChild(row);
      };

      function genPersonRow(row, img_div, info_div){
        genImgDiv(img_div);
        genInfoDiv(info_div);
        joinAttachRow(row, img_div, info_div);
      };
    };

    function updateUIFailure(){
      console.log("Request failed.");
    };
})();
