#pragma strict

static var SCORE=[0,0];

static function addScore(kale){
	Debug.Log("skor yazıldı");
	if(kale=="kale1"){SCORE[1]++;}
	else{SCORE[0]++;}
}
