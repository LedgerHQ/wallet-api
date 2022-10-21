/* eslint-disable */
import { validateManifest } from "../src/validator";

import * as fs from "fs";
import path from "path";

const manifest = JSON.parse(
  fs.readFileSync(path.join(__dirname, "manifests/schema.test.json"), "utf-8")
);

test("Manifest base is OK", () => {
  expect(validateManifest(manifest)).toBe(true);
});

let testManifest = Object.assign({}, manifest);

beforeEach(() => {
  testManifest = Object.assign({}, manifest);
});

describe("Properties", () => {
  test("additional property", () => {
    testManifest.test = "test";
    expect(validateManifest(testManifest)).toBe(false);
  });
  test("missing require property", () => {
    delete testManifest.id;
    expect(validateManifest(testManifest)).toBe(false);
  });
});

describe("id property", () => {
  test("id is lowercase", () => {
    testManifest.id = "test";
    expect(validateManifest(testManifest)).toBe(true);
  });
  test("id contain non-alphabetic chars", () => {
    testManifest.id = "123";
    expect(validateManifest(testManifest)).toBe(false);
  });
});

describe("private property", () => {
  test("private is boolean ", () => {
    testManifest.private = false;
    expect(validateManifest(testManifest)).toBe(true);
  });
  test("private property is string", () => {
    testManifest.private = "123";
    expect(validateManifest(testManifest)).toBe(false);
  });
});

describe("name property", () => {
  test("private is alphabetic string ", () => {
    testManifest.name = "Test";
    expect(validateManifest(testManifest)).toBe(true);
  });
  test("private property is non only alphabetic string", () => {
    testManifest.name = "123adeTY";
    expect(validateManifest(testManifest)).toBe(false);
  });
});

describe("url property", () => {
  test("url is an URL", () => {
    testManifest.url = "www.google.fr";
    expect(validateManifest(testManifest)).toBe(true);
  });
  test("url is not an URL", () => {
    testManifest.url = "123adeTY";
    expect(validateManifest(testManifest)).toBe(false);
  });
});

describe("homepageUrl property", () => {
  test("homepageUrl is an URL", () => {
    testManifest.homepageUrl = "www.google.fr";
    expect(validateManifest(testManifest)).toBe(true);
  });
  test("homepageUrl is not homepageUrl URL", () => {
    testManifest.homepageUrl = "123adeTY";
    expect(validateManifest(testManifest)).toBe(false);
  });
});

describe("supportUrl property", () => {
  test("supportUrl is an URL", () => {
    testManifest.supportUrl = "www.google.fr";
    expect(validateManifest(testManifest)).toBe(true);
  });
  test("supportUrl is not homepageUrl URL", () => {
    testManifest.supportUrl = "123adeTY";
    expect(validateManifest(testManifest)).toBe(false);
  });
});

describe("icon property", () => {
  test("icon is an IMG URL", () => {
    testManifest.icon = "google.png";
    expect(validateManifest(testManifest)).toBe(true);
  });
  test("icon is not homepageUrl URL", () => {
    testManifest.icon = "www.google.fr";
    expect(validateManifest(testManifest)).toBe(false);
  });
});

describe("params property", () => {
  test("params is incorrect", () => {
    testManifest.params = {};
    expect(validateManifest(testManifest)).toBe(false);
  });
  test("params is correct", () => {
    testManifest.params = {
      dappUrl: "https://earn.alkemi.network/dashboard?embed=true",
      nanoApp: "Alkemi",
      dappName: "Alkemi",
      networks: [
        {
          currency: "ethereum",
          chainID: "1",
          nodeURL:
            "wss://eth-mainnet.ws.alchemyapi.io/v2/0fyudoTG94QWC0tEtfJViM9v2ZXJuij2",
        },
      ],
    };
    expect(validateManifest(testManifest)).toBe(true);
  });

  describe("networks property", () => {
    test("params networks is incorrect", () => {
      testManifest.params.networks[0] = {};
      expect(validateManifest(testManifest)).toBe(false);
    });
    test("params networks is correct", () => {
      testManifest.params.networks[0] = {
        currency: "ethereum",
        chainID: "1",
        nodeURL: "test.test",
      };
      expect(validateManifest(testManifest)).toBe(true);
    });

    describe("currency property", () => {
      test("params networks currency is incorrect", () => {
        testManifest.params.networks[0].currency = "test";
        expect(validateManifest(testManifest)).toBe(false);
      });
      test("params networks currency is correct", () => {
        testManifest.params.networks[0].currency = "ethereum";
        expect(validateManifest(testManifest)).toBe(true);
      });
    });

    describe("chainID property", () => {
      test("params networks chainID is incorrect", () => {
        testManifest.params.networks[0].chainID = 1;
        expect(validateManifest(testManifest)).toBe(false);
      });
      test("params networks chainID is correct", () => {
        testManifest.params.networks[0].chainID = "1";
        expect(validateManifest(testManifest)).toBe(true);
      });
    });

    describe("nodeURL property", () => {
      test("params networks nodeURL is incorrect", () => {
        testManifest.params.networks[0].nodeURL = "test";
        expect(validateManifest(testManifest)).toBe(false);
      });
      test("params networks nodeURL is correct", () => {
        testManifest.params.networks[0].nodeURL = "test.test";
        expect(validateManifest(testManifest)).toBe(true);
      });
    });
  });
});

describe("plateform property", () => {
  test("plateform is part of enum", () => {
    testManifest.platform = "desktop";
    expect(validateManifest(testManifest)).toBe(true);
  });
  test("plateform is not part of the enum", () => {
    testManifest.platform = "test";
    expect(validateManifest(testManifest)).toBe(false);
  });
});

describe("plateform property", () => {
  test("plateform is part of enum", () => {
    testManifest.platform = "desktop";
    expect(validateManifest(testManifest)).toBe(true);
  });
  test("plateform is not part of the enum", () => {
    testManifest.platform = "test";
    expect(validateManifest(testManifest)).toBe(false);
  });
});

describe("categories property", () => {
  test("categories is an array of enum", () => {
    testManifest.categories = ["lend", "yield"];
    expect(validateManifest(testManifest)).toBe(true);
  });
  test("categories is not array where values are not completly part of enum", () => {
    testManifest.categories = ["lend", "test"];
    expect(validateManifest(testManifest)).toBe(false);
  });
});

describe("content property", () => {
  test("content have i18n properties ", () => {
    testManifest.content = {
      shortDescription: {
        en: "yes",
        fr: "oui",
      },
      description: {
        en: "yes",
        fr: "oui",
      },
    };
    expect(validateManifest(testManifest)).toBe(true);
  });
  test("content have wring i18n properties ", () => {
    testManifest.content = {
      shortDescription: {
        EN: "yes",
        a8: "oui",
      },
      description: {
        e3: "yes",
        Er: "oui",
      },
    };
    expect(validateManifest(testManifest)).toBe(false);
  });
});
