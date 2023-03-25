#include <emscripten.h>

int fibonacci(int n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

EMSCRIPTEN_KEEPALIVE
int get_fibonacci(int n) {
  return fibonacci(n);
}


/*
    * Comando para compilação
    * emcc fibonacci.c -s WASM=1 -s EXPORTED_FUNCTIONS="['_get_fibonacci']" -o fibonacci.js
*/