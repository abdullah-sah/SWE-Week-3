/*
You will have to start with static.js as you will need the Character class.

Define new class called Mage
*/
const {Character} = require('./static')

class Mage extends Character {
	constructor(name) {
		super(name);
		this.hp = 80;
		this.mana = 100;
	}
}


module.exports = {Mage}