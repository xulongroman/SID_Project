	var DoBlock1 = AGM.Object();
	var DoBlock2 = AGM.Object();
	var DoBlock3 = AGM.Object();
	var ret;
	ret = AGM.Modelling.CreateSolidBlock( AGM.Position( 0, 0, 0 ), AGM.Position( 10, 10, 10 ), DoBlock1 );
	ret = AGM.Modelling.CreateSolidBlock( AGM.Position( 15, 0, 0 ), AGM.Position( 25, 10, 10 ), DoBlock2 );
	ret = AGM.Modelling.CreateSolidBlock( AGM.Position( 30, 0, 0 ), AGM.Position( 40, 10, 10 ), DoBlock3 );
	ret = AGM.Modelling.Combine(DoBlock1, DoBlock2, DoBlock3);
	var arr = [];
	ret = AGM.Modelling.Separate(DoBlock1, arr);
	
	var bodies = [];
	bodies[0] = arr[0];
	bodies[1] = arr[1];
	var reflects = [];
	AGM.Modelling.ReflectBodies(bodies, AGM.Position( 0, 0, 0 ), AGM.Vector( 1, 0, 0 ), reflects);
	
	var obj = AGM.Object();
	AGM.Modelling.ReflectBodies(arr[2], AGM.Position( 0, 0, 0 ), AGM.Vector( 1, 0, 0 ), obj);
	
	