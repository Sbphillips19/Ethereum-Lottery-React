// constructor Web3
import Web3 from 'web3';

// ripping out metamask web3 provider
const web3 = new Web3(window.web3.currentProvider);

// now any other file can get prebuilt 100% set up version of web3
export default web3;
