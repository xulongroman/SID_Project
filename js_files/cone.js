		var majorCone = AGM.Object();
		posBottom = AGM.Position( 0, 0, 0 );
		posTop = AGM.Position( 0, 0, 16 );
		AGM.Modelling.CreateSolidCone( posBottom, posTop, 10, 5, majorCone );
        AGM.Modelling.SetColor( majorCone, 1, 1, 0 );