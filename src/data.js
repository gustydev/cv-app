const initialSections = [
    {
        id: 0,
        title: 'Education',
        dataIds: [0]
    },
    {
        id: 1,
        title: 'Jobs',
        dataIds: [1, 2]
    }
];

const initialData = [
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

export { initialSections, initialData };