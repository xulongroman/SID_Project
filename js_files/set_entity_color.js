AGM.Modelling.ImportFile("D:\\test.sat");
var body1 = AGM.Object();
result = AGM.Part.GetBody( 0, body1);
var faces  = AGM.Modelling.GetBodyFaces(body1);
AGM.Modelling.SetEntityColor( faces, 0.78, 0.78, 0.78 )