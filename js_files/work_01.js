	// ===== Create Work =====
	var lengthWork = 800; // default = 800
	var radius1 = 150; // default = 150
	var radius2 = 110; // default = 110
	var heightWork = 500; // default = 500
	var thickness = 10; // default = 10
	
	var flange_radius = 60; // default = 60
	var flange_height = 10;
	
	var jigWidth = 260; // default = 260
	
	var posBottom;
	var posTop;
	var posTemp;
	
	var modelTemp = AGM.Object();
	var majorCylinder = AGM.Object();
	
	var retMajorCylinder ;
	var retModelTemp;
	var retBoolean;
	{
		var radiusTemp;
		
		ofst = lengthWork / 2;
		posBottom = AGM.Position( -ofst, 0, heightWork );
		
		posTop = AGM.Position( ofst, 0, heightWork );
		
		radiusTemp = radius1 + thickness;
		retCylinder = AGM.Modelling.CreateSolidCylinder( posBottom, posTop, radiusTemp, majorCylinder );
		if ( !retCylinder )
		{
			ExitProgram;
		}
		
		posTemp = AGM.Position( posBottom.x + 30, posBottom.y, posBottom.z );
		
		radiusTemp = radius1 + thickness + 6;
		retModelTemp = AGM.Modelling.CreateSolidCylinder( posBottom, posTemp, radiusTemp, modelTemp );
		
		if ( !retModelTemp )
		{
			ExitProgram;
		}
		
		retBoolean = AGM.Modelling.BoolUnite( majorCylinder, modelTemp );
		
		if ( !retBoolean )
		{
			ExitProgram;
		}
		
		posTemp.x = posTop.x - 30;
		retModelTemp = AGM.Modelling.CreateSolidCylinder( posTemp, posTop, radiusTemp, modelTemp );
	
		if ( !retModelTemp )
		{
			ExitProgram;
		}
	
		AGM.Modelling.BoolUnite( majorCylinder, modelTemp );
	}
	
	var minorCylinder1 = AGM.Object();
	var retMinorCylinder1;
	{
		ofst = lengthWork / 4;
		posBottom = AGM.Position( -ofst, 0, heightWork );
		posTop = AGM.Position( -ofst, 0, heightWork + radius1 + thickness + 70 );
		
		radiusTemp = radius2 + thickness;
		retMinorCylinder1 = AGM.Modelling.CreateSolidCylinder( posBottom, posTop, radiusTemp, minorCylinder1 );
		if ( !retMinorCylinder1 )
		{
			ExitProgram;
		}
	
		posTemp.x = posTop.x;
		posTemp.y = posTop.y;
		posTemp.z = posTop.z - 30;
		posTemp = AGM.Position( posTop.x, posTop.y, posTop.z - 30 );
		
		radiusTemp = radius2 + thickness + 6;
		retModelTemp = AGM.Modelling.CreateSolidCylinder( posTemp, posTop, radiusTemp, modelTemp );
		
		if ( !retModelTemp )
		{
			ExitProgram;
		}
	
		AGM.Modelling.BoolUnite( minorCylinder1, modelTemp );
	}
	
	var minorCylinder2 = AGM.Object();
	var retMinorCylinder2;
	{
		ofst = lengthWork / 4;
		posBottom = AGM.Position( ofst, 0, heightWork );
		posTop = AGM.Position( ofst, 0, heightWork + radius1 + thickness + 70 );
		
		radiusTemp = radius2 + thickness;
		retMinorCylinder2 = AGM.Modelling.CreateSolidCylinder( posBottom, posTop, radiusTemp, minorCylinder2 );
		if ( !retMinorCylinder2 )
		{
			ExitProgram;
		}
	
		posTemp = AGM.Position( posTop.x, posTop.y, posTop.z - 30 );
		
		radiusTemp = radius2 + thickness + 6;
		retModelTemp = AGM.Modelling.CreateSolidCylinder( posTemp, posTop, radiusTemp, modelTemp );
		
		if ( !retModelTemp )
		{
			ExitProgram;
		}

		AGM.Modelling.BoolUnite( minorCylinder2, modelTemp );
	}
	
	var minJig;
	var maxJig;
	
	var jigModel1 = AGM.Object();
	var retJig1;
	{
		ofst = - (lengthWork / 4);
		minJig = AGM.Position( ofst - 50,- (jigWidth / 2 ), 300 );
		maxJig = AGM.Position(  ofst + 50, jigWidth / 2, heightWork );
		
		retJig1 = AGM.Modelling.CreateSolidBlock( minJig, maxJig, jigModel1 );
	}
	
	if ( !retJig1 )
	{
		ExitProgram;
	}
	
	var jigModel2 = AGM.Object();
	var retJig2;
	{
		ofst = lengthWork / 4;
		minJig = AGM.Position( ofst - 50,- (jigWidth / 2 ), 300 );
		maxJig = AGM.Position(  ofst + 50,jigWidth / 2, heightWork );
	
		retJig2 = AGM.Modelling.CreateSolidBlock( minJig, maxJig, jigModel2 );
	}
	
	if ( !retJig2 )
	{
		ExitProgram;
	}

	var flangeModel1 = AGM.Object();
	var retFlange1;
	{
		ofst = 0;
		bottomFrange = AGM.Position( -ofst, 0, heightWork );
		topFrange = AGM.Position(  -ofst, 0, heightWork + radius1 + thickness + flange_height );
		
		retFlange1 = AGM.Modelling.CreateSolidCylinder( bottomFrange, topFrange, flange_radius, flangeModel1 );
		
		if ( !retFlange1 )
		{
			ExitProgram;
		}
		
		origin = AGM.Position( 0, 0, heightWork );
		axis = AGM.Position(  1.0, 0, 0 );
		
		var transf = AGM.Transf();
	    var retRotate;
		retRotate = AGM.Modelling.RotateTransf( origin, axis, 45, transf );
		if ( !retRotate )
		{
			ExitProgram;
		}
		
		AGM.Modelling.ApplyTransformToBody( flangeModel1, transf );
	}

	var flangeModel2 = AGM.Object();
	var retFlange2;
	{
		ofst = 0;
		bottomFrange = AGM.Position( -ofst, 0, heightWork );
		topFrange = AGM.Position(  -ofst, 0, heightWork + radius1 + thickness + flange_height );
	
		retFlange2 = AGM.Modelling.CreateSolidCylinder( bottomFrange, topFrange, flange_radius, flangeModel2 );
		if ( !retFlange2 )
		{
			ExitProgram;
		}
		
		origin = AGM.Position( 0, 0, heightWork );
		axis = AGM.Position(  -1.0, 0, 0 );
	
		var transf = AGM.Transf();
	    var retRotate;
		retRotate = AGM.Modelling.RotateTransf( origin, axis, 45, transf );
		
		AGM.Modelling.ApplyTransformToBody( flangeModel2, transf );
		if ( !retRotate )
		{
			ExitProgram;
		}
	}
	
	// --- Unite ---
	AGM.Modelling.BoolUnite( majorCylinder, minorCylinder1 );
	AGM.Modelling.BoolUnite( majorCylinder, minorCylinder2 );
	AGM.Modelling.BoolUnite( majorCylinder, jigModel1 );
	AGM.Modelling.BoolUnite( majorCylinder, jigModel2 );
	AGM.Modelling.BoolUnite( majorCylinder, flangeModel1 );
	AGM.Modelling.BoolUnite( majorCylinder, flangeModel2 );
	
	var subModel = AGM.Object();
	var retSubModel;
	// --- Subtract ---
	{
		ofst = lengthWork / 2;
		posBottom = AGM.Position( - ofst, 0, heightWork );

		
		posTop = new Point;
		posTop = AGM.Position( ofst, 0, heightWork );
		
		radiusTemp = radius1;
		retSubModel = AGM.Modelling.CreateSolidCylinder( posBottom, posTop, radiusTemp, subModel );
		if ( !retSubModel )
		{
			ExitProgram;
		}
		
		AGM.Modelling.BoolSubtract( majorCylinder, subModel );
	}

	{
		ofst = lengthWork / 4;
		posBottom = AGM.Position( - ofst, 0, heightWork );
		posTop = AGM.Position( - ofst, 0, heightWork + radius1 + thickness + 70 );
		
		radiusTemp = radius2;
		retSubModel = AGM.Modelling.CreateSolidCylinder( posBottom, posTop, radiusTemp, subModel );
		
		if ( !retSubModel )
		{
			ExitProgram;
		}
	
		AGM.Modelling.BoolSubtract( majorCylinder, subModel );
	}
	
	{
		ofst = lengthWork / 4;
		posBottom = AGM.Position( ofst, 0, heightWork );
		posTop = AGM.Position( ofst, 0, heightWork + radius1 + thickness + 70 );
	
		radiusTemp = radius2;
		retSubModel = AGM.Modelling.CreateSolidCylinder( posBottom, posTop, radiusTemp, subModel );
	
		if ( !retSubModel )
		{
			ExitProgram;
		}
		
		AGM.Modelling.BoolSubtract( majorCylinder, subModel );	
	}
	
	AGM.Modelling.SetColor( majorCylinder, 0.48, 0.9, 0.04 );

	// ===== Create Base =====
	var minRect;
	var maxRect;
	
	var blk1 = AGM.Object();
	var retBlk1;
	{
		minRect = AGM.Position( -500, -500, 200 );


		maxRect = AGM.Position( 500, 500, 300 );
		retBlk1 = AGM.Modelling.CreateSolidBlock( minRect, maxRect, blk1 );
	}
	if ( !retBlk2 )
	{
		retBlk1;
	}
	
	var blk2 = AGM.Object();;
	var retBlk2;
	{
		minRect = AGM.Position( -400, -400, 100 );

		maxRect = AGM.Position( 400, 400, 200 );
		retBlk2 = AGM.Modelling.CreateSolidBlock( minRect, maxRect, blk2 );
	}
	
	if ( !retBlk2 )
	{
		ExitProgram;
	}
	
	AGM.Modelling.BoolUnite( blk1, blk2 );

	var pntBase=[];
	pntBase[0] = AGM.Position( -400, -400, 0 );

	
	pntBase[1] = AGM.Position( -400, 400, 0 );

	pntBase[2] = AGM.Position( 400, -400, 0 );

	pntBase[3] = AGM.Position( 400, 400, 0 );
	
	var model = AGM.Object();
	var retModel;
	for (var ii=0 ; ii<4 ; ii++)
	{
		minRect = AGM.Position( pntBase[ii].x - 50, pntBase[ii].y - 50, pntBase[ii].z );
		
		maxRect = AGM.Position( pntBase[ii].x + 50, pntBase[ii].y + 50, pntBase[ii].z + 200 );

		retModel = AGM.Modelling.CreateSolidBlock( minRect, maxRect, model );
		
		if ( !retModel )
		{
			ExitProgram;
		}
		
		base = AGM.Modelling.BoolUnite( blk1, model );
	}

	AGM.Modelling.SetColor( blk1, 0.91, 0.89, 0.74 );

	