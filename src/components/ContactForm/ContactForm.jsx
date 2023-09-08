import { Component } from "react";
import { ButtonAddContact, FormStyled, Input, Label } from "./ContactForm.styled";


export class ContactForm extends Component {
    state = {
    name: '',
    number: ''
    }
    
    handleFormInput = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    };

    handleFormSubmit = evt => {
        evt.preventDefault();
        this.props.addContact(this.state);
        this.clearForm();
    }

    clearForm = () => {
        this.setState({ name: '', number: ''})
    }

render() {
    const { name, number } = this.state;
    return (
        <FormStyled onSubmit={this.handleFormSubmit}>
            <Label>Name
                <Input
                    onChange={this.handleFormInput}
                    value={this.state.name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </Label>
            <Label>Number
                <Input
                    onChange={this.handleFormInput}
                    value={this.state.number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </Label>
            <ButtonAddContact type="submit">Add contact</ButtonAddContact>
        </FormStyled>
        )
    }
}