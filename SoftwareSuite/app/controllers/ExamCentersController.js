define(['app'], function (app) {
    app.controller("ExamCentersController", function ($scope, $stateParams, $localStorage, $state, AppSettings, SystemUserService, AdminService, PreExaminationService) {

        var authData = $localStorage.authorizationData;

        $scope.userName = authData.userName

        $scope.Ativities = [{ "Id": true,"Value":"Active" },
            { "Id": false, "Value": "InActive" }        ]


        

        var getExamCentersTypes = PreExaminationService.GetExaminationCentreTypes();
        getExamCentersTypes.then(function (res) {
            //var res = JSON.parse(response);           
            $scope.GetExamCenterTypes = res.Table;
        },
            function (error) {
                //   alert("error while loading Notification");
                var err = JSON.parse(error);
            });

        $scope.loading = true;
        $scope.Data = false;
        $scope.nodata = false;
        var getExamCenters = PreExaminationService.GetExamCenters($scope.userName);
        getExamCenters.then(function (response) {
            var res = JSON.parse(response);
            for (var j = 1; j < res.Table.length + 1; j++) {
                $scope['edit' + j] = true;
            }
            $scope.loading = false;
            $scope.nodata = false;
            $scope.Data = true;
            $scope.GetExamCenters = res.Table;
           
        },
            function (error) {
                $scope.loading = false;
                $scope.Data = false;
                $scope.nodata = true;
                   alert("error while loading Data");
                var err = JSON.parse(error);
            });

        $scope.getExamCenters = function () {
            var getExamCenters = PreExaminationService.GetExamCenters($scope.userName);
            getExamCenters.then(function (response) {
                var res = JSON.parse(response);
                for (var j = 1; j < res.Table.length + 1; j++) {
                    $scope['edit' + j] = true;
                }
                $scope.GetExamCenters = res.Table;

            },
                function (error) {
                    //   alert("error while loading Notification");
                    var err = JSON.parse(error);
                });
        }
        $scope.DownloadtoExcel = function () {
        var getExamCenters = PreExaminationService.GetExamCentersExcel($scope.userName);
        getExamCenters.then(function (response) {
            var res = JSON.parse(response);
            //console.log(res)
                    //$scope.loading = false;
                    //$scope.Data = true;
            window.location.href = res[0].file;

        },
            function (error) {
                //   alert("error while loading Notification");
                var err = JSON.parse(error);
            });
        }

        $scope.Editsemesterdat = function (data, ind) {

            var ele1 = document.getElementsByClassName("enabletable" + ind);
            for (var j = 0; j < ele1.length; j++) {
                ele1[j].style['pointer-events'] = "auto";
                ele1[j].style.border = "1px solid #ddd";
            }
            $scope['edit' + ind] = false;

        }

        $scope.Submit = function () {
            var setExamCenters = PreExaminationService.SetExamCenters($scope.ExamCenter, $scope.ExaminationCentreType, $scope.ExamCenterPhone, $scope.ExamCenterCapacity, $scope.userName);
            setExamCenters.then(function (res) {
                var response = JSON.parse(res)
                if (response.Table[0].ResponseCode == '200') {

                    alert(response.Table[0].ResponseDescription)
                    $scope.getExamCenters();
                } else {
                    alert('Something Went Wrong')
                }
            },
                function (error) {
                    //   alert("error while loading Notification");
                    var err = JSON.parse(error);
                });
        }

        $scope.SiteViews = 0;
        //$scope.websiteCounts = function () {

        $scope.Cancel = function (data, ind) {
            $scope['edit' + ind] = true;

            var ele2 = document.getElementsByClassName("enabletable" + ind);
            for (var j = 0; j < ele2.length; j++) {
                ele2[j].style['pointer-events'] = "none";
                ele2[j].style.border = "0";
                ele2[j].style['-webkit-appearance'] = "none";
                ele2[j].style['-moz-appearance'] = "none";
            }
        }

        $scope.Updatesemesterdat = function (data, ind) {
            $scope['edit' + ind] = true;

            var ele2 = document.getElementsByClassName("enabletable" + ind);
            for (var j = 0; j < ele2.length; j++) {
                ele2[j].style['pointer-events'] = "none";
                ele2[j].style.border = "0";
            }

            //ExaminationCentreID":1,"ExaminationCentreCode":"400","ExaminationCentreName":"SGM GOVERNMENT POLYTECHNIC ABDULAPURMET","ExaminationCentreTypeCode":"A","ExaminationCentrePhone":"9908714899","ExaminationCentreCapacity":240,"Active":true
            var datatypeid = 2;

            //if (data.ExaminationCentreID == null || data.ExaminationCentreID == undefined || data.ExaminationCentreID == "") {
            //    alert("Please select Course.");
            //    return;
            //}

            if (data.ExaminationCentreCode == null || data.ExaminationCentreCode == undefined || data.ExaminationCentreCode == "") {
                alert("Please Enter Examination Centre Code.");
                return;
            }
            if (data.ExaminationCentreName == null || data.ExaminationCentreName == undefined || data.ExaminationCentreName == "") {
                alert("Please Enter Examination Centre Name.");
                return;
            }
            if (data.ExaminationCentreTypeID == null || data.ExaminationCentreTypeID == undefined || data.ExaminationCentreTypeID == "") {
                alert("Please Select Examination Centre Type.");
                return;
            }
            if (data.ExaminationCentrePhone == null || data.ExaminationCentrePhone == undefined || data.ExaminationCentrePhone == "") {
                alert("Please Enter Examination Centre Phone Number.");
                return;
            }
            if (data.ExaminationCentreCapacity == null || data.ExaminationCentreCapacity == undefined || data.ExaminationCentreCapacity == "") {
                alert("Please Enter Examination Centre Capacity.");
                return;
            }
            if (data.Active === null || data.Active === undefined || data.Active === "") {
                alert("Please Select Active Status.");
                return;
            }
            var SetSemester = PreExaminationService.UpdateExamCenters($scope.userName, data.ExaminationCentreID, data.ExaminationCentreName, data.ExaminationCentreTypeID, data.ExaminationCentrePhone, data.ExaminationCentreCapacity, data.Active)
            SetSemester.then(function (response) {
                var response = JSON.parse(response)
                if (response.Table[0].ResponceCode == '200') {

                    alert(response.Table[0].ResponceDescription)
                    $scope.getExamCenters();
                } else {
                    alert('Something Went Wrong')
                }
            },
                function (error) {
                    alert("something Went Wrong")


                });
        }

    })
})