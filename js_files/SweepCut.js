D=1.5;
L=60;
P=0.6;
W=0.3
N=40;
H=3;
T=4;
R=10;

var b1 = AGM.Object();
result = AGM.Modelling.CreateSolidCylinder( AGM.Position( 0, 0, 0 ), AGM.Position( 0, 0, T ), H/2, b1 );
if ( !result )
{
	ExitProgram;
}
	
var b2 = AGM.Object();
result = AGM.Modelling.CreateSolidCylinder( AGM.Position( 0, 0, T ), AGM.Position( 0, 0, N ), D/2, b2 );
if ( !result )
{
	ExitProgram;
}

var b3 = AGM.Object();	
{
    var newDocSketch = AGM.Object();
    AGM.Sketcher.CreateDocument(newDocSketch);
	var sketch1 = AGM.Object();
	AGM.Sketcher.CreateSketch( newDocSketch, 0, 0, N, 1, 0, N, 0, 1, N, sketch1 );
	result = AGM.Sketcher.OpenSketch( sketch1 );
	if ( !result )
	{
		ExitProgram;
	}
	AGM.Sketcher.CreateRect( -P/2, -W/2, P/2, W/2 );
	AGM.Sketcher.CloseSketch();
	result = AGM.Sketcher.Extrude( sketch1, L - N );	
	if ( !result )
	{
		ExitProgram;
	}
	AGM.Sketcher.FixModel();
	result = AGM.Part.GetBody( 2, b3);
	if ( !result )
	{
		ExitProgram;
	}
}

AGM.Modelling.BoolUnite( b1, b2 );
AGM.Modelling.BoolUnite( b1, b3 );

var path = AGM.Object();	
{
    var newDocSketch2 = AGM.Object();
    AGM.Sketcher.CreateDocument(newDocSketch2);
	var sketch2 = AGM.Object();
	AGM.Sketcher.CreateSketch( newDocSketch2, 0, 0, N, 1, 0, N, 0, 1, N, sketch2 );
	result = AGM.Sketcher.OpenSketch( sketch2 );
	if ( !result )
	{
		ExitProgram;
	}
	AGM.Sketcher.CreateRect( -P/2-R, -W/2-R, P/2+R , W/2+R );
	AGM.Sketcher.CloseSketch();
	result = AGM.Sketcher.ConvertToPath(sketch2, path);
	if ( !result )
	{
		ExitProgram;
	}
}

var profile = AGM.Object();	
{
    var wire = AGM.Object();
    var newDocSketch3 = AGM.Object();
    AGM.Sketcher.CreateDocument(newDocSketch3);
	var sketch3 = AGM.Object();
	AGM.Sketcher.CreateSketch( newDocSketch3, 0, 0, N, 0, 0, N+1, 0, 1, N, sketch3 );
	result = AGM.Sketcher.OpenSketch( sketch3 );
	if ( !result )
	{
		ExitProgram;
	}
	AGM.Sketcher.CreateCircle( 0, W/2+R, R );
	AGM.Sketcher.CloseSketch();
	result = AGM.Sketcher.ConvertToWire(sketch3, wire);
	if ( !result )
	{
		ExitProgram;
	}
	AGM.Modelling.CoverPlanarWire(wire, profile);
}

AGM.Modelling.SweepByPath(profile, path);
AGM.Modelling.BoolSubtract( b1, profile );
