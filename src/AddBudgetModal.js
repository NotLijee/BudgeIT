import React, { useRef, useState  } from 'react'
import { Modal, Form, Button, Stack, CloseButton  } from 'react-bootstrap'
import { useBudgets } from './Contexts/BudgetContexts'
// import { showAddBudgetModal, setShowAddBudgetModal } from './App.js'


export default function AddBudgetModal({ show, onHide }) {
    const nameRef = useRef()
    const maxRef = useRef()
    const { addBudget } = useBudgets()
    function handleSubmit(e) {
        e.preventDefault()
        addBudget({
        name: nameRef.current.value,
        max: parseFloat(maxRef.current.value),
        })
        onHide()
    }



    return (
    
    <Modal show = {show} onHide = { onHide } >
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
                        <Button variant='primary' type='submit'>Add</Button>
                    </div>
                </Modal.Body>
            </Modal.Header>
        </Form>

    </Modal>
  )
}
