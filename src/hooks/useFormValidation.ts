import { useState } from 'react';
import { z } from 'zod';

export const useFormValidation = <T extends Record<string, any>>(schema: z.ZodSchema<T>) => {
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const validate = (data: T): boolean => {
    try {
      schema.parse(data);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof T, string>> = {};
        error.errors.forEach((err) => {
          if (err.path.length > 0) {
            newErrors[err.path[0] as keyof T] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const clearErrors = () => setErrors({});

  return { errors, validate, clearErrors };
};