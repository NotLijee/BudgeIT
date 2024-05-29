import React, { useRef, useState  } from 'react'
import { Modal, Form, Button, Stack  } from 'react-bootstrap'
import { useBudgets } from './Contexts/BudgetContexts'




export default function AddBudgetModal({ show }) {
    const nameRef = useRef()
    const maxRef = useRef()
    const { addBudget } = useBudgets()
    const [isOpen, setIsOpen] = useState(show)
    const handleClose = () => setIsOpen(false)
    function handleSubmit(e) {
        e.preventDefault()
        addBudget({
        name: nameRef.current.value,
        max: parseFloat(maxRef.current.value),
        })
        handleClose()
    }
    return (

    <Modal show = {show} onHide = { handleClose } >
        <Form onSubmit= {handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title> New Budget </Modal.Title>
                <Modal.Body>
                    <Form.Group 
                    className='mb-3' 
                    controlId='name'>
                        <Form.Label className='my-4'> Name </Form.Label>
                        <Form.Control type = "text" required ref={nameRef} />
                    </Form.Group>
                    <Form.Group 
                    className='mb-3'
                    controlId='max'>
                        <Form.Label> Maximum Spend </Form.Label>
                        <Form.Control type = "number" required min = {0} step = {0.01} ref={maxRef} />
                    </Form.Group>
                    <div className='d-flex justify-content-end'>
                        <Stack direction = "horizontal" gap = "2">
                        <Button closeButton variant='secondary' class="close">Close</Button>
                        <Button variant='primary' type='submit'>Add</Button>
                        </Stack>
                    </div>
                </Modal.Body>
            </Modal.Header>
        </Form>

    </Modal>
  )
}
