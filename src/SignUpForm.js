import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { boolean } from 'yup/lib/locale';

function SignUpForm() {
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      checkBox:false,
    },
    validationSchema: Yup.object({
      userName: Yup.string().required('Required').max(15, 'Must be 15 characters or less'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required').min(5,'Must be more than 5 characters'),
      checkBox: Yup.boolean().isTrue('Please check in box'),
    }),
    onSubmit: values => {
     console.log(values)
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mt-3">
    <label htmlFor="userName" className="form-label">Username</label>
    <input id="userName" className="form-control" name="userName" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.userName}/>
    {formik.touched.userName && formik.errors.userName ? ( <div>{formik.errors.userName}</div> ) : null}
    </div>
    
    <div className="mt-3">
    <label htmlFor="email" className="form-label">Email Address</label>
    <input id="email" className="form-control" name="email" type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
    {formik.touched.email && formik.errors.email ? ( <div>{formik.errors.email}</div> ) : null}
   </div>

    <div className="mt-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input id="password" className="form-control"  name="password" type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
    {formik.touched.password && formik.errors.password ? ( <div>{formik.errors.password}</div> ) : null}
</div>
   
    <div className="mt-3">
    <input id="checkBox" className="form-check-input me-3"  name="checkBox" type="checkbox" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.checkBox}/>
    <label htmlFor="checkBox" className="form-check-label">Agree to terms</label>
    {formik.touched.checkBox && formik.errors.checkBox? ( <div>{formik.errors.checkBox}</div> ) : null}
    </div>
    
     <div className="mt-3">
     <button type="submit" className="btn btn-primary">Submit</button>
     </div>
   
  </form>
  );
};

export default SignUpForm