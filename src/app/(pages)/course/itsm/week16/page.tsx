import React from 'react';
import { Metadata } from 'next';
import Paragraph from '@/components/ui/paragraph';
import Template from '@/components/ui/template';
import Section from '@/components/ui/text-section';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IconArrowLeft } from '@tabler/icons-react';

export const metadata: Metadata = {
    title: 'Week 16 - ITSM',
};

function Week16() {
    return (
        <main className="flex flex-col min-h-screen w-full pb-6 md:pb-12 lg:pb-20 justify-start items-center gap-4">
            <div className="w-full h-96 overflow-hidden">
                <Image
                    className="object-cover w-full h-full"
                    src="/itsm/week16-itsm.jpg"
                    alt="week16-banner"
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
                            <h1 className="font-semibold text-3xl">Week 16 - Final Project Part 2: Knowledge Management</h1>
                            <p className="font-light text-sm">9 December 2025</p>
                        </div>
                        <Paragraph
                            text={
                                'From Reactive Fixes to Proactive Intelligence. The final week of the ITSM course culminated in an exercise that perfectly connects theory to practice: Knowledge Management. If Weeks 1-15 focused on doing ITSM (fixing, diagnosing, changing), Week 16 focused on learning from ITSM, the critical shift from an organization that firefights to one that retains wisdom.'
                            }
                        />

                        <Paragraph
                            text={
                                "For Final Project Part 2, our group (Group 11) demonstrated the ability to convert the major operational disruptions from Part 1 (Northstar Health Clinics' slow EHR system) into a structured, reusable corporate memory within ServiceNow. This assignment was the ultimate measure of our understanding, requiring us not just to write six articles, but to strategically position those articles to optimize service stability for both end users and IT staff."
                            }
                        />

                        <Paragraph
                            text={
                                'The resulting Knowledge Base articles successfully fulfilled all requirements for an Excellent (A) grade.'
                            }
                        />

                        <div className="w-full">
                            <Button variant={'outline'} className="w-full">
                                <a href="/itsm/Group 11_Final Project MLTI Part 2.pdf" target="_blank" rel="noopener noreferrer">
                                    📄 Week 16 Final Project Part 2
                                </a>
                            </Button>
                        </div>

                        <hr className="border-t border-gray-300 w-full mt-4" />

                        <Section>
                            <h3 className="font-semibold text-md">Part 1 - The Foundational Deliverables (The AB Grade Requirement)</h3>
                            <Paragraph
                                text={
                                    'The first phase of the project was to create the required content, ensuring correct classification and process alignment. This phase demonstrated our mastery of the Knowledge Management fundamentals and established the foundation for more advanced features.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">Three Standard Knowledge Articles for End Users</h4>
                            <Paragraph
                                text={
                                    'These articles were written in clear, non-technical language to empower doctors and nurses with self-service solutions and correct reporting procedures. The topics were directly aligned with the most frequent and high-impact incidents observed in Part 1, such as What To Do When the EHR System Is Slow and How to Report an Issue to IT Support.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">Three Known Error Articles for IT Support</h4>
                            <Paragraph
                                text={
                                    'These high-value technical documents were derived directly from the Problem Management root causes identified in the previous assignment. They covered issues like Short EHR Outage During High Load and Database Connection Errors, and included the necessary Cause and Workaround fields. This enabled the Service Desk to restore services quickly without involving Level 2 support.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">Process Compliance</h4>
                            <Paragraph
                                text={
                                    'All six articles were created using the correct Standard or Known Error templates, were peer-reviewed for clarity, and were correctly moved to the Published state. This demonstrated end-to-end process execution and adherence to organizational knowledge management standards.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-md">Part 2 - Advanced Features and Strategic Integration (The A Grade Achievement)</h3>
                            <Paragraph
                                text={
                                    'To move beyond a Very Good execution, we integrated strategic links, proving our comprehensive understanding of the Knowledge Management ecosystem. Our team achieved three of the four available A-Grade enhancement requirements.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">Linking Configuration Items</h4>
                            <Paragraph
                                text={
                                    'We connected our Known Error articles directly to the specific infrastructure components responsible for the failure. For example, we linked the Database Not Responding Error article to the EHR Database Server Configuration Item. This instantly provides Service Desk staff with context on which infrastructure piece is impacting the user, drastically reducing diagnostic time.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">Linking to Problem and Incident Records</h4>
                            <Paragraph
                                text={
                                    'Each Known Error article was linked to the originating Problem record and related Incident records from Part 1. For example, we linked specific incidents where staff were unable to log in to the corresponding Known Error. This creates a full audit trail, confirming that the knowledge is a genuine solution derived from historical operational data.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">Utilizing Related Articles</h4>
                            <Paragraph
                                text={
                                    'We established a network of help by linking relevant knowledge records. For example, we linked the How to Report an Issue guide to the System Slowness guide. This improves user experience and ensures users are guided to the most relevant information without having to perform additional searches.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-md">Reflection</h3>
                            <Paragraph
                                text={
                                    'Week 16 was the most strategic part of the course. The assignment validated the principle that Knowledge Management is not an optional clerical task. It is the ultimate feedback loop for IT Service Management. By converting our technical fixes into accessible documentation and systematically integrating them with the CMDB and Problem records, we demonstrated how Knowledge contributes directly to service stability.'
                                }
                            />
                            <Paragraph
                                text={
                                    'Our work drove down repeat incidents and built a powerful foundation for continuous service improvement - the hallmark of a mature IT organization. Through this final project, I understood that true ITSM maturity is not measured by how quickly we fix problems, but by how effectively we prevent them from recurring.'
                                }
                            />
                        </Section>
                    </Template>
                </Template>
            </div>
        </main>
    );
}

export default Week16;
