import React from 'react'
import Section from "../component/section/Section"
import Container from "../component/section/Container"
import PageHead from "../component/section/PageHead"
import ServiceSideber from '../component/service/ServiceSideber';
import DetailCard from '../component/service/DetailCard';

const ServiceDetailPage = () => {
  return (
    <Section>
            <PageHead 
            pagehead={"Service_Details"}
            pagelink={"Service_Details"}
            />
        <Container className={"py-30"}>
            <div className="grid grid-cols-[410px_1fr] gap-7.5">
                <ServiceSideber />
                <DetailCard />
            </div>


        </Container>
    </Section>

)
}

export default ServiceDetailPage