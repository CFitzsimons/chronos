const pattern = new RegExp(/^[1-9][0-9]*d[1-9][0-9]*$/);

module.exports = (message) => {
  if (!message.content.startsWith('/roll ')) return;
  const dice = message.content.split(' ')[1];
  if (pattern.test(dice)) {
    const diceSplit = dice.split('d');
    const iterations = parseInt(diceSplit[0], 10);
    const upperBound = parseInt(diceSplit[1], 10);
    let total = 0;
    let trackerString = '[';
    for (let i = 0; i < iterations; i += 1) {
      const result = Math.floor((Math.random() * upperBound) + 1);
      trackerString += `${result},`;
      total += result;
    }
    message.reply(`${trackerString.substring(0, trackerString.length - 1)}] = ${total}`);
  }
};
