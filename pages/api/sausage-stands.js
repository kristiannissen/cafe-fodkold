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
        uid: 3,
        address: "Gladsaxe Møllevej 27, 2860 Søborg",
        phone: "+4538114618",
        latitude: "55.735653",
        longitude: "12.475422",
      },
    ],
  });
}
