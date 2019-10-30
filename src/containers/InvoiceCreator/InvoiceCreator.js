import React, {Component} from 'react';
import classes from './InvoiceCreator.module.css';
import Title from '../../components/UI/Title/Title.js';
import ContentContainer from '../../hoc/ContentContainer/ContentContainer';
import Input from '../../components/UI/Form/Input';
import Button from '../../components/UI/Button/button';
import shortid from 'shortid';



export default class InvoiceCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormValid: false,
            formControls: {
                number: {
                    value: '',
                    type: 'text',
                    label: "Number: ",
                    errorMessage: "3 — min 6 — max",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 3,
                        maxLength: 6
                    }
                },
                invoiceDate: {
                    type: 'date',
                    required: true,
                    label: "Invoice Date: ",
                    value: `${new Date().toISOString().slice(0, 10)}`,
                    min: `${new Date().toISOString().slice(0, 10)}`,
                    max: '2033-12-31'
                },
                supplyDate: {
                    type: 'date',
                    required: true,
                    label: "Supply Date: ",
                    value: `${new Date().toISOString().slice(0, 10)}`,
                    min: `${new Date().toISOString().slice(0, 10)}`,
                    max: '2033-12-31'
                },
            },
            comment: {
                value: '',
                label: "Comment: ",
                errorMessage: "160 characters maximum",
            }
        };
        this.routeChange = this.routeChange.bind(this);
    };

    routeChange(path) {
        this.props.history.push(path);
    };


    validateControl = (value, validation) => {
        if (!validation) {
            return true
        }

        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        if (validation.maxLength) {
            isValid = value.length <= validation.maxLength && isValid
        }

        this.setState({
            isFormValid: isValid
        });

        return isValid
    };


    onChangeHandler = (event, controlName) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);
        formControls[controlName] = control;
        this.setState({
            formControls,
        });
        return control.valid
    };

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    label={control.label}
                    valid={control.valid}
                    touched={control.touched}
                    errorMessage={control.errorMessage}
                    shouldValidate={!!control.validation}
                    min={control.min}
                    max={control.max}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }



    onChangeComment = (event, commentControl) => {

        const comment = {...commentControl};
        comment.value = event.target.value;
        this.setState({
            comment
        });
    };

    async handleSubmit(event) {
        event.preventDefault();
        const invoice = {
            id: shortid.generate(),
            number: this.state.formControls.number.value,
            date_created: this.state.formControls.invoiceDate.value,
            date_supplied: this.state.formControls.supplyDate.value,
            comment: this.state.comment.value,
        };
        await fetch("http://localhost:4000/posts",
        {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(invoice)
        })

           .then((response) => response.json);
        this.routeChange("/");
    };



    render() {
        return (
            <div className={classes.InvoiceCreator}>
                <Title title="Create Invoice"/>
                <ContentContainer>
                    <form>
                        <div className={classes.inputContainer}>
                            {this.renderInputs()}
                        </div>
                        <div className={classes.container}>
                            <label htmlFor="1">{this.state.comment.label}</label>
                            <textarea onChange={event => this.onChangeComment(event, this.state.comment)} name="Comment"
                                      id="1" cols="10" rows="5" maxLength="160" value={this.state.comment.value}/>

                                <Button to="/" onClick={(event) => this.handleSubmit(event)}  disabled={!this.state.isFormValid}>
                                    Save
                                </Button>
                        </div>
                    </form>
                </ContentContainer>
            </div>

        )
    }
}
