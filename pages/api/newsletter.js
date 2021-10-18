import { connectDatabase, insertDocument } from "../../utils/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Неверный адрес email!" });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Ошибка подключения к БД!" });
      return;
    }

    try {
      await insertDocument(client, "emails", { email: userEmail });
    } catch (error) {
      res.status(500).json({ message: "Ошибка добавления данных в БД!" });
      return;
    }

    console.log(userEmail);
    res.status(201).json({ message: "Вы подписались!" });
  }
}

export default handler;
