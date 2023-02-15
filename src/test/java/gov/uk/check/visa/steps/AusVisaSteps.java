package gov.uk.check.visa.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gov.uk.check.visa.pages.ColombiaPage;
import gov.uk.check.visa.pages.StartPage;
import gov.uk.check.visa.pages.WorkTypePage;
import org.testng.Assert;

public class AusVisaSteps {
    @Given("^User is on home page$")
    public void userIsOnHomePage() {

    }

    @When("^User click on accept cookies$")
    public void userClickOnAcceptCookies() {
        new StartPage().clickOnAcceptCookies();
    }

    @And("^User click on start button$")
    public void userClickOnStartButton() {
        new StartPage().clickOnHomePageStartButton();
    }

    @And("^User select a Nationality Australia$")
    public void user_select_a_Nationality_Australia() {
        new StartPage().clickOnNationalityAu();
    }

    @And("^User click on Continue Button$")
    public void userClickOnContinueButton() {
        new StartPage().clickOnContinueButton();
    }

    @And("^User select Tourism$")
    public void user_select_Tourism() {
        new StartPage().clickOnTourism();
    }

    @Then("^User should verify result \"([^\"]*)\"$")
    public void userShouldVerifyResult(String mess) {
        Assert.assertEquals(mess, new StartPage().verifyIFYouNeedVisaForUk(mess));

    }


    @And("^User select nationality Chile$")
    public void userSelectNationalityChile() {
        new WorkTypePage().clickOnNationalityChile();
    }

    @And("^User click on Work,academic visit or business$")
    public void userClickOnWorkAcademicVisitOrBusiness() {
        new WorkTypePage().clickOnWorkAcademicVisa();
    }

    @And("^User select intendent to stay for longer than (\\d+) months$")
    public void userSelectIntendentToStayForLongerThanMonths(int arg0) {
        new WorkTypePage().clickOnlongerThanSixMonths();
    }

    @And("^User select having plan to work for Health and Care professional$")
    public void userSelectHavingPlanToWorkForHealthAndCareProfessional() {
        new WorkTypePage().clickOnWorkJobType();
    }


    @Then("^User should be able to verify text \"([^\"]*)\"$")
    public void userShouldBeAbleToVerifyText(String message) {
        Assert.assertEquals(message, new WorkTypePage().verifyHealthCareText(message));

    }

    @And("^User select natinoality Colombia$")
    public void userSelectNatinoalityColombia() {
        new ColombiaPage().clickOnNationalityColum();
    }

    @And("^User select reason join partner or family for a long stay$")
    public void userSelectReasonJoinPartnerOrFamilyForALongStay() {
        new ColombiaPage().clickOnJoinPartnerOrFamily();
    }

    @Then("^User to verify message \"([^\"]*)\"$")
    public void userToVerifyMessage(String colmess) {
        Assert.assertEquals(colmess, new ColombiaPage().verifyColomibaTexts(colmess));


    }
}
