import React from 'react';
import { Metadata } from 'next';
import Paragraph from '@/components/ui/paragraph';
import Template from '@/components/ui/template';
import Section from '@/components/ui/text-section';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IconArrowLeft } from '@tabler/icons-react';

export const metadata: Metadata = {
    title: 'Week 4 - ITSM',
};

function Recap() {
    return (
        <main className="flex flex-col min-h-screen w-full pb-6 md:pb-12 lg:pb-20 justify-start items-center gap-4">
            <div className="w-full h-96 overflow-hidden">
                <Image
                    className="object-cover w-full h-full"
                    src="/itsm/week4-itsm.jpg"
                    alt="week4-banner"
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
                                Week 4 – Service Desk and Incident Management
                            </h1>
                            <p className="font-light text-sm">September 16, 2025</p>
                        </div>
                        <Paragraph
                            text={
                                'This week, my learning shifted from big frameworks like the Service Value System into the day-to-day frontline of IT Service Management: the Service Desk. If the SVS is the compass of ITSM, then the Service Desk is the voice and ears of the organization. It is the single point of contact where users meet IT, whether they are reporting an incident, making a service request, or simply asking for help. '
                            }
                        />

                        <Paragraph
                            text={
                                'I learned that the Service Desk is more than a troubleshooting hub. According to ITIL 4, its role extends to ensuring user experience, maintaining communication, and supporting continual improvement. In short, it is not just about fixing things but about building trust.'
                            }
                        />

                        <div className="flex flex-row gap-3 w-full">
                            <Button variant={'outline'} className="mt-2 w-full">
                                <a
                                    href="/itsm/5026231174_Week4.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    📄 Week 4 Class Assignment
                                </a>
                            </Button>

                            <Button variant={'outline'} className="w-full mt-2">
                                <a
                                    href="/itsm/5026231174_Week4_Group.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    📄 Week 4 Group Assignment
                                </a>
                            </Button>
                        </div>
                    </Template>

                    <hr className="border-t border-gray-300 w-full mt-4" />

                    <Template>
                        <Section>
                            <h1 className="font-semibold">
                                Understanding the Role of the Service Desk
                            </h1>
                            <Paragraph
                                text={
                                    'The Service Desk is often described as the “single point of contact,” but in reality it is more than just a contact channel. It is a function that embodies the first impression users have of IT. In my assignment, I emphasized that the Service Desk manages the flow of communication, ensures users feel heard, and translates technical complexity into human language.'
                                }
                            />

                            <Paragraph
                                text={
                                    'For instance, if a student cannot access their online exam because the portal is down, the Service Desk is the first to respond. Even if the technical fix requires another team, the Service Desk ensures the student receives updates, reassurance, and guidance. Without this, IT can feel like a black box.'
                                }
                            />
                        </Section>
                    </Template>

                    <Template>
                        <Section>
                            <h1 className="font-semibold">Service Desk vs. Help Desk</h1>
                            <Paragraph
                                text={
                                    'This comparison was eye-opening. A Help Desk is traditionally reactive, solving issues when they come up, but rarely going further. A Service Desk, however, integrates with ITIL principles and business goals. It provides not only solutions but also communication, coordination, and insights.'
                                }
                            />

                            <div className="overflow-x-auto my-6">
                                <table className="min-w-full text-xs">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="px-4 py-2 text-left">Aspect</th>
                                            <th className="px-4 py-2 text-left">
                                                Help Desk (Traditional)
                                            </th>
                                            <th className="px-4 py-2 text-left">
                                                Service Desk (ITIL)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2 font-semibold">
                                                Main Function
                                            </td>
                                            <td className="px-4 py-2">
                                                Solve daily technical issues
                                            </td>
                                            <td className="px-4 py-2">
                                                SPOC for incidents, requests, communication,
                                                knowledge
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2 font-semibold">Orientation</td>
                                            <td className="px-4 py-2">
                                                Technical troubleshooting only
                                            </td>
                                            <td className="px-4 py-2">
                                                Business + Technical (aligned with SLAs)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-semibold">Proactive?</td>
                                            <td className="px-4 py-2">No, reactive only</td>
                                            <td className="px-4 py-2">
                                                Yes, proactive notifications and trend management
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2 font-semibold">Added Value</td>
                                            <td className="px-4 py-2">Short-term fixes</td>
                                            <td className="px-4 py-2">
                                                Supports business strategy and user satisfaction
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-semibold">Example</td>
                                            <td className="px-4 py-2">
                                                Small IT call center resetting passwords
                                            </td>
                                            <td className="px-4 py-2">
                                                University Service Desk managing email issues,
                                                software requests, SLA reporting
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Section>
                    </Template>

                    <Template>
                        <Section>
                            <h1 className="font-semibold">Types of Service Desk</h1>
                            <Paragraph
                                text={
                                    'When I explored this part of the assignment, I realized that Service Desks are not built in one universal way. They can take many forms depending on size, business model, ownership, customer orientation, and even how communication flows. Here’s what I learned in detail:'
                                }
                            />
                            <Section>
                                <h3 className="font-semibold text-sm mt-3">By Size & Location</h3>
                                <ul className="list-disc pl-6 text-sm">
                                    <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                        <strong>Local Service Desk</strong> located physically close
                                        to users (e.g., campus building or company branch), builds
                                        strong personal interaction but can be costly if repeated
                                        across many sites.
                                    </li>
                                    <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                        <strong>Central Service Desk</strong> all requests are
                                        funneled into one central location, allowing efficiency and
                                        consistency for larger organizations, but must consider
                                        challenges like language or time zones.
                                    </li>
                                    <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                        <strong>Virtual Service Desk</strong> staff are spread
                                        across locations but connected through technology, giving
                                        the illusion of one unified desk; flexible, scalable, and
                                        cost-efficient.
                                    </li>
                                    <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                        <strong>Follow-the-Sun</strong> global teams hand over work
                                        as time zones shift, creating 24/7 coverage; powerful but
                                        complex to manage.
                                    </li>
                                </ul>

                                <h3 className="font-semibold text-sm mt-3">By Business Model</h3>
                                <ul className="list-disc pl-6 text-sm">
                                    <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                        <strong>Cost Center</strong> the Service Desk operates on a
                                        budget and is treated as an expense. The challenge is
                                        controlling hidden costs while still providing reliable
                                        service.
                                    </li>
                                    <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                        <strong>Profit Center</strong> the Service Desk generates
                                        revenue by charging customers for services, often with a
                                        defined service catalog and pricing. Common in IT
                                        outsourcing companies.
                                    </li>
                                </ul>

                                <h3 className="font-semibold text-sm mt-3">By Ownership</h3>
                                <ul className="list-disc pl-6 text-sm">
                                    <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                        <strong>In-house</strong> the organization runs its own
                                        Service Desk, managed by internal staff. This gives control
                                        but requires more effort in staffing and budgeting.
                                    </li>
                                    <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                        <strong>Outsourced</strong> a third-party vendor provides
                                        Service Desk services. This can lower costs and bring
                                        expertise, but introduces risks like reduced control and
                                        added complexity.
                                    </li>
                                </ul>

                                <h3 className="font-semibold text-sm mt-3">
                                    By Customer Orientation
                                </h3>
                                <ul className="list-disc pl-6 text-sm">
                                    <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                        <strong>Internal</strong> focused on serving the employees
                                        of an organization (e.g., IT, HR, facilities, vehicle
                                        management). Vital for ensuring productivity.
                                    </li>
                                    <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                        <strong>External</strong> aimed at supporting paying
                                        customers who use the company’s products or services.
                                        Directly shapes customer experience and brand reputation.
                                    </li>
                                </ul>

                                <h3 className="font-semibold text-sm mt-3">
                                    By Communication Flow
                                </h3>
                                <ul className="list-disc pl-6 text-sm">
                                    <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                        <strong>Inbound</strong> customers initiate contact (calls,
                                        tickets, emails), and the desk responds. The most
                                        traditional setup.
                                    </li>
                                    <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                        <strong>Outbound</strong> the Service Desk reaches out to
                                        customers first, often for proactive updates, onboarding
                                        guidance, or upselling opportunities. Turns the Service Desk
                                        into a more active player in customer engagement.
                                    </li>
                                </ul>
                            </Section>
                        </Section>
                    </Template>

                    <Template>
                        <Section>
                            <h1 className="font-semibold">The Processes of Service Desk</h1>
                            <Paragraph
                                text={
                                    'Next, I walked through the sub-processes that make the Service Desk effective. What surprised me was how structured the workflow is:'
                                }
                            />

                            <Image
                                src="/itsm/week4-process.jpg"
                                alt="process"
                                height={4886}
                                width={2940}
                            ></Image>

                            <Paragraph
                                text={
                                    'This was where the Service Desk came alive for me, in its processes. At first, I thought handling incidents was just “receive and solve.” But when I mapped the processes, I saw a choreography, almost like a dance where every step matters.'
                                }
                            />

                            <Paragraph
                                text={
                                    'It begins with registering incidents. Every case is documented, even the small ones, because every record builds the knowledge that prevents future mistakes. Then there are service requests, which are not emergencies but standard needs — handled with predefined timelines so users know what to expect.'
                                }
                            />

                            <Paragraph
                                text={
                                    'If the issue is simple, the Service Desk aims for immediate resolution, solving it at first contact. But when the problem is complex, it moves into analysis and resolution, sometimes escalating to Problem Management.'
                                }
                            />

                            <Paragraph
                                text={
                                    'The Service Desk also monitors deadlines and escalates when risks appear, ensuring SLAs are not broken. At the same time, it proactively informs users, sending updates before they have to ask. When the issue is solved, the Service Desk does not just close the ticket; it evaluates the solution, making sure it really works for the user. Then the solution is stored in the knowledge base, where it becomes a reusable tool for the future. Finally, data is gathered into incident reports, giving leaders insights to improve.'
                                }
                            />
                        </Section>
                    </Template>

                    <Template>
                        <Section>
                            <h1 className="font-semibold">KPIs of Service Desk</h1>
                            <Paragraph
                                text={
                                    'In this part, I had to measure how success looks for the Service Desk. Numbers, I discovered, can tell powerful stories.'
                                }
                            />

                            <div className="overflow-x-auto my-6">
                                <table className="min-w-full text-xs">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="px-4 py-2 text-left">KPI</th>
                                            <th className="px-4 py-2 text-left">Definition</th>
                                            <th className="px-4 py-2 text-left">Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2 font-semibold">
                                                Number of Repeated Incidents
                                            </td>
                                            <td className="px-4 py-2">
                                                Number of recurring incidents with a known
                                                resolution method.
                                            </td>
                                            <td className="px-4 py-2">
                                                Measures effectiveness of Knowledge Management and
                                                Problem Management.
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2 font-semibold">
                                                Incidents Resolved Remotely
                                            </td>
                                            <td className="px-4 py-2">
                                                Number of incidents resolved remotely by the Service
                                                Desk (without visiting the user).
                                            </td>
                                            <td className="px-4 py-2">
                                                Reduces cost & time, increases efficiency.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-semibold">
                                                Number of Escalations
                                            </td>
                                            <td className="px-4 py-2">
                                                Number of incidents escalated due to not being
                                                resolved within the agreed resolution time.
                                            </td>
                                            <td className="px-4 py-2">
                                                Measures first-level resolution quality & SLA
                                                adherence.
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2 font-semibold">
                                                Number of Incidents
                                            </td>
                                            <td className="px-4 py-2">
                                                Number of incidents registered by the Service Desk,
                                                usually categorized by type.
                                            </td>
                                            <td className="px-4 py-2">
                                                Workload analysis & incident trend tracking.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-semibold">
                                                Average Initial Response Time
                                            </td>
                                            <td className="px-4 py-2">
                                                Average time between incident report and first
                                                response from Service Desk.
                                            </td>
                                            <td className="px-4 py-2">
                                                Measures speed of initial response & communication
                                                quality.
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2 font-semibold">
                                                Incident Resolution Time
                                            </td>
                                            <td className="px-4 py-2">
                                                Average time to resolve incidents (per category).
                                            </td>
                                            <td className="px-4 py-2">
                                                Measures effectiveness in restoring normal service.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-semibold">
                                                First Time Resolution Rate
                                            </td>
                                            <td className="px-4 py-2">
                                                Percentage of incidents resolved at first contact by
                                                the Service Desk.
                                            </td>
                                            <td className="px-4 py-2">
                                                Indicator of Service Desk efficiency & capability.
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2 font-semibold">
                                                Resolution within SLA
                                            </td>
                                            <td className="px-4 py-2">
                                                Percentage of incidents resolved within the agreed
                                                SLA target time.
                                            </td>
                                            <td className="px-4 py-2">
                                                Ensures service quality & customer satisfaction.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-semibold">
                                                Incident Resolution Effort
                                            </td>
                                            <td className="px-4 py-2">
                                                Average work effort required to resolve incidents.
                                            </td>
                                            <td className="px-4 py-2">
                                                Measures Service Desk resource efficiency.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                If the <strong>First Time Resolution Rate</strong> is high, it shows
                                that the team is skilled and efficient. If the{' '}
                                <strong>average response time</strong> is quick, it shows users are
                                not left waiting in silence. If <strong>SLA compliance</strong> is
                                consistent, it shows that commitments are being honored. But if
                                there are too many <strong>repeated incidents</strong>, it shows the
                                system is not learning. If there are too many{' '}
                                <strong>escalations</strong>, it may mean Level 1 staff are
                                undertrained.
                            </p>
                            <p className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                Looking at these KPIs, I realized they are not just metrics for
                                managers. They are mirrors of user experience. Each number is a
                                reflection of how people feel about the Service Desk: ignored,
                                frustrated, reassured, or impressed.
                            </p>
                        </Section>
                    </Template>

                    <Template>
                        <Section>
                            <h1 className="font-semibold">Incident Management vs. Service Desk</h1>
                            <Paragraph
                                text={
                                    'This task cleared up a confusion I had. At first, I used “incident management” and “service desk” as if they were the same thing. But they are not.'
                                }
                            />

                            <Paragraph
                                text={
                                    'Incident Management is a process. It is the structured set of steps designed to restore service as fast as possible. Service Desk is a function. It is the team that carries out the steps, communicates with users, and makes sure the process feels human.'
                                }
                            />

                            <div className="overflow-x-auto my-6">
                                <table className="min-w-full text-xs">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="px-4 py-2 text-left">Aspect</th>
                                            <th className="px-4 py-2 text-left">
                                                Incident Management
                                            </th>
                                            <th className="px-4 py-2 text-left">Service Desk</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2 font-semibold">Definition</td>
                                            <td className="px-4 py-2">
                                                Process in ITIL for managing incidents.
                                            </td>
                                            <td className="px-4 py-2">
                                                Function/Team that acts as SPOC with users.
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2 font-semibold">Focus</td>
                                            <td className="px-4 py-2">
                                                Restore normal service as quickly as possible.
                                            </td>
                                            <td className="px-4 py-2">
                                                Handles communication, logging, resolution,
                                                escalation.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-semibold">Output</td>
                                            <td className="px-4 py-2">
                                                SLA compliance, incident reports, solutions.
                                            </td>
                                            <td className="px-4 py-2">
                                                User experience, ticket data, communication.
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2 font-semibold">Scope</td>
                                            <td className="px-4 py-2">
                                                Part of ITIL Service Operation (v3) or Practice
                                                (v4).
                                            </td>
                                            <td className="px-4 py-2">
                                                One of the key functions in ITSM.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-semibold">Example</td>
                                            <td className="px-4 py-2">
                                                Procedure for handling &quot;email server down&quot;
                                                → restore in 2 hours.
                                            </td>
                                            <td className="px-4 py-2">
                                                Service Desk agent receives report, gives status
                                                updates, closes ticket after fix.
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
                                'This week, the Service Desk went from being a vague concept to being something I could picture in detail, its roles, its types, its processes, its measures, and even its failures. I saw it as both a human role and a structured system. The assignment made me realize that while users see only a phone number or email address, behind it lies a carefully designed function that balances empathy with discipline.'
                            }
                        />

                        <Paragraph
                            text={
                                'I walked away convinced that the Service Desk is both the human face and the memory keeper of ITSM. It listens, it responds, it learns, and it improves. Without it, IT would feel distant and unreliable. With it, IT becomes approachable, dependable, and trusted.'
                            }
                        />
                    </Template>
                </Template>
            </div>
        </main>
    );
}

export default Recap;
