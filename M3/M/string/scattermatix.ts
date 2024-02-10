import 'momentum.ts'
// 定义一个复数类
class Complex {
    constructor(public real: number, public imag: number) {}
// 实现复数加法
    add(other: Complex): Complex {
        return new Complex(this.real + other.real, this.imag + other.imag)
    }
// 实现复数乘法
    multiply(other: Complex): Complex {
        return new Complex(
            this.real * other.real - this.imag * other.imag,
            this.real * other.imag + this.imag * other.real
        )
    }
// 将复数转换为字符串
    toString(): string {
        return `${this.real}${this.imag >= 0 ? '+' : '-'}${Math.abs(this.imag)}i`
    }
}
// 定义散射矩阵类
class ScatteringMatrix {
    private matrix: Complex[][]

    constructor(size: number) {
        this.matrix = Array.from({ length: size }, () =>
            Array.from({ length: size }, () => new Complex(0, 0))
        );
    }
// 设置散射矩阵的元素
    setElement(row: number, col: number, value: Complex): void {
        this.matrix[row][col] = value
    }
// 获取散射矩阵的元素
    getElement(row: number, col: number): Complex {
        return this.matrix[row][col]
    }
// 实现散射矩阵的乘法
    multiply(other: ScatteringMatrix) {
        const result = new ScatteringMatrix(this.matrix.length)
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix.length; j++) {
                let sum = new Complex(0, 0);
                for (let k = 0; k < this.matrix.length; k++) {
                    sum = sum.add(this.matrix[i][k].multiply(other.matrix[k][j]))
                }
                result.setElement(i, j, sum)
            }
        }
        return result
    }
                // 打印散射矩阵
    print(): void {
        for (let row of this.matrix) {
            console.log(row.map(element => element.toString()).join(' '))
        }
    }
}
// 创建一个2x2的散射矩阵
const S = new ScatteringMatrix(2)
// 设置散射矩阵的元素
S.setElement(1, 0, new Complex(1, 0))
S.setElement(0, 1, new Complex(0, 1))
S.setElement(-1, 0, new Complex(-1, 0))
S.setElement(0, -1, new Complex(0, -1))
// 打印散射
S.print()
console.log(S.getElement(0, 0).toString()) // Should output "1+0i"
console.log(S.getElement(1, 1).toString()) // Should output "1+0i"
console.log(S.getElement(0, 1).toString()) // Should output "0+1i"
console.log(S.getElement(1, 0).toString()) // Should output "0+1i"
const S2 = new ScatteringMatrix(2);
// Set elements for S2
S2.setElement(0, 0, new Complex(1, 0));
S2.setElement(1, 1, new Complex(1, 0));
S2.setElement(0, 1, new Complex(0, 1));
S2.setElement(1, 0, new Complex(0, 1));
// Multiply scattering matrices S and S2
const resultMatrix = S.multiply(S2);
// Print the resulting scattering matrix
resultMatrix.print();
