﻿define(['app'], function (app) {
    app.service("TwshStudentRegService", function (DataAccessService) {
        this.UpdateStudentReg = function (object) {
            var promise = DataAccessService.postData('api/TwshSystemUser/PostCredentials', object);
            return promise;
        }

        this.TransferStudent = function (ReqData) {
            // var paramObj = { "ReqData": ReqData };PIDResponseXML.InnerXml.Length
            var promise = DataAccessService.postData('api/TwshStudentReg/TransferStudent', ReqData);
            return promise;
        };

        this.getTwshFeeDates = function () {
            // var paramObj = { "ReqData": ReqData };PIDResponseXML.InnerXml.Length
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/getTwshFeeDates');
            return promise;
        };

        this.TwshGradewiseExamCenters = function () {
            // var paramObj = { "ReqData": ReqData };PIDResponseXML.InnerXml.Length
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/TwshGradewiseExamCenters');
            return promise;
        };
        
        this.GetBatches = function () {
            // var paramObj = { "ReqData": ReqData };PIDResponseXML.InnerXml.Length
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/GetBatches');
            return promise;
        };

        this.TwshGradewiseExamCentersExcel = function () {
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/TwshGradewiseExamCentersExcel');
            return promise;
        };

        this.updatStudentDetails = function (ApplicationNumber, Photo, File1, File2, DistrictId, HnoStreet, VillageTown, EmailId, ExamDate, Name,
            FatherName, MotherName, Gender, Dob, IsBlind, Grade, ExaminationBatch, ExaminationCenter, MobileNo) {
            var paramObj = {
                "ApplicationNumber": ApplicationNumber, "Photo": Photo, "File1": File1, "File2": File2,
                "DistrictId": parseInt(DistrictId), "HnoStreet": HnoStreet, "VillageTown": VillageTown, "EmailId": EmailId, "ExamDate": ExamDate,
                "Name": Name, "FatherName": FatherName, "MotherName": MotherName, "Gender": Gender, "Dob": Dob, 'IsBlind': parseInt(IsBlind),
                "Grade": parseInt(Grade), "ExaminationBatch": parseInt(ExaminationBatch), "ExaminationCenter": parseInt(ExaminationCenter), "MobileNo": MobileNo

            }
            var promise = DataAccessService.postData('api/TwshStudentReg/UpdateStudentData', paramObj);
            return promise;
        };
        this.getStudentDetails = function (ApplicationNumber) {
            var paramObj = { "ApplicationNumber": ApplicationNumber }
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/getStudentDetails', paramObj);
            return promise;
        };

        this.TwshsetStudentFeepayments = function (ExamMonthYearId, FromDate, ToDate, FineDate, TatkalDate, Fee, LateFee, TatkalFee, PremiumTatkalFee, CertificateFee) {
            var paramObject = {
                "ExamMonthYearId": ExamMonthYearId, "FromDate": FromDate, "ToDate": ToDate, "FineDate": FineDate, "TatkalDate": TatkalDate, "Fee": Fee,
                "LateFee": LateFee, "TatkalFee": TatkalFee, "PremiumTatkalFee": PremiumTatkalFee, "CertificateFee": CertificateFee
            };
   
            var promise = DataAccessService.postData('api/TwshStudentReg/TwshsetStudentFeepayments', paramObject);
            return promise;
        };

        this.TwshUpdateStudentFeepayments = function (Id,ExamMonthYearId, FromDate, ToDate, FineDate, TatkalDate, Fee, LateFee, TatkalFee, PremiumTatkalFee, CertificateFee) {
            var paramObject = {
                "Id":Id,"ExamMonthYearId": ExamMonthYearId, "FromDate": FromDate, "ToDate": ToDate, "FineDate": FineDate, "TatkalDate": TatkalDate, "Fee": Fee,
                "LateFee": LateFee, "TatkalFee": TatkalFee, "PremiumTatkalFee": PremiumTatkalFee, "CertificateFee": CertificateFee
            };
            var promise = DataAccessService.postData('api/TwshStudentReg/TwshUpdateStudentFeepayments', paramObject);
            return promise;
        };

        this.getTwshResult = function (RegNo) {
            var paramObj = { "RegNo": RegNo }
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/getTwshResult', paramObj);
            return promise;
        };
        this.TwshExamCenterStrengthXlsxReport = function (ExamMode) {
            var paramObj = { "ExamMode": ExamMode }
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/TwshExamCenterStrengthXlsxReport', paramObj);
            return promise;
        };
        this.TwshExamCenterStrengthReport = function (ExamMode) {
            var paramObj = { "ExamMode": ExamMode }
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/TwshExamCenterStrengthReport', paramObj);
            return promise;
        };


        this.PostMultiplePaymentData = function (ReqData) {
            // var paramObj = { "ReqData": ReqData };PIDResponseXML.InnerXml.Length
            var promise = DataAccessService.postData('api/TwshStudentReg/PostMultipleApplicationPaymentdata', ReqData);
            return promise;
        };

        this.GetStudentHallticket = function (ApplicationNo, DateofBirth) {
            var paramObj = { "ApplicationNo": ApplicationNo, "DateofBirth": DateofBirth }
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetStudentHallTicket', paramObj);
            return promise;
        };

        this.CreateTwshTimeSlot = function (DataTypeId, CourseId, GradeId, BatchId, Paper1TimeSlot, Paper2TimeSlot, PCODE) {
            var paramObj = {
                "DataTypeId": DataTypeId, "CourseId": CourseId, "GradeId": GradeId,
                "BatchId": BatchId, "Paper1TimeSlot": Paper1TimeSlot, "Paper2TimeSlot": Paper2TimeSlot, "PCODE": PCODE
            }
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/CreateTwshTimeSlot', paramObj);
            return promise;
        };
        
        this.SetTwshTimeSlot = function (DataTypeId, CourseId, GradeId, BatchId, Paper1TimeSlot, Paper2TimeSlot, Id, PCODE) {
            var paramObj = { "DataTypeId": DataTypeId, "CourseId":CourseId,"GradeId":GradeId,
                "BatchId": BatchId, "Paper1TimeSlot": Paper1TimeSlot, "Paper2TimeSlot": Paper2TimeSlot, "Id": Id, "PCODE": PCODE
            }
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/SetTwshTimeSlot', paramObj);
            return promise;
        };
        
    
        
        this.GetExaminationDatesByCourse = function (CourseId) {
            var paramObj = { "CourseId": CourseId }
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetExaminationDatesByCourse', paramObj);
            return promise;
        };

        this.getCourses = function () {
            // var paramObj = { "ReqData": ReqData };SP_GET_Category
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/GetCourses');
            return promise;
        };

        this.TwshCertificate = function () {
            // var paramObj = { "ReqData": ReqData };SP_GET_Category
            var promise = DataAccessService.getDataAll('api/TwshCertificate/GetTypeWritingCertificate');
            return promise;
        };


        this.getCategory = function () {
            // var paramObj = { "ReqData": ReqData };SP_GET_Category
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/GetCategoryList');
            return promise;
        };


        this.getDistricts = function () {
            // var paramObj = { "ReqData": ReqData };SP_GET_Category
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/GetDistrictList');
            return promise;
        };

        this.generateTwshNr = function () {
            // var paramObj = { "ReqData": ReqData };SP_GET_NR
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/generateTwshNr');
            return promise;
        };

        this.generateTwshNrExcel = function () {
            // var paramObj = { "ReqData": ReqData };SP_GET_NR
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/generateTwshNrExcel');
            return promise;
        };

        this.GetOnlineExamDist = function () {
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/GetOnlineExamDist');
            return promise;
        };

        

        this.GetExamsDates = function () {
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/GetExamsDates');
            return promise;
        };

        this.getTwshExamMonthYears = function () {
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/getTwshExamMonthYears');
            return promise;
        };

        this.getTwshExamCenterCollegeList = function () {
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/getTwshExamCenterCollegeList');
            return promise;
        };

        this.getTwshDistictMasterList = function () {
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/getTwshDistictMasterList');
            return promise;
        };

        this.DeleteTwshExamCenter = function (Id) {
            var paramObj = { "Id": Id};
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/DeleteTwshExamCenter', paramObj);
            return promise;
        };

        this.DeleteGradewiseExamCenters = function (Id) {
            var paramObj = { "Id": Id };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/DeleteGradewiseExamCenters', paramObj);
            return promise;
        };

        this.SetTwshExamCenter = function (CenterCode, CenterName, CenterAddress, DistrictId, IsTw, IsSh, IsTwOnline, IsShOnline, GenderId) {
            var paramObj = { "CenterCode": CenterCode, "CenterName": CenterName, "CenterAddress": CenterAddress, "DistrictId": DistrictId, "IsTw": IsTw, "IsSh": IsSh, "IsTwOnline": IsTwOnline, "IsShOnline": IsShOnline, "GenderId": GenderId };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/SetTwshExamCenter', paramObj);
            return promise;
        };

        this.TwshExamDatesbyCourse = function (ExamMonthYearId, CourseId) {
            var paramObj = { "ExamMonthYearId": ExamMonthYearId, "CourseId": CourseId };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/TwshExamDatesbyCourse', paramObj);
            return promise;
        };
        this.TwshExamBatchbyDate = function (ExamDateId) {
            var paramObj = { "ExamDateId": ExamDateId };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/TwshExamBatchbyDate', paramObj);
            return promise;
        };
        this.TwshNrReports = function (ExamMonthYearId, UserId, CourseId, ExamDate, ExamBatch) {
            var paramObj = { "ExamMonthYearId": ExamMonthYearId, "UserId": UserId, "CourseId": CourseId, "ExamDate": ExamDate, "ExamBatch": ExamBatch };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/TwshNrReports', paramObj);
            return promise;
        };

        this.TwshNrExcelReports = function (ExamMonthYearId, UserId, CourseId, ExamDate, ExamBatch) {
            var paramObj = { "ExamMonthYearId": ExamMonthYearId, "UserId": UserId, "CourseId": CourseId, "ExamDate": ExamDate, "ExamBatch": ExamBatch };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/TwshNrExcelReports', paramObj);
            return promise;
        };

        this.getExaminationDistricts = function (CourseId, UserId, GradeId) {
            var paramObj = { "CourseId": CourseId, "UserId": UserId, "GradeId": GradeId };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetExaminationDistricts', paramObj);
            return promise;
        };


        this.SetTwshExamMonthYear = function (DataTypeId, ExamMonthYear, ExamMonthYearId, SequenceId) {
            var paramObj = {
                "DataTypeId": DataTypeId,
                "ExamMonthYear": ExamMonthYear,
                "ExamMonthYearId": ExamMonthYearId,
                "SequenceId": SequenceId
            }
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/SetTwshExamMonthYear', paramObj);
            return promise;
        };

        this.getTwshStudentDetails = function (ApplicationNumber) {
            var paramObj = {
                "ApplicationNumber": ApplicationNumber,
                                
            }
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/getTwshStudentDetails', paramObj);
            return promise;
        };

        this.TwshUploadSign = function (sign, ApplicationNumber, RegistrationNumber) {
            var paramObj = {
                "sign": sign,
                "ApplicationNumber": ApplicationNumber,
                "RegistrationNumber": RegistrationNumber,
            }
            var promise = DataAccessService.postData('api/TwshStudentReg/TwshUploadSign', paramObj);
            return promise;
        };

        
        this.getTwshStudentDetailsForCertificate = function (RegistrationNo) {
            var paramObj = {
                "RegistrationNo": RegistrationNo,

            }
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/getTwshStudentDetailsForCertificate', paramObj);
            return promise;
        };

        this.GetExamMonthYear = function () {
            // var paramObj = { "ReqData": ReqData };SP_GET_Category
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/GetExamMonthYear');
            return promise;
        };



        this.GetTwshExamCenters = function () {
            // var paramObj = { "ReqData": ReqData };SP_GET_Category
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/GetTwshExamCenters');
            return promise;
        };

        this.GetExamCentersList = function () {
            // var paramObj = { "ReqData": ReqData };SP_GET_Category
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/GetExamCentersList');
            return promise;
        };


        this.GetExamMonthYearForTwshOdc = function () {
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/GetExamMonthYearForTwshOdc');
            return promise;
        };

        this.GetTwshPrinterOdcDownload = function (ExamMonthYear) {
            var paramObj = { "ExamMonthYear": ExamMonthYear };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetTwshPrinterOdcDownload', paramObj);
            return promise;
        };

        this.GetTwshPrinterNrDownload = function (ExamMonthYearId) {
            var paramObj = { "ExamMonthYearId": ExamMonthYearId };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetTwshPrinterNrDownload', paramObj);
            return promise;
        };

        this.generateTwshNrExcel = function (ExamMonthYearId) {
            var paramObj = { "ExamMonthYearId": ExamMonthYearId };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/generateTwshNrExcel', paramObj);
            return promise;
        };


        this.getExamDates = function (CourseId, GradeId) {
            var paramObj = { "CourseId": CourseId, "GradeId": GradeId };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetExaminationDates', paramObj);
            return promise;
        };

        this.EditInstituteData = function (Id) {
            var paramObj = { "Id": Id };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/EditInstituteData', paramObj);
            return promise;
        };


        this.Delete_Institute = function (Id) {
            var paramObj = { "Id": Id };
            var promise = DataAccessService.postData('api/TwshStudentReg/Delete_InstituteData', paramObj);
            return promise;
        };

        this.Delete_TimeSlot = function (Id) {
            var paramObj = { "Id": Id };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/Delete_TimeSlot', paramObj);
            return promise;
        };

        
        this.AddInstitute = function (paramObj) {
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/AddInstitute', paramObj);
            return promise;
        };


        this.UpdateInstitutionData = function (paramObj) {
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/UpdateInstitutionData', paramObj);
            return promise;
        };

        this.GetInstitutesList = function () {
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/GetInstitutesList');
            return promise;
        };
        
        this.GetTwshExamDatesBatches = function () {
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/GetTwshExamDatesBatches');
            return promise;
        };

        
        this.getExamTimeSlots = function () {
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/getExamTimeSlots');
            return promise;
        };

        this.GetAllCourses = function () {
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/GetAllCourses');
            return promise;
        };
        

        this.GetAllGrades = function () {
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/GetAllGrades');
            return promise;
        };

        

        this.GetInstitutesListExcel = function () {
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/GetInstitutesListExcel');
            return promise;
        };

        this.GetInstitutesListExcel = function () {
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/GetInstitutesListExcel');
            return promise;
        };

        this.getTwshCertificateApplicationReport = function (ExamMode, ExamMonthYearId, CbtfromData, CbttoData) {
            var paramObj = {
                "ExamMode": ExamMode, "ExamMonthYearId": ExamMonthYearId, "CbtfromData": CbtfromData, "CbttoData": CbttoData
            };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/getTwshCertificateApplicationReport', paramObj);
            return promise;
        };
        

        this.getBatches = function (ExamDateId, CourseId, GradeID) {
            var paramObj = { "ExamDateId": ExamDateId, "CourseId": CourseId, "GradeID": GradeID }
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetExaminationbatches', paramObj);
            return promise;
        };

        
        this.getExamCentersByMode = function (Mode) {
            var paramObj = { "Mode": Mode}
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/getExamCentersByMode', paramObj);
            return promise;
        };

        this.getExamCentersByModeExcel = function (Mode) {
            var paramObj = { "Mode": Mode }
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/getExamCentersByModeExcel', paramObj);
            return promise;
        };

        this.getExamTimeSlotsExcel = function () {
            
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/getExamTimeSlotsExcel');
            return promise;
        };
        this.SetTwshExamCenters = function (Id, ExaminationCenterCode, ExaminationCenterName, DistrictId, IsTw, IsSh, IsTwOnline, IsShOnline, GenderId, IsActive) { 
            var paramObj = {
                "Id": Id,
                "ExaminationCenterCode": ExaminationCenterCode,
                "ExaminationCenterName": ExaminationCenterName,
                "DistrictId": DistrictId,
                "IsTw": IsTw,
                "IsSh": IsSh,
                "IsTwOnline": IsTwOnline,
                "IsShOnline": IsShOnline,
                "GenderId": GenderId,
                "IsActive": IsActive
            }
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/SetTwshExamCenters', paramObj);
            return promise;
        };

        this.GetFeeDetails = function (ApplicationNo) {
            var paramObj = { "ApplicationNo": ApplicationNo }
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetFeeDetails', paramObj);
            return promise;
        };
        this.getlanguages = function (courseid) {
            var paramObj = { "CourseId": courseid };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/getLanguages', paramObj);
            return promise;
        };

        this.GetPreviousExamData = function (HallticketNo, GradeId) {
            var paramObj = { "HallticketNo": HallticketNo, "GradeId": GradeId };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetPreviousExamData', paramObj);
            return promise;
        };
        this.GetQualifiedExamData = function (HallticketNo, QualificationGradeId) {
            var paramObj = { "HallticketNo": HallticketNo, "QualificationGradeId": QualificationGradeId };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetQualifiedExamData', paramObj);
            return promise;
        };
        this.getGrades = function (courseid, language) {
            var paramObj = { "CourseId": courseid, "language": language };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetGradeList', paramObj);
            return promise;
        };

        //------Offline exam centers----------
        this.getExaminationCenters = function (UserId, DistrictId, CourseId, GradeId) {
            var paramObj = { "UserId": UserId, "DistrictId": DistrictId, "CourseId": CourseId, "GradeId": GradeId };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetExaminationCenters', paramObj);
            return promise;
        };
        //---------------online Examcenters---------------
        this.getonlineExaminationCenters = function (CourseId, DistrictId) {
            var paramObj = { "CoursesType": CourseId, "DistrictId": DistrictId };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/getonlineExamcentersAndDates', paramObj);
            return promise;
        };
        this.SubmitApplication = function (object) {
            var promise = DataAccessService.postData('api/TwshStudentReg/SubmitApplication', object);
            return promise;
        };

        this.UpdateTwshExamDates = function (ExamDate, ExamMonthYearId, CourseId,BatchNumber, BatchId, Id) {
            var object = {
                "ExamDate": ExamDate,
                "ExamMonthYearId": ExamMonthYearId,
                "CourseId": CourseId,
                "BatchNumber":BatchNumber,
                "BatchId": BatchId,
                "Id":Id

            }
            var promise = DataAccessService.postData('api/TwshStudentReg/UpdateTwshExamDates', object);
            return promise;
        };
        this.UpdateGradewiseExamCenters = function (paramObj) {
            var promise = DataAccessService.postData('api/TwshStudentReg/UpdateGradewiseExamCenters', paramObj);
            return promise;
        };
        
        this.AddGradewiseExamCenters = function (paramObj) {
            var promise = DataAccessService.postData('api/TwshStudentReg/AddGradewiseExamCenters', paramObj);
            return promise;
        };

        this.SetTwshExamDates = function (object) {
            var promise = DataAccessService.postData('api/TwshStudentReg/SetTwshExamDates', object);
            return promise;
        };

        this.UpdateTwshPhotoData = function (object) {
            var promise = DataAccessService.postData('api/TwshStudentReg/UpdateTwshPhotoData', object);
            return promise;
        };

        this.SetExamSession = function (ExamMonthYearId, TwDate1, TwDate2, ShDate1, ShDate2) {
            var object = { "ExamMonthYearId": ExamMonthYearId, "TwDate1": TwDate1, "TwDate2": TwDate2, "ShDate1": ShDate1, "ShDate2": ShDate2 }
            console.log(object)
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/SetExamSession', object);
            return promise;
        }

        this.getSSCDetails = function (object) {
            var promise = DataAccessService.postData('api/TwshStudentReg/GetSSCDetails', object);
            return promise;
        };
        this.getDistrictInstitutes = function (DistrictId, UserTypeId) {
            var paramObj = { "DistrictId": DistrictId, "UserTypeId": UserTypeId };
            console.log(paramObj)
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetDistrictInstitutes', paramObj);
            return promise;
        };
        this.validateOldPassword = function (UserId) {
            var paramObj = { "UserId": UserId };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetOldPassword', paramObj);
            return promise;
        };


        this.GetCertificateData = function (Result, GradeId, UserTypeId, RegNo) {
            var paramObj = { "Result": Result, "GradeId": GradeId, "UserTypeId": UserTypeId, "RegNo": RegNo };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetCertificateData', paramObj);
            return promise;
        };

        this.GetTwshCertificateData = function (RegNo) {
            var paramObj = { "RegNo": RegNo };
            console.log(paramObj)
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetTwshCertificateData', paramObj);
            return promise;
        };

        this.getQualifiedCount = function (userType) {
            var paramObj = { "userType": userType };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/getQualifiedCount', paramObj);
            return promise;
        };

        this.getTwshApprovelList = function (userType) {
            var paramObj = { "userType": userType };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/getTwshApprovelList', paramObj);
            return promise;
        };
        this.getTwshAuthorizationlList = function (ExamMode, ExamMonthYearId, CbtfromData, CbttoData) {
            var paramObj = {
                "ExamMode": ExamMode, "ExamMonthYearId": ExamMonthYearId, "CbtfromData": CbtfromData,"CbttoData": CbttoData
            };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/getTwshAuthorizationlList', paramObj);
            return promise;
        };

        this.getTwshAuthorizationlListExcel = function (ExamMode, ExamMonthYearId, CbtfromData, CbttoData) {
            var paramObj = {
                "ExamMode": ExamMode, "ExamMonthYearId": ExamMonthYearId, "CbtfromData": CbtfromData, "CbttoData": CbttoData
            };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/getTwshAuthorizationlListExcel', paramObj);
            return promise;
        };

        this.UpdateCertificateData = function (RegNo) {
            var paramObj = { "RegNo": RegNo };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/UpdateCertificateData', paramObj);
            return promise;
        };

        this.getQualifiedList = function (Result, Gradeid) {
            var paramObj = { "Result": Result, "Gradeid": Gradeid };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/getQualifiedList', paramObj);
            return promise;
        };

        this.getTwshAuthorizationListDetails = function (ExamMode, collegecode, dataTypeId, ExamMonthYearId,CbtfromData, CbttoData) {
            var paramObj = {
                "ExamMode": ExamMode, "collegecode": collegecode, "dataTypeId": dataTypeId, "ExamMonthYearId": ExamMonthYearId,
                "CbtfromData": CbtfromData, "CbttoData": CbttoData
            };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/getTwshAuthorizationListDetails', paramObj);
            return promise;
        };

    
        this.getTwshApproveListDetails = function (GradeId, datatype, userType) {
            var paramObj = { "GradeId": GradeId, "datatype": datatype, "userType": userType };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/getTwshApproveListDetails', paramObj);
            return promise;
        };

        this.TwshSetApproveStatus = function (RegistrationNo, userType, approvestatus) {
            var paramObj = {
                "RegistrationNo": RegistrationNo, "userType": userType, "approvestatus": approvestatus
            }
            //console.log(paramObj)
            var promise = DataAccessService.postData('api/TwshStudentReg/TwshSetApproveStatus', paramObj);
            return promise;
        };

        this.UpdateTwshSmsStatus = function (RegNo) {
            var paramObject = { "RegNo": RegNo };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/UpdateTwshSmsStatus', paramObject);
            return promise;
        }

        this.TwshSetApproveStatusReject = function (RegnoJSON, userType, approvestatus, remarks) {
            var paramObj = {
                "RegnoJSON": RegnoJSON, "userType": userType, "approvestatus": approvestatus,
                "Remarks": remarks
            }
            var promise = DataAccessService.postData('api/TwshStudentReg/TwshSetApproveStatusReject', paramObj);
            return promise;
        };


        this.getUserTypes = function () {
            var promise = DataAccessService.getDataAll('api/TwshStudentReg/GetUserTypes');
            return promise;
        };



        this.changeUserPassword = function (UserId, UserPassword) {
            var paramObj = { "UserId": UserId, "UserPassword": UserPassword };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/ChangePassword', paramObj);
            return promise;
        };
        this.resetUserPassword = function (UserName, UserPassword) {
            var paramObj = { "UserName": UserName, "UserPassword": UserPassword };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/ResetPassword', paramObj);
            return promise;
        };

        this.getModules = function (UserTypeId) {
            var paramObj = { "UserTypeId": UserTypeId };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetModules', paramObj);
            return promise;
        };

        this.getApplicationData = function (ApplicationNumber, DOB) {
            var paramObj = { "ApplicationNumber": ApplicationNumber, "DOB": DOB };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetApplicationDetails', paramObj);
            return promise;
        };
        this.getDetailsByMobileDetails = function (PhoneNumber, DOB) {
            var paramObj = { "PhoneNumber": PhoneNumber, "DOB": DOB };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetDetailsByMobile', paramObj);
            return promise;
        };


        this.getInstituteReports = function (UserId) {
            var paramObj = { "UserId": UserId };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetInstituteReports', paramObj);
            return promise;
        };
        this.getGradewiseReport = function (UserId, GradeId) {
            var paramObj = { "UserId": UserId, "GradeId": GradeId };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetGradeWiseCandidateDetails', paramObj);
            return promise;
        };

        this.getFeeNotpaidList = function (UserId, GradeId) {
            var paramObj = { "UserId": UserId, "GradeId": GradeId };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetFeeNotpaidList', paramObj);
            return promise;
        };
        this.getApprovedList = function (UserId, CourseId, GradeId, LanguageId, ExamBatch) {

            var paramObj = { "UserId": UserId, "CourseId": CourseId, "GradeId": GradeId, "LanguageId": LanguageId, "ExamBatch": ExamBatch };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetApprovedList', paramObj);
            return promise;
        };

        this.getExamCenterApplied = function (UserId) {
            var paramObj = { "UserId": UserId };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetExamCenterAppliedStudents', paramObj);
            return promise;
        };

        this.getNeedApproveDetails = function (Id) {
            var paramObj = { "Id": Id };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetNeedToApproveDetails', paramObj);
            return promise;
        };

        this.approveDetails = function (Id, examDate) {
            var paramObj = { "Id": Id, "examDate": examDate };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/ApproveDetails', paramObj);
            return promise;
        };

        this.RescheduleCbtExamDetails = function (Id, examDate) {
            var paramObj = { "Id": Id, "examDate": examDate };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/RescheduleCbtExamDetails', paramObj);
            return promise;
        };

        this.AbsentExam = function (Id) {
            var paramObj = { "Id": Id };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/AbsentExam', paramObj);
            return promise;
        };

        this.SendAadhaarOtp = function (AadhaarNo) {
            var paramObj = { "AadhaarNo": AadhaarNo };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetOtpAadhaarKyc', paramObj);
            return promise;
        };

        this.VerifyAadhaarOtp = function (AadhaarNo, AadhaarOtp, txnId) {
            var paramObj = { "AadhaarNumber": AadhaarNo, "Otp": AadhaarOtp, "TxnId": txnId };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/DoKyc', paramObj);
            return promise;
        };


        this.SendStudentDetailsASSms = function (Message, CellNo) {
            // var paramobj = { "Message": Message, "CellNo": CellNo };
            var Urlstring = "?User=sbtetts&Passwd=sbtet@1972&Sid=SBTETS&Mobilenumber=91" + CellNo + "&Message=" + Message + "&Mtype=N&DR`=Y";
            var promise = DataAccessService.getDataWithPara('http://api.smscountry.com/SMSCwebservice_bulk.aspx' + Urlstring, "");
            return promise
        };

        this.getCbtStudents = function (UserId, FromDate,ToDate) {
            var paramObj = { "UserId": UserId, "FromDate": FromDate.toString(), "ToDate": ToDate.toString() };
            var promise = DataAccessService.postData('api/TwshStudentReg/GetCbtStudents', paramObj);
            return promise;
        };
        this.getExamStartToken = function (ApplicationNumber) {
            var paramObj = { "ApplicationNumber": ApplicationNumber };
            var promise = DataAccessService.getDataWithPara('api/TwshStudentReg/GetExamStartToken', paramObj);
            return promise;
        };
    });
});