H=11;
D=8;
L=100;
B=30
P=5;
R=10;

var b1 = AGM.Object();
result = AGM.Modelling.CreateSolidCylinder( AGM.Position( 0, 0, 0 ), AGM.Position( 0, 0, 5 ), H/2, b1 );
if ( !result )
{
	ExitProgram;
}
	
var b2 = AGM.Object();
result = AGM.Modelling.CreateSolidCylinder( AGM.Position( 0, 0, 5 ), AGM.Position( 0, 0, L - B ), D/2, b2 );
if ( !result )
{
	ExitProgram;
}

var b3 = AGM.Object();
result = AGM.Modelling.CreateSolidCylinder( AGM.Position( 0, 0, L - B ), AGM.Position( 0, 0, L ), P/2, b3 );
if ( !result )
{
	ExitProgram;
}

AGM.Modelling.BoolUnite( b1, b2 );
AGM.Modelling.BoolUnite( b1, b3 );

var path = AGM.Object();	
{
    var newDocSketch1 = AGM.Object();
    AGM.Sketcher.CreateDocument(newDocSketch1);
	var sketch1 = AGM.Object();
	AGM.Sketcher.CreateSketch( newDocSketch1, 0, 0, L - B, 1, 0, L - B, 0, 1, L - B, sketch1 );
	result = AGM.Sketcher.OpenSketch( sketch1 );
	if ( !result )
	{
		ExitProgram;
	}
	AGM.Sketcher.CreateCircle( 0, 0, P/2+R );
	AGM.Sketcher.CloseSketch();
	result = AGM.Sketcher.ConvertToPath(sketch1, path);
	if ( !result )
	{
		ExitProgram;
	}
}

var profile = AGM.Object();	
{
    var wire = AGM.Object();
    var newDocSketch2 = AGM.Object();
    AGM.Sketcher.CreateDocument(newDocSketch2);
	var sketch2 = AGM.Object();
	AGM.Sketcher.CreateSketch( newDocSketch2, 0, 0, L - B, 0, 0, L - B + 1, 0, 1, L - B, sketch2 );
	result = AGM.Sketcher.OpenSketch( sketch2 );
	if ( !result )
	{
		ExitProgram;
	}
	AGM.Sketcher.CreateCircle( 0, P/2+R, R );
	AGM.Sketcher.CloseSketch();
	result = AGM.Sketcher.ConvertToWire(sketch2, wire);
	if ( !result )
	{
		ExitProgram;
	}
	AGM.Modelling.CoverPlanarWire(wire, profile);
}

AGM.Modelling.SweepByPath(profile, path);
AGM.Modelling.BoolSubtract( b1, profile );
