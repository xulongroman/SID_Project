function holeFeature(pos1, pos2, radius)
{
    var cylinder = AGM.Object();	
	AGM.Modelling.CreateSolidCylinder( pos1, pos2, radius, cylinder);
	return cylinder;
}