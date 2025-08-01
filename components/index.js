import React from 'react';
import Head from 'next/head';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- Helper Components & SVGs ---

const ImageWithFade = ({ src, alt, className }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <img
            src={src}
            alt={alt}
            className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
        />
    );
};

// Icon component for easily rendering SVG icons
const Icon = ({ name, className }) => {
    const icons = {
        sun: (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
        ),
        moon: (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
        ),
        play: (
            <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
            </svg>
        ),
        plant: (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a7 7 0 0 0-7 7c0 2.02 1.02 4.02 3 5.5A3.5 3.5 0 0 0 10.5 16H11a1 1 0 0 1 1 1v.5a2.5 2.5 0 0 0 5 0V17a1 1 0 0 1 1-1h.5a3.5 3.5 0 0 0 2.5-3.5c2-1.48 3-3.48 3-5.5a7 7 0 0 0-7-7zm0 0v2" />
                <path d="M7 9.5c0-1.25.93-2.31 2.16-2.5" />
                <path d="m14.84 7-.16.03c1.23.19 2.16 1.25 2.16 2.5" />
            </svg>
        ),
        soil: (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12h3" /><path d="M7 12h3" /><path d="m22 12-3-9-3 9" /><path d="M14 12h3" /><path d="M19 12h3" /><path d="M2 17h20" /><path d="m3 22 1-5" /><path d="m5 22 1-5" /><path d="m9 22 1-5" /><path d="m13 22 1-5" /><path d="m17 22 1-5" /><path d="m21 22-1-5" />
            </svg>
        ),
        fertilizer: (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 22a7 7 0 0 1-7-7V9h14v6a7 7 0 0 1-7 7Z"/><path d="M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v3"/><path d="M12 2v2"/>
            </svg>
        ),
        trellis: (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4v16h16"/><path d="M8 4v16"/><path d="M12 4v16"/><path d="M16 4v16"/><path d="M4 8h16"/><path d="M4 12h16"/><path d="M4 16h16"/>
            </svg>
        ),
        varieties: (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.25 2.25c-.24-.25-.59-.34-.94-.25l-2.5.62-1.38-1.38c-.25-.25-.59-.34-.94-.25l-2.5.62-1.38-1.38c-.25-.25-.59-.34-.94-.25l-2.5.62-1.38-1.38C7.5 1.91 7.15 1.82 6.8 1.91l-2.5.62c-.35.09-.6.38-.69.73L2.25 9c-.09.35.01.73.25.98l1.38 1.38-.62 2.5c-.09.35.01.73.25.98l1.38 1.38-.62 2.5c-.09.35.01.73.25.98L6 21.75c.25.24.63.34.98.25l2.5-.62 1.38 1.38c.25.25.63.34.98.25l2.5-.62 1.38 1.38c.25.25.63.34.98.25l2.5-.62 1.38 1.38c.25.25.63.34.98.25l2.5-.62c.35-.09.64-.38.73-.73L21.75 15c.09-.35-.01-.73-.25-.98l-1.38-1.38.62-2.5c-.09.35-.01-.73-.25-.98l-1.38-1.38.62-2.5c.09-.35-.01-.73-.25-.98L18 2.25Z"/><circle cx="12" cy="12" r="3"/>
            </svg>
        ),
        pests: (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9s-9-4.03-9-9a9 9 0 0 1 9-9z"/><path d="M8 12h8"/><path d="M12 8v8"/><path d="m15 15-3-3-3 3"/>
            </svg>
        ),
        calendar: (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
            </svg>
        ),
        chevronRight: (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
            </svg>
        ),
        menu: (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
        ),
        x: (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
        ),
    };
    return icons[name] || null;
};

// Component to inject JSON-LD Schema Markup
const SchemaMarkup = ({ schema }) => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
);

// Ad Placeholder Component
const AdPlaceholder = ({ type }) => {
    let adClasses = "bg-gray-200 dark:bg-slate-700 border border-dashed border-gray-400 dark:border-slate-500 flex items-center justify-center text-gray-500 dark:text-slate-400 rounded-lg";
    let text;

    if (type === 'sidebar') {
        adClasses += " w-full h-96 my-8 hidden lg:block";
        text = "Skyscraper Ad";
    } else if (type === 'leaderboard') {
        adClasses += " w-full h-24 my-12";
        text = "Leaderboard Ad";
    } else {
        adClasses += " w-full h-48 my-12";
        text = "In-Content Ad";
    }

    return (
        <div className={adClasses}>
            <span>{text}</span>
        </div>
    );
};

// Video player placeholder
const VideoPlayer = ({ videoId, title }) => (
    <div className="my-8">
        <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer" className="block relative bg-black rounded-lg shadow-lg overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
            <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={title}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                width={480}
                height={360}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <Icon name="play" className="w-16 h-16 text-white text-opacity-80 group-hover:text-opacity-100 transition-opacity" />
            </div>
        </a>
        <h3 className="text-center text-lg font-bold text-gray-800 dark:text-slate-200 mt-4">{title}</h3>
    </div>
);

// Card component for homepage grid
const InfoCard = ({ icon, title, description, buttonText, linkPath }) => (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl dark:hover:shadow-green-900/40 transition-shadow duration-300 p-6 flex flex-col items-start text-left transform hover:-translate-y-1">
        <div className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 p-3 rounded-full mb-4">
            <Icon name={icon} className="w-8 h-8"/>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-slate-300 mb-4 flex-grow">{description}</p>
        <Link href={linkPath} className="mt-auto bg-green-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-green-700 transition-colors duration-300 self-stretch text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500">
            {buttonText}
        </Link>
    </div>
);

// Breadcrumbs component for navigation context
const Breadcrumbs = ({ crumbs }) => (
    <nav aria-label="Breadcrumb" className="flex items-center text-sm text-gray-600 dark:text-slate-400 mb-4">
        <Link href="/" className="hover:text-green-700 dark:hover:text-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Home</Link>
        {crumbs.map((crumb, index) => (
            <React.Fragment key={index}>
                <Icon name="chevronRight" className="w-4 h-4 mx-1" />
                {index === crumbs.length - 1 ? (
                    <span className="font-semibold text-gray-800 dark:text-white" aria-current="page">{crumb.label}</span>
                ) : (
                    <Link href={crumb.path} className=" dark:hover:text-green-400 hover:text-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">{crumb.label}</Link>
                )}
            </React.Fragment>
        ))}
    </nav>
);

// Navigation Dropdown Component
const NavDropdown = ({ item, currentPage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const isChildActive = item.children.some(child => currentPage.startsWith(child.path));

    return (
        <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                id="guides-menu-button"
                aria-haspopup="true"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className={`pb-1 font-semibold transition-all duration-300 flex items-center gap-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isChildActive ? 'text-green-600 dark:text-green-400 border-b-2 border-green-600 dark:border-green-400' : 'text-gray-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400'}`}
            >
                {item.name}
                <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {isOpen && (
                <div
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="guides-menu-button"
                    className="absolute left-0 top-full mt-0 pt-2 w-56 bg-white dark:bg-slate-800 rounded-b-lg shadow-xl py-2 z-50 animate-fade-in-down"
                >
                    {item.children.map(child => (
                        <Link
                            key={child.path}
                            href={child.path}
                            role="menuitem"
                            className={`w-full text-left block px-4 py-2 text-gray-800 dark:text-slate-200 hover:bg-green-50 dark:hover:bg-green-900/50 hover:text-green-700 dark:hover:text-green-400 transition-colors duration-200 focus:outline-none focus-visible:bg-green-100 dark:focus-visible:bg-green-900 ${currentPage.startsWith(child.path) ? 'font-bold text-green-700 dark:text-green-400' : ''}`}
                        >
                            {child.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};


const ComparisonTable = ({ headers, rows }) => (
    <div className="my-8 overflow-x-auto">
        <table className="w-full text-left border-collapse shadow-md rounded-lg overflow-hidden">
            <thead>
            <tr>
                {headers.map((header, index) => (
                    <th key={index} scope="col" className="p-4 font-bold text-sm text-gray-600 dark:text-slate-300 uppercase tracking-wider bg-gray-50 dark:bg-slate-700">{header}</th>
                ))}
            </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-800">
            {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="even:bg-gray-50 dark:even:bg-slate-900/50">
                    {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="p-4 border-t border-gray-200 dark:border-slate-700" />
                    ))

                    }
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

export { Icon, ImageWithFade, SchemaMarkup, AdPlaceholder, VideoPlayer, InfoCard, Breadcrumbs, NavDropdown, ComparisonTable };
