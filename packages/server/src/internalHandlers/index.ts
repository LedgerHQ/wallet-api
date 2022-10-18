import { RFC } from "@ledgerhq/wallet-api-core";
import * as account from "./account";
import * as currency from "./currency";

export const internalHandlers = {
    [RFC.MethodId.ACCOUNT_REQUEST]: account.request,
    [RFC.MethodId.ACCOUNT_LIST]: account.list,
    [RFC.MethodId.ACCOUNT_RECEIVE]: account.receive,

    [RFC.MethodId.CURRENCY_LIST]: currency.list,
};
