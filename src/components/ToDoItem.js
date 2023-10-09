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
                </>
            ) : (
                <>
                    {props.todo.text}
                    <Badge
                     pill
                     bg="success"
                     className="float-end">
                     &#10003;
                     </Badge>
                </>
            
            )}
        </ListGroup.Item>
    );
};

export default ToDoItem;