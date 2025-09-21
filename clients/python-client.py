import requests

aas = {
    "idShort": "Motor_123",
    "identification": {"id": "urn:example:motor:123", "idType": "IRI"},
    "asset": {"kind": "Instance", "identification": {"id": "urn:example:asset:123", "idType": "IRI"}},
    "submodels": []
}

res = requests.post("http://localhost:4001/shells", json=aas)
print("Created:", res.status_code)

aas_list = requests.get("http://localhost:4001/shells")
print(aas_list.json())
