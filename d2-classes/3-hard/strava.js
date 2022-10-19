
/* Define a new class called Exercise
    The constructor will take the following arguments and set them as properties of any new instance.
            * @param {number} distance -  in kilometres
            * @param {number} time -  in seconds
            * @param {number} heartBeats - 
            * @param {number} steps
    Methods to define
        toMinutesAndSeconds
            * @param {number} seconds 
            * @return {string} - in the format "4m:0s"  the seconds will be rounded to nearest integer.
        pace
            @return {string}  -  pace per km in minutes and seconds format "4m:0s"
        beatsPerMinute
            @return {} - beatsPerMinute returns the average beats per minute as integer
        strideLength 
            @return {number} - strideLength returns the average length per stride.
*/

class Exercise {
	constructor(distance, time, heartBeats, steps) {
		this.distance = distance;
		this.time = time;
		this.heartBeats = heartBeats;
		this.steps = steps;
	}

	toMinutesAndSeconds(number) {
		// number = how long in seconds
		// return should be: string = how long in minutes and seconds --- format: "4m:9s"
		// 		In 'string', seconds will be rounded to nearest integer
		const minutes = number / 60;
		const seconds = number % 60;
		return `${minutes}m:${seconds}s`;
	}

	pace() {
		// 1km/second = 60km/minute
		const pace = this.distance / this.time;
		return `${this.distance}m:${pace}`;
	}

	beatsPerMinute() {
		return this.heartBeats / (this.time / 60);
	}

	strideLength() {
		return (this.distance * 1000) / this.steps;
	}
	
}


module.exports = { Exercise }