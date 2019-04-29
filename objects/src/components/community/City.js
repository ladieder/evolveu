class City {
	constructor(cityID, name, lat, long, pop) {
		this.cityID = cityID;
		this.name = name;
		this.lat = lat;
		this.long = long;
		this.pop = pop;
	}

	show() {
		return (this.cityID + this.name + this.lat + this.long + this.pop);
	}

	movedIn(inPop) {
		this.pop += inPop;
		return this.pop;
	}

	movedOut(outPop) {
		this.pop -= outPop;
		return this.pop;
	}

	howBig() {
		if (this.pop > 100000) {
			return "City";
		}
		else if (this.pop > 20000) {
			return "Large Town";
		}
		else if (this.pop > 1000) {
			return "Town";
		}
		else if (this.pop > 100) {
			return "Village";
		} else if (this.pop > 1) {
			return "Hamlet";
		} else {
			return "error";
		}
	}
}

export default City;