var nameList = [
  "Akshay",
  "Priyanka",
  "Rahul",
  "Asha",
  "Rohan",
  "Anu",
  "David",
  "Harsh",
  "Ram",
  "Mohan",
  "Lord",
  "King",
  "Harry",
  "Draco",
  "David",
  "Dobby",
  "Sweety",
  "Minne",
  "Albus",
  "Luna",
  "Hunter",
  "Lies",
  "Lie",
  "Captain",
  "Lado",
  "Munna",
  "Moli",
  "Chintu",
  "Bubble",
  "Bablu",
  "Pinky",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
];
export function makeRandomMessage(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

export const findPrime = (num) => {
  let i,
    primes = [2, 3],
    n = 5;
  const isPrime = (n) => {
    let i = 1,
      p = primes[i],
      limit = Math.ceil(Math.sqrt(n));
    while (p <= limit) {
      if (n % p === 0) {
        return false;
      }
      i += 1;
      p = primes[i];
    }
    return true;
  };
  for (i = 2; i <= num; i += 1) {
    while (!isPrime(n)) {
      n += 2;
    }
    primes.push(n);
    n += 2;
  }
  return primes[num - 1];
};
