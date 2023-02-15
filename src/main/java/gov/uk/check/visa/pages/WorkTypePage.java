package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class WorkTypePage extends Utility {
    private static final Logger log = LogManager.getLogger(WorkTypePage.class.getName());

    public WorkTypePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//select[@id='response']/option[45]")
    WebElement nationalityChile;

    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-grid-column-two-thirds']/form/div/div/fieldset/div/div[2]")
    WebElement selectWorkAcademic;

    @CacheLookup
    @FindBy(xpath = "//div[@class='gem-c-radio govuk-radios__item']//input[@id='response-1']")
    WebElement intendentStay;

    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-form-group govuk-!-margin-bottom-6']/fieldset/div/div[1]/input")
    WebElement planningWorkJobType;

    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-!-margin-bottom-6']/h2")
    WebElement verifyHealthCare;

    public void clickOnNationalityChile() {
        clickOnElement(nationalityChile);
    }

    public void clickOnWorkAcademicVisa() {
        clickOnElement(selectWorkAcademic);
    }

    public void clickOnlongerThanSixMonths() {
        clickOnElement(intendentStay);
    }

    public void clickOnWorkJobType() {
        clickOnElement(planningWorkJobType);
    }

    public String verifyHealthCareText(String texts) {
        return getTextFromElement(verifyHealthCare);

    }


}
