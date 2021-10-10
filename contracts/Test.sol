// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;

contract Test {
  event log(string indexed message);

  uint256 public testUint;

  function helloWorld() external {
    emit log("hello world");
  }

  function setTestUint(uint256 testValue) external {
    testUint = testValue;
  }
}
