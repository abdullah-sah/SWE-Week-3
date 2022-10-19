const {Character} = require('../1-easy/static')
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

const p = new Party('boby');
console.log(Party.leader);

module.exports = {Party, Character}