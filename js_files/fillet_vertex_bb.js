var result = false;
var newDocSketch = AGM.Object();
var wirebody = AGM.Object();
//Base
{
	var newDoGSketch1 = AGM.Object();
	AGM.Sketcher.CreateDocument(newDocSketch); //New SketchDocument
	AGM.Sketcher.CreateSketch( newDocSketch, 0, 0, 0, 1, 0, 0, 0, 1, 0, newDoGSketch1 );
	result = AGM.Sketcher.OpenSketch( newDoGSketch1 );
		//AGM.Sketcher.CreateRect( -10, -5, 10, 5 ); //Create a rect.
		AGM.Sketcher.CreateLine( 0, 5, 5, 5 ); 
		AGM.Sketcher.CreateLine( 5, 5, 5, 0 ); 
		AGM.Sketcher.CreateLine( 0, 5, 5, 0 ); 
	AGM.Sketcher.CloseSketch();
	AGM.Sketcher.ConvertToWire(newDoGSketch1, wirebody);
	
	var v1 = AGM.Modelling.PickVertex(AGM.Position(0, 0, 0), AGM.Vector( 0, 1, 0), 10e-4);
	var v2 = AGM.Modelling.PickVertex(AGM.Position(0, 0, 0), AGM.Vector( 1, 1, 0), 10e-4);
	var v3 = AGM.Modelling.PickVertex(AGM.Position(0, 0, 0), AGM.Vector( 1, 0, 0), 10e-4);
	/*var v4 = AGM.Modelling.PickVertex(AGM.Position(0, 0, 0), AGM.Vector(1, 1, 0), 10e-4);*/
	AGM.Modelling.FilletVertex([v1,v2,v3], 1);
	/*
	var profile = AGM.Object();
	AGM.Modelling.CoverPlanarWire(wirebody, profile);
	var path = AGM.Object();
	AGM.Modelling.CreateLineEdge(AGM.Position(0, 0, 0), AGM.Position(0, 0, 5), path);
	AGM.Modelling.Sweep(profile, path);
	AGM.Part.RemoveBody(0);*/
}