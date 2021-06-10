import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useQuery from '../hooks/query';

const FormComponent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [divText, setDivText] = useState('');

    const query = useQuery();

    const fNameFromURL = query.get('fname');
    const lNameFromURL = query.get('lname');

    const onSubmit = ({ fName, lName }) => {
        setDivText(`your first name is: ${fName}
      your last name is: ${lName}
      `);
    };

    return (
        <>
            <form
                className="input-group mb-3"
                onSubmit={handleSubmit(onSubmit)}
                action="/action_page.php"
            >
                <label className="input-group-text" htmlFor="fname">
                    First name:
                </label>
                <input
                    className="form-control"
                    type="text"
                    name="fname"
                    {...register('fName', { required: true })}
                    defaultValue={fNameFromURL || ''}
                />
                <label className="input-group-text" htmlFor="lname">
                    Last name:
                </label>
                {errors.fName && (
                    <p className="input-group-text">First Name is required</p>
                )}

                <input
                    className="form-control"
                    type="text"
                    name="lname"
                    {...register('lName', { required: true })}
                    defaultValue={lNameFromURL || ''}
                />
                {errors.lName && (
                    <p className="input-group-text">Last Name is required</p>
                )}

                <button className="btn btn-primary" type="submit">
                    Submit
                </button>
            </form>
            {divText && <div>{divText}</div>}
        </>
    );
};

export default FormComponent;
