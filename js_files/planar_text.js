var Block = AGM.Object();
var pos1 = AGM.Position( -5, 0, 0 );
var pos2 = AGM.Position( 5, 6, 3 );
AGM.Modelling.CreateSolidBlock(pos1, pos2, Block);

var origin = AGM.Position( 0, 3, 3 );
var x_axis = AGM.Vector( 1, 0, 0 );
var y_axis = AGM.Vector( 0, 1, 0 );
var textSheet = AGM.Object();
AGM.Modelling.CreateTextSheet( "7", "Arial", 20, 4, 1, origin, x_axis, y_axis, false, textSheet );
AGM.Modelling.SweepByDist(textSheet, -0.1, false, 10);
AGM.Modelling.BoolSubtract(Block, textSheet);