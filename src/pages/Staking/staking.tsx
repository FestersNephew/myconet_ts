import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ApiContext, AccountContext } from "./utils/contexts";
import { ApiCtx, LocalStorageAccountCtx } from "./utils/types";
import { useApiCreate, useLocalStorage } from "./hooks";
import { createAccountFromInjected } from "./utils/utils";
import { NETWORKS } from "./utils/constants";
import Banner from "./components/Banner";



import {
  NavFooter,
  Head,
  ErrorBoundary,
  BurnrDivider,
} from "./components";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import Stack from "@mui/material/Stack";

interface Props {
  className?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
  },
  paper: {
    backgroundColor: theme.palette.background.default,
  },
  main: {
    width: "100%",
    maxWidth: `${theme.spacing(3) + 650}px`,
    padding: theme.spacing(2),
    flex: 1,
  },
}));

const Staking: React.FunctionComponent<Props> = ({ className = "" }: Props) => {
  const classes = useStyles();
  const [endpoint, setEndpoint] = useLocalStorage("endpoint");
  const apiCtx: ApiCtx = useApiCreate("0");
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);

  if (!endpoint) {
    setEndpoint(NETWORKS[parseInt(apiCtx?.network || "0")].id);
  }
  

  const [account, setCurrentAccount] = useState<LocalStorageAccountCtx>(
    {} as LocalStorageAccountCtx
  );
  const [loader, setLoader] = useState(true);

  function uniqueAddresses(
    account: InjectedAccountWithMeta,
    i: number,
    accounts_: InjectedAccountWithMeta[]
  ) {
    // filters out duplicate addresses
    return accounts_.findIndex((acc) => acc.address === account.address) === i;
  }

  useEffect(() => {
    const callSetters = async () => {
      if (await apiCtx.api.isReady) {
        const allInjected = await web3Enable("Tensor Wallet");
        const allAccounts = await web3Accounts();
        setAccounts(allAccounts.filter(uniqueAddresses));
        await web3AccountsSubscribe((accounts) => {
          setAccounts(accounts.filter(uniqueAddresses));
        });
        if (allAccounts.length === 0) {
          // if there are no accounts, set the loader to false
          setLoader(false);
          setTimeout(() => {
            callSetters();
          }, 2000);
        }
      }
    };

    apiCtx.api && callSetters();
  }, [apiCtx?.api, web3Enable, web3Accounts, web3AccountsSubscribe]);

  useEffect(() => {
    if (
      (!!!account || !accounts.some((act) => act.address === account.accountAddress)) &&
      accounts.length > 0
    ) {
      const userTmp = createAccountFromInjected(accounts);
      setCurrentAccount(userTmp);
      setLoader(false);
    }
  }, [accounts, account, createAccountFromInjected]);

  return (
    <Stack spacing={0} direction="column" className={classes.paper}>
      <Banner />
      <div className={`${classes.root} ${className}`}>
        <AccountContext.Provider value={{ account, setCurrentAccount }}>
          <ErrorBoundary>
            <main className={classes.main}>
              <ApiContext.Provider value={apiCtx}>
                <Head />
                <BurnrDivider />
                {/* Your staking content goes here */}
              </ApiContext.Provider>
            </main>
            <NavFooter />
          </ErrorBoundary>
        </AccountContext.Provider>
      </div>
    </Stack>
  );
};

export default Staking;
