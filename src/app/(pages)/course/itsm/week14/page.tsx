import React from 'react';
import { Metadata } from 'next';
import Paragraph from '@/components/ui/paragraph';
import Template from '@/components/ui/template';
import Section from '@/components/ui/text-section';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IconArrowLeft } from '@tabler/icons-react';

export const metadata: Metadata = {
    title: 'Week 14 - ITSM',
};

function Week14() {
    return (
        <main className="flex flex-col min-h-screen w-full pb-6 md:pb-12 lg:pb-20 justify-start items-center gap-4">
            <div className="w-full h-96 overflow-hidden">
                <Image
                    className="object-cover w-full h-full"
                    src="/itsm/week14-itsm.jpg"
                    alt="week14-banner"
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
                                Week 14 - Event & Knowledge Management
                            </h1>
                            <p className="font-light text-sm">December 2025</p>
                        </div>
                        <Paragraph
                            text={
                                'When ITSM Becomes About Awareness and Collective Memory. Week 14 felt different from all the weeks before. Instead of resolving incidents or managing changes, this week asked me to understand two practices that work quietly in the background: Event Management, which gives IT the "eyes" to detect early signals of trouble, and Knowledge Management, which gives IT the "memory" to solve problems faster and smarter.'
                            }
                        />

                        <Paragraph
                            text={
                                'This week helped me see that stable IT services are not only built from good processes - they rely heavily on constant monitoring and good knowledge flow. Without these two practices, IT teams would always be blind and forgetful.'
                            }
                        />

                        <div className="w-full">
                            <Button variant={'outline'} className="w-full">
                                <a
                                    href="/itsm/5026231174_Week14.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    📄 Week 14 Class Activity
                                </a>
                            </Button>
                        </div>

                        <hr className="border-t border-gray-300 w-full mt-4" />

                        <Section>
                            <h3 className="font-semibold text-md">Part 1 - Event Management</h3>
                            <Paragraph
                                text={
                                    'My assignment began with the fundamentals: Event Management detects meaningful changes in the state of a service or configuration item. But as I explored the mind map in my file, I realized it is more than just alerts and logs - it is the early warning system that tells IT whether a service is healthy, degraded, or failing.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">What Counts as an Event</h4>
                            <Paragraph
                                text={
                                    'The examples were clear: Indicators of upcoming failures such as high CPU usage, increasing latency, packet drops. Triggering automated responses like restart a process or scale an instance. Notifications to the Service Desk when customer-impacting thresholds are reached. System-generated updates from tools like monitoring dashboards, sensors, and application logs. These events form "signals" that IT uses to predict issues before incidents occur.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">
                                The Event Management Flow
                            </h4>
                            <Paragraph
                                text={
                                    'The process flow is structured into four key steps: Event Detection where tools, sensors, dashboards, or applications detect anomalies. Event Notification where alerts are generated and forwarded to the appropriate teams or systems. Event Filtering and Correlation where not all events matter - some are noise, and critical ones must be correlated to find patterns or early warnings. Event Response which could be automated (auto-scaling) or manual (raising an incident). This flow helped me appreciate how Event Management is what allows IT teams to act before users complain.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-md">Part 2 - Knowledge Management</h3>
                            <Paragraph
                                text={
                                    'If Event Management is the "eyes," then Knowledge Management (KM) is the "brain." Knowledge Management is defined as a structured process to collect, organize, validate, store, and share knowledge so the right information reaches the right people at the right time.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">
                                The Components of Knowledge Management
                            </h4>
                            <Paragraph
                                text={
                                    'The knowledge ecosystem includes: Knowledge Repository and Knowledge Base, Standard Operating Procedures (SOPs), Templates and Guidelines, and Knowledge Articles. These repositories ensure that teams are never solving the same problem twice.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">The Role of the KEDB</h4>
                            <Paragraph
                                text={
                                    'The KEDB stores every Known Error and its workaround so the Service Desk, Problem Management, and Incident Management can restore services faster. This echoes what we learned back in Week 5 - KEDB is how organizations turn painful incidents into quick solutions.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">
                                The Knowledge Management Lifecycle
                            </h4>
                            <Paragraph
                                text={
                                    'The lifecycle includes: Knowledge Identification where we decide what knowledge the organization needs. Capture and Creation by extracting tacit and explicit knowledge. Review and Validation through SME verification. Storage and Maintenance by putting content into SKMS and Knowledge Base. Publishing and Sharing by distributing knowledge to users and IT teams. Usage and Improvement by using knowledge and refining it through feedback. This cycle showed me one important truth: Knowledge is not one-time documentation - it is a continuous improvement loop.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-md">
                                Part 3 - Group Activity: Mapping & Connecting ITSM Practices
                            </h3>
                            <Paragraph
                                text={
                                    'For the group task, my team created a large sticky-note mapping exercise to connect Event and Knowledge Management with all other ITSM practices we learned this semester. The sticky board was divided into four clusters: Event Management (Pink), Knowledge Management (Green), Related Practices (Blue), and Scenario Notes (Yellow and Purple).'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">What We Mapped</h4>
                            <Paragraph
                                text={
                                    'We connected scenarios like login failures, unstable Wi-Fi, slow system performance during peak hours, service degradation, incident escalations, wrong configurations, outdated knowledge articles, and missing diagnostics. We then mapped how each scenario would flow through multiple ITSM practices, such as: Event to Incident to Problem to Change to Release to CMDB to SLM.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">
                                The Complete Flow Visualization
                            </h4>
                            <Paragraph
                                text={
                                    'The bottom diagram shows the complete "connecting the dots" flow - a long chain visually tracing how an event triggers a cascade through every practice until the issue is resolved and knowledge is updated. It was the most holistic visualization of ITSM we have done so far. This task helped me see ITSM as a living system: everything is connected - an event triggers an incident, which can become a problem, which requires a change, which updates the CMDB, which then must be reflected in the knowledge base and catalog.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-md">Reflection</h3>
                            <Paragraph
                                text={
                                    'Week 14 was a reminder that ITSM is not just about solving issues - it is about detecting signals early and sharing knowledge continuously. Event Management makes organizations aware, alert, and proactive, while Knowledge Management ensures teams never lose what they have learned. And the group mapping activity brought everything together, showing how these two practices support every other part of IT Service Management. This week helped me understand that reliable IT services depend not only on hard skills or tools, but also on visibility, memory, and collaboration.'
                                }
                            />
                        </Section>
                    </Template>
                </Template>
            </div>
        </main>
    );
}

export default Week14;
