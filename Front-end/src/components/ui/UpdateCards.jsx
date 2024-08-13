import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import '@/assets/css/UpdateCards.css';

gsap.registerPlugin(ScrollTrigger);

const createSections = (sections) => {
    return sections.map(({ title }, index) => (
        <section key={index} className="page-section">
            <h2 className="page-section__title">{title}</h2>
            <div className="cards">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="card">
                        <div className="card__image" />
                        <div className="card__content">
                            <div className="card__title">New Branch</div>
                            <div className="card__line" />
                            <div className="card__line" />
                            <div className="card__line" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    ));
};

const sectionsData = [
    { title: '' }
];

const UpdateCards = () => {
    useEffect(() => {
        gsap.utils.toArray(".cards").forEach((row) => {
            const tl = gsap.timeline();
            const cards = row.querySelectorAll(".card");
            const title = row.parentNode.querySelector(".page-section__title");

            ScrollTrigger.create({
                trigger: row,
                start: "+=200px bottom",
                animation: tl
                    .to(title, {
                        duration: 0.5,
                        opacity: 1,
                        x: 0,
                        ease: "back.out(1.4)"
                    })
                    .to(cards, {
                        duration: 1,
                        opacity: 1,
                        x: 0,
                        ease: "elastic.out(1, 0.75)",
                        stagger: { axis: "x", each: 0.04 }
                    }, "-=0.2")
            });
        });
    }, []);

    return (
        <div>
            {createSections(sectionsData)}
        </div>
    );
};

export default UpdateCards;
