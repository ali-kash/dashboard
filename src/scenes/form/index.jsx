import { Box, Button, TextField } from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from '../../components/Header'

const Form = () => {
	const isNonMobile = useMediaQuery('(min-width:600px')

	const handleFormSubmit = (values) => {
		console.log(values)
	}

	return (
		<Box p='20px'>
			<Header title='CREATE USER' subtitle='Create a New User Profile' />

			<Formik
				onSubmit={handleFormSubmit}
				initialValues={initialValues}
				validationSchema={checkoutSchema}
			>
				{({
					values,
					errors,
					touched,
					handleBlur,
					handleChange,
					handleSubmit,
				}) => (
					<form onSubmit={handleSubmit}>
						<Box
							display='grid'
							gap='30px'
							gridTemplateColumns='repeat(4, minmax(0, 1fr))'
							sx={{
								'& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
							}}
						>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='First Name'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.firstName}
								name='firstName'
								error={!!touched.firstName && !!errors.firstName}
								helperText={touched.firstName && errors.firstName}
								sx={{ gridColumn: 'span 2' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='Last Name'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.lastName}
								name='lastName'
								error={!!touched.lastName && !!errors.lastName}
								helperText={touched.lastName && errors.lastName}
								sx={{ gridColumn: 'span 2' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='Email'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.email}
								name='email'
								error={!!touched.email && !!errors.email}
								helperText={touched.email && errors.email}
								sx={{ gridColumn: 'span 4' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='Contact Number'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.contact}
								name='contact'
								error={!!touched.contact && !!errors.contact}
								helperText={touched.contact && errors.contact}
								sx={{ gridColumn: 'span 4' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='Address 1'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.address1}
								name='address1'
								error={!!touched.address1 && !!errors.address1}
								helperText={touched.address1 && errors.address1}
								sx={{ gridColumn: 'span 4' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='Address 2'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.address2}
								name='address2'
								error={!!touched.address2 && !!errors.address2}
								helperText={touched.address2 && errors.address2}
								sx={{ gridColumn: 'span 4' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='City'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.city}
								name='city'
								error={!!touched.city && !!errors.city}
								helperText={touched.city && errors.city}
								sx={{ gridColumn: 'span 2' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='State'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.state}
								name='state'
								error={!!touched.state && !!errors.state}
								helperText={touched.state && errors.state}
								sx={{ gridColumn: 'span 1' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='Zip/Postal Code'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.zip}
								name='zip'
								error={!!touched.zip && !!errors.zip}
								helperText={touched.zip && errors.zip}
								sx={{ gridColumn: 'span 1' }}
							/>
						</Box>
						<Box display='flex' justifyContent='end' mt='20px'>
							<Button type='submit' color='secondary' variant='contained'>
								Create New User
							</Button>
						</Box>
					</form>
				)}
			</Formik>
		</Box>
	)
}

const phoneRegExp = /^\d{3}[ -]?\d{3}[ -]?\d{4}$/
const zipRegExp = /(^\d{5}$)|(^\d{5}-\d{4}$)/

const checkoutSchema = yup.object().shape({
	firstName: yup.string().required('required'),
	lastName: yup.string().required('required'),
	email: yup.string().email('invalid email').required('required'),
	contact: yup
		.string()
		.matches(phoneRegExp, 'Please enter a valid')
		.required('required'),
	address1: yup.string().required('required'),
	address2: yup.string(),
	city: yup.string().required('required'),
	state: yup.string().required('required'),
	zip: yup
		.string()
		.matches(zipRegExp, 'Please enter a valid')
		.required('required'),
})
const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	contact: '',
	address1: '',
	address2: '',
	city: '',
	state: '',
	zip: '',
}

export default Form
