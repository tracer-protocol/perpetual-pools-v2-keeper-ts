import dotenv from 'dotenv';
import Keeper from './keeper';

dotenv.config();

const createLookupFromCSV = (csv: string) => {
  const lookup: Record<string, boolean> = {};

  if (!csv) {
    return lookup;
  }

  const keys = csv.split(',');

  for (const key of keys) {
    lookup[key] = true;
  }

  return lookup;
};

async function main () {
  const keeper = new Keeper({
    privateKey: process.env.PRIVATE_KEY as string,
    poolFactoryAddress: process.env.POOL_FACTORY_ADDRESS as string,
    poolFactoryDeployedAtBlock: Number(process.env.POOL_FACTORY_DEPLOYED_AT_BLOCK || 0),
    nodeUrl: process.env.NODE_URL || '',
    skipPools: createLookupFromCSV(process.env.SKIP_POOLS || ''),
    includePools: createLookupFromCSV(process.env.INCLUDE_POOLS || ''),
    gasLimit: Number(process.env.GAS_LIMIT || 5000000),
    balanceThresholds: JSON.parse(process.env.BALANCE_THRESHOLDS || '{}')
  });

  await keeper.syncKnownPools();

  keeper.startWatchingForNewPools();
  keeper.startUpkeeping({ interval: Number(process.env.UPKEEP_INTERVAL || 5000) });
}

main();
