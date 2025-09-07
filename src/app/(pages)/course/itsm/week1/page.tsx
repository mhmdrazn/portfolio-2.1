import React from 'react';
import { Metadata } from 'next';
import Paragraph from '@/components/ui/paragraph';
import Template from '@/components/ui/template';
import Section from '@/components/ui/text-section';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IconArrowLeft } from '@tabler/icons-react';

export const metadata: Metadata = {
    title: 'Week 1 - ITSM',
};

function Recap() {
    return (
        <main className="flex flex-col min-h-screen w-full pb-6 md:pb-12 lg:pb-20justify-start items-center gap-4">
            <div className="w-full h-96 object-cover overflow-hidden">
                <Image
                    className="object-cover w-full h-full"
                    src="/itsm/week1-itsm.jpg"
                    alt="week1-banner"
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
                                Week 1 – Introduction to IT Service Management
                            </h1>
                            <p className="font-light text-sm">August 26, 2025</p>
                        </div>
                        <Paragraph
                            text={
                                'The first week of my IT Service Management (ITSM) course felt less like simply opening a textbook and more like stepping into a new way of thinking about how technology actually creates value in people’s lives. Our lecturer began by setting expectations: this would not just be a theory-heavy class where we memorize frameworks. Instead, it would be an ongoing journey, one where each week we would tackle real tasks, reflect on what we learned, and gradually build a portfolio that tells our story.'
                            }
                        />
                        <Paragraph
                            text={
                                'That idea struck me immediately. ITSM is not just about technology or processes; it is about connecting the dots between organizations, people, and value. This week gave me a strong foundation in those concepts and through the homework and study cases, I began to see how abstract theories translate into real-world impact.'
                            }
                        />

                        <Button variant={'outline'} className="w-fit mt-2">
                            <a
                                href="/itsm/5026231174_Week1.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                📄 Week 1 Homework (PDF)
                            </a>
                        </Button>
                    </Template>

                    <hr className="border-t border-gray-300 w-full mt-4" />

                    <Template>
                        <h1 className="font-semibold">Core Concepts Explored</h1>

                        <Section>
                            <h3 className="font-normal text-sm">
                                Service Management as a Capability
                            </h3>
                            <Paragraph
                                text={
                                    'We started by unpacking what “service management” actually means. It is not just the delivery of tools or platforms, but a set of specialized organizational capabilities aimed at enabling value for customers. In other words, it shifts the focus from “providing IT” to “helping people achieve their outcomes.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-normal text-sm">Value and Co-Creation</h3>
                            <Paragraph
                                text={
                                    'Another key idea was that value is subjective. It depends on the perspective of the stakeholder. What is valuable to a student may not be the same for a lecturer, a company, or a government partner. Importantly, value is never delivered in isolation. It is co-created through collaboration between providers, consumers, and stakeholders.'
                                }
                            />
                            <Image
                                src="/itsm/week1-value.png"
                                alt="value"
                                width={1349}
                                height={947}
                            ></Image>
                        </Section>

                        <Section>
                            <h3 className="font-normal text-sm">Products vs. Services</h3>

                            <Paragraph
                                text={
                                    'One of the clearest ways to internalize this was through the distinction between products and services. We compared them across multiple aspects, from ownership to involvement:'
                                }
                            />

                            <div className="overflow-x-auto mt-4">
                                <table className="min-w-full border border-gray-300 text-xs">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border px-4 py-2 text-center">Aspect</th>
                                            <th className="border px-4 py-2 text-center">
                                                Product
                                            </th>
                                            <th className="border px-4 py-2 text-center">
                                                Service
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border px-4 py-2">Definition</td>
                                            <td className="border px-4 py-2">
                                                Tangible results or standalone packages (e.g.,
                                                software sold as a one-time license).
                                            </td>
                                            <td className="border px-4 py-2">
                                                Ongoing activities that generate value through
                                                continuous interaction.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">Ownership</td>
                                            <td className="border px-4 py-2">
                                                Once bought, fully belongs to the customer.
                                            </td>
                                            <td className="border px-4 py-2">
                                                Not owned; experienced only during use.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">Focus</td>
                                            <td className="border px-4 py-2">
                                                Features, functions, or quality of the item itself.
                                            </td>
                                            <td className="border px-4 py-2">
                                                Outcomes, experiences, and benefits created
                                                together.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">Interaction</td>
                                            <td className="border px-4 py-2">
                                                One-time; the product is delivered or installed.
                                            </td>
                                            <td className="border px-4 py-2">
                                                Repeated and continuous, requiring ongoing
                                                engagement.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">Involvement</td>
                                            <td className="border px-4 py-2">
                                                Users simply consume what is provided.
                                            </td>
                                            <td className="border px-4 py-2">
                                                Users contribute to creating value (co-creation).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">Example</td>
                                            <td className="border px-4 py-2">MyITS Portal</td>
                                            <td className="border px-4 py-2">
                                                MyITS Classroom or MyITS Shortener
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <Paragraph
                                text={
                                    'The example from campus made this real: the MyITS Portal functions like a product, while tools like MyITS Classroom or MyITS Shortener operate as services, because they depend on ongoing interactions and create shared value over time.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-normal text-sm">Utility and Warranty</h3>

                            <div className="flex flex-col">
                                <Paragraph
                                    text={
                                        'Another major concept was the difference between utility and warranty.'
                                    }
                                />
                                <ul className="list-disc pl-6 mt-2 text-sm">
                                    <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                        <strong>Utility</strong> is about whether a service does
                                        what it is supposed to do, the core function, or &quot;fit
                                        for purpose&quot;.
                                    </li>
                                    <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                        <strong>Warranty</strong> is about how well the service
                                        performs, whether it is reliable, secure, and available, or
                                        fit for use.
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col">
                                <Paragraph
                                    text={'When I applied this to MyITS, it became very concrete:'}
                                />

                                <ul className="list-disc pl-6 mt-2 text-sm">
                                    <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                        <strong>Utility</strong> students can register for courses,
                                        check schedules, view grades, and even submit graduation
                                        applications.
                                    </li>
                                    <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                        <strong>Warranty</strong> the system remains stable during
                                        peak usage, is available 24/7, and keeps student data secure
                                        through backups and protections.
                                    </li>
                                </ul>
                            </div>

                            <Paragraph
                                text={
                                    'The distinction matters, because one without the other is incomplete. A system with utility but no warranty might technically work but fail under stress. A system with warranty but no utility might run smoothly but serve no real purpose.'
                                }
                            />
                        </Section>
                    </Template>

                    <hr className="border-t border-gray-300 w-full mt-4" />

                    <Template>
                        <h1 className="font-semibold">Study Case and Homework</h1>

                        <Section>
                            <h3 className="font-normal text-sm">
                                Homework 1 – Understanding the Four Dimensions of ITSM
                            </h3>
                            <Paragraph
                                text={
                                    'The first homework assignment asked me to break down the Four Dimensions of IT Service Management (ITSM): Organizations & People, Information & Technology, Partners & Suppliers, and Value Streams & Processes. I represented my findings in a mind map to show how each dimension contributes to successful service delivery.'
                                }
                            />
                            <Image
                                src="/itsm/week1-dimensions.png"
                                alt="dims"
                                className="my-3"
                                width={1920}
                                height={1080}
                            ></Image>
                        </Section>

                        <Section>
                            <h3 className="font-normal text-sm">
                                Homework 2 – ITS Blackout Analysis
                            </h3>
                            <Paragraph
                                text={
                                    'Perhaps the most eye-opening assignment this week was analyzing the impact of a blackout at ITS. We were asked to map the consequences across the Four Dimensions of Service Management:'
                                }
                            />

                            <Image
                                src="/itsm/week1-email.png"
                                alt="email"
                                className="my-3"
                                width={1920}
                                height={1080}
                            ></Image>

                            <ol className="list-decimal pl-6 mt-2 text-sm gap-2 flex flex-col">
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    Organization & People
                                    <Paragraph
                                        text={
                                            'The immediate effect was felt by students, who were unable to submit assignments or receive lecture announcements. Lecturers could not share updates or coordinate meetings, and administrative staff faced delays in processing payroll notifications and internal memos. Even external partners struggled, as communication lines to the campus were cut off.'
                                        }
                                    />
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    Information & Technology
                                    <Paragraph
                                        text={
                                            'The failure stemmed from the Microsoft 365 email system experiencing regional outages. This led to login authentication failures and the collapse of cloud infrastructure supporting the service. What looked like a simple “email down” incident quickly revealed the fragility of technological dependencies.'
                                        }
                                    />
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    Partners & Suppliers
                                    <Paragraph
                                        text={
                                            'The disruption rippled out to cloud providers, particularly Microsoft, which faced a regional outage. Vendors and third-party services that relied on ITS email also found themselves unable to function, underscoring how external suppliers are an inseparable part of service continuity.'
                                        }
                                    />
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    Value Streams & Processes
                                    <Paragraph
                                        text={
                                            'Academic workflows ground to a halt, assignments couldn’t be submitted, lecture announcements didn’t reach students, and communication between staff and students was interrupted. Administrative processes like payroll and internal correspondence stalled. External communication, from prospective students to industry partners, was severed, weakening ITS’s image as a reliable institution.'
                                        }
                                    />
                                </li>
                                <li className="anim text-background/70 hover:text-background text-xs md:text-sm w-fit text-justify">
                                    Value Lost
                                    <Paragraph
                                        text={
                                            'The incident went beyond inconvenience. It eroded trust in ITS’s reliability, reduced the productivity of staff and students, caused potential delays in academic and administrative work, and risked damaging the university’s reputation in the eyes of external partners.'
                                        }
                                    />
                                </li>
                            </ol>
                        </Section>

                        <Section>
                            <h3 className="font-normal text-sm">
                                Homework 3 – Creating a Digital Poster
                            </h3>
                            <Paragraph
                                text={
                                    'For the final task this week, I created a poster analyzing Netflix as an IT service. The exercise focused on identifying value from two perspectives, the customer and the provider, and then mapping where co-creation happens.'
                                }
                            />
                            <Image
                                src="/itsm/week1-poster.png"
                                alt="poster"
                                className="my-3"
                                width={1587}
                                height={2245}
                            ></Image>
                        </Section>
                    </Template>

                    <hr className="border-t border-gray-300 w-full mt-4" />

                    <Template>
                        <h1 className="font-semibold">Reflection</h1>
                        <Paragraph
                            text={
                                'Week 1 taught me that IT Service Management is more than just technology; it is about creating value through people, processes, and collaboration. From comparing products and services, analyzing the email blackout, and studying Netflix’s value exchange, I saw how IT services impact real-life outcomes and how co-creation makes them meaningful.'
                            }
                        />
                    </Template>
                </Template>
            </div>
        </main>
    );
}

export default Recap;
