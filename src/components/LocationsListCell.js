import React from 'react';

const LocationListCell = (props) => {
	const { location } = props;
	return (
		<div style={{margin: 15, background: '#FAF9F6', width: 300, borderWidth: '2px', borderColor: 'lightgrey', borderRadius: 10}}>
			<div style={{ marginTop: 5, marginBottom: 5, fontSize: 20}}>
				Location: {location.name}
			</div>
			<div>
				Type: {location.type}
			</div>
			<div>
				Dimension: {location.dimension}
			</div>
		</div>
	);
}

export default LocationListCell;

