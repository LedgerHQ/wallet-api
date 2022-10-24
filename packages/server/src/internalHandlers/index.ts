import { RFC } from "@ledgerhq/wallet-api-core";

import * as account from "./account";
import * as currency from "./currency";
import * as message from "./message";
import * as transaction from "./transaction";

export const internalHandlers = {
  [RFC.MethodId.ACCOUNT_REQUEST]: account.request,
  [RFC.MethodId.ACCOUNT_LIST]: account.list,
  [RFC.MethodId.ACCOUNT_RECEIVE]: account.receive,

  [RFC.MethodId.CURRENCY_LIST]: currency.list,

  [RFC.MethodId.MESSAGE_SIGN]: message.sign,

  [RFC.MethodId.TRANSACTION_SIGN]: transaction.sign,
  [RFC.MethodId.TRANSACTION_SIGN_AND_BROADCAST]: transaction.signAndBroadcast,
};
