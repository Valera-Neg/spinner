const chars = ['\r|   ','\r/   ','\r-   ','\r\\   ', '\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ' ];
for (let i = 0; i < chars.length; i++) {
  setTimeout(() => {process.stdout.write(chars[i])
    if (i == chars.length - 1) {
      process.stdout.write('\n');
    }
  }, i * 200)
};
