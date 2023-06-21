import { useLocation } from "react-router-dom";
import { ContactInfoModel } from "../models";
import { useForm } from "react-hook-form";

const ContactUsForm = () => {

    const locationState: { state: ContactInfoModel } = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = function (val: any) {
        console.log(val, 'submission');
        
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <div>
                <label htmlFor="email">Email</label>
                <input defaultValue={locationState.state.email} id="email" {...register("email", { required: 'This field is required', pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
                {errors.email?.message && errors.email.type === 'required' && <div>{errors.email.message.toString()}</div>}
                {errors.email?.message && errors.email.type === 'pattern' && <div>Invalid email</div>}
            </div>

            <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" {...register("message", { required: true })}></textarea>
                {errors.message && <div>This field is required</div>}
            </div>

            <button type="submit">Submit</button>
        </form>

    )
}

export default ContactUsForm;