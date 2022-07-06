define(['app'], function (app) {
    app.controller("AttendanceSheetController", function ($scope, $uibModal, $localStorage, $state, AppSettings, SystemUserService, AdminService, PreExaminationService) {

        var authData = $localStorage.authorizationData;
        console.log(authData)
        $scope.userName = authData.userName
        $scope.Attendance = 'true';
        $scope.AttendanceValues = [{ "Name": "Present", "Value": 1 }, { "Name": "Absent", "Value": 0 }, { "Name": "Malpractice", "Value": 2 }]
        //alert($localStorage.ExamCenterCode)

        $scope.OpenPopup = function () {
            $scope.modalInstance = $uibModal.open({
                templateUrl: "/app/views/AbsentListPopup.html",
                size: 'xlg',
                scope: $scope,
                windowClass: 'modal-fit-att',
                //backdrop: 'static',
            });
            $scope.AbsentList = []
            for (var i = 0, l = $scope.AttendanceData.length; i < l; i++) {
                if ($scope.AttendanceData[i].Attendance == 0 || $scope.AttendanceData[i].Attendance == 2) {
                    var obj = {
                        ExamAttendanceID: $scope.AttendanceData[i]['ExamAttendanceID'],
                        HallTicketNo: $scope.AttendanceData[i]['HallTicketNo'],
                        Attendance: $scope.AttendanceData[i]['Attendance']
                    }
                    if (obj.HallTicketNo == $scope.AttendanceLists[i]['ExamAttendanceID']) {
                        obj.Attendance = $scope.AttendanceLists[i]['HallTicketNo'];
                        obj.ExamAttendanceID = $scope.AttendanceLists[i]['Attendance'];
                        arrayForUse.push($scope.AttendanceLists[i]['Attendance']);
                    } else {
                        $scope.AbsentList.push(obj)
                    }
                    
                }

            }

        }


        $scope.closeModal = function () {
            //$scope.noteChallan = false;
            $scope.modalInstance.close();
        }
        $scope.btnLoading = false;
        $scope.OpenReport = function () {
            $scope.btnLoading = true;
            var getExamCentersTypes = PreExaminationService.GetMigrationCertificate('5525105');
            getExamCentersTypes.then(function (res) {
                $scope.btnLoading = false;
               /* window.open(res[0].PdfUrl, '_blank');*/
               
            },
                function (error) {
                    $scope.btnLoading = false;
                    $scope.loading = false;
                    $scope.Data = false;
                    $scope.nodata = true;
                    alert("error while loading data");
                    var err = JSON.parse(error);
                });
        }


        $scope.SubmitData = function () {
        
    
            var getExamCentersTypes = PreExaminationService.SetAttendanceList($scope.AttendanceData, $localStorage.ExamCenterCode, $scope.userName);
            getExamCentersTypes.then(function (res) {

                $scope.loading = false;
                $scope.nodata = false;
                $scope.Data = true;
                alert("Data Saved Succussfully")
                $scope.modalInstance.close();
                //$scope.AttendanceList = []
                //$scope.AttendanceList = res.Table;

                //$scope.AttendanceList.forEach(object => {

                //    object.data = 1;
                //});
            },
                function (error) {
                    $scope.loading = false;
                    $scope.Data = false;
                    $scope.nodata = true;
                       alert("error while loading data");
                    var err = JSON.parse(error);
                });
        }

        $scope.loading = true;
        $scope.nodata = false;
        $scope.Data = false;
        var getExamCentersTypes = PreExaminationService.GetAttendanceList($localStorage.ExamCenterCode);
        getExamCentersTypes.then(function (res) {
            if (res.Table.length > 0) {
                $scope.loading = false;
                $scope.nodata = false;
                $scope.Data = true;
                $scope.AttendanceLists = res.Table;
                var arrayForUse = [];
                for (var i = 0, l = $scope.AttendanceLists.length; i < l; i++) {
                    var obj = {
                        ExamAttendanceID: $scope.AttendanceLists[i]['ExamAttendanceID'],
                        HallTicketNo: $scope.AttendanceLists[i]['HallTicketNo'],
                        Attendance: $scope.AttendanceLists[i]['Attendance'],
                    }
                    arrayForUse.push(obj);
                }
                $scope.AttendanceData = arrayForUse
                console.log($scope.AttendanceData)
            } else {
                $scope.loading = false;
                $scope.nodata = true;
                $scope.Data = false;
            }
            
      
            //$scope.AttendanceList = []
          
            
        },
            function (error) {
                $scope.loading = false;
                $scope.Data = false;
                $scope.nodata = true;
                //   alert("error while loading Notification");
                var err = JSON.parse(error);
            });
     
        $scope.RadioChange = function (data, ind) {
         
            console.log($scope.AttendanceData)
            
     var Marks =[]
            Marks.push($scope.AttendanceData);
            console.log(markslist)
            var markslist = Marks[0]
            //console.log(HallTicketNo, Attendance, ind)
            if (markslist.length > 0) {
                markslist.map((obj) => {
                    if (obj.HallTicketNo == data.HallTicketNo) {
                        obj.Attendance = data.Attendance;
                        obj.ExamAttendanceID = data.ExamAttendanceID;
                        tempId.push(data.HallTicketNo); 
                    }
                    if (obj.HallTicketNo != data.HallTicketNo && !tempId.includes(data.HallTicketNo)) {
                        var marksdata = $scope.addData(data.HallTicketNo, data.Attendance, data.ExamAttendanceID);
                        tempId.push(data.HallTicketNo);
                        markslist.push(marksdata);

                    }
                });

            } else if (markslist.length == 0) {
                var marksdata = $scope.addData(data.HallTicketNo, data.Attendance, data.ExamAttendanceID);
                markslist.push(marksdata);

            }
            console.log(markslist)
            $scope.AttendanceData=markslist
        }


        var tempId = [];


        $scope.addData = function (HallTicketNo, Attendance, ExamAttendanceID) {
            return {
                HallTicketNo: HallTicketNo,
                Attendance: Attendance,
                ExamAttendanceID: ExamAttendanceID
            };
        }

    })
})