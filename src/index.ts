// set up learning typescript
// command terminal inisialisasi typescript 
// command  {tsc --init}
// turn on tsconfig.json
//     "noImplicitAny": true,  
//     "outDir": "./bundled", 
//     "rootDir": "./src", 
// command  {tsc && node bundled/index.js}






// tipe data
// string
let nama: string = "intizam";
// number
let phoneNumb: number = 088888888888;
// boolean
let rich: boolean = true;
// any
let isMarried: any = false;
// array
let pets: string[] = ["kucing", "biawak", "monyet"];
// tuple
let cars: [string, number] = ["BMW", 1];


// custom type data
type mhs = {
    namaMhs: string,
    ageMhs: number,
    isMarried: boolean,
}

let mahasiswa1: mhs = {
    namaMhs: "alucard",
    ageMhs: 90,
    isMarried: false,
}

// bisa juga menggunakan opsional chaining
// custom type data 2

type mhs2 = {
    namaMhs2: string,
    ageMhs2: number,
    isMarried?: boolean,
}

let mahasiswa2 = {
    namaMhs2: "miya",
    ageMhs2: 100,
}
// bisa tidak menyertakan isMarried



// function in typescript
// function biasa 
function sayHello(): string {
    return "hello"
}
// arrow function 
const sayHello2 = (): string => "hello 2"


// note : void di function tidak akan mereturn apapun
// contoh menggunakan void 
const add = (a: number, b: number): void => {
    const result: number = a + b;
    console.log(result);
}

// tidak menggunakan void

const add2 = (q: number, w: number): number => {
    return q + w
}
console.log(add2(1, 2));

// contoh lagi
const add3 = (p: number, i: number): string => {
    return `hasil penambahan dari ${p} dan ${i} adallah = ${p + i}`
}

console.log(add3(10, 9));


// interface 

interface car {
    nameCar: string,
    serialNumber: number,
    tire: number,
    sunRoof: boolean,
}


interface truk extends car {
    cargoDeck: boolean,
}


const buildCar = (parts: car): void => {
    console.log(`
your car name is : ${parts.nameCar}
serial number is : ${parts.serialNumber}
tire : ${parts.tire}
sunroof is : ${parts.sunRoof}
`);
}


const buildTruck = (parts: truk): void => {
    console.log(`
your car name is : ${parts.nameCar}
serial number is : ${parts.serialNumber}
tire : ${parts.tire}
sunroof is : ${parts.sunRoof}
cargo deck : ${parts.cargoDeck}
`);
}


let pajero = {
    nameCar: "pajero",
    serialNumber: 23122,
    tire: 6,
    sunRoof: true,
}


let volvo = {
    nameCar: "pajero",
    serialNumber: 23122,
    tire: 6,
    sunRoof: true,
    cargoDeck: true,
}

buildCar(pajero)
buildTruck(volvo)
