pragma solidity ^0.5.0;

contract Document {
  string[] public document;
  uint256 public docCount = 0;

  function addDocument(string memory _docHash) public {
    document.push(_docHash);
    docCount++;
  }

  function removeDocument(uint256 _index) public{
    delete document[_index];
    docCount--;
  }

  function getDocument(uint256 _docCount) public view returns (string memory) {
    return document[_docCount];
  }

  function getCount() public view returns (uint256) {
    return docCount;
  }
}
