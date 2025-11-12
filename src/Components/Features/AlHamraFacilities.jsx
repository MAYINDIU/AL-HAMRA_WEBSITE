import React, { useState } from 'react';

// প্রকল্পের নাগরিক সুবিধার তালিকা
const facilitiesList = [
  "প্রকল্পের সম্পূর্ণ এলাকা ক্লোজ সার্কিট ক্যামেরার আওতা ভুক্ত করা হবে।",
  "সার্বক্ষণিক নিরাপত্তা ব্যবস্থা নিয়ন্ত্রণের জন্য থাকবে নিজস্ব দক্ষ ও চৌকস নিরাপত্তাবাহিনী এবং ফায়ার সার্ভিস স্টেশন।",
  "প্রকল্পের অভ্যন্তরে রয়েছে ৩০ ফুট থেকে ১২৫ ফুট পর্যন্ত প্রশস্ত রাস্তা, নৌ-পরিবহণ ব্যবস্থা ও টানেল।",
  "প্রকল্পের ভিতর থাকবে নিজস্ব পরিবহন ব্যবস্থা, প্রয়োজনীয় সংখ্যক হ্যালিপ্যাড ও হেলিকপ্টার রেন্টাল স্টেশন।",
  "বৃক্ষবেষ্টিত সবুজে ঘেরা প্রকল্পটির মধ্যে রয়েছে পার্ক ও খেলাধুলার জন্য আন্তর্জাতিক মানের স্টেডিয়াম সহ একাধিক সুপ্রশস্ত মাঠ।",
  "আন্তর্জাতিক মানের হাসপাতাল, ক্লিনিক, শপিংমল, কমিউনিটি সেন্টার, বৃদ্ধাশ্রম, শরীর চর্চা কেন্দ্র, ক্লাব, সুমিং পুল, ঝর্ণা, পাবলিক লাইব্রেরি, লেডিস ক্লাব এবং কনভেনশন সেন্টারের জন্য রয়েছে নির্ধারিত স্থান।",
  "প্রকল্পে প্রয়োজনীয় সংখ্যক মসজিদ সহ ঈদগাহ মাঠ, কবরস্থান এবং অন্যান্য ধর্মাবলম্বীদের জন্য মন্দির, গির্জা ও শ্মশানের ব্যবস্থা থাকবে।",
  "বিশুদ্ধ ও পর্যাপ্ত পানি সরবরাহের জন্য থাকবে নিজস্ব ব্যবস্থাপনায় পাম্প হাউজ এবং বৃষ্টির পানি সংগ্রহের সুব্যবস্থা।",
  "বিদ্যুৎ সরবরাহ নিশ্চিত করনে থাকবে নিজস্ব সাব স্টেশন এবং সৌর বিদ্যুৎ উৎপাদন ও সরবরাহের ব্যবস্থা।"
];

const AlHamraFacilitiesMaterial = () => {
  // ১. প্রধান স্টাইলস (Material Design Focussed)
  const styles = {
    section: {
      padding: '80px 20px', 
      backgroundColor: '#f5f5f5', 
      fontFamily: 'Roboto, Arial, sans-serif', 
      boxSizing: 'border-box',
    },
    heading: {
      textAlign: 'center',
      fontSize: '2.8em', 
      color: '#212121', 
      marginBottom: '50px',
      fontWeight: '700', 
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '30px', 
      maxWidth: '1200px',
      margin: '0 auto',
    },
    // Materialized Card Style (বেস স্টাইল)
    facilityCard: {
      backgroundColor: '#ffffff',
      padding: '25px',
      borderRadius: '8px',
      // প্রাথমিক শ্যাডো এবং বর্ডার
      boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
      border: '1px solid transparent', // প্রাথমিক অবস্থায় ট্রান্সপারেন্ট বর্ডার
      display: 'flex',
      alignItems: 'flex-start',
      textAlign: 'left',
      position: 'relative',
      transition: 'all 0.3s ease-in-out',
      cursor: 'pointer',
    },
    icon: {
      color: '#43a047', // Deep Green
      fontSize: '1.5em', 
      marginRight: '15px',
      marginTop: '0',
      lineHeight: 1,
      fontWeight: 'bold',
    },
    text: {
      fontSize: '1em',
      color: '#424242', 
      lineHeight: '1.7',
      margin: 0,
      fontWeight: '400',
    }
  };
  
  // Material Card কম্পোনেন্ট যা হোভার স্টেট হ্যান্ডেল করে
  const MaterialCard = ({ facilityText }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // হোভার করার সময় ডায়নামিক স্টাইল
    const hoverStyles = isHovered ? {
        // উচ্চ এলিভেশন শ্যাডো
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        transform: 'translateY(-2px)',
        // নতুন যোগ করা: ১ পিক্সেল লাল আউটলাইন বর্ডার
        border: '1px solid #FF0000', 
    } : {};

    return (
        <div 
            style={{ ...styles.facilityCard, ...hoverStyles }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span style={styles.icon}>
                {/* টিক আইকনের সিম্বল */}
                &#10003; 
            </span> 
            <p style={styles.text}>{facilityText}</p>
        </div>
    );
  };


  return (
    <section style={styles.section}>
      {/* প্রধান হেডিং */}
      <h2 style={styles.heading}>
        প্রকল্পের প্রিমিয়াম নাগরিক সুবিধাসমূহ
      </h2>
      
      {/* সুবিধাগুলির গ্রিড */}
      <div style={styles.gridContainer}>
        {facilitiesList.map((facility, index) => (
          <MaterialCard key={index} facilityText={facility} />
        ))}
      </div>
    </section>
  );
};

export default AlHamraFacilitiesMaterial;