//SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;
pragma experimental ABIEncoderV2;

interface IInvestStrategy {
	struct assets
	{
		address token;
		uint amount;
		uint lending;
	}
    function invest(assets calldata asset0) external;
    function divest(assets calldata asset0) external;
}