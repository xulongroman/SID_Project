		var majorCylinder = AGM.Object();
		posBottom = AGM.Position( 0, 0, 0 );
		posTop = AGM.Position( 0, 0, 16 );
		AGM.Modelling.CreateSolidCylinder( posBottom, posTop, 10, majorCylinder );