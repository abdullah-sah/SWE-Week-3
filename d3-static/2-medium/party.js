const {Character} = require('../1-easy/static')
/*
class defined as Party
	Constructor 
		@param {object} leader - this object is expected to be an instance of the character class.
		
		constructor should throw the following error 'A party needs a leaader!' if no leader object is provided.
		constructor should throw the following error '${leader.name} is already leading a party.' if the character is used more than once.
		a leader property that includes the leader's name.
		a members property that is an array, with the first element being the leader object.

		Static Properties
				totalParties - keeps a running count of parties created
				currentLeaders - an array of the names of leaders of each created party.  (this will help with throwing the above errors)

*/


class Party {
	constructor(leader) {
		if (typeof leader === 'undefined') {
			throw new Error('A party needs a leader!');
		} else if (Party.currentLeaders.includes(leader.name)) {
			throw new Error(`${leader.name} is already leading a party.`);
		}

		this.leader = leader.name;
		this.members = [leader];
		Party.totalParties++;
		Party.currentLeaders.push(leader.name);
	}

	static totalParties = 0;
	static currentLeaders = [];
}

module.exports = {Party, Character}