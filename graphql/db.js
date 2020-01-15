export const people =[
    {
        id: "0",
        name : "Nicolas",
        age: 18,
        gender: "female"
    },
    {
        id: "1",
        name:"Jisu",
        age: 18,
        gender:"female"
    },
    {
        id: "2",
        name:"Jjangu",
        age : 8,
        gender:"male"
    },
    {
        id: "3",
        name:"Ahri",
        age : 20,
        gender:"female"
    },
    {
        id: "4",
        name:"Lyn",
        age : 22,
        gender:"female"
    },
    {
        id: "5",
        name:"Harry",
        age : 25,
        gender:"male"
    }
];

export const getById = id => {
    const filteredPeple = people.filter(person => person.id === String(id));
    return filteredPeple[0]
}