'use client'
import { useEffect } from "react";
import AOS from 'aos';


export const AOSConfig = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200,
          easing: 'ease-in-out',
          once: true
        });
      }, []);

    return null
}