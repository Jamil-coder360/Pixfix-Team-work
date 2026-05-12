import React from "react";
import Section from "../component/section/Section";
import Container from "../component/section/Container";
import { ChevronRight } from "lucide-react";
import PageHead from "../component/section/PageHead";
import Pricing_1 from "../component/icon/Pricing_1"
import Pricing_2 from "../component/icon/Pricing_2"
import Pricing_3 from "../component/icon/Pricing_3"
import Pricing_4 from "../component/icon/Pricing_4"
import Pricing_5 from "../component/icon/Pricing_5"
import Pricing_6 from "../component/icon/Pricing_6"
import PricingCard from "../component/pricing/PricingCard";


const PricingPage = () => {

    const pricingData = [
  {
    id: 1,
    icon: <Pricing_1 />,
    title: "Starter Plan",
    price: "$19",
    period: "/mo",
    description:
      "Repair is a specialized field that focuses fixing and restoring objects or systems",
    features: [
      "Repairing your problems",
      "Quality repair services you can count on",
      "Repairing with care, exceeding",
      "Trust us with your repair needs",
    ],
  },
  {
    id: 2,
    icon: <Pricing_2 />,
    title: "Standard Plan",
    price: "$49",
    period: "/mo",
    description:
      "A comprehensive repair solution built for growing needs with priority support",
    features: [
      "All Starter Plan features",
      "Priority repair scheduling",
      "Dedicated support specialist",
      "Extended warranty on repairs",
    ],
  },
  {
    id: 3,
    icon: <Pricing_3 />,
    title: "Premium Plan",
    price: "$99",
    period: "/mo",
    description:
      "Full-service repair coverage designed for professionals who demand the best",
    features: [
      "All Standard Plan features",
      "24/7 emergency repair service",
      "On-site repair visits",
      "Lifetime repair guarantee",
    ],
  },
  {
    id: 4,
    icon: <Pricing_4 />,
    title: "Premium Plan",
    price: "$99",
    period: "/mo",
    description:
      "Full-service repair coverage designed for professionals who demand the best",
    features: [
      "All Standard Plan features",
      "24/7 emergency repair service",
      "On-site repair visits",
      "Lifetime repair guarantee",
    ],
  },
  {
    id: 5,
    icon: <Pricing_5 />,
    title: "Premium Plan",
    price: "$99",
    period: "/mo",
    description:
      "Full-service repair coverage designed for professionals who demand the best",
    features: [
      "All Standard Plan features",
      "24/7 emergency repair service",
      "On-site repair visits",
      "Lifetime repair guarantee",
    ],
  },
  {
    id: 6,
    icon: <Pricing_6 />,
    title: "Premium Plan",
    price: "$99",
    period: "/mo",
    description:
      "Full-service repair coverage designed for professionals who demand the best",
    features: [
      "All Standard Plan features",
      "24/7 emergency repair service",
      "On-site repair visits",
      "Lifetime repair guarantee",
    ],
  },
];
  return (
    <Section>
      <PageHead />
      <Container className="py-10 lg:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {pricingData.map((item) => (
            <PricingCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              price={item.price}
              period={item.period}
              description={item.description}
              features={item.features}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default PricingPage;
