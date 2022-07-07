import db from "../../../models";

export default function handler(req, res) {
  console.log(req.body);
  const { firstName, lastName, email, password } = req.body;

  return db.users
    .create({
      firstName,
      lastName,
      email,
      password,
    })
    .then((r) => {
      console.log(r);
      res.status(200).json(r.toJSON());
    })
    .catch((e) => res.status(500).json(e));
}
