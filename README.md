# Plotly - Biodiversity Dashboard (https://jorgearv.github.io/Plotly_Biodiversity_Dashboard/)

I have built an interactive dashboard to explore a bellly button biodiversity dataset, which catalogs the microbes that colonize human navels. 

This dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Below I have detailed the steps undertaken to create this dashboard: 

1. I have used the D3 library to read in `samples.json`.

2. I have created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

* I have used `sample_values` as the values for the bar chart.

* I have used `otu_ids` as the labels for the bar chart.

* I have used `otu_labels` as the hovertext for the chart.

3. I have created a bubble chart that displays each sample.

* I have used `otu_ids` for the x values.

* I have used `sample_values` for the y values.

* I have used `sample_values` for the marker size.

* I have used `otu_ids` for the marker colors.

* I have used `otu_labels` for the text values.


4. I have displayed the sample metadata, i.e., an individual's demographic information, as well as each key-value pair from the metadata JSON object.

5. I have deployed my app to GitHub Pages: https://jorgearv.github.io/Plotly_Biodiversity_Dashboard/

--------

Contact: jorge.arriola.villafuerte@gmail.com