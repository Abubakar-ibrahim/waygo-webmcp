# WebMCP Challenge Submission Copy

## Project name

WAYGO — The Agent-Native Travel Marketplace for Africa

## Tagline

Agents handle fragmented travel research. People retain control of every consequential step.

## Short description

WAYGO is a WebMCP-enabled marketplace that lets travellers and their browser agents collaboratively discover, verify, compare and shortlist African travel packages. Agent actions update the interface in real time, while agency contact requires human approval and booking and payment remain human-controlled.

## Inspiration

Across Africa, travel packages are frequently distributed through WhatsApp, social posts and disconnected agency websites. Travellers spend hours comparing incomplete offers and trying to establish whether providers are legitimate. We wanted to show how an agent could handle that fragmented research without replacing the traveller's judgment.

## What it does

WAYGO exposes five structured WebMCP tools for package search, agency verification, comparison, shortlisting and contact preparation. A compatible agent calls these capabilities directly instead of guessing its way through the interface. The marketplace visibly reflects each action, so the human can inspect, change or reject the result. The final contact action deliberately stops at an approval dialog.

## How we used WebMCP

The app registers document-bound tools through `document.modelContext`. Each tool has a clear description and JSON input schema. Tool execution shares the same React state as the visual marketplace, producing a cooperative workspace rather than invisible backend automation. The most consequential tool returns `human_approval_required` and opens a confirmation surface; it never books or pays.

## What makes it different

WAYGO is not another chatbot itinerary generator. It applies agent-native interaction to a trust and market-fragmentation problem specific to African travel. The agent handles discovery and due diligence, the website provides legible shared state and the traveller remains the decision-maker.

## Accomplishments

- Five discoverable WebMCP tools working end to end
- Visible synchronization between agent actions and human interface
- Agency-verification evidence
- Budget-aware comparison and shortlist workflow
- Explicit human-control boundary before contact
- Responsive marketplace interface

## What we learned

Agent-native design requires more than wrapping an existing interface in tools. Tool boundaries must match user intent, changes must remain visible and consequential actions need deliberate approval semantics. WebMCP makes the website and agent participants in one workflow rather than competing interfaces.

## Next steps

Connect licensed Nigerian travel agencies, ingest live inventory, add evidence-backed licence verification, support more African departure cities and enable consent-based agency messaging. Booking and payment would remain separately confirmed actions.

## Suggested tags

WebMCP, AI agents, travel, Africa, human-in-the-loop, marketplace, trust and safety
