import React from 'react';
import { Metadata } from 'next';
import Paragraph from '@/components/ui/paragraph';
import Template from '@/components/ui/template';
import Section from '@/components/ui/text-section';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IconArrowLeft } from '@tabler/icons-react';

export const metadata: Metadata = {
    title: 'Week 6 - ITSM',
};

function Week6() {
    return (
        <main className="flex flex-col min-h-screen w-full pb-6 md:pb-12 lg:pb-20 justify-start items-center gap-4">
            <div className="w-full h-96 overflow-hidden">
                <Image
                    className="object-cover w-full h-full"
                    src="/itsm/week6-itsm.jpg"
                    alt="week6-banner"
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
                                Week 6 - ServiceNow Pre-Lab Stepping Into the Incident Lifecycle
                            </h1>
                            <p className="font-light text-sm">October 3, 2025</p>
                        </div>
                        <Paragraph
                            text={
                                'Week 6 was a transition week the bridge between learning ITIL concepts on paper and actually putting hands on a real ITSM platform. Before entering the big group simulation in Week 7, each student had to complete a ServiceNow Pre-Lab, where a Personal Developer Instance (PDI) was built and a full incident lifecycle walked through alone.'
                            }
                        />

                        <Paragraph
                            text={
                                'This week felt like assembling tools before entering the field. There was no solving multiple tickets or coordinating with a team yet. Instead, the focus was on learning how a single incident travels through the system, and how roles, permissions, and responsibilities shape the flow.'
                            }
                        />

                        <div className="w-full">
                            <Button variant={'outline'} className="w-full">
                                <a
                                    href="/itsm/5026231174_Week6.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    📄 Week 6 Class Activity
                                </a>
                            </Button>
                        </div>

                        <hr className="border-t border-gray-300 w-full mt-4" />

                        <Section>
                            <h3 className="font-semibold text-sm">
                                Setting Up Own ITSM Environment
                            </h3>
                            <Paragraph
                                text={
                                    'The first step was requesting a new ServiceNow Personal Developer Instance (PDI) on developer.servicenow.com. Once the instance spun up, an admin account was received and the login completed for the first time. This was a "blank canvas" an empty ITSM environment where users could be created, work simulated, and the impact of roles on system behavior observed.'
                                }
                            />
                            <Paragraph text={'Three required personas were then created:'} />
                            <ul className="list-disc pl-6 text-sm">
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>ITS User</strong> the customer
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>ITS Agent</strong> the Service Desk Agent
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>ITS Manager</strong> the ITSM manager
                                </li>
                            </ul>
                            <Paragraph
                                text={
                                    'Each account had different permissions. The User could only access the Service Portal. The Agent could view, edit, and resolve incidents. The Manager had full visibility across dashboards, reports, and all tickets. Assigning roles and testing logins made an appreciation grow for how much ITSM depends on access control, not just process flow.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-sm">
                                Creating First Incident as a Customer
                            </h3>
                            <Paragraph
                                text={
                                    'Once all accounts were ready, the mindset shifted into that of a frustrated employee. Logging into the Service Portal as itsuser, a real ticket was submitted:'
                                }
                            />
                            <ul className="list-disc pl-6 text-sm">
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>Short Description:</strong> Wi-Fi not working
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>Description:</strong> Cannot connect to Wi-Fi in the
                                    lab.
                                </li>
                            </ul>
                            <Paragraph
                                text={
                                    'Submitting it felt surprisingly real almost like reporting an actual campus network failure. The incident appeared in My Incidents with the status New, waiting for the Service Desk to take over. It was the first time viewing the platform from the user perspective: simple, guided, and focused on clarity.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-sm">
                                Becoming the Service Desk Agent
                            </h3>
                            <Paragraph
                                text={
                                    'Next, the itsagent account was logged into. This role immediately gave access to incident queues, workspaces, and the activity history of each ticket. Opening the Wi-Fi ticket, the exact steps a Service Desk Agent would perform were completed:'
                                }
                            />
                            <ul className="list-disc pl-6 text-sm">
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    Triage the incident
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    Assign the case to self
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    Change the state to In Progress
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    Write work notes explaining diagnosis steps
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    Resolve the case with a clear resolution message
                                </li>
                            </ul>
                            <Paragraph
                                text={
                                    'This experience helped to finally understand the difference between customer updates, work notes, and state transitions. Everything had a purpose: Work notes served as internal communication. Additional comments were visible to the user. State transitions reflected progress in the lifecycle. Even resolving the case required selecting a proper "close code," showing that ITSM is built on consistency and documentation, not guesswork.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-sm">Returning as the Customer</h3>
                            <Paragraph
                                text={
                                    'After closing the ticket as the agent, the switch back into itsuser occurred. In the Service Portal, the Wi-Fi ticket now displayed the status Resolved, with the agent work summary included. This last step the customer viewing and closing their own resolved ticket made clear how user trust relies heavily on visibility. When users see their issue documented, updated, and resolved transparently, IT feels reliable and responsive.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-sm">Exploring the Manager View</h3>
                            <Paragraph
                                text={
                                    'Finally, the itsmanager account was logged into. Unlike the agent, who works with individual records, the manager sees the bigger picture. Dashboards showed workload distribution. Reports summarized daily and weekly statuses. It was the first time seeing how ServiceNow transforms raw tickets into operational insight. Managers are not just supervising agents; they are monitoring service health at a strategic level.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-sm">Reflection</h3>
                            <Paragraph
                                text={
                                    'Week 6 was the first true encounter with ServiceNow not as a passive learner, but as someone navigating different IT roles. By switching between customer, agent, and manager, it became clear how structured and interconnected the incident lifecycle really is. Every step, field, and transition matters, because each role depends on the accuracy and clarity of the previous one.'
                                }
                            />
                            <Paragraph
                                text={
                                    'This pre-lab prepared for the much larger Week 7 simulation. It taught that ITSM is not just about solving issues it is about designing clear pathways, enabling role-based collaboration, and ensuring that every incident tells a complete and traceable story.'
                                }
                            />
                        </Section>
                    </Template>
                </Template>
            </div>
        </main>
    );
}

export default Week6;
