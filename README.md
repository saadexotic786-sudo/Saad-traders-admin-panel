# Saad Traders Admin ERP

Production-oriented Next.js + Supabase ERP foundation for the **NEW Saad Traders OS**.

## Isolation

This repository is designed for the new Supabase project:

`vhfjwkhfkpwdujqtmloo`

It contains no integration with an old Saad Traders website or database.

## Setup

```bash
npm install
cp .env.example .env.local
# Put the NEW project's anon key in .env.local
npm run typecheck
npm run lint
npm run test
npm run dev
```

## Supabase

Apply migrations only to the NEW Saad Traders OS project. Inspect the project's existing migrations/schema first and reconcile overlapping objects before applying additive migrations.

Never place a service-role key in browser code.

## Architecture

- `app/` — routes and layouts
- `components/` — reusable UI
- `server/` — server-side domain operations
- `schemas/` — Zod validation
- `lib/` — infrastructure and safe decimal utilities
- `supabase/migrations/` — database changes
- `tests/` — unit/integration tests
- `e2e/` — Playwright tests

## Financial integrity

Money uses PostgreSQL NUMERIC and Decimal.js for application-side arithmetic. Financial balances, stock, receivables, payables and profit must be derived from posted transactions.

## Production gate

Do not call the application production-ready until the complete requested domain modules, existing-project schema reconciliation, RLS policies, transaction functions, reports, approval workflows and E2E flows have been implemented and verified against the actual NEW database.
