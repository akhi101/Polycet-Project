﻿define(['app'], function (app) {
    app.service("ExamFormsApprovalWCService", function (DataAccessService) {
        this.AddExamForms = function (object) {
            var promise = DataAccessService.putData('api/ExamForms/PutExamForms', object);
            return promise;
        }
        this.UpdateExamForms = function (object) {
            var promise = DataAccessService.postData('api/ExamForms/PostExamForms', object);
            return promise;
        }
        this.PostApprovalForms = function (object) {
            var promise = DataAccessService.postData('api/ExamFormsWC/PostApprovalForms', object);
            return promise;
        }
        this.GetExamFormsApprovalList = function (ExamInstID, CollegeID, CourseID, ExamID) {
            var paramObject = { "ExamInstID": ExamInstID, "CollegeID": CollegeID, "CourseID": CourseID, "ExamID": ExamID };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetExamFormsApprovalList', paramObject);
            return promise;
        }

        this.GetChallanNo = function (ExamInstID, ExamID, CollegeID) {
            var paramObject = { "ExamInstID": ExamInstID, "ExamID": ExamID, "CollegeID": CollegeID};
            var promise = DataAccessService.getDataWithPara('api/ExamFormsWC/GetChallanNo', paramObject);
            return promise;
        }

        this.GetExamFormsById = function (ExmFrmID) {
            var paramObject = { "ExmFrmID": ExmFrmID };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetExamFormsById', paramObject);
            return promise;
        }
        this.GetCourseListForRegStud = function (CollegeID, AcdYrID) {
            var paramObject = { "CollegeID": CollegeID, "AcdYrID": AcdYrID };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetCourseListForRegStud', paramObject);
            return promise;
        }
        this.GetMainGroupListByCollegeId = function (CollegeID, CourseID, AcdYrID) {
            var paramObject = { "CollegeID": CollegeID, "CourseID": CourseID, "AcdYrID": AcdYrID };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetMainGroupListByCollegeId', paramObject);
            return promise;
        }
        this.GetBasicAcademicYearListForExamForm = function () {
            var data = DataAccessService.getDataAll('api/BasicAcademicYear/GetBasicAcademicYearListForExamForm');
            return data;
        }
        this.GetDistrictListByStateID = function (StateID) {
            var paramObject = { "StateID": StateID };
            var promise = DataAccessService.getDataWithPara('api/BasicDistricts/GetDistrictListByStateID', paramObject);
            return promise;
        }
        this.GetMandalListByDistrict = function (DistrictID) {
            var paramObject = { "DistrictID": DistrictID };
            var promise = DataAccessService.getDataWithPara('api/BasicMandal/GetBasicMandalByDistrictID', paramObject);
            return promise;
        }
        this.GetCollegeListByDistrictAndMandal = function (DistrictID, MandalID) {
            var paramObject = { "DistrictID": DistrictID, "MandalID": MandalID };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetCollegeListByDistrictAndMandal', paramObject);
            return promise;
        }
        this.GetCourseListForRegStud = function (CollegeID) {
            var paramObject = { "CollegeID": CollegeID };
            var promise = DataAccessService.getDataWithPara('api/BasicMainGroup/GetCourseListForRegStud', paramObject);
            return promise;
        }
        this.GetBasicExamList = function (CourseID) {
            var paramObject = { "CourseID": CourseID };
            var promise = DataAccessService.getDataWithPara('api/BasicExam/GetBasicExamListByCourseID', paramObject);
            return promise;
        }
        this.GetBasicBranchListByCourseID = function (CourseID) {
            var paramObject = { "CourseID": CourseID };
            var promise = DataAccessService.getDataWithPara('api/BasicBranch/GetBasicBranchListByCourseID', paramObject);
            return promise;
        }
    });
});