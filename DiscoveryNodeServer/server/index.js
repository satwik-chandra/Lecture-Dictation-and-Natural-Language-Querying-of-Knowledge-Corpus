// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const discovery = new DiscoveryV1({
  version: '2019-04-30',
  authenticator: new IamAuthenticator({
    apikey: 'umf4q-OA2qkJvgWZhkeLe8e0Q8vsCufrJgmEu0ocbfxu',
  }),
  serviceUrl: 'https://api.eu-gb.discovery.watson.cloud.ibm.com/instances/ee277a06-704d-45b4-a204-9dff9216fc9a',
});

const queryParams = {
  environmentId: 'system',
  collectionId: 'news-en',
};


//function that takes in a string as natural language query and then send the natural language query to the discovery service and returns the response
async function getResponse(query) {
  const response = await discovery.query(queryParams,query);
  return response;
}


//make an api endpoint that uses getResponse function to get the response for a natural language query
app.get("/api/discovery/:query", async (req, res) => {
  const query = req.params.query;
  const response = await getResponse(query);
  res.json(response);
});

//make another api endpoint that returns the autocomplete suggestions for a prefix using the discovery service  (this is the same as the autocomplete suggestions in the discovery service)
app.get("/api/autocomplete/:prefix", async (req, res) => {
  const prefix = req.params.prefix;
  const response = await discovery.getAutocompletion(queryParams,prefix);
  res.json(response);
});



/* app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  }); */

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});