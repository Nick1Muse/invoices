import React from 'react';
import classes from './Table.module.css';

const Table = props => {

    return (
        <table className={classes.fixed_header}>
            <thead>
            <tr>
                <th>Col 1</th>
                <th>Col 2</th>
                <th>Col 3</th>
                <th>Col 4</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>row 1-0</td>
                <td>row 1-1</td>
                <td>row 1-2</td>
                <td>row 1-3</td>
            </tr>
            <tr>
                <td>row 2-0</td>
                <td>row 2-1</td>
                <td>row 2-2</td>
                <td>row 2-3</td>
            </tr>
            <tr>
                <td>row 3-0</td>
                <td>row 3-1</td>
                <td>row 3-2</td>
                <td>row 3-3</td>
            </tr>
            <tr>
                <td>row 4-0</td>
                <td>row 4-1</td>
                <td>row 4-2</td>
                <td>row 4-3</td>
            </tr>
            <tr>
                <td>row 5-0</td>
                <td>row 5-1</td>
                <td>row 5-2</td>
                <td>row 5-3</td>
            </tr>
            <tr>
                <td>row 6-0</td>
                <td>row 6-1</td>
                <td>row 6-2</td>
                <td>row 6-3</td>
            </tr>
            <tr>
                <td>row 7-0</td>
                <td>row 7-1</td>
                <td>row 7-2</td>
                <td>row 7-3</td>
            </tr>
            </tbody>
        </table>
    )
}

export default Table
