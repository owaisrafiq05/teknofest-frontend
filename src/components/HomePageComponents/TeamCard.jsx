import React from 'react'


const TeamCard = (props) => {
    return (
        <div>
            <div className="profile relative h-[250px] w-[250px] overflow-hidden opacity-1">
                <div className="prof-picture overflow-hidden"><div className="img-wrapper relative cursor-pointer">
                    <img src={props.image} alt="Hero Image" loading="lazy" width="224" height="224" decoding="async" data-nimg="1" className="color-transparent" />
                    <a href={props.linkedinURL} target="_blank" rel="noopener noreferrer" className="absolute left-0 top-0 z-10 flex h-full w-[calc(100%)] items-center justify-center bg-black bg-opacity-50 opacity-0 backdrop-blur-[1px] transition-all hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                </div>
                    <div className="overflow-object absolute left-0 top-0 h-8 w-20 bg-background">
                    </div>
                    <div className="overflow-object absolute bottom-6 left-0 h-6 w-10 bg-background">
                    
                </div>
                    <div className="overflow-object absolute left-0 top-0 h-full w-full bg-gradient-to-t from-background to-transparent">
                    <div className="prof-name bwai-text absolute bottom-6 right-7 origin-bottom-right rotate-90 bg-gradient-to-r from-white to-gray-800 bg-clip-text text-2xl font-bold text-transparent">{props.name}</div>
                    <div className="prof-title absolute bottom-1 right-7 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-sm text-transparent">{props.position}</div>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default TeamCard