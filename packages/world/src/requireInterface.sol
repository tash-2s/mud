// SPDX-License-Identifier: MIT
pragma solidity >=0.8.24;

import { IERC165 } from "./IERC165.sol";
import { ERC165Checker } from "./ERC165Checker.sol";
import { IWorldErrors } from "./IWorldErrors.sol";

/**
 * @title Interface Validator
 * @notice Utility function to validate interface support on a given contract using ERC-165.
 * @dev This function uses the ERC-165 standard's `supportsInterface` to check if a given contract supports a specific interface.
 */

/**
 * @notice Checks if a given contract at `contractAddress` supports the interface with ID `interfaceId`.
 * @dev Uses the ERC-165 `supportsInterface` method. If the contract doesn't support the interface or doesn't implement ERC-165, the function will revert with a relevant error message.
 * @param contractAddress The address of the contract to check.
 * @param interfaceId The interface ID to verify.
 */
function requireInterface(address contractAddress, bytes4 interfaceId) view {
  if (!ERC165Checker.supportsInterface(contractAddress, interfaceId)) {
    revert IWorldErrors.World_InterfaceNotSupported(contractAddress, interfaceId);
  }
}
