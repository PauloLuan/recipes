(async () => {
  await new Promise(res => setTimeout(res, 500));
  console.log('Hello World');
})();
