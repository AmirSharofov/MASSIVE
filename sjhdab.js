if(!taxesMin || totalTaxes > taxesMin.tax){
    taxesMin = { company: company.name, 
        tax: totalTaxes
    }    
}
company.totalMoney = company.budget - monthlyExpenses -totalTaxes;