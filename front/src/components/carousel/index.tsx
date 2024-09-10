'use client'
import { IPropChildren } from "@/utils/interfaces"
import { Children, useEffect, useRef, useState } from "react"

export const Carousel = (prop: IPropChildren) => {
    const {children} = prop
    const [scrollPosition, setScrollPosition] = useState(0)
    const [stop, setStop] = useState(false)
    const carouselRef = useRef<HTMLDivElement>(null)
    const speedScroll = 20

    const infiniteChildren = [...Children.toArray(children), ...Children.toArray(children), ...Children.toArray(children)]

    useEffect (() => {
        const handleScroll = () => {
            if(carouselRef.current) {
                const maxScrollWidth = carouselRef.current.scrollWidth / 2

                setScrollPosition((prevPosition) => {
                    if (prevPosition >= maxScrollWidth) {
                        return 0
                    }

                    if (stop) {
                        return prevPosition
                    }
                    return prevPosition + 1
                })
            }
        }

        const scrollInterval = setInterval(handleScroll, speedScroll);

        return () => clearInterval(scrollInterval)
    }, [speedScroll, stop])

    return (
        <div
        ref={carouselRef}>
            <div 
            className="px-12 flex flex-row gap-12 overflow-x-auto"
            style={{
                display: 'inline-flex',
                transform: `translateX(-${scrollPosition}px)`,
                transition: `transform ${speedScroll / 100}s linear`,
              }}
              onMouseEnter={() => setStop(true)}
              onMouseLeave={() => setStop(false)}
            >
                {infiniteChildren}
            </div>
        </div>
    )
}