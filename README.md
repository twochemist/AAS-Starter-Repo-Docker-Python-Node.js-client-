AAS Starter Repo
A quick-start stack for experimenting with Digital Twins using the Asset Administration Shell (AAS) standard.
Includes Eclipse BaSyx, TimescaleDB, and example clients in Python and Node.js.

Quick Start
1. Clone the repo
git clone https://github.com/twochemist/AAS-Starter-Repo-Docker-Python-Node.js-client-.git
cd aas-starter
2. Start the stack
docker-compose up -d
Services:
	•	AAS Registry → http://localhost:4000
	•	AAS Repository → http://localhost:4001
	•	Submodel Repository → http://localhost:4002
	•	TimescaleDB (Postgres) → localhost:5432 (user: postgres, pass: secret)
Check containers:
docker ps

Test the AAS Repository
List existing shells:
curl http://localhost:4001/shells
Expected output:[]

Python Client Example
clients/python-client.py
Run: python3 clients/python-client.py

Node.js Client Example
clients/node-client.js
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
Run:
node clients/node-client.js

Useful Resources
Fundamentals
	•	Asset Administration Shell (AAS) spec → https://industrialdigitaltwin.org/en/specifications
	•	AASX Package Explorer → https://github.com/admin-shell-io/aasx-package-explorer
Open Source Stacks
	•	Eclipse BaSyx → https://eclipse.dev/basyx/
	•	BaSyx GitHub → https://github.com/eclipse-basyx/basyx
Backend Tools
	•	OpenAPI Generator → https://openapi-generator.tech/
	•	TimescaleDB → https://www.timescale.com/
	•	Kafka → https://kafka.apache.org/

Diagram: Flow

[ Physical Asset ] 
        ↓
[ Asset Administration Shell (AAS) ]
        ↓
[ AAS Repository API (REST/OpenAPI) ]
        ↓
[ Backend Services: Python, Node.js, Analytics, AI ]

Next Steps
	•	Add Submodels (e.g., digital nameplate, performance logs).
	•	Persist AAS data into TimescaleDB.
	•	Secure endpoints with Keycloak + OAuth2.
	•	Connect to MQTT / OPC UA for real-time industrial data.

With this starter, you can treat every machine or component like a microservice with a REST API.
Build once, integrate everywhere.
