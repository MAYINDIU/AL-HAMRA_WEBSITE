import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
    FaHome,
    FaBlog,
    FaEnvelope,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaChevronDown,
    FaHandshake,
    FaMapMarkedAlt, 
    FaRegListAlt,   
    FaUser,         
    FaClipboardList,
    FaSignInAlt,       // New icon for the main 'Login' button
    FaUserShield,      // Icon for Branch Admin Login
    FaBuilding,        // Icon for Corporate Admin Login
    FaUserCircle,      // Icon for Customer Login/Account
} from "react-icons/fa";

import { HiMenuAlt3, HiX } from "react-icons/hi";
import { BsPersonLinesFill, BsFillLightbulbFill, BsStarFill } from "react-icons/bs";
import { MdOutlinePool } from "react-icons/md"; 
import logoStandard from "../../Assets/Icons/logo.png";

// --- THEME CONSTANTS (Centralized) ---
const customStyles = {
    // Darker Primary Red
    '--color-primary': '#a00000',
    // Lighter Red for Active/Hover Text
    '--color-hover-text': '#cd0808',
    // Default Text: Neutral dark gray for readability
    'text-default': 'text-gray-700',
    // Subtle, slightly visible background on hover for main links (Material Ripple effect)
    'bg-main-hover': 'hover:bg-red-100', // Changed to 100 for better contrast on gray-50
};
const PRIMARY_COLOR = customStyles['--color-primary'];
const DEFAULT_TEXT_COLOR = customStyles['text-default'];
const MAIN_HOVER_BG = customStyles['bg-main-hover'];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false); 
    const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false); 
    // New state for Login/Account dropdown
    const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false); 

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
            if (window.scrollY > 10) {
                // Close desktop dropdowns when scrolling starts
                setIsAboutDropdownOpen(false); 
                setIsProjectsDropdownOpen(false); 
                setIsLoginDropdownOpen(false); // Close new dropdown
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    // EFFECT: Closes dropdowns if user clicks outside of the menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isAboutDropdownOpen && !event.target.closest('.group-about-us')) {
                setIsAboutDropdownOpen(false);
            }
            if (isProjectsDropdownOpen && !event.target.closest('.group-projects')) {
                setIsProjectsDropdownOpen(false);
            }
            // Logic for the new Login dropdown
            if (isLoginDropdownOpen && !event.target.closest('.group-login')) {
                setIsLoginDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isAboutDropdownOpen, isProjectsDropdownOpen, isLoginDropdownOpen]); // Added new state
    
    // EFFECT: Closes dropdowns and mobile menu on route change
    useEffect(() => {
        setIsAboutDropdownOpen(false);
        setIsProjectsDropdownOpen(false);
        setIsLoginDropdownOpen(false); // Close new dropdown
        setIsOpen(false);
    }, [location.pathname]);


    // --- 1. About Us Dropdown Structure ---
    const aboutDropdownContent = [
        { name: "About Us", to: "/about-us", icon: <BsStarFill size={16} />, isHeader: false },
        { name: "Board of Directors", to: "/board-of-directors", icon: <BsPersonLinesFill size={16} />, isHeader: false },
        { name: "Our Vision & Mission", to: "/vission", icon: <BsFillLightbulbFill size={16} />, isHeader: false },
        { name: "Our Company Values", to: "/company-values", icon: <FaHandshake size={16} />, isHeader: false },
    ];
    const aboutItems = aboutDropdownContent.filter(item => !item.isHeader);

    // --- 2. Projects Dropdown Structure ---
    const projectsDropdownContent = [
        { name: "Project Location Map", to: "/project-location-map", icon: <FaMapMarkedAlt size={16} />, isHeader: false },
        { name: "Project Amenities", to: "/project-amenities", icon: <MdOutlinePool size={16} />, isHeader: false },
        { name: "Terms & Conditions", to: "/terms-conditions", icon: <FaRegListAlt size={16} />, isHeader: false },
        { name: "My Information", to: "/my-information", icon: <FaUser size={16} />, isHeader: false },
        { name: "Our Products", to: "/our-products", icon: <FaBlog size={16} />, isHeader: false },
    ];
    const projectItems = projectsDropdownContent.filter(item => !item.isHeader);

    // --- 3. NEW Login/Account Dropdown Structure ---
    const loginDropdownContent = [
        // Role-based Logins
        { name: "Customer Login", to: "/customer-login", icon: <FaUserCircle size={16} />, isHeader: false },
        { name: "Branch Admin Login", to: "/branch-admin-login", icon: <FaUserShield size={16} />, isHeader: false },
        { name: "Corporate Admin Login", to: "/corporate-admin-login", icon: <FaBuilding size={16} />, isHeader: false },
    ];
    const loginItems = loginDropdownContent.filter(item => !item.isHeader);

    // Main menu items 
    const menuItems = [
        { name: "Home", to: "/", icon: <FaHome size={16} /> },
        // About Us Dropdown
        { 
            name: "About Us", 
            to: "/about-us", 
            dropdown: aboutDropdownContent, 
            isMega: false,
            isDropdownActive: isAboutDropdownOpen,
            toggleDropdown: () => {
                setIsProjectsDropdownOpen(false); // Close other dropdowns
                setIsLoginDropdownOpen(false);
                setIsAboutDropdownOpen(prev => !prev);
            },
            isActiveCheck: () => aboutItems.some((item) => isActiveMenu(item.to)),
            dropdownClass: 'group-about-us'
        }, 
        // Projects Dropdown
        { 
            name: "Projects",
            to: "/projects-main", 
            icon: <FaClipboardList size={16} />,
            dropdown: projectsDropdownContent, 
            isMega: false,
            isDropdownActive: isProjectsDropdownOpen,
            toggleDropdown: () => {
                setIsAboutDropdownOpen(false); // Close other dropdowns
                setIsLoginDropdownOpen(false);
                setIsProjectsDropdownOpen(prev => !prev);
            },
            isActiveCheck: () => projectItems.some((item) => isActiveMenu(item.to)),
            dropdownClass: 'group-projects'
        }, 
    
        { name: "Contact Us", to: "/contact-us", icon: <FaEnvelope size={16} /> },
        // NEW Login/Account Dropdown
        { 
            name: "Login", 
            to: "/login-main", // Default link if needed
            icon: <FaSignInAlt size={16} />,
            dropdown: loginDropdownContent, 
            isMega: false,
            isDropdownActive: isLoginDropdownOpen,
            toggleDropdown: () => {
                setIsAboutDropdownOpen(false); // Close other dropdowns
                setIsProjectsDropdownOpen(false);
                setIsLoginDropdownOpen(prev => !prev);
            },
            // Check if any sub-item is active (useful if logged in state leads here)
            isActiveCheck: () => loginItems.some((item) => isActiveMenu(item.to)),
            dropdownClass: 'group-login'
        }, 
    ];

    const socialLinks = [
        { Icon: FaFacebookF, link: "https://www.facebook.com/p/Pleasure-Bangladesh-Limited-61576220872738/" },
        { Icon: FaTwitter, link: "https://twitter.com" },
        { Icon: FaLinkedinIn, link: "https://linkedin.com" },
     
        { Icon: FaYoutube, link: "https://youtube.com" },
    ];

    // --- Helper Functions ---
    const isActiveMenu = (path) => location.pathname === path;
    // const isAboutActive = aboutItems.some((item) => isActiveMenu(item.to)); // Not needed here, replaced by isActiveCheck()
    // const isProjectsActive = projectItems.some((item) => isActiveMenu(item.to)); // Not needed here, replaced by isActiveCheck()

    // 1. Desktop Main Link Classes
    const getLinkClasses = (to) => {
        const isActive = isActiveMenu(to);

        if (isActive) {
            return `flex items-center gap-1 px-5 py-3 transition font-bold text-lg text-red-700 border-b-4 border-red-700 hover:no-underline`;
        }

        return `flex items-center gap-1 px-5 py-3 rounded-lg transition font-medium text-lg ${DEFAULT_TEXT_COLOR} hover:text-red-600 ${MAIN_HOVER_BG} border-b-4 border-transparent hover:no-underline`;
    };

    // 2. Desktop Dropdown Button Classes (Updated to handle dynamic checks)
    const getDropdownButtonClasses = (isDropdownActive, isActiveCheck) => {
        // Check if the current route is one of the dropdown's sub-items OR if the dropdown is currently open
        if (isActiveCheck() || isDropdownActive) {
            return `flex items-center gap-1 px-5 py-3 transition font-bold text-lg text-red-700 border-b-4 border-red-700 hover:no-underline`;
        }
        return `flex items-center gap-1 px-5 py-3 rounded-lg transition font-medium text-lg ${DEFAULT_TEXT_COLOR} hover:text-red-600 ${MAIN_HOVER_BG} border-b-4 border-transparent hover:no-underline`;
    }

    // 3. Mega Menu / Dropdown Link Classes 
    const getSubLinkClasses = (to) => {
        const isActive = isActiveMenu(to);

        if (isActive) {
            return `flex items-center gap-2 px-3 py-2 text-base rounded-md transition font-bold text-red-700 bg-red-100 hover:bg-red-200 hover:no-underline`;
        }

        return `flex items-center gap-2 px-3 py-2 text-base rounded-md transition ${DEFAULT_TEXT_COLOR} hover:text-red-700 hover:bg-red-50 hover:no-underline`;
    }


    return (
        // Navbar base: bg-gray-50 
        <nav
            className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 font-sans bg-gray-50 ${scrolled ? "shadow-xl" : "shadow-md"}`}
            style={customStyles}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24 items-center">

                    {/* Logo/Brand Name */}
                    <NavLink to="/" className="flex items-center">
                        <img
                            src={logoStandard}
                            alt="AL HAMRA HOMES LTD."
                            className={`w-auto mr-3 transition-all duration-500 ${scrolled ? 'h-20' : 'h-24'}`}
                        />
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-1 items-center">
                        {menuItems.map((item) =>
                            item.dropdown ? (
                                // Dropdown Container
                                <div 
                                    key={item.name} 
                                    className={`relative group ${item.dropdownClass}`} 
                                > 
                                    <button
                                        className={getDropdownButtonClasses(item.isDropdownActive, item.isActiveCheck)}
                                        style={{ backgroundColor: 'inherit' }}
                                        // TOGGLE DROPDOWN ON CLICK
                                        onClick={item.toggleDropdown}
                                    >
                                        {/* Display the icon if present (like the new Login dropdown) */}
                                        {item.icon && <span className="mr-1">{item.icon}</span>} 
                                        {item.name}
                                        <FaChevronDown
                                            className={`w-3 h-3 ml-2 transition-transform duration-300 ${item.isActiveCheck() || item.isDropdownActive ? 'rotate-180 text-red-700' : 'group-hover:text-red-600'}`}
                                            style={{ color: item.isActiveCheck() || item.isDropdownActive ? customStyles['--color-hover-text'] : PRIMARY_COLOR }}
                                        />
                                    </button>

                                    {/* DROPDOWN MENU */}
                                    {item.isDropdownActive && (
                                        <div
                                            className="absolute left-1/2 -translate-x-1/2 mt-0 pt-3 w-64 bg-gray-100 shadow-2xl rounded-xl opacity-100 transform translate-y-0 transition duration-300 ease-out overflow-hidden z-20 border border-t-4 p-3 space-y-1"
                                            style={{ borderTopColor: PRIMARY_COLOR }}
                                        >
                                            {item.dropdown.map((subItem, index) => (
                                                subItem.isHeader ? (
                                                    <h4 
                                                        key={index}
                                                        className="text-xs font-extrabold uppercase tracking-wider text-gray-500 pt-3 mt-2 border-t border-gray-300 px-3"
                                                    >
                                                        {subItem.name}
                                                    </h4>
                                                ) : (
                                                    <NavLink
                                                        key={subItem.to}
                                                        to={subItem.to}
                                                        className={getSubLinkClasses(subItem.to)}
                                                        onClick={() => {
                                                            // Close all dropdowns upon clicking a sub-link
                                                            setIsAboutDropdownOpen(false); 
                                                            setIsProjectsDropdownOpen(false);
                                                            setIsLoginDropdownOpen(false); 
                                                        }} 
                                                    >
                                                        <span className="text-red-500">{subItem.icon}</span>
                                                        <span>{subItem.name}</span>
                                                    </NavLink>
                                                )
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                // Regular Link
                                <NavLink
                                    key={item.name}
                                    to={item.to}
                                    className={getLinkClasses(item.to)}
                                    style={{ backgroundColor: 'inherit' }}
                                >
                                    {item.icon && <span className="mr-1">{item.icon}</span>}
                                    {item.name}
                                </NavLink>
                            )
                        )}
                    </div>

                    {/* Desktop Social Icons (Unchanged) */}
                    <div className="hidden lg:flex items-center space-x-2 ml-6">
                        {socialLinks.map(({ Icon, link }, i) => (
                            <a
                                key={i}
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className={`p-3 rounded-full border border-gray-300 transition-all duration-300 ${DEFAULT_TEXT_COLOR} hover:text-white hover:shadow-lg`}
                                style={{
                                    '--bg-color': 'transparent',
                                    '--text-color': PRIMARY_COLOR,
                                    backgroundColor: 'var(--bg-color)',
                                    color: 'var(--text-color)',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.setProperty('--bg-color', PRIMARY_COLOR);
                                    e.currentTarget.style.setProperty('--text-color', 'white');
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.setProperty('--bg-color', 'transparent');
                                    e.currentTarget.style.setProperty('--text-color', PRIMARY_COLOR);
                                }}
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button (Unchanged) */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`focus:outline-none p-2 rounded-md ${DEFAULT_TEXT_COLOR} hover:bg-gray-200`}
                        >
                            <span style={{ color: PRIMARY_COLOR }}>
                                {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="lg:hidden bg-gray-100 shadow-2xl pb-4 border-t border-gray-200">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {menuItems.map(({ name, to, icon, dropdown }) => (
                            <div key={name}>
                                {dropdown ? (
                                    <>
                                        {/* Parent item as a simple group header */}
                                        <div
                                            className={`flex items-center gap-1 px-3 py-3 rounded-md font-extrabold text-lg cursor-pointer hover:bg-red-100 hover:no-underline`}
                                            style={{ color: PRIMARY_COLOR }}
                                        >
                                            {icon && <span className="mr-1">{icon}</span>}
                                            {name}
                                        </div>
                                        <div className="pl-4 space-y-1 border-l-4 border-red-100 ml-4">
                                            {/* Mobile sub-links */}
                                            {dropdown.map((item, index) => (
                                                item.isHeader ? (
                                                    <h4 
                                                        key={index}
                                                        className="text-xs font-extrabold uppercase tracking-wider text-gray-500 pt-3 mt-2 border-t border-gray-300 px-3"
                                                    >
                                                        {item.name}
                                                    </h4>
                                                ) : (
                                                    <NavLink
                                                        key={item.to}
                                                        to={item.to}
                                                        className={`flex items-center gap-2 px-3 py-2 rounded-md transition text-base ${
                                                            isActiveMenu(item.to)
                                                                ? `text-red-700 font-bold bg-red-100`
                                                                : `${DEFAULT_TEXT_COLOR} hover:text-red-700 hover:bg-red-50`
                                                        } hover:no-underline`}
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        <span className="text-red-500">{item.icon}</span> {item.name}
                                                    </NavLink>
                                                )
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <NavLink
                                        key={to}
                                        to={to}
                                        className={`flex items-center gap-2 px-3 py-3 rounded-md transition font-medium text-lg ${
                                            isActiveMenu(to)
                                                ? `text-white font-bold bg-red-600 shadow-sm`
                                                : `${DEFAULT_TEXT_COLOR} hover:text-red-600 hover:bg-red-100`
                                        } hover:no-underline`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className={isActiveMenu(to) ? 'text-white' : 'text-red-500'}>{icon}</span> {name}
                                    </NavLink>
                                )}
                            </div>
                        ))}

                        {/* Social Icons Mobile (Unchanged) */}
                        <div className="flex justify-center space-x-3 pt-6 border-t border-gray-300 mt-4">
                            {socialLinks.map(({ Icon, link }, i) => (
                                <a
                                    key={i}
                                    href={link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`p-3 bg-red-100 rounded-full text-gray-600 border border-red-100 hover:bg-red-600 hover:text-white transition shadow-sm hover:no-underline`}
                                >
                                    <Icon size={18} style={{ color: PRIMARY_COLOR }} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;