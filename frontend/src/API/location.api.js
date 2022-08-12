import api from "./api";

const locationApi = async (newLocation) => {
  return await api.post("/company/location", newLocation);
};


const gateApi = async (newGate) => {
  return await api.post("/company/gates", newGate);
};



export { locationApi , gateApi };


