export const MONTH_OPTIONS = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December'
]

export function findCategoryID (categoryName, categories) {
    const category = categories.find((category) => category.name == categoryName)
    return category?.id;
}

export function categoryIsInCategories (categoryName, categories) {
    const array = categories.filter((category) => category.name == categoryName)
    return array.length > 0;    
}

export function compileBudgetCategoryNames (categories) {
    let options = compileCategoryNames(categories);
    options.push('Delete');
    return options;
}

export function compileCategoryNames (categories) {
    return categories.map((category) => category.name)
}

export function categoryIsInBudget (categoryName, budget) {
    const array = budget.filter((item) => item.category === categoryName);
    return array.length > 0;
}

export function refreshPage () {
    window.location.reload()
}

export function getCurrentPeriod () {
    return { month: getCurrentMonth(), year: getCurentYear() }
}

export function getCurrentMonth () {
    const currentDate = new Date();
    return currentDate.getMonth() + 1;
}

export function getCurentYear () {
    const currentDate = new Date();
    return currentDate.getFullYear();
}

export function cleanFilters (filters) {
    if(MONTH_OPTIONS.includes(filters.month)) {
        return { ...filters, 'month': convertMonthToDigit(filters.month)};
    } else {
        return filters;
    }
}
export function convertMonthToDigit (month) {
    return MONTH_OPTIONS.indexOf(month) + 1;
}

export function monthNumToName (monthNum) {
    return MONTH_OPTIONS[monthNum - 1];
}

export function getNewPeriod (period, direction) {
    if (direction === "next") {
        return getNextPeriod(period)
    } else if (direction === "prev") {
        return getPreviousPeriod(period)
    }
}
export function getPreviousPeriod (period) {
    if (period.month === 1) {
        return {month: 12, year: period.year}
    } else {
        return {month: period.month - 1, year: period.year}
    }
}

export function getNextPeriod (period) {
    if (period.month === 12) {
        return {month: 1, year: period.year}
    } else {
        return {month: period.month + 1, year: period.year}
    }
}