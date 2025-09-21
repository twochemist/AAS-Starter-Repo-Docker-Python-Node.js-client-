const axios = require("axios");

async function main() {
  const aas = {
    idShort: "Pump_456",
    identification: { id: "urn:example:pump:456", idType: "IRI" },
    asset: { kind: "Instance", identification: { id: "urn:example:asset:456", idType: "IRI" } },
    submodels: []
  };

  const res = await axios.post("http://localhost:4001/shells", aas);
  console.log("Created:", res.status);

  const list = await axios.get("http://localhost:4001/shells");
  console.log(list.data);
}

main();
