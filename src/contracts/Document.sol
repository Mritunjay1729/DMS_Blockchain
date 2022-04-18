pragma solidity ^0.5.0;

contract Document {
  string[] public document;
  uint256 public docCount = 0;

  function addDocument(string memory _docHash) public {
    document.push(_docHash);
    docCount++;
  }

  function removeDocument(uint256 _index) public{
    for(uint i = _index; i < document.length-1; i++){
      document[i] = document[i+1];
    }
    document.pop();
    docCount--;
  }

  function getDocument(uint256 _docCount) public view returns (string memory) {
    return document[_docCount];
  }

  function getCount() public view returns (uint256) {
    return docCount;
  }
}
