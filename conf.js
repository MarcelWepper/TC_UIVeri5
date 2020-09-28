exports.config = {
  profile: "integration",
  baseUrl: "URL",
  auth: {
    "sapcloud-form": {
      user: "XXXX",
      pass: "XXXX",
      userFieldSelector: "input[name='sap-user']",
      passFieldSelector: "input[name='sap-password']",
      logonButtonSelector: "button[title='Anmelden']",
    },
  },
  specs: ["./*.spec.js"],
};
