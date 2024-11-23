import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" style={{ color: '#6a1b9a', fontWeight: 'bold' }}>
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1" style={{ color: '#6a1b9a' }}>
          Greaps Genix IT Solutions
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography variant="h6" style={{ color: '#4a148c', fontWeight: 'bold' }}>
          1. Introduction
        </Typography>
        <Typography variant="body1" style={{ color: '#4a148c' }}>
          At Greaps Genix, we are committed to safeguarding the privacy of our users and clients.
          This policy outlines how we collect, use, and protect personal information in compliance
          with applicable data protection laws. We believe that transparency is key to building trust
          with our users, and we encourage you to read this policy carefully.
        </Typography>
        <Typography variant="body1" style={{ color: '#4a148c' }}>
          Your privacy is important to us, and we take it seriously. We understand that you may have
          concerns about how your personal information is handled, and we want to assure you that we
          are dedicated to protecting your data.
        </Typography>
        <Typography variant="body1" style={{ color: '#4a148c' }}>
          This policy is designed to inform you about our practices regarding the collection, use, and
          disclosure of information that you may provide to us. We encourage you to review this policy
          periodically to stay informed about our privacy practices.
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography variant="h6" style={{ color: '#4a148c', fontWeight: 'bold' }}>
          2. Information We Collect
        </Typography>
        <Typography variant="body1" style={{ color: '#4a148c' }}>
          We may collect personal data including, but not limited to, name, contact details, and 
          technical data such as IP addresses and cookies. This helps us provide and improve our services.
          Additionally, we may gather information about your preferences and usage patterns to enhance your experience.
        </Typography>
        <Typography variant="body1" style={{ color: '#4a148c' }}>
          The types of information we collect may vary depending on your interactions with us. For example,
          if you sign up for our services, we will collect the information necessary to create your account.
        </Typography>
        <Typography variant="body1" style={{ color: '#4a148c' }}>
          We may also collect information from third-party sources to enhance our understanding of our users
          and improve our services. This information is used in accordance with this privacy policy.
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography variant="h6" style={{ color: '#4a148c', fontWeight: 'bold' }}>
          3. Use of Information
        </Typography>
        <Typography variant="body1" style={{ color: '#4a148c' }}>
          The information collected is used to offer better services, improve user experience, 
          and comply with legal requirements. We do not sell or share personal data with third parties
          without consent. Furthermore, we may use your information to communicate with you about updates,
          promotions, and other relevant information.
        </Typography>
        <Typography variant="body1" style={{ color: '#4a148c' }}>
          We may also use your information for research and analysis purposes to better understand our users
          and improve our offerings. This helps us tailor our services to meet your needs more effectively.
        </Typography>
        <Typography variant="body1" style={{ color: '#4a148c' }}>
          Your information may also be used to send you newsletters, marketing materials, and other information
          that may be of interest to you. You can opt-out of receiving these communications at any time.
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography variant="h6" style={{ color: '#4a148c', fontWeight: 'bold' }}>
          4. Data Security
        </Typography>
        <Typography variant="body1" style={{ color: '#4a148c' }}>
          We employ the latest security measures to protect data from unauthorized access, alteration, 
          or disclosure. Your privacy is of paramount importance to us. We regularly review our security practices
          to ensure that your information remains safe and secure.
        </Typography>
        <Typography variant="body1" style={{ color: '#4a148c' }}>
          We implement various security measures, including encryption, firewalls, and secure server environments,
          to protect your personal information. However, no method of transmission over the internet or method
          of electronic storage is 100% secure, and we cannot guarantee its absolute security.
        </Typography>
        <Typography variant="body1" style={{ color: '#4a148c' }}>
          We encourage you to take precautions to protect your personal information when you are on the internet.
          This includes using strong passwords and being cautious about sharing your information with others.
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography variant="h6" style={{ color: '#4a148c', fontWeight: 'bold' }}>
          5. Your Rights
        </Typography>
        <Typography variant="body1" style={{ color: '#4a148c' }}>
          You have the right to access, update, or delete your personal information at any time. 
          Contact us at privacy@greapsgenix.com to exercise these rights. We are committed to responding
          to your requests in a timely manner and ensuring that your rights are respected.
        </Typography>
        <Typography variant="body1" style={{ color: '#4a148c' }}>
          Additionally, you have the right to request that we restrict the processing of your personal data
          under certain circumstances. You may also have the right to data portability, allowing you to obtain
          and reuse your personal data for your own purposes across different services.
        </Typography>
        <Typography variant="body1" style={{ color: '#4a148c' }}>
          If you believe that your rights have been violated, you have the right to lodge a complaint with
          the relevant supervisory authority. We take such complaints seriously and will work to address
          any concerns you may have.
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography variant="h6" style={{ color: '#4a148c', fontWeight: 'bold' }}>
          6. Changes to Policy
        </Typography>
        <Typography variant="body1" style={{ color: '#4a148c' }}>
          We may update this policy from time to time. Please check our website regularly for the latest version.
          Any changes will be posted on this page, and we will notify you of significant changes via email or
          through a notice on our website. Your continued use of our services after any changes indicates your acceptance
          of the new policy.
        </Typography>
        <Typography variant="body1" style={{ color: '#4a148c' }}>
          We encourage you to review this policy periodically to stay informed about our practices and your rights.
          If you have any questions or concerns about this policy or our practices, please do not hesitate to contact us.
        </Typography>
      </Box>

      <Box textAlign="center" mt={4}>
        <Typography variant="subtitle2" style={{ color: '#6a1b9a' }}>
          © 2024 Greaps Genix. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
