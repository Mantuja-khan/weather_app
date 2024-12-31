import { format } from 'date-fns';

export const formatDate = (date) => {
  try {
    return format(date, 'EEEE, MMMM do, yyyy');
  } catch (error) {
    console.error('Error formatting date:', error);
    return new Date().toLocaleDateString();
  }
};