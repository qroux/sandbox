const printer = (s, e) => {
  for (let i = s; i <= e; i++) {
    if (i % 3 != 0) {
      console.log(i, ':', 'fizz');
    } else {
      console.log(i, ':', 'buzz');
    }
  }
};

printer(1, 100);
