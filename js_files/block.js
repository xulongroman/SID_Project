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
	var DoBlock2 = AGM.Object();
	var ret;
	ret = AGM.Modelling.CreateSolidBlock( Points[0], Points[1], DoBlock );
	ret = AGM.Modelling.CopyBody( DoBlock, DoBlock2 );
	
	var DoCylinder = AGM.Object();
	var posBottom = AGM.Position( 0, 0, 0 );
	var posTop = AGM.Position( 0, 0, 16 );
	ret = AGM.Modelling.CreateSolidCylinder( posBottom, posTop, 10, DoCylinder );
	ret = AGM.Modelling.BoolIntersect(DoCylinder, DoBlock);
	
	AGM.Modelling.SetColor( DoBlock2, 0, 1, 0.6 );
	
	var trf1 = AGM.Transf();
	AGM.Modelling.TranslateTransf(AGM.Vector(10,10,10), trf1);
	AGM.Modelling.ApplyTransformToBody(DoBlock2, trf1);
	var trf2 = AGM.Transf();
	AGM.Modelling.RotateTransf(AGM.Position(0,0,0),AGM.Vector(0,0,1), 45, trf2);
	AGM.Modelling.ApplyTransformToBody(DoBlock2, trf2);
	
	