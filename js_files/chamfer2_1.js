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
	
	var edge = AGM.Modelling.PickEdge(AGM.Position(5, 5, 5), AGM.Vector(-1, 0, -1), 10e-4);
	var face = AGM.Modelling.PickFace(AGM.Position(5, 5, 5), AGM.Vector(0, 0, -1), 10e-4);
	var edges = AGM.Modelling.GetFaceExternalEdges(face);
	var edges = AGM.Modelling.AssignFirstEdge(edges, edge);
	AGM.Modelling.ChamferEdge2( edges, 4, face, 20);
	
	
	