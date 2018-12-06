	var Points= [];
	Points[0] = AGM.Position( -10, -10, -10 );
	Points[1] = AGM.Position( 10, 10, 10 );
	
	var DoBlock = AGM.Object();
	var ret;
	ret = AGM.Modelling.CreateSolidBlock( Points[0], Points[1], DoBlock );
	
	var DoCylinder = AGM.Object();
	posBottom = AGM.Position( 0, 0, -20 );
	posTop = AGM.Position( 0, 0, 20 );
	AGM.Modelling.CreateSolidCylinder( posBottom, posTop, 5, DoCylinder );
    
    AGM.Modelling.BoolSubtract(DoBlock, DoCylinder);
	var Loops= [];
	var theface = AGM.Modelling.PickFace(AGM.Position(8, 0, 0), AGM.Vector(0, 0, 1), 10e-4);
	Loops = AGM.Modelling.GetLoops(theface);
	var loop_number = Loops.length;
	var loop_type = AGM.Modelling.GetLoopType(Loops[0]);
    var edges = AGM.Modelling.GetEdges(Loops[0]);
    if(loop_type == 1)
    {
        AGM.Modelling.ChamferEdge( edges, 1 );
    }	
	else
    {
	    AGM.Modelling.BlendEdge( edges, 1 );
    }
	