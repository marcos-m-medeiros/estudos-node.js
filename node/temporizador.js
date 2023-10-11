// Importando a biblioteca node-schedule
const schedule = require("node-schedule");

// Definindo uma tarefa recorrente (job) que será executada a cada 5 segundos
const tarefa1 = schedule.scheduleJob("*/5 * * * * *", function () {
  console.log("Executando Tarefa 1", new Date().getSeconds());
});

// Agendando o cancelamento da Tarefa 1 após 20 segundos
setTimeout(function () {
  tarefa1.cancel();
  console.log("Cancelando Tarefa 1!");
}, 20000);

// Criando uma regra de recorrência para especificar quando a Tarefa 2 deve ser executada
const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)]; // De segunda a sexta-feira
regra.hour = 17; // Às 17 horas
regra.second = 30; // 30 segundos

// Definindo a Tarefa 2 com base na regra de recorrência
const tarefa2 = schedule.scheduleJob(regra, function () {
  console.log("Executando Tarefa 2!", new Date().getSeconds());
});
