package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.xmlbeans.impl.xb.xsdschema.Public;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class StartPage extends Utility {
    private static final Logger log = LogManager.getLogger(StartPage.class.getName());

    public StartPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-cookie-banner js-banner-wrapper']/div/div[2]/button[1]")
    WebElement acceptCookies;
    @CacheLookup
    @FindBy(xpath = "//div[@class='gem-c-feedback__prompt gem-c-feedback__js-show js-prompt']/div/div[1]/div/ul/li[3]/button")
    WebElement pageUsefulBar;
    @CacheLookup
    @FindBy(xpath = "//a[@class='gem-c-button govuk-button govuk-button--start']")
    WebElement homePageStartNowButton;
    @CacheLookup
    @FindBy(xpath = "//select[@id='response']/option[11]")
    WebElement nationalityAus;
    @CacheLookup
    @FindBy(xpath = "//button[@class='gem-c-button govuk-button gem-c-button--bottom-margin']")
    WebElement continueButton;
    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-grid-column-two-thirds']/form/div/div/fieldset/div/div[1]/input")
    WebElement selectToursm;
    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-!-margin-bottom-6']/h2[text()='You will not need a visa to come to the UK']")
    WebElement verifyouneedvisa;

    public void clickOnAcceptCookies() {
        clickOnElement(acceptCookies);
    }

    public void clickOnPageUsefulTab() {
        clickOnElement(pageUsefulBar);
    }

    public void clickOnHomePageStartButton() {
        clickOnElement(homePageStartNowButton);
    }

    public void clickOnNationalityAu() {
        clickOnElement(nationalityAus);
    }

    public void clickOnContinueButton() {
        clickOnElement(continueButton);
    }

    public void clickOnTourism() {
        clickOnElement(selectToursm);
    }

    public String verifyIFYouNeedVisaForUk(String tex) {
        return getTextFromElement(verifyouneedvisa);
    }


}
