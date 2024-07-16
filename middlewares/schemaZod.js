const { z } = require('zod');

const userSchema = z.object({
    email: z.string().email({ message: 'Email is required' }),
    password: z.string().min(6, 'Password must be at least 8 characters long'),
    first_name: z.string().min(1, 'First name is required'),
    last_name: z.string().min(1, 'Last name is required'),
    phone_number: z.string().min(1, 'Phone number is required'),
    address: z.string().min(1, 'Address is required'),
    nationality: z.string().min(1, 'Nationality is required'),
    birthdate: z.string().refine((value) => {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        return regex.test(value);
    }, { message: 'Birthdate must be in DD/MM/YYYY format' }),
    sex: z.enum(['male', 'female'], { message: 'Sex is required' }),
});


module.exports = {
    userSchema
}