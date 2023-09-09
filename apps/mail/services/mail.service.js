import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const EMAILS = [
    {
        id: 'e101',
        subject: 'Miss you!',
        body: `Would love to catch up sometime. It's been a while since we last connected, and I wanted to reach out and let you know how much I miss our conversations and time spent together. Life can get busy, and it's easy to lose touch, but the memories we've shared are still fresh in my mind.

                I remember all the laughter, the stories we've exchanged, and the support we've given each other. Those moments have left a lasting impact on me, and I cherish the friendship we've built.

                So, let's make plans to catch up soon. Whether it's over a cup of coffee, a video call, or a simple chat, I'd love to reconnect and hear about what's been happening in your life. There's so much to share, and I can't wait to hear your latest news and updates.

                Please let me know your availability, and we'll find a time that works for both of us. Until then, take care, and remember that you're always in my thoughts.

                Best wishes,
                [Your Name]`,
        isRead: true,
        sentAt: 1652519530000, // September 13, 2022
        removedAt: null,
        from: 'user@appsus.com',
        to: 'momo@momo.com',
        isMarked: false,
    },
    {
        id: 'e102',
        subject: 'Slack- new message',
        body: `New message in the group conversation with Stav Cohen and Risan Benichou - Coding Academy. Hello [User],

        You have a new message in the group conversation with Stav Cohen and Risan Benichou - Coding Academy. Click the link below to view the message and join the conversation:

        [Message Link]

        If you have any questions or need assistance, please don't hesitate to reach out.

        Best regards,
        [Company Name]`,
        isRead: false,
        sentAt: 1652433130000, // September 12, 2022
        removedAt: null,
        from: 'user@appsus.com',
        to: 'stav@momo.com',
        isMarked: false,
    },
    {
        id: 'e103',
        subject: 'Important Announcement',
        body: `Please be informed that our office will be closed on Friday for maintenance. Dear [User],

        We wanted to inform you about an important announcement regarding our office hours. This Friday, we will be closing our office for essential maintenance and upgrades. During this time, our services and operations will be temporarily unavailable.

        Our team will be working diligently to ensure that the maintenance process is completed as quickly as possible. We apologize for any inconvenience this may cause and appreciate your understanding as we strive to improve our facilities.

        If you have any urgent matters that require immediate attention, please reach out to our support team, and we will do our best to assist you remotely.

        We thank you for your patience and cooperation during this maintenance period. Regular office hours will resume on Monday, and we will be back to full operation.

        Best regards,
        [Company Name]`,
        isRead: true,
        sentAt: 1652346730000, // September 11, 2022
        removedAt: null,
        from: 'user@appsus.com',
        to: 'office@company.com',
        isMarked: false,
    },
    {
        id: 'e104',
        subject: 'Weekly Newsletter',
        body: `Check out our latest newsletter for updates and news! Hello [User],

        It's that time of the week again! Our latest newsletter is out, and we're excited to share it with you. In this week's edition, you'll find:

        - Exciting updates on our products and services
        - Featured articles and blog posts
        - Tips and tricks to make the most of our offerings
        - Customer success stories and testimonials

        We've packed this newsletter with valuable content to keep you informed and inspired. To read the full newsletter, simply click the link below:

        [Newsletter Link]

        We hope you enjoy reading it as much as we enjoyed putting it together. If you have any feedback or suggestions for future topics, please don't hesitate to reach out. Your input is valuable to us.

        Thank you for being a part of our community, and stay tuned for more exciting updates in the coming weeks.

        Best regards,
        [Company Name]`,
        isRead: false,
        sentAt: 1652260330000, // September 10, 2022
        removedAt: null,
        from: 'user@appsus.com',
        to: 'newsletter@company.com',
        isMarked: false,
    },
    {
        id: 'e105',
        subject: 'Invoice Due Reminder',
        body: `This is a reminder that your invoice is due in 3 days. Please make the payment. Dear [User],

        We hope this message finds you well. We wanted to remind you that your invoice (#[Invoice Number]) is due for payment in just 3 days. Please take a moment to review the invoice details and make the necessary arrangements for payment.

        Invoice Amount: $[Invoice Amount]
        Due Date: [Due Date]

        To make the payment, you can use one of the following methods:
        
        - Online payment through our secure portal (Link: [Payment Portal])
        - Bank transfer to the following account:
          Account Name: [Account Name]
          Account Number: [Account Number]
          Bank Name: [Bank Name]
          Bank Address: [Bank Address]

        Prompt payment will help ensure that your account remains in good standing, and you can continue to enjoy our products and services without interruption.

        If you have already made the payment, please disregard this reminder, and we thank you for your prompt response. If you have any questions or require assistance, please don't hesitate to contact our billing department.

        We appreciate your business and look forward to serving you in the future.

        Best regards,
        [Company Name]`,
        isRead: false,
        sentAt: 1652173930000, // September 9, 2022
        removedAt: null,
        from: 'user@appsus.com',
        to: 'billing@company.com',
        isMarked: false,
    },
    {
        id: 'e106',
        subject: 'Meeting Invitation',
        body: `You are invited to a team meeting scheduled for next Monday at 10 AM. Hello [User],

        We hope this message finds you well. We would like to invite you to an important team meeting scheduled for the upcoming Monday at 10 AM. This meeting will be an opportunity for our team to discuss [Meeting Agenda] and collaborate on [Meeting Purpose].

        Meeting Details:
        Date: [Meeting Date]
        Time: 10:00 AM
        Location: [Meeting Location]

        Your presence and input are highly valued, and your participation will contribute to the success of this meeting. Please RSVP at your earliest convenience to confirm your attendance.

        If you have any questions or require additional information about the meeting, please feel free to reach out to our team. We look forward to your participation and a productive discussion.

        Thank you for your commitment to our team's success, and we'll see you at the meeting.

        Best regards,
        [Company Name]`,
        isRead: true,
        sentAt: 1652087530000, // September 8, 2022
        removedAt: null,
        from: 'user@appsus.com',
        to: 'manager@company.com',
        isMarked: false,
    },
    {
        id: 'e107',
        subject: 'New Product Launch',
        body: `Our new product is now available. Check it out on our website! Hello [User],

        We are thrilled to announce the launch of our latest product, [Product Name]! After months of hard work and dedication, we are proud to bring you this innovative solution designed to [Product Benefits].

        Key Features:
        - [Feature 1]
        - [Feature 2]
        - [Feature 3]

        Whether you're a [Target Audience], [Product Name] has something to offer you. To explore the product in detail and discover how it can benefit you, simply visit our website:

        [Product Link]

        We believe that [Product Name] will revolutionize the way you [Product Usage], and we can't wait to hear your feedback. Your opinion matters to us, and we invite you to share your thoughts and experiences with us.

        Thank you for being a valued part of our community, and we look forward to your support and excitement surrounding the launch of [Product Name].

        Best regards,
        [Company Name]`,
        isRead: false,
        sentAt: 1652001130000, // September 7, 2022
        removedAt: null,
        from: 'user@appsus.com',
        to: 'marketing@company.com',
        isMarked: false,
    },
    {
        id: 'e108',
        subject: 'Job Application Status',
        body: `We are pleased to inform you that your job application has been approved. Dear [User],

        We hope this message finds you in good health and high spirits. We wanted to share some exciting news with you. After a thorough review of your job application for the position of [Job Title], we are pleased to inform you that your application has been approved.

        Congratulations!

        Your qualifications, skills, and experience align perfectly with what we are looking for, and we believe you will be a valuable addition to our team. We were impressed by [specific aspects of the application], and we can't wait to see you bring your talents to our organization.

        Next Steps:
        1. We will contact you soon to discuss the details of your employment, including your start date, compensation package, and other relevant information.
        2. If you have any questions or require further clarification at this stage, please don't hesitate to reach out to our HR department.
        3. Prepare for your exciting journey with us!

        We thank you for choosing [Company Name] as your next career destination, and we are confident that you will thrive in our dynamic and supportive work environment.

        Once again, congratulations on this achievement, and we look forward to welcoming you aboard.

        Best regards,
        [Company Name]`,
        isRead: true,
        sentAt: 1651914730000, // September 6, 2022
        removedAt: null,
        from: 'user@appsus.com',
        to: 'hr@company.com',
        isMarked: false,
    },
    {
        id: 'e109',
        subject: 'Holiday Greetings',
        body: `Wishing you a wonderful holiday season and a happy new year! Dear [User],

        As the holiday season approaches, we wanted to take a moment to send you our warmest greetings and best wishes. It's been a pleasure serving you throughout the year, and we appreciate your continued support and trust in [Company Name].

        The holiday season is a time for reflection, gratitude, and spending quality moments with loved ones. We hope you find joy, peace, and happiness during this special time of year.

        May the upcoming year bring you success, health, and prosperity. We look forward to continuing our journey with you and serving you in the best way possible.

        Thank you for being a part of our community, and from all of us at [Company Name], we wish you and your family a wonderful holiday season and a happy new year!

        Best regards,
        [Company Name]`,
        isRead: false,
        sentAt: 1651828330000, // September 5, 2022
        removedAt: null,
        from: 'user@appsus.com',
        to: 'ceo@company.com',
        isMarked: false,
    },
    {
        id: 'e110',
        subject: 'Product Feedback Request',
        body: `We value your opinion! Please take a moment to provide feedback on our products. Hello [User],

        At [Company Name], we are committed to continuously improving our products and services to better meet your needs. Your feedback is an invaluable part of this process, and we would like to invite you to share your thoughts and insights with us.

        Please take a moment to complete our brief feedback survey by clicking the link below:

        [Feedback Survey Link]

        Your responses will help us understand your experiences, preferences, and areas where we can enhance our offerings. We genuinely value your opinion, and your feedback will contribute to making our products even better.

        As a token of our appreciation, all participants who complete the survey will be entered into a drawing for a chance to win [Prize or Incentive]. Your participation is optional, and your responses will be kept confidential.

        Thank you for being a valued member of our community, and we look forward to hearing from you. Your feedback matters to us, and together, we can shape the future of [Company Name].

        Best regards,
        [Company Name]`,
        isRead: true,
        sentAt: 1651741930000, // September 4, 2022
        removedAt: null,
        from: 'feedback@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e111',
        subject: 'Promotion Alert',
        body: `Don't miss out on our special promotion this weekend! Hello [User],

        \r\nWe have an exciting announcement to kickstart your weekend! Starting this Friday, we are offering a special promotion that you won't want to miss. Whether you're looking for [Product Category] or [Service], now is the perfect time to make your purchase and enjoy incredible savings \n.

        Promotion Details: \n 
        - [Discount Percentage] off [Product/Service] \n
        - Free [Bonus Item/Service] with every purchase \n
        - Limited-time offer: [Promotion Dates]

        This is your opportunity to [Highlight Key Benefits]. Whether you've had your eye on a specific product or service or you simply want to take advantage of this fantastic deal, we're here to make your weekend even better.

        Visit our website or stop by our store to explore the full range of products and services available under this promotion. Our team is ready to assist you and ensure you get the most out of this offer.

        Don't let this opportunity pass you by. Join us this weekend and experience [Company Name]'s commitment to quality, affordability, and customer satisfaction.

        We look forward to serving you and helping you make the most of this exciting promotion. See you soon!

        Best regards,
        [Company Name]`,
        isRead: false,
        sentAt: 1651655530000, // September 3, 2022
        removedAt: null,
        from: 'marketing@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e112',
        subject: 'Feedback Request',
        body: `We would appreciate your feedback on our recent customer service interaction. Hello [User],

        We hope this message finds you well. At [Company Name], we are dedicated to providing the highest level of customer service, and your feedback plays a crucial role in helping us achieve that goal.

        Recently, you interacted with our customer service team, and we would like to hear about your experience. Your insights will help us understand what we are doing well and where we can make improvements.

        Please take a moment to complete our brief feedback survey by clicking the link below:

        [Feedback Survey Link]

        Your responses will remain confidential, and your input will be used to enhance our customer service processes. As a token of our appreciation, all participants who complete the survey will be eligible for [Incentive or Offer].

        Thank you for taking the time to share your thoughts with us. Your feedback is valuable, and we are committed to continually improving our services based on your input.

        We look forward to hearing from you and serving you even better in the future. If you have any questions or need further assistance, please don't hesitate to reach out to our customer service team.

        Best regards,
        [Company Name]`,
        isRead: true,
        sentAt: 1651569130000, // September 2, 2022
        removedAt: null,
        from: 'customerservice@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e113',
        subject: 'Invitation to Webinar',
        body: `Join our upcoming webinar on the latest industry trends and best practices. Hello [User],

        We hope this message finds you well. We are excited to invite you to our upcoming webinar, where we will explore the latest industry trends and best practices in [Topic]. Whether you are a seasoned professional or new to the field, this webinar promises to be a valuable learning experience.

        Webinar Details:
        - Date: [Webinar Date]
        - Time: [Webinar Time]
        - Duration: [Webinar Duration]
        - Speaker: [Webinar Speaker]

        During the webinar, we will cover topics such as [Webinar Topics]. You will have the opportunity to gain insights, ask questions, and interact with industry experts. This is a fantastic chance to expand your knowledge and stay up-to-date with the latest developments in [Industry].

        To register for the webinar, simply click the link below and follow the instructions:

        [Webinar Registration Link]

        We encourage you to invite your colleagues and peers who may benefit from this webinar. The more, the merrier!

        If you have any questions or need further information, please don't hesitate to contact us. We are here to assist you and ensure you have a seamless webinar experience.

        Thank you for considering our invitation, and we look forward to your participation in this informative event. See you at the webinar!

        Best regards,
        [Company Name]`,
        isRead: false,
        sentAt: 1651482730000, // September 1, 2022
        removedAt: null,
        from: 'webinars@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e114',
        subject: 'Important Update',
        body: `We have made some important updates to our terms of service. Please review them. Hello [User],

        We hope this message finds you well. At [Company Name], we are committed to providing transparency and ensuring that our services meet the highest standards of quality and compliance.

        We have recently made some important updates to our Terms of Service, which govern your use of our platform. These updates are designed to better reflect our current practices, policies, and the evolving regulatory landscape.

        To review the updated Terms of Service, please click the link below:

        [Terms of Service Update Link]

        We encourage you to take a moment to familiarize yourself with these changes. Your continued use of our platform constitutes acceptance of these terms.

        If you have any questions or concerns about these updates, please do not hesitate to reach out to our support team. We are here to provide clarification and assistance as needed.

        Thank you for being a valued member of our community, and we appreciate your attention to these important updates. Your trust in [Company Name] is of the utmost importance to us.

        Best regards,
        [Company Name]`,
        isRead: false,
        sentAt: 1651396330000, // August 31, 2022
        removedAt: null,
        from: 'legal@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e115',
        subject: 'Account Security Alert',
        body: `Important: Your account security may be at risk. Hello [User],

        We take your account security seriously at [Company Name], and we want to ensure that your personal information remains protected. Our monitoring systems have detected some unusual activity on your account that may indicate a security risk.

        Suspicious Activity Details:
        - Date and Time: [Date and Time of Suspicious Activity]
        - Location: [Location of Suspicious Activity]
        - Type of Activity: [Type of Suspicious Activity]

        To safeguard your account, we recommend taking the following actions:
        1. Change your account password immediately by visiting [Password Change Link].
        2. Review your account settings and update any information that may have been tampered with.
        3. Enable two-factor authentication (2FA) for an added layer of security.
        4. If you did not initiate the suspicious activity, please contact our support team immediately to report the incident.

        Your account's security is our top priority, and we are here to assist you in securing it. If you have any questions or require further assistance, please do not hesitate to contact our support team.

        Thank you for your prompt attention to this matter, and we appreciate your trust in [Company Name].

        Best regards,
        [Company Name]`,
        isRead: true,
        sentAt: 1651309930000, // August 30, 2022
        removedAt: null,
        from: 'security@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e116',
        subject: 'New Project Proposal',
        body: 'We have a new project proposal that we\'d like your input on. Please review and provide feedback. Dear [User], We are excited to share a new project proposal with you. Your expertise and insights are highly valued, and we would appreciate your input on this initiative. Please find attached the project proposal document, which outlines the project scope, objectives, and anticipated outcomes. We invite you to review the proposal and provide your feedback, suggestions, and any questions you may have. Your contributions will play a significant role in shaping the direction of this project. Thank you for your collaboration, and we look forward to hearing from you soon.',
        isRead: true,
        sentAt: 1651223530000, // August 29, 2022
        removedAt: null,
        from: 'projectmanager@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e117',
        subject: 'Upcoming Training Session',
        body: 'You are invited to attend our upcoming training session on advanced coding techniques. Dear [User], We are pleased to invite you to our upcoming training session, where we will delve into advanced coding techniques and strategies. This session is designed for individuals who want to take their coding skills to the next level and stay at the forefront of industry trends. Whether you are a seasoned developer or just starting, this training will provide valuable insights and hands-on experience. Please RSVP by [RSVP Deadline] to secure your spot. We look forward to your participation and a productive learning experience.',
        isRead: false,
        sentAt: 1651133930594, // September 13, 2022
        removedAt: null,
        from: 'training@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e118',
        subject: 'New Project Kickoff Meeting',
        body: `Join us for the kickoff meeting of our exciting new project next week. Dear [User], We are thrilled to announce the kickoff meeting of our exciting new project, scheduled for [Date] at [Time]. Your presence and insights are invaluable as we embark on this journey. During the meeting, we will discuss project goals, timelines, and expectations. Please confirm your attendance, and if you have any specific topics or questions you'd like to address during the meeting, feel free to share them in advance. Your contributions will be instrumental in the success of this project. We look forward to working together and achieving great results.`,
        isRead: true,
        sentAt: 1651047530594, // September 12, 2022
        removedAt: null,
        from: 'projectmanager@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e120',
        subject: 'Product Release Notes',
        body: 'Check out the release notes for our latest product update. Exciting new features await! We are thrilled to introduce the latest update to our product. This release brings a host of new features and improvements designed to enhance your user experience. We have listened to your feedback and incorporated many of your suggestions into this release. Some of the highlights include [list of features]. We believe these enhancements will make your daily tasks easier and more enjoyable. To learn more about the changes and how to take advantage of them, please review the release notes attached to this email. Thank you for your continued support, and we hope you enjoy the new features!',
        isRead: true,
        sentAt: 1650874730594, // September 10, 2022
        removedAt: null,
        from: 'product@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e121',
        subject: 'Team Building Event',
        body: 'Join us for a fun team building event this Friday. Don\'t forget to RSVP! We are excited to invite you to our upcoming team building event, scheduled for this Friday. This event promises to be a day of fun, team bonding, and exciting activities. It\'s a great opportunity to get to know your colleagues better and strengthen our team dynamics. Please RSVP by [RSVP Deadline] to confirm your attendance. We look forward to seeing you there and making lasting memories together!',
        isRead: false,
        sentAt: 1650788330594, // September 9, 2022
        removedAt: null,
        from: 'teambuilding@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e122',
        subject: 'Last Chance Sale',
        body: 'Hurry! Our last chance sale ends tonight. Grab the best deals now! Time is running out! Our last chance sale, featuring incredible discounts and exclusive offers, ends tonight at midnight. Don\'t miss this final opportunity to score big savings on your favorite products. Whether you\'re looking for [list of products], now is the time to act. Click the link below to browse the sale and secure your purchases before it\'s too late. We appreciate your support and hope you enjoy the fantastic deals!',
        isRead: true,
        sentAt: 1650701930594, // September 8, 2022
        removedAt: 1650788330594, // September 9, 2022
        from: 'sales@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e123',
        subject: 'Important Security Update',
        body: 'We have detected a security vulnerability in your account. Take action immediately. Your online security is our top priority. We have recently detected a security vulnerability in your account that requires your immediate attention. To protect your account and personal information, we strongly recommend taking the following actions: 1. Change your account password immediately. 2. Review your recent account activity for any suspicious actions. 3. Enable two-factor authentication (2FA) for an added layer of security. If you need any assistance or have questions about securing your account, please don\'t hesitate to contact our dedicated security team. Thank you for your prompt action in safeguarding your account.',
        isRead: false,
        sentAt: 1650615530594, // September 7, 2022
        removedAt: 1650701930594, // September 8, 2022
        from: 'security@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e124',
        subject: 'Upcoming Webinar Reminder',
        body: `A friendly reminder about our upcoming webinar on digital marketing strategies. Hello [User], We hope this message finds you well. We wanted to remind you about our highly anticipated webinar on digital marketing strategies, scheduled for [Date] at [Time]. This webinar promises to be an insightful session where industry experts will share their knowledge and expertise in the field of digital marketing. Topics to be covered include [list of topics]. Whether you are a seasoned marketer or just starting in the digital landscape, this webinar is designed to provide valuable insights that can benefit your marketing efforts. To access the webinar, simply click on the link below at the specified time: [Webinar Link] If you haven't already registered, there's still time to secure your spot. We look forward to your participation and engaging discussions during the webinar. If you have any questions or need assistance, please don't hesitate to contact our team. Best regards, [Company Name]`,
        isRead: true,
        sentAt: 1650529130594, // September 6, 2022
        removedAt: 1650615530594, // September 7, 2022
        from: 'webinars@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e125',
        subject: 'Account Activation',
        body: 'Welcome to our platform! Click here to activate your account and get started. Dear [User], Welcome to [Company Name]! We are excited to have you as a new member of our platform. To get started and unlock the full potential of your account, please click on the activation link below: [Activation Link] By clicking this link, you will complete the registration process and gain access to all the features and benefits our platform offers. If you have any questions or encounter any issues during the activation process, our support team is ready to assist you. Thank you for choosing [Company Name], and we look forward to providing you with an exceptional experience. Best regards, [Company Name]',
        isRead: false,
        sentAt: 1650442730594, // September 5, 2022
        removedAt: 1650529130594, // September 6, 2022
        from: 'support@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e126',
        subject: 'Monthly Performance Report',
        body: 'Here is your monthly performance report for August 2022. Keep up the good work! Dear [User], We are pleased to provide you with your monthly performance report for August 2022. This report highlights your achievements, progress, and areas for improvement. We appreciate your dedication and hard work, and we want to keep you informed about your performance. Key metrics and accomplishments for this month include [list of achievements]. We encourage you to review this report and reflect on your progress. If you have any questions, require further insights, or would like to discuss your goals, please feel free to reach out to your account manager. We are here to support you in reaching your objectives. Thank you for being a valued part of [Company Name]. Keep up the great work! Best regards, [Company Name]',
        isRead: true,
        sentAt: 1650356330594, // September 4, 2022
        removedAt: 1650442730594, // September 5, 2022
        from: 'reports@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e127',
        subject: 'New Job Opening',
        body: `We have a new job opening that matches your skills. Apply now! Dear [User], We hope you're doing well. We are excited to inform you about a new job opening at [Company Name] that closely aligns with your skills and qualifications. Job Title: [Job Title] Location: [Location] We believe you would be an excellent fit for this position and would bring valuable contributions to our team. If you are interested in pursuing this opportunity, please submit your application by [Application Deadline]. To apply, visit our careers page and submit your resume and cover letter. If you have any questions or need further information about the role, feel free to contact our HR department. We look forward to reviewing your application and potentially welcoming you to our [Company Name] family. Best regards, [Company Name]`,
        isRead: false,
        sentAt: 1650269930594, // September 3, 2022
        removedAt: 1650356330594, // September 4, 2022
        from: 'hr@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e128',
        subject: 'Customer Satisfaction Survey',
        body: 'Your feedback matters! Please take a moment to complete our customer satisfaction survey. Dear [User], At [Company Name], we are committed to providing the best possible experience to our customers. Your feedback plays a crucial role in helping us achieve that goal. We invite you to take a few moments to complete our customer satisfaction survey. Your honest opinions and insights will help us identify areas where we excel and areas where we can improve. To access the survey, please click on the link below: [Survey Link] We appreciate your time and value your feedback. As a token of our appreciation, all survey participants will be entered into a drawing for a chance to win [Prize]. Thank you for being a valued member of the [Company Name] community. We look forward to hearing from you. Best regards, [Company Name]',
        isRead: true,
        sentAt: 1650183530594, // September 2, 2022
        removedAt: 1650269930594, // September 3, 2022
        from: 'feedback@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e129',
        subject: 'New Feature Announcement',
        body: `We are excited to announce a new feature coming to our platform. Stay tuned! Hello [User], Exciting news from [Company Name]! We are thrilled to announce a new feature that will enhance your experience on our platform. Our team has been hard at work to develop a feature that will [describe the new feature and its benefits]. We believe this addition will make your interactions with our platform even more convenient and efficient. The new feature is scheduled to launch on [Launch Date], so be sure to stay tuned for updates and instructions on how to use it. We can't wait to share this exciting development with you and receive your feedback. Thank you for being a valued member of our community. Best regards, [Company Name]`,
        isRead: false,
        sentAt: 1650097130594, // September 1, 2022
        removedAt: null, // September 2, 2022
        from: 'product@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e130',
        subject: 'Account Verification Required',
        body: 'To enhance security, please verify your email address by clicking the link below. Dear [User], At [Company Name], your online security is a top priority. We have detected that your email address ([User Email]) has not been verified. To enhance the security of your account and ensure that you receive important notifications and updates, we kindly request you to verify your email address by clicking on the link below: [Verification Link] This simple step will help us confirm the authenticity of your email address and provide you with a more secure online experience. If you did not create an account with [Company Name] or have any concerns about this verification request, please contact our support team immediately. Thank you for your cooperation in ensuring the security of your account. Best regards, [Company Name]',
        isRead: true,
        sentAt: null, // August 31, 2022
        removedAt: 1650097130594, // September 1, 2022
        from: 'security@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e131',
        subject: 'Product Update - Bug Fixes',
        body: `We've released an update with important bug fixes. Update your app now! Dear [User], We want to inform you about an important update for our [Product Name]. Our development team has been hard at work identifying and addressing various issues and bugs reported by users like you. We are pleased to announce that this update includes important bug fixes and enhancements to improve your overall experience with [Product Name]. To ensure that you are using the latest and most stable version of our app, we strongly recommend updating it as soon as possible. You can download the latest version from [Download Link]. If you have any questions or encounter any issues during the update process, please don't hesitate to reach out to our support team. Thank you for choosing [Product Name], and we appreciate your continued support. Best regards, [Company Name]`,
        isRead: false,
        sentAt: 1649924330594, // August 30, 2022
        removedAt: null, // August 31, 2022
        from: 'support@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e132',
        subject: 'Special Promotion - Limited Time Offer',
        body: `Don't miss out on our limited-time promotion. Save big on your next purchase! Hello [User], We have an exciting opportunity for you to save big on your next purchase with [Company Name]. For a limited time, we are offering exclusive discounts and special offers on a wide range of products and services. Whether you're shopping for [list of products], now is the perfect time to take advantage of these incredible deals. Our special promotion runs from [Start Date] to [End Date], so be sure to act quickly and make the most of these savings. To browse our selection and start saving, visit our website or visit our store today. Thank you for choosing [Company Name], and we look forward to serving you during this special promotion. Best regards, [Company Name]`,
        isRead: true,
        sentAt: 1649837930594, // August 29, 2022
        removedAt: null, // August 30, 2022
        from: 'sales@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e133',
        subject: 'Account Password Reset',
        body: `You've requested a password reset. Click here to reset your password. Dear [User], We have received your request to reset your account password. Your online security is important to us, and we take this request seriously. To initiate the password reset process, please click on the link below: [Password Reset Link] This link will direct you to a secure page where you can create a new password for your account. We recommend choosing a strong and unique password to enhance your account's security. If you did not initiate this request or have any concerns about your account's security, please contact our support team immediately. Thank you for entrusting us with your online security. Sincerely, [Company Name]`,
        isRead: false,
        sentAt: 1649751530594, // August 28, 2022
        removedAt: null, // August 29, 2022
        from: 'security@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e134',
        subject: 'Important Announcement - Service Downtime',
        body: 'Our service will undergo scheduled maintenance on Sunday. Apologies for any inconvenience. Dear [User], We want to inform you about scheduled maintenance for our services at [Company Name]. On [Date], our platform will undergo routine maintenance to ensure that we continue to deliver the best possible experience to our users. During this maintenance period, our services will be temporarily unavailable. We understand that this may cause some inconvenience, and we apologize for any disruption this may cause to your activities. Our team will work diligently to complete the maintenance as quickly as possible and minimize downtime. We appreciate your understanding and patience during this time. If you have any urgent concerns or questions, please feel free to contact our support team. Thank you for choosing [Company Name], and we look forward to providing you with an even more reliable service after this maintenance is complete. Best regards, [Company Name]',
        isRead: true,
        sentAt: 1649665130594, // August 27, 2022
        removedAt: null, // August 28, 2022
        from: 'support@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
    {
        id: 'e135',
        subject: 'Invitation to Annual Conference',
        body: 'You are cordially invited to our Annual Conference. Join us for a memorable event! Dear [User], We are thrilled to extend our warmest invitation to you for our Annual Conference at [Location] on [Date]. This event promises to be a memorable experience, filled with insightful sessions, networking opportunities, and the chance to connect with industry experts and fellow professionals. The Annual Conference will feature keynote speakers, workshops, and panel discussions on topics such as [list of conference topics]. Whether you are looking to expand your knowledge, build your professional network, or simply enjoy a day of learning and inspiration, our conference is the perfect opportunity. To RSVP and secure your spot, please visit our conference website and complete the registration process. If you have any questions or require further information, our dedicated conference team is here to assist you. We look forward to welcoming you to our Annual Conference and sharing this exceptional experience with you. Best regards, [Company Name]',
        isRead: false,
        sentAt: 1649578730594, // August 26, 2022
        removedAt: null, // August 27, 2022
        from: 'events@company.com',
        to: 'user@appsus.com',
        isMarked: false,
    },
]

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const EMAIL_KEY = 'emailDB'

_createEmails()

export const mailService = {
    query,
    get,
    put,
    getCountUnreadMessages,
    post,
    createEmail,
    isEmailsMark,
    removeEmails,
    setIsMarked,
    setAllEmailsMarked,
}

function createEmail(to, subject, body) {
    return {
        id: utilService.makeId(),
        subject,
        body,
        isRead: true,
        sentAt: Date.now(),
        removedAt: null,
        from: loggedinUser.email,
        to,
        isMarked: false,
    }
}

function query(filterBy) {
    return storageService.query(EMAIL_KEY).then(emails => {
        if (filterBy.isShowUnread) emails = emails.filter(email => email.isRead === false)
        if (filterBy.mailType === 'inbox') return emails.filter(email => email.from !== loggedinUser.email && !email.removedAt)
        if (filterBy.mailType === 'sent') return emails.filter(email => email.from === loggedinUser.email && !email.removedAt)
        if (filterBy.mailType === 'trash') return emails.filter(email => email.removedAt)
        if (filterBy.searchKey) return emails.filter(email => (email.body.toLowerCase().includes(filterBy.searchKey.toLowerCase()) || email.subject.toLowerCase().includes(filterBy.searchKey.toLowerCase())) && !email.removedAt)
    })
}

function get(emailId) {
    return storageService.get(EMAIL_KEY, emailId)
    // .then(email => {
    //     email = _setNextPrevCarId(email)
    //     return email
    // })
}

function post(email) {
    return storageService.post(EMAIL_KEY, email)
}

function getCountUnreadMessages() {
    return query({ mailType: 'inbox' }).then(emails => {
        return emails.filter(email => !email.isRead).length
    })
}

function put(email) {
    return storageService.put(EMAIL_KEY, email)
}

function _createEmails() {
    const emails = utilService.loadFromStorage(EMAIL_KEY)
    if (!emails || !emails.length) utilService.saveToStorage(EMAIL_KEY, EMAILS)
}

function isEmailsMark(emails) {
    const idx = emails.findIndex(email => {
        return email.isMarked === true
    })
    return (idx >= 0) ? true : false
}

function removeEmails() {
    return storageService.query(EMAIL_KEY).then(emails => {
        emails.forEach(email => {
            if (email.isMarked && !email.removedAt) email.removedAt = Date.now()
            if (email.isMarked && email.removedAt) { ////////////////////////////////////////////gettttttttttttttttttttttttttttt
                let emails = utilService.loadFromStorage(EMAIL_KEY)
                const idx = emails.findIndex(currEmail => currEmail.id === email.id)
                emails.splice(idx, 1)
                utilService.saveToStorage(EMAIL_KEY, emails)
            }
        })
    })
}

function setIsMarked(email, isMarked) {
    email.isMarked = isMarked
    return storageService.put(EMAIL_KEY, email)
}

function setAllEmailsMarked() {
    return storageService.query(EMAIL_KEY).then(emails => {
        emails.forEach(email => {
            email.isMarked = false
        })
        utilService.saveToStorage(EMAIL_KEY, emails)
    })
}