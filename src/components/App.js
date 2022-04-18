import React, { Component } from 'react';
import Web3 from 'web3';
import Document from '../abis/Document.json'
import Header from './Header';
import Doc from './Document';
import Insert from './Insert';


const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Document.networks[networkId]
    if(networkData) {
      const contract = web3.eth.Contract(Document.abi, networkData.address)
      this.setState({ contract })
      const docCount = await contract.methods.getCount().call()
      this.setState({ docCount })
      for(var i=0; i < docCount; i++) {
        const doc = await contract.methods.getDocument(i).call()
        this.setState(prevState => {return { docHash : [ ...prevState.docHash, doc]}})
      }
    } else {
      window.alert('Smart contract not deployed to detected network.')
    }
  }
  
  constructor(props) {
    super(props)

    this.state = {
      docHash: [],
      docCount: 0,
      contract: null,
      web3: null,
      buffer: null,
      account: null
    }
  }

  captureFile = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }

  addDocument = (event) => {
    event.preventDefault()
    console.log("Submitting file to ipfs...")
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('Ipfs result', result)
      if(error) {
        console.error(error)
        return
      }
       this.state.contract.methods.addDocument(result[0].hash).send({ from: this.state.account }).then((r) => {
         return this.setState(prevState => {return { docHash: [ ...prevState.docHash, result[0].hash] } })
       })
    })
  }

  deleteDocument = (event, id) => {
    console.log("Deleting file from blockchain")
    console.log(id)
    console.log(this.state.docHash)
    this.state.contract.methods.removeDocument(id).send({ from: this.state.account }).then((r) => {
      alert(`Item ${id+1} has been successfully deleted!!`);
      this.setState(prevValue => {return {docHash: prevValue.docHash.filter((item, index)=>{
          return index !== id;
          })
        }
      })
      this.setState(state => {return {docCount : state.docCount-1}})
      console.log(this.state.docHash)
    })
  }


  render() {
    return (
      <div className='body'>
        <Header account={this.state.account} />
        <h1 className='central'>List of Files</h1>
        <ul>
        {this.state.docHash.map((doc, index) => 
          <li><Doc docHash={doc} key={index} index = {index} handleClick={this.deleteDocument}/></li>
        )}
        </ul>
        <br/> <br/>
        <Insert handleChange={this.captureFile} handleSubmit={this.addDocument} />
      </div>
    );
  }
}

export default App;
