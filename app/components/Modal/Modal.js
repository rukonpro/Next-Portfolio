import React from 'react';

const Modal = ({ isOpen, closeModal, children }) => {
    // Define a function to handle clicks outside the modal
    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal(); // Close the modal when clicking outside of it
        }
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 ">
                    <div
                        className="fixed inset-0 z-50 overflow-y-auto flex justify-center items-center "
                        onClick={handleOutsideClick}
                    >
                        <div className="mx-3  ">
                            <div className="bg-white rounded-2xl overflow-hidden bg-gradient-radial from-[#a128b2] to-[#17081a] via-[#4634a3] p-2 "

                                 data-aos="fade-right"
                                 data-aos-offset="10"
                                 data-aos-duration="600"
                                 data-aos-easing="ease-in-sine"
                            >{children}</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
