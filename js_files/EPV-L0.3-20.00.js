var P = 0.3;
var L = 30;
var H = 2;
var T = 15;
var R = 0.5;

var result = false;

var newDocSketch = AGM.Object();
{
	var newDoGSketch1 = AGM.Object();

	AGM.Sketcher.CreateDocument(newDocSketch); //New SketchDocument
	AGM.Sketcher.CreateSketch( newDocSketch, 0, 0, 0, 1, 0, 0, 0, 1, 0, newDoGSketch1 );
	result = AGM.Sketcher.OpenSketch( newDoGSketch1 );

	if ( result == true )
	{
		AGM.Sketcher.CreateCircle( 0, 0, H/2 ); // create a hole at the upper left of rect.
		AGM.Sketcher.CloseSketch();

		AGM.Sketcher.Extrude( newDoGSketch1, T );
	}
}

{
	var newDoGSketch2 = AGM.Object();
	AGM.Sketcher.CreateSketch( newDocSketch, 0, 0, T, 1, 0, T, 0, 1, T, newDoGSketch2 );
	result = AGM.Sketcher.OpenSketch( newDoGSketch2 );
	if ( result == true )
	{
		AGM.Sketcher.CreateCircle( 0, 0, P/2 );
		AGM.Sketcher.CloseSketch();
		
		AGM.Sketcher.Extrude( newDoGSketch2, L - T );
	}
}
AGM.Sketcher.FixModel();

{
	var pos = AGM.Position( 0, 0, 0 );
	var vec = AGM.Vector( 0, P/2, T );	
	var Edge = AGM.Modelling.PickEdge( pos, vec, 10e-4 );
	AGM.Modelling.BlendEdge( Edge, R );
}