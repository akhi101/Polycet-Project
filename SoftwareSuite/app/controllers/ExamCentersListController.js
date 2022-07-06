define(['app'], function (app) {
    app.controller("ExamCentersListController", function ($scope, $stateParams, $localStorage, $state, AppSettings, SystemUserService, AdminService, PreExaminationService) {

        var authData = $localStorage.authorizationData;

        $scope.userName = authData.userName

        $scope.Ativities = [{ "Id": true, "Value": "Active" },
        { "Id": false, "Value": "InActive" }]


        $scope.loading = true;
        $scope.Data = false;
        $scope.nodata = false;
        var getExamCenters = PreExaminationService.GetExamCenters($scope.userName);
        getExamCenters.then(function (response) {
            var res = JSON.parse(response);
           
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

        $scope.openDetails = function (data) {
            $localStorage.ExamCenterCode = data.ExaminationCentreCode
            $state.go('Dashboard.AttendanceSheet')
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
    })
})