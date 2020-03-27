


function MoveBody1(body , dis, x0, y0, z0){
	
	//分割体
    var b1 = AGM.Object();
    var b2 = AGM.Object();
    AGM.Modelling.SplitBody( body, AGM.Position( x0, y0, z0 ), AGM.Vector( 0, 0, 1 ), b1, b2 );
    
	//z轴移动
	var trf1 = AGM.Transf();
	AGM.Modelling.TranslateTransf(AGM.Vector(0, 0, 50), trf1);
	AGM.Modelling.ApplyTransformToBody(b1, trf1);

    
    var face = AGM.Object();
    f = AGM.Modelling.PickFace(AGM.Position(x0, y0, z0), AGM.Vector(-0.007, -1, -0.007), 10e-5, b2);//选择拉伸底面
    result = AGM.Modelling.ConvertFaceToProfile(f, face);//将拉伸底面 转换为扫略轨迹
    var path = AGM.Object();
    
    AGM.Modelling.CreateLineEdge(AGM.Position(x0, y0, z0), AGM.Position(x0, y0, dis+z0), path);
    AGM.Modelling.SweepByPath(face, path);

}

//导入stp
AGM.Modelling.ImportFile(".\\js_files\\C-MCXRSMG-LA-25-ST5-C120-IN-N.stp");

var bodyMain = AGM.Object();
var count = AGM.Part.GetBodyNumber();//获取当前body数量
result = AGM.Part.GetBody( 0, bodyMain);


dis = 50//移动距离
MoveBody1(bodyMain , dis, 0, 0, 12)



