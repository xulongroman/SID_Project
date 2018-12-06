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
	
	
	// Points[0].x = 5;
	// Points[0].y = 5;
	// Points[0].z = -5;

	// Points[1].x = 5;
	// Points[1].y = 5;
	// Points[1].z = 15;
	
//	cylinder = AGM.Modelling.CreateSolidCylinder( Points[0], Points[1], 3 );
	
//	res = AGM.Modelling.BoolSubtract( block, cylinder );
	
	AGM.Modelling.SetColor( DoBlock, 0, 1, 0.6 );
	