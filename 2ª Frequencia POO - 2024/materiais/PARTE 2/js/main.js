import { Paciente } from "./Paciente.js";

// Dados hardcoded de pacientes
const pacientes = [
  new Paciente("João Silva", 70, "1"),
  new Paciente("Maria Santos", 65, "2"),
  new Paciente("Pedro Oliveira", 80, "3"),
];


// TODO O CÓDIGO AQUI




// Alimentar o selector com os nomes dos pacientes
  const pacienteSelect = document.getElementById("paciente-select");
  pacientes.forEach((paciente) => {
    const option = document.createElement("option");
    option.value = paciente.id;
    option.textContent = paciente.nome;
    pacienteSelect.appendChild(option);
  });

