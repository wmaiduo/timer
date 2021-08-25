let time = process.argv.slice(2);

for (let element in time) {
  if (!Number.isNaN(time[element]) && time[element] > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time[element] * 1000);
  }
}