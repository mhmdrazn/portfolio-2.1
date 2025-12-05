import React from 'react';
import { Metadata } from 'next';
import Paragraph from '@/components/ui/paragraph';
import Template from '@/components/ui/template';
import Section from '@/components/ui/text-section';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IconArrowLeft } from '@tabler/icons-react';

export const metadata: Metadata = {
    title: 'Week 11 - ITSM',
};

function Week11() {
    return (
        <main className="flex flex-col min-h-screen w-full pb-6 md:pb-12 lg:pb-20 justify-start items-center gap-4">
            <div className="w-full h-96 overflow-hidden">
                <Image
                    className="object-cover w-full h-full"
                    src="/itsm/week11-itsm.jpg"
                    alt="week11-banner"
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
                                Week 11 - Change & Problem Management Simulation
                            </h1>
                            <p className="font-light text-sm">3 November 2025</p>
                        </div>
                        <Paragraph
                            text={
                                'Where Theory Finally Became Muscle Memory. Week 11 was the moment where Change Management and Problem Management stopped being "frameworks" and became something I could actually perform. In this lab, I stepped directly into ServiceNow again - but this time, not as a Service Desk agent or investigator. Instead, I became the Change Manager responsible for driving a real RFC through every workflow state, and later, part of a team simulating a real Problem Management case that connected incidents, problems, changes, and configuration items into one traceable flow.'
                            }
                        />

                        <Paragraph
                            text={
                                'This week felt less like learning a chapter and more like rehearsing the choreography of IT service transition.'
                            }
                        />

                        <div className="w-full">
                            <Button variant={'outline'} className="w-full">
                                <a
                                    href="/itsm/5026231174_Week11.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    📄 Week 11 Class Activity
                                </a>
                            </Button>
                        </div>

                        <hr className="border-t border-gray-300 w-full mt-4" />

                        <Section>
                            <h3 className="font-semibold text-md">
                                Part 1 - Individual Lab: Becoming the Change Manager
                            </h3>
                            <Paragraph
                                text={
                                    'ServiceNow Change Workflow Simulation. The Change scenario continued a familiar theme: upgrading the campus Wi-Fi authentication system to Azure AD SSO due to high failure rates during peak exam weeks. But this time, I was the Change Manager moving the entire RFC through the official ITIL Change Enablement lifecycle.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">Stage 1 - New/Assess</h4>
                            <Paragraph
                                text={
                                    'I created a Normal Change titled "Upgrade Wi-Fi Authentication System to Azure AD SSO". I filled in fields such as: High Risk, High Impact, Priority 2 - High, Assignment Group: Network, CI: CAROL3-GATEWAY. Seeing the record appear in the Change list felt like the first page of a workflow that was now in my hands.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">
                                Stage 2 - Authorize (CAB Approval)
                            </h4>
                            <Paragraph
                                text={
                                    'When the Change entered Waiting for approval, I scrolled through the Approvers list and manually set each one to Approved, exactly as CAB members would do in real life. Once all approvals were entered, the Change moved smoothly into the Scheduled state - a reminder of how much governance gates matter in protecting service stability.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">Stage 3 - Scheduled</h4>
                            <Paragraph
                                text={
                                    'Here I had to define the entire plan: Planned Start: 10 Nov 2025, 22:00, Planned End: 11 Nov 2025, 05:00, Implementation Plan: Deploy SSO during maintenance; test with pilot users, Test Plan: Verify SSO logins; monitor logs, Back-out Plan: Revert to legacy RADIUS if SSO fails. This part made me realize how detailed Change scheduling needs to be - no guesswork, no improvisation.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">Stage 4 - Implement</h4>
                            <Paragraph
                                text={
                                    'Now the Change was "live." I created Change Tasks such as: Backup configuration, Deploy SSO module, Test authentication. I set each task to Closed Complete, and wrote implementation notes like: "No authentication errors observed." This step felt like the "execution" moment where planning and reality finally meet.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">Stage 5 - Review</h4>
                            <Paragraph
                                text={
                                    'I completed the closure fields: Implementation Results: SSO upgrade successful, Lessons Learned: Communicate plan earlier to faculties, Close Code: Successful. This made me understand "Review" is not just a checkbox - it\'s the learning mechanism of Change Management.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">Stage 6 - Closed</h4>
                            <Paragraph
                                text={
                                    "The final state. The change was fully processed, documented, and closed with a Change ID (e.g., CHG0030010). By the end of this part, I wasn't just reading about the Change workflow - I had executed it from end to end."
                                }
                            />
                        </Section>

                        <Section>
                            <h3 className="font-semibold text-md">
                                Part 2 - Group Activity: Designing and Resolving a Problem Case
                            </h3>
                            <Paragraph
                                text={
                                    'After completing my individual change, our group (Group 11) shifted to Problem Management. The task: create a realistic enterprise-grade problem scenario, record it in ServiceNow, perform RCA, propose solutions, and link all related ITIL objects. This was where all previous weeks - Incidents, Changes, CMDB, RCA - finally tied together.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">
                                Step 1 - Our Problem Scenario
                            </h4>
                            <Paragraph
                                text={
                                    'On a Wednesday morning, around 9 AM, over 40 Finance and HR employees suddenly could not access the SAP Enterprise Services dashboard. Pages froze mid-transaction, reports refused to load, and processing timeouts caused cascading delays. Incident Management tried several quick fixes: flushing DNS, restarting SAP gateway, temporary VPN rerouting - but the issue kept coming back. This persistence triggered the creation of a Problem Record: PRB0040001. This scenario already felt painfully real - a high-impact outage affecting mission-critical systems.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">
                                Step 2 - Building the Problem Record in ServiceNow
                            </h4>
                            <Paragraph
                                text={
                                    'We created the Problem with fields describing: short description of SAP access failures, impact = High, urgency = High, assignment group = Application Services, CI = SAP App Server / Gateway. We then moved the Problem through states: New, Root Cause Analysis, Resolved, Closed. And filled in the required analysis fields.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">
                                Step 3 - Root Cause Analysis (RCA)
                            </h4>
                            <Paragraph
                                text={
                                    "From our investigation, we discovered the real cause: A defect in the SAP session-management module introduced by Patch 23.4. This patch caused idle sessions to remain uncleared, saturating the session table, creating memory leaks, and eventually stalling all dashboard processing. The failure wasn't due to the network, device load, or user error - it was buried deep in SAP's internal patch logic."
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">
                                Step 4 - Workaround & Permanent Fix
                            </h4>
                            <Paragraph
                                text={
                                    'Workaround: Restart SAP application gateway, Manually purge active/idle sessions periodically. Permanent Resolution: Roll back patch to version 23.3, Apply vendor hotfix 23.5 once verified, Implement stricter timeout rules, Run a 48-hour load test before relaunch. This mirrored a real enterprise RCA: temporary survival to long-term stability.'
                                }
                            />
                            <h4 className="font-semibold text-sm mt-4">
                                Step 5 - Linking Related Records
                            </h4>
                            <Paragraph
                                text={
                                    'We connected the Problem to: Related Incident (sample incident from Step 1), Related Change (Change Request required for patch rollback), Affected CIs (SAP app server, gateway, DB in CMDB). Seeing the Problem linked across Incident, Problem, Change, and CI made the workflow feel whole - not separate concepts but a connected service ecosystem.'
                                }
                            />
                        </Section>

                        <Section>
                            <h2 className="font-semibold text-md">Reflection</h2>
                            <Paragraph
                                text={
                                    'Week 11 made me realize that ITSM is not just about solving issues - it is about orchestrating structure around uncertainty. In the individual Change lab, I learned that every modification requires governance, approvals, planning, and safe execution. In the group Problem lab, I learned how incidents escalate into deep analysis, how RCA exposes hidden risks, and how Problems bridge into Change and CMDB for long-term fixes. By the end of the week, I could finally see how ITIL practices interlock - not theoretical boxes, but an actual chain of actions that protect service reliability.'
                                }
                            />
                        </Section>
                    </Template>
                </Template>
            </div>
        </main>
    );
}

export default Week11;
