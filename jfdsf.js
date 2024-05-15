let successful = []

let unSuccessful = []

let taxes = 0

let taxesMax = {}

let taxesMin = {}

let bank = [

    {

        name: 'Apple',

        budget: 1000000,

        tax: 28,

        expensesPerYear: [

            { title: 'Salaries', total: 125000 },

            { title: 'Utilites', total: 18000, },

            { title: 'Rent', total: 258000 }

        ]

    },

    {

        name: 'Microsoft',

        budget: 988000,

        tax: 21,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 148000

            },

            {

                title: 'Utilites',

                total: 124000,

            },

            {

                title: 'Rent',

                total: 314000

            }

        ]

    },

    {

        name: 'HP',

        budget: 609000,

        tax: 14,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 414000

            },

            {

                title: 'Utilites',

                total: 19000,

            },

            {

                title: 'Rent',

                total: 114400

            }

        ]

    },

    {

        name: 'Xiomi',

        budget: 889500,

        tax: 17,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 318000

            },

            {

                title: 'Utilites',

                total: 14000,

            },

            {

                title: 'Rent',

                total: 169000

            }

        ]

    },

    {

        name: 'Samsung',

        budget: 889500,

        tax: 12,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 650400

            },

            {

                title: 'Utilites',

                total: 29000,

            },

            {

                title: 'Rent',

                total: 212000

            }

        ]

    },

]


const setup = () => {
    bank.forEach((company)=>{
        const monthlyExpenses = 
        company.expensesPerYear.reduce((acc, expense) => acc + expense.total / 12, 0);
        company.expensesPerMonth = monthlyExpenses;
        company.percent = (monthlyExpenses/ company.budget) * 100
    
        const totalTaxes = company.tax * company.budget / 100
        taxes +=totalTaxes

        if(company.budget-monthlyExpenses-totalTaxes>=0){
            successful.push(company)
        }else{
            unSuccessful.push(company)
        }

        if(!taxesMax || totalTaxes > taxesMax.tax){
            taxesMax = { company: company.name, 
                tax: totalTaxes
            }    
        }
        if(!taxesMin || totalTaxes > taxesMin.tax){
            taxesMin = { company: company.name, 
                tax: totalTaxes
            }    
        }
        company.totalMoney = company.budget - monthlyExpenses -totalTaxes;
    })
};


setup()