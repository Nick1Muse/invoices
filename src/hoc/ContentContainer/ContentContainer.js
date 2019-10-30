import React, {Component} from 'react';
import classes from './ContentContainer.module.css';

export default class ContentContainer extends Component {
    render() {
        return (
            <div className={classes.ContentContainer}>
                {this.props.children}
            </div>
        )
    }
}
