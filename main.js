document.querySelector('#zipForm').addEventListener
		('submit', getLocationInfo);

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
				console.log(data);
			})
			.catch(err => console.log(err));
			e.preventDefault();
		};

		function showIcon(icon){
			// Clear icons
			document.querySelector('.icon-remove').style.display = 'none';
			document.querySelector('.icon-check').style.display = 'none';
			// Show correct icon
			document.querySelector(`.icon-${icon}`).style.display = 'inline-flex';
		}