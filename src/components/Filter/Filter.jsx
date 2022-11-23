import React from "react";
import { Label } from "./Filter.styled"
import { Input } from "../ContactsForm/ContactForm.styled"
import { useDispatch } from "react-redux"
import { setFilter } from "../../redux/filterSlice"


export const Filter = () => {
    const dispatch = useDispatch()
    
    const filterChangeHandler = (event) => {
        dispatch(setFilter(event.target.value))
}


    return <Label>
        Find contacts by name
        <Input
            type="text"
            name="filter"
            onChange={filterChangeHandler}
        />
        </Label>
}

