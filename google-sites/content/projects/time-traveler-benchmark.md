---
title: "Time-Traveler Benchmark for Temporal Leakage"
summary: "Point-in-time benchmark material for auditing whether AI agents use information unavailable at simulated decision time."
date: "2026-01-01"
images: ["generated/covers/time-traveler-benchmark.svg"]
slug: "time-traveler-benchmark"
---

Time-Traveler Benchmark for Temporal Leakage

This research project studies a subtle but serious problem in AI evaluation: agents can look better than they are if they accidentally use information from the future. In historical data settings, that creates temporal leakage and makes a benchmark misleading.

## Research question

Can a point-in-time benchmark reveal when an AI agent relies on evidence that was not available at the simulated decision time?

## Method

The benchmark uses timestamped records, timestamped probes, point-in-time retrieval, deterministic baseline agents, and leakage metrics. Every record has an availability time, and the evaluation feeder only exposes records that would have been visible at the simulated time.

## Why it matters

Temporal leakage affects finance, policy analysis, medicine, science, and any domain where historical evaluation is used to judge future-facing decisions. A model that appears accurate because it saw future information is not reliable; it is contaminated.

## Status

This is a research-in-progress repository and working paper scaffold. The current implementation focuses on reproducible local experiments, leakage metrics, annotation workflow, and publishability planning.
