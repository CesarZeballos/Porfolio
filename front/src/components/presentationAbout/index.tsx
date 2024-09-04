import Profile from "../image"

export const PresentationAbout = () => {
    return (
        <div className="sectionContainer grid grid-cols-2">
            <div className="flex flex-col gap-6 items-center justify-center mx-6">
                <h1 className="h1 text-white text-start w-full mb-3">About Me</h1>
                <p className="body text-white">{`I'm Cesar Zeballos, a graduate in Business Administration with a focus on Finance, and I've made a successful transition to UX/UI design and full stack development, with a special focus on frontend.`}</p>
                <p className="body text-white">My background in management and experience as a credit risk analyst have given me solid analytical skills and a deep understanding of different types of businesses, both in their operational, accounting and financial areas.</p>
                <p className="body text-white">My journey into the world of technology began as a freelance UX/UI designer in a design studio, where I participated in three major web design projects. During this experience, I discovered my passion for web development, which led me to train as a full stack developer at Soy Henry. Currently, I specialize in frontend development, applying both design skills and techniques to create intuitive and attractive user interfaces.</p>
            </div>
            <div className="flex items-center justify-center">
                <Profile imagen="/profile.jpg"/>
            </div>
        </div>
    )}