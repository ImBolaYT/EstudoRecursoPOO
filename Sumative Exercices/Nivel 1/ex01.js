const employeeManager = {
    // Array para armazenar os funcionários
    employees: [],

    // Método para adicionar um novo funcionário
    addEmployee: function(name, nif, salary, city, departments) {
        // Criar um novo objeto funcionário com as informações fornecidas
        const newEmployee = {
            name,
            nif,
            salary,
            city,
            departments
        };

        // Adicionar o novo funcionário ao array de funcionários
        this.employees.push(newEmployee);
    }
};