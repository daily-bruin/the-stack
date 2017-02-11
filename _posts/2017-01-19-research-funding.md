---
title: Research Funding
stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.css
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/dropdown.min.css
  - /css/posts/water-polo-2016/util.css
  - /css/posts/research-funding/app.css
scripts:
  - //d3js.org/d3.v4.min.js
  - //d3js.org/d3-transition.v1.min.js
  - /js/posts/research-funding/barchart.js
  - /js/posts/research-funding/donutchart.js
  - /js/posts/research-funding/index.js
---
<div id='bar-chart-wrapper'>
    <select style="margin: 0 auto; display: flex; width: 200px; height: 3em;" class="ui selection dropdown" id='lineChartDropdown'>
        <option value='0'>TOTAL</option>
        <option value='1'>BIOENGINEERING</option>
    </select>
</div>
<div id='donut-chart-wrapper'>
</div>