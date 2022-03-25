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

handleCallNameAndAge()