import { cryptocurrenciesById } from "@ledgerhq/cryptoassets";

const CURRENCIES_ID = Object.keys(cryptocurrenciesById);

const networks = {
  type: "array",
  minItems: 1,
  uniqueItems: true,
  items: {
    type: "object",
    properties: {
      currency: {
        type: "string",
        examples: CURRENCIES_ID,
      },
      chainID: {
        type: "number",
      },
      nodeURL: {
        type: "string",
        format: "uri",
      },
    },
    required: ["currency", "chainID", "nodeURL"],
    additionalProperties: {
      not: true,
      errorMessage:
        "extra property are not allowed, please remove the property ${0#}",
    },
  },
};

export const schema = {
  $id: "manifest.schema.json",
  title: "Manifest schema for Wallet App",
  type: "object",
  properties: {
    $schema: {
      type: "string",
    },
    id: {
      type: "string",
      minLength: 3,
      maxLength: 50,
      pattern: "^[a-zA-Z0-9_][a-zA-Z0-9_-]*$",
      errorMessage: {
        pattern:
          "${0#} must start with a letter or digit and can only contain letters, digits, or hyphens.",
      },
    },
    author: {
      type: "string",
    },
    branch: {
      type: "string",
    },
    name: {
      type: "string",
      minLength: 1,
      maxLength: 50,
    },
    url: {
      type: "string",
      format: "uri",
    },
    homepageUrl: {
      type: "string",
      format: "uri",
    },
    supportUrl: {
      type: "string",
      format: "uri",
    },
    icon: {
      type: "string",
      format: "uri",
    },
    private: {
      type: "boolean",
    },
    platforms: {
      type: "array",
      uniqueItems: true,
      minItems: 1,
      items: {
        type: "string",
        enum: ["desktop", "ios", "android"],
      },
    },
    apiVersion: {
      type: "string",
    },
    manifestVersion: {
      type: "string",
      enum: ["2"],
    },
    categories: {
      type: "array",
      uniqueItems: true,
      minItems: 1,
      items: {
        type: "string",
        errorMessage: {},
      },
    },
    currencies: {
      oneOf: [
        {
          type: "array",
          uniqueItems: true,
          items: {
            type: "string",
            examples: CURRENCIES_ID,
          },
        },
        {
          type: "string",
          const: "*",
        },
      ],
      errorMessage: {
        oneOf:
          'Must be type of array with a least 1 value or a string equal to "*"',
      },
    },
    highlight: {
      type: "boolean",
    },
    overrides: {
      type: "array",
      items: {
        type: "object",
      },
    },
    dapp: {
      type: "object",
      properties: {
        nanoApp: {
          minLength: 1,
          maxLength: 50,
          type: "string",
        },
        networks,
        provider: {
          const: "evm",
        },
      },
      required: ["nanoApp", "networks", "provider"],
    },
    content: {
      type: "object",
      properties: {
        cta: {
          type: "object",
          properties: {
            en: {
              type: "string",
              maxLength: 40,
            },
          },
        },
        subtitle: {
          type: "object",
          properties: {
            en: {
              type: "string",
            },
          },
        },
        shortDescription: {
          type: "object",
          properties: {
            en: {
              type: "string",
            },
          },
        },
        description: {
          type: "object",
          properties: {
            en: {
              type: "string",
            },
          },
        },
      },
      required: ["shortDescription", "description"],
      additionalProperties: {
        not: true,
        errorMessage:
          "extra property are not allowed, please remove the property ${0#}",
      },
    },
    permissions: {
      type: "array",
      minItems: 0,
      items: {
        type: "string",
      },
    },
    domains: {
      type: "array",
      minItems: 1,
      items: {
        type: "string",
        errorMessage: {},
      },
    },
    visibility: {
      type: "string",
      enum: ["complete", "searchable", "deep"],
    },
    params: {
      type: "object",
    },
  },
  if: {
    properties: {
      url: { type: "string", pattern: ".*dapp-browser.apps.ledger.com.*" },
    },
  },
  then: {
    properties: {
      params: {
        type: "object",
        properties: {
          dappUrl: {
            type: "string",
            format: "uri",
          },
          nanoApp: {
            minLength: 1,
            maxLength: 50,
            type: "string",
          },
          dappName: {
            minLength: 1,
            maxLength: 50,
            type: "string",
          },
          networks,
        },
        required: ["dappUrl", "nanoApp", "dappName", "networks"],
        additionalProperties: {
          not: true,
          errorMessage:
            "extra property are not allowed, please remove the property ${0#}",
        },
      },
    },
    required: ["params"],
  },
  required: [
    "id",
    "name",
    "url",
    "platforms",
    "apiVersion",
    "manifestVersion",
    "categories",
    "currencies",
    "content",
    "permissions",
    "homepageUrl",
    "branch",
    "domains",
    "visibility",
  ],
  additionalProperties: {
    not: true,
    errorMessage:
      "extra property are not allowed, please remove the property ${0#}",
  },
};
