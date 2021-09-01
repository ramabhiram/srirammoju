import React, { Component } from "react";
import LocationListCell from "./LocationsListCell";


class LocationList extends Component {

    state = { locations: [], loading: true, info: undefined, pages: 0 };

	componentDidMount() {
		fetch("https://rickandmortyapi.com/api/location")
		.then(r => r.json())
		.then(r=> {
			console.log("Here is result", r);
			this.setState({
				locations: r.results, loading: false, info: r.info, pages: r.info.pages
			})
		})
	}

	renderLocations() {
		const { locations } = this.state;
		return locations.map(location=> {
			return (
				<LocationListCell key={location.id} location={location}/>
			)
		})
	}

	renderPageNumber = (pages) => {
	  let i = 1; 
       while(i < pages + 1) {
		  this.renderNumber(i);
		  i++;
	   }
	}

	render() {
		const { pages, locations } = this.state;
		let numArray = [];
		for(let i = 0; i < pages; i ++) {
			numArray.push(i+1);
		}
		if(this.state.loading) {
			return (
				<div>
					Loading Location...
				</div>
			);
		}
		return (
			<div style={{ display: 'flex', flexDirection: 'row',height: '50%', overflow: 'scroll'}}>
			    {/* This is showing location list */}
			    <div>
					<div style={{ marginLeft: 15}}>
						<h1>Location List</h1>
						<div style={{display: 'flex', flexDirection: 'row'}}>
							{numArray.map(item => {
								return <div key={item} style={{margin: 10}}>{item}</div>
							})}
						</div>
					
					</div>
					{this.renderLocations()}
				</div>
				<div style={{ marginLeft: 25, marginTop: 25}}>
				   {locations.length > 19 && locations[19].residents.map(resident => {
					return <div style={{margin: 10}}>{resident}</div>
				   })}
				</div>
			    
			</div>
		);
	}
}

export default LocationList;