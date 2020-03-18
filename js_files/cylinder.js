		var majorCylinder = AGM.Object();
		posBottom = AGM.Position( 0, 0, 0 );
		posTop = AGM.Position( 0, 0, 16 );
		AGM.Modelling.CreateSolidCylinder( posBottom, posTop, 10, majorCylinder );
		var b1 = AGM.Object();
		var b2 = AGM.Object();
		AGM.Modelling.SplitBody( majorCylinder, AGM.Position( 0, 4, 4 ), AGM.Vector( 1, 1, 0 ), b1, b2 );
		