---
title: "Integrating ARCGIS into PowerBI Dashboard for Enhanced Data Visualization"
summary: "Integrated ArcGIS into Power BI dashboards to improve spatial analysis, fuel-consumption insights, and map-based storytelling beyond standard Power BI visuals."
date: "2024-01-01"
images: ["Integrating ARCGIS into PowerBI Dashboard for/946aab3b4e7b013807af12fdaeb067d6.jpg", "Integrating ARCGIS into PowerBI Dashboard for/c30ac6370d92559b47127d6a2adf667b.jpg", "Integrating ARCGIS into PowerBI Dashboard for/dcc6fde0dd905bffe8ebd2ffd5df9090.jpg", "Integrating ARCGIS into PowerBI Dashboard for/dd546092a4ae8758c8a865128a237ac4.jpg", "Integrating ARCGIS into PowerBI Dashboard for/62b52a5b1303187c43d49dc5811ab80a.jpg"]
slug: "integrating-arcgis-into-powerbi-dashboard-for"
---

Integrating ArcGIS into Power BI Dashboards for Enhanced Data Visualization

This project focused on improving geospatial reporting in Power BI by integrating ArcGIS into a dashboard used to analyze fueling behavior and related costs. Standard Power BI maps were not sufficient for the level of geographic analysis required, particularly when stakeholders wanted clearer spatial context and better decision support.

The analysis centered on Arlington County's post-COVID shift in fueling behavior. Before COVID, county vehicles were expected to refuel at designated on-site stations. During the pandemic, those routines changed, and staff began using off-site fueling options more frequently. The goal was to understand how those shifts affected fuel consumption patterns and cost.

The project combined data transformation, geocoding, and dashboard design. A major portion of the effort involved reconciling vendor data discrepancies across years, especially after changes in the underlying vendor and collection methods. Python-based transformations were used to normalize the data before integrating it with historical records in Azure SQL Server.

Another key challenge was geocoding. An early attempt to geocode addresses directly inside Power BI through Bing Maps could not be deployed reliably through the Power BI service. The solution was to shift geospatial processing to ArcGIS Pro and work with the GIS team to produce more robust map-based analysis, including one-mile-radius views around on-site locations.

This project is a good example of combining business intelligence and GIS to answer an operational question with stronger visual evidence. The result was not just a dashboard, but a more defensible way to understand behavior, cost differences, and location-based patterns.

## Managing vendor data discrepancies

The data originates from Arlington's vendor and is collected through implemented IoT devices. After thorough collaboration with theManagement and Finance departments, we successfully acquired the dataset. However, a significant challenge arose due to the transition between vendors, leading to discrepancies in the data across different years.Addressing this issue required extensive transformation efforts in Python, consuming nearly 80% of the project timeline.

The primary task involved identifying disparities within the datasets and implementing appropriate corrective measures. This intricate process entailed meticulously comparing data from various sources, pinpointing inconsistencies, and rectifying them through tailored Python transformations. Once discrepancies were resolved, the refined data was seamlessly integrated with historical records stored onAzure SQL Server.

Navigating through these complexities demanded a meticulous approach and a deep understanding of both the data intricacies and the technical nuances of Python transformation. By overcoming these challenges, we ensured the integrity and accuracy of the dataset, laying a solid foundation for comprehensive analysis and informed decision-making.

## Converting addresses into geospatial insight

The challenge we encountered centered on the transformation of addresses into geocodes, a critical aspect of our project. Initially, we attempted to tackle this task within PowerBI by implementing a method that involved callingBing Mapsfor each cell to retrieve the corresponding geocodes. However, we faced a significant obstacle when we realized thatthis approach couldn't be published on the PowerBI service due to its limitations.

Acknowledging the need for a robust solution that could overcome this constraint while meeting stakeholder requirements, we devised a strategic shift. Understanding the stakeholders' desire tovisualize a one-mile radius around on-site locationsfor better analysis—particularly to understand instances where staff didn't refuel their tanks when the on-site station was closed—we recognized the potential of leveraging ArcGIS Pro.

By leveraging ArcGIS Pro and tapping into the geospatial geocoding expertise provided by ourGIS team, we successfully transformed addresses into geocodes. This innovative approach not only addressed the limitations of PowerBI maps but also allowed us to incorporate advanced geospatial analysis capabilities, enabling us to visualize the desired one-mile radius around on-site locations.

Through this strategic integration of ArcGIS Pro and collaboration with our GIS team, we not only overcame the initial challenge of geocoding addresses but also enhanced our analytical capabilities, empowering stakeholders with deeper insights and more accurate data visualization for informed decision-making.

In conclusion, this project demonstrates how geospatial tooling can extend a standard BI environment when native map visuals are not enough. By combining ArcGIS Pro, Power BI, Python transformations, and stakeholder collaboration, the dashboard moved beyond simple plotting and became a stronger decision-support tool.

Through this strategic integration, we not only addressed the initial challenge of geocoding addresses but also unlocked advanced geospatial analysis capabilities, empowering stakeholders with deeper insights and more accurate data visualization. By visualizing a one-mile radius around on-site locations, we provided valuable context for understanding staff behavior regarding refueling practices during the closure of on-site stations.

The project also reflects the importance of adapting the technical approach to the actual deployment environment rather than forcing an analysis to fit a tool's limitations.
