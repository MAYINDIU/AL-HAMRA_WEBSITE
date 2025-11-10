import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
    FaHome,
    FaServicestack,
    FaBlog,
    FaEnvelope,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaChevronDown,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { BsPersonLinesFill, BsFillLightbulbFill, BsShieldFill, BsStarFill } from "react-icons/bs";
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
    // NEW STATE: Tracks if the mega-menu is explicitly opened by a click
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
            // Close the dropdown when scrolling starts (good UX)
            if (window.scrollY > 10) {
                setIsDropdownOpen(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    // NEW EFFECT: Closes dropdown if user clicks outside of the menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isDropdownOpen && !event.target.closest('.group-about-us')) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isDropdownOpen]);
    
    // NEW EFFECT: Closes dropdown on route change
    useEffect(() => {
        setIsDropdownOpen(false);
        setIsOpen(false); // Also close mobile menu
    }, [location.pathname]);


    // --- Mega Menu Structure for "About Us" (2-column display) ---
    const aboutMegaMenuContent = [
        {
            title: "Foundation & Leadership",
            items: [
                { name: "About Us", to: "/about-us", icon: <BsStarFill size={16} /> },
                { name: "Our Vision & Mission", to: "/vission", icon: <BsFillLightbulbFill size={16} /> },
                { name: "Message from Chairman", to: "/chairman-message", icon: <BsPersonLinesFill size={16} /> },
                { name: "Message from CEO", to: "/ceo-message", icon: <BsPersonLinesFill size={16} /> },
            ]
        },
        {
            title: "Policies & Initiatives",
            items: [
                { name: "Quality Assurance", to: "/quality", icon: <BsShieldFill size={16} /> },
                { name: "CSR Initiatives", to: "/csr", icon: <FaBlog size={16} /> },
                { name: "Investor Relations", to: "/investors", icon: <FaServicestack size={16} /> },
                { name: "Career Opportunities", to: "/careers", icon: <BsPersonLinesFill size={16} /> },
            ]
        },
    ];

    const aboutItems = aboutMegaMenuContent.flatMap(section => section.items);

    // Main menu items 
    const menuItems = [
        { name: "Home", to: "/", icon: <FaHome size={16} /> },
        { name: "About Us", to: "/about-us", dropdown: aboutItems, isMega: true },
        { name: "Our Services", to: "/services", icon: <FaServicestack size={16} /> },
        { name: "Gallery", to: "/gallery", icon: <FaBlog size={16} /> },
        { name: "Contact", to: "/contact-us", icon: <FaEnvelope size={16} /> },
    ];

    const socialLinks = [
        { Icon: FaFacebookF, link: "https://www.facebook.com/p/Pleasure-Bangladesh-Limited-61576220872738/" },
        { Icon: FaTwitter, link: "https://twitter.com" },
        { Icon: FaLinkedinIn, link: "https://linkedin.com" },
        { Icon: FaInstagram, link: "https://instagram.com" },
        { Icon: FaYoutube, link: "https://youtube.com" },
    ];

    // --- Helper Functions ---
    const isActiveMenu = (path) => location.pathname === path;
    const isAboutActive = aboutItems.some((item) => isActiveMenu(item.to));

    // 1. Desktop Main Link Classes
    const getLinkClasses = (to) => {
        const isActive = isActiveMenu(to);

        // Active state: BOLD RED text, Thick RED Bottom Border
        if ((to === "/about-us" && isAboutActive) || isActive) {
            return `flex items-center gap-1 px-5 py-3 transition font-bold text-lg text-red-700 border-b-4 border-red-700 hover:no-underline`;
        }

        // Default/Hover: Default gray text, hover RED text, subtle RED BG on hover (for the "ripple")
        return `flex items-center gap-1 px-5 py-3 rounded-lg transition font-medium text-lg ${DEFAULT_TEXT_COLOR} hover:text-red-600 ${MAIN_HOVER_BG} border-b-4 border-transparent hover:no-underline`;
    };

    // 2. Desktop Dropdown Button Classes
    const getDropdownButtonClasses = () => {
        // Active state: BOLD RED text, Thick RED Bottom Border
        if (isAboutActive || isDropdownOpen) {
            return `flex items-center gap-1 px-5 py-3 transition font-bold text-lg text-red-700 border-b-4 border-red-700 hover:no-underline`;
        }
        // Default/Hover: Default gray text, hover RED text, subtle RED BG on hover
        return `flex items-center gap-1 px-5 py-3 rounded-lg transition font-medium text-lg ${DEFAULT_TEXT_COLOR} hover:text-red-600 ${MAIN_HOVER_BG} border-b-4 border-transparent hover:no-underline`;
    }

    // 3. Mega Menu / Dropdown Link Classes 
    const getSubLinkClasses = (to) => {
        const isActive = isActiveMenu(to);

        // Active state: RED text, BOLD font, subtle RED BG on hover
        if (isActive) {
            return `flex items-center gap-2 px-3 py-2 text-base rounded-md transition font-bold text-red-700 bg-red-100 hover:bg-red-200 hover:no-underline`;
        }

        // Default state: Default gray text, hover RED text, subtle RED BG on hover
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
                        {menuItems.map(({ name, to, icon, dropdown, isMega }) =>
                            dropdown ? (
                                // Added the unique class 'group-about-us' for click-outside detection
                                <div key={name} className="relative group group-about-us"> 
                                    <button
                                        className={getDropdownButtonClasses()}
                                        style={{ backgroundColor: 'inherit' }}
                                        // TOGGLE DROPDOWN ON CLICK
                                        onClick={() => setIsDropdownOpen(prev => !prev)}
                                    >
                                        {name}
                                        <FaChevronDown
                                            // Conditional rotation and color based on active route OR open state
                                            className={`w-3 h-3 ml-2 transition-transform duration-300 ${isAboutActive || isDropdownOpen ? 'rotate-180 text-red-700' : 'group-hover:text-red-600'}`}
                                            style={{ color: isAboutActive || isDropdownOpen ? customStyles['--color-hover-text'] : PRIMARY_COLOR }}
                                        />
                                    </button>

                                    {/* MEGA MENU: Conditional rendering based on isDropdownOpen state */}
                                    {isDropdownOpen && isMega ? (
                                        <div
                                            className="absolute left-1/2 -translate-x-1/2 mt-0 pt-4 w-[560px] bg-gray-100 shadow-2xl rounded-xl opacity-100 transform translate-y-0 transition duration-300 ease-out overflow-hidden z-20 border border-t-4 p-8"
                                            style={{ borderTopColor: PRIMARY_COLOR }}
                                        >
                                            <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                                                {aboutMegaMenuContent.map((section) => (
                                                    <div key={section.title}>
                                                        <h4
                                                            className="text-sm font-extrabold mb-4 uppercase tracking-wider pb-1 border-b-2 border-red-100"
                                                            style={{ color: PRIMARY_COLOR }}
                                                        >
                                                            {section.title}
                                                        </h4>
                                                        <div className="space-y-1">
                                                            {section.items.map((item) => (
                                                                <NavLink
                                                                    key={item.to}
                                                                    to={item.to}
                                                                    className={getSubLinkClasses(item.to)}
                                                                    onClick={() => setIsDropdownOpen(false)} // Close on sub-link click
                                                                >
                                                                    <span className="text-red-500">{item.icon}</span>
                                                                    <span>{item.name}</span>
                                                                </NavLink>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : isDropdownOpen ? (
                                        // Regular Dropdown (Used for demonstration if isMega was false)
                                        <div className="absolute left-0 mt-3 w-64 bg-gray-100 shadow-xl rounded-lg opacity-100 transform translate-y-0 transition duration-300 ease-out overflow-hidden z-20 border border-gray-100">
                                            {dropdown.map((item) => (
                                                <NavLink
                                                    key={item.to}
                                                    to={item.to}
                                                    className={getSubLinkClasses(item.to)}
                                                    onClick={() => setIsDropdownOpen(false)} // Close on sub-link click
                                                >
                                                    <span className="text-red-500">{item.icon}</span> {item.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            ) : (
                                <NavLink
                                    key={name}
                                    to={to}
                                    className={getLinkClasses(to)}
                                    style={{ backgroundColor: 'inherit' }}
                                >
                                    {name}
                                </NavLink>
                            )
                        )}
                    </div>

                    {/* Desktop Social Icons (No change) */}
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

                    {/* Mobile Menu Button (No change) */}
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

            {/* Mobile Menu Dropdown (Logic remains the same for mobile: opens on burger icon click) */}
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
                                            {name}
                                        </div>
                                        <div className="pl-4 space-y-1 border-l-4 border-red-100 ml-4">
                                            {/* Mobile sub-links */}
                                            {dropdown.map((item) => (
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
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <NavLink
                                        key={to}
                                        to={to}
                                        className={`flex items-center gap-2 px-3 py-3 rounded-md transition font-medium text-lg ${
                                            // Mobile active state uses background for high visibility
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

                        {/* Social Icons Mobile (No change) */}
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