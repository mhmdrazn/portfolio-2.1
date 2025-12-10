import React from 'react';
import { Metadata } from 'next';
import Paragraph from '@/components/ui/paragraph';
import Template from '@/components/ui/template';
import Section from '@/components/ui/text-section';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IconArrowLeft } from '@tabler/icons-react';

export const metadata: Metadata = {
    title: 'Week 15 - ITSM',
};

function Week15() {
    return (
        <main className="flex flex-col min-h-screen w-full pb-6 md:pb-12 lg:pb-20 justify-start items-center gap-4">
            <div className="w-full h-96 overflow-hidden">
                <Image
                    className="object-cover w-full h-full"
                    src="/itsm/week15-itsm.jpg"
                    alt="week15-banner"
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
                                Week 15 - Final Project (Part 1): Incident, Problem, and Change
                                Management
                            </h1>
                            <p className="font-light text-sm">2 December 2025</p>
                        </div>
                        <Paragraph
                            text={
                                'When ITSM Finally Becomes Real. Week 15 was the week when all the ITIL practices we had studied throughout the semester turned into something practical and interconnected. Instead of analyzing small cases, we stepped into a real workflow inside ServiceNow, working like an actual IT operations team supporting a critical healthcare system. Our job was to stabilize the Electronic Health Record (EHR) system at Northstar Health Clinics using three core practices: Incident Management, Problem Management, and Change Management.'
                            }
                        />

                        <Paragraph
                            text={
                                'For the first time, I experienced how these practices form a chain - incidents show the symptoms, problem management reveals the cause, and change management delivers the permanent recovery. This week felt less like a class assignment and more like entering a real production environment.'
                            }
                        />

                        <div className="w-full">
                            <Button variant={'outline'} className="w-full">
                                <a
                                    href="/itsm/Group11_Final Project (Part 1).pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    📄 Week 15 Final Project Part 1
                                </a>
                            </Button>
                        </div>

                        <hr className="border-t border-gray-300 w-full mt-4" />

                        <Section>
                            <h3 className="font-semibold text-md">Part 1 - Incident Management</h3>
                            <Paragraph
                                text={
                                    'We began by preparing ServiceNow, creating the essential Configuration Items that support the EHR environment: the EHR Service, the EHR Application Server, and the EHR Database Server. All components were set to In Use and linked through dependency relationships, forming the base for accurate tracing later on.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">
                                The Five Incidents We Recorded
                            </h4>
                            <Paragraph
                                text={
                                    'Inside ServiceNow, we documented five user-reported issues affecting the EHR: slow system performance when opening patient records, login failures happening repeatedly during peak hours, the EHR screen freezing in the middle of clinical workflows, database connection errors during record updates, and a brief system outage affecting multiple staff members.'
                                }
                            />
                            <Paragraph
                                text={
                                    'Each incident was logged with clear descriptions, assigned an appropriate priority, connected to the correct Configuration Item, and given to the right assignment group. From these incidents, a pattern started to emerge - they were not separate events, but symptoms of a deeper issue affecting the Application and Database servers. Incident Management gave us the first half of the story.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-md">Part 2 - Problem Management</h3>
                            <Paragraph
                                text={
                                    'After analyzing all five incidents, we transitioned into Problem Management to understand the underlying cause. In ServiceNow, we created a single Problem record, because all incidents pointed to the same recurring system instability.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">Root Cause Analysis</h4>
                            <Paragraph
                                text={
                                    'Our investigation inside the Problem record revealed that the Application Server was experiencing performance degradation, the Database Server struggled during high traffic, and the EHR could not handle heavy workloads during peak hours. These findings aligned with the symptoms reported across all incidents.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">Workaround</h4>
                            <Paragraph
                                text={
                                    'We documented a temporary workaround directly in the Problem record to reduce operational impact: refreshing the browser when freezes occurred, retrying failed actions after short delays, and stabilizing the system through controlled restarts. All five incidents were then linked to this Problem, creating a clear trace from symptoms to underlying issue.'
                                }
                            />
                            <Paragraph
                                text={
                                    'Problem Management allowed us to understand the cause - but not to fix it permanently. For that, we needed Change Management.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-md">Part 3 - Change Management</h3>
                            <Paragraph
                                text={
                                    'To deliver a permanent solution, we raised a Normal Change inside ServiceNow to fix the EHR Application Server configuration. The goal was straightforward: restore stability to the EHR system by adjusting and optimizing the Application Server configuration.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">Change Activities</h4>
                            <Paragraph
                                text={
                                    'The Change record in ServiceNow included creating a backup of existing configurations, applying updated settings on the Application Server, validating the connection between the Application Server and Database Server, monitoring system performance after configuration updates, and performing final testing to ensure service stability.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">
                                Approval and Execution Workflow
                            </h4>
                            <Paragraph
                                text={
                                    'The Change followed the full lifecycle: it was drafted in ServiceNow, assessed for impact and risk, approved by the Change Manager, scheduled into a maintenance window, implemented according to the defined task list, and then reviewed in a post-implementation step before being closed.'
                                }
                            />
                            <Paragraph
                                text={
                                    'Once validated and tested, the Change was marked successful and updates were documented in the review step. This completed the full cycle from incident to problem to resolution.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-md">Reflection</h3>
                            <Paragraph
                                text={
                                    'Week 15 was the most realistic experience of the entire course. Working inside ServiceNow made ITSM feel tangible - every record, every decision, and every relationship had consequences. Through this project, I understood how Incident, Problem, and Change Management connect to restore stability in a structured, reliable way.'
                                }
                            />
                            <Paragraph
                                text={
                                    'Supporting a healthcare system highlighted the importance of precision and coordination, reminding me that real-world IT services must protect not only technology, but also the people who depend on it.'
                                }
                            />
                        </Section>
                    </Template>
                </Template>
            </div>
        </main>
    );
}

export default Week15;
