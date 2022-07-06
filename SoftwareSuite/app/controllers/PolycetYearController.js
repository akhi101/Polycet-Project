define(['app'], function (app) {
    app.controller("PolycetYearController", function ($scope, $stateParams, $localStorage, $state, AppSettings, SystemUserService, AdminService, PreExaminationService) {

        var authData = $localStorage.authorizationData;

        $scope.userName = authData.userName

        $scope.Ativities = [{ "Id": true, "Value": "Active" },
            { "Id": false, "Value": "InActive" }]

        $scope.PolycetYears = function () {
            var getExamCentersTypes = PreExaminationService.GetPolycetYears();
            getExamCentersTypes.then(function (response) {
                var res = JSON.parse(response);
                $scope.loading = false;
                $scope.nodata = false;
                $scope.Data = true;
                for (var j = 1; j < res.Table.length + 1; j++) {
                    $scope['edit' + j] = true;
                }
                $scope.GetPolycetYears = res.Table;

            },
                function (error) {
                    $scope.loading = false;
                    $scope.Data = false;
                    $scope.nodata = true;
                    //   alert("error while loading Notification");
                    var err = JSON.parse(error);
                });
        }
        $scope.setTime = function () {
            $scope.GetDetails()
            setInterval(function () { $scope.GetDetails() }, 90000);
        }

        $scope.GetDetails = function () {
            var getExamCenters = PreExaminationService.GetUsers();
            getExamCenters.then(function (res) {
                var response = JSON.parse(res)
                var users = response.Table;
                console.log(users.length)
                for (var i = 0; i < users.length; i++) {

                    
                    //console.log(users[i].UserLoginName)
                    var getExamCenters = PreExaminationService.SendSms(users[i].UserLoginMobile);
                    getExamCenters.then(function (resp) {
                       
                        $scope.resp = resp;

                        console.log(resp)
                    },
                        function (error) {
                            //   alert("error while loading Notification");
                            var err = JSON.parse(error);
                        });
                    
                    var getExamCenter = PreExaminationService.SetSms(users[i].UserLoginName);
                    getExamCenter.then(function (res) {
                        //console.log(res)

                    },
                        function (error) {
                            //   alert("error while loading Notification");
                            var err = JSON.parse(error);
                        });
                  
                }
                console.log("Over")
                }
            ,
                function (error) {
                    //   alert("error while loading Notification");
                    var err = JSON.parse(error);
                });
        }
        

        var getExamCentersTypes = PreExaminationService.GetPolycetYears();
        getExamCentersTypes.then(function (response) {
            var res = JSON.parse(response);
            $scope.loading = false;
            $scope.nodata = false;
            $scope.Data = true;
            for (var j = 1; j < res.Table.length + 1; j++) {
                $scope['edit' + j] = true;
            }
            $scope.GetPolycetYears = res.Table;

        },
            function (error) {
                $scope.loading = false;
                $scope.Data = false;
                $scope.nodata = true;
                //   alert("error while loading Notification");
                var err = JSON.parse(error);
            });
       

        $scope.Editsemesterdat = function (data, ind) {

            var ele1 = document.getElementsByClassName("enabletable" + ind);
            for (var j = 0; j < ele1.length; j++) {
                ele1[j].style['pointer-events'] = "auto";
                ele1[j].style.border = "1px solid #ddd";
            }
            $scope['edit' + ind] = false;

        }


        $scope.Submit = function () {
            var setExamCenters = PreExaminationService.SetPolycetYear($scope.PolycetYear, $scope.userName);
            setExamCenters.then(function (res) {
                var response = JSON.parse(res)
                console.log(response)
                if (response.Table[0].ResponseCode == '200') {

                    alert(response.Table[0].ResponseDescription)
                    $scope.PolycetYears();
                } else {
                    alert('Something Went Wrong')
                }
            },
                function (error) {
                    //   alert("error while loading Notification");
                    var err = JSON.parse(error);
                });
        }

        $scope.Updatesemesterdat = function (data, ind) {
            $scope['edit' + ind] = true;

            var ele2 = document.getElementsByClassName("enabletable" + ind);
            for (var j = 0; j < ele2.length; j++) {
                ele2[j].style['pointer-events'] = "none";
                ele2[j].style.border = "0";
            }

          
            if (data.PolycetYearID == null || data.PolycetYearID == undefined || data.PolycetYearID == "") {
                alert("Please Enter Examination Centre Code.");
                return;
            }
            if (data.Active == undefined ) {
                alert("Please Select Active Status.");
                return;
            }
          
            var SetSemester = PreExaminationService.UpdatePolycetYear(data.PolycetYearID, data.Active,$scope.userName)
            SetSemester.then(function (resp) {
                var response = JSON.parse(resp)
                if (response.Table[0].ResponseCode == '200') {

                    alert(response.Table[0].ResponseDescription)
                    $scope.PolycetYears();
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