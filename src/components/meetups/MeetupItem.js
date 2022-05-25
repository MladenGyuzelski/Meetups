import { Link } from 'react-router-dom';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card.js';


function MeetupItem(props) {
    return (
    
    <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>
                {props.title}
            </h3>
            <adress>
                {props.adress}
            </adress>
            <p>
                {props.description}
            </p>
        </div>
        <div className={classes.actions}>
    <button><Link to='/favorites' className={classes.actions} title='My Favorites'></Link></button>
    </div>
    </Card>
    </li>
)
};

export default MeetupItem;