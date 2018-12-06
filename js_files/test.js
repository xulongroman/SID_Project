var R1 = 3; //This value is the radius of hole in a cylinder at top of model.
var W1 = 2; //This value is the distance between a edge of hole and one of cyliner.


var SketchID = 0;
var result = false;

var newDocSketch = AGM.Object();
//Base
{
	var newDoGSketch1 = AGM.Object();

	AGM.Sketcher.CreateDocument(newDocSketch); //New SketchDocument
	AGM.Sketcher.CreateSketch( newDocSketch, 0, 0, 0, 1, 0, 0, 0, 1, 0, newDoGSketch1 );
	result = AGM.Sketcher.OpenSketch( newDoGSketch1 );

	if ( result == true )
	{
		AGM.Sketcher.CreateRect( -10, -10, 10, 10 ); //Create a rect.
		AGM.Sketcher.CreateCircle( -8, 8, 1 ); // create a hole at the upper left of rect.
		AGM.Sketcher.CreateCircle( -8, -8, 1 );// create a hole at the lower left of rect.
		AGM.Sketcher.CreateCircle( 8, -8, 1 ); // create a hole at the lower right of rect.
		AGM.Sketcher.CreateCircle( 8, 8, 1 ); // create a hole at the upper right of rect.
		AGM.Sketcher.CloseSketch();

		AGM.Sketcher.Extrude( newDoGSketch1, 3 );
	}
}

//Create an arm1.
{
	var newDoGSketch2 = AGM.Object();
	SketchID = AGM.Sketcher.CreateSketch( newDocSketch, 0, 0, 0, 1, 0, 0, 0, 0, 1, newDoGSketch2 ); //New Sketch on XZ plane.
	result = AGM.Sketcher.OpenSketch( newDoGSketch2 );

	if ( result == true )
	{
		var Points= [];
		Points[0] = AGM.Position( 0, 20, 0 );
	
		Points[1] = AGM.Position( -10, 3, 0 );

		Points[2] = AGM.Position( 10, 3, 0 );

		Points[3] = AGM.Position( 0, 20, 0 );
		
		AGM.Sketcher.CreatePolygon( Points );
		AGM.Sketcher.CloseSketch();
		
		AGM.Sketcher.Extrude( newDoGSketch2, 3, false, false, true );
	}

}
//Create an arm2.
{
	var newDoGSketch3 = AGM.Object();
	SketchID = AGM.Sketcher.CreateSketch( newDocSketch, 0, 0, 0, 0, 1, 0, 0, 0, 1, newDoGSketch3 );
	result = AGM.Sketcher.OpenSketch( newDoGSketch3 );

	if ( result == true )
	{
		var Points2= [];
		Points2[0] = AGM.Position( -2, 20, 0 );

		Points2[1] = AGM.Position( -5, 3, 0 );

		Points2[2] = AGM.Position( 5, 3, 0 );

		Points2[3] = AGM.Position( 2, 20, 0 );
		
		Points2[4] = AGM.Position( -2, 20, 0 );

		AGM.Sketcher.CreatePolygon( Points2 ); //Create a polygon.
		AGM.Sketcher.CloseSketch();
		
		AGM.Sketcher.Extrude( newDoGSketch3, 3, false, false, true );
	}
}

//Create a cylinder at top of model
{
	var newDoGSketch4 = AGM.Object();
	AGM.Sketcher.CreateSketch( newDocSketch, 0, 0, 20, 1, 0, 20, 0, 0, 21, newDoGSketch4 );
	result = AGM.Sketcher.OpenSketch( newDoGSketch4 );
	if ( result == true )
	{
		AGM.Sketcher.CreateCircle( 0, 0, R1 + W1 );
		AGM.Sketcher.CloseSketch();
		
		AGM.Sketcher.Extrude( newDoGSketch4, 8, false, false, true );
	}
}

//Create a hole in a cylinder at top of model.
{
	var newDoGSketch5 = AGM.Object();
	SketchID = AGM.Sketcher.CreateSketch( newDocSketch, 0, -4, 20, 1, -4, 20, 0, -4, 21, newDoGSketch5 );
	result = AGM.Sketcher.OpenSketch( newDoGSketch5 );
	if ( result == true )
	{
		AGM.Sketcher.CreateCircle( 0, 0, R1 );
		AGM.Sketcher.CloseSketch();
		
		AGM.Sketcher.Extrude( newDoGSketch5, 10, true, true );
	}
}
AGM.Sketcher.FixModel();


//Blend coners of base.
{
	//Corner1
	{
		var pos = AGM.Position( 10, -10, 1.5 );
		var vec = AGM.Vector( -1, 1, 0 );
		
		var Edge = AGM.Modelling.PickEdge( pos, vec, 1.0 );
		AGM.Modelling.BlendEdge( Edge, 2.0 );
	}
	
	//Corner2
	{
		var pos = AGM.Position( 10, 10, 1.5 );
		var vec = AGM.Vector( -1, -1, 0 );

		var Edge = AGM.Modelling.PickEdge( pos, vec, 1.0 );
		AGM.Modelling.BlendEdge( Edge, 2.0 );
	}
	
	//Corner3
	{
		var pos = AGM.Position( -10, 10, 1.5 );
		var vec = AGM.Vector( 1, -1, 0 );

		var Edge = AGM.Modelling.PickEdge( pos, vec, 1.0 );
		AGM.Modelling.BlendEdge( Edge, 2.0 );
	}
	
	//Corner4
	{
		var pos = AGM.Position( -10, -10, 1.5 );
		var vec = AGM.Vector( 1, 1, 0 );

		var Edge = AGM.Modelling.PickEdge( pos, vec, 1.0 );
		AGM.Modelling.BlendEdge( Edge, 2.0 );
	}
}

//Blend edge between arm1 and base.
{
	//edge1
	{
		var pos = AGM.Position( 0, -5, 3 );
		var vec = AGM.Vector( 0, 1, -1 );

		var Edge = AGM.Modelling.PickEdge( pos, vec, 1.0 );
		AGM.Modelling.BlendEdge( Edge, 3.0 );
	}
	
	//edge2
	{
		var pos = AGM.Position( 0, 5, 3 );
		var vec = AGM.Vector( 0, -1, -1 );

		var Edge = AGM.Modelling.PickEdge( pos, vec, 1.0 );
		AGM.Modelling.BlendEdge( Edge, 3.0 );
	}
}

/*
var pos = new Point();
pos.x = 5;
pos.y = -1;
pos.z = 11;

var vec = new Vector();
vec.x = 0;
vec.y = 1;
vec.z = -1;
var Edge = AGM.Modelling.pickEdge( pos, vec, 2.0 );
AGM.Modelling.blendEdge( Edge, 2.0 );
*/
/*
AGM.View.front();
AGM.View.back();
AGM.View.left();
AGM.View.right();
AGM.View.iso();
AGM.View.top();
AGM.View.bottom();
AGM.View.setCamera(10, 10, 10 );
*/


