import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawSolanaTransaction } from "./validation";

export type TransferCommand = {
  kind: "transfer";
  sender: string;
  recipient: string;
  amount: number;
  memo?: string;
};

export type TokenCreateATACommand = {
  kind: "token.createATA";
  owner: string;
  mint: string;
  associatedTokenAccountAddress: string;
};

export type TokenCreateApproveCommand = {
  kind: "token.approve";
  account: string;
  mintAddress: string;
  recipientDescriptor: TokenRecipientDescriptor;
  owner: string;
  amount: number;
  decimals: number;
};

export type TokenCreateRevokeCommand = {
  kind: "token.revoke";
  account: string;
  owner: string;
};

export type StakeCreateAccountCommand = {
  kind: "stake.createAccount";
  fromAccAddress: string;
  stakeAccAddress: string;
  seed: string;
  amount: number;
  stakeAccRentExemptAmount: number;
  delegate: {
    voteAccAddress: string;
  };
};

export type StakeDelegateCommand = {
  kind: "stake.delegate";
  authorizedAccAddr: string;
  stakeAccAddr: string;
  voteAccAddr: string;
};

export type StakeUndelegateCommand = {
  kind: "stake.undelegate";
  authorizedAccAddr: string;
  stakeAccAddr: string;
};

export type StakeWithdrawCommand = {
  kind: "stake.withdraw";
  authorizedAccAddr: string;
  stakeAccAddr: string;
  toAccAddr: string;
  amount: number;
};

export type StakeSplitCommand = {
  kind: "stake.split";
  authorizedAccAddr: string;
  stakeAccAddr: string;
  amount: number;
  seed: string;
  splitStakeAccAddr: string;
};

export type TokenRecipientDescriptor = {
  walletAddress: string;
  tokenAccAddress: string;
  shouldCreateAsAssociatedTokenAccount: boolean;
};

export type TokenTransferCommand = {
  kind: "token.transfer";
  ownerAddress: string;
  ownerAssociatedTokenAccountAddress: string;
  recipientDescriptor: TokenRecipientDescriptor;
  amount: number;
  mintAddress: string;
  mintDecimals: number;
  memo?: string;
};

export type Command =
  | TransferCommand
  | TokenTransferCommand
  | TokenCreateATACommand
  | TokenCreateApproveCommand
  | TokenCreateRevokeCommand
  | StakeCreateAccountCommand
  | StakeDelegateCommand
  | StakeUndelegateCommand
  | StakeWithdrawCommand
  | StakeSplitCommand;

export type CommandDescriptor = {
  command: Command;
  fee: number;
  warnings: Record<string, Error>;
  errors: Record<string, Error>;
};

export type TransferTransaction = {
  kind: "transfer";
  uiState: {
    memo?: string;
  };
};

export type TokenTransferTransaction = {
  kind: "token.transfer";
  uiState: {
    subAccountId: string;
    memo?: string;
  };
};

export type TokenCreateATATransaction = {
  kind: "token.createATA";
  uiState: {
    tokenId: string;
  };
};

export type TokenCreateApproveTransaction = {
  kind: "token.approve";
  uiState: {
    subAccountId: string;
  };
};

export type TokenCreateRevokeTransaction = {
  kind: "token.revoke";
  uiState: {
    subAccountId: string;
  };
};

export type StakeCreateAccountTransaction = {
  kind: "stake.createAccount";
  uiState: {
    delegate: {
      voteAccAddress: string;
    };
  };
};

export type StakeDelegateTransaction = {
  kind: "stake.delegate";
  uiState: {
    stakeAccAddr: string;
    voteAccAddr: string;
  };
};

export type StakeUndelegateTransaction = {
  kind: "stake.undelegate";
  uiState: {
    stakeAccAddr: string;
  };
};

export type StakeWithdrawTransaction = {
  kind: "stake.withdraw";
  uiState: {
    stakeAccAddr: string;
  };
};

export type StakeSplitTransaction = {
  kind: "stake.split";
  uiState: {
    stakeAccAddr: string;
  };
};

export type TransactionModel = { commandDescriptor?: CommandDescriptor } & (
  | TransferTransaction
  | TokenTransferTransaction
  | TokenCreateATATransaction
  | TokenCreateApproveTransaction
  | TokenCreateRevokeTransaction
  | StakeCreateAccountTransaction
  | StakeDelegateTransaction
  | StakeUndelegateTransaction
  | StakeWithdrawTransaction
  | StakeSplitTransaction
);

export type SolanaTransaction = TransactionCommon & {
  readonly family: RawSolanaTransaction["family"];
  model: TransactionModel;
  // base64-encoded serialized transaction
  raw?: string;
};

export type RawSolanaTransaction = z.infer<typeof schemaRawSolanaTransaction>;
