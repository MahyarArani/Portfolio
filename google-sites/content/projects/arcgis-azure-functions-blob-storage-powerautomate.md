---
title: "ArcGIS, Azure Functions, Blob Storage, Power Automate, and Power BI"
summary: "Built a low-cost cloud routing workflow combining ArcGIS, Azure Functions, Blob Storage, Power Automate, and Power BI to automate daily geo-routing operations."
date: "2024-01-01"
images: ["ArcGIS Azure Functions Blob Storage PowerAutomate/08ffa164087d5a92b7c0caccc6077ad0.jpg", "ArcGIS Azure Functions Blob Storage PowerAutomate/eb803efaf9ac079d3470e26cf3c4877c.jpg", "ArcGIS Azure Functions Blob Storage PowerAutomate/a2719c349405a009966fc3d68f7d5c81.jpg", "ArcGIS Azure Functions Blob Storage PowerAutomate/1509d2e86303eb199fe107a7a885577c.jpg", "ArcGIS Azure Functions Blob Storage PowerAutomate/0af63c052a6f4aaa8e479d5eb7e80b3c.jpg", "ArcGIS Azure Functions Blob Storage PowerAutomate/9262070c02f5f10204528ca540f3f481.jpg", "ArcGIS Azure Functions Blob Storage PowerAutomate/cd0984d4655fe08f73376e99fb957da2.jpg", "ArcGIS Azure Functions Blob Storage PowerAutomate/fb2b06a27eee94fdc529c1a4b76ad156.jpg", "ArcGIS Azure Functions Blob Storage PowerAutomate/d794d54f37aacd687457f15b4c366ce6.jpg"]
slug: "arcgis-azure-functions-blob-storage-powerautomate"
---

ArcGIS, Azure Functions, Blob Storage, Power Automate, and Power BI

This project built a cloud-based geo-routing workflow for daily operations while keeping costs tightly controlled. The challenge was to process incoming route files, geocode addresses, generate optimized routes, and distribute results to drivers and managers without relying on expensive always-on infrastructure.

The solution combined Azure Functions, Azure Storage, ArcGIS services, Python scripts, Power Automate, and Power BI into a scheduled workflow. Files were ingested from Azure file storage, moved through blob-based processing steps, routed through a layered geocoding strategy, and then published as Excel and HTML outputs for operational use.

## Workflow overview

The workflow began with daily CRM exports from the Solid Waste department. CSV files were submitted to Azure File Storage, moved into blob storage for processing, and then routed through Python-based geo-processing. Output files were stored in separate containers for current results and historical archives.

Power Automate monitored submissions, sent notifications for missing or incorrect files, distributed processed Excel and HTML outputs, and refreshed downstream Power BI reporting. Managers and drivers received the information they needed without manually moving files between systems.

## Technical stack and design choices

The design balanced operational reliability with cost control:

- **Geocoding round one:** an in-house ArcGIS composite address locator for the lowest-cost lookup path.
- **Geocoding round two:** a custom Python script for more flexible address matching.
- **Geocoding round three:** the ESRI geocoding API as a more reliable paid fallback.
- **Routing:** ArcGIS vehicle-routing services for route optimization.
- **Execution:** Azure Functions on a Linux consumption plan for scheduled Python processing.
- **Distribution:** Power Automate and Power BI for notifications, report refresh, and operational visibility.

## Azure Functions workflow

The Azure Function monitored designated folders for new CSV files, copied valid files into blob storage, geocoded addresses, calculated optimized routes, generated Google Maps and routing links, and produced HTML and Excel outputs. The workflow also removed stale files so storage did not grow unnecessarily.

The consumption plan kept the system event-driven and cost-aware while still supporting recurring Python processing, file movement, route generation, and output cleanup.

## Outcome

The project integrated GIS, serverless compute, routing logic, file management, notifications, and reporting into one operational system. It is a strong example of applied automation architecture: a practical workflow that reduced manual coordination while keeping cloud costs under control.
