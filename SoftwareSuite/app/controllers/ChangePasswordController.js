define(['app'], function (app) {
    app.controller("ChangePasswordController", function ($scope, $crypto, $localStorage, $state, AppSettings, SystemUserService, AdminService, PreExaminationService) {
        var authData = $localStorage.authorizationData;
        $scope.UserId = authData.SysUserID
        AppSettings.LoggedUserId = authData.SysUserID;
        console.log(sessionStorage.Ekey)
        $scope.Submit = function () {
            if ($scope.OldPassword == null || $scope.OldPassword == "" || $scope.OldPassword == undefined) {
                alert("Please Enter old Password")
            }
            if ($scope.NewPassword == null || $scope.NewPassword == "" || $scope.NewPassword == undefined) {
                alert("Please Enter New Password")
            }
            if ($scope.ConfirmPassword == null || $scope.ConfirmPassword == "" || $scope.ConfirmPassword == undefined) {
                alert("Please Enter Confirm Password")
            }
            if ($scope.NewPassword === $scope.ConfirmPassword) {
                let reqdata = $crypto.encrypt($scope.NewPassword, sessionStorage.Ekey) + "$$@@$$" + $crypto.encrypt($scope.OldPassword, sessionStorage.Ekey) + "$$@@$$" + $crypto.encrypt(AppSettings.LoggedUserId.toString(), sessionStorage.Ekey) + "$$@@$$" + sessionStorage.Ekey;
                console.log(reqdata)
                var getExamCenters = PreExaminationService.ChangePassword(reqdata);
                getExamCenters.then(function (response) {
                    console.log(response)
                    if (response.ResponceCode == '200') {
                        alert(response.ResponceDescription)
                    } else if (response.ResponceCode == '400') {
                        alert(response.ResponceDescription)
                    }else
                        {
                        alert("Something Went Wrong")
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
            } else {
                alert("New Password and Confirm Password must be same")
            }
        }
        $scope.viewPassword = function() {
            document.getElementById("myPass").setAttribute("type", "text");
        }
    })
})