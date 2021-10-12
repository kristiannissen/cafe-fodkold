/**
 *
 */
export default function handler(req, res) {
  res.status(200).json({ stands: [{ name: "Harry's Place", uid: 1 }] });
}
