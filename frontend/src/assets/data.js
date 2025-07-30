export const sampleCodes = {
  c: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}
`,

  cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
`,

  java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`,

  python: `def main():
    print("Hello, World!")

if __name__ == "__main__":
    main()
`,

  kotlin: `fun main() {
    println("Hello, World!")
}
`,
  javascript: `function main() {
    console.log("Hello, World!");
}

main();
`
};