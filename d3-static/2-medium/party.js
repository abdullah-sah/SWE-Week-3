const {Character} = require('../1-easy/static')
<<<<<<< HEAD
class Party extends Character {
  
	constructor(name) {
		super(name);
		this.partyMembers = {
			leader: Party.leader,
			members: [name]
		}
	}

	static leader = this.name;
	static members = this.partyMembers;
}
=======
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
>>>>>>> 39ed648f84c5ec476871b2834b3069093e9b4f65

const p = new Party('boby');
console.log(Party.leader);

module.exports = {Party, Character}