//SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

interface IFlashLoan {
    function borrow(address loanToken, uint loanAmount) external returns(uint);
}
