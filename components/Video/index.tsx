"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 font-bold"style={{ fontFamily: 'Tajawal, sans-serif' }}>
      <div className="container">
        <SectionTitle
          title="نحن هنا لمساعدتكم دائما"
          paragraph="في حالة طلب أي مميزات اخرى و خصائص نحن منفتحون لسماعكم و العمل على تحقيق و معالجة انشغالاتكم حول نظامنا ، في أي وقت و لن ندخر جهدا في خدمتكم"
          center
          mb="80px"
        />

      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
