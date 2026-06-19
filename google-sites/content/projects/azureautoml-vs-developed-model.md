---
title: "Azure AutoML vs. Custom Model Development"
summary: "Compared Azure AutoML with a custom Jupyter-based modeling workflow for shipping-cost prediction, focusing on tradeoffs in speed, control, and model quality."
date: "2024-01-01"
images: ["AzureAutoML VS Developed Model/7cf1054d93ca2c7dbc96b76654994650.jpg", "AzureAutoML VS Developed Model/6ca1126ab9d291c4063e5ccf8669a362.jpg", "AzureAutoML VS Developed Model/bdc24b940b1501bc7fbfdbb1539a117d.jpg", "AzureAutoML VS Developed Model/017f8015f2dd1115651f7c80a4a81685.jpg", "AzureAutoML VS Developed Model/4ec393b1bf9636e7bd51857d9c5675c0.jpg", "AzureAutoML VS Developed Model/8dccef6ef35e6a44c0da3654096ca07d.jpg", "AzureAutoML VS Developed Model/d1996c5410b35a48d17723c68bad4e89.jpg"]
slug: "azureautoml-vs-developed-model"
---

Azure AutoML vs. Custom Model Development

This project compared two ways to solve a regression problem: automated machine learning in Azure AutoML and a custom Jupyter Notebook workflow. The use case was shipping-cost prediction for art and collectible objects.

## Data-science question

AutoML can accelerate experimentation, but it does not remove the need for careful problem framing. The comparison asked when a fast automated baseline is enough, and when custom feature engineering, validation design, and interpretability are worth the extra work.

## Modeling context

The dataset included package dimensions, weight, transport mode, fragile-item indicators, customer and delivery locations, scheduled dates, delivery dates, and shipping cost. The target was continuous, making the project a practical regression study.

## What it demonstrates

- Building a benchmark model quickly with AutoML
- Designing a custom notebook workflow for deeper control
- Comparing speed, transparency, and model quality
- Thinking about model development as an analytics decision, not just a tool choice
