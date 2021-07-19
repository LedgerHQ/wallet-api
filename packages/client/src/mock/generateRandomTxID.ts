const generateRandomTxID = (length: number): string => {
  const result = [];
  const characters = "0123456789abcdef";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i += 1) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return `0x${result.join("")}`;
};

export default generateRandomTxID;
