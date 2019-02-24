	var L=20;
	var D=11;
    var	d=7;
    var	n=6.25; 
	var ret;
	
	var edge1 = AGM.Object();
	var axis_start = AGM.Position(0,0,0);
	var axis_end = AGM.Position(0,0,L);
	var start_dir = AGM.Vector(1,0,0);
	var radius = (D+d)/4;
	var thread_distance = L/n;
	
	ret = AGM.Modelling.CreateHelixEdge(axis_start,	axis_end, start_dir ,radius, thread_distance, false, edge1);

    var dir = AGM.Vector(1,0,0);
	var pos = AGM.Position(0,0,0);
	ret = AGM.Modelling.GetPosAndDirOnEdge(edge1, 0, pos, dir);	

	var face = AGM.Object();
	ret = AGM.Modelling.CreateRectPlane2(AGM.Position(D/2,0,(D - d)/8), AGM.Position(d/2,0,-(D - d)/8), face);

	var edges = [edge1];
	var path = AGM.Object();
	ret = AGM.Modelling.ConnectEdges(edges, path);
//	ret = AGM.Modelling.SweepByPath(face, path, 0);
	var helix = face;
	ret = AGM.Modelling.SetColor(helix, 1, 0, 0);