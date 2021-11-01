/**
 * @URL /api/sausage-stands
 *
 * Returns dataset containing all the sausage stands
 */
export default function handler(req, res) {
  res.status(200).json({
    stands: [
      {
        name: "Pølsebaren",
        uid: 0,
        address: "Gladsaxe Møllevej 27, 2860 Søborg",
        phone: "+4538114618",
        latitude: "55.735653",
        longitude: "12.475422",
      }, {
        name: "Harry's Place",
        uid: 0,
        address: "Nordre Fasanvej 269, 2200 København",
        phone: "+4538114618",
        latitude: "55.6999064",
        longitude: "12.5343379",
      },
    ],
  });
}
