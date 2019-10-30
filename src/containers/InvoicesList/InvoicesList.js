import React, {Component} from 'react';
import classes from './InvoicesList.module.css';
import Button from '../../components/UI/Button/button';
import Title from '../../components/UI/Title/Title';
import ContentContainer from '../../hoc/ContentContainer/ContentContainer';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class InvoicesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            titles: [
                "Create",
                "Number",
                "Supply",
                "Comment",
            ],
            posts: []
        };
    }

    async componentDidMount() {
        try {
            const response = await axios.get("http://localhost:4000/posts");
            const posts = response.data;

            this.setState({
                posts: posts,
                isLoading: false
            })


        } catch (e) {
            console.log(e)
        }

    }

    render() {
        return (
            <div className={classes.InvoicesList}>
                <Title title="Invoices"/>
                <ContentContainer>
                    <h3>Actions</h3>
                    <Link to="/createInvoice">
                        <Button>
                            Add new
                        </Button>
                    </Link>
                </ContentContainer>
                <ContentContainer>
                    <h3>Invoices</h3>
                    {this.state.isLoading ? <p>Loading...</p> : <div className={classes.tableWrapper}>
                        <table>
                            <thead>
                            <tr>
                                {this.state.titles.map((title, index) => {
                                    return (
                                        <th className={classes.titleName} key={index}>{title}</th>
                                    )
                                })}
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.posts.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td> {item.date_created} </td>
                                        <td style={{color: "blue"}}> {item.number} </td>
                                        <td> {item.date_supplied} </td>
                                        <td> {item.comment} </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>}

                </ContentContainer>
            </div>
        )
    }
}
