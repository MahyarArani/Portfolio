---
title: "Mortgage Credit-Risk Forecasting"
summary: "Research in progress on temporal mortgage credit-risk prediction using loan-performance history, time-aware validation, and baseline forecasting models."
date: "2026-01-01"
images: ["generated/covers/mortgage-credit-risk-forecasting.svg"]
slug: "mortgage-credit-risk-forecasting"
---

Mortgage Credit-Risk Forecasting

This research project builds a reproducible baseline for temporal mortgage credit-risk forecasting using Fannie Mae and Freddie Mac loan-performance data.

## Research question

Can temporal loan-performance, borrower-origination, and macroeconomic features predict future mortgage delinquency or default risk more robustly than static credit-risk baselines?

## Modeling approach

The project starts conservatively with auditable baselines: data ingestion, schema standardization, target construction, time-aware validation, logistic regression, tree-based models, and calibration metrics. More advanced temporal models belong later, after the baseline is credible.

## Why it matters

Mortgage credit-risk models are central to portfolio monitoring, housing finance, stress testing, and public-sector economic analysis. The key data-science challenge is not just prediction; it is preventing leakage, defining targets correctly, and validating models in time-aware ways.

## Status

This is a private research-in-progress repository and paper path. It is framed as a baseline research project that can later support simulation-augmented forecasting and agent-based stress features.
