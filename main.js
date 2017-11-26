document.querySelector('#zipForm').addEventListener
		('submit', getLocationInfo);

		function getLocationInfo(e){
			//Get zip value from input
			const zip = document.querySelector('.zip').value;

			console.log(zip);

			e.preventDefault();
		};