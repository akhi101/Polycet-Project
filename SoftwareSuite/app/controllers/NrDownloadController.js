define(['app'], function (app) {
    app.controller("NrDownloadController", function ($scope, $stateParams, $localStorage, $state, AppSettings, SystemUserService, AdminService, PreExaminationService) {

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

        const download = (path, filename) => {
            // Create a new link
            const anchor = document.createElement('a');
            anchor.href = path;
            anchor.download = filename;

            // Append to the DOM
            document.body.appendChild(anchor);

            // Trigger `click` event
            anchor.click();

            // Remove element from DOM
            document.body.removeChild(anchor);
        };


        $scope.DownloadNr = function (ExamCenterCode) {
           /* alert(ExamCenterCode)*/
            $scope.loading = true;
            $scope.Data = false;
            var getExamCenters = PreExaminationService.GetPrinterNr(ExamCenterCode);
        getExamCenters.then(function (res) {
            if (res.length > 0) {
                if (res.length > 4) {
                    $scope.loading = false;
                    $scope.Data = true;
                    //window.location.href + '/Reports/' + res + '.pdf';
                    window.location.href
                    //window.open(location,'_blank')
                    var url = window.location.origin + '/Reports/' + res + '.pdf';
                    console.log(url)
                    download(url, 'NR_' + ExamCenterCode+'.pdf');
                    //window.open(url, '_blank');
                } else {
                    $scope.loading = false;
                    $scope.Data = true;
                    alert("No NR Report Present");
                }
            } else {
                $scope.loading = false;
                $scope.Data = true;
                alert("No NR Report Present");
            }

        },
            function (error) {
                //   alert("error while loading Notification");
                var err = JSON.parse(error);
            });
        }

        $scope.openDetails = function (data) {
            var getExamCenters = PreExaminationService.GetPrinterNr(data.ExaminationCentreCode);
            getExamCenters.then(function (response) {
                //var res = JSON.parse(response);
                console.log(response)
                //$scope.loading = false;
                //$scope.Data = true;
                window.location.href = res[0].file;

            },
                function (error) {
                    //   alert("error while loading Notification");
                    var err = JSON.parse(error);
                });
            //$state.go('Dashboard.AttendanceSheet')
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
      
        /*$scope.SendSms = function () {*/
        //    var getExamCenters = PreExaminationService.GetUsers();
        //getExamCenters.then(function (res) {
        //    var response = JSON.parse(res)
        //    var users = response.Table;
        //    console.log(users.length)
        //    for (var i = 0; i < users.length; i++) {

                
        //        console.log(users.length)
        //        var getExamCenters = PreExaminationService.SendSms(users[i].UserLoginMobile);
        //        getExamCenters.then(function (response) {
        //           console.log(response)

        //        },
        //            function (error) {
        //                //   alert("error while loading Notification");
        //                var err = JSON.parse(error);
        //            });
        //        }
        //    console.log(users.length)
        //    },
        //        function (error) {
        //            //   alert("error while loading Notification");
        //            var err = JSON.parse(error);
        //        });
        //}
    })
})