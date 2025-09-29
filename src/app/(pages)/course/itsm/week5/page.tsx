import React from 'react';
import { Metadata } from 'next';
import Paragraph from '@/components/ui/paragraph';
import Template from '@/components/ui/template';
import Section from '@/components/ui/text-section';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IconArrowLeft } from '@tabler/icons-react';

export const metadata: Metadata = {
    title: 'Week 5 - ITSM',
};

function Recap() {
    return (
        <main className="flex flex-col min-h-screen w-full pb-6 md:pb-12 lg:pb-20 justify-start items-center gap-4">
            <div className="w-full h-96 overflow-hidden">
                <Image
                    className="object-cover w-full h-full"
                    src="/itsm/week5-itsm.jpg"
                    alt="week5-banner"
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
                            <h1 className="font-semibold text-3xl">Week 5 – Problem Management</h1>
                            <p className="font-light text-sm">September 23, 2025</p>
                        </div>
                        <Paragraph
                            text={
                                'After spending the last week exploring the Service Desk, this week my focus shifted to Problem Management. If Incident Management is about putting out fires quickly, Problem Management is about asking why the fire started in the first place and making sure it never happens again.'
                            }
                        />

                        <Paragraph
                            text={
                                'By the end of the week, I could clearly see how Problem Management differs from Incident Management. Incidents are about restoring service immediately, while Problems are about digging into the root cause, preventing repetition, and reducing long-term risk. ITIL 4 taught me that Problem Management is structured around three big activities: Problem Identification, Problem Control, and Error Control.'
                            }
                        />

                        <div className="flex flex-col gap-1 w-full">
                            <div className="flex flex-row gap-3 w-full">
                                <Button variant={'outline'} className="mt-2 w-full">
                                    <a
                                        href="/itsm/5026231174_Week5.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        📄 Week 5 Class Assignment
                                    </a>
                                </Button>

                                <Button variant={'outline'} className="w-full mt-2">
                                    <a
                                        href="/itsm/Week5_Lab.xlsx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        📄 Week 5 Lab 02 (Group)
                                    </a>
                                </Button>
                            </div>

                            <Button variant={'outline'} className="w-full mt-2">
                                <a
                                    href="/itsm/Week5_Report.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    📄 Week 5 Lab Report (Group)
                                </a>
                            </Button>
                        </div>
                    </Template>

                    <hr className="border-t border-gray-300 w-full mt-4" />

                    <Template>
                        <Section>
                            <h1 className="font-semibold">Understanding Problem Management</h1>
                            <Paragraph
                                text={
                                    'The first task asked me to define Problem Management in my own words. I described it as a structured practice focused on identifying, analyzing, and eliminating the root causes of incidents.'
                                }
                            />

                            <Paragraph
                                text={
                                    'As I wrote, I realized its value lies in being proactive. Users often only care if the service comes back. But behind the scenes, IT must care about preventing the same disruption tomorrow. That’s where Problem Management begins.'
                                }
                            />

                            <p className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                At first, I thought this was just another layer of Incident
                                Management. But as I reflected, I saw the contrast:
                            </p>

                            <ul>
                                <li>
                                    <p className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                        Problems are about <strong>prevention</strong>, understand
                                        and eliminate the cause.{' '}
                                    </p>
                                </li>
                                <li>
                                    <p className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                        Incidents are about <strong>speed</strong>, restore the
                                        service quickly.
                                    </p>
                                </li>
                            </ul>
                        </Section>
                    </Template>

                    <Template>
                        <Section>
                            <h1 className="font-semibold">The Lifecycle of a Problem</h1>
                            <Paragraph
                                text={
                                    'When I reached this part of the assignment, I realized Problem Management is not just one big activity, it is a set of sub-processes, each with its own role in preventing recurring incidents. Writing them out made me feel like I was mapping the different gears in a machine: every piece turns to keep the system running smoothly.'
                                }
                            />

                            <div className="overflow-x-auto my-6">
                                <table className="min-w-full text-xs">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="px-4 py-2 text-left">Sub-Process</th>
                                            <th className="px-4 py-2 text-left">Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2 font-semibold">
                                                Proactive Problem Identification
                                            </td>
                                            <td className="px-4 py-2">
                                                Increase service availability by proactively
                                                identifying Problems—finding issues before incidents
                                                recur.
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2 font-semibold">
                                                Problem Categorization and Prioritization
                                            </td>
                                            <td className="px-4 py-2">
                                                Record and prioritize Problems accurately to ensure
                                                quick and effective resolution.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-semibold">
                                                Problem Diagnosis and Resolution
                                            </td>
                                            <td className="px-4 py-2">
                                                Identify the root cause of a Problem and initiate
                                                the most suitable and efficient solution. Provide a
                                                temporary workaround if possible.
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2 font-semibold">
                                                Problem and Error Control
                                            </td>
                                            <td className="px-4 py-2">
                                                Monitor unresolved Problems and their processing
                                                status to enable corrective action if needed.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-semibold">
                                                Problem Closure and Evaluation
                                            </td>
                                            <td className="px-4 py-2">
                                                After a permanent solution is applied, ensure the
                                                Problem Record contains a complete historical
                                                description and update Known Error Records as
                                                needed.
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2 font-semibold">
                                                Major Problem Review
                                            </td>
                                            <td className="px-4 py-2">
                                                Conduct a formal review of major Problem resolutions
                                                to ensure the issue is fully addressed and generate
                                                lessons learned to prevent recurrence.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-semibold">
                                                Problem Management Reporting
                                            </td>
                                            <td className="px-4 py-2">
                                                Provide Problem reports, including status, available
                                                workarounds, and a list of outstanding problems to
                                                other service management processes and IT
                                                management.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Section>
                    </Template>

                    <Template>
                        <Section>
                            <h1 className="font-semibold">Measuring Success with KPIs</h1>
                            <Paragraph
                                text={
                                    'The next task made me think about how we measure success. With incidents, the KPI is usually speed, how fast did you respond, how fast did you close the ticket?'
                                }
                            />

                            <Paragraph
                                text={
                                    'But with Problem Management, the story is different. It’s measured by how many problems were eliminated, how many root causes were identified, and whether repeat incidents declined. Even customer satisfaction became an important measure, because if problems are solved permanently, users begin to notice stability and reliability.'
                                }
                            />

                            <div className="overflow-x-auto my-6">
                                <table className="min-w-full text-xs">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="px-4 py-2 text-left">KPI</th>
                                            <th className="px-4 py-2 text-left">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2 font-semibold">
                                                Number of problems recorded
                                            </td>
                                            <td className="px-4 py-2">
                                                Measures the number of problems identified in a
                                                given period.
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2 font-semibold">
                                                Average resolution time
                                            </td>
                                            <td className="px-4 py-2">
                                                Average time taken to resolve problems.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-semibold">
                                                % of problems with identified root cause
                                            </td>
                                            <td className="px-4 py-2">
                                                Percentage of problems where the root cause was
                                                successfully identified.
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2 font-semibold">
                                                % of problems resolved with workaround
                                            </td>
                                            <td className="px-4 py-2">
                                                Percentage of problems temporarily addressed with a
                                                workaround.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-semibold">
                                                Number of repeat incidents
                                            </td>
                                            <td className="px-4 py-2">
                                                Measures the effectiveness of problem management in
                                                preventing recurring incidents.
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2 font-semibold">
                                                Customer satisfaction
                                            </td>
                                            <td className="px-4 py-2">
                                                Level of user satisfaction regarding problem
                                                resolution.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <Paragraph
                                text={
                                    'To me, these KPIs told a bigger story: success here is not about racing to the finish line, but about making sure the race track itself is safe for the future.'
                                }
                            />
                        </Section>
                    </Template>

                    <Template>
                        <Section>
                            <h1 className="font-semibold">Known Error Database (KEDB)</h1>
                            <Paragraph
                                text={
                                    'This was my “aha” moment of the week. The KEDB is like a memory bank for IT. It stores every known problem and its workaround so that the next time it appears, no one has to start from scratch.'
                                }
                            />

                            <Paragraph
                                text={
                                    'The KEDB was one of the most fascinating discoveries this week. It works like the organization’s memory bank, a repository where every identified problem, its root cause, and its workaround are stored. Instead of starting from scratch every time a repeated incident occurs, Service Desk agents can check the KEDB and instantly apply a solution.'
                                }
                            />

                            <Paragraph
                                text={
                                    'For example, we discussed a case where a bug in an HR application caused login failures when users opened it on older browsers. The root cause had already been identified, and the workaround was simple: advise users to switch to the latest browser version. Once this information was recorded in the KEDB, the Service Desk could respond in seconds instead of wasting time reanalyzing the same bug.'
                                }
                            />

                            <Paragraph text={'This is a KEDB that I created on the Lab Session'} />

                            <Image
                                src="/itsm/week5-kedb.png"
                                alt="kedb"
                                height={1172}
                                width={538}
                            ></Image>
                        </Section>
                    </Template>

                    <Template>
                        <Section>
                            <h1 className="font-semibold">Workarounds as Survival Tools</h1>
                            <Paragraph
                                text={
                                    'One of the most important lessons I picked up this week was the role of workarounds. At first, I thought of them as “half-baked fixes,” something you do when you can’t solve the problem properly. But the more I studied, the more I realized that workarounds are actually survival tools. They buy time, reduce impact, and keep users productive while IT works on a permanent solution.'
                                }
                            />

                            <Paragraph
                                text={
                                    'Take the example of the HR application bug that caused login failures on outdated browsers. The permanent fix required patching the application, which would take time. But the workaround, advising users to update to the latest browser, gave employees immediate access to the system. It didn’t remove the bug, but it restored productivity almost instantly.'
                                }
                            />

                            <Paragraph
                                text={
                                    'In my group’s lab exercise, I saw this play out again with the VPN router connectivity problem. The root causes included firmware incompatibility and lack of redundancy. A permanent solution meant rolling back firmware versions and redesigning the network. But in the meantime, the workaround was to manually restart the router and redirect traffic through alternative access points. It wasn’t elegant, but it kept critical healthcare services like Telemedicine and EMR online.'
                                }
                            />

                            <Paragraph
                                text={
                                    'These stories helped me see that workarounds are not failures, they are acts of resilience. They prove that in ITSM, success is not always about perfection, but about flexibility and pragmatism. A good workaround can make the difference between an organization grinding to a halt and one that keeps moving while engineers quietly prepare the permanent cure.'
                                }
                            />
                        </Section>
                    </Template>

                    <Template>
                        <Section>
                            <h1 className="font-semibold">
                                The Link Between Incident and Problem Management
                            </h1>

                            <div className="overflow-x-auto my-6">
                                <table className="min-w-full text-xs">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="px-4 py-2 text-left">Aspect</th>
                                            <th className="px-4 py-2 text-left">
                                                Incident Management
                                            </th>
                                            <th className="px-4 py-2 text-left">
                                                Problem Management
                                            </th>
                                            <th className="px-4 py-2 text-left">Relationship</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2 font-semibold">Focus</td>
                                            <td className="px-4 py-2">
                                                Restoring services as quickly as possible.
                                            </td>
                                            <td className="px-4 py-2">
                                                Finding the root cause of incidents to prevent
                                                recurrence.
                                            </td>
                                            <td className="px-4 py-2" rowSpan={2}>
                                                Frequent incidents can trigger problem management
                                                analysis.
                                                <br />
                                                Results from problem management (such as workarounds
                                                or KEDB) are used by incident management to speed up
                                                service restoration.
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2 font-semibold">Role</td>
                                            <td className="px-4 py-2">
                                                Process for restoring service fast.
                                            </td>
                                            <td className="px-4 py-2">
                                                Process for eliminating causes and preventing future
                                                incidents.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <Paragraph
                                text={
                                    'At first, I thought Incident Management and Problem Management were two names for the same thing. But this week made me realize they are different roles in the same story. Incident Management is about speed: when a system goes down, the priority is to restore service as quickly as possible so users can keep working. Problem Management takes over afterward, asking why the failure happened and how to stop it from happening again. Together, they form a cycle, one solves the immediate pain, the other works to remove the cause.'
                                }
                            />

                            <Paragraph
                                text={
                                    'Incident Management is a process. It is the structured set of steps designed to restore service as fast as possible. Service Desk is a function. It is the team that carries out the steps, communicates with users, and makes sure the process feels human.'
                                }
                            />
                        </Section>
                    </Template>

                    <hr className="border-t border-gray-300 w-full mt-4" />

                    <Template>
                        <h1 className="font-semibold">Reflection</h1>
                        <Paragraph
                            text={
                                'Week 5 was the week ITSM began to feel like detective work. Incidents taught me to act fast, but Problem Management taught me to slow down, look deeper, and think long term. I learned that resilience isn’t just about restoring service, but about ensuring the same issue doesn’t haunt users again and again.'
                            }
                        />

                        <Paragraph
                            text={
                                'The lab especially left an impression on me. Cleaning messy data taught me discipline. Identifying patterns taught me focus. Building the Fishbone Diagram showed me how problems are systemic, not isolated. And writing the KEDB entry showed me how lessons, once captured, become assets for the future.'
                            }
                        />

                        <Paragraph
                            text={
                                'By the end of the week, I began to see Problem Management not just as a process, but as a mindset: always ask why, always look deeper, and always turn pain into learning.'
                            }
                        />
                    </Template>
                </Template>
            </div>
        </main>
    );
}

export default Recap;
