//AGM.Document.LoadScript("C:\\SID\\Script\\Feature3D.js");
//AGM.Document.LoadScript("C:\\SID\\Script\\Feature2D.js");
var result;
function Re_helix(OD,Free_length,Wire_dia,Total_coils,Dir,D){//Mex type_rectangle
	//Dir-弹簧内径
	var Params = "OD=" + OD + "," + "Free_length=" + Free_length + "," + "Wire_dia=" + Wire_dia + "," + "Total_coils=" + Total_coils + "," + "Dir=" + Dir + "," +"D=" + D;
	var ret;
	var edge1 = AGM.Object();
	var edge2 = AGM.Object();
	var edge3 = AGM.Object();
	//读取螺旋线文�?
	var type = 'Re_round';
	var filepath='c:\\SID\\Script\\'+type+'.exp';
	ret = AGM.Modelling.CreateEdgeByLaw(Params, "bot_equa_xt", "bot_equa_yt", "bot_equa_zt", 10e-6, 1, "d:\\Re_round.exp" ,edge1);
	ret = AGM.Modelling.CreateEdgeByLaw(Params, "mid_equa_xt", "mid_equa_yt", "mid_equa_zt", 0, 1, "d:\\Re_round.exp", edge2);
	ret = AGM.Modelling.CreateEdgeByLaw(Params, "top_equa_xt", "top_equa_yt", "top_equa_zt", 10e-6, 1, "d:\\Re_round.exp", edge3);
	var edges = [edge1, edge2, edge3];
	//沿曲线扫�?
	var pos = AGM.Position(0,0,0);
	var dir = AGM.Vector(0,1,0);
	ret = AGM.Modelling.GetPosAndDirOnEdge(edge1, 0, pos, dir);
	var face = AGM.Object();
	
	var xaxis = AGM.Vector(1,0,0);
	ret = AGM.Modelling.CreateRectPlane(pos, dir, xaxis, (OD-D)/2, Wire_dia, face);
	
	var path = AGM.Object();
	ret = AGM.Modelling.ConnectEdges(edges, path);//路径
	ret = AGM.Modelling.SweepByPath(face, path, 1, AGM.Vector(0,0,1));//扫略 check �?
	var helix = face;//结果/**/
};
Re_helix(11,20,1,6.5,-1,7);
AGM.Modelling.SaveSat('c:\\temp\\temp.sat', 16);