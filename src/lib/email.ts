import nodemailer from 'nodemailer';
import { supabase } from './supabase';
import type { EmailLog } from './supabase';

// Email configuration
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Email templates
export const emailTemplates = {
  jobSeekerConfirmation: (name: string) => ({
    subject: 'Welcome to Hireside Chat - Your Profile is Active!',
    html: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #1062FF; font-size: 28px; margin-bottom: 10px;">Welcome to Hireside Chat!</h1>
          <p style="color: #6B7280; font-size: 16px;">Fast, human-first hiring</p>
        </div>
        
        <div style="background: #F9FAFB; padding: 30px; border-radius: 12px; margin-bottom: 30px;">
          <h2 style="color: #111827; font-size: 22px; margin-bottom: 15px;">Hi ${name},</h2>
          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Thank you for joining our talent network! Your profile is now active and we're excited to connect you with amazing opportunities.
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #FF7A00;">
            <h3 style="color: #111827; font-size: 18px; margin-bottom: 15px;">What happens next:</h3>
            <ul style="color: #374151; font-size: 14px; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">We'll review your profile and qualifications</li>
              <li style="margin-bottom: 8px;">You'll receive invitations to relevant hiring events</li>
              <li style="margin-bottom: 8px;">Get matched with employers in your industry</li>
              <li>Connect directly with hiring managers who are ready to hire</li>
            </ul>
          </div>
        </div>
        
        <div style="text-align: center; margin-bottom: 30px;">
          <a href="${process.env.FRONTEND_URL}" style="background: #1062FF; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block;">
            Visit Hireside Chat
          </a>
        </div>
        
        <div style="border-top: 1px solid #E5E7EB; padding-top: 20px; text-align: center;">
          <p style="color: #6B7280; font-size: 14px; margin-bottom: 10px;">
            Questions? Reply to this email or contact us at <a href="mailto:hello@hiresidechat.com" style="color: #1062FF;">hello@hiresidechat.com</a>
          </p>
          <p style="color: #9CA3AF; font-size: 12px;">
            © 2025 Hireside Chat. Making hiring human again.
          </p>
        </div>
      </div>
    `,
  }),

  employerConfirmation: (companyName: string, contactName: string) => ({
    subject: 'Your Hiring Event Request - Next Steps',
    html: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #1062FF; font-size: 28px; margin-bottom: 10px;">Thank You for Choosing Hireside Chat</h1>
          <p style="color: #6B7280; font-size: 16px;">Fast, human-first hiring</p>
        </div>
        
        <div style="background: #F9FAFB; padding: 30px; border-radius: 12px; margin-bottom: 30px;">
          <h2 style="color: #111827; font-size: 22px; margin-bottom: 15px;">Hi ${contactName},</h2>
          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Thank you for submitting your hiring requirements for ${companyName}. Our team will review your needs and contact you within 24 hours to schedule your first hiring event.
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #FF7A00;">
            <h3 style="color: #111827; font-size: 18px; margin-bottom: 15px;">What happens next:</h3>
            <ul style="color: #374151; font-size: 14px; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">Our team reviews your hiring requirements</li>
              <li style="margin-bottom: 8px;">We source and pre-qualify candidates</li>
              <li style="margin-bottom: 8px;">You'll receive event details and candidate profiles</li>
              <li>Connect with qualified talent in your live event</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #1062FF; color: white; padding: 20px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
          <h3 style="font-size: 18px; margin-bottom: 10px;">🎯 Expected Results</h3>
          <div style="display: flex; justify-content: space-around; margin-top: 15px;">
            <div style="text-align: center;">
              <div style="font-size: 24px; font-weight: bold;">4x</div>
              <div style="font-size: 12px; opacity: 0.9;">Faster Hiring</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 24px; font-weight: bold;">70%</div>
              <div style="font-size: 12px; opacity: 0.9;">Same-Day Offers</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 24px; font-weight: bold;">85%</div>
              <div style="font-size: 12px; opacity: 0.9;">Retention Rate</div>
            </div>
          </div>
        </div>
        
        <div style="border-top: 1px solid #E5E7EB; padding-top: 20px; text-align: center;">
          <p style="color: #6B7280; font-size: 14px; margin-bottom: 10px;">
            Questions? Contact us at <a href="mailto:hello@hiresidechat.com" style="color: #1062FF;">hello@hiresidechat.com</a> or call (555) 123-4567
          </p>
          <p style="color: #9CA3AF; font-size: 12px;">
            © 2025 Hireside Chat. Making hiring human again.
          </p>
        </div>
      </div>
    `,
  }),

  adminNotification: (type: 'job_seeker' | 'employer', data: any) => ({
    subject: `New ${type === 'job_seeker' ? 'Job Seeker' : 'Employer'} Lead - ${data.name || data.company_name}`,
    html: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #1062FF; font-size: 24px; margin-bottom: 20px;">
          New ${type === 'job_seeker' ? 'Job Seeker' : 'Employer'} Lead
        </h1>
        
        <div style="background: #F9FAFB; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          ${type === 'job_seeker' ? `
            <h3>Job Seeker Details:</h3>
            <p><strong>Name:</strong> ${data.full_name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Location:</strong> ${data.location}</p>
            <p><strong>Industry:</strong> ${data.industry}</p>
            <p><strong>Target Role:</strong> ${data.target_role}</p>
            <p><strong>Experience:</strong> ${data.experience_level}</p>
            <p><strong>Ready to Interview:</strong> ${data.ready_to_interview ? 'Yes' : 'No'}</p>
            ${data.skills ? `<p><strong>Skills:</strong> ${data.skills}</p>` : ''}
          ` : `
            <h3>Employer Details:</h3>
            <p><strong>Company:</strong> ${data.company_name}</p>
            <p><strong>Contact:</strong> ${data.contact_name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Industry:</strong> ${data.industry}</p>
            <p><strong>Position:</strong> ${data.position_title}</p>
            <p><strong>Positions Count:</strong> ${data.positions_count}</p>
            <p><strong>Urgency:</strong> ${data.urgency}</p>
            ${data.requirements ? `<p><strong>Requirements:</strong> ${data.requirements}</p>` : ''}
          `}
        </div>
        
        <p style="color: #6B7280; font-size: 14px;">
          Submitted at: ${new Date().toLocaleString()}
        </p>
      </div>
    `,
  }),
};

// Send email function
export async function sendEmail(
  to: string,
  template: { subject: string; html: string },
  emailType: string
): Promise<boolean> {
  let emailLogId: string | null = null;
  try {
    // Log email attempt
    const emailLog: Omit<EmailLog, 'id' | 'sent_at'> = {
      recipient_email: to,
      email_type: emailType,
      subject: template.subject,
      status: 'pending',
    };

    const { data: logData } = await supabase
      .from('email_logs')
      .insert(emailLog)
      .select()
      .single();

    emailLogId = logData?.id ?? null;

    // Send email
    await transporter.sendMail({
      from: `"Hireside Chat" <${process.env.EMAIL_USER}>`,
      to,
      subject: template.subject,
      html: template.html,
    });

    // Update log as sent
    if (emailLogId) {
      await supabase
        .from('email_logs')
        .update({ status: 'sent' })
        .eq('id', emailLogId);
    }

    return true;
  } catch (error) {
    console.error('Email send error:', error);
    
    // Update log as failed
    if (emailLogId) {
      await supabase
        .from('email_logs')
        .update({ 
          status: 'failed',
          error_message: error instanceof Error ? error.message : 'Unknown error'
        })
        .eq('id', emailLogId);
    }

    return false;
  }
}

// Send admin notification
export async function sendAdminNotification(type: 'job_seeker' | 'employer', data: any) {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) return false;

  const template = emailTemplates.adminNotification(type, data);
  return await sendEmail(adminEmail, template, `admin_${type}_notification`);
}