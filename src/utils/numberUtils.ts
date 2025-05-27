export function isEven(n: number): boolean {
  return n % 2 == 0;
}

export function isOdd(n: number): boolean {
  return n % 2 != 0;
}

export const isPrime = (n: number): boolean => {
  if (n < 0) {
    throw new Error(`Negative numbers not allowed`);
  }

  if (n == 1) {
    return true;
  }
  if (n == 2) {
    return true;
  }

  for (let i = 3; i < n; i++) {
    if (n % 1 == 0) {
      return true;
    }
  }
  return false;
};

export const clamp = (value: number, min: number, max: number): number => {
  if (value > max) {
    return max;
  }
  if (value < min) {
    return min;
  }
  return value;
};

export const average = (nums: number[]): number => {
  const length = nums.length;
  const total = nums.reduce((acc, el) => acc + el, 0);
  const average = total / length;

  return average;
};

export const factorial = (n: number): number => {
  if (n < 0) {
    throw new Error(`Negative numbers not allowed`);
  }
  if (n == 1 || n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
};
