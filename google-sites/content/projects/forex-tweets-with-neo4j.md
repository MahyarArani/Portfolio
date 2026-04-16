---
title: "Forex Tweets With NEO4J"
date: "2024-01-01"
images: ["Forex Tweets With NEO4J/773c52f3d3b974150f19f510b4245195.jpg", "Forex Tweets With NEO4J/92843994e45d6bd1628dbe5742c0aabf.jpg", "Forex Tweets With NEO4J/c6193bd9e28c8f88addb761856b9c87d.jpg", "Forex Tweets With NEO4J/18ef3f72773316798de154264c5a4887.jpg", "Forex Tweets With NEO4J/da08b6f52599e775d812fb352e39a96b.jpg", "Forex Tweets With NEO4J/7d7e9057a23766b5c1aa2d6fea49fc2d.jpg", "Forex Tweets With NEO4J/eb5559bb0715a3ce33425fbe4c86a8e7.jpg"]
slug: "forex-tweets-with-neo4j"
---

Analyzing Forex Trading Related Tweets  With The Use of NEO4J

The first step in designing a Graph-based database is to create aConcept Map.Similar to relational databases, the concept map acts as the role of entity-relationship diagram for us.

A concept map is a diagram or graphical tool that visually represents relationships between concepts and ideas. Most concept maps depict ideas as boxes or circles (also called nodes), which are structured hierarchically and connected with lines or arrows (also called arcs). These lines are labeled with linking words and phrases to help explain the connections between concepts.

For more information on concept maps use this link:

https://www.lucidchart.com/pages/concept-map/#discovery__top

To create a simple concept map, we divided the tweets into four significant areas (person, news, types, reports) that increase volatility in the forex market.

At the next level under “person”, we have 3 different types of persons that mainly affect market prices; their ideas or analysis could make a significant wave or viewpoint on the whole market and affect traders. The political role has the most effect on the market among this group.

The news could also heavily and harshly affect the volatility and liquidation of the market, and types are those significant items that traders buy or sell in the market, and it reduces to the most important one. For instance, gold price affected USDJPY, or war could affect oil, gold, USDJPY, and USDCAD. There are several complicated relationships between the sub-categories, but due to reduced complexity, they are not mentioned in the concept.

Types have also inbounded and outbound relationships. For instance, silver price effects on NZDUSD or “crude oil inventories” affect “crude oil” and EURUSD.

The reports are divided into two medium and high. We have low importance too, but we did not mention it here due to reducing complexity. We could consider reports as news, but due to reports announced by governmental organizations and having the exact time, I prefer to group them in another category, and news here is described as unpredictable news.

In this part please review thispostfor a quick review of extracting the tweets with a developer account.

After extracting the tweets we could insert them either manually or by connecting to a database. here is an example of how to insert them manually.

Creating Users, Hashtags, Concept Map Modules as Entities and Relationships in the Graph

Now we have our Graph database and we could mover forward and use it for social media analytics.

For instance we want to check our concept elements' priority and check which node has more relationship power in our concept map.

Using this snippet:

Checking with the most central node in the concept map:

Centrality:https://en.wikipedia.org/wiki/Centrality

List of all tweets associated with the most central node in the concept map:

List the concepts related to tweets with a particular hashtag:


