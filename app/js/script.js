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
      const config = response.config;
      const staff = response.staff;

      console.log(config);
      console.log(staff);
    };

    function updateUIFailure(){
      console.log("Request failed.");
    };
})();
