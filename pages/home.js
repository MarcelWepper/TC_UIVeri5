module.exports = createPageObjects({
    Home: {
        actions: {


        },
        assertions: {
          iShouldSeeLaunchpad: function () {
                var welcome = element(by.control({
                  id:"shellAppTitle"
                }));
                expect(welcome.asControl().getProperty("text")).toContain("Startseite");
            },

        }
    }
  });