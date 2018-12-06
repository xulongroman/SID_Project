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
	var theface = AGM.Modelling.PickFace(AGM.Position(5, 5, 5), AGM.Vector(0, 0, 1), 10e-4);
	Edges = AGM.Modelling.GetFaceExternalEdges(theface);
	//如果edges是闭环，那么用户任意指定环中edge的一个面作为first face，ChamferEdge处理时会自动把这个face对应的edge放到edge数组的第一个位置
	var firstface = AGM.Modelling.PickFace(AGM.Position(5, 5, 5), AGM.Vector(-1, 0, 0), 10e-4);
	AGM.Modelling.ChamferEdge( Edges, 3, firstface, 1 );
	
	
	