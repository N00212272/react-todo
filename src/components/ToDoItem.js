import { ListGroupItem } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

const ToDoItem = (props) => {
    return (
        <ListGroup.Item>
            {(props.todo.done) ? (
                <>
                    <span className='done'>{props.todo.text}</span>
                    <span className = 'float-end'>&#128077;</span>
                    <span className ='float-start' onClick={() => {props.deleteTask(props.todo.id)}}>&#9932;</span>
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
        </ListGroup.Item>
    );
};

export default ToDoItem;