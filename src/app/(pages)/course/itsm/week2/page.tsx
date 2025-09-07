import React from 'react';
import { Metadata } from 'next';
import Paragraph from '@/components/ui/paragraph';
import Template from '@/components/ui/template';
import Section from '@/components/ui/text-section';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IconArrowLeft } from '@tabler/icons-react';

export const metadata: Metadata = {
    title: 'Week 2 - ITSM',
};

function Recap() {
    return (
        <main className="flex flex-col min-h-screen w-full pb-6 md:pb-12 lg:pb-20 justify-start items-center gap-4">
            <div className="w-full h-96 object-cover overflow-hidden">
                <Image src="/itsm/week2-itsm.jpg" alt="week1-banner" width={1920} height={384} />
            </div>
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
                            Week 2 – The Four Dimensions of Service Management
                        </h1>
                        <p className="font-light text-sm">September 2, 2025</p>
                    </div>
                    <Paragraph
                        text={
                            'In the second week of IT Service Management, our focus moved from the big picture of value co-creation into the Four Dimensions of Service Management. These dimensions serve as the framework for understanding how services are delivered and sustained. What I learned is that no service can stand on a single pillar, all dimensions must work in harmony to create reliable and meaningful IT services.'
                        }
                    />

                    <Button variant={'outline'} className="w-fit mt-2">
                        <a
                            href="/itsm/5026231174_Week2.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            📄 Week 2 Class Assignment (PDF)
                        </a>
                    </Button>
                </Template>

                <hr className="border-t border-gray-300 w-full mt-4" />

                <Template>
                    <h1 className="font-semibold">Diving into the Four Dimensions</h1>

                    <Image
                        src="/itsm/week2-dimensi.png"
                        alt="dimensions"
                        className="my-3"
                        width={584}
                        height={317}
                    ></Image>

                    <Section>
                        <h3 className="font-normal text-sm">Organization and People</h3>
                        <Paragraph
                            text={
                                'The first dimension emphasizes the human side of ITSM. My notes highlighted keywords like authority, culture, competency, trust, transparency, and specialization. These terms reminded me that IT is never just about technology. Services succeed or fail depending on how people are organized, whether they trust each other, and if they have the right skills and roles. For example, without clear responsibilities, even the best-designed IT system can become chaotic.'
                            }
                        />
                    </Section>

                    <Section>
                        <h3 className="font-normal text-sm">Information and Technology</h3>
                        <Paragraph
                            text={
                                'Here, the focus is on the systems and tools that support service delivery. I noted keywords such as availability, reliability, accessibility, timeliness, accuracy, relevance, and security. This showed me that technology is not only about functionality but also about quality. Services are only valuable if the information they produce is accurate, secure, and available when needed. I also added regulatory requirements, which highlights the fact that ITSM does not operate in a vacuum since compliance and standards shape what is possible.'
                            }
                        />
                    </Section>

                    <Section>
                        <h3 className="font-normal text-sm">Partners and Suppliers</h3>

                        <Paragraph
                            text={
                                'This dimension expanded my view beyond the internal organization. Keywords like depend, share, collaborate, and goals reflect the importance of partnerships. Many IT services today rely on cloud providers, vendors, or outsourcing partners. Success here depends not only on contracts but on whether the culture and business goals of suppliers align with the service provider.'
                            }
                        />
                    </Section>

                    <Section>
                        <h3 className="font-normal text-sm">Value Streams and Processes</h3>
                        <Paragraph
                            text={
                                'The final core dimension ties everything together through activities and workflows. I worked with terms like create, deliver, automation, adoption, changing demand, sequence, and interrelated actions. This shows how ITSM is not random but structured, each activity from request handling to incident resolution must be defined and aligned with outcomes. I found it interesting how automation is emphasized since modern ITSM increasingly relies on automation to adapt to fast-changing user demands.'
                            }
                        />
                    </Section>

                    <Section>
                        <h3 className="font-normal text-sm">External Factors</h3>
                        <Paragraph
                            text={
                                'Although not always listed as a dimension, we also considered the role of external factors. My notes used the PESTLE framework: political, economic, social, technological, legal, and environmental. This section reminded me that services exist within a dynamic environment. Political policies can change regulations overnight, economic downturns can restrict budgets, and social trends can shift user expectations. ITSM must constantly adapt to these external pressures.'
                            }
                        />
                    </Section>

                    <div className="overflow-x-auto my-6">
                        <table className="min-w-full border border-gray-300 text-xs">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border px-4 py-2 text-center">Dimension</th>
                                    <th className="border px-4 py-2 text-center">Keywords</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2 font-semibold">
                                        Organization and People
                                    </td>
                                    <td className="border px-4 py-2">
                                        Authority, culture, capacity, competency, trust,
                                        transparency, update, specializations, roles,
                                        responsibilities, structures
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 font-semibold">
                                        Information and Technology
                                    </td>
                                    <td className="border px-4 py-2">
                                        Service, managed, systems, benefits, information, created,
                                        managed, used, support, enable, cover, exchanged,
                                        availability, reliability, accessibility, timeliness,
                                        accuracy, relevance, security, regulatory, requirements
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 font-semibold">
                                        Partners and Suppliers
                                    </td>
                                    <td className="border px-4 py-2">
                                        Depend, provided, others, share, collaborate, goals,
                                        culture, business
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 font-semibold">
                                        Value Streams and Processes
                                    </td>
                                    <td className="border px-4 py-2">
                                        Product, services, create, deliver, series, clear,
                                        opportunities, automation, adoption, defined, react,
                                        changing, demand, activities, interacting, interrelated,
                                        output, sequence, actions
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 font-semibold">
                                        External Factors
                                    </td>
                                    <td className="border px-4 py-2">
                                        Dynamic, complex, volatility, uncertainty, constraints,
                                        PESTLE, political, economic, social, technological, legal,
                                        environmental, influence, expectations, versions
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Template>

                <hr className="border-t border-gray-300 w-full mt-4" />

                <Template>
                    <h1 className="font-semibold">Reflection</h1>
                    <Paragraph
                        text={
                            'Week 2 gave me a deeper appreciation for ITSM as a balanced system of people, processes, technology, and partners, all shaped by external forces. Highlighting keywords like trust, reliability, collaboration, and automation helped me see how each dimension carries its own weight but also interlocks with the others. What stood out most is how fragile the balance can be. If one dimension is neglected, the others quickly suffer. For example, unreliable technology undermines trust, while weak processes waste the efforts of competent people. This week taught me that ITSM is not just about managing IT but about orchestrating a whole ecosystem where every dimension matters.'
                        }
                    />
                </Template>
            </Template>
        </main>
    );
}

export default Recap;
