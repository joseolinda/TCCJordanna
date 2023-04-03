int is_prime(int n) {
    if (n <= 1) {
        return 0;
    }
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return 0;
        }
    }
    return 1;
}

int nth_prime(int n) {
    int count = 0;
    int i = 2;
    while (count < n) {
        if (is_prime(i)) {
            count++;
        }
        i++;
    }
    return i - 1;
}

int main() {
    return 0;
}

