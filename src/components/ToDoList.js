import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ToDoItem from './ToDoItem';
import {useState} from 'react'; 

const ToDoList = () => {

    let initialList = [
        {id:1,text:"Clean the gaff",done:true},
        {id:2,text:"Wash my feet",done:false},
        {id:3,text:"walk the dogs",done:false}
    ]

    const markAsDone = (id) => {
        const newList = list.map((item) => {
            if(item.id === true){
                return item;
            }
        });
        setList(newList);
    }

    const [list, setList] = useState(initialList);
    const [textInput, setTextInput] = useState("");

    let todoItems = list.map((item, index) => {
        return <ToDoItem key={index} markAsDone={markAsDone} todo={item} />
    });

   
    const handleTextInput = e => {
        setTextInput(e.target.value);
    }
    const addTodoItem = () => {
        let newTodo = {
            id:list[list.length -1].id +1,
            text:textInput,
            done:false
        };
        
        setList((prevList) => [...prevList,newTodo]);
        setTextInput("");
    }


    return(
      <Card>
        <Card.Header>To-Do List</Card.Header>
        <Card.Body>
            <ListGroup variant="flush">
            {todoItems}
            </ListGroup>
        </Card.Body>
        <Card.Footer>
            <input type="text" onChange={handleTextInput} value={textInput}/>
            <Button variant='primary' className='float-end' onClick={addTodoItem}>Add</Button>
        </Card.Footer>
      </Card>
    );
}

export default ToDoList;