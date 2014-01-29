function Player(props){
	if(props === undefined) props = {};
	if(props.username !== undefined) this.username = props.username;

}
Player.prototype.sayHi = function(){
	console.log("Hi! I am "+this.username);
}

Player.prototype.username = "anonymoouse";

module.exports = Player;

