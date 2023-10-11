class ChildRecord {
  static listAll() {
    return [
      {
        id: "abcd",
        name: "Piotrek",
        gift: "Samochodzik",
      },
      {
        id: "abcd",
        name: "Ania",
        gift: "Domek dla lalek",
      },
    ];
  }
}

module.exports = {
  ChildRecord,
};
