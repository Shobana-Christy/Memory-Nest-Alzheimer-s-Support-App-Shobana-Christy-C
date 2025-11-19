import './pages.css'
import { Link } from 'react-router';
import { useEffect, useRef, useState } from 'react'
import FormItem from '../forms/FormItem';
import Input from '../forms/input/Input';
import InputErrorMessage from '../forms/input/InputErrorMessage';
import Button from '../common/Button';

let initialData = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
}

let errorMessage = {
    firstNameRequired: 'First name is required.',
    lastNameRequired: 'Last name is required.',
    emailRequired: 'Email is required.',
    messageRequired: "Message is required."
}

const ContactUsPage = () => {
    const [data, setData] = useState({ ...initialData });
    const [hasErrors, setHasErrors] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const isValid = () => {
        return data.firstName && data.lastName && data.email && data.message;
    };

    const handleDataChange = (ev) => {
        let updatedData = {
            ...data,
            [ev.target.id]: ev.target.value,
        };
        setData(updatedData);
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (!isValid()) {
            setHasErrors(true);
        } else {
            setHasErrors(false);
            setData({ ...initialData });
            alert("Thank you for contacting us!");
        }

    }


    return (
        <main>
            <div className="main-page-header">

                <div className='sub-nav'>
                    <Link to="/home" className='link'>Home</Link>
                </div>

                <h3>Contact Us</h3>

            </div>
            <table className='contactus-form-table'>
                <tr>
                    <td>
                        <FormItem>
                            <Input
                                id="firstName" label="First Name" value={data.firstName}
                                ref={inputRef}
                                required={true}
                                handleChange={handleDataChange}
                            />
                            <InputErrorMessage
                                hasError={hasErrors && data.firstName === ''}
                                msg={errorMessage['firstNameRequired']}
                            />
                        </FormItem>
                    </td>
                </tr>
                <tr>
                    <td>
                        <FormItem>
                            <Input
                                id="lastName" label="Last Name" value={data.lastName}
                                required={true}
                                handleChange={handleDataChange}
                            />
                            <InputErrorMessage
                                hasError={hasErrors && data.lastName === ''}
                                msg={errorMessage['lastNameRequired']}
                            />
                        </FormItem>
                    </td>
                </tr>
                <tr>
                    <td>
                        <FormItem>
                            <Input id="email" label="Email Address" type="email"
                                value={data.email}
                                required={true}
                                handleChange={handleDataChange}
                            />
                            <InputErrorMessage
                                hasError={hasErrors && data.email === ''}
                                msg={errorMessage['emailRequired']}
                            />
                        </FormItem>
                    </td>
                </tr>
                <tr>
                    <td>
                        <FormItem>
                            <textarea id="message" label="Message" type="message"
                                value={data.message}
                                required={true}
                                rows={5}
                                onChange={handleDataChange}
                            />
                            <InputErrorMessage
                                hasError={hasErrors && data.message === ''}
                                msg={errorMessage['messageRequired']}
                            />
                        </FormItem>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button id={"submit-conntact-form"} type="submit"
                            label='Submit' onClick={handleSubmit}>
                        </Button>
                    </td>
                </tr>
            </table>
        </main>
    )
}

export default ContactUsPage;