import { Pool } from '@uniswap/v3-sdk'
import { ethers } from 'ethers'
// import { Address } from 'cluster'
const INFURIA_ID =
  'https://mainnet.infura.io/v3/d3779648f1084bb0a450b3e74f00b4cd'

const provider = new ethers.providers.JsonRpcProvider(INFURIA_ID)

const poolAddress = '0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8'

const ABI = [
  'function factory() external view returns (address)',
  'function token0() external view returns (address)',
  'function token1() external view returns (address)',
  'function fee() external view returns (uint24)',
  'function tickSpacing() external view returns (int24)',
  'function maxLiquidityPerTick() external view returns (uint128)'
]

const poolContract = new ethers.Contract(poolAddress, ABI, provider)

const getPoolData = async () => {
  const poolData = {
    factory: await poolContract.factory(),
    token0: await poolContract.token0(),
    token1: await poolContract.token1(),
    fee: await poolContract.fee(),
    tickSpacing: await poolContract.tickSpacing(),
    maxLiquidityPerTick: await poolContract.maxLiquidityPerTick()
  }
  console.log(poolData)
}

getPoolData()
