//SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

interface ILendingProtocol {
    function borrow(address collateral, uint amountCollateral, address supplyToken, uint borrowAmount) external returns(uint);
    function repay(address collateral, uint amountCollteral) external;
}
