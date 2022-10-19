class Character {
	constructor(name) {
		this.name = name;
		this.xp = 1;
		this.hp = 100;
		Character.totalCharacters++;
	}
	
	static totalCharacters = 0;
}



module.exports = {Character}