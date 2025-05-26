import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import "./style.css";

type Option = {
  label: string;
  value: object;
};

type Group = {
  name: string;
  options: Option[];
};

const data: Group[] = [
  {
    name: "account",
    options: [
      {
        label: "request",
        value: {
          method: "account.request",
          params: {
            currencyIds: ["ethereum", "bitcoin"],
            drawerConfiguration: {
              assets: {
                filter: "topNetworks",
                leftElement: "apy",
                rightElement: "marketTrend",
              },
              networks: {
                leftElement: "numberOfAccountsAndApy",
                rightElement: "balance",
              },
            },
          },
        },
      },
      {
        label: "receive",
        value: {
          method: "account.receive",
          params: {
            accountId: "",
          },
        },
      },
      {
        label: "list",
        value: {
          method: "account.list",
          params: {
            currencyIds: ["ethereum", "bitcoin"],
          },
        },
      },
    ],
  },
  {
    name: "currency",
    options: [
      {
        label: "list",
        value: {
          method: "currency.list",
          params: {},
        },
      },
    ],
  },
  {
    name: "message",
    options: [
      {
        label: "sign",
        value: {
          method: "message.sign",
          params: {
            accountId: "",
            hexMessage: "",
          },
        },
      },
    ],
  },
  {
    name: "transaction",
    options: [
      {
        label: "sign",
        value: {
          method: "transaction.sign",
          params: {
            accountId: "",
            rawTransaction: {
              amount: "",
              recipient: "",
            },
            options: {},
          },
        },
      },
      {
        label: "signAndBroadcast",
        value: {
          method: "transaction.signAndBroadcast",
          params: {
            accountId: "",
            rawTransaction: {
              amount: "",
              recipient: "",
            },
            options: {},
          },
        },
      },
    ],
  },
  {
    name: "device",
    options: [
      {
        label: "close",
        value: {
          method: "device.close",
          params: {
            transportId: "",
          },
        },
      },
      {
        label: "exchange",
        value: {
          method: "device.exchange",
          params: {
            apduHex: "",
            transportId: "",
          },
        },
      },
      {
        label: "transport",
        value: {
          method: "device.transport",
          params: {
            appName: "",
            appVersionRange: "",
            firmwareVersionRange: "",
            seeded: true,
            devices: ["blue", "nanoS", "nanoSP", "nanoX", "stax"],
          },
        },
      },
      {
        label: "select",
        value: {
          method: "device.select",
          params: {
            appName: "",
            appVersionRange: "",
            firmwareVersionRange: "",
            seeded: true,
            devices: ["blue", "nanoS", "nanoSP", "nanoX", "stax"],
          },
        },
      },
      {
        label: "transport",
        value: {
          method: "device.open",
          params: {
            deviceId: "",
          },
        },
      },
    ],
  },
  {
    name: "storage",
    options: [
      {
        label: "set",
        value: {
          method: "storage.set",
          params: {
            key: "",
            value: "",
            storeId: "",
          },
        },
      },
      {
        label: "get",
        value: {
          method: "storage.get",
          params: {
            key: "",
            storeId: "",
          },
        },
      },
    ],
  },
  {
    name: "bitcoin",
    options: [
      {
        label: "getAddress",
        value: {
          method: "bitcoin.getAddress",
          params: {
            accountId: "",
            derivationPath: "",
          },
        },
      },
      {
        label: "getPublicKey",
        value: {
          method: "bitcoin.getPublicKey",
          params: {
            accountId: "",
            derivationPath: "",
          },
        },
      },
      {
        label: "getXPub",
        value: {
          method: "bitcoin.getXPub",
          params: {
            accountId: "",
          },
        },
      },
    ],
  },
  {
    name: "wallet",
    options: [
      {
        label: "capabilities",
        value: {
          method: "wallet.capabilities",
          params: {},
        },
      },
      {
        label: "userId",
        value: {
          method: "wallet.userId",
          params: {},
        },
      },
      {
        label: "info",
        value: {
          method: "wallet.info",
          params: {},
        },
      },
    ],
  },
  {
    name: "exchange",
    options: [
      {
        label: "start",
        value: {
          method: "exchange.start",
          params: {
            exchangeType: "SWAP | SELL | FUND  | CUSTOM",
          },
        },
      },
      {
        label: "complete (swap)",
        value: {
          method: "exchange.complete",
          params: {
            exchangeType: "SWAP",
            provider: "",
            fromAccountId: "",
            toAccountId: "",
            rawTransaction: {
              amount: "",
              recipient: "",
            },
            hexBinaryPayload: "",
            hexSignature: "",
            feeStrategy: "SLOW | MEDIUM | FAST | CUSTOM",
            swapId: "1234",
            rate: 1,
          },
        },
      },
      {
        label: "complete (fund)",
        value: {
          method: "exchange.complete",
          params: {
            exchangeType: "FUND",
            provider: "",
            fromAccountId: "",
            rawTransaction: {
              amount: "",
              recipient: "",
            },
            hexBinaryPayload: "",
            hexSignature: "",
            feeStrategy: "SLOW | MEDIUM | FAST",
          },
        },
      },
      {
        label: "complete (sell)",
        value: {
          method: "exchange.complete",
          params: {
            exchangeType: "SELL",
            provider: "",
            fromAccountId: "",
            rawTransaction: {
              amount: "",
              recipient: "",
            },
            hexBinaryPayload: "",
            hexSignature: "",
            feeStrategy: "SLOW | MEDIUM | FAST",
          },
        },
      },
    ],
  },
];

type CommandSelectorProps = {
  onSelectCommand: (value: object) => void;
};

export function CommandSelector({ onSelectCommand }: CommandSelectorProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          aria-label="Customise options"
          className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Commands
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          {data.map((group) => (
            <DropdownMenu.Sub key={group.name}>
              <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                {group.name}
                <div className="RightSlot">
                  <ChevronRightIcon />
                </div>
              </DropdownMenu.SubTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent
                  className="DropdownMenuSubContent"
                  sideOffset={2}
                  alignOffset={-5}
                >
                  {group.options.map((option) => {
                    const methodName = `${group.name}.${option.label}`;
                    return (
                      <DropdownMenu.Item
                        key={methodName}
                        className="DropdownMenuItem"
                        onSelect={() => {
                          onSelectCommand(option.value);
                        }}
                      >
                        {methodName}
                      </DropdownMenu.Item>
                    );
                  })}
                </DropdownMenu.SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>
          ))}
          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
