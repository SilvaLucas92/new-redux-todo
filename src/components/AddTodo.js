import { Button, Input, HStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addTask } from '../redux/todo/todo-actions';
const AddTodo = ({ addTask }) => {
        const [task, setNewTask] = useState('');
        const handleSubmit = (e) => {
            e.preventDefault();
            if(task) {
            const item = {
                id: new Date().getTime().toString(),
                task: task,
                complete: false
            };
            addTask(item)
            setNewTask('');
            }
        };
    return (
        <form onSubmit={ handleSubmit }>
            <HStack
            my={8}
            >
                <Input
                variant='filled'
                placeholder='Add a new Task'
                value={ task }
                my={10}
                size={{base:'lg'}}
                onChange={ (e) => { setNewTask(e.target.value) }}/>
                <Button
                px='5'
                colorScheme='blue'
                type='submit'
                size='lg'
                >
                Add
                </Button>
            </HStack>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (newTask) => dispatch(addTask(newTask)),
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);