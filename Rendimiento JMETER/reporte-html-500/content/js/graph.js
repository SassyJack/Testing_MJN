/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 6584.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 1.0], [2.7, 1.0], [2.8, 1.0], [2.9, 1.0], [3.0, 1.0], [3.1, 1.0], [3.2, 1.0], [3.3, 1.0], [3.4, 1.0], [3.5, 1.0], [3.6, 1.0], [3.7, 1.0], [3.8, 1.0], [3.9, 1.0], [4.0, 1.0], [4.1, 1.0], [4.2, 1.0], [4.3, 1.0], [4.4, 1.0], [4.5, 1.0], [4.6, 1.0], [4.7, 1.0], [4.8, 1.0], [4.9, 1.0], [5.0, 1.0], [5.1, 1.0], [5.2, 1.0], [5.3, 1.0], [5.4, 1.0], [5.5, 1.0], [5.6, 1.0], [5.7, 1.0], [5.8, 1.0], [5.9, 1.0], [6.0, 1.0], [6.1, 2.0], [6.2, 2.0], [6.3, 2.0], [6.4, 2.0], [6.5, 2.0], [6.6, 2.0], [6.7, 2.0], [6.8, 2.0], [6.9, 2.0], [7.0, 2.0], [7.1, 2.0], [7.2, 2.0], [7.3, 2.0], [7.4, 2.0], [7.5, 2.0], [7.6, 2.0], [7.7, 2.0], [7.8, 2.0], [7.9, 2.0], [8.0, 2.0], [8.1, 2.0], [8.2, 2.0], [8.3, 2.0], [8.4, 2.0], [8.5, 2.0], [8.6, 2.0], [8.7, 2.0], [8.8, 2.0], [8.9, 2.0], [9.0, 2.0], [9.1, 2.0], [9.2, 2.0], [9.3, 2.0], [9.4, 2.0], [9.5, 2.0], [9.6, 2.0], [9.7, 2.0], [9.8, 2.0], [9.9, 2.0], [10.0, 2.0], [10.1, 2.0], [10.2, 2.0], [10.3, 2.0], [10.4, 2.0], [10.5, 2.0], [10.6, 2.0], [10.7, 2.0], [10.8, 2.0], [10.9, 2.0], [11.0, 2.0], [11.1, 2.0], [11.2, 2.0], [11.3, 2.0], [11.4, 2.0], [11.5, 2.0], [11.6, 2.0], [11.7, 2.0], [11.8, 2.0], [11.9, 2.0], [12.0, 2.0], [12.1, 2.0], [12.2, 2.0], [12.3, 2.0], [12.4, 2.0], [12.5, 2.0], [12.6, 2.0], [12.7, 2.0], [12.8, 2.0], [12.9, 2.0], [13.0, 2.0], [13.1, 2.0], [13.2, 2.0], [13.3, 2.0], [13.4, 2.0], [13.5, 2.0], [13.6, 2.0], [13.7, 2.0], [13.8, 2.0], [13.9, 2.0], [14.0, 2.0], [14.1, 2.0], [14.2, 2.0], [14.3, 2.0], [14.4, 2.0], [14.5, 2.0], [14.6, 2.0], [14.7, 2.0], [14.8, 2.0], [14.9, 2.0], [15.0, 2.0], [15.1, 2.0], [15.2, 2.0], [15.3, 2.0], [15.4, 2.0], [15.5, 2.0], [15.6, 2.0], [15.7, 2.0], [15.8, 2.0], [15.9, 2.0], [16.0, 2.0], [16.1, 2.0], [16.2, 2.0], [16.3, 2.0], [16.4, 2.0], [16.5, 2.0], [16.6, 2.0], [16.7, 2.0], [16.8, 2.0], [16.9, 2.0], [17.0, 2.0], [17.1, 2.0], [17.2, 2.0], [17.3, 2.0], [17.4, 2.0], [17.5, 2.0], [17.6, 2.0], [17.7, 2.0], [17.8, 2.0], [17.9, 2.0], [18.0, 2.0], [18.1, 2.0], [18.2, 2.0], [18.3, 2.0], [18.4, 2.0], [18.5, 2.0], [18.6, 2.0], [18.7, 2.0], [18.8, 2.0], [18.9, 2.0], [19.0, 2.0], [19.1, 2.0], [19.2, 2.0], [19.3, 2.0], [19.4, 2.0], [19.5, 2.0], [19.6, 2.0], [19.7, 2.0], [19.8, 2.0], [19.9, 2.0], [20.0, 2.0], [20.1, 2.0], [20.2, 2.0], [20.3, 2.0], [20.4, 2.0], [20.5, 2.0], [20.6, 2.0], [20.7, 2.0], [20.8, 2.0], [20.9, 2.0], [21.0, 2.0], [21.1, 2.0], [21.2, 2.0], [21.3, 2.0], [21.4, 2.0], [21.5, 2.0], [21.6, 2.0], [21.7, 2.0], [21.8, 2.0], [21.9, 2.0], [22.0, 2.0], [22.1, 2.0], [22.2, 2.0], [22.3, 2.0], [22.4, 2.0], [22.5, 2.0], [22.6, 2.0], [22.7, 2.0], [22.8, 2.0], [22.9, 2.0], [23.0, 2.0], [23.1, 2.0], [23.2, 2.0], [23.3, 2.0], [23.4, 2.0], [23.5, 2.0], [23.6, 2.0], [23.7, 2.0], [23.8, 2.0], [23.9, 2.0], [24.0, 2.0], [24.1, 2.0], [24.2, 2.0], [24.3, 2.0], [24.4, 2.0], [24.5, 2.0], [24.6, 2.0], [24.7, 2.0], [24.8, 2.0], [24.9, 2.0], [25.0, 2.0], [25.1, 2.0], [25.2, 2.0], [25.3, 2.0], [25.4, 2.0], [25.5, 2.0], [25.6, 2.0], [25.7, 2.0], [25.8, 2.0], [25.9, 2.0], [26.0, 2.0], [26.1, 2.0], [26.2, 2.0], [26.3, 3.0], [26.4, 3.0], [26.5, 3.0], [26.6, 3.0], [26.7, 3.0], [26.8, 3.0], [26.9, 3.0], [27.0, 3.0], [27.1, 3.0], [27.2, 3.0], [27.3, 3.0], [27.4, 3.0], [27.5, 3.0], [27.6, 3.0], [27.7, 3.0], [27.8, 3.0], [27.9, 3.0], [28.0, 3.0], [28.1, 3.0], [28.2, 3.0], [28.3, 3.0], [28.4, 3.0], [28.5, 3.0], [28.6, 3.0], [28.7, 3.0], [28.8, 3.0], [28.9, 3.0], [29.0, 3.0], [29.1, 3.0], [29.2, 3.0], [29.3, 3.0], [29.4, 3.0], [29.5, 3.0], [29.6, 3.0], [29.7, 3.0], [29.8, 3.0], [29.9, 3.0], [30.0, 3.0], [30.1, 3.0], [30.2, 3.0], [30.3, 3.0], [30.4, 3.0], [30.5, 3.0], [30.6, 3.0], [30.7, 3.0], [30.8, 3.0], [30.9, 3.0], [31.0, 3.0], [31.1, 3.0], [31.2, 3.0], [31.3, 3.0], [31.4, 3.0], [31.5, 3.0], [31.6, 3.0], [31.7, 3.0], [31.8, 3.0], [31.9, 3.0], [32.0, 3.0], [32.1, 3.0], [32.2, 3.0], [32.3, 3.0], [32.4, 3.0], [32.5, 3.0], [32.6, 3.0], [32.7, 3.0], [32.8, 3.0], [32.9, 3.0], [33.0, 3.0], [33.1, 3.0], [33.2, 3.0], [33.3, 4.0], [33.4, 4.0], [33.5, 4.0], [33.6, 4.0], [33.7, 4.0], [33.8, 4.0], [33.9, 4.0], [34.0, 4.0], [34.1, 4.0], [34.2, 4.0], [34.3, 4.0], [34.4, 4.0], [34.5, 4.0], [34.6, 4.0], [34.7, 4.0], [34.8, 4.0], [34.9, 4.0], [35.0, 4.0], [35.1, 4.0], [35.2, 4.0], [35.3, 4.0], [35.4, 4.0], [35.5, 5.0], [35.6, 5.0], [35.7, 5.0], [35.8, 5.0], [35.9, 5.0], [36.0, 5.0], [36.1, 5.0], [36.2, 5.0], [36.3, 5.0], [36.4, 5.0], [36.5, 5.0], [36.6, 5.0], [36.7, 5.0], [36.8, 5.0], [36.9, 5.0], [37.0, 5.0], [37.1, 6.0], [37.2, 6.0], [37.3, 6.0], [37.4, 6.0], [37.5, 6.0], [37.6, 6.0], [37.7, 6.0], [37.8, 6.0], [37.9, 7.0], [38.0, 7.0], [38.1, 7.0], [38.2, 7.0], [38.3, 7.0], [38.4, 8.0], [38.5, 9.0], [38.6, 11.0], [38.7, 12.0], [38.8, 12.0], [38.9, 13.0], [39.0, 14.0], [39.1, 14.0], [39.2, 16.0], [39.3, 19.0], [39.4, 20.0], [39.5, 22.0], [39.6, 23.0], [39.7, 23.0], [39.8, 25.0], [39.9, 27.0], [40.0, 29.0], [40.1, 30.0], [40.2, 32.0], [40.3, 36.0], [40.4, 37.0], [40.5, 39.0], [40.6, 41.0], [40.7, 42.0], [40.8, 50.0], [40.9, 50.0], [41.0, 57.0], [41.1, 58.0], [41.2, 61.0], [41.3, 62.0], [41.4, 387.0], [41.5, 388.0], [41.6, 424.0], [41.7, 425.0], [41.8, 425.0], [41.9, 425.0], [42.0, 426.0], [42.1, 426.0], [42.2, 426.0], [42.3, 427.0], [42.4, 427.0], [42.5, 427.0], [42.6, 427.0], [42.7, 428.0], [42.8, 429.0], [42.9, 714.0], [43.0, 1283.0], [43.1, 1283.0], [43.2, 1284.0], [43.3, 1284.0], [43.4, 1284.0], [43.5, 1284.0], [43.6, 1285.0], [43.7, 1286.0], [43.8, 1287.0], [43.9, 1287.0], [44.0, 1287.0], [44.1, 1288.0], [44.2, 1644.0], [44.3, 1644.0], [44.4, 1644.0], [44.5, 1644.0], [44.6, 1645.0], [44.7, 1645.0], [44.8, 1646.0], [44.9, 1646.0], [45.0, 1646.0], [45.1, 1646.0], [45.2, 1647.0], [45.3, 1647.0], [45.4, 1658.0], [45.5, 1658.0], [45.6, 1658.0], [45.7, 1658.0], [45.8, 1659.0], [45.9, 1659.0], [46.0, 1659.0], [46.1, 1659.0], [46.2, 1660.0], [46.3, 1660.0], [46.4, 1661.0], [46.5, 1661.0], [46.6, 1661.0], [46.7, 1661.0], [46.8, 1662.0], [46.9, 1662.0], [47.0, 1662.0], [47.1, 1662.0], [47.2, 1662.0], [47.3, 1662.0], [47.4, 1662.0], [47.5, 1662.0], [47.6, 1662.0], [47.7, 1662.0], [47.8, 1663.0], [47.9, 1672.0], [48.0, 1672.0], [48.1, 1672.0], [48.2, 1673.0], [48.3, 1673.0], [48.4, 1673.0], [48.5, 1673.0], [48.6, 1673.0], [48.7, 1673.0], [48.8, 1673.0], [48.9, 1674.0], [49.0, 1674.0], [49.1, 1677.0], [49.2, 1841.0], [49.3, 1841.0], [49.4, 1914.0], [49.5, 1915.0], [49.6, 1916.0], [49.7, 1916.0], [49.8, 1917.0], [49.9, 1918.0], [50.0, 1919.0], [50.1, 1919.0], [50.2, 1920.0], [50.3, 1921.0], [50.4, 1922.0], [50.5, 1922.0], [50.6, 1922.0], [50.7, 1922.0], [50.8, 1923.0], [50.9, 1923.0], [51.0, 1923.0], [51.1, 1923.0], [51.2, 1923.0], [51.3, 1923.0], [51.4, 1924.0], [51.5, 1924.0], [51.6, 1924.0], [51.7, 1924.0], [51.8, 1924.0], [51.9, 1925.0], [52.0, 1925.0], [52.1, 1937.0], [52.2, 1937.0], [52.3, 1938.0], [52.4, 1939.0], [52.5, 1940.0], [52.6, 1940.0], [52.7, 1941.0], [52.8, 1942.0], [52.9, 1943.0], [53.0, 1945.0], [53.1, 1945.0], [53.2, 1946.0], [53.3, 1946.0], [53.4, 1946.0], [53.5, 2124.0], [53.6, 2126.0], [53.7, 2128.0], [53.8, 2139.0], [53.9, 2140.0], [54.0, 2141.0], [54.1, 2141.0], [54.2, 2147.0], [54.3, 2149.0], [54.4, 2154.0], [54.5, 2154.0], [54.6, 2168.0], [54.7, 2197.0], [54.8, 2200.0], [54.9, 2202.0], [55.0, 2203.0], [55.1, 2205.0], [55.2, 2207.0], [55.3, 2208.0], [55.4, 2210.0], [55.5, 2215.0], [55.6, 2220.0], [55.7, 2224.0], [55.8, 2244.0], [55.9, 2462.0], [56.0, 2466.0], [56.1, 2466.0], [56.2, 2466.0], [56.3, 2467.0], [56.4, 2467.0], [56.5, 2467.0], [56.6, 2467.0], [56.7, 2467.0], [56.8, 2467.0], [56.9, 2468.0], [57.0, 2468.0], [57.1, 2469.0], [57.2, 2469.0], [57.3, 2622.0], [57.4, 2622.0], [57.5, 2623.0], [57.6, 2623.0], [57.7, 2623.0], [57.8, 2623.0], [57.9, 2623.0], [58.0, 2624.0], [58.1, 2626.0], [58.2, 2627.0], [58.3, 2627.0], [58.4, 2628.0], [58.5, 2629.0], [58.6, 2629.0], [58.7, 2629.0], [58.8, 2630.0], [58.9, 2630.0], [59.0, 2631.0], [59.1, 2632.0], [59.2, 2632.0], [59.3, 2633.0], [59.4, 2758.0], [59.5, 2758.0], [59.6, 2758.0], [59.7, 2758.0], [59.8, 2758.0], [59.9, 2758.0], [60.0, 2759.0], [60.1, 2759.0], [60.2, 2759.0], [60.3, 2759.0], [60.4, 2759.0], [60.5, 2759.0], [60.6, 2759.0], [60.7, 2759.0], [60.8, 2759.0], [60.9, 2759.0], [61.0, 2759.0], [61.1, 2759.0], [61.2, 2759.0], [61.3, 2760.0], [61.4, 2760.0], [61.5, 2760.0], [61.6, 2760.0], [61.7, 2760.0], [61.8, 2760.0], [61.9, 2760.0], [62.0, 2760.0], [62.1, 2760.0], [62.2, 2760.0], [62.3, 2761.0], [62.4, 2761.0], [62.5, 2761.0], [62.6, 2761.0], [62.7, 2761.0], [62.8, 2761.0], [62.9, 2761.0], [63.0, 2762.0], [63.1, 2762.0], [63.2, 2762.0], [63.3, 2762.0], [63.4, 2763.0], [63.5, 2763.0], [63.6, 2763.0], [63.7, 2763.0], [63.8, 2763.0], [63.9, 2763.0], [64.0, 2763.0], [64.1, 2763.0], [64.2, 2764.0], [64.3, 2764.0], [64.4, 2771.0], [64.5, 2771.0], [64.6, 2800.0], [64.7, 2800.0], [64.8, 2800.0], [64.9, 2801.0], [65.0, 2801.0], [65.1, 2801.0], [65.2, 2801.0], [65.3, 2801.0], [65.4, 2801.0], [65.5, 2801.0], [65.6, 2801.0], [65.7, 2801.0], [65.8, 2802.0], [65.9, 2802.0], [66.0, 2816.0], [66.1, 2817.0], [66.2, 2817.0], [66.3, 2817.0], [66.4, 2818.0], [66.5, 2818.0], [66.6, 2818.0], [66.7, 2818.0], [66.8, 2819.0], [66.9, 2819.0], [67.0, 2819.0], [67.1, 2820.0], [67.2, 2820.0], [67.3, 2820.0], [67.4, 2820.0], [67.5, 2821.0], [67.6, 2821.0], [67.7, 2821.0], [67.8, 2821.0], [67.9, 2821.0], [68.0, 2821.0], [68.1, 2821.0], [68.2, 2822.0], [68.3, 2822.0], [68.4, 2822.0], [68.5, 2822.0], [68.6, 2822.0], [68.7, 2823.0], [68.8, 2823.0], [68.9, 2823.0], [69.0, 2823.0], [69.1, 2823.0], [69.2, 2823.0], [69.3, 2823.0], [69.4, 2823.0], [69.5, 2823.0], [69.6, 2823.0], [69.7, 2823.0], [69.8, 2823.0], [69.9, 2823.0], [70.0, 2824.0], [70.1, 2824.0], [70.2, 2824.0], [70.3, 2824.0], [70.4, 2824.0], [70.5, 2824.0], [70.6, 2824.0], [70.7, 2825.0], [70.8, 2825.0], [70.9, 2825.0], [71.0, 2826.0], [71.1, 2826.0], [71.2, 2826.0], [71.3, 2827.0], [71.4, 2828.0], [71.5, 2828.0], [71.6, 2829.0], [71.7, 2829.0], [71.8, 2829.0], [71.9, 2829.0], [72.0, 2829.0], [72.1, 2829.0], [72.2, 2829.0], [72.3, 2830.0], [72.4, 2830.0], [72.5, 2830.0], [72.6, 2830.0], [72.7, 2831.0], [72.8, 2831.0], [72.9, 2832.0], [73.0, 2832.0], [73.1, 2833.0], [73.2, 2833.0], [73.3, 2833.0], [73.4, 2833.0], [73.5, 2833.0], [73.6, 2834.0], [73.7, 2835.0], [73.8, 2835.0], [73.9, 2835.0], [74.0, 2836.0], [74.1, 2837.0], [74.2, 2837.0], [74.3, 2838.0], [74.4, 2838.0], [74.5, 2839.0], [74.6, 2839.0], [74.7, 2839.0], [74.8, 2844.0], [74.9, 2844.0], [75.0, 2844.0], [75.1, 2844.0], [75.2, 2844.0], [75.3, 2845.0], [75.4, 2845.0], [75.5, 2845.0], [75.6, 2845.0], [75.7, 2845.0], [75.8, 2845.0], [75.9, 2845.0], [76.0, 2845.0], [76.1, 2845.0], [76.2, 2845.0], [76.3, 2846.0], [76.4, 2846.0], [76.5, 2846.0], [76.6, 2846.0], [76.7, 2846.0], [76.8, 2846.0], [76.9, 2846.0], [77.0, 2847.0], [77.1, 2847.0], [77.2, 2847.0], [77.3, 2847.0], [77.4, 2848.0], [77.5, 2848.0], [77.6, 2849.0], [77.7, 2849.0], [77.8, 2849.0], [77.9, 2849.0], [78.0, 2849.0], [78.1, 2849.0], [78.2, 2849.0], [78.3, 2849.0], [78.4, 2850.0], [78.5, 2850.0], [78.6, 2850.0], [78.7, 2850.0], [78.8, 2851.0], [78.9, 2862.0], [79.0, 2863.0], [79.1, 2863.0], [79.2, 2864.0], [79.3, 2865.0], [79.4, 2866.0], [79.5, 2867.0], [79.6, 2868.0], [79.7, 2869.0], [79.8, 2871.0], [79.9, 2871.0], [80.0, 2872.0], [80.1, 2872.0], [80.2, 2872.0], [80.3, 2872.0], [80.4, 2872.0], [80.5, 2872.0], [80.6, 2872.0], [80.7, 2872.0], [80.8, 2872.0], [80.9, 2872.0], [81.0, 2873.0], [81.1, 2873.0], [81.2, 2876.0], [81.3, 2876.0], [81.4, 2887.0], [81.5, 2888.0], [81.6, 2888.0], [81.7, 2888.0], [81.8, 2890.0], [81.9, 2890.0], [82.0, 2891.0], [82.1, 2891.0], [82.2, 2891.0], [82.3, 2892.0], [82.4, 2893.0], [82.5, 2893.0], [82.6, 2893.0], [82.7, 2894.0], [82.8, 2894.0], [82.9, 2894.0], [83.0, 2894.0], [83.1, 2895.0], [83.2, 2895.0], [83.3, 2895.0], [83.4, 2895.0], [83.5, 2895.0], [83.6, 2896.0], [83.7, 2896.0], [83.8, 2896.0], [83.9, 2896.0], [84.0, 2897.0], [84.1, 2897.0], [84.2, 2897.0], [84.3, 2897.0], [84.4, 2897.0], [84.5, 2897.0], [84.6, 2898.0], [84.7, 2898.0], [84.8, 2898.0], [84.9, 2898.0], [85.0, 2898.0], [85.1, 2898.0], [85.2, 2898.0], [85.3, 2898.0], [85.4, 2898.0], [85.5, 2899.0], [85.6, 2899.0], [85.7, 2899.0], [85.8, 2899.0], [85.9, 2899.0], [86.0, 2899.0], [86.1, 2899.0], [86.2, 2900.0], [86.3, 2900.0], [86.4, 2900.0], [86.5, 2900.0], [86.6, 2901.0], [86.7, 2901.0], [86.8, 2910.0], [86.9, 2986.0], [87.0, 3126.0], [87.1, 3128.0], [87.2, 3129.0], [87.3, 3131.0], [87.4, 3140.0], [87.5, 3150.0], [87.6, 3152.0], [87.7, 3175.0], [87.8, 3178.0], [87.9, 3182.0], [88.0, 3183.0], [88.1, 3198.0], [88.2, 3205.0], [88.3, 3207.0], [88.4, 3208.0], [88.5, 3209.0], [88.6, 3212.0], [88.7, 3213.0], [88.8, 3213.0], [88.9, 3213.0], [89.0, 3213.0], [89.1, 3214.0], [89.2, 3214.0], [89.3, 3214.0], [89.4, 3214.0], [89.5, 3215.0], [89.6, 3215.0], [89.7, 3402.0], [89.8, 3402.0], [89.9, 3402.0], [90.0, 3402.0], [90.1, 3402.0], [90.2, 3402.0], [90.3, 3402.0], [90.4, 3402.0], [90.5, 3402.0], [90.6, 3403.0], [90.7, 3403.0], [90.8, 3403.0], [90.9, 3403.0], [91.0, 3403.0], [91.1, 3403.0], [91.2, 3403.0], [91.3, 3404.0], [91.4, 3404.0], [91.5, 3404.0], [91.6, 3404.0], [91.7, 3404.0], [91.8, 3405.0], [91.9, 3405.0], [92.0, 3405.0], [92.1, 3405.0], [92.2, 3522.0], [92.3, 3523.0], [92.4, 3526.0], [92.5, 3530.0], [92.6, 3566.0], [92.7, 3570.0], [92.8, 3570.0], [92.9, 3578.0], [93.0, 3581.0], [93.1, 3582.0], [93.2, 3583.0], [93.3, 3592.0], [93.4, 3596.0], [93.5, 4079.0], [93.6, 4150.0], [93.7, 4166.0], [93.8, 4168.0], [93.9, 4171.0], [94.0, 4172.0], [94.1, 4172.0], [94.2, 4173.0], [94.3, 4177.0], [94.4, 4180.0], [94.5, 4183.0], [94.6, 4187.0], [94.7, 4188.0], [94.8, 4628.0], [94.9, 4638.0], [95.0, 4645.0], [95.1, 4649.0], [95.2, 4654.0], [95.3, 4658.0], [95.4, 4661.0], [95.5, 4664.0], [95.6, 4666.0], [95.7, 4670.0], [95.8, 4673.0], [95.9, 4675.0], [96.0, 4789.0], [96.1, 4944.0], [96.2, 4955.0], [96.3, 4958.0], [96.4, 4962.0], [96.5, 4967.0], [96.6, 4969.0], [96.7, 4973.0], [96.8, 4974.0], [96.9, 4980.0], [97.0, 4985.0], [97.1, 4991.0], [97.2, 4999.0], [97.3, 5973.0], [97.4, 5977.0], [97.5, 5981.0], [97.6, 5984.0], [97.7, 5988.0], [97.8, 5990.0], [97.9, 5992.0], [98.0, 5994.0], [98.1, 5996.0], [98.2, 5997.0], [98.3, 5998.0], [98.4, 5999.0], [98.5, 5999.0], [98.6, 5999.0], [98.7, 6001.0], [98.8, 6002.0], [98.9, 6003.0], [99.0, 6005.0], [99.1, 6011.0], [99.2, 6013.0], [99.3, 6020.0], [99.4, 6033.0], [99.5, 6051.0], [99.6, 6056.0], [99.7, 6061.0], [99.8, 6062.0], [99.9, 6582.0], [100.0, 6584.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1035.0, "series": [{"data": [[0.0, 1035.0], [700.0, 2.0], [1200.0, 31.0], [1600.0, 125.0], [1800.0, 4.0], [1900.0, 104.0], [2100.0, 32.0], [2200.0, 27.0], [2400.0, 36.0], [2600.0, 53.0], [2800.0, 540.0], [2700.0, 128.0], [2900.0, 22.0], [3100.0, 29.0], [3200.0, 36.0], [3400.0, 64.0], [3500.0, 32.0], [4000.0, 3.0], [4100.0, 29.0], [4600.0, 31.0], [4700.0, 1.0], [4800.0, 1.0], [300.0, 4.0], [5000.0, 2.0], [4900.0, 29.0], [6000.0, 30.0], [5900.0, 34.0], [6500.0, 4.0], [400.0, 32.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 33.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1396.0, "series": [{"data": [[0.0, 36.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 33.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1396.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1035.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 321.29480000000063, "minX": 1.77914502E12, "maxY": 321.29480000000063, "series": [{"data": [[1.77914502E12, 321.29480000000063]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77914502E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1.25, "minX": 4.0, "maxY": 3227.80076628352, "series": [{"data": [[4.0, 387.5], [5.0, 424.0], [7.0, 424.0], [8.0, 429.0], [9.0, 425.0], [10.0, 425.0], [14.0, 425.5], [17.0, 425.6666666666667], [19.0, 426.0], [20.0, 425.5], [23.0, 427.0], [26.0, 427.0], [27.0, 427.0], [29.0, 427.0], [31.0, 428.0], [32.0, 426.0], [34.0, 427.0], [37.0, 499.0], [38.0, 710.0], [40.0, 1287.5], [43.0, 1287.0], [45.0, 1287.0], [49.0, 1285.0], [48.0, 1286.3333333333333], [50.0, 1286.0], [53.0, 1284.3333333333333], [55.0, 1284.0], [57.0, 1284.0], [59.0, 1284.0], [58.0, 1284.0], [60.0, 1283.5], [63.0, 1283.5], [62.0, 1283.0], [66.0, 1290.5], [65.0, 1283.0], [71.0, 1644.0], [70.0, 1482.0], [68.0, 1283.5], [75.0, 1644.0], [73.0, 1643.5], [78.0, 1644.0], [83.0, 1644.5], [82.0, 1644.0], [81.0, 1646.0], [80.0, 1645.0], [86.0, 1645.0], [91.0, 1646.0], [88.0, 1645.0], [95.0, 1646.0], [94.0, 1646.0], [99.0, 1647.0], [98.0, 1646.0], [96.0, 1647.0], [103.0, 1659.5], [101.0, 1674.0], [100.0, 1672.0], [106.0, 1673.0], [105.0, 1673.0], [104.0, 1672.0], [110.0, 1672.5], [108.0, 1673.5], [114.0, 1673.0], [113.0, 1672.3333333333333], [118.0, 1673.5], [117.0, 1673.0], [123.0, 1672.5], [122.0, 1674.0], [121.0, 1673.0], [120.0, 1673.0], [126.0, 1673.0], [135.0, 1946.0], [133.0, 1946.0], [132.0, 1728.2], [129.0, 1674.0], [128.0, 1673.0], [143.0, 1944.0], [141.0, 1945.0], [140.0, 1944.5], [139.0, 1945.0], [137.0, 1946.0], [151.0, 1940.0], [149.0, 1941.0], [147.0, 1941.0], [146.0, 1942.0], [145.0, 1942.0], [144.0, 1943.0], [159.0, 1938.0], [157.0, 1938.0], [156.0, 1939.5], [155.0, 1940.0], [154.0, 1939.0], [152.0, 1939.5], [166.0, 1923.0], [165.0, 1924.0], [164.0, 1924.6176470588234], [161.0, 1937.0], [160.0, 1938.0], [174.0, 1922.0], [172.0, 1922.0], [171.0, 1923.0], [169.0, 1922.5], [168.0, 1923.0], [182.0, 1919.5], [181.0, 1919.0], [180.0, 1920.0], [179.0, 1920.0], [178.0, 1920.0], [177.0, 1921.0], [176.0, 1921.0], [190.0, 1916.5], [188.0, 1917.5], [187.0, 1917.0], [186.0, 1918.0], [184.0, 1919.0], [199.0, 1662.0], [198.0, 1663.0], [197.0, 1662.0], [196.0, 1718.393939393939], [194.0, 1915.0], [192.0, 1916.0], [207.0, 1661.0], [205.0, 1662.0], [203.0, 1662.0], [200.0, 1661.5], [214.0, 1662.0], [213.0, 1662.0], [211.0, 1661.0], [209.0, 1662.5], [208.0, 1662.0], [222.0, 1660.5], [220.0, 1661.5], [219.0, 1662.0], [217.0, 1661.5], [216.0, 1661.0], [230.0, 2763.0], [229.0, 2763.75], [228.0, 2658.2068965517246], [227.0, 1658.0], [226.0, 1659.0], [224.0, 1659.0], [239.0, 2761.0], [238.0, 2760.0], [236.0, 2761.0], [235.0, 2762.0], [233.0, 2763.0], [232.0, 2763.0], [247.0, 2762.0], [246.0, 2763.0], [244.0, 2760.5], [242.0, 2760.5], [241.0, 2759.0], [254.0, 2760.0], [252.0, 2760.0], [250.0, 2760.0], [248.0, 2761.0], [270.0, 2759.0], [271.0, 2758.0], [269.0, 2758.0], [268.0, 2760.0], [267.0, 2759.0], [265.0, 2758.5], [264.0, 2759.0], [263.0, 2758.0], [259.0, 2758.5], [258.0, 2759.0], [257.0, 2759.0], [256.0, 2761.0], [261.0, 2759.5], [284.0, 2759.0], [286.0, 2759.9473684210525], [287.0, 2761.0], [285.0, 2758.916666666667], [283.0, 2759.25], [280.0, 2759.0], [278.0, 2759.5], [275.0, 2759.0], [273.0, 2759.3333333333335], [277.0, 2759.0], [276.0, 2758.0], [303.0, 3.125], [302.0, 4.166666666666667], [296.0, 1.6666666666666667], [293.0, 3227.80076628352], [289.0, 2759.75], [317.0, 2.0], [304.0, 2.0], [309.0, 3.0], [313.0, 2.0], [314.0, 1.7999999999999998], [315.0, 1.5], [316.0, 1.5], [318.0, 2.0], [319.0, 3.0], [310.0, 2.0], [332.0, 3.4], [320.0, 4.714285714285714], [321.0, 3.0], [325.0, 2.0], [324.0, 2.0], [326.0, 1.8], [327.0, 2.75], [328.0, 7.375], [329.0, 1.6666666666666665], [330.0, 1.6666666666666667], [331.0, 4.0], [334.0, 4.0], [333.0, 2.0], [335.0, 2.75], [336.0, 2.375], [342.0, 2.2], [341.0, 2.0], [340.0, 2.0], [344.0, 4.2], [343.0, 22.666666666666668], [345.0, 9.090909090909092], [346.0, 2.333333333333333], [347.0, 2.3333333333333335], [348.0, 5.2727272727272725], [339.0, 2.3333333333333335], [338.0, 2.0], [349.0, 1.6], [355.0, 7.5], [352.0, 1.6666666666666667], [353.0, 5.869565217391304], [354.0, 2.4615384615384612], [356.0, 2.8], [357.0, 1.9166666666666665], [358.0, 2.0], [365.0, 7.875], [362.0, 3.0], [360.0, 2.0], [367.0, 2.0], [366.0, 2.0], [382.0, 4.0], [368.0, 2.0], [369.0, 3.7674418604651163], [371.0, 2.0], [375.0, 3.0], [373.0, 2.5], [376.0, 5.0], [383.0, 2.0], [381.0, 2.0], [380.0, 2.0], [378.0, 2.0], [377.0, 2.0], [397.0, 2.0], [391.0, 2.0], [399.0, 2.0], [398.0, 2.0], [396.0, 1.6], [394.0, 13.0], [390.0, 2.545454545454545], [387.0, 2.0], [386.0, 2.5], [413.0, 2.6000000000000005], [401.0, 4.0], [400.0, 14.0], [403.0, 2.75], [405.0, 2.0], [404.0, 2.5], [406.0, 2.2857142857142856], [407.0, 1.5714285714285714], [409.0, 2.3684210526315788], [408.0, 1.6666666666666667], [411.0, 2.0], [415.0, 3.5], [414.0, 2.545454545454545], [412.0, 1.6363636363636362], [430.0, 6.508771929824561], [416.0, 3.1666666666666665], [431.0, 5.888888888888889], [429.0, 2.125], [428.0, 1.9], [427.0, 2.0], [426.0, 1.5], [423.0, 1.9473684210526314], [420.0, 1.75], [436.0, 2.076923076923077], [435.0, 1.8571428571428572], [434.0, 3.000000000000001], [433.0, 1.25], [432.0, 2.5], [462.0, 2.0], [463.0, 1.875], [461.0, 3.5625], [460.0, 2.0], [459.0, 2.0], [458.0, 3.0], [457.0, 2.3000000000000003], [456.0, 2.4], [455.0, 3.1683168316831685], [451.0, 3.9999999999999996], [450.0, 4.416666666666667], [453.0, 2.0], [471.0, 29.916666666666664], [468.0, 32.0], [469.0, 6.5625], [470.0, 6.9834710743801685], [472.0, 14.46153846153846], [474.0, 13.666666666666668], [467.0, 2.857142857142857], [466.0, 2.0], [465.0, 2.25], [464.0, 2.233333333333334]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[321.29359999999906, 1672.028400000003]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 474.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2856.75, "minX": 1.77914502E12, "maxY": 80258.91666666667, "series": [{"data": [[1.77914502E12, 80258.91666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77914502E12, 2856.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77914502E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1672.028400000003, "minX": 1.77914502E12, "maxY": 1672.028400000003, "series": [{"data": [[1.77914502E12, 1672.028400000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77914502E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1670.1243999999995, "minX": 1.77914502E12, "maxY": 1670.1243999999995, "series": [{"data": [[1.77914502E12, 1670.1243999999995]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77914502E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 6.410000000000002, "minX": 1.77914502E12, "maxY": 6.410000000000002, "series": [{"data": [[1.77914502E12, 6.410000000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77914502E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 387.0, "minX": 1.77914502E12, "maxY": 6584.0, "series": [{"data": [[1.77914502E12, 6584.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77914502E12, 4173.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77914502E12, 6043.34]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77914502E12, 4990.4]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77914502E12, 387.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77914502E12, 2825.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77914502E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 2.0, "minX": 3.0, "maxY": 4172.0, "series": [{"data": [[32.0, 4172.0], [129.0, 2987.0], [128.0, 2850.5], [132.0, 1287.0], [162.0, 2832.0], [161.0, 2895.0], [164.0, 2846.0], [191.0, 2759.0], [3.0, 2771.0], [65.0, 2154.0], [64.0, 3368.5], [4.0, 2898.0], [102.0, 1924.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[537.0, 2.0], [498.0, 2.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 537.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 3.0, "maxY": 4172.0, "series": [{"data": [[32.0, 4172.0], [129.0, 2987.0], [128.0, 2850.5], [132.0, 1287.0], [162.0, 2832.0], [161.0, 2895.0], [164.0, 2846.0], [191.0, 2759.0], [3.0, 2771.0], [65.0, 2154.0], [64.0, 3368.5], [4.0, 2897.5], [102.0, 1924.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[537.0, 0.0], [498.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 537.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 41.666666666666664, "minX": 1.77914502E12, "maxY": 41.666666666666664, "series": [{"data": [[1.77914502E12, 41.666666666666664]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77914502E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 17.25, "minX": 1.77914502E12, "maxY": 24.416666666666668, "series": [{"data": [[1.77914502E12, 24.416666666666668]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.77914502E12, 17.25]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77914502E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 17.25, "minX": 1.77914502E12, "maxY": 24.416666666666668, "series": [{"data": [[1.77914502E12, 17.25]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}, {"data": [[1.77914502E12, 24.416666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77914502E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 17.25, "minX": 1.77914502E12, "maxY": 24.416666666666668, "series": [{"data": [[1.77914502E12, 24.416666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.77914502E12, 17.25]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77914502E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

