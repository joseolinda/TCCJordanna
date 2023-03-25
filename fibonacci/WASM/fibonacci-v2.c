int fibonacci(int n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

/*
    * Comando de compilação
    * emcc fibonacci-v2.c -Os -s WASM=1 -s SIDE_MODULE=1 -o fibonacci.wasm
*/