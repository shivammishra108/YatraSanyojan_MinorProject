import React, { useState } from 'react';
import '../styles/policy.css';

const Policy = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="policy-page">
      <h1 className="policy-title">Our Policies</h1>

      <section className="policy-section">
        <h2>Cancellation Policy</h2>
        <p>
          We understand that plans can change. If you need to cancel your booking, you can do so up to 48 hours before your scheduled tour for a full refund.
          {expandedSection === 'cancellation' && (
            <span>
              <br />
              Cancellations made less than 48 hours in advance will incur a 50% charge. In case of a no-show, no refund will be provided. 
              We recommend purchasing travel insurance for added peace of mind. 
              Additionally, if your tour is canceled by us due to unforeseen circumstances, we will offer you a reschedule or a full refund.
              <br />
              <br />
              <b>Full Refund Period: </b>

                If you find it necessary to cancel your booking, you can do so without penalty by notifying us at least 48 hours
                 prior to the scheduled tour. A full refund will be issued to the original payment method within 7-10 business days. 
                 This policy allows you to make arrangements with peace of mind, knowing that you have the option to cancel should 
                 your circumstances change. <br />
                <b>Cancellation Within 48 Hours: </b>
                For cancellations made within 48 hours of the scheduled tour, a 50% cancellation fee will be applied.
                 This fee is in place to account for the resources allocated to your booking, including but not limited to staff scheduling,
                  equipment preparation, and potential losses incurred due to a last-minute cancellation. We encourage you to contact us
                   as soon as possible if you anticipate needing to cancel, as we may be able to offer alternative solutions. <br />
                <b>No-Show Policy: </b>
                In the unfortunate event of a no-show, no refund will be provided. It is essential that you inform us if you are unable to attend
                 your scheduled tour. No-shows can lead to significant operational challenges, affecting both our team and other customers 
                 who may wish to book the tour. Therefore, we urge you to communicate any changes in your plans. <br />
                <b>Travel Insurance Recommendation: </b>
                We strongly recommend that all our customers consider purchasing travel insurance. Travel insurance can provide coverage
                 for various unforeseen events, including illness, travel delays, or other emergencies that may require you to cancel your trip.
                  Having insurance can help ensure that you are protected financially in the event of an unexpected situation. <br />
                <b>Tour Cancellations by Us: </b>
                In the rare instance that we must cancel your tour due to unforeseen circumstances—such as severe weather, natural disasters,
                 or other events beyond our control—you will be promptly notified. In such cases, we will offer you the choice of rescheduling 
                 your tour or receiving a full refund. Your satisfaction and safety are our top priorities, and we strive to provide alternatives that meet your needs. <br />
                <b>Modification of Bookings: </b>
                If you wish to modify your booking rather than cancel it outright, please contact us. Depending on availability, we may be able to accommodate 
                changes to your booking without incurring additional fees. Modifications must be made at least 24 hours in advance of your scheduled tour to ensure
                 that we can fulfill your request. <br />
                <b>Group Bookings and Special Events: </b>
                For group bookings or special events, please be aware that different cancellation terms may apply. We recommend that you review your specific booking details or reach out to our 
                customer service team for guidance on cancellation and modification policies. <br />
                <b>Feedback and Assistance: </b>
                Your feedback is invaluable to us, and we welcome any comments or suggestions regarding our cancellation policy. If you have any questions or concerns,
                 please do not hesitate to contact our customer service team, who are available to assist you. We are committed to ensuring a positive experience 
                 for all our customers, and your input helps us continually improve our services. <br />
                 <br />
                Our Cancellation Policy is designed to be transparent and fair, providing you with the flexibility you need while also ensuring that 
                our operational commitments are met. We appreciate your understanding and cooperation.
            </span>
          )}
        </p>
        <button onClick={() => toggleSection('cancellation')} className="read-more-btn">
          {expandedSection === 'cancellation' ? 'Read Less' : 'Read More'}
        </button>
      </section>

      <div className="section-divider" />

      <section className="policy-section">
        <h2>Privacy Policy</h2>
        <p>
          Your privacy is of utmost importance to us. We collect only the necessary information to provide you with the best service possible.
          {expandedSection === 'privacy' && (
            <span>
              We do not share your personal information with third parties without your consent. 
              All data collected is securely stored and protected, and we use encryption to safeguard your information. 
              You have the right to request access to your data or request deletion at any time, and we will respond promptly to your requests.

              <br /><br />

                At <em>Yatra Sanyojan</em> , we are committed to protecting your privacy and ensuring that your personal information is handled with the utmost care. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or utilize our services.

                Information Collection

                We collect information from you when you visit our website, make a booking, subscribe to our newsletter, or interact with us in other ways. The types of information we may collect include:

                Personal Information: This may include your name, email address, phone number, billing address, and payment information. We collect this information to process your bookings and provide you with the services you request.

                Usage Data: We may also collect data about how you use our website, including your IP address, browser type, pages visited, and time spent on our site. This information helps us analyze user behavior and improve our website's functionality.

                Cookies: Our website uses cookies and similar tracking technologies to enhance your experience. Cookies are small data files that are placed on your device when you visit our site. You can control cookie preferences through your browser settings, but please note that disabling cookies may affect your ability to use certain features of our website.

                Use of Information

                We use the information we collect for various purposes, including:

                To process and manage your bookings.
                To communicate with you regarding your reservations, inquiries, and feedback.
                To send you promotional materials, newsletters, and updates about our services, unless you opt out of such communications.
                To analyze user behavior and improve our website and services based on user feedback.
                Data Sharing and Disclosure

                We understand the importance of your privacy and are committed to not sharing your personal information with third parties without your explicit consent, except in the following circumstances:

                Service Providers: We may share your information with third-party service providers who assist us in operating our website and conducting our business. These providers are required to maintain the confidentiality of your information and may only use it for the purposes specified in our agreements.

                Legal Compliance: We may disclose your information if required by law or in response to valid requests by public authorities, including subpoenas or court orders.

                Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that business transaction.

                Data Security

                We take the security of your personal information seriously and implement appropriate technical and organizational measures to protect it against unauthorized access, loss, or misuse. While we strive to safeguard your data, no transmission over the internet is entirely secure. Therefore, we cannot guarantee the absolute security of your information.

                Your Rights

                You have the following rights concerning your personal information:

                Access: You can request access to the personal information we hold about you.
                Correction: If you believe that any information we hold is inaccurate or incomplete, you can request correction.
                Deletion: You have the right to request the deletion of your personal information, subject to legal obligations.
                Objection: You may object to the processing of your personal information for direct marketing purposes.
                To exercise any of these rights, please contact us using the contact information provided below.

                Third-Party Links

                Our website may contain links to third-party websites that are not operated by us. We have no control over the content and practices of these sites and are not responsible for their privacy policies. We encourage you to review the privacy policies of any third-party sites you visit.

                Children's Privacy

                Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under this age. If we become aware that we have collected personal information from a child under 16, we will take steps to delete that information promptly.

                Changes to This Privacy Policy

                We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you of significant changes via email or through a prominent notice on our website. We encourage you to review this policy periodically to stay informed about how we are protecting your information.

                Thank you for trusting Yatra Sanyojan with your personal information. We are dedicated to ensuring your privacy and providing you with exceptional service.


            </span>
          )}
        </p>
        <button onClick={() => toggleSection('privacy')} className="read-more-btn">
          {expandedSection === 'privacy' ? 'Read Less' : 'Read More'}
        </button>
      </section>

      <div className="section-divider" />

      <section className="policy-section">
        <h2>Terms and Conditions</h2>
        <p>
          By using our services, you agree to comply with our terms and conditions. If you do not agree, please refrain from using our services. 
          {expandedSection === 'terms' && (
            <span>
              All bookings are subject to availability, and we reserve the right to cancel or modify tours due to unforeseen circumstances. 
              Participants are responsible for their own safety and belongings during tours. 
              Please ensure that you arrive at the meeting point at least 15 minutes early. 
              Additionally, we may use photos and videos taken during tours for promotional purposes unless you inform us otherwise.

              <br /> <br />

                Acceptance of Terms

                By making a booking or using our services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. We reserve the right to modify these terms at any time, and your continued use of our services constitutes acceptance of those changes.

                Booking and Payment

                All bookings are subject to availability. You must provide accurate and complete information when making a reservation. A valid payment method is required to confirm your booking. Full payment may be required at the time of booking or as specified in your reservation details.

                Changes to Your Booking

                If you need to modify your booking, please contact us as soon as possible. Depending on availability, we will do our best to accommodate your request. Changes made within 24 hours of your scheduled tour may incur additional fees.

                Responsibilities of Participants

                As a participant in our tours, you agree to:

                Arrive at the designated meeting point at least 15 minutes prior to the scheduled start time.
                Follow all safety instructions and guidelines provided by our staff.
                Take responsibility for your own safety and the safety of your personal belongings during the tour.
                Conduct yourself in a manner that is respectful to other participants, our staff, and the locations we visit.
                Cancellations and Refunds

                Refer to our Cancellation Policy for details regarding cancellations, refunds, and no-show policies. It is your responsibility to be aware of and comply with these policies.

                Liability Waiver

                By participating in our tours, you acknowledge that certain risks are inherent in travel and adventure activities. You agree to waive any claims against [Your Company Name], its employees, agents, and affiliates for any injury, loss, or damage incurred during the tour, including but not limited to personal injury, property damage, or loss of personal belongings.

                You understand that these activities may involve risks that could result in serious injury or death, including but not limited to:

                Risks associated with transportation to and from tour locations.
                Environmental hazards, including but not limited to weather conditions, terrain, and wildlife.
                Equipment malfunction or failure.
                You confirm that you are in good health and have no conditions that would prevent you from safely participating in our tours. If you are unsure about your physical condition, we recommend consulting a physician before participating.

                Indemnification

                You agree to indemnify and hold harmless [Your Company Name], its employees, agents, and affiliates from any claims, liabilities, damages, losses, or expenses arising out of or related to your participation in our tours, including any claims brought by third parties.

                Photography and Media Release

                During the course of our tours, photographs and videos may be taken for promotional purposes. By participating in our tours, you grant [Your Company Name] the right to use any images or videos that include your likeness in promotional materials, on our website, and on social media platforms without any compensation to you.

                If you do not wish to be photographed or recorded, please inform our staff before the start of the tour.

                Governing Law

                These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising out of or related to these terms shall be resolved in the competent courts of [Your Jurisdiction].

                Severability

                If any provision of these Terms and Conditions is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining provisions shall remain in full force and effect.

                Entire Agreement
                These Terms and Conditions constitute the entire agreement between you and [Your Company Name] regarding your use of our services, superseding any prior agreements between you and [Your Company Name].

                By registering on our website or booking your tour, you confirm that you have read and agreed to our Terms and Conditions, as well as our Privacy Policy.

            </span>
          )}
        </p>
        <button onClick={() => toggleSection('terms')} className="read-more-btn">
          {expandedSection === 'terms' ? 'Read Less' : 'Read More'}
        </button>
      </section>

      <div className="section-divider" />
      
      <p className="agreement-notice">
        *By registering on our website or booking your tour, you agree to our Terms and have read our policy.
      </p>
    </div>
    
  );
};

export default Policy;
