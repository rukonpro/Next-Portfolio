"use client"
import React, { useState } from 'react'
import Login from "./login";
import Registration from "./registration";
import Modal from "@/app/components/ui/Modal/Modal";

export default function LoginModal({isModalOpen, setIsModalOpen}) {

    const [isLogin, setIsLogin] = useState(false);


    return (

                <Modal isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
                    {!isLogin ?
                        <Login
                            setIsLogin={setIsLogin}
                            isLogin={isLogin}
                            isModalOpen={isModalOpen}
                            setIsModalOpen={setIsModalOpen}
                        /> :
                        <Registration
                            setIsLogin={setIsLogin}
                            isLogin={isLogin}
                            isModalOpen={isModalOpen}
                            setIsModalOpen={setIsModalOpen}
                        />}
                </Modal>

    )
}
