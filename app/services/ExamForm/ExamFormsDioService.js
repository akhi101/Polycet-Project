﻿define(['app'], function(app) {
    app.service("ExamFormsDioService", function(DataAccessService) {
        this.AddExamFormsDio = function(object) {
            var promise = DataAccessService.postData('api/ExamForms/PostInsertExamForms', object); //PutExamFormsDio
            return promise;
        }
        this.UpdateExamFormsDio = function(object) {
            var promise = DataAccessService.postData('api/ExamForms/PostExamForms', object);
            return promise;
        }
        this.DeleteExamFormsDio = function(ExmFrmID, UpdLoginID) {
            var paramObject = { "ExmFrmID": ExmFrmID, "UpdLoginID": UpdLoginID };
            var promise = DataAccessService.deleteData('api/ExamForms/DeleteExamForms', paramObject);
            return promise;
        }
        this.GetExamFormsDioList = function(ExamInstID, CollegeID, CourseID, ExamID, BranchID) {
            var paramObject = { "ExamInstID": ExamInstID, "CollegeID": CollegeID, "CourseID": CourseID, "ExamID": ExamID, "BranchID": BranchID };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetExamFormsList', paramObject);
            return promise;
        }
        this.GetCheckDistrictDioAndStudent = function(PRNNo, ExamInstID, DistrictIDs) {
            var paramObject = { "PRNNo": PRNNo, "ExamInstID": ExamInstID, "DistrictIDs": DistrictIDs };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetCheckDistrictDioAndStudent', paramObject);
            return promise;
        }
        this.GetExamFormsDioById = function(ExmFrmID) {
            var paramObject = { "ExmFrmID": ExmFrmID };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetExamFormsById', paramObject);
            return promise;
        }
        this.GetExamFormsDioByIdForOpenExamForm = function(MainGrpID, ExamID, ExamInstID) {
            var paramObject = { "MainGrpID": MainGrpID, "ExamID": ExamID, "ExamInstID": ExamInstID };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetExamFormsDioByIdForOpenExamForm', paramObject);
            return promise;
        }
        this.GetBasicAcademicYearListForExamForm = function() {
            var data = DataAccessService.getDataAll('api/BasicAcademicYear/GetBasicAcademicYearListForExamForm');
            return data;
        }
        this.GetExamFormDataByPrnNoForDio = function(PRNNo, ExamInstID,  CourseID, ExamID, BranchID) {
            var paramObject = { "PRNNo": PRNNo, "ExamInstID": ExamInstID, "CourseID": CourseID, "ExamID": ExamID, "BranchID": BranchID };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetExamFormDataByPrnNoForDio', paramObject);
            return promise;
        }
        this.GetExmFrmMaxNo = function(ExamInstID, CollegeID) {
            var paramObject = { "ExamInstID": ExamInstID, "CollegeID": CollegeID };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetExmFrmMaxNo', paramObject);
            return promise;
        }

        this.GetBasicBranchListForRegStud = function(CourseID, CollegeID) {
            var paramObject = { "CourseID": CourseID, "CollegeID": CollegeID };
            var promise = DataAccessService.getDataWithPara('api/BasicMainGroup/GetBasicBranchListForRegStud', paramObject);
            return promise;
        }
        this.GetBasicBranchListByCourseID = function(CourseID) {
            var paramObject = { "CourseID": CourseID };
            var promise = DataAccessService.getDataWithPara('api/BasicBranch/GetBasicBranchListByCourseID', paramObject);
            return promise;
        }

        this.GetPRNDataList = function(PRNNo) {
            var paramObject = { "PRNNo": PRNNo };
            var promise = DataAccessService.getDataWithPara('api/BasicBranch/GetPRNDataList', paramObject);
            return promise;
        }
        this.GetMainGroupListByCollegeId = function(CollegeID, CourseID, AcdYrID) {
            var paramObject = { "CollegeID": CollegeID, "CourseID": CourseID, "AcdYrID": AcdYrID };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetMainGroupListByCollegeId', paramObject);
            return promise;
        }
        this.GetAcademicYearFeesByCode = function(FeesCode) {
            var paramObject = { "FeesCode": FeesCode };
            var promise = DataAccessService.getDataWithPara('api/AcademicYearFees/GetAcademicYearFeesByCode', paramObject);
            return promise;
        }
        this.GetAcademicYearFeesByDate = function(object) {
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetAcademicYearFeesByDate', object);
            return promise;
        }
        this.GetGroupSubjects = function(MainGrpID, ExamID) {
            var paramObject = { "MainGrpID": MainGrpID, "ExamID": ExamID };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetGroupSubjects', paramObject);
            return promise;
        }
        this.GetCourseListForRegStud = function(CollegeID, AcdYrID) {
            var paramObject = { "CollegeID": CollegeID, "AcdYrID": AcdYrID };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetCourseListForRegStud', paramObject);
            return promise;
        }
        this.GetBasicExamList = function(CourseID) {
            var paramObject = { "CourseID": CourseID };
            var promise = DataAccessService.getDataWithPara('api/BasicExam/GetBasicExamListByCourseID', paramObject);
            return promise;
        }
        this.GetCheckPRNNoPresent = function(PRNNo, ExamInstID) {
            var paramObject = { "PRNNo": PRNNo, "ExamInstID": ExamInstID };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetCheckPRNNoPresent', paramObject);
            return promise;
        }
        this.GetUpdateCollegeInPreStudentReg = function(PreStudRegID, PRNNo, CollegeID) {
            var paramObject = {
                "PreStudRegID": PreStudRegID, "PRNNo": PRNNo, "CollegeID": CollegeID};
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetUpdateCollegeInPreStudentReg', paramObject);
            return promise;
        }
        this.GetPhysDisbList = function() {
            var data = DataAccessService.getDataAll('api/BasicPhysDisability/GetBasicPhysDisabilityList');
            return data;
        }
        this.GetSpclConsList = function() {
            var data = DataAccessService.getDataAll('api/BasicSpclConsiderations/GetBasicSpclConsiderationsList');
            return data;
        }
        this.GetCurrExmInstSchedule = function(ExamInstID, ExamID) {
            var paramObject = {
                "ExamInstID": ExamInstID, "ExamID": ExamID
            };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetCurrExmInstSchedule', paramObject);
            return promise;
        }
        this.GetCurretnExamInst = function(AcdYrID) {
            var paramObject = { "AcdYrID": AcdYrID };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetCurretnExamInst', paramObject);
            return promise;
        }
        this.GetBasicMediumList = function() {
            var data = DataAccessService.getDataAll('api/BasicMedium/GetBasicMediumList');
            return data;
        }
        this.GetCheckUnStudCase = function(PRNNo, ApplicationDate, ExamInstID) {
            var paramObject = { "PRNNo": PRNNo, "ApplicationDate": ApplicationDate, "ExamInstID": ExamInstID };
            var promise = DataAccessService.getDataWithPara('api/UnfStudCases/GetCheckUnStudCase', paramObject);
            return promise;
        }
        this.GetStudCatList = function() {
            var data = DataAccessService.getDataAll('api/ExamForms/GetStudCatList');
            return data;
        }
        this.GetInstScheduleDate = function(ExamInstID, ApplicationDate) {
            var paramObject = { "ExamInstID": ExamInstID, "ApplicationDate": ApplicationDate };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetInstScheduleDate', paramObject);
            return promise;
        }
        this.GetSSCHallTicketNoAndInsertIntoPrestudent = function(PRNNo) {
            var paramObject = { "PRNNo": PRNNo };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetSSCHallTicketNoAndInsertIntoPrestudent', paramObject);
            return promise;
        }
        this.GetPrnNoCountInPrestudentReg = function(PRNNo) {
            var paramObject = { "PRNNo": PRNNo };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetPrnNoCountInPrestudentReg', paramObject);
            return promise;
        }
        this.GetcheckstudPassOrNot = function(PRNNo, ExamInstID, CollegeID, CourseID, ExamID, BranchID) {
            var paramObject = { "PRNNo": PRNNo, "ExamInstID": ExamInstID, "CollegeID": CollegeID, "CourseID": CourseID, "ExamID": ExamID, "BranchID": BranchID };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetcheckstudPassOrNot', paramObject);
            return promise;
        }
        this.GetAcademicYearFeesByDateForBridge = function(ExamInstID, ExamID) {
            var paramObject = { "ExamInstID": ExamInstID, "ExamID": ExamID };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetAcademicYearFeesByDateForBridge', paramObject);
            return promise;
        }
        this.GetCollegeListByDistrictIDs = function(DistrictIDs) {
            var paramObject = { "DistrictIDs": DistrictIDs };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetCollegeListByDistrictIDs', paramObject);
            return promise;
        }
        this.GetUpdateCollegeDetails = function (PreStudRegID, PRNNo, CollegeID) {
            var paramObject = { "PreStudRegID": PreStudRegID, "PRNNo": PRNNo, "CollegeID": CollegeID };
            var promise = DataAccessService.getDataWithPara('api/ExamForms/GetUpdateCollegeDetails', paramObject);
            return promise;
        }
    });
});