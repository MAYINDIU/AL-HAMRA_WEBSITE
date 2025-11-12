import React, { useState } from 'react';

// AL HAMRA HOMES LTD.-এর জন্য বৈশিষ্ট্যগুলির ডেটা
const alHamraFeatures = [
  "রিয়েল এস্টেটে একমাত্র পাবলিক লিমিটেড কোম্পানি",
  "ঢাকা ১ নং নির্বাচনী এলাকা নবাবগঞ্জ",
  "বাংলাদেশের সবচেয়ে বড় ৮০০০ (আট হাজার বিঘার আবাসন)",
  "তুলনামূলক সাশ্রয়ী প্লট ও নিশ্চিত বিনিয়োগ"
];

const AlHamraFeatures = () => {
  // ১. প্রধান স্টাইলস (CSS in JS Objects)
  const styles = {
    section: {
      padding: '60px 20px',
      backgroundColor: '#f8f9fa',
      fontFamily: 'Arial, sans-serif',
      boxSizing: 'border-box',
    },
    heading: {
      textAlign: 'center',
      fontSize: '2.5em',
      color: '#333333',
      marginBottom: '50px',
      fontWeight: '600',
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '25px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    iconWrapper: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: '#e6f7e9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    icon: {
      width: '30px',
      height: '30px',
      stroke: '#4CAF50',
    },
    text: {
      fontSize: '1.1em',
      color: '#495057',
      lineHeight: '1.5',
      fontWeight: '500',
    },
    // কার্ডের বেস স্টাইল
    baseCard: {
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '250px',
        border: '1px solid #e9ecef', // প্রাথমিক হালকা বর্ডার
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    }
  };

  // একটি কাস্টম কম্পোনেন্ট যা প্রতিটি কার্ডের হোভার স্টেট হ্যান্ডেল করবে
  const FeatureCard = ({ featureText }) => {
    const [isHovered, setIsHovered] = useState(false);

    // হোভার করার সময় ডায়নামিক স্টাইল
    const cardHoverStyle = isHovered ? { 
        transform: 'translateY(-5px)', 
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
        // নতুন যোগ করা: ১ পিক্সেল লাল আউটলাইন বর্ডার
        border: '1px solid #FF0000', 
    } : {};

    return (
        <div 
            style={{ ...styles.baseCard, ...cardHoverStyle }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={styles.iconWrapper}>
                {/* সবুজ টিক চিহ্নের SVG */}
                <svg 
                    style={styles.icon}
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#4CAF50" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            {/* বৈশিষ্ট্যের টেক্সট */}
            <p style={styles.text}>{featureText}</p>
        </div>
    );
  };

  return (
    <section style={styles.section}>
      {/* প্রধান হেডিং */}
      <h2 style={styles.heading}>
        কেন AL HAMRA HOMES LTD. আপনার সেরা পছন্দ?
      </h2>
      
      {/* কার্ড গ্রিড */}
      <div style={styles.gridContainer}>
        {alHamraFeatures.map((feature, index) => (
          <FeatureCard key={index} featureText={feature} />
        ))}
      </div>
    </section>
  );
};

export default AlHamraFeatures;