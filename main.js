document.querySelector('#zipForm').addEventListener
		('submit', getLocationInfo);
//Listen for delete
document.querySelector('body').addEventListener
		('click', deleteLocation);

		function getLocationInfo(e){
			//Get zip value from input
			const zip = document.querySelector('.zip').value;

			// Make request
			
			
			fetch(`http://api.zippopotam.us/us/${zip}`)
			.then(response => {
				if(response.status != 200){
					showIcon('remove');
					document.querySelector('#output').innerHTML = 
					`
					<article class="message is-danger">
					<div class="message-body">Invalid Zipcode, try again.</div>
					</article>
					`;
					throw Err(response.statusText);
				} else {
					showIcon('check');
					return response.json();
				}
			})
			.then(data => {
				//SHOW LOCATION
				let output = '';
				data.places.forEach(place => {
					output += 
					`
				<article class="message is-primary">
					<div class="message-header">
						<p>Location Info</p>
					<button class="delete"></button>
					</div>
						<div class="message-body">
						 <ul>
							<li><strong>City: </strong>${place['place name']}</li>
							<li><strong>State: </strong>${place['state']}</li>
							<li><strong>Longitude: </strong>${place['longitude']}</li>
							<li><strong>Latitude: </strong>${place['latitude']}</li>
						</ul>
					</div>
				</article>
					`;
				})

				// Insert in to output div
				document.querySelector('#output').innerHTML = output;
			})
			.catch(err => console.log(err));
			e.preventDefault();
		};
		//Show check or remove
		function showIcon(icon){
			// Clear icons
			document.querySelector('.icon-remove').style.display = 'none';
			document.querySelector('.icon-check').style.display = 'none';
			// Show correct icon
			document.querySelector(`.icon-${icon}`).style.display = 'inline-flex';
		}

		//Delete Location
		function deleteLocation(e){
			if(e.target.className == 'delete'){
					document.querySelector('.message').remove();
					document.querySelector('.zip').value = '';
					document.querySelector('.icon-check').style.display = 'none';

			}
		}