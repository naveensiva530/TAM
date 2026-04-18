import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import "./TAM_FAQ.css"

function TAM_FAQ() {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const questions = [
        {
            id: 1,
            question: "1. What makes the No Qu Time & Attendance Management System truly stand out from other solutions?",
            answer: [
                "No Qu TAM is an attendance platform that offers multiple attendance marking methods— mobile app, biometric, and video-feed attendance, ultimately powered by AI automation, live location tracking, geo-fencing, and more.",
                "Our system integrates effortlessly with HRMS, payroll, and biometric hardware, bringing all attendance data into one real-time dashboard. Its flexible, scalable design gives growing organizations the accuracy and control they need, all within one intelligent platform."
            ]
        },
        {
            id: 2,
            question: "2. Does No Qu TAM support multiple attendance marking methods for different types of workforce?",
            answer: [
                "Yes. No Qu TAM offers diverse attendance options— AI face recognition, QR codes, RFID, mobile tap, biometric devices, and video-feed attendance, which ensures every workforce type can clock in and out through the method that suits your operational needs."
            ]
        },
        {
            id: 3,
            question: "3. Can we use our existing biometric devices with No Qu TAM?",
            answer: [
                "Yes. No Qu TAM supports API integration with most biometric devices, including eSSL, ZKTeco, and similar systems, which allows you to continue using your existing hardware seamlessly within the platform."
            ]
        },
        {
            id: 4,
            question: "4. Can we use No Qu TAM for a multi-branch environment?",
            answer: [
                "Yes. No Qu TAM is built for multi-branch setups.",
                "You can manage a full tree-based hierarchy— head office, regional offices, and individual branches, all from one centralized dashboard. Attendance, devices, and user roles stay perfectly organized across every location."
            ]
        },
        {
            id: 5,
            question: "5. Can we use our existing HRMS and payroll with No Qu TAM?",
            answer: [
                "Yes. No Qu TAM integrates smoothly with your existing HRMS and payroll systems. Our API-based setup ensures attendance data syncs accurately into your current HR processes without disrupting any structure you already follow."
            ]
        },
        {
            id: 6,
            question: "6. Does No Qu TAM include HRMS and payroll features?",
            answer: [
                "Yes. No Qu offers its own HRMS and payroll modules for businesses that prefer a complete, unified system."
            ]
        },
        {
            id: 7,
            question: "7. Is your system cloud-based, or can we host it on our own servers?",
            answer: [
                "Yes. No Qu TAM is a secure SaaS platform hosted on AWS Cloud.",
                "For enterprises needing private hosting, we support cloud customization, applicable only for organizations having large-scale setups with a minimum onboarded list of 10,000 employees."
            ]
        },
        {
            id: 8,
            question: "8. How does No Qu TAM support our organization in getting started?",
            answer: [
                "We offer multi-channel support including calls, WhatsApp, email, and chatbot. Our product support engineers assist with onboarding, virtual guidance, and on-site support in selected regions to ensure that you get the most out of No Qu TAM from day one.",
                
            ]
        },
        {
            id: 9,
            question: "9. How can I get a demo or trial of your system?",
            answer: [
                "You can easily request a demo or trial through our Contact page, or reach out to our sales team using the provided contact details. We'll schedule a personalized walkthrough based on your requirements.",
                "Call icon: +91 7401 600 600",
                "WhatsApp icon: +91 7401 600 600",
                "Email icon: support@noqu.in",
                "Chat icon:  link"
            ]
        },
        {
            id: 10,
            question: "10. Does No Qu TAM offer customization?",
            answer: [
                "No. No Qu TAM does not provide direct customizations. However, we welcome feature suggestions, and if a request is widely needed across clients, we may evaluate it for future updates. While considered, adoption is not guaranteed."
            ]
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleSelectQuestion = (id) => {
        setSelectedQuestion(selectedQuestion === id ? null : id);
    };

    return (
        <>
            <Helmet>
                <title>NoQu TAM: Frequently Asked Questions</title>
                <meta name="description" content="Find answers to common questions about NoQu TAM's Time and Attendance Management system. Learn about features, integration, pricing, and more." />
                <meta property="og:title" content="NoQu TAM: Frequently Asked Questions" />
                <meta property="og:description" content="Answers to common questions about NoQu TAM attendance management." />
                <meta property="og:url" content="https://noqu.in/tam-faq" />
            </Helmet>
            <div className="TAM_FAQ" ref={sectionRef}>
                <div className="TAM_FAQ_header">
                    <h1 className="TAM_h1">
                        <span className="title-dark">TAM </span>
                        
                    </h1>
                    <div className="TAM_header_line" />
                </div>

                <div className='TAM_FAQ-container'>
                    <div className="TAM_FAQ-row">
                        {questions.map((question, index) => (
                           <div
    key={question.id}
    className={`TAM_FAQ_item ${selectedQuestion === question.id ? 'active' : ''} ${isVisible ? 'item-visible' : ''}`}
    onClick={() => handleSelectQuestion(question.id)}
    style={{ animationDelay: `${index * 0.08}s`, touchAction: 'manipulation' }}
>
                                <div className={`TAM_FAQ_question ${selectedQuestion === question.id ? 'TAM_FAQ_question_after' : 'TAM_FAQ_question_before'}`}>
                                    <div className="question_inner">
                                        <span className="question_number">
    {String(question.id).padStart(2, '0')}
</span>
                                        <p>{question.question}</p>
                                    </div>
                                    <div className={`toggle_icon ${selectedQuestion === question.id ? 'rotated' : ''}`}>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>

                                <div className={`TAM_FAQ_answer ${selectedQuestion === question.id ? 'TAM_FAQ_answer_open' : 'TAM_FAQ_answer_closed'}`}>
                                    <div className="answer_content">
                                        <div className="answer_accent_bar" />
                                        <div className="answer_text">
                                            {question.answer.map((para, i) => (
                                                <p key={i}>{para}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TAM_FAQ;
