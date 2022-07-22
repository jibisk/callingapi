import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';

export default function HookForm() {
  const {control, register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  
  // const options = [
  //   { value: 'Male', label: 'Male' },
  //   { value: 'Female', label: 'Female' }
  // ]
  const registerOptions = {
    // ...
    gender: { required: "gender is required" }
  };
  return (


    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input type="text" className="form-control" {...register("firstName", { required: true })} />
        <span className="text-danger"> {errors.firstName?.type === 'required' && "First name is required"}</span>
      </div>
      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input type="text" className="form-control" {...register("lastName", { required: true })} />
        <span className="text-danger">{errors.lastName && <span>Last name is required</span>}</span>
      </div>
      <div className="mb-3">
        <label className="form-label">Middle Name</label>
        <input type="text" className="form-control" {...register("middleName")} />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" {...register("mail", { required: "Email Address is required",  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })} />
        <span className="text-danger">{errors.mail?.message} {errors.mail?.type === 'pattern' && "Valid Email required"}</span>
      </div>
      <div className="mb-3">
        <label className="form-label">Gender</label>
        {/* <select {...register("gender", { required: true })}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select> */}
        <Controller
        name="gender"
        control={control}
        rules={registerOptions.gender}
        render={({ field }) => <Select 
          {...field} 
          options={[
              { value: 'Male', label: 'Male' },
              { value: 'Female', label: 'Female' }
          ]} 
        />}
      />
        <span className="text-danger"> {errors?.gender && errors.gender.message}</span>
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-success" >Submit</button>
      </div>
    </form>
  );
}