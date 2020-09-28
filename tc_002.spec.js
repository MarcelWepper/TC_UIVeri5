require("./pages/home");

describe("tc_002", function () {
  /*
    it("Should see the home screen", function () {
        Then.onTheHomePage.iShouldSeeLaunchpad();
    });

    it("Load Invoice", () => {
        browser.get("URL);
        // the application is loaded and now we can interact with the page
    });
    */

  // Upper code is not needed as conf directly goes into Cash-Flow Analysis

  it("Enter Buchungskreis", () => {
    var Buchungskreis = element(
      by.control({
        controlType: "sap.m.MultiInput",
        id:
          "application-CashFlow-analyzeFlow-component---worklist--idsmartFilterBarItem-filterItemControl_Basic-CompanyCode",
        interaction: "focus",
      })
    );
    Buchungskreis.sendKeys("1010");
  });

  it("Enter Date", () => {
    var DatePicker = element(
      by.control({
        controlType: "sap.m.DatePicker",
        id:
          "application-CashFlow-analyzeFlow-component---worklist--idsmartFilterBarItem-filterItemControl_Basic-KeyDate",
        interaction: "focus",
      })
    );
    DatePicker.clear();
    DatePicker.sendKeys("27.07.2020");
  });

  it("Confirm Date", () => {
    var DatePicker = element(
      by.control({
        controlType: "sap.m.DatePicker",
        id:
          "application-CashFlow-analyzeFlow-component---worklist--idsmartFilterBarItem-filterItemControl_Basic-KeyDate",
        interaction: "focus",
      })
    );
    DatePicker.sendKeys(protractor.Key.ENTER);
  });

  it("Check Table", () => {
    var TableElement = element(
      by.control({
        controlType: "sap.ui.comp.navpopover.SmartLink",
        id:
          "application-CashFlow-analyzeFlow-component---worklist--idBCYCLE0-__clone5",
      })
    );
    expect(TableElement.asControl().getProperty("text")).toBe(
      "-9.907.610,00 EUR"
    );
  });
});
