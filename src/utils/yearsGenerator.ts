const today = new Date()
const yearsGen = () => {
  const years: number[] = []
  for (let i = 1990; i <= today.getFullYear() + 1; i++) {
    years.push(i)
  }
  return years
}
export const years = yearsGen()
