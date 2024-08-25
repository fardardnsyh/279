import axios from 'axios';
import { findCategoryID } from './miscFunctions';

const url = 'http://127.0.0.1:8000/api/'
const token = localStorage.getItem('token')
const headers = {
    headers: {
        Authorization: 'Token ' + token
    }
}

export async function getLedgerItems (filters, categories) {
    if(filters.category) {
        const categoryId = findCategoryID(filters.category, categories)
        filters = { ...filters, 'category': categoryId }
    }
    const newUrl = (
        url + 'ledger/?startDate=' + filters.startDate + '&endDate=' +
        filters.endDate + '&category=' + filters.category + '&type=' +
        filters.type
    )
    const result = await axios.get(newUrl, headers);
    return result.data;
}

export async function createLedgerItem (fields) {
    fields.owner = 1;
    const result = await axios.post(url + 'ledger_items/', fields, headers)
    return result.data;
}

export async function deleteLedgerItem (id) {
    const result = await axios.delete(url + 'ledger_items/' + id + '/', headers)
    return result.data;
}

export async function getCategories () {
    const result = await axios.get(url + 'categories/', headers);
    return result.data;
}

export async function createCategory (fields) {
    fields.owner = 1;
    const result = await axios.post(url + 'categories/', fields, headers);
    return result.data;
}

export async function deleteCategory (id) {
    console.log('Requesting API...')
    const newUrl = url + 'categories/' + id + '/';
    await axios.delete(newUrl, headers);
}

export async function getBudgetItems (filters) {
    const newUrl = url + 'budget/?month=' + filters.month + '&year=' + filters.year;
    const result = await axios.get(newUrl, headers)
    return result.data;
}

export async function createBudgetItem (fields) {
    fields.owner = 1;
    const result = await axios.post(url + 'budget_items/', fields, headers)
    return result.data;
}

export async function deleteBudgetItem (id) {
    const newUrl = url + 'budget_items/' + id + '/';
    await axios.delete(newUrl, headers);
}

export async function patchBudgetItem (id, fields) {
    const result = await axios.patch(url + 'budget_items/' + id + '/', fields, headers)
    return result.data;
}

export async function registerNewUser (fields) {
    const result = await axios.post(url + 'registration/', fields)
    return result;
}

export async function loginUser (credentials) {
    try {
        const result = await axios.post(url + 'login/', credentials)
        return result
    } catch {
        return 'Invalid Credentials';
    }
}

export async function logoutUser () {
    const result = await axios.post(url + 'logout/')
    return result
}

export async function getMonthlyStats (period) {
    const newUrl = url + 'reports/monthly_stats/?month=' + period.month + '&year=' + period.year;
    const result = await axios.get(newUrl, headers)
    return result.data;
}

export async function getYearlyStats (year) {
    const newUrl = url + 'reports/yearly_stats/?year=' + year
    const result = await axios.get(newUrl, headers)
    return result.data;
}

export async function getCurrentExpenseChart (period) {
    const newUrl = url + 'reports/current_expense_chart/?month=' + period.month + '&year=' + period.year;
    const result = await axios.get(newUrl, headers)
    return result.data;
}

export async function getMonthlyExpenseChart (period) {
    const newUrl = url + 'reports/monthly_expense_chart/?month=' + period.month + '&year=' + period.year;
    const result = await axios.get(newUrl, headers)
    return result.data;
}

export async function getMonthlySavingsChart (period) {
    const newUrl = url + 'reports/monthly_savings_chart/?month=' + period.month + '&year=' + period.year;
    const result = await axios.get(newUrl, headers)
    return result.data;
}