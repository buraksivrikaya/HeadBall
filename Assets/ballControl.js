#pragma strict

function reset(){
	rigidbody2D.position.x=0;
	rigidbody2D.position.y=0;
	
	rigidbody2D.velocity.x=0;
	rigidbody2D.velocity.y=0;
}

function sleep() {
	rigidbody2D.Sleep();
	rigidbody2D.velocity.y=10;
	yield WaitForSeconds(3);
}
function OnCollisionEnter2D (colInfo : Collision2D){
	if (colInfo.collider.tag=="player1"){
		audio.pitch= Random.Range(0.75f, 1.5f);
		audio.Play();
	}
	else if (colInfo.collider.tag=="player2"){
		audio.pitch=Random.Range(0.0f, 0.75f);
		audio.Play();
	}
	else{
		audio.pitch= Random.Range(1.5f,2f);
		audio.Play();
	}
	
}