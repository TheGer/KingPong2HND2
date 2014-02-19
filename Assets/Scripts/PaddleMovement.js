#pragma strict




function Start () {

}
function OnGUI()
{
	GUI.Label(Rect(0,0,100,50),"X: "+Input.mousePosition.x + "  " + Input.mousePosition.y);
}


function Update () {
	var leftmostonscreen:float;
	var rightmostonscreen:float;
	
	//get the x value of the leftmost on the screen
	leftmostonscreen = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	
	//get the x value of the rightmost on the screen
	rightmostonscreen = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
	
	
	
	Debug.Log(leftmostonscreen + " " + rightmostonscreen);
	
	if ( transform.position.x < leftmostonscreen )
	{
		transform.position.x = rightmostonscreen;
	}
	
	if ( transform.position.x > rightmostonscreen)
	{
		transform.position.x = leftmostonscreen;
	
	}
	
	transform.Translate(Vector3.right * 5 * Input.GetAxis("Horizontal") * Time.deltaTime);
	//mouse control.
	transform.position.x = Camera.main.ScreenToWorldPoint(Input.mousePosition).x;
	
}