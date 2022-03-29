// function with return type

const getName = (): string => {
  return 'My Name is Uvuvuevue'
}

const getAge = (): Number => {
  return 102
}

const handleCallNameAndAge = (): void => {
  // return ''  // we cant return anything because we declare void to this method
  console.log(getName(), getAge())
}

// handleCallNameAndAge()



// function with argument

const multiply = (val1: number, val2: number) => {
  return val1 * val2
}

const add = ({ val1, val2 }: { val1:number, val2: number }) => {
  return val1 + val2
}

// we should define parameters as any instead of nothing
const subtract = (val1: any, val2: any) => {
  return val1 - val2
}

const result = multiply(2, 4)
// console.log('result', result)



// function as a type
type Tambah = (val1: number, val2: number) => number

const addWithType: Tambah = (val1: number, val2: number): number => {
  return val1 + val2
}


// function with default params
const getFullName = (fName: string, lName: string = 'William') => {
  return fName + ' ' + lName
}


type Person = {
  name: string,
  age: number
}

// function with optional params
const combineName = (person1: Person, person2?: Person): string => {
  return person1.name + ' ' + person2?.name
}

console.log('akbar')