import { Input } from "components/ContactForm/ContactForm.styled"

export const Filter = ({ inputFilter, filter }) => {
    return (
        <label>
            <p>Find contact by name</p>
            <Input
                name="filter"
                value={filter}
                type="text"
                placeholder="Search contacs"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                onChange={inputFilter}
            />
        </label>
    )
}