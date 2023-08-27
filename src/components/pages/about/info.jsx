/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";
import defaultImage from "@/assets/images/backgrounds/def.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Info() {
  return (
    <section className="flex flex-col md:flex-row bg-brown gap-12 items-center justify-center w-full md:px-24 md:py-24 pb-8  ">
      <div className="md:w-1/2 w-full h-full">
        <AnimationOnScroll animateIn="animate__zoomIn" duration={2}>
          <Image
            src={defaultImage}
            width={128}
            height={128}
            alt="img"
            className="w-full h-full"
          />
        </AnimationOnScroll>
      </div>{" "}
      <div className="md:w-1/2 text-sm font-jakarta leading-7 px-4 ">
        <AnimationOnScroll animateIn="animate__fadeInRight" duration={3}>
          <h2 className="font-Yeseva text-center md:text-left font-normal leading-9 mb-6 text-[2rem] ">
            Ariana Behravan, LMFT
          </h2>
          <p>
            I'm a compassionate and experienced therapist working in the areas
            of anxiety, depression, grief, substance issues, relationship
            issues, and family conflict. I am dedicated to helping individuals
            and families overcome challenges and find healing. I understand that
            life can present us with various difficulties that can feel
            overwhelming and isolating
          </p>
          <br />
          <p>
            Whether you're struggling with anxiety, battling depression, coping
            with grief, or facing substance-related issues, I am here to provide
            a safe and supportive environment where you can explore your
            emotions, gain insight, and develop effective coping strategies. I
            believe in a collaborative approach, working together to identify
            your unique strengths and empower you to achieve your goals. 
          </p>
          <br />
          <p>
            Relationships play a crucial role in our lives, and when they become
            strained or conflicted, it can have a significant impact on our
            well-being. I specialize in working with individuals and couples
            experiencing relationship challenges, helping them navigate
            communication issues, rebuild trust, and foster healthier
            connections. Additionally, I have expertise in addressing family
            conflicts and providing a space for families to heal and grow
            together. 
          </p>
          <br />
          <p>
            My therapeutic approach is grounded in evidence-based practices such
            as cognitive-behavioral therapy (CBT) and solution-focused therapy.
            I tailor my approach to meet your specific needs, ensuring that our
            sessions are collaborative, strategic, and goal focused. I am
            committed to ongoing professional development, staying informed
            about the latest research and therapeutic techniques. Maintaining
            the highest ethical standards, 
          </p>
          <br />
          <p>
            I prioritize client confidentiality and provide a non-judgmental and
            empathetic environment for you to explore your thoughts and
            feelings. If you're ready to embark on a journey of self-discovery,
            growth, and healing, I would be honored to be a part of your path.
            Together, we can work towards enhancing your well-being and building
            a life filled with purpose and fulfillment. Please reach out to
            schedule a session or inquire further about how therapy can support
            you. I'm here to support you every step of the way.
          </p>
        </AnimationOnScroll>
      </div>
    </section>
  );
}

export default Info;
