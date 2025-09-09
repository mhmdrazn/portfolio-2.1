import React from 'react';
import { Metadata } from 'next';
import Paragraph from '@/components/ui/paragraph';
import Template from '@/components/ui/template';
import Section from '@/components/ui/text-section';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IconArrowLeft } from '@tabler/icons-react';

export const metadata: Metadata = {
    title: 'Week 3 - ITSM',
};

function Recap() {
    return (
        <main className="flex flex-col min-h-screen w-full pb-6 md:pb-12 lg:pb-20 justify-start items-center gap-4">
            <div className="w-full h-96 overflow-hidden">
                <Image
                    className="object-cover w-full h-full"
                    src="/itsm/week3-itsm.jpg"
                    alt="week3-banner"
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
                                Week 3 – Service Value System and ITIL Management Practices
                            </h1>
                            <p className="font-light text-sm">September 9, 2025</p>
                        </div>
                        <Paragraph
                            text={
                                'In Week 3, we moved deeper into the Service Value System (SVS), one of the central models in ITIL 4. The SVS describes how all components and activities of an organization work together to co-create value, ensuring that IT services are not managed in isolation but as part of a holistic ecosystem. What stood out for me this week was how the SVS connects everything: guiding principles, governance, the service value chain, continual improvement, and practices. It is not just a model on paper but a way to see IT services as a living system that adapts to demand and opportunity.'
                            }
                        />

                        <Button variant={'outline'} className="w-fit mt-2">
                            <a
                                href="/itsm/5026231174_Week3.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                📄 Week 3 Class Assignment (PDF)
                            </a>
                        </Button>
                    </Template>

                    <hr className="border-t border-gray-300 w-full mt-4" />

                    <Template>
                        <h1 className="font-semibold">The Service Value System (SVS)</h1>

                        <Image
                            src="/itsm/week3-svs.png"
                            alt="svs"
                            className="my-3"
                            width={584}
                            height={317}
                        ></Image>

                        <Section>
                            <Paragraph
                                text={
                                    'From the textbook, I learned that the SVS integrates demand and opportunities into value by aligning organizational activities under a common structure. Its core components are:'
                                }
                            />

                            <ul className="list-disc pl-6 text-sm">
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>Guiding Principles</strong> universal recommendations
                                    like Focus on Value, Start Where You Are, and Optimize and
                                    Automate.
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>Governance</strong> ensuring alignment with strategic
                                    direction.
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>Service Value Chain</strong> the operating model that
                                    transforms demand into value through six key activities.
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>Continual Improvement</strong> ensuring services evolve
                                    and remain relevant.
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    <strong>Management Practices</strong> sets of organizational
                                    resources designed to perform work or achieve objectives.
                                </li>
                            </ul>

                            <Paragraph
                                text={
                                    'I realized that the SVS is powerful because it is flexible. Organizations can adapt it to different contexts, whether following Agile, DevOps, or traditional IT structures.'
                                }
                            />
                        </Section>
                    </Template>

                    <Template>
                        <Section>
                            <h1 className="font-semibold">
                                Linked Dimensions & Guiding Principles
                            </h1>
                            <Paragraph
                                text={
                                    'We then worked on scenarios that combined the Four Dimensions of Service Management with Guiding Principles from ITIL. This showed how both frameworks are interconnected and complement each other in solving practical ITSM challenges:'
                                }
                            />

                            <Section>
                                <h3 className="font-semibold text-sm mt-3">Scenario 1</h3>
                                <p className="font-light text-sm mb-2">
                                    A chatbot is introduced to answer student FAQs (e.g.,
                                    admissions, scholarships). Students complain it gives irrelevant
                                    answers, while staff say the data is outdated.
                                </p>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-xs">
                                        <tbody>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-2 font-semibold">
                                                    Dimension causing the issue. Why?
                                                </td>
                                                <td className="px-4 py-2">
                                                    Information &amp; Technology. The chatbot uses
                                                    outdated source data that is not regularly
                                                    updated, so the answers provided are not
                                                    relevant to the questions asked.
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-2 font-semibold">
                                                    Principle and What is it?
                                                </td>
                                                <td className="px-4 py-2">
                                                    Collaborate and Promote Visibility. We don’t
                                                    need to solve all problems at once; we can make
                                                    small improvements gradually by utilizing
                                                    feedback from students and staff.
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-2 font-semibold">
                                                    Link and how is it?
                                                </td>
                                                <td className="px-4 py-2">
                                                    With iterative improvements, the chatbot can be
                                                    tested and updated in cycles. Student feedback
                                                    makes answers more accurate, while staff can
                                                    continuously update the data source to keep it
                                                    relevant.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold">
                                                    Reflection
                                                </td>
                                                <td className="px-4 py-2">
                                                    <div>
                                                        <span className="font-semibold">
                                                            Other dimensions:
                                                        </span>{' '}
                                                        Organizations &amp; People (staff
                                                        responsible for data maintenance), Value
                                                        Streams &amp; Processes (updating the
                                                        workflow for the chatbot).
                                                    </div>
                                                    <div>
                                                        <span className="font-semibold">
                                                            Other principles:
                                                        </span>{' '}
                                                        Collaborate and Promote Visibility
                                                        (communication between IT and academic
                                                        staff) and Focus on Value (prioritize
                                                        student experience).
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Section>

                            <Section>
                                <h3 className="font-semibold text-sm mt-3">Scenario 2</h3>
                                <p className="font-light text-sm mb-2">
                                    The university upgrades Wi-Fi. Vendors delay delivery of
                                    equipment, leaving dormitories without coverage. Clearly,
                                    there’s a service gap because of vendor’s risk that is not
                                    mitigated.{' '}
                                </p>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-xs">
                                        <tbody>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-2 font-semibold">
                                                    Dimension causing the issue. Why?
                                                </td>
                                                <td className="px-4 py-2">
                                                    Partners &amp; Suppliers. The delay is caused by
                                                    dependence on vendors and supplier risks that
                                                    are not well managed, resulting in a service
                                                    gap.
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-2 font-semibold">
                                                    Principle and What is it?
                                                </td>
                                                <td className="px-4 py-2">
                                                    Collaborate and Promote Visibility. Work across
                                                    organizational boundaries with open
                                                    communication, ensuring risks, progress, and
                                                    obstacles are visible to all stakeholders.
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-2 font-semibold">
                                                    Link and how is it?
                                                </td>
                                                <td className="px-4 py-2">
                                                    By increasing visibility, the university and
                                                    vendor can share risk mitigation plans, monitor
                                                    equipment delivery schedules, and adjust actions
                                                    quickly. This collaboration ensures
                                                    accountability and minimizes delays.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold">
                                                    Reflection
                                                </td>
                                                <td className="px-4 py-2">
                                                    <div>
                                                        <span className="font-semibold">
                                                            Other dimensions:
                                                        </span>{' '}
                                                        Value Streams &amp; Processes (logistics and
                                                        deployment planning), Organizations &amp;
                                                        People (IT staff coordinating with vendors).
                                                    </div>
                                                    <div>
                                                        <span className="font-semibold">
                                                            Other principles:
                                                        </span>{' '}
                                                        Optimize and Automate (improving tracking
                                                        and monitoring), Focus on Value (ensuring
                                                        dorm Wi-Fi is available as a key student
                                                        service).
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Section>

                            <Paragraph
                                text={
                                    'These exercises showed me that ITSM challenges rarely sit in just one area. They usually cut across dimensions and require principles to guide responses. I began to see the SVS as a compass, not a rulebook.'
                                }
                            />
                        </Section>
                    </Template>

                    <Template>
                        <Section>
                            <h1 className="font-semibold">
                                The Service Value Chain (SVC) in Action
                            </h1>
                            <Paragraph
                                text={
                                    'We practiced applying the six activities of the Service Value Chain to a real ITS case: the migration of the email system from @my.its.ac.id to @its.ac.id'
                                }
                            />
                            <Section>
                                <h3 className="font-semibold text-sm mt-3">Case Scenario</h3>
                                <p className="font-light text-sm mb">
                                    ITS is going to migrate its email system from @my.its.edu to
                                    @its.edu. Using the service value chain, explain how does the
                                    activities go from demand to value.
                                </p>

                                <div className="overflow-x-auto my-6">
                                    <table className="min-w-full text-xs">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="px-4 py-2 text-center">SVC</th>
                                                <th className="px-4 py-2 text-center">Acivity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold">Plan</td>
                                                <td className="px-4 py-2">
                                                    ITS sets the migration strategy from
                                                    @my.its.ac.id to @its.ac.id to unify digital
                                                    identity, enhance access security, and ease
                                                    integration with Microsoft 365 services. This
                                                    stage also includes scheduling, budgeting, and
                                                    risk mitigation planning.
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-2 font-semibold">Engage</td>
                                                <td className="px-4 py-2">
                                                    ITS actively communicates with stakeholders
                                                    (students, lecturers, staff, vendors) to ensure
                                                    needs are understood. Migration information is
                                                    shared via official announcements,
                                                    socialization, and other channels so everyone is
                                                    prepared for the change.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold">
                                                    Design &amp; Transition
                                                </td>
                                                <td className="px-4 py-2">
                                                    The IT team designs secure data transfer
                                                    mechanisms (email, calendar, contacts, OneDrive)
                                                    to the new domain. Settings like auto-forwarding
                                                    and auto-reply are prepared to keep
                                                    communication smooth. Migration is tested in
                                                    stages to avoid disrupting campus activities.
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-2 font-semibold">
                                                    Obtain/Build
                                                </td>
                                                <td className="px-4 py-2">
                                                    ITS prepares the technical infrastructure for
                                                    the new @its.ac.id email based on Microsoft 365.
                                                    Servers, new accounts, and integration with
                                                    supporting apps (Zoom, Teams, Office 365, etc.)
                                                    are set up and tested before full
                                                    implementation.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold">
                                                    Deliver &amp; Support
                                                </td>
                                                <td className="px-4 py-2">
                                                    The migration is carried out with technical
                                                    guides for students and staff, including manuals
                                                    on logging in, syncing apps, and updating
                                                    accounts on various platforms. The ITS helpdesk
                                                    is on standby to assist users facing issues.
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-2 font-semibold">Improve</td>
                                                <td className="px-4 py-2">
                                                    After migration, ITS collects user feedback on
                                                    their experience. This input is used to improve
                                                    documentation, enhance service capacity, and
                                                    optimize the system. The evaluation also opens
                                                    opportunities for further development to better
                                                    support academic activities.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Section>

                            <Paragraph
                                text={
                                    'This case study demonstrated how demand (a simpler and more professional email domain) can be systematically transformed into value (improved user experience, efficiency, and digital reputation).'
                                }
                            />
                        </Section>
                    </Template>

                    <Template>
                        <Section>
                            <h1 className="font-semibold">Visualizing the Service Value System</h1>
                            <Paragraph
                                text={
                                    'To better understand how the SVS operates as a whole, I created a mind-map that placed all its components into a single picture. The map showed the Service Value Chain at the center, surrounded by guiding principles, governance, continual improvement, and practices.'
                                }
                            />

                            <Image
                                src="/itsm/week3-mindmap.png"
                                alt="mindmap"
                                height={4886}
                                width={2940}
                            ></Image>
                        </Section>
                    </Template>

                    <Template>
                        <Section>
                            <h1 className="font-semibold">ITIL Terms in Context</h1>
                            <Paragraph
                                text={
                                    'The week closed with a glossary of ITIL-related terms I had learned so far. Writing these definitions in my own words made the framework clearer'
                                }
                            />

                            <div className="overflow-x-auto my-6">
                                <table className="min-w-full text-xs">
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2">
                                                ITIL (Information Technology Infrastructure Library)
                                            </td>
                                            <td className="px-4 py-2">
                                                A best practice framework for managing IT services
                                                with the goal of creating value.
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2">
                                                Service Value System (SVS)
                                            </td>
                                            <td className="px-4 py-2">
                                                The overarching model that shows how all
                                                organizational components work together to create
                                                value.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Service Value Chain (SVC)</td>
                                            <td className="px-4 py-2">
                                                The operating model with six core activities (Plan,
                                                Engage, Design &amp; Transition, Obtain/Build,
                                                Deliver &amp; Support, Improve).
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2">
                                                Four Dimensions of Service Management
                                            </td>
                                            <td className="px-4 py-2">
                                                Perspectives that must be considered in all
                                                services: People, Technology, Partners, and
                                                Processes.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Guiding Principles</td>
                                            <td className="px-4 py-2">
                                                Universal recommendations such as Focus on Value or
                                                Collaborate and Promote Visibility that help guide
                                                decisions.
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2">Continual Improvement</td>
                                            <td className="px-4 py-2">
                                                Ongoing activity to ensure services remain relevant
                                                and effective.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Demand</td>
                                            <td className="px-4 py-2">
                                                The request or need from users that triggers
                                                activities.
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2">Opportunity</td>
                                            <td className="px-4 py-2">
                                                A chance to improve or introduce services that
                                                generate value.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Value</td>
                                            <td className="px-4 py-2">
                                                The outcome experienced by stakeholders, shaped by
                                                both utility (fit for purpose) and warranty (fit for
                                                use).
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2">
                                                Service Management Practices
                                            </td>
                                            <td className="px-4 py-2">
                                                Practices that manage services end-to-end, such as
                                                Incident Management or Change Enablement.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">
                                                General Management Practices
                                            </td>
                                            <td className="px-4 py-2">
                                                Practices that apply across the organization, such
                                                as Risk Management or Continual Improvement.
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2">
                                                Technical Management Practices
                                            </td>
                                            <td className="px-4 py-2">
                                                Practices focused on technology and infrastructure,
                                                such as Deployment or Software Development.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Section>
                    </Template>

                    <hr className="border-t border-gray-300 w-full mt-4" />

                    <Template>
                        <h1 className="font-semibold">Reflection</h1>
                        <Paragraph
                            text={
                                'Week 3 helped me connect theory with real application. The SVS taught me to view ITSM as an interconnected system where guiding principles, governance, and practices all reinforce one another. The email migration case was especially eye-opening, as I could trace how a demand turned into real value through the service value chain. The chatbot and Wi-Fi scenarios showed that ITSM problems often reveal weaknesses in visibility and collaboration rather than just technology. This week gave me a sense that ITIL is not a rigid framework but a flexible toolkit, and learning how to apply it will be key to solving future challenges.'
                            }
                        />
                    </Template>
                </Template>
            </div>
        </main>
    );
}

export default Recap;
