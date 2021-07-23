export type RequestAccountParams = {
  currencies?: string[];
  allowAddAccount?: boolean;
};

export type SignTransactionParams = {
  useApp?: string;
};

export type ListCurrenciesParams = {
  name?: string;
  ticker?: string;
};
