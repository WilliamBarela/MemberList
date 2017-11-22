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
        let person = staff[i];
        let row = document.createElement('div');
        let img_div = document.createElement('div');
        let info_div = document.createElement('div');

        genPersonRow(person, row, img_div, info_div);
      };

      function genImgDiv(person, img_div){
        let link = document.createElement('a');
        let img = document.createElement('img');

        img_div.setAttribute('class', config.img_class);

        link.setAttribute('href', config.href_prepend + person.href_postpend);

        img.setAttribute('alt', person.alt);
        img.setAttribute('src', config.src_prepend + person.image);

        link.appendChild(img);
        img_div.appendChild(link);
      };

      function genInfoDiv(person, info_div){

      };

      function joinAttachRow(row, img_div, info_div){
        row.setAttribute('class', 'row');
        row.appendChild(img_div);
        row.appendChild(info_div);
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
