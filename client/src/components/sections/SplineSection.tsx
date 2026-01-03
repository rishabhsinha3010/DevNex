export function SplineSection() {
    return (
        <section className="w-full h-screen relative bg-[#2c2d32] overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                {/* 
                    Video Background 
                    - /coolvideo.mp4 serves from the public folder
                    - object-cover: ensures it fills the container
                    - object-top: anchors to top, so cropping happens at the bottom (as requested)
                */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-top"
                    poster="/video-poster.png"
                >
                    <source src="/coolvideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Optional Overlay for better text contrast if needed later */}
                <div className="absolute inset-0 bg-black/10" />
            </div>
        </section>
    );
}
