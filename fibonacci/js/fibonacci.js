export default function fibonacciJS(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacciJS(n-1) + fibonacciJS(n-2);
    }
}