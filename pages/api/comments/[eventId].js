function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Введенные данные не верны!" });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    console.log(newComment);

    res
      .status(201)
      .json({ message: "Комментарий успешно добавлен!", comment: newComment });
  }

  if (req.method === "GET") {
    const tempData = [
      { id: "c1", name: "Вася", text: "Рандомный коммент" },
      { id: "c2", name: "Макс", text: "Рандомный коммент" },
      { id: "c3", name: "Кто-то", text: "Рандомный коммент" },
    ];

    res.status(200).json({ comments: tempData });
  }
}

export default handler;
