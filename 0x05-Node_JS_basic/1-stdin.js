// write write to stdout
process.stdout.write('Welcome to Holberton School, what is your name?\n');
// take user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  process.stdout.write('This important software is now closing\n');
});
