package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ColombiaPage extends Utility {
    private static final Logger log = LogManager.getLogger(ColombiaPage.class.getName());

    public ColombiaPage() {
        PageFactory.initElements(driver, this);

    }

    @CacheLookup
    @FindBy(xpath = "//select[@id='response']/option[47]")
    WebElement nationalityColumbia;
    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-grid-column-two-thirds']/form/div/div/fieldset/div/div[5]/input")
    WebElement joinPartner;
    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-!-margin-bottom-6']/h2")
    WebElement colombiaVerifyMessage;


    public void clickOnNationalityColum() {
        clickOnElement(nationalityColumbia);
    }

    public void clickOnJoinPartnerOrFamily() {
        clickOnElement(joinPartner);
    }

    public String verifyColomibaTexts(String res) {
        return getTextFromElement(colombiaVerifyMessage);
    }
}