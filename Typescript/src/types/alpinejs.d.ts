declare module 'alpinejs' {
  const Alpine: {
    start(): void;
    data<T>(selector: string, callback: (params: any) => T): void;
  };
  // type Alpine = {
  //   data(selector: string, callback: () => void): () => void;
  // };

  export default Alpine;
}
