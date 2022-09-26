let students = [
  {
    name: "João",
    test1: "10",
    test2: "2"
  },
  {
    name: "Letícia",
    test1: "10",
    test2: "9"
  },
  {
    name: "Diego",
    test1: "9",
    test2: "9"
  },
  {
    name: "Júlia",
    test1: "6",
    test2: "5"
  }
]

function average(test1, test2) {
  return ((Number(test1) + Number(test2)) / 2) 
}

function printStudentAverage(student) {
  return `A média do(a) aluno(a) ${student.name} é ${average(student.test1, student.test2)}` 
}

for(let student of students) {
  let avg = average(student.test1, student.test2)
  let averageMessage = printStudentAverage(student)

  let resultAMessage = `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`
  let resultRMessage = `Não foi dessa vez, ${student.name}! Tente novamente!`

  if (avg >= 7) {
    alert(averageMessage + "\n" + resultAMessage)
  }
  else {
    alert(averageMessage + "\n" + resultRMessage)
  }
}