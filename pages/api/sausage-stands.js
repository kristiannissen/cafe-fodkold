/**
 * @URL /api/sausage-stands
 *
 * Returns dataset containing all the sausage stands
 */
export default function handler(req, res) {
  res.status(200).json({
    stands: [
      { name: "Harry's Place", uid: 1 },
      { name: "Lone's Pølser", uid: 2 },
      {
        name: "Pølsebaren",
        uid: 3,
        address: "Gladsaxe Møllevej 27, 2860 Søborg",
        phone: "+4538114618",
      },
    ],
  });
}
