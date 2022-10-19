class Character {
<<<<<<< HEAD
	constructor(name) {
		this.name = name;
		this.xp = 1;
		this.hp = 100;
		Character.totalCharacters++;
	}
	
	static totalCharacters = 0;
}
=======
    constructor (name) {
        this.name = name
        this.xp = 1
        this.hp = 100
        this.mana = 50
        Character.totalCharacters++
    }

    static totalCharacters = 0
}


>>>>>>> 39ed648f84c5ec476871b2834b3069093e9b4f65



module.exports = {Character}