---
title: "Financial Agent Replay Benchmark"
summary: "Research in progress on leakage-aware counterfactual replay for financial AI agents, decision reversal, and risk-evaluation validity."
date: "2026-01-01"
images: ["generated/covers/financial-agent-replay-benchmark.svg"]
slug: "financial-agent-replay-benchmark"
---

Financial Agent Replay Benchmark

This research project develops a leakage-aware replay benchmark for financial AI agents. The core idea is to evaluate how agents behave when they are forced to make decisions using only the information that would have been available at that historical moment.

## Research question

Can point-in-time counterfactual replay reveal temporal leakage, decision reversal, and misleading risk evaluation in financial AI agents?

## What the benchmark tests

The project compares strict point-in-time retrieval against unrestricted diagnostic retrieval. The unrestricted condition is intentionally leaky and exists only to show how an agent can appear more accurate when it sees future records.

## Why it matters

Financial analytics is especially vulnerable to look-ahead bias. If an AI agent evaluates a mortgage, market event, or risk scenario using future information, the resulting performance estimate can be invalid.

## Status

This is a private research-in-progress system. It includes synthetic samples, offline replay experiments, deterministic agents, optional provider-backed stress tests, paper-facing outputs, and checks for leakage and decision quality.
