SET AGM_HOME=%~dp0

set A3DT=%AGM_HOME%\..\acis
set ARCH_RELEASE=NT_VC14_64_DLL
set X3DT=%AGM_HOME%\..\iop
set ARCH_RELEASE=NT_VC14_64_DLL

set HOOPS=%AGM_HOME%\..\hoops
set HOOPS_ARCH=nt_x64_vc14

set V8_HOME=%AGM_HOME%\v8

SET RADF_BUILD_VER=2700
SET PATH=%A3DT%\%ARCH_RELEASE%\code\bin;%X3DT%\%ARCH_RELEASE%\code\bin;%HOOPS%\bin\%HOOPS_ARCH%;%V8_HOME%\bin\x64;%path%;

cd %AGM_HOME%
start SIDCmd.exe -file "D:\SINUS-3D\StagingEnvironment\JS-data\AJX051950P2.csv"