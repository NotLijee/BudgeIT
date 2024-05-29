import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hook/useLocalStorage";

const BudgetContexts = React.createContext()


export function useBudgets() {
    return useContext(BudgetContexts)

}



export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useLocalStorage("budgets", [])
    const [expenses, setExpenses] = useLocalStorage("expenses", [])

   function getBudgetExpenses(BudgetID){
        return expenses.filter(expense => expense.BudgetID === expense.budgetid)
   }
    function addExpense(description, amount, BudgetID){
        setExpenses(prevExpenses => {
            return [...prevExpenses, {id: uuidv4(), description, amount, BudgetID}]
        })
    }
    function addBudget(name, max){
    setBudgets(prevBudgets => {
        if (prevBudgets.find(budget => budget.name === name )) {
            return prevBudgets
        }
        return [...prevBudgets, {id: uuidv4(), name, max}]
    })
    }
    function deleteBudget({ id }){
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id)
        })
    }
    function deleteExpense({ id }){
        setExpenses(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id)
        } )
    }
    return <BudgetContexts.Provider value = {{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense
    }}>
        {children}
    </BudgetContexts.Provider>
}