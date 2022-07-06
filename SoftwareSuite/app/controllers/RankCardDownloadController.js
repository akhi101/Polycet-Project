define(['app'], function (app) {
    app.controller("RankCardDownloadController", function ($scope, $uibModal, $localStorage, $state, AppSettings, PreExaminationService) {

        $scope.GetRankCard = function () {
            $scope.Loading = true;
        var getExamCentersTypes = PreExaminationService.GetPolycetRankDetails($scope.HallTicketNumber);
        getExamCentersTypes.then(function (res) {
            var res = JSON.parse(res);
            if (res.length > 0) {
                $scope.Loading = false;
                $scope.Data = true;
                $scope.nodata = false;
                $scope.StudentData = res[0]

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

        $scope.printMarksEntered = function () {
            //document.title = $scope.HallTicketNumber;
            document.title = window.parent.document.title = $scope.HallTicketNumber;
            window.print();
            $scope.printHead = true;
            var divName = "idtoDivPrint";
            var $markstable = document.createElement("div");
            $markstable.innerHTML = '';
            $markstable.className = "table";
            var divToPrint = document.getElementById(divName);
            var temp = document.body.innerHTML;
            //    $("#markslist").hide();
            var domClone = divToPrint.cloneNode(true);
            var $printSection = document.getElementById("printSection");
            if ($printSection) {
                var $printSection = document.createElement("div");
                $printSection.id = "printSection";


                document.body.appendChild($printSection);

                var $ele1 = document.createElement("div");
                $ele1.className = "row";

                var $ele2 = document.createElement("div");
                $ele2.className = "col-lg-2 col-md-12";

                var $ele3 = document.createElement("div");
                $ele3.className = "col-lg-10 col-md-12";


                $ele1.appendChild($ele3);

                $printSection.appendChild($ele1);

                $printSection.appendChild($ele1);
                $printSection.appendChild($markstable);

            }

         


        }

    })
})