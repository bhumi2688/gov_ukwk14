$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/VisaConfirmation.feature");
formatter.feature({
  "line": 1,
  "name": "Visa Confirmation Test",
  "description": "",
  "id": "visa-confirmation-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11876490800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "an Australian Coming to Uk For Tourism",
  "description": "",
  "id": "visa-confirmation-test;an-australian-coming-to-uk-for-tourism",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User click on start button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User select a Nationality Australia",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User select Tourism",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should verify result \"You will not need a visa to come to the UK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AusVisaSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 276347400,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.userClickOnAcceptCookies()"
});
formatter.result({
  "duration": 268409000,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.userClickOnStartButton()"
});
formatter.result({
  "duration": 1005413400,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.user_select_a_Nationality_Australia()"
});
formatter.result({
  "duration": 105226000,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 894585700,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.user_select_Tourism()"
});
formatter.result({
  "duration": 136532500,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 874099200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You will not need a visa to come to the UK",
      "offset": 27
    }
  ],
  "location": "AusVisaSteps.userShouldVerifyResult(String)"
});
formatter.result({
  "duration": 80406100,
  "status": "passed"
});
formatter.after({
  "duration": 1705507500,
  "status": "passed"
});
formatter.before({
  "duration": 3184044900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "a Chilean coming to Uk For Work and Plans On Staying For Longer Than Six Months",
  "description": "",
  "id": "visa-confirmation-test;a-chilean-coming-to-uk-for-work-and-plans-on-staying-for-longer-than-six-months",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User click on accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User click on start button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User select nationality Chile",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Work,academic visit or business",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User select intendent to stay for longer than 6 months",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User select having plan to work for Health and Care professional",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User should be able to verify text \"You need a visa to work in health and care\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AusVisaSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 59700,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.userClickOnAcceptCookies()"
});
formatter.result({
  "duration": 164948400,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.userClickOnStartButton()"
});
formatter.result({
  "duration": 1162692900,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.userSelectNationalityChile()"
});
formatter.result({
  "duration": 83266300,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 776878800,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.userClickOnWorkAcademicVisitOrBusiness()"
});
formatter.result({
  "duration": 88100900,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 887064600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 46
    }
  ],
  "location": "AusVisaSteps.userSelectIntendentToStayForLongerThanMonths(int)"
});
formatter.result({
  "duration": 136844100,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 747709400,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.userSelectHavingPlanToWorkForHealthAndCareProfessional()"
});
formatter.result({
  "duration": 154870700,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 927691700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You need a visa to work in health and care",
      "offset": 36
    }
  ],
  "location": "AusVisaSteps.userShouldBeAbleToVerifyText(String)"
});
formatter.result({
  "duration": 53578100,
  "status": "passed"
});
formatter.after({
  "duration": 898473100,
  "status": "passed"
});
formatter.before({
  "duration": 3167420100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "a Columbian National Coming To UK to join A Partner For a Long Stay",
  "description": "",
  "id": "visa-confirmation-test;a-columbian-national-coming-to-uk-to-join-a-partner-for-a-long-stay",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User click on accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User click on start button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User select natinoality Colombia",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User select reason join partner or family for a long stay",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User to verify message \"You may need a visa\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AusVisaSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 64700,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.userClickOnAcceptCookies()"
});
formatter.result({
  "duration": 234251100,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.userClickOnStartButton()"
});
formatter.result({
  "duration": 826533600,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.userSelectNatinoalityColombia()"
});
formatter.result({
  "duration": 84621800,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 572217100,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.userSelectReasonJoinPartnerOrFamilyForALongStay()"
});
formatter.result({
  "duration": 108833400,
  "status": "passed"
});
formatter.match({
  "location": "AusVisaSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 566858900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You may need a visa",
      "offset": 24
    }
  ],
  "location": "AusVisaSteps.userToVerifyMessage(String)"
});
formatter.result({
  "duration": 54034800,
  "status": "passed"
});
formatter.after({
  "duration": 920683400,
  "status": "passed"
});
});