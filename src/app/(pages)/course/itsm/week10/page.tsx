import React from 'react';
import { Metadata } from 'next';
import Paragraph from '@/components/ui/paragraph';
import Template from '@/components/ui/template';
import Section from '@/components/ui/text-section';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IconArrowLeft } from '@tabler/icons-react';

export const metadata: Metadata = {
    title: 'Week 10 - ITSM',
};

function Week10() {
    return (
        <main className="flex flex-col min-h-screen w-full pb-6 md:pb-12 lg:pb-20 justify-start items-center gap-4">
            <div className="w-full h-96 overflow-hidden">
                <Image
                    className="object-cover w-full h-full"
                    src="/itsm/week10-itsm.jpg"
                    alt="week10-banner"
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
                                Week 10 - Change, Release & Configuration Management
                            </h1>
                            <p className="font-light text-sm">27 November 2025</p>
                        </div>
                        <Paragraph
                            text={
                                'Navigating the Backbone of Service Transition. By Week 10, the course shifted from operational practices like Incident & Problem Management into the deeper engineering layer of ITSM - Service Transition. This week introduced me to three major practices that keep IT services evolving safely: Change Management (Change Enablement), Release & Deployment Management, and Service Asset & Configuration Management (SACM).'
                            }
                        />

                        <Paragraph
                            text={
                                'Together, these practices ensure that every modification to our IT environment - from a small patch to a major system upgrade - is predictable, documented, approved, and deployed without jeopardizing stability.'
                            }
                        />

                        <Paragraph
                            text={
                                "For the first time, I wasn't just studying theory; I stepped into the shoes of the Change Advisory Board (CAB), a Release Manager, and a Configuration Manager all in the same assignment. The scenario was realistic and campus-related, which made the entire exercise feel like real IT work instead of classroom simulation."
                            }
                        />

                        <div className="w-full">
                            <Button variant={'outline'} className="w-full">
                                <a
                                    href="/itsm/5026231174_Week10.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    📄 Week 10 Class Activity
                                </a>
                            </Button>
                        </div>

                        <hr className="border-t border-gray-300 w-full mt-4" />

                        <Section>
                            <h3 className="font-semibold text-sm">Part 1 - Change Management</h3>
                            <Paragraph
                                text={
                                    'My Role: CAB Member Reviewing a High-Impact RFC. The scenario described a problem that any campus could relate to: students struggling to log in to campus Wi-Fi during peak periods. The solution proposed by ITS was to upgrade Wi-Fi authentication to Azure AD Single Sign-On (SSO) - a significant change with dependencies, risks, and broad impact.'
                                }
                            />
                            <Paragraph
                                text={
                                    'As a CAB member, I filled out a complete Request for Change (RFC) following the given template. The existing authentication system frequently failed during midterms and finals - exactly when thousands of users hit the network at the same time. Password sync issues also caused inconsistent access across devices.'
                                }
                            />
                            <Paragraph
                                text={
                                    'The upgrade to SSO promised more reliable login, centralized authentication, stronger password control, and compatibility for future services like the new Online Course Registration Portal (OCRP).'
                                }
                            />
                            <Paragraph
                                text={
                                    'Key Components of My RFC: I identified the Network Infrastructure Manager as the Change Owner and the IT Security Analyst as the initiator. The priority was High because it was time-sensitive but not an emergency. I explained the instability of the current Wi-Fi authentication system and how Azure AD SSO would solve load issues and prepare the environment for future integrations.'
                                }
                            />
                            <Paragraph
                                text={
                                    'Using the provided hints, I estimated $15,000 for SSO integration licensing, 30 hours of labor ($3,000), Total: $18,000 with a team of engineers and helpdesk representatives responsible for implementation.'
                                }
                            />
                            <Paragraph
                                text={
                                    'Key risks I highlighted included temporary Wi-Fi outages, certificate errors, and sync delays. The mitigation strategies involved staged rollout, pilot testing with Engineering Faculty, and comprehensive pre-deployment testing.'
                                }
                            />
                            <Paragraph
                                text={
                                    'I created a deployment timeline: Pilot test on Nov 10, Full rollout Nov 15-16 (after hours). The change required CAB approval before proceeding. I approved the RFC on behalf of the CAB with justification that it resolves ongoing failures, strengthens campus security, and is essential for dependent services like OCRP.'
                                }
                            />
                            <Paragraph
                                text={
                                    'This part of the assignment taught me one essential principle: even a well-planned change must be justified, documented, evaluated for risk, and supported by a fallback plan.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-sm">Part 2 - Release Management</h3>
                            <Paragraph
                                text={
                                    'My Role: Release Manager for the New OCRP System. Once the Wi-Fi authentication upgrade was approved, the next task was to prepare a Release Plan for the brand-new Online Course Registration Portal (OCRP), a system students would use daily for add/drop registration. This release depended heavily on the SSO change above, so referencing RFC-2025-WIFI-01 was mandatory.'
                                }
                            />
                            <Paragraph
                                text={
                                    "OCRP wasn't just an application - it aimed to replace manual, error-prone registration flows with a real-time, integrated portal. My release plan included: sync with academic databases, detect schedule conflicts, show seat availability, and authenticate via Azure AD SSO."
                                }
                            />
                            <Paragraph
                                text={
                                    'I described the release as a multi-phase rollout (Pilot - Limited - General Availability) designed to ensure reliability and minimize deployment risk. I planned three waves: Wave 1 - Pilot: Registrar Office + two departments, Wave 2 - Limited Release: One full faculty, Wave 3 - General Availability: All students campus-wide. Followed by Early Life Support (hypercare) from Nov 9-23.'
                                }
                            />
                            <Paragraph
                                text={
                                    'I used a blue/green deployment model combined with feature flags. This ensured smooth switching between old & new versions, safer rollback, and selective activation per department.'
                                }
                            />
                            <Paragraph
                                text={
                                    'I identified risks such as token failures, data sync delays, traffic spikes, and WAF misconfiguration - all addressed with targeted mitigation strategies. I included KPIs like login success rate, error rate, throughput of add/drop transactions, and latency percentiles. These metrics helped determine whether to proceed, rollback, or continue monitoring.'
                                }
                            />
                            <Paragraph
                                text={
                                    'OCRP required: stable Azure AD SSO from the earlier change, change freeze on infrastructure, and avoidance of academic weeks like exams or scholarship release periods. The release record required approvals from Release Manager, Change Manager, Product Owner (Registrar), and Security Officer before going live.'
                                }
                            />
                            <Paragraph
                                text={
                                    'This part of the assignment revealed how release work is both technical and organizational - coordinating teams, timelines, dependencies, and user impact holistically.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-sm">
                                Part 3 - Configuration Management
                            </h3>
                            <Paragraph
                                text={
                                    'My Role: Configuration Manager Updating the CMDB. The final assignment was updating the CMDB with three Configuration Items (CIs): Authentication Gateway (SSO), Application Server, and OCRP Application. Everything was documented in a CI table.'
                                }
                            />
                            <Paragraph
                                text={
                                    'This CI represented the upgraded SSO gateway. I updated: version info (from v1.4 to v2.0), relationships (supports OCRP and Student Portal), location (Azure Cloud), and modification history tied to RFC-2025-WIFI-01.'
                                }
                            />
                            <Paragraph
                                text={
                                    'This virtual server hosted both the Student Portal and OCRP. I updated: OS and instance details (AWS EC2), deployment changes related to REL-2025-01, and relationships to other CIs.'
                                }
                            />
                            <Paragraph
                                text={
                                    'The newest CI entered into the CMDB. I documented: version 1.0, deployment date, hosting details, dependency on the SSO Gateway, and linkage to REL-2025-01.'
                                }
                            />
                            <Paragraph
                                text={
                                    'This exercise helped me understand how the CMDB is not just a database - it is the source of truth that ensures future changes, incidents, and releases can be analyzed quickly and accurately.'
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-sm">Reflection</h3>
                            <Paragraph
                                text={
                                    "Week 10 was the first time I truly saw how Change, Release, and Configuration practices work together as a single ecosystem. The Change ensures decisions are safe, the Release ensures deployments are predictable, and the CMDB ensures everything remains visible and traceable. Through the RFC, Release Plan, and CI updates, I learned that ITSM isn't just about documentation - it's about designing a controlled environment where change can happen without chaos."
                                }
                            />
                        </Section>
                    </Template>
                </Template>
            </div>
        </main>
    );
}

export default Week10;
