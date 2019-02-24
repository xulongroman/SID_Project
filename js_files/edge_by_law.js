	var OD=4;
	var Free_length=5;
    var	Wire_dia=0.29;
    var	Total_coils=6.8; 
	var	Dir=-1;
	var Params = "OD=" + OD + "," + "Free_length=" + Free_length + "," + "Wire_dia=" + Wire_dia + "," + "Total_coils=" + Total_coils + "," + "Dir=" + Dir;
	var ret;
	var edge1 = AGM.Object();
	var edge2 = AGM.Object();
	var edge3 = AGM.Object();
	ret = AGM.Modelling.CreateEdgeByLaw(Params, "bot_equa_xt", "bot_equa_yt", "bot_equa_zt", 0, 1, "d:\\SID1.exp" ,edge1);
	ret = AGM.Modelling.CreateEdgeByLaw(Params, "mid_equa_xt", "mid_equa_yt", "mid_equa_zt", 0, 1, "d:\\SID1.exp", edge2);
	ret = AGM.Modelling.CreateEdgeByLaw(Params, "top_equa_xt", "top_equa_yt", "top_equa_zt", 0, 1, "d:\\SID1.exp", edge3);
	var pos = AGM.Position(0,0,0);
    var dir = AGM.Vector(1,0,0);
	ret = AGM.Modelling.GetPosAndDirOnEdge(edge1, 0, pos, dir);
	var face = AGM.Object();
	
	//ret = AGM.Modelling.CreatePlanarDisk(pos, dir, 0.29/2, face);
	var xaxis = AGM.Vector(1,0,0);
	ret = AGM.Modelling.CreateRectPlane(pos, dir, xaxis, 0.4, 0.2, face);

	var edges = [edge1, edge2, edge3];
	var path = AGM.Object();
	ret = AGM.Modelling.ConnectEdges(edges, path);
	ret = AGM.Modelling.SweepByPath(face, path, 0);
	var helix = face;
	ret = AGM.Modelling.SetColor(helix, 1, 0, 0);