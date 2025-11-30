import React from 'react';
import { Metadata } from 'next';
import Paragraph from '@/components/ui/paragraph';
import Template from '@/components/ui/template';
import Section from '@/components/ui/text-section';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IconArrowLeft } from '@tabler/icons-react';

export const metadata: Metadata = {
    title: 'Week 7 - ITSM',
};

function Week7() {
    return (
        <main className="flex flex-col min-h-screen w-full pb-6 md:pb-12 lg:pb-20 justify-start items-center gap-4">
            <div className="w-full h-96 overflow-hidden">
                <Image
                    className="object-cover w-full h-full"
                    src="/itsm/week7-itsm.jpg"
                    alt="week7-banner"
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
                                Week 7 - Group Simulation ServiceNow Incident Lifecycle
                            </h1>
                            <p className="font-light text-sm">October 10, 2025</p>
                        </div>
                        <Paragraph
                            text={
                                'After learning about processes like Incident and Problem Management in theory, Week 7 finally put those ideas into practice. This time, we did not just study ITSM we lived it through a hands-on simulation using ServiceNow. Our group (Team 11) was tasked to act as IT service professionals inside a real ServiceNow Personal Developer Instance (PDI).'
                            }
                        />

                        <Paragraph
                            text={
                                'We turned raw Kaggle incident data into live ITIL-compliant tickets, mapped them to categories (Network, Hardware, Software/Application), and simulated how users, agents, and specialists collaborate to restore services. It was like watching the ITIL framework come to life, one ticket at a time.'
                            }
                        />

                        <div className="w-full">
                            <Button variant={'outline'} className="w-full">
                                <a
                                    href="/itsm/5026231174_Week7_Group 11.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    📄 Week 7 Group Report
                                </a>
                            </Button>
                        </div>

                        <hr className="border-t border-gray-300 w-full mt-4" />

                        <Section>
                            <h3 className="font-semibold text-sm">
                                Setting Up Our ServiceNow Environment
                            </h3>
                            <Paragraph
                                text={
                                    'Before we could even begin, we had to build our own mini organization inside ServiceNow. We created five user accounts with specific roles:'
                                }
                            />
                            <ul className="list-disc pl-6 text-sm">
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>its_user</strong> Customer submitting incidents
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>its_worker</strong> Service Desk Agent (Tier 1)
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>its_net</strong> Network Specialist
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>its_hw</strong> Hardware Specialist
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>its_sw</strong> Software/Application Specialist
                                </li>
                            </ul>
                            <Paragraph
                                text={
                                    'Each user was assigned roles (user, itil) and grouped into Network, Hardware, and Software Support Teams. This setup mirrored a real IT department structure. Seeing these accounts interact made me appreciate how ITSM defines not just what people do, but how teams communicate across levels.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-sm">
                                Phase 1 - Becoming the Customer
                            </h3>
                            <Paragraph
                                text={
                                    'The simulation started with its_user role as the end customer. From the Service Portal, 15 incident tickets were manually submitted based on the selected dataset:'
                                }
                            />
                            <ul className="list-disc pl-6 text-sm">
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>5 Network incidents</strong> VPN-router connection
                                    failure, unstable Wi-Fi, office-wide outage
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>5 Hardware incidents</strong> printer driver issue,
                                    server overheating, hardware failure in analytics systems
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>5 Software/Application incidents</strong> SaaS
                                    malfunction, app crash, access failure
                                </li>
                            </ul>
                            <Paragraph
                                text={
                                    'Each ticket included a short description, detailed context, and assigned category. After submission, all incidents appeared in My Incidents with the status "New." It felt surprisingly realistic like actually logging real IT problems across a company.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-sm">
                                Phase 2 - The Service Desk Perspective
                            </h3>
                            <Paragraph
                                text={
                                    'As its_worker (Tier 1 Service Desk Agent), the ITIL process showed its structure. Every new ticket came in waiting for triage. The job was to read the descriptions carefully, confirm categories, assign the right Assignment Group (Network, Hardware, or Software), and add a work note: "Ticket triaged and assigned to specialist."'
                                }
                            />
                            <Paragraph
                                text={
                                    'Each ticket status was changed to In Progress. This highlighted the Service Desk power they do not just fix issues, they organize chaos into process. Every note, every field, and every assignment mattered because it built accountability into the system.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-sm">
                                Phase 3 - The Specialists Take Over
                            </h3>
                            <Paragraph
                                text={'Once triaged, the tickets reached our Tier 2 specialists:'}
                            />
                            <ul className="list-disc pl-6 text-sm">
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>Ananda Donelly (its_net)</strong> handled Network
                                    incidents.
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>Astrid Meilendra (its_hw)</strong> focused on Hardware
                                    issues.
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>Muhammad Razan Parisya Putra (its_sw)</strong> resolved
                                    Software/Application problems.
                                </li>
                            </ul>
                            <Paragraph
                                text={
                                    'The Software Specialist worked on incidents involving SaaS malfunction, application crashes, and software-device incompatibility. The task was to troubleshoot, record detailed work notes about applied patches or configuration fixes, and change each ticket status to Resolved.'
                                }
                            />
                            <Paragraph
                                text={
                                    'Meanwhile, the Network and Hardware specialists documented their own actions replacing parts, diagnosing routers, and ensuring system recovery. What made it feel authentic was the collaboration: each role depended on the other, exactly like in a real IT organization.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-sm">
                                Phase 4 - Customer Confirmation
                            </h3>
                            <Paragraph
                                text={
                                    'To close the loop, the its_user logged back in through the Service Portal. All 15 tickets had changed their status to Resolved, complete with notes from specialists.'
                                }
                            />
                            <Paragraph
                                text={
                                    'Brief feedback and "thank you" comments were added on several tickets before closing them. This simple gesture demonstrated how important the final confirmation step is it is not just about resolution, but about user satisfaction and trust in IT services.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-sm">Reflection</h3>
                            <Paragraph
                                text={
                                    'This simulation was the most eye-opening part of the course so far. It transformed ITIL 4 concepts into real, tangible experiences. I finally understood how every role customer, agent, specialist contributes to the end-to-end value stream. From the Service Desk triaging tickets to specialists resolving them, every action builds transparency, accountability, and service reliability.'
                                }
                            />
                            <Paragraph
                                text={
                                    'As a group, we learned that ITSM is not just a technical system it is a human one. The exercise highlighted the importance of documentation, clear communication, and teamwork. It also showed how tools like ServiceNow embody ITIL values of visibility and continual improvement. By the end of Week 7, I no longer saw ITSM as theory it had become something I had lived and experienced firsthand.'
                                }
                            />
                        </Section>
                    </Template>
                </Template>
            </div>
        </main>
    );
}

export default Week7;
