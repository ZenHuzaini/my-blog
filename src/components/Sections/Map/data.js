import { faker } from "@faker-js/faker";
faker.locale = "en_US";

const locations = [];
const trueFalse = [true, false];
for (let index = 0; index < 300; index++) {
	const isMalfunction = trueFalse[Math.floor(Math.random() * 2)];
	const aa = faker.address.nearbyGPSCoordinate([38, -100], 1000, true);
	locations.push({
		name: faker.address.city(),
		coordinates: [aa[1], aa[0]], //[faker.address.longitude(), faker.address.latitude()], //faker.address.nearbyGPSCoordinate(),
		isMalfunction,
		message: "Heart rate sensor failed when user is sleeping",
		lockoutNotifictaion: Math.floor(Math.random() * 600),
		nonLockoutNotifictaion: Math.floor(Math.random() * 300),
		sn: `4110W${index}41`,
	});
}

let data = {
	city: [
		//                                  longitude , latitude
		{
			name: "2345 Andrew Saint, Cataula",
			coordinates: [-84.86879, 50.655182],
			population: 13287000,
			isMalfunction: false,
		},
		{
			name: "2213 Green Trl, Toronto",
			coordinates: [-80.86879, 43.655182],
			population: 13287000,
			isMalfunction: false,
		},
		{
			name: "6789 Country Road, Indiana Polis",
			coordinates: [-84.86879, 40.655182],
			population: 13287000,
			isMalfunction: false,
		},
		{
			name: "12345 MCT Trail, Michigan",
			coordinates: [-85.86879, 43.655182],
			population: 13287000,
			isMalfunction: false,
		},
		{
			name: "345 Yellow Smoke Trl, Lo",
			coordinates: [-85.86879, 40.655182],
			population: 13287000,
			isMalfunction: false,
		},
		{
			name: "2345 North 600 East, Angolaa",
			coordinates: [-84.86879, 41.655182],
			population: 13287000,
			isMalfunction: false,
		},
		{
			name: "2221 red Smoke Trl, Cataula",
			coordinates: [-84.86879, 78.655182],
			population: 13287000,
			isMalfunction: false,
		},
		{
			name: "2345 outheast Byrd Street, Port Saint Lucie",
			coordinates: [-80.135818, 27.067631],
			population: 21009000,
			isMalfunction: true,
			message: "The V02 sensor failed to start",
		},
		{
			name: "55678 Pheonix Street, Kissimmee National Park",
			coordinates: [-81.135818, 28.067631],
			isMalfunction: true,
			population: 21009000,
			message: "Heart rate sensor failed when user is sleeping",
		},
		{
			name: "2345 Heiner Road, Washington",
			coordinates: [-80.135818, 40.067631],
			population: 21009000,
			isMalfunction: true,
			message: "Something went wrong with the temperature",
		},
		...locations,
	],
	minLat: -6.1751,
	maxLat: 55.7558,
	minLong: 37.6173,
	maxLong: 139.6917,
};

// faker.address.nearbyGPSCoordinate()

export default data;
