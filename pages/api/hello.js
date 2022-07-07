import db from "../../models";
export default function handler(req, res) {
  return db.users
    .create({
      firstName: "Zohurul",
      lastName: "Islam",
      email: "mail@zohurul.com",
      password: "Abc@1234",
    })
    .then((r) => res.status(200).json(r))
    .catch((e) => res.status(500).json(e));
}
