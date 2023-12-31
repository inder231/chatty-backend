import Joi, { ObjectSchema } from 'joi';


const emailSchema: ObjectSchema = Joi.object().keys({
  email: Joi.string().required().messages({
    'string.base': 'Feild must be valid',
    'string.required': 'Feild must be valid',
    'string.email': 'Feild must be a valid email'
  })
});

const passwordSchema: ObjectSchema = Joi.object().keys({
  password: Joi.string().required().min(4).max(8).messages({
    'string.base': 'Password must of type string',
    'string.min': 'Password must be at least 4 characters',
    'string.max': 'Password must be at least 8 characters',
    'string.empty': 'Password must not be empty'
  }),
  confirmPassword: Joi.string().required().valid(Joi.ref('password')).messages({
    'any.only': 'Password should match',
    'any.required': 'Confirm password is a required field'
  })
});

export { emailSchema, passwordSchema };
