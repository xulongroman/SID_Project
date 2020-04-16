var Cylinder = AGM.Object();
var pos1 = AGM.Position( -5, 0, 0 );
var pos2 = AGM.Position( 5, 0, 0 );
AGM.Modelling.CreateSolidCylinder( pos1, pos2, 10, Cylinder );

var origin = AGM.Position( 0, 0, 10 );
var x_axis = AGM.Vector( 1, 0, 0 );
var y_axis = AGM.Vector( 0, 1, 0 );
var textSheet = AGM.Object();
AGM.Modelling.CreateTextSheet( "ACIS 3D Modeler", "Times New Roman", 20, 6, 1, origin, x_axis, y_axis, false, textSheet);
AGM.Modelling.SweepByDist(textSheet, -10);

AGM.Modelling.IntersectHollowCylinder(textSheet, pos1, pos2, 10, 8);

AGM.Modelling.BoolSubtract(Cylinder, textSheet);
