public var movePath : Transform[];

public var percentage : float;

private var introPos : float = .1;
private var startPos : float = .225;
private var midPos :float =.5;
private var endPos : float = 1;

//gui styling
public var font : Font;
private var style : GUIStyle = new GUIStyle();

function Start(){
	style.font=font;
	SlideTo(introPos,2);
}
	
function OnGUI(){
	//percentage=GUI.VerticalSlider(new Rect(Screen.width-20,20,15,Screen.height-40),percentage,1,0);
	iTween.PutOnPath(gameObject,movePath,percentage);
	//iTween.PutOnPath(lookTarget,lookPath,percentage);
	//transform.LookAt(iTween.PointOnPath(lookPath,percentage));
	//
	
	if(GUI.Button(new Rect(5,Screen.height-25,50,20),"Start")){
		SlideTo(startPos,5.0f);
	}
	if(GUI.Button(new Rect(60,Screen.height-25,50,20),"Mid")){
		SlideTo(midPos,3.0f);
	}
	if(GUI.Button(new Rect(115,Screen.height-25,50,20),"End")){
		SlideTo(endPos,7.0f);
	}
}

function OnDrawGizmos(){
	iTween.DrawPath(movePath,Color.magenta);
	
}


function SlideTo(position : float, time : float){
	iTween.Stop(gameObject);
	iTween.ValueTo(gameObject,iTween.Hash("from",percentage,"to",position,"time",time,"easetype",iTween.EaseType.easeInOutCubic,"onupdate","SlidePercentage"));	
}

function SlidePercentage(p : float){
	percentage=p;
}