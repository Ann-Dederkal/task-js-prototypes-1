var Monster = {
	
	constructor : function (name, fullHealth, damage) {
		this.name = name;
		this.fullHealth = fullHealth;
		this.currentHealth = fullHealth;
		return this;								
	},

	greet : function () {
		console.log("Hi! I'm a monster, and my name is " + this.name);
	}

};


var catMonster = Object.create(Monster);
catMonster.constructor = function (name, fullHealth, damage) {
	Monster.constructor.apply(this, arguments);                     
																  
	this.scratch =  function(){};
	return this;									
};


var birdMonster = Object.create(Monster);
birdMonster.constructor = function (name, fullHealth, damage) {
	Monster.constructor.apply(this, arguments);                     
																 
	this.peck =  function(){};
	return this;									
};


var megacat = Object.create(catMonster).constructor("Мегакот", 50, 5);

var superbird = Object.create(birdMonster).constructor("Суперптица", 60, 3);






