var PI = 3.141592653589;
var H1 = 10;
var H2 = 6;
var T = 5;
var Radian = Math.atan((H1-H2)/2/T);
var Angle = Radian/PI * 180;
var result = false;

var newDocSketch = AGM.Object();
{
	var newDoGSketch1 = AGM.Object();

	AGM.Sketcher.CreateDocument(newDocSketch); //New SketchDocument
	AGM.Sketcher.CreateSketch( newDocSketch, 0, 0, 0, 1, 0, 0, 0, 1, 0, newDoGSketch1 );
	result = AGM.Sketcher.OpenSketch( newDoGSketch1 );

	if ( result == true )
	{
		AGM.Sketcher.CreateCircle( 0, 0, H1/2 ); 
		AGM.Sketcher.CloseSketch();
		//1拉伸草图，2拉伸高度，3是否反向拉伸，4是否切除拉伸，5是否双向拉伸，6拉伸角度
		AGM.Sketcher.Extrude( newDoGSketch1, T, false, false, false, -Angle );
	}
}

AGM.Sketcher.FixModel();
