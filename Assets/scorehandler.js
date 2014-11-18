#pragma strict

function OnTriggerEnter2D (col : Collider2D) {

	if(col.name == "ball"){
		
		audio.Play();
		Score.addScore(name);
		
		
		col.SendMessage("reset");
		col.SendMessage("sleep");
		GameObject.FindGameObjectWithTag("player1").SendMessage("reset");
		GameObject.FindGameObjectWithTag("player2").SendMessage("reset");
		//yield WaitForSeconds(2);
	}
}
