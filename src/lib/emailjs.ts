import emailjs from '@emailjs/browser';

let isInitialized = false;

function ensureInit() {
  if (!isInitialized) {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
    if (!publicKey) {
      throw new Error('Missing VITE_EMAILJS_PUBLIC_KEY');
    }
    console.log('EmailJS: Initializing with public key:', publicKey.substring(0, 10) + '...');
    emailjs.init(publicKey);
    isInitialized = true;
  }
}

export type SubmissionType = 'employer' | 'job_seeker';

export async function sendAdminEmail(type: SubmissionType, params: Record<string, any>) {
  console.log('EmailJS: Starting admin email send for type:', type);
  console.log('EmailJS: Params:', params);
  
  ensureInit();

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
  if (!serviceId) throw new Error('Missing VITE_EMAILJS_SERVICE_ID');

  const templateId = (type === 'employer')
    ? (import.meta.env.VITE_EMAILJS_TEMPLATE_ID_EMPLOYER as string | undefined)
    : (import.meta.env.VITE_EMAILJS_TEMPLATE_ID_JOBSEEKER as string | undefined);

  if (!templateId) {
    throw new Error('Missing EmailJS template id env var');
  }

  console.log('EmailJS: Service ID:', serviceId);
  console.log('EmailJS: Template ID:', templateId);

  // You should configure the EmailJS template to deliver to your admin inbox.
  // These params must match variables defined in the EmailJS template.
  const result = await emailjs.send(serviceId, templateId, params);
  console.log('EmailJS: Send result:', result);
  return result;
} 