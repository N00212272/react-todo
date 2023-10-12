import { ListGroupItem } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const ToDoItem = (props) => {
    return (
        <ListGroup.Item>
            {(props.todo.done) ? (
                <>
                    <span className='done'>{props.todo.text}</span>
                    <span className = 'float-end'>&#128077;</span>
                    <span className ='float-start' ></span>
                </>
            ) : (
                <>
                    {props.todo.text}
                    <Badge
                     pill
                     bg="success"
                     className="float-end"
                     onClick={() => {props.markAsDone(props.todo.id)}}>
                     &#10003;
                     </Badge>
                </>
            
            )}
            
            <Button onClick={() => props.deleteTask(props.todo.id)} variant='danger' className='float-start' >Delete</Button>
                
            
        </ListGroup.Item>
    
    );
   
};

export default ToDoItem;