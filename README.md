# Saad Traders Admin ERP

A professional, production-oriented **Admin ERP / Business Operating System** for Saad Traders.

The Admin Panel is designed for the owner and authorized administrators to manage the complete business from one centralized dashboard.

---

## 🚀 Overview

Saad Traders Admin ERP provides centralized management for:

- Business dashboard
- Customers
- Suppliers
- Products
- Warehouses
- Inventory
- Purchase orders
- Sales
- Invoices
- Payments
- Accounting
- Chart of accounts
- Delivery management
- Approvals
- User permissions
- Audit logs
- Business reporting

The system is built as a modern web application using **Next.js, TypeScript and Supabase**.

---

## 🏗️ Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | Web application framework |
| TypeScript | Type-safe application development |
| React | User interface |
| Tailwind CSS | Styling |
| Supabase | Database, authentication and backend services |
| PostgreSQL | Relational database |
| Playwright | End-to-end testing |
| Vitest | Application testing |
| Vercel | Production deployment |

---

## 📁 Project Structure

```text
Saad-traders-admin-panel/
│
├── app/
│   ├── (auth)/
│   │   └── login/
│   │
│   ├── (erp)/
│   │   ├── dashboard/
│   │   ├── customers/
│   │   ├── suppliers/
│   │   ├── products/
│   │   ├── warehouses/
│   │   ├── purchase-orders/
│   │   ├── invoices/
│   │   ├── payments/
│   │   ├── accounting/
│   │   └── ...
│   │
│   ├── globals.css
│   └── page.tsx
│
├── actions/
│   ├── masters.ts
│   └── transactions.ts
│
├── schemas/
│   └── common.ts
│
├── utils/
│   └── cn.ts
│
├── supabase/
│   ├── migrations/
│   └── bootstrap.md
│
├── e2e/
│   └── smoke.spec.ts
│
├── public/
│
├── next.config.ts
├── tailwind.config.ts
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── vitest.config.ts
└── README.md
