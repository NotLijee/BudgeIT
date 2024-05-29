import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import { Button, Stack } from 'react-bootstrap';
import BudgetCard from './components /BudgetCard';
import AddBudgetModal from './AddBudgetModal';

function App() {
  return (
  <>
  <Container className = "my-4">
    <Stack direction = "horizontal" gap = "5" className='me-auto'>
      <h1 className='me-auto'>BudgeIT</h1>
      <Button variant='outline-primary'>Make a Budget</Button>
      <Button variant='outline-secondary'>Create Expense</Button>
    </Stack>
    <div style={{

      diplay: "grid", 
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "1rem", 
      alignItems: "flex-start"
        }}>bootstrap
      <BudgetCard name = "Entertainment" 
      amount = {600} 
      max = {1000} 
      gray >
        
      </BudgetCard>
           </div>
  </Container>
  <AddBudgetModal show ></AddBudgetModal>
  </>
  )
}

export default App;
