import Geocode from "react-geocode";
Geocode.setApiKey("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
Geocode.fromLatLng("48.8583701", "2.2922926").then(
  (response) => {
    const address = response.results[0].formatted_address;
    console.log(address);
  },
  (error) => {
    console.error(error);
  }
);
Geocode.setLanguage("en");
