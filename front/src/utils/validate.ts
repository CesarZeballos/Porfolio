import { IContact, IContactError } from "./interfaces";

export function validateContact(values: IContact): IContactError {
    let errors: IContactError = {} as IContactError;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.name) {
        errors.name = "Name is required.";
    }
    
    if (!values.email) {
        errors.email = "Email is required.";
    } else if (!emailRegex.test(values.email)) {
        errors.email = "Invalid email format.";
    }

    if (!values.message) {
        errors.message = "Message is required.";
    } else if (values.message.length > 500) {
        errors.message = "Message must be less than 500 characters.";
    }
    
    return errors
}