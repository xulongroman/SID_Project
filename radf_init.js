var AGM = {};
AGM.Object = makeDisplayObject;
/**************************[Math Object]**************************/
AGM.Position = makePosition;
AGM.Vector = makeVector;
AGM.UnitVector = makeUnitVector;
AGM.Transf = makeTransf;
AGM.RefreshView = refreshView;

/**************************[NameSpace "AGM.Document"]**************************/
AGM.Document = {};
AGM.Document.GetActiveDocument = getActiveDocument;
AGM.Document.SetActiveDocument = setActiveDocument;
AGM.Document.LoadScript = documentLoadScript;
/**************************[NameSpace "AGM.View"]**************************/
AGM.View = {};

AGM.View.Front = viewFront;
AGM.View.Back = viewBack;
AGM.View.Left = viewLeft;
AGM.View.Right = viewRight;
AGM.View.Iso = viewIso;
AGM.View.Bottom = viewBottom;
AGM.View.Top = viewTop;
AGM.View.SetCamera = viewSetCamera;
AGM.View.ZoomAll = viewZoomAll;

/**************************[NameSpace "AGM.Part"]**************************/
AGM.Part = {};
////////////////////////////////////////////////////////////
//AGM.Modelling.GetModelBody = modellingGetModelBody;
//AGM.Modelling.GetModelBodyNumber = modellingGetModelBodyNumber;
//////////////////////////////////////////////////////////////////
AGM.Part.GetBody = modellingGetBody;
AGM.Part.GetBodyNumber = modellingGetBodyNumber;
AGM.Part.RemoveBody = modellingRemoveBody;
AGM.Part.RemoveAllBody = modellingRemoveAllBody;
//////////////////////////////////////////////////////////////////
/**************************[NameSpace "AGM.Modelling"]**************************/
AGM.Modelling = {};
//var face = AGM.Modelling.PickEdge( point, vector, apertureb, body )
AGM.Modelling.PickEdge = modellingPickEdge;
//var face = AGM.Modelling.PickFace( point, vector, apertureb, body )
AGM.Modelling.PickFace = modellingPickFace;
//AGM.Modelling.PickVertex( point, vector, apertureb, body)
AGM.Modelling.PickVertex = modellingPickVertex;
//AGM.Modelling.FilletVertex( vertex | array of vertices, radius )
AGM.Modelling.FilletVertex = modellingFilletVertex;
//AGM.Modelling.BlendEdge( edge|Array of edges, radius )
//edge is an inputting edge; Array of edges is an array of edges which are connecting
AGM.Modelling.BlendEdge = modellingBlendEdge;
//AGM.Modelling.ChamferEdge( edge|Array of edges, left_range, left_face, right_range)
//edge is an inputting edge; Array of edges is an array of edges which are connecting
//left_range is the chamfering value of the left side
//left_face is to choose the left side of the edge or the first edge of the array; the left sides of other edges of the array will be decided by the first edge
//right_range is the chamfering value of the right side
//AGM.Modelling.ChamferEdge support two parameters or four parameters:
//two parameters : 
//AGM.Modelling.ChamferEdge( edge|Array of edges, left_range)
//you do not need to input left_face, right_range
//right_range = left_range in this situation, so you do not need to choose the left side
//four parameters : 
//AGM.Modelling.ChamferEdge( edge|Array of edges, left_range, left_face, right_range)
//user input both left_range and right_range in this situation, so you do not need to choose the left side
AGM.Modelling.ChamferEdge = modellingChamferEdge;
AGM.Modelling.CreateSolidBlock = modellingCreateSolidBlock;
AGM.Modelling.CreateSolidCylinder = modellingCreateSolidCylinder;
AGM.Modelling.CreateSolidCone = modellingCreateSolidCone;
AGM.Modelling.BoolUnite = modellingBoolUnite;
AGM.Modelling.BoolSubtract = modellingBoolSubtract;
//AGM.Modelling.BoolIntersect(blank, tool)
//The intersecting result will be returned in blank boody
AGM.Modelling.BoolIntersect = modellingBoolIntersect;
//AGM.Modelling.RotateTransf( origin, axis, angle, out transf )
//origin&&axis represent the arbitrary rotation axis
//angle is the rotation angle
//AGM.Modelling.RotateTransf will produce the transform from the arbitrary axis rotation and return result in out transf
AGM.Modelling.RotateTransf = modellingRotateTransf;
//AGM.Modelling.TranslateTransf( vector, out transf )
//vector is the translation value
//AGM.Modelling.TranslateTransf will produce the transform from the vector and return result in out transf
AGM.Modelling.TranslateTransf = modellingTranslateTransf;
//AGM.Modelling.ApplyTransformToBody(body, transform)
//AGM.Modelling.ApplyTransformToBody will apply the transform to the body
AGM.Modelling.ApplyTransformToBody = modellingApplyTransformToBody;
AGM.Modelling.ApplyTransform = modellingApplyTransform;
//AGM.Modelling.CopyBody(sourcebody, out copybody)
//The copied result will be returned in copybody
AGM.Modelling.CopyBody = modellingCopyBody;
//AGM.Modelling.SetColor( ModelObject, red, green, blue )
AGM.Modelling.SetColor = modellingSetColor;
//AGM.Modelling.SetEntityColor( entity|Array of entities, r, g, b )
AGM.Modelling.SetEntityColor = modellingSetEntityColor;
//AGM.Modelling.SaveSat( filepath, version, unit, product_id )
AGM.Modelling.SaveSat = modellingSaveSat;
AGM.Modelling.GetFaceExternalEdges = modellingGetFaceExternalEdges;
AGM.Modelling.BlendFace = modellingBlendFace;
AGM.Modelling.ChamferFace = modellingChamferFace;
AGM.Modelling.GetBodyFaces = modellingGetBodyFaces;
AGM.Modelling.ChamferEdge2 = modellingChamferEdge2;
AGM.Modelling.AssignFirstEdge = modellingAssignFirstEdge;
AGM.Modelling.GetEdges = modellingGetEdges;
AGM.Modelling.GetLoops = modellingGetLoops;
AGM.Modelling.GetLoopType = modellingGetLoopType;
//AGM.Modelling.ImportFile( filepath, logpath )
AGM.Modelling.ImportFile = modellingImportFile;
//AGM.Modelling.ExportFile( filepath, unit, logpath )
AGM.Modelling.ExportFile = modellingExportFile;
//AGM.Modelling.CreateEdgeByLaw( parameters, equation_x, equation_y, equation_z, start, end, *.exp,  out WireBody )
AGM.Modelling.CreateEdgeByLaw = modellingCreateEdgeByLaw;
//AGM.Modelling.GetPosAndDirOnEdge( wire, param, out position, out vector )
AGM.Modelling.GetPosAndDirOnEdge = modellingGetPosAndDirOnEdge;
//AGM.Modelling.CreatePlanarDisk( position, normal, radius, out ModelObject  )
AGM.Modelling.CreatePlanarDisk = modellingCreatePlanarDisk;
//AGM.Modelling.ConnectEdges( Array of edges, out WireBody)
AGM.Modelling.ConnectEdges = modellingConnectEdges;
//AGM.Modelling.SweepByPath( profile, path, self_int_check, sweep_with_axis, draft)
AGM.Modelling.SweepByPath = modellingSweepByPath;
//AGM.Modelling.CreateRectPlane( position, normal, xaxis, width, height, out ModelObject )
AGM.Modelling.CreateRectPlane= modellingCreateRectPlane;
//AGM.Modelling.CreateHelixEdge( axis_start, axis_end, start_dir, radius,  thread_distance , right_handed,  out WireBody )
AGM.Modelling.CreateHelixEdge= modellingCreateHelixEdge;
//AGM.Modelling.CreateRectPlane2( position1, position2, out ModelObject  )
AGM.Modelling.CreateRectPlane2 = modellingCreateRectPlane2;
//AGM.Modelling.CopyFace( face, out sheebody )
AGM.Modelling.CopyFace = modellingCopyFace;
//AGM.Modelling.CreateLineEdge( pos1, pos2, out WireBody )
AGM.Modelling.CreateLineEdge = modellingCreateLineEdge;
//AGM.Modelling.CoverPlanarWire( wirebody, out sheetbody )
AGM.Modelling.CoverPlanarWire = modellingCoverPlanarWire;
AGM.Modelling.GetVertices = modellingGetVertices;
//AGM.Modelling.GetNonPlanarEdgesByVertices( vertex | array of vertex, face )
AGM.Modelling.GetNonPlanarEdgesByVertices = modellingGetNonPlanarEdgesByVertices;
//AGM.Modelling.ScalePart( scale )
AGM.Modelling.ScalePart = modellingScalePart;
//AGM.Modelling.ScaleBody( body, scale )
AGM.Modelling.ScaleBody = modellingScaleBody;
//AGM.Modelling.Combine( blank, tool0, tool1, tool2...)
AGM.Modelling.Combine = modellingCombine;
//AGM.Modelling.Separate( ModelObject, out Array of ModelObject)
AGM.Modelling.Separate = modellingSeparate;
//AGM.Modelling.ConvertFaceToPath( face, out WireObject, bExternel = false )
AGM.Modelling.ConvertFaceToPath = modellingConvertFaceToPath;
//AGM.Modelling.SetBodyName( ModelObject, bodyName )
AGM.Modelling.SetBodyName = modellingSetBodyName;
//AGM.Modelling.ExportDrw( filepath, drawingName, drawingView )
AGM.Modelling.ExportDrw = modellingExportDrawing;
//AGM.Modelling.SplitBody( inbody, position, normal, out body1, out body2 )
AGM.Modelling.SplitBody = modellingSplitBody;
//AGM.Modelling.ReflectBodies( ModelObject | Array of ModelObject, position, normal, out ModelObject | Array of ModelObject )
AGM.Modelling.ReflectBodies = modellingReflectBody;
//AGM.Modelling.ConvertFaceToProfile( face, out SheetObject);
AGM.Modelling.ConvertFaceToProfile = modellingConvertFaceToProfile;
//AGM.Modelling.CreateTextSheet( text, fontname, fontsize, xlength, ylength, target_origin, target_x_axis, target_y_axis, wrap, out ModelObject, )
AGM.Modelling.CreateTextSheet = modellingCreateTextSheet;
//AGM.Modelling.SweepByDist( in\out profile, distance, bothside = false, draftangle = 0 )
AGM.Modelling.SweepByDist = modellingSweepByDist;
//AGM.Modelling.IntersectHollowCylinder( in\out Modelbody, bottom_position, top_position, max_radius, min_radius )
AGM.Modelling.IntersectHollowCylinder = modellingIntersectHollowCylinder;
/**************************[NameSpace "AGM.Sketcher"]**************************/
AGM.Sketcher = {};
AGM.Sketcher.CreateDocument = sketchCreateDocument;
AGM.Sketcher.CreateRect = sketchCreateRect;
AGM.Sketcher.Extrude = sketchExtrude;
AGM.Sketcher.Revolve = sketchRevolve;
AGM.Sketcher.OpenSketch = sketchOpen;
AGM.Sketcher.CreateCircle = sketchCreateCircle;
AGM.Sketcher.CloseSketch = sketchClose;
AGM.Sketcher.CreateSketch = sketchCreateSketch;
AGM.Sketcher.CreatePolygon = sketchCreatePolygon;
AGM.Sketcher.CreateEllipse = sketchCreateEllipse;
AGM.Sketcher.CreateTan2Circles = sketchCreateTan2Circles;
AGM.Sketcher.CreateArc = sketchCreateArc;
AGM.Sketcher.CreateArc3Points = sketchCreateArc3Points;
AGM.Sketcher.CreateLine = sketchCreateLine;
AGM.Sketcher.CreateSpline = sketchCreateSpline;
AGM.Sketcher.CreatePolyline = sketchCreatePolyline;
AGM.Sketcher.CreateCenterLine = sketchCreateCenterLine;
AGM.Sketcher.FixModel = sketchFixModel;
AGM.Sketcher.ConvertToWire = sketchConvertToWire;
AGM.Sketcher.ConvertToPath = sketchConvertToPath;
/**************************[NameSpace "AGM.Sim"]**************************/
//AGM.Sim = {};
//AGM.Sim.loadRobotFile = loadRobotFile;
//AGM.Sim.CreateDocumentRobot = simCreateDocumentRobot;
//AGM.Sim.CreateLink = simCreateLink;
//AGM.Sim.CreatePart = simCreatePart;
//AGM.Sim.CreateDocumentAcis = simCreateDocumentAcis;
//AGM.Sim.CreateFlangePosition = simCreateFlangePosition;
//AGM.Sim.RestoreAcisFile = simRestoreAcisFile;
//AGM.Sim.CreateDocumentWork = simCreateDocumentWork;
