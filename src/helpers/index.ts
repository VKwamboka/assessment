import Joi, { ref } from 'joi'

export const RegisterUsers= Joi.object({
    name:Joi.string().required(),
    email:Joi.string().required().email().messages({
       'string.empty':' Please add an email',
       'string.email':'Not a Valid email'
   }),
   Password:Joi.string().required().pattern(new
        RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$')),

   ConfirmPassword:Joi.equal(ref('Password'))
})