import { useState } from "react";
import {
  Users,
  Award,
  FileCheck2,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import Section from "../section/Section";
import Container from "../section/Container";
import BookingFrom from "./BookingFrom";

const stats = [
  { icon: Users, value: "200+", label: "Team member" },
  { icon: Award, value: "20+", label: "Winning award" },
  { icon: FileCheck2, value: "10k+", label: "Complete project" },
  { icon: BadgeCheck, value: "900+", label: "Client review" },
];



const BookingSection =()=> {
  return (
    <Section className="relative bg-[#1a1a1a] pt-30 lg:pb-[700px] lg:mb-70  z-100 ">
      <Container>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center py-8 px-6">
              <Icon size={36} strokeWidth={1.25} className="text-orange-500 mb-4" />
              <span className="text-3xl font-bold text-white mb-1">{value}</span>
              <span className="text-sm text-gray-400">{label}</span>
            </div>
          ))}
        </div>
           <div className="lg:absolute lg:left-1/2 lg:-bottom-70 lg:-translate-x-1/2 w-full  ">
    <BookingFrom />
  </div>
      </Container>

      {/* Form + Image Row */}
      {/* <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="flex gap-6 items-start">
          <div className="w-[360px] flex-shrink-0 -mt-2">
            <BookingForm />
          </div>
          <div className="flex-1 bg-gray-300 min-h-[440px] mt-[-36px]" />
        </div>
      </div> */}
    </Section>
  );
}
export default BookingSection
