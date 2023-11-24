import { WalletAPIProvider } from "@ledgerhq/wallet-api-client-react";
import {
  declarativeHandlers,
  getSimulatorTransport,
  profiles,
} from "@ledgerhq/wallet-api-simulator";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PropsWithChildren } from "react";
import { AccountsList } from "./AccountsList";

const transport = getSimulatorTransport({
  config: profiles.STANDARD.config,
  permissions: {
    currencyIds: ["ethereum", "bitcoin"],
    methodIds: ["account.list", "message.sign"],
  },
  accounts: profiles.STANDARD.accounts,
  currencies: profiles.STANDARD.currencies,
  methods: declarativeHandlers({
    "message.sign": [
      // First call to message.sign and fallback after the third call
      Buffer.from("0x123456789123456789"),
      // Second call to message.sign only
      ({ account, message, meta }) => {
        console.log(account);
        console.log(message);
        console.log(meta);
        return message;
      },
      // Third call to message.sign only with an error
      ({ account, message, meta }) => {
        console.log(account);
        console.log(message);
        console.log(meta);
        throw new Error("Sign declined");
      },
    ],
  }),
});

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <WalletAPIProvider transport={transport}>{children}</WalletAPIProvider>
  );
};

it("should get and show accounts", async () => {
  const user = userEvent.setup();
  render(<AccountsList />, { wrapper: Providers });
  expect(screen.getByRole("heading")).toHaveTextContent(
    "Get started by editing app/page.tsx",
  );
  screen.debug();
  expect(screen.getByRole("status")).toHaveTextContent("Loading accounts");
  await user.click(screen.getByRole("button"));
  screen.debug();
  await waitFor(() => expect(screen.getByRole("status")).toBeEmptyDOMElement());
  // Should add a check for the list of accounts
});

// it("should allow to sign")
