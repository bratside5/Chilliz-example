const fetch = require("node-fetch");

const url = `https://randomuser.me/api`;

async function getUser(req, res) {
  try {
    const res = fetch(url)
      .then((res) => res.json())
      .then((json) => res.send(json));
  } catch (error) {
    res.status(404);
    return res.send({ error: "Error fetching data..." });
  }
}

module.exports = { getUser };
