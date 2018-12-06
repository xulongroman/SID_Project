	var Points= [];
	var DoCone = AGM.Object();
	var posBottom = AGM.Position( 0, 0, 16 );
	var posTop = AGM.Position( 0, 0, 25 );
	AGM.Modelling.CreateSolidCone( posBottom, posTop, 10, 5, DoCone );
	
	var DoCylinder = AGM.Object();
	AGM.Modelling.CreateSolidCylinder( AGM.Position(0, 0, 0), AGM.Position(0, 0, 16), 10, DoCylinder );
	
	AGM.Modelling.BoolUnite( DoCone, DoCylinder );
	
	var edge1 = AGM.Modelling.PickEdge(AGM.Position(0, 0, 25), AGM.Vector(1, 1, 0), 10e-4);
	var face1 = AGM.Modelling.PickFace(AGM.Position(0, 0, 20), AGM.Vector(0, 0, 1), 10e-4);
	AGM.Modelling.ChamferEdge2( edge1, 2, face1, 20);
