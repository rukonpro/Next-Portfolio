"use client"

const GetStartButton = () => {
    return (
        <button
            aria-label="Get Started"
            onClick={() => {
                document.getElementById("contactModal").showModal()
            }}
            className='px-3 py-3 rounded-lg w-full font-bold text-sm duration-150 text-white  bg-gradient-to-tr from-[#39056b] to-[#9a69fe] hover:bg-gradient-to-r active:bg-cyan-700 tracking-[3px]'
            data-aos="fade-up"
        >
            Get Started
        </button>
    );
};

export default GetStartButton;