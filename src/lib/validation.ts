import Joi from 'joi';

// Job Seeker validation schema
export const jobSeekerSchema = Joi.object({
  full_name: Joi.string().min(2).max(100).required().messages({
    'string.empty': 'Full name is required',
    'string.min': 'Full name must be at least 2 characters',
    'string.max': 'Full name cannot exceed 100 characters',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Please enter a valid email address',
    'string.empty': 'Email is required',
  }),
  phone: Joi.string().pattern(/^[\+]?[1-9][\d]{0,15}$/).required().messages({
    'string.pattern.base': 'Please enter a valid phone number',
    'string.empty': 'Phone number is required',
  }),
  location: Joi.string().min(2).max(100).required().messages({
    'string.empty': 'Location is required',
    'string.min': 'Location must be at least 2 characters',
  }),
  industry: Joi.string().valid('healthcare', 'logistics', 'trades', 'multiple').required().messages({
    'any.only': 'Please select a valid industry',
    'string.empty': 'Industry selection is required',
  }),
  target_role: Joi.string().min(2).max(100).required().messages({
    'string.empty': 'Target role is required',
    'string.min': 'Target role must be at least 2 characters',
  }),
  experience_level: Joi.string().valid('entry', 'mid', 'senior').required().messages({
    'any.only': 'Please select a valid experience level',
    'string.empty': 'Experience level is required',
  }),
  employment_type: Joi.string().valid('full-time', 'part-time', 'contract', 'flexible').required().messages({
    'any.only': 'Please select a valid employment type',
    'string.empty': 'Employment type is required',
  }),
  skills: Joi.string().max(500).optional().allow(''),
  ready_to_interview: Joi.boolean().default(true),
});

// Employer validation schema
export const employerSchema = Joi.object({
  company_name: Joi.string().min(2).max(100).required().messages({
    'string.empty': 'Company name is required',
    'string.min': 'Company name must be at least 2 characters',
  }),
  contact_name: Joi.string().min(2).max(100).required().messages({
    'string.empty': 'Contact name is required',
    'string.min': 'Contact name must be at least 2 characters',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Please enter a valid email address',
    'string.empty': 'Email is required',
  }),
  phone: Joi.string().pattern(/^[\+]?[1-9][\d]{0,15}$/).optional().allow(''),
  industry: Joi.string().valid('healthcare', 'logistics', 'trades', 'other').required().messages({
    'any.only': 'Please select a valid industry',
    'string.empty': 'Industry selection is required',
  }),
  position_title: Joi.string().min(2).max(100).required().messages({
    'string.empty': 'Position title is required',
    'string.min': 'Position title must be at least 2 characters',
  }),
  positions_count: Joi.string().valid('1-5', '6-10', '11-25', '25+').required().messages({
    'any.only': 'Please select number of positions',
    'string.empty': 'Number of positions is required',
  }),
  urgency: Joi.string().valid('immediate', 'soon', 'flexible').required().messages({
    'any.only': 'Please select urgency level',
    'string.empty': 'Urgency level is required',
  }),
  requirements: Joi.string().max(1000).optional().allow(''),
  event_format: Joi.string().valid('in-person', 'virtual', 'hybrid').optional().allow(''),
  preferred_day: Joi.string().optional().allow(''),
  preferred_time: Joi.string().optional().allow(''),
});

// Contact form validation schema
export const contactSchema = Joi.object({
  name: Joi.string().min(2).max(100).required().messages({
    'string.empty': 'Name is required',
    'string.min': 'Name must be at least 2 characters',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Please enter a valid email address',
    'string.empty': 'Email is required',
  }),
  company: Joi.string().max(100).optional().allow(''),
  message: Joi.string().min(10).max(1000).required().messages({
    'string.empty': 'Message is required',
    'string.min': 'Message must be at least 10 characters',
    'string.max': 'Message cannot exceed 1000 characters',
  }),
  submission_type: Joi.string().default('general'),
});

// Validation helper function
export function validateData<T>(schema: Joi.ObjectSchema<T>, data: unknown): { 
  isValid: boolean; 
  data?: T; 
  errors?: Record<string, string> 
} {
  const { error, value } = schema.validate(data, { abortEarly: false });
  
  if (error) {
    const errors: Record<string, string> = {};
    error.details.forEach((detail) => {
      if (detail.path.length > 0) {
        errors[detail.path[0] as string] = detail.message;
      }
    });
    return { isValid: false, errors };
  }
  
  return { isValid: true, data: value };
}