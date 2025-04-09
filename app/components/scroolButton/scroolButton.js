
"use client"

const ScroolButton = () => {
    return (
        <button
            data-aos="fade-up"
            data-aos-offset="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            type="button"
            id="mouseButton"
            onClick={()=>window.scrollBy(0, 900)}
            aria-label="mouseButton"
            className="mouseButton  "
        >
            <svg
                className="h-12 md:h-16 w-full"
                viewBox="0 0 45 77"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="22.1461"
                    cy="14.6504"
                    r="6.47345"
                    fill="url(#paint0_linear_128_381)"
                />
                <rect
                    x="0.5"
                    y="0.5"
                    width="43.9734"
                    height="76"
                    rx="21.9867"
                    stroke="url(#paint1_linear_128_381)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_128_381"
                        x1="9.70489"
                        y1="10.908"
                        x2="29.4287"
                        y2="17.5837"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FC4A1A"/>
                        <stop offset="1" stopColor="#F7B733"/>
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_128_381"
                        x1="22.4867"
                        y1="0"
                        x2="22.4867"
                        y2="77"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FC4A1A"/>
                        <stop offset="1" stopColor="#F7B733"/>
                    </linearGradient>
                </defs>
            </svg>
        </button>
    );
};

export default ScroolButton;
