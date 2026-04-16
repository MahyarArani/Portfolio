---
title: "ArcGIS, Azure Functions, Blob Storage, PowerAutomate and PowerBI"
summary: "Built a low-cost cloud routing workflow combining ArcGIS, Azure Functions, Blob Storage, Power Automate, and Power BI to automate daily geo-routing operations."
date: "2024-01-01"
images: ["ArcGIS Azure Functions Blob Storage PowerAutomate/08ffa164087d5a92b7c0caccc6077ad0.jpg", "ArcGIS Azure Functions Blob Storage PowerAutomate/eb803efaf9ac079d3470e26cf3c4877c.jpg", "ArcGIS Azure Functions Blob Storage PowerAutomate/a2719c349405a009966fc3d68f7d5c81.jpg", "ArcGIS Azure Functions Blob Storage PowerAutomate/1509d2e86303eb199fe107a7a885577c.jpg", "ArcGIS Azure Functions Blob Storage PowerAutomate/0af63c052a6f4aaa8e479d5eb7e80b3c.jpg", "ArcGIS Azure Functions Blob Storage PowerAutomate/9262070c02f5f10204528ca540f3f481.jpg", "ArcGIS Azure Functions Blob Storage PowerAutomate/cd0984d4655fe08f73376e99fb957da2.jpg", "ArcGIS Azure Functions Blob Storage PowerAutomate/fb2b06a27eee94fdc529c1a4b76ad156.jpg", "ArcGIS Azure Functions Blob Storage PowerAutomate/d794d54f37aacd687457f15b4c366ce6.jpg"]
slug: "arcgis-azure-functions-blob-storage-powerautomate"
---

ArcGIS, Azure Functions, Blob Storage, PowerAutomate and PowerBI: Integrating and Running Extensive Code-Based Workflows on the Cloud at No Cost

This project built a cloud-based geo-routing workflow for daily operations while keeping costs tightly controlled. The challenge was to process incoming route files, geocode addresses, generate optimized routes, and distribute results to drivers and managers without relying on expensive always-on infrastructure.

The solution combined Azure Functions, Azure Storage, ArcGIS services, Python scripts, Power Automate, and Power BI into a scheduled workflow. Files were ingested from Azure file storage, moved through blob-based processing steps, routed through a layered geocoding strategy, and then published as Excel and HTML outputs for operational use. Notifications and downstream reporting were handled through Power Automate and Power BI.

One of the strengths of the design is that it balances operational reliability with cost control. The workflow prioritizes in-house and lower-cost geocoding methods before using paid services, runs on a consumption plan rather than dedicated infrastructure, and automatically manages file retention to avoid unnecessary storage growth.

This is a strong example of applied automation architecture: integrating GIS, serverless compute, routing logic, file management, notifications, and reporting into one operational system.

## Workflow overview

Our workflow began with the Solid Waste department retrieving data from the CRM platform each morning. To streamline this process, we designed a file-share based handoff using Azure File Storage. Initial CSV files were submitted there, where a Python script monitored and transferred them to blob storage for geo-routing processing. Resulting files were uploaded to two distinct blob containers: one for historical archives with an Archive retention policy and another for daily processed files, emptied with each Python run.

Automating this workflow was key. Power Automate monitored file submissions, sent email notifications for incorrect or missing files, and handled correct submissions automatically. Emails included Python-generated Excel files and an HTML file with geo-routing links. Power BI dashboards were also designed for vehicle drivers to access daily processes and routes.

Managers were also kept informed through email notifications, ensuring they were aware of processed file availability for their drivers' use. This holistic approach ensured smooth operations, optimizing geo-routing processes while enhancing communication and transparency across departments.

## Technical stack and design choices

Geocoding (First Round):UtilizingARLGIS Composite Address LocatorService offers an in-house, cost-effective solution. However, it can be sensitive to slight variations in address formatting, potentially leading to failures in lookup.

Geocoding (Second Round):Employing a custom geocoding script that extracts data fromGoogle Mapsprovides flexibility and accuracy akin to manual address searches in a web browser, but executed programmatically with Python.

Geocoding (Third Round):Leveraging theESRI Geocoding APIas a reliable fallback option, it is less sensitive to address variations compared to the in-house solution. However, usage of this API incurs credits per geocode, making it a secondary choice after the first two options.

Routing:Utilizing theArcGIS Vehicle Routing APIfor efficient routing solutions. Alternatively, the county's network analysis layer can seamlessly replace this endpoint once integrated.

Running Python:Harnessing Microsoft Azure Function Apps within aLinux consumption service plan, specifically with Python version 11.5, enables seamless execution of Python scripts, ensuring efficient and scalable processing.

Emailing and Updating Power BI:EmployingMicrosoft Power Automate, an Automated Cloud Flow solution, streamlines the process of sending emails containing geocoded data and updating Power BI reports, enhancing communication and data visualization capabilities.

## Azure Function consumption plan

To ensure cost-effective execution of Python code, we leverage Azure Function Consumption Plan. Our setup involves scheduling the function to run every five minutes in the morning (defined in UTC time and adjusted for daylight saving). This function is tasked with monitoring designated folders for new CSV files, particularly those uploaded by the SWB division onto the Azure file share.

Given the limitation in triggering file share locations in the cloud, our function app employs a trigger mechanism to monitor file changes. Upon detection of a new file, it swiftly copies it to a new blob storage container designated for subsequent ETL Python tasks. Once the process completes, the function app ensures the deletion of the processed file within the "BrushRouting" file share location.

Operating within the storage account, the function reads CSV files from the container. It then proceeds to geocode addresses and utilizes the ArcGIS routing API to calculate optimized routes for groups of stops, up to 150 in multiples of 50 (1-50 stops per route, 50-100 stops per two routes, and 100-150 stops per two routes). Additionally, the function generates links to Google Maps driving directions and MWM.

The output of this process comprises two files: HTML and Excel, which are uploaded to separate blob containers. To maintain storage efficiency, files older than 7 days are automatically deleted from the container, while the latest two processed files (HTML and Excel) are retained in the output container at all times.

By implementing this meticulously designed workflow within theAzure Function Consumption Plan, we ensure seamless execution of Python code tasks while optimizing resource utilization and minimizing costs effectively.

This is only the beginning of a larger codebase, with the published Azure Functions implementation covering hundreds of lines of production logic.

## Power BI and Power Automate orchestration

In thePowerBIcomponent of our project, we have prioritized both functionality and cost efficiency to deliver a robust data visualization solution. Leveraging PowerBI's intuitive interface, we have designed dynamic dashboards that provide stakeholders with comprehensive insights into geocoded data, routing optimizations, and other key metrics. Through seamless integration with Azure services and automated data refresh mechanisms, we ensure that our PowerBI reports are always up-to-date, enabling informed decision-making in real-time. Furthermore, by optimizing our PowerBI implementation to utilize the capabilities of the platform efficiently, we maximize cost-effectiveness without compromising on performance or functionality. This ensures that our PowerBI solution not only meets the analytical needs of our stakeholders but also delivers value by minimizing operational costs.

Executing Power Automate Workflow: Orchestrating Operations

The meticulously crafted Power Automate workflow is engineered to streamline the daily communication process by sending out emails containing the generated HTML and Excel files while seamlessly refreshing the associated PBI DriverMap.

The workflow initiates by triggering a blob update within the blob container. Subsequently, it retrieves the pertinent output files, updates the connected Power BI, ensuring that it reflects the latest data accurately. Finally, the workflow concludes by sending out emails to the designated recipients.

To enhance efficiency, the workflow includes a crucial validation step. It verifies whether the date inside the"date" columnof the Excel file matches today’s date. If a mismatch is detected, the email body is dynamically adjusted to notify the SWB to upload the correct file, ensuring data integrity and accuracy in subsequent processes.

Through this automated process,Power Automatesignificantly streamlines operations, ensuring timely communication, accurate data representation, and proactive error handling, ultimately contributing to enhanced productivity and effectiveness within the workflow.

## Summary

In this project, we have implemented a comprehensive solution forgeocoding, routing, and executing Python scripts, with a primary focus on process efficiency and cost optimization. We employed a multi-tiered approach for geocoding, starting with the ARLGIS Composite Address Locator Service, followed by a custom geocoding script using Google Maps, and utilizing theESRI Geocoding APIas a fallback option. This tiered approach ensures flexibility while minimizing costs, as the more resource-intensive ESRI API is only utilized when necessary.

For routing, we leveraged the ArcGIS Vehicle Routing API, which provides efficient route optimization solutions. Additionally, we ensured flexibility by allowing for the seamless integration of the county's network analysis layer in the future, further optimizing routing processes.

To execute Python scripts, we utilizedMicrosoft Azure Function Appswithin aLinux consumption service plan, ensuring cost efficiency by only utilizing resources when needed. This serverless architecture allows for scalable and efficient execution of Python code without the overhead of managing infrastructure.

Lastly, for email communication and updatingPower BI reports, we employedMicrosoft Power Automate. This automated cloud flow solution streamlines the process of sending emails containing geocoded data and updating Power BI reports, enhancing communication and data visualization capabilities while maintaining cost efficiency.

Overall, our solution emphasizes process efficiency and cost optimization by leveraging a combination of in-house and third-party tools, ensuring seamless execution of geocoding, routing, Python scripting, and data visualization tasks. This approach maximizes resource utilization while minimizing expenses, ultimately contributing to the success of the project.
