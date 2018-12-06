var D_shank=10;
var L_overall=70;
var D_head=13;
var T_head=5;
var L_point=13;
var P_point=5;
var W_point=3;
var D_pin=1.5;
var L_pin=72;
var XK=0;

var result;
var newDocSketch = AGM.Object();
{
    var headObject = AGM.Object();
    var headBottom = AGM.Position( 0, 0, 0 );
	var headTop = AGM.Position( 0, 0, T_head );
    result = AGM.Modelling.CreateSolidCylinder( headBottom, headTop, D_head, headObject );
	if ( !result )
	{
		ExitProgram;
	}
	
	var shankObject = AGM.Object();
    var shankBottom = AGM.Position( 0, 0, T_head );
	var shankTop = AGM.Position( 0, 0, L_overall - L_point);
	result = AGM.Modelling.CreateSolidCylinder( shankBottom, shankTop, D_shank, shankObject );
	if ( !result )
	{
		ExitProgram;
	}
	
	var pointSketch = AGM.Object();
	var pointObject = AGM.Object();
	AGM.Sketcher.CreateDocument(newDocSketch);
	AGM.Sketcher.CreateSketch( newDocSketch, 0, 0, L_overall - L_point, 1, 0, L_overall - L_point, 0, 1, L_overall - L_point, pointSketch );
	result = AGM.Sketcher.OpenSketch( pointSketch );
	if ( !result )
	{
		ExitProgram;
	}
	    AGM.Sketcher.CreateRect( -W_point/2, W_point/2 - P_point/2, W_point/2, P_point/2 );
	    AGM.Sketcher.CreateCircle( 0, W_point/2 - P_point/2, -W_point/2); 
	
	AGM.Sketcher.CloseSketch();
	result = AGM.Sketcher.Extrude( pointSketch, L_point );	
	if ( !result )
	{
		ExitProgram;
	}
	AGM.Sketcher.FixModel();
	var pointObject = AGM.Object();
	result = AGM.Modelling.GetModelBody( 2, pointObject);
	if ( !result )
	{
		ExitProgram;
	}

	AGM.Modelling.BoolUnite( headObject, shankObject );
	AGM.Modelling.BoolUnite( headObject, pointObject );
	
	var removalObject = AGM.Object();
	var removalBottom = AGM.Position( 0, 0, 0 );
	var removalTop = AGM.Position( 0, 0, L_overall);
	result = AGM.Modelling.CreateSolidCylinder( removalBottom, removalTop, D_pin/2, removalObject );
	if ( !result )
	{
		ExitProgram;
	}
	
	AGM.Modelling.BoolSubtract( headObject, removalObject );
	
	if(XK > 0)
	{
	    var pinObject = AGM.Object();
		var pinBottom = AGM.Position( 0, 0, 0 );
		var pinTop = AGM.Position( 0, 0, L_pin );
		result = AGM.Modelling.CreateSolidCylinder( pinBottom, pinTop, D_pin/2, pinObject );
	}
}
