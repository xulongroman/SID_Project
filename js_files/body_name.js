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
	ret = AGM.Modelling.SetBodyName( DoBlock, "b1" );
	ret = AGM.Modelling.SetBodyName( DoBlock2, "b2" );
	AGM.Modelling.SaveSat("D:\\SINUS-3D\\StagingEnvironment\\JS-data\\..\\AGM-output\\ACIS\\test.sat",16,"millimeter");
	AGM.Modelling.ExportFile("D:\\SINUS-3D\\StagingEnvironment\\JS-data\\..\\AGM-output\\STEP\\test.step","millimeter",1);
	AGM.Modelling.ExportFile("D:\\SINUS-3D\\StagingEnvironment\\JS-data\\..\\AGM-output\\IGES\\test.iges","millimeter",1);
	