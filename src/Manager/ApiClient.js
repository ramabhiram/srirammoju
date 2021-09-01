const baseUrl = "https://rickandmortyapi.com/api/"

export const getLocations = (page) => {

	fetch(baseUrl + "location").then(locations => locations.json()).then(locations=> {
		return locations
	})
}