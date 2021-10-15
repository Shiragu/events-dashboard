import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Неверный адрес email!" });
      return;
    }

    const client = await MongoClient.connect("url");
    const db = client.db();

    await db.collection("emails").insertOne({ email: userEmail });

    client.close();

    console.log(userEmail);
    res.status(201).json({ message: "Вы подписались!" });
  }
}

export default handler;
