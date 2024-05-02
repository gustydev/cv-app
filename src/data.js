const info = {
    name: 'John Doe',
    email: 'johndoe@fakemail.com',
    phone: '(01) 23456-7890',
    location: 'Antarctica'
}

const sections = [
    {
        id: 0,
        title: 'Education',
        dataIds: [0]
    },
    {
        id: 1,
        title: 'Professional experience',
        dataIds: [1, 2]
    }
];

const data = [
    {
        id: 0,
        title: 'University of Whatever',
        startDate: 'Apr. 2020',
        endDate: 'Apr. 2024',
        role: 'PHD in Maths',
        info: 'Learned a lot of equations!',
        location: 'At home'
    },
    {
        id: 1,
        title: 'Joe Accounting',
        startDate: 'May 2020',
        endDate: 'Current',
        role: 'Master Accountant',
        info: 'I account for all of the things, nothing gets past',
        location: 'New York City'
    },
    {
        id: 2,
        title: 'Joe Mama Restaurant',
        startDate: 'Today',
        endDate: 'Tomorrow',
        role: 'Master Chef',
        info: "Cooked mom's spaghetti",
        location: 'In your bedroom' 
    }
]

export { info, sections, data };