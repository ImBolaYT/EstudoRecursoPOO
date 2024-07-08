const personalInfo = {
    name: 'Daniel Machado',
    address: 'Matosas',
    birthday: '29/10/2002',
    contacts: {
        phone: '91 123 45 67',
        email: 'bola@gmail.com'
    },
    profession: 'Istudantes'
};

console.log(personalInfo);

const footballInfo = {
    team1: 'Porto',
    team2: 'Benfica',
    stadium: 'Estádio do Dragão',
    date: '10/09/2026',
    time: '20:00',
    goals: [
        {
            team: 'Porto',
            player: 'Ronaldinho',
            time: '20:52',
        },
        {
            team: 'Porto',
            player: 'Pedro Guedes',
            time: '61:45',
        },
        {
            team: 'Porto',
            player: 'João Neves',
            time: '91:58',
        },
    ],
    score() {
        // method not implemented
        return true;
    },
};

console.log(footballInfo);