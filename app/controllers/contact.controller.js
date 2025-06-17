exports.create = (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).send({
      message: "Missing required fields: name, email, or phone",
    });
  }

  // Tạm lưu local (nếu chưa kết nối DB)
  const newContact = {
    id: Date.now(),
    name,
    email,
    phone,
  };

  res.status(201).send({
    message: "Contact created successfully",
    data: newContact,
  });
};

exports.findAll = (req, res) => {
  res.send({ message: "findAll handler" });
};
exports.findOne = (req, res) => {
  res.send({ message: "findOne handler" });
};
exports.update = (req, res) => {
  res.send({ message: "update handler" });
};
exports.delete = (req, res) => {
  res.send({ message: "delete handler" });
};
exports.deleteAll = (req, res) => {
  res.send({ message: "deleteAll handler" });
};
exports.findAllFavorite = (req, res) => {
  res.send({ message: "findAllFavorite handler" });
};
