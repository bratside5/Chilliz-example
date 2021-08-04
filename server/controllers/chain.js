const { Block, BlockChain } = require("../blockchain/index");

const fetch = require("node-fetch");

let chain = new BlockChain();
async function initChain(req, res) {
  try {
    const response = await chain.checkChainValidity();
    if (chain.checkChainValidity() !== false) {
      res.status(200).json(response);
    }
    if (chain.checkChainValidity() !== true) {
      res.status(500).send("invalid");
    }
  } catch (error) {
    console.log("error", error);
  }
}

const url = "https://randomuser.me/api";

// let date = new Date(newDate);

// let formatDate = date.toDateString();
// let formatTime = time.toLocaleTimeString();

const getUserData = async () => {
  try {
    const response = await fetch(url);
    let newDate = Date.now();
    let date = new Date(newDate);
    let time = new Date(newDate);
    let formatDate = date.toDateString();
    let formatTime = time.toLocaleTimeString();
    console.log(formatTime);
    const { results } = await response.json();
    const {
      gender,
      dob: { age },
      email,
      phone,
      name: { first, last },
      picture: { medium },
    } = results[0];

    const combineData = {
      gender: gender,
      email: email,
      phone: phone,
      first: first,
      last: last,
      img: medium,
      age: age,
      latestBalance: Math.floor(Math.random() * 10000),
      date: formatDate,
      time: formatTime,
      lastTransaction: [chain.obtainSecondLatestBlock],
      // randomTransaction: chain.obtainRandomBlock(),
    };

    return combineData;
  } catch (error) {
    console.log(error);
  }
};

async function addBlock(req, res) {
  try {
    const results = await getUserData();
    let newBlock = new Block(results);
    chain.addNewBlock(newBlock);
    if (chain.checkChainValidity() !== false) {
      console.log(`Block added at:`);
      res.json(chain);
    }
  } catch (error) {
    console.log("error", error);
  }
}

async function getBlockChain(req, res) {
  try {
    const results = chain;
    res.send(results);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  initChain,
  addBlock,
  getUserData,
  getBlockChain,
};
