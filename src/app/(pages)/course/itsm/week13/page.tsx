import React from 'react';
import { Metadata } from 'next';
import Paragraph from '@/components/ui/paragraph';
import Template from '@/components/ui/template';
import Section from '@/components/ui/text-section';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IconArrowLeft } from '@tabler/icons-react';

export const metadata: Metadata = {
    title: 'Week 13 - ITSM',
};

function Week13() {
    return (
        <main className="flex flex-col min-h-screen w-full pb-6 md:pb-12 lg:pb-20 justify-start items-center gap-4">
            <div className="w-full h-96 overflow-hidden">
                <Image
                    className="object-cover w-full h-full"
                    src="/itsm/week13-itsm.jpg"
                    alt="week13-banner"
                    width={1920}
                    height={384}
                />
            </div>
            <div className="px-6 md:px-12 lg:px-20">
                <Template>
                    <div className="flex flex-row gap-4 items-center">
                        <a href="/course/itsm">
                            <Button variant={'outline'} className="w-fit">
                                <IconArrowLeft />
                            </Button>
                        </a>
                        Back to ITSM Room
                    </div>
                    <Template>
                        <div className="flex flex-col gap-3">
                            <h1 className="font-semibold text-3xl">
                                Week 13 - Ensuring Services Perform, Stay Available, and Meet the
                                Promise
                            </h1>
                            <p className="font-light text-sm">17 November 2025</p>
                        </div>
                        <Paragraph
                            text={
                                'When ITSM Becomes About Reliability and Trust. By Week 13, the course had moved past operations and transitions - now we were looking at what makes IT services reliable in the long term. This week shifted my focus toward the "steady state" practices that quietly determine whether users experience smooth, dependable services or frustrating downtime.'
                            }
                        />

                        <Paragraph
                            text={
                                "What I learned this week is that availability, performance, service levels, and catalog clarity are not just technical concerns - they are promises. Promises IT teams make to users, and promises users expect to be honored every single day. My assignment was to explore four practices that uphold those promises: Availability Management, Capacity & Performance Management, Service Level Management (SLM), and Service Catalogue Management. Each practice feeds into the others like pieces of a reliability ecosystem, and this week's work helped me see how they operate behind the scenes."
                            }
                        />

                        <div className="w-full">
                            <Button variant={'outline'} className="w-full">
                                <a
                                    href="/itsm/5026231174_Week13.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    📄 Week 13 Class Activity
                                </a>
                            </Button>
                        </div>

                        <hr className="border-t border-gray-300 w-full mt-4" />

                        <Section>
                            <h3 className="font-semibold text-md">
                                Part 1 - Availability Management
                            </h3>
                            <Paragraph
                                text={
                                    'The first section of my assignment explored how organizations ensure that services are ready and functioning whenever they are needed. Availability Management is essentially the commitment to keep services up, accessible, and reliable according to business expectations.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">
                                What Availability Really Means
                            </h4>
                            <Paragraph
                                text={
                                    'Availability is defined as the ability of a service or component to perform its agreed function whenever required. It is not just uptime - it is about readiness, reliability, and meeting user expectations.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">
                                Understanding the Availability Process
                            </h4>
                            <Paragraph
                                text={
                                    'The Availability Management process breaks into key activities: setting targets, designing for reliability, monitoring and logging, planning improvement, validating recovery tests, and calculating metrics. This flow helped me see availability as something engineered, not accidental.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">Core KPIs</h4>
                            <Paragraph
                                text={
                                    'I worked through five core KPIs: Percentage Availability calculated using MTBF / (MTBF + MTRS), User Outage Minutes, Lost Transactions, Lost Business Value, and User Satisfaction (Availability Score). These KPIs taught me that availability is both technical and experiential - downtime affects productivity, operations, and business value.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">MTBF vs MTRS</h4>
                            <Paragraph
                                text={
                                    'High MTBF (Mean Time Between Failures) means services rarely fail. Low MTRS (Mean Time to Restore Service) means services recover quickly. I realized that a service can fail often but still have "good availability" if recovery is extremely fast - something I had not fully understood before.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-md">
                                Part 2 - Capacity & Performance Management
                            </h3>
                            <Paragraph
                                text={
                                    'Next, I studied the practice responsible for ensuring systems run fast, stay responsive, and can scale with demand. If Availability is about "is the service up?", Capacity and Performance is "can the service handle what we throw at it?"'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">Performance vs Capacity</h4>
                            <Paragraph
                                text={
                                    'Performance is defined as what the service achieves in terms of speed, throughput, and responsiveness. Capacity is the maximum workload the service can support. These two work together - many outages are caused not by failure, but by overload.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">Key Activities</h4>
                            <Paragraph
                                text={
                                    'The practice is split into two core activities: Service Performance and Capacity Analysis, which includes monitoring live performance, modeling workload patterns, and detecting bottlenecks. The second is Service Performance and Capacity Planning, which involves forecasting future demand, preparing resources for growth, and scaling systems before they reach their limits. This reminded me of real-world scenarios like registration portals crashing on day one because no one modeled peak load.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">KPI Structure</h4>
                            <Paragraph
                                text={
                                    'My assignment lists four groups of KPIs: Performance Metrics such as response time, throughput, and latency; Capacity Metrics including utilization, headroom, and scalability; Forecasting Metrics measuring demand accuracy and growth indicators; and Stability Metrics tracking capacity-related incidents and bottleneck frequency. These KPIs made me understand why performance issues must always be monitored before they become user issues.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-md">
                                Part 3 - Service Level Management (SLM)
                            </h3>
                            <Paragraph
                                text={
                                    'SLM shifted the narrative from engineering to expectations. This practice ensures that both provider and customer agree on what "good service" means - and that the provider continuously monitors and meets that target.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">Purpose of SLM</h4>
                            <Paragraph
                                text={
                                    'Service Level Management sets business-based service targets and ensures service delivery is evaluated and managed against those targets. This includes commitments like uptime, response time, resolution time, and customer experience.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">Core SLM Processes</h4>
                            <Paragraph
                                text={
                                    'The SLM lifecycle includes: establishing shared views with customers, collecting and analyzing metrics, conducting regular reviews, capturing issues, engaging with customers, and gathering insights from multiple sources. This showed me that SLM is truly customer-centric - not just operational.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">SLA Requirements</h4>
                            <Paragraph
                                text={
                                    'A good SLA must align with defined services in the catalogue, must be outcome-oriented, must reflect real agreements between parties, and must be clear and easy to understand. I learned about the Watermelon SLA effect (green outside, red inside) - meaning SLAs can look good on reports but deliver poor user experience.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">SLM KPIs</h4>
                            <Paragraph
                                text={
                                    'The KPIs include customer experience, service performance, business outcome metrics, SLA compliance, and service review improvements. This practice ties the technical world to the business world - translating metrics into meaning.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-md">
                                Part 4 - Service Catalogue Management
                            </h3>
                            <Paragraph
                                text={
                                    'To close the week, I explored how organizations document and communicate their available services. The catalogue is the single source of truth for everything IT provides.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">
                                Purpose of Service Catalogue
                            </h4>
                            <Paragraph
                                text={
                                    'The Service Catalogue provides consistent information about all active services and service offerings available to relevant audiences. It is the bridge between IT operations and business understanding.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">
                                Catalogue Management Activities
                            </h4>
                            <Paragraph
                                text={
                                    'I worked through five main activities: Publishing new services, Editing and Updating entries, Maintaining service descriptions, Providing tailored views such as user view, customer view, and IT-to-IT view, and Avoiding isolated, fragmented catalogues. Clear catalogues prevent confusion, duplication, and misaligned expectations.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">Real-World Examples</h4>
                            <Paragraph
                                text={
                                    'The assignment included examples of real catalogues such as GovTech Singapore and UNSW MyIT. These helped me visualize how professional IT organizations present services to users - with clarity, organization, and comprehensive information.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-md">Reflection</h3>
                            <Paragraph
                                text={
                                    'Week 13 connected everything we have learned about reliability, performance, and user expectations into a cohesive picture. I realized that stable IT services do not just happen - they are engineered, monitored, forecasted, reviewed, and clearly communicated. Availability keeps systems running, performance keeps them fast, SLM keeps them aligned with business expectations, and catalogues keep them understandable. Together, these practices shape the everyday experience users have with technology, and this week helped me appreciate how much precision and care goes into making IT "just work."'
                                }
                            />
                        </Section>
                    </Template>
                </Template>
            </div>
        </main>
    );
}

export default Week13;
