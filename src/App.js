import './App.css';
import Container from 'react-bootstrap/Container';
import { Button, Stack } from 'react-bootstrap';
import BudgetCard from './components /BudgetCard';
import AddBudgetModal from './AddBudgetModal';
import { useState } from 'react';
import { useBudgets } from './Contexts/BudgetContexts';

function App() {

  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const { budgets, getBudgetExpenses } = useBudgets()

  console.log(budgets)
  
  return (
  <>
  <Container className = "my-4">
    <Stack direction = "horizontal" gap = "3" className='me-auto'>
      <h1 className='me-auto'>BudgeIT</h1>
      <Button variant='outline-primary' onClick={() => setShowAddBudgetModal(true) }>Make a Budget</Button>
      <Button variant='outline-secondary'>Create Expense</Button>
    </Stack>
    <div style={{

      display: "grid", 
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "1rem", 
      alignItems: "flex-start"
        }}>
      My CRUD WEB APP
        { 
  budgets.map(budget => {
    console.log(budget)
    const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0)
    return (
      <BudgetCard 
        key = {budget.id}
        name = "{budget.name} "// Render budget.name
        amount = {amount} // Render budget.amount
        max = {budget.max} // Render budget.max
         
      />
    )
  })
}
        
           </div>
  </Container>
  <AddBudgetModal show = { showAddBudgetModal } onHide = {() => setShowAddBudgetModal(false)} ></AddBudgetModal>
  </>
  )
}

export default App;
