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

      for(let i=0; i<staff.length; i++){
        let person = people[i];
        let row = document.createElement('div');
        let img_div = document.createElement('div');
        let info_div = document.createElement('div');

        genPersonRow(person, row, img_div, info_div);
      };

      function genImgDiv(person, img_div){

      };

      function genInfoDiv(person, info_div){

      };

      function joinAttachRow(row, img_div, info_div){
        row.appendChild(img_div);
        row.appendChild(info_div);
        console.log(row);
        people.appendChild(row);
      };

      function genPersonRow(person, row, img_div, info_div){
        genImgDiv(person, img_div);
        genInfoDiv(person, info_div);
        joinAttachRow(row, img_div, info_div);
      };
    };

    function updateUIFailure(){
      console.log("Request failed.");
    };
})();
