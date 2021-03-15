import {expect, use} from 'chai';
import {Contract, ethers, BigNumber} from 'ethers';
import {deployContract, MockProvider, solidity} from 'ethereum-waffle';
import { BigNumber as BN } from 'bignumber.js'


use(solidity);

function convertBigNumber(bnAmount: BigNumber, divider: number) {
    return new BN(bnAmount.toString()).dividedBy(new BN(divider)).toFixed();
}

let address0 = "0x0000000000000000000000000000000000000000";

describe('deploy', () => {
	let provider = new MockProvider({ganacheOptions : {gasLimit : 8000000}});
	
    async function getBlockNumber() {
        const blockNumber = await provider.getBlockNumber()
        console.log("Current block number: " + blockNumber);
        return blockNumber;
    }

    async function mineBlock(provider: MockProvider, timestamp: number): Promise<void> {
        return provider.send('evm_mine', [timestamp])
    }

    before(async () => {

    
    })

    it("simple test", async () => {

    })
})