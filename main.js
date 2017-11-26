document.querySelector('#zipForm').addEventListener
		('submit', getLocationInfo);

		function getLocationInfo(e){
			//Get zip value from input
			const zip = document.querySelector('.zip').value;

			// Make request
			
			
			fetch(`http://api.zippopotam.us/us/${zip}`)
			.then(response => {
				if(response.status != 200){
					document.querySelector('#output').innerHTML = 
					`
					<article class="message message-body is-danger">
					Invalid Zipcode, try again.
					</article>
					`;
					throw Err(response.statusText);
				} else {
					return response.json();
				}
			})
			.then(data => {
				console.log(data);
			})
			.catch(err => console.log(err));
			e.preventDefault();
		};