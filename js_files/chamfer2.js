	var Points= [];
	// Points[0] = new Point;
	// Points[0].x = 0;
	// Points[0].y = 0;
	// Points[0].z = 0;

	// Points[1] = new Point;
	// Points[1].x = 10;
	// Points[1].y = 10;
	// Points[1].z = 10;
	Points[0] = AGM.Position( 0, 0, 0 );
	Points[1] = AGM.Position( 10, 10, 10 );
	
	var DoBlock = AGM.Object();
	var ret;
	ret = AGM.Modelling.CreateSolidBlock( Points[0], Points[1], DoBlock );

	var Edges= [];
	Edges[0] = AGM.Modelling.PickEdge(AGM.Position(5, 5, 10), AGM.Vector(1, 0, 0), 10e-4);
	Edges[1] = AGM.Modelling.PickEdge(AGM.Position(5, 5, 10), AGM.Vector(0, 1, 0), 10e-4);
	Edges[2] = AGM.Modelling.PickEdge(AGM.Position(5, 5, 5), AGM.Vector(1, 1, 0), 10e-4);

	var first_face = AGM.Modelling.PickFace(AGM.Position(5, 5, 5), AGM.Vector(0, 0, 1), 10e-4);
	AGM.Modelling.ChamferEdge( Edges, 3, first_face, 1 );
	
	var one_edge = AGM.Modelling.PickEdge(AGM.Position(5, 5, 5), AGM.Vector(-1, -1, 0), 10e-4);
	if (one_edge != null)
	{
	    first_face = AGM.Modelling.PickFace(AGM.Position(5, 5, 5), AGM.Vector(-1, 0, 0), 10e-4);
            AGM.Modelling.ChamferEdge( one_edge, 1, first_face, 3 );
	}