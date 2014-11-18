#pragma strict

var moveUp : KeyCode;
var moveRight: KeyCode;
var moveLeft: KeyCode;


var jumprange : int=0;
var landed : boolean=true;

function Update () {
	if(Input.GetKey(moveUp) && jumprange<10){
		rigidbody2D.velocity.y=8;
		jumprange++;
		landed=false;
	}
	else if(Input.GetKey(moveRight)){
		rigidbody2D.velocity.x=13;
	}
	else if(Input.GetKey(moveLeft)){
		rigidbody2D.velocity.x=-13;
	}
	else {
		rigidbody2D.velocity.x=0;
	}
}
function OnCollisionEnter2D ( col : Collision2D) {
	if (col.gameObject.tag=="ground"){
		jumprange=0;
		landed=true;
	}
}
function reset(){
	if(tag=="player1"){
		rigidbody2D.position.x=-5;
		rigidbody2D.position.y=-3;
		}
	else {
		
		rigidbody2D.position.x=5;
		rigidbody2D.position.y=-3;
		}
	rigidbody2D.velocity.x=0;
	rigidbody2D.velocity.y=10;
	yield WaitForSeconds(3);
}