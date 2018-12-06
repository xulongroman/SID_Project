var newDocSketch = AGM.Object();
AGM.Sketcher.CreateDocument(newDocSketch);
{
	var newDoGSketch1 = AGM.Object();
	AGM.Sketcher.CreateSketch( newDocSketch, 0, 0, 0, 1, 0, 0, 0, 1, 0, newDoGSketch1 );
	result = AGM.Sketcher.OpenSketch( newDoGSketch1 );

	if ( result == true )
	{
		AGM.Sketcher.CreateCircle( 0, 0, 10 ); 
		AGM.Sketcher.CloseSketch();
		AGM.Sketcher.Extrude( newDoGSketch1, 8);
	}
}
{
	var newDoGSketch2 = AGM.Object();
	AGM.Sketcher.CreateSketch( newDocSketch, 0, 0, 8, 1, 0, 8, 0, 1, 8, newDoGSketch2 );
	result = AGM.Sketcher.OpenSketch(newDoGSketch2);
	if ( result == true )
	{
		AGM.Sketcher.CreateCircle( 0, 0, 6 );
		AGM.Sketcher.CloseSketch();
		
		AGM.Sketcher.Extrude( newDoGSketch2, 8 );
	}
}
//旋转切除特征
{
	var newDoGSketch3 = AGM.Object();
	//新的工作平面3
	//原点: (0,0,8)
	//u方向: (0,0,9) - (0,0,8)
	//v方向: (0,1,8) - (0,0,8)
	AGM.Sketcher.CreateSketch( newDocSketch, 0, 0, 8, 0, 0, 9, 0, 1, 8, newDoGSketch3 );
	result = AGM.Sketcher.OpenSketch( newDoGSketch3 );
	
	if ( result == true )
	{
	    //旋转前先在工作平面3上创建一条中心线
		//起点(-10,0)
		//终点(10,0)
		AGM.Sketcher.CreateCenterLine( -10, 0, 10, 0 );
		//在工作平面3上绘制圆
		//圆心(0,8)
		//半径5
		AGM.Sketcher.CreateCircle( 0, 8, 5);
		AGM.Sketcher.CloseSketch();
        //AGM.Sketcher.sketchRevolve( DoGSketch, [ removeflg [start angle, end angle [, reverseflg ] ] ] );
		//DoGSketch: 工作平面3
		//removeflg: 是否切除
		//start angle: 旋转开始角度（不是弧度！）
		//end angle: 旋转结束角度（不是弧度！）
		//reverseflg: 是否反向
		AGM.Sketcher.Revolve( newDoGSketch3,true);
	}
	
}
AGM.Sketcher.FixModel();
