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

      let row = document.createElement('div');
      let img_div = document.createElement('div');
      let info_div = document.createElement('div');

      genPersonRow();

      function genImgDiv(){

      };

      function genInfoDiv(){

      };

      function joinAttachRow(){
        row.appendChild(img_div);
        row.appendChild(info_div);
        console.log(row);
        people.appendChild(row);
      };

      function genPersonRow(){
        genImgDiv();
        genInfoDiv();
        joinAttachRow();
      };
    };

    function updateUIFailure(){
      console.log("Request failed.");
    };
})();
