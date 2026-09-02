# WAYGO — Agent-Native Travel Marketplace for Africa

WAYGO is a WebMCP-enabled travel marketplace where people and AI agents work together to discover, verify, compare and shortlist fragmented African travel offerings—without surrendering human control of contact, booking or payment.

## The problem

Travel packages across Africa are frequently scattered across social posts, WhatsApp messages and agency websites. Comparing inclusions and assessing whether an agency is trustworthy takes time, while conventional browser agents must guess their way through changing interfaces.

## The WebMCP approach

WAYGO remains a complete visual marketplace for people while exposing structured tools through `document.modelContext`. A compatible browser agent can discover and call those tools directly. Every agent action updates the interface the person is already viewing.

| Tool | What it does | Human-control boundary |
| --- | --- | --- |
| `search_travel_packages` | Filters packages by origin, budget and trip type | Read-only discovery |
| `verify_agency` | Returns verification evidence | Read-only verification |
| `compare_packages` | Selects up to three packages for comparison | No transaction |
| `create_shortlist` | Updates the visible shortlist | No booking |
| `request_agency_contact` | Prepares an agency-contact request | Stops for explicit human approval |

## Demo prompt

> I want to perform Umrah from Abuja in October with a budget of ₦2.5 million. Find suitable packages, verify the best agency, compare the strongest two options and shortlist both. Prepare contact with the best agency, but do not book or pay.

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm run install:ci
npm run dev
```

Production validation: `npm run build`.

## Human-agent workflow

1. A person states their travel goal to a compatible browser agent.
2. The agent discovers WAYGO's structured WebMCP tools.
3. Search results, verification state, comparison choices and shortlist visibly update.
4. The person reviews the same interface and can modify the agent's choices.
5. Agency contact requires explicit approval. Booking and payment remain outside agent control.

## Prototype scope

This challenge edition uses representative Nigerian Umrah listings and simulated verification evidence. It demonstrates the complete cooperative interaction model; production integrations with licensed agencies, live inventory and payment providers are intentionally outside the prototype.

## Technology

Vinext, React, TypeScript, Tailwind CSS, WebMCP and Cloudflare Workers.

## Safety

- No autonomous booking or payment
- Contact requires explicit human approval
- Tool schemas constrain agent inputs
- The visual interface remains authoritative and inspectable

Built by Abubakar Ibrahim / Tectucon LTD for the OpenAI WebMCP Challenge.
