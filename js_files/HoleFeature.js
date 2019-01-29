AGM.Document.LoadScript("D:\\agm\\SID_MiSUMi\\bin\\release_vc14_64\\js_files\\HoleFeatureSetup.js");
var Points= [];
Points[0] = AGM.Position( -10, -10, -10 );
Points[1] = AGM.Position( 10, 10, 10 );
	
var DoBlock = AGM.Object();
var ret;
ret = AGM.Modelling.CreateSolidBlock( Points[0], Points[1], DoBlock );

posBottom = AGM.Position( 0, 0, -10 );
posTop = AGM.Position( 0, 0, 10 );
var DoHole = holeFeature(posBottom, posTop, 5);

AGM.Modelling.BoolSubtract( DoBlock, DoHole );
AGM.Modelling.SaveSat("D:\\sample_inch.sat", 16, "inch");