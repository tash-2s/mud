// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;
import "solecs/BareComponent.sol";

contract Uint32ArrayBareComponent is BareComponent {
  constructor(address world, uint256 id) BareComponent(world, id) {}

  function getSchema() public pure override returns (string[] memory keys, LibTypes.SchemaValue[] memory values) {
    keys = new string[](1);
    values = new LibTypes.SchemaValue[](1);

    keys[0] = "value";
    values[0] = LibTypes.SchemaValue.UINT32_ARRAY;
  }

  function set(uint256 entity, uint32[] memory value) public {
    set(entity, abi.encode(value));
  }

  function getValue(uint256 entity) public view returns (uint32[] memory) {
    return abi.decode(getRawValue(entity), (uint32[]));
  }
}