---
title: "Artificial Intelligence and Power Platform Automation"
summary: "Designed an OCR-driven reporting workflow using Azure AI Document Intelligence, Power BI, Power Apps, and Power Automate to replace manual document processing."
date: "2024-01-01"
images: ["Artificial Intelligence and Power Platform/2a4dc1858de9aa10f3f2fd7ecd23343d.jpg", "Artificial Intelligence and Power Platform/e233b9ae8c3140d3f9ae6d820ae21aa8.jpg", "Artificial Intelligence and Power Platform/146593fcfa6a0ab25e5da72cbdccb536.jpg", "Artificial Intelligence and Power Platform/501d356f23c5ee24d39a9b250c4cd433.jpg", "Artificial Intelligence and Power Platform/20612220c55c2d84f7bc032aaca94550.jpg", "Artificial Intelligence and Power Platform/63571e4945ff2f40f252112d94fe9e3b.jpg", "Artificial Intelligence and Power Platform/7d96da6884e329817841abedab35f14e.jpg", "Artificial Intelligence and Power Platform/b888c0f932075610ea701460bb6fc1ad.jpg", "Artificial Intelligence and Power Platform/a76dc742c24530fab5c28d1a4f0c78b5.jpg", "Artificial Intelligence and Power Platform/53a8b2e59b07694acbbb218973e0c240.jpg", "Artificial Intelligence and Power Platform/5f733263d0d9940083383e8f73f2cf0f.jpg", "Artificial Intelligence and Power Platform/4ec0182549f6ba1a1985b3295fefb077.jpg", "Artificial Intelligence and Power Platform/0f9feed07b0c71a573ad9ac38008f1df.jpg", "Artificial Intelligence and Power Platform/da00bc7a7fe02506ab48760d15466e12.jpg"]
slug: "artificial-intelligence-and-power-platform"
---

Artificial Intelligence and Power Platform Automation for Scanned Document Parsing and Reporting

This project automated the processing of annual solid waste and recycling reports that were previously handled manually. Contractors submitted nine-page scanned forms, and staff had to extract values into spreadsheets, validate them, and prepare reports for management. The manual process consumed significant staff time and introduced frequent data-entry errors.

The solution combined Azure AI Document Intelligence, Python validation logic, Power BI, Power Apps, and Power Automate into one workflow. OCR extracted report fields from submitted scans, Python logic created practical review signals, Power BI highlighted exceptions and anomalies, and Power Apps allowed staff to correct values when review was needed.

The project was especially valuable because high OCR confidence alone was not enough to guarantee good operational data. Errors came from poor scans, misaligned table entries, missing sections, misplaced decimals, and user-defined categories entered outside the expected form structure. The broader system was therefore designed not just to extract data, but to support review, outlier detection, and exception handling.

## Design choices

Several submission and processing options were considered before choosing the OCR-led workflow:

- **Microsoft Forms and Google Forms:** easy to use, but not flexible enough for changing selection criteria and long conditional forms.
- **SurveyMonkey:** strong survey functionality, but licensing and adoption constraints made it a poor fit.
- **Versiform:** an internal form-generation option, but it required additional development support and did not provide the reporting workflow needed.
- **Power Apps:** useful for internal review, but not ideal as the primary external submission channel.
- **Azure AI Document Intelligence:** the strongest fit because it preserved the existing scanned form while automating extraction.

## Custom extraction model

Azure AI Document Intelligence is especially useful when prebuilt models match the document type, but this workflow required a custom extraction model for nine-page reports with inconsistent scanning and completion patterns. Some haulers skipped pages or sections that did not apply to them, which made extraction and validation more complex than a simple OCR pass.

To keep the process cost-effective and repeatable, files were submitted through Python and returned as JSON. A key challenge was that table-heavy pages did not always provide usable confidence scores at the field level. To address that, the workflow calculated confidence across the words that formed each extracted cell value, creating a practical review signal for staff and hauler follow-up.

## Validation and reporting workflow

After extraction, the data was organized into multiple Excel tabs representing sections of the report and then integrated into Power BI. Power Query handled cleaning and transformation so the dashboard could present reviewable, structured results instead of raw OCR output.

Confidence scores alone were not enough. Some errors came from values being entered beside the correct table cell, some came from missing pages or blank sections, and some came from misplaced decimal points that produced unrealistic outliers even when OCR confidence was high. Power BI therefore became the review layer for highlighting anomalies, incomplete submissions, and values that needed staff verification.

## Power Apps correction workflow

The dashboard includes a Power Apps correction workflow so staff can move from review to action without leaving the reporting experience. When a discrepancy is found, the user can open the edit interface, correct the underlying value, and preserve a cleaner audit trail for the report cycle.

Power Automate keeps the reporting dataset synchronized after edits. This allows corrected values to flow back into the dashboard quickly, keeping the reporting view aligned with the latest staff-reviewed data.

## Outcome

The project turned a manual reporting process into an AI-assisted review workflow. Azure AI Document Intelligence handled extraction, Python supported validation logic, Power BI surfaced reporting and exceptions, Power Apps enabled correction, and Power Automate kept the process moving across systems.
