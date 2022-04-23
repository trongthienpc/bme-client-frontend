import { urlApi } from "./constants";
// const api_secret = "35keXaXEX4Re4MA";
async function getRooms() {
  await fetch(`${urlApi}/rooms/`)
    .then((response) => {
      return response;
    })
    .then((data) => {
      return data.json();
    })
    .catch((error) => console.log(error));
}

export { getRooms };
