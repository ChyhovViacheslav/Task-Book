import React from 'react'

export const IconSelector = ({id, className}) => {
    switch (id) {
        case 'briefcase':
            return (
                <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5.25H3C2.17157 5.25 1.5 5.92157 1.5 6.75V14.25C1.5 15.0784 2.17157 15.75 3 15.75H15C15.8284 15.75 16.5 15.0784 16.5 14.25V6.75C16.5 5.92157 15.8284 5.25 15 5.25Z" stroke="#282846" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15.75V3.75C12 3.35218 11.842 2.97064 11.5607 2.68934C11.2794 2.40804 10.8978 2.25 10.5 2.25H7.5C7.10218 2.25 6.72064 2.40804 6.43934 2.68934C6.15804 2.97064 6 3.35218 6 3.75V15.75" stroke="#282846" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        case 'calendar':
            return(
                <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#282846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 2V6" stroke="#282846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 2V6" stroke="#282846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 10H21" stroke="#282846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        case 'home' :
            return(
                <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 6.75L9 1.5L15.75 6.75V15C15.75 15.3978 15.592 15.7794 15.3107 16.0607C15.0294 16.342 14.6478 16.5 14.25 16.5H3.75C3.35218 16.5 2.97064 16.342 2.68934 16.0607C2.40804 15.7794 2.25 15.3978 2.25 15V6.75Z" stroke="#282846" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.75 16.5V9H11.25V16.5" stroke="#282846" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        case 'chevron-down' :
            return (
                <svg className={className} width="14" height="15" viewBox="0 0 14 15" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.08748 5.33748C3.31529 5.10967 3.68463 5.10967 3.91244 5.33748L6.99996 8.425L10.0875 5.33748C10.3153 5.10967 10.6846 5.10967 10.9124 5.33748C11.1402 5.56529 11.1402 5.93463 10.9124 6.16244L7.41244 9.66244C7.18463 9.89024 6.81529 9.89024 6.58748 9.66244L3.08748 6.16244C2.85967 5.93463 2.85967 5.56529 3.08748 5.33748Z" fill="#282846"/>
                    </g>
                </svg>
            )
        case 'clock' :
            return (
                <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#282846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="#282846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        case 'edit' :
            return (
                <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1052_135)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.54159 3.04159C1.92839 2.6548 2.45299 2.4375 3 2.4375H8.25C8.56066 2.4375 8.8125 2.68934 8.8125 3C8.8125 3.31066 8.56066 3.5625 8.25 3.5625H3C2.75136 3.5625 2.5129 3.66127 2.33709 3.83709C2.16127 4.0129 2.0625 4.25136 2.0625 4.5V15C2.0625 15.2486 2.16127 15.4871 2.33709 15.6629C2.5129 15.8387 2.75136 15.9375 3 15.9375H13.5C13.7486 15.9375 13.9871 15.8387 14.1629 15.6629C14.3387 15.4871 14.4375 15.2486 14.4375 15V9.75C14.4375 9.43934 14.6893 9.1875 15 9.1875C15.3107 9.1875 15.5625 9.43934 15.5625 9.75V15C15.5625 15.547 15.3452 16.0716 14.9584 16.4584C14.5716 16.8452 14.047 17.0625 13.5 17.0625H3C2.45299 17.0625 1.92839 16.8452 1.54159 16.4584C1.1548 16.0716 0.9375 15.547 0.9375 15V4.5C0.9375 3.95299 1.1548 3.42839 1.54159 3.04159Z" fill="#282846"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15 1.97156C14.7272 1.97156 14.4656 2.07992 14.2727 2.2728L7.25791 9.28763L6.77308 11.227L8.71242 10.7421L15.7272 3.7273C15.9201 3.53442 16.0285 3.27282 16.0285 3.00005C16.0285 2.72728 15.9201 2.46568 15.7272 2.2728C15.5344 2.07992 15.2728 1.97156 15 1.97156ZM13.4772 1.4773C13.8811 1.07344 14.4289 0.846558 15 0.846558C15.5711 0.846558 16.1189 1.07344 16.5227 1.4773C16.9266 1.88116 17.1535 2.42891 17.1535 3.00005C17.1535 3.57119 16.9266 4.11894 16.5227 4.5228L9.39774 11.6478C9.32565 11.7199 9.23533 11.771 9.13642 11.7958L6.13642 12.5458C5.94474 12.5937 5.74196 12.5375 5.60225 12.3978C5.46254 12.2581 5.40637 12.0553 5.45429 11.8636L6.20429 8.86362C6.22902 8.76472 6.28016 8.67439 6.35225 8.6023L13.4772 1.4773Z" fill="#282846"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1052_135">
                    <rect width="18" height="18" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            )
        case 'moon' :
            return (
                <svg className={className} width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.7">
                    <path d="M8.59255 2C5.4444 2 1.66663 5.14815 1.66663 10.1852C1.66663 15.2222 5.4444 19 10.4814 19C15.5185 19 18.6666 15.2222 18.6666 12.0741C11.7407 16.4815 4.18514 8.92593 8.59255 2Z" stroke="#282846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </svg>
            )
        case 'plus-square' :
            return (
                <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.25 2.25H3.75C2.92157 2.25 2.25 2.92157 2.25 3.75V14.25C2.25 15.0784 2.92157 15.75 3.75 15.75H14.25C15.0784 15.75 15.75 15.0784 15.75 14.25V3.75C15.75 2.92157 15.0784 2.25 14.25 2.25Z" stroke="#29A19C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 6V12" stroke="#29A19C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H12" stroke="#29A19C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        case 'sun' : 
            return (
                <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_303_3599)">
                    <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 1V3" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 21V23" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.21997 4.21997L5.63997 5.63997" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.36 18.3601L19.78 19.7801" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 12H3" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12H23" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.21997 19.7801L5.63997 18.3601" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.36 5.63997L19.78 4.21997" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </svg>
            )
        case 'trash' :
            return (
                <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.6875 4.5C1.6875 4.18934 1.93934 3.9375 2.25 3.9375H15.75C16.0607 3.9375 16.3125 4.18934 16.3125 4.5C16.3125 4.81066 16.0607 5.0625 15.75 5.0625H2.25C1.93934 5.0625 1.6875 4.81066 1.6875 4.5Z" fill="#F05454"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 2.0625C7.25136 2.0625 7.0129 2.16127 6.83709 2.33709C6.66127 2.5129 6.5625 2.75136 6.5625 3V3.9375H11.4375V3C11.4375 2.75136 11.3387 2.5129 11.1629 2.33709C10.9871 2.16127 10.7486 2.0625 10.5 2.0625H7.5ZM12.5625 3.9375V3C12.5625 2.45299 12.3452 1.92839 11.9584 1.54159C11.5716 1.1548 11.047 0.9375 10.5 0.9375H7.5C6.95299 0.9375 6.42839 1.1548 6.04159 1.54159C5.6548 1.92839 5.4375 2.45299 5.4375 3V3.9375H3.75C3.43934 3.9375 3.1875 4.18934 3.1875 4.5V15C3.1875 15.547 3.4048 16.0716 3.79159 16.4584C4.17839 16.8452 4.70299 17.0625 5.25 17.0625H12.75C13.297 17.0625 13.8216 16.8452 14.2084 16.4584C14.5952 16.0716 14.8125 15.547 14.8125 15V4.5C14.8125 4.18934 14.5607 3.9375 14.25 3.9375H12.5625ZM4.3125 5.0625V15C4.3125 15.2486 4.41127 15.4871 4.58709 15.6629C4.7629 15.8387 5.00136 15.9375 5.25 15.9375H12.75C12.9986 15.9375 13.2371 15.8387 13.4129 15.6629C13.5887 15.4871 13.6875 15.2486 13.6875 15V5.0625H4.3125Z" fill="#F05454"/>
                </svg>
            )
        case 'triangle' : 
            return (
                <svg className={className} fill='#F05454' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/>
                </svg>
            )
        case 'users' :
            return (
                <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.75 15.75V14.25C12.75 13.4544 12.4339 12.6913 11.8713 12.1287C11.3087 11.5661 10.5456 11.25 9.75 11.25H3.75C2.95435 11.25 2.19129 11.5661 1.62868 12.1287C1.06607 12.6913 0.75 13.4544 0.75 14.25V15.75" stroke="#282846" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.75 8.25C8.40685 8.25 9.75 6.90685 9.75 5.25C9.75 3.59315 8.40685 2.25 6.75 2.25C5.09315 2.25 3.75 3.59315 3.75 5.25C3.75 6.90685 5.09315 8.25 6.75 8.25Z" stroke="#282846" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.25 15.75V14.25C17.2495 13.5853 17.0283 12.9396 16.621 12.4143C16.2138 11.8889 15.6436 11.5137 15 11.3475" stroke="#282846" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2.34753C12.6453 2.51276 13.2173 2.88806 13.6257 3.41427C14.0342 3.94047 14.2559 4.58766 14.2559 5.25378C14.2559 5.91991 14.0342 6.56709 13.6257 7.0933C13.2173 7.61951 12.6453 7.99481 12 8.16003" stroke="#282846" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        case 'zap' :
            return (
                <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.75 1.5L2.25 10.5H9L8.25 16.5L15.75 7.5H9L9.75 1.5Z" stroke="#282846" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        case 'circle-plus' :
            return (
                <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 6.3999V13.5999" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.40002 10H13.6" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        default:
            return <svg className={className}></svg>
    }
}