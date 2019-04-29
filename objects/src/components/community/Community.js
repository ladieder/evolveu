import City from "./City"

class Community {
	constructor() {
		this.cityList = [];
		this.counter = 0;
	}

	createCity(name, lat, long, pop) {
		const newCity = new City(this.counter, name, lat, long, pop);
		this.cityList.push(newCity);
		this.counter ++;
	}

	deleteCity(delID) {
		this.cityList.splice(this.cityList.findIndex(item => item.cityID === delID), 1);
	}

	whichSphere(lat) {
		if (lat === 0) {
			return "equator";
		} else if (lat > 0) {
			return "northern";
		} else if (lat < 0) {
			return "southern";
		} else {
			return "error: enter latitude";
		}
	}

	getMostNorthern() {
		if (this.cityList.length > 0) {
			let maxLat = this.cityList[0].lat;
			let maxLatName = this.cityList[0].name;
			this.cityList.forEach(item => {
				if (item.lat > maxLat) {
					maxLat = item.lat;
					maxLatName = item.name;
				}
			})
			return maxLatName;
		}
	}

	getMostSouthern() {
		if (this.cityList.length > 0) {
			let minLat = this.cityList[0].lat;
			let minLatName = this.cityList[0].name;
			this.cityList.forEach(item => {
				if (item.lat < minLat) {
					minLat = item.lat;
					minLatName = item.name;
				}
			})
			return minLatName;
		}
	}

	getPopulation() {
		return (this.cityList.reduce((accumulator, item) => {
			return accumulator + item.pop
		}, 0));
	}
}

export default Community;