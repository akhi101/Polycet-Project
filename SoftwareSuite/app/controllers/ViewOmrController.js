define(['app'], function (app) {
    app.controller("ViewOmrController", function ($scope, $uibModal, $localStorage, $state, AppSettings, PreExaminationService) {
       
        $scope.ViewOmr = function () {
            $scope.Loading = true;
            var getExamCentersTypes = PreExaminationService.ViewOmrDetails($scope.HallTicketNumber);
            getExamCentersTypes.then(function (res) {
                console.log(res.barcode)
                var res = JSON.parse(res);
                if (res[0].ResponseCode == '200') {
                    $scope.Loading = false;
                    $scope.Data = true;
                    $scope.nodata = false;
                    var barcode = res[0].Barcode
                    var url = window.location.origin + '/omrsheets/' + barcode + '.jpg';
                    $scope.Barcode = url.replace(/\s/g, '');;;

                } else {
                    $scope.Loading = false;
                    $scope.Data = false;
                    $scope.nodata = true;
                    alert("No Data Found")
                }
            },
                function (error) {
                    $scope.loading = false;
                    $scope.Data = false;
                    $scope.nodata = true;
                    alert("error while loading data");
                    var err = JSON.parse(error);
                });
        }

        

    })
})