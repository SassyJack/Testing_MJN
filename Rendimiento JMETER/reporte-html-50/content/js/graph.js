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
        data: {"result": {"minY": 92.0, "minX": 0.0, "maxY": 1063.0, "series": [{"data": [[0.0, 92.0], [0.1, 92.0], [0.2, 92.0], [0.3, 92.0], [0.4, 296.0], [0.5, 296.0], [0.6, 296.0], [0.7, 296.0], [0.8, 296.0], [0.9, 296.0], [1.0, 296.0], [1.1, 296.0], [1.2, 296.0], [1.3, 299.0], [1.4, 299.0], [1.5, 299.0], [1.6, 311.0], [1.7, 311.0], [1.8, 311.0], [1.9, 311.0], [2.0, 311.0], [2.1, 311.0], [2.2, 311.0], [2.3, 311.0], [2.4, 311.0], [2.5, 312.0], [2.6, 312.0], [2.7, 312.0], [2.8, 312.0], [2.9, 312.0], [3.0, 312.0], [3.1, 312.0], [3.2, 312.0], [3.3, 312.0], [3.4, 312.0], [3.5, 312.0], [3.6, 312.0], [3.7, 313.0], [3.8, 313.0], [3.9, 313.0], [4.0, 313.0], [4.1, 313.0], [4.2, 313.0], [4.3, 313.0], [4.4, 314.0], [4.5, 314.0], [4.6, 314.0], [4.7, 314.0], [4.8, 314.0], [4.9, 314.0], [5.0, 314.0], [5.1, 314.0], [5.2, 314.0], [5.3, 314.0], [5.4, 314.0], [5.5, 314.0], [5.6, 314.0], [5.7, 315.0], [5.8, 315.0], [5.9, 315.0], [6.0, 315.0], [6.1, 315.0], [6.2, 315.0], [6.3, 315.0], [6.4, 316.0], [6.5, 316.0], [6.6, 316.0], [6.7, 316.0], [6.8, 316.0], [6.9, 316.0], [7.0, 316.0], [7.1, 316.0], [7.2, 316.0], [7.3, 316.0], [7.4, 316.0], [7.5, 316.0], [7.6, 316.0], [7.7, 316.0], [7.8, 316.0], [7.9, 316.0], [8.0, 316.0], [8.1, 316.0], [8.2, 316.0], [8.3, 316.0], [8.4, 317.0], [8.5, 317.0], [8.6, 317.0], [8.7, 317.0], [8.8, 317.0], [8.9, 317.0], [9.0, 317.0], [9.1, 317.0], [9.2, 317.0], [9.3, 318.0], [9.4, 318.0], [9.5, 318.0], [9.6, 318.0], [9.7, 318.0], [9.8, 318.0], [9.9, 318.0], [10.0, 318.0], [10.1, 318.0], [10.2, 318.0], [10.3, 318.0], [10.4, 318.0], [10.5, 318.0], [10.6, 318.0], [10.7, 318.0], [10.8, 318.0], [10.9, 318.0], [11.0, 318.0], [11.1, 318.0], [11.2, 318.0], [11.3, 478.0], [11.4, 478.0], [11.5, 478.0], [11.6, 478.0], [11.7, 480.0], [11.8, 480.0], [11.9, 480.0], [12.0, 480.0], [12.1, 482.0], [12.2, 482.0], [12.3, 482.0], [12.4, 482.0], [12.5, 486.0], [12.6, 486.0], [12.7, 486.0], [12.8, 486.0], [12.9, 486.0], [13.0, 486.0], [13.1, 486.0], [13.2, 486.0], [13.3, 486.0], [13.4, 486.0], [13.5, 486.0], [13.6, 486.0], [13.7, 487.0], [13.8, 487.0], [13.9, 487.0], [14.0, 487.0], [14.1, 488.0], [14.2, 488.0], [14.3, 488.0], [14.4, 488.0], [14.5, 488.0], [14.6, 488.0], [14.7, 488.0], [14.8, 488.0], [14.9, 488.0], [15.0, 488.0], [15.1, 488.0], [15.2, 488.0], [15.3, 489.0], [15.4, 489.0], [15.5, 489.0], [15.6, 489.0], [15.7, 489.0], [15.8, 489.0], [15.9, 489.0], [16.0, 489.0], [16.1, 489.0], [16.2, 489.0], [16.3, 489.0], [16.4, 489.0], [16.5, 489.0], [16.6, 489.0], [16.7, 489.0], [16.8, 490.0], [16.9, 490.0], [17.0, 490.0], [17.1, 490.0], [17.2, 490.0], [17.3, 490.0], [17.4, 490.0], [17.5, 490.0], [17.6, 490.0], [17.7, 490.0], [17.8, 490.0], [17.9, 490.0], [18.0, 490.0], [18.1, 490.0], [18.2, 490.0], [18.3, 490.0], [18.4, 490.0], [18.5, 490.0], [18.6, 490.0], [18.7, 490.0], [18.8, 490.0], [18.9, 490.0], [19.0, 490.0], [19.1, 490.0], [19.2, 491.0], [19.3, 491.0], [19.4, 491.0], [19.5, 491.0], [19.6, 491.0], [19.7, 491.0], [19.8, 491.0], [19.9, 491.0], [20.0, 491.0], [20.1, 491.0], [20.2, 491.0], [20.3, 491.0], [20.4, 491.0], [20.5, 491.0], [20.6, 491.0], [20.7, 491.0], [20.8, 491.0], [20.9, 491.0], [21.0, 491.0], [21.1, 491.0], [21.2, 491.0], [21.3, 491.0], [21.4, 491.0], [21.5, 491.0], [21.6, 491.0], [21.7, 491.0], [21.8, 491.0], [21.9, 491.0], [22.0, 492.0], [22.1, 492.0], [22.2, 492.0], [22.3, 492.0], [22.4, 492.0], [22.5, 492.0], [22.6, 492.0], [22.7, 492.0], [22.8, 492.0], [22.9, 492.0], [23.0, 492.0], [23.1, 492.0], [23.2, 492.0], [23.3, 492.0], [23.4, 492.0], [23.5, 492.0], [23.6, 492.0], [23.7, 492.0], [23.8, 492.0], [23.9, 492.0], [24.0, 493.0], [24.1, 493.0], [24.2, 493.0], [24.3, 493.0], [24.4, 493.0], [24.5, 493.0], [24.6, 493.0], [24.7, 493.0], [24.8, 493.0], [24.9, 493.0], [25.0, 493.0], [25.1, 493.0], [25.2, 493.0], [25.3, 493.0], [25.4, 493.0], [25.5, 493.0], [25.6, 493.0], [25.7, 493.0], [25.8, 493.0], [25.9, 493.0], [26.0, 493.0], [26.1, 493.0], [26.2, 493.0], [26.3, 493.0], [26.4, 493.0], [26.5, 493.0], [26.6, 493.0], [26.7, 493.0], [26.8, 493.0], [26.9, 493.0], [27.0, 493.0], [27.1, 493.0], [27.2, 493.0], [27.3, 493.0], [27.4, 493.0], [27.5, 493.0], [27.6, 493.0], [27.7, 493.0], [27.8, 493.0], [27.9, 493.0], [28.0, 494.0], [28.1, 494.0], [28.2, 494.0], [28.3, 494.0], [28.4, 494.0], [28.5, 494.0], [28.6, 494.0], [28.7, 494.0], [28.8, 494.0], [28.9, 494.0], [29.0, 494.0], [29.1, 494.0], [29.2, 495.0], [29.3, 495.0], [29.4, 495.0], [29.5, 495.0], [29.6, 496.0], [29.7, 496.0], [29.8, 496.0], [29.9, 496.0], [30.0, 496.0], [30.1, 496.0], [30.2, 496.0], [30.3, 496.0], [30.4, 497.0], [30.5, 497.0], [30.6, 497.0], [30.7, 497.0], [30.8, 497.0], [30.9, 497.0], [31.0, 497.0], [31.1, 497.0], [31.2, 497.0], [31.3, 497.0], [31.4, 497.0], [31.5, 497.0], [31.6, 497.0], [31.7, 497.0], [31.8, 497.0], [31.9, 497.0], [32.0, 497.0], [32.1, 497.0], [32.2, 497.0], [32.3, 497.0], [32.4, 498.0], [32.5, 498.0], [32.6, 498.0], [32.7, 498.0], [32.8, 498.0], [32.9, 498.0], [33.0, 498.0], [33.1, 498.0], [33.2, 498.0], [33.3, 498.0], [33.4, 498.0], [33.5, 498.0], [33.6, 498.0], [33.7, 498.0], [33.8, 498.0], [33.9, 498.0], [34.0, 498.0], [34.1, 498.0], [34.2, 498.0], [34.3, 498.0], [34.4, 498.0], [34.5, 498.0], [34.6, 498.0], [34.7, 498.0], [34.8, 498.0], [34.9, 498.0], [35.0, 498.0], [35.1, 498.0], [35.2, 499.0], [35.3, 499.0], [35.4, 499.0], [35.5, 499.0], [35.6, 499.0], [35.7, 499.0], [35.8, 499.0], [35.9, 499.0], [36.0, 500.0], [36.1, 500.0], [36.2, 500.0], [36.3, 500.0], [36.4, 500.0], [36.5, 500.0], [36.6, 500.0], [36.7, 500.0], [36.8, 500.0], [36.9, 500.0], [37.0, 500.0], [37.1, 500.0], [37.2, 503.0], [37.3, 503.0], [37.4, 503.0], [37.5, 503.0], [37.6, 505.0], [37.7, 505.0], [37.8, 505.0], [37.9, 505.0], [38.0, 505.0], [38.1, 505.0], [38.2, 505.0], [38.3, 505.0], [38.4, 506.0], [38.5, 506.0], [38.6, 506.0], [38.7, 506.0], [38.8, 506.0], [38.9, 506.0], [39.0, 506.0], [39.1, 506.0], [39.2, 506.0], [39.3, 506.0], [39.4, 506.0], [39.5, 506.0], [39.6, 506.0], [39.7, 506.0], [39.8, 506.0], [39.9, 506.0], [40.0, 507.0], [40.1, 507.0], [40.2, 507.0], [40.3, 507.0], [40.4, 507.0], [40.5, 507.0], [40.6, 507.0], [40.7, 507.0], [40.8, 507.0], [40.9, 507.0], [41.0, 507.0], [41.1, 507.0], [41.2, 508.0], [41.3, 508.0], [41.4, 508.0], [41.5, 508.0], [41.6, 509.0], [41.7, 509.0], [41.8, 509.0], [41.9, 509.0], [42.0, 509.0], [42.1, 509.0], [42.2, 509.0], [42.3, 509.0], [42.4, 510.0], [42.5, 510.0], [42.6, 510.0], [42.7, 510.0], [42.8, 510.0], [42.9, 510.0], [43.0, 510.0], [43.1, 510.0], [43.2, 511.0], [43.3, 511.0], [43.4, 511.0], [43.5, 511.0], [43.6, 512.0], [43.7, 512.0], [43.8, 512.0], [43.9, 512.0], [44.0, 512.0], [44.1, 512.0], [44.2, 512.0], [44.3, 512.0], [44.4, 513.0], [44.5, 513.0], [44.6, 513.0], [44.7, 513.0], [44.8, 515.0], [44.9, 515.0], [45.0, 515.0], [45.1, 515.0], [45.2, 517.0], [45.3, 517.0], [45.4, 517.0], [45.5, 517.0], [45.6, 530.0], [45.7, 530.0], [45.8, 530.0], [45.9, 530.0], [46.0, 531.0], [46.1, 531.0], [46.2, 531.0], [46.3, 531.0], [46.4, 531.0], [46.5, 531.0], [46.6, 531.0], [46.7, 531.0], [46.8, 532.0], [46.9, 532.0], [47.0, 532.0], [47.1, 532.0], [47.2, 532.0], [47.3, 532.0], [47.4, 532.0], [47.5, 532.0], [47.6, 532.0], [47.7, 532.0], [47.8, 532.0], [47.9, 532.0], [48.0, 533.0], [48.1, 533.0], [48.2, 533.0], [48.3, 533.0], [48.4, 533.0], [48.5, 533.0], [48.6, 533.0], [48.7, 533.0], [48.8, 535.0], [48.9, 535.0], [49.0, 535.0], [49.1, 535.0], [49.2, 536.0], [49.3, 536.0], [49.4, 536.0], [49.5, 536.0], [49.6, 536.0], [49.7, 536.0], [49.8, 536.0], [49.9, 536.0], [50.0, 536.0], [50.1, 536.0], [50.2, 536.0], [50.3, 536.0], [50.4, 537.0], [50.5, 537.0], [50.6, 537.0], [50.7, 537.0], [50.8, 537.0], [50.9, 537.0], [51.0, 537.0], [51.1, 537.0], [51.2, 537.0], [51.3, 537.0], [51.4, 537.0], [51.5, 537.0], [51.6, 537.0], [51.7, 537.0], [51.8, 537.0], [51.9, 537.0], [52.0, 538.0], [52.1, 538.0], [52.2, 538.0], [52.3, 538.0], [52.4, 538.0], [52.5, 538.0], [52.6, 538.0], [52.7, 538.0], [52.8, 538.0], [52.9, 538.0], [53.0, 538.0], [53.1, 538.0], [53.2, 538.0], [53.3, 538.0], [53.4, 538.0], [53.5, 538.0], [53.6, 538.0], [53.7, 538.0], [53.8, 538.0], [53.9, 538.0], [54.0, 539.0], [54.1, 539.0], [54.2, 539.0], [54.3, 539.0], [54.4, 539.0], [54.5, 539.0], [54.6, 539.0], [54.7, 539.0], [54.8, 540.0], [54.9, 540.0], [55.0, 540.0], [55.1, 540.0], [55.2, 540.0], [55.3, 540.0], [55.4, 540.0], [55.5, 540.0], [55.6, 541.0], [55.7, 541.0], [55.8, 541.0], [55.9, 541.0], [56.0, 541.0], [56.1, 541.0], [56.2, 541.0], [56.3, 541.0], [56.4, 541.0], [56.5, 541.0], [56.6, 541.0], [56.7, 541.0], [56.8, 541.0], [56.9, 541.0], [57.0, 541.0], [57.1, 541.0], [57.2, 542.0], [57.3, 542.0], [57.4, 542.0], [57.5, 542.0], [57.6, 542.0], [57.7, 542.0], [57.8, 542.0], [57.9, 542.0], [58.0, 542.0], [58.1, 542.0], [58.2, 542.0], [58.3, 542.0], [58.4, 542.0], [58.5, 542.0], [58.6, 542.0], [58.7, 542.0], [58.8, 543.0], [58.9, 543.0], [59.0, 543.0], [59.1, 543.0], [59.2, 543.0], [59.3, 543.0], [59.4, 543.0], [59.5, 543.0], [59.6, 543.0], [59.7, 543.0], [59.8, 543.0], [59.9, 543.0], [60.0, 543.0], [60.1, 543.0], [60.2, 543.0], [60.3, 543.0], [60.4, 544.0], [60.5, 544.0], [60.6, 544.0], [60.7, 544.0], [60.8, 544.0], [60.9, 544.0], [61.0, 544.0], [61.1, 544.0], [61.2, 544.0], [61.3, 544.0], [61.4, 544.0], [61.5, 544.0], [61.6, 544.0], [61.7, 544.0], [61.8, 544.0], [61.9, 544.0], [62.0, 544.0], [62.1, 544.0], [62.2, 544.0], [62.3, 544.0], [62.4, 545.0], [62.5, 545.0], [62.6, 545.0], [62.7, 545.0], [62.8, 546.0], [62.9, 546.0], [63.0, 546.0], [63.1, 546.0], [63.2, 547.0], [63.3, 547.0], [63.4, 547.0], [63.5, 547.0], [63.6, 548.0], [63.7, 548.0], [63.8, 548.0], [63.9, 548.0], [64.0, 548.0], [64.1, 548.0], [64.2, 548.0], [64.3, 548.0], [64.4, 550.0], [64.5, 550.0], [64.6, 550.0], [64.7, 550.0], [64.8, 554.0], [64.9, 554.0], [65.0, 554.0], [65.1, 554.0], [65.2, 559.0], [65.3, 559.0], [65.4, 559.0], [65.5, 559.0], [65.6, 559.0], [65.7, 559.0], [65.8, 559.0], [65.9, 559.0], [66.0, 560.0], [66.1, 560.0], [66.2, 560.0], [66.3, 560.0], [66.4, 560.0], [66.5, 560.0], [66.6, 560.0], [66.7, 560.0], [66.8, 560.0], [66.9, 560.0], [67.0, 560.0], [67.1, 560.0], [67.2, 560.0], [67.3, 560.0], [67.4, 560.0], [67.5, 560.0], [67.6, 560.0], [67.7, 560.0], [67.8, 560.0], [67.9, 560.0], [68.0, 560.0], [68.1, 560.0], [68.2, 560.0], [68.3, 560.0], [68.4, 561.0], [68.5, 561.0], [68.6, 561.0], [68.7, 561.0], [68.8, 561.0], [68.9, 561.0], [69.0, 561.0], [69.1, 561.0], [69.2, 561.0], [69.3, 561.0], [69.4, 561.0], [69.5, 561.0], [69.6, 561.0], [69.7, 561.0], [69.8, 561.0], [69.9, 561.0], [70.0, 562.0], [70.1, 562.0], [70.2, 562.0], [70.3, 562.0], [70.4, 585.0], [70.5, 585.0], [70.6, 585.0], [70.7, 585.0], [70.8, 587.0], [70.9, 587.0], [71.0, 587.0], [71.1, 587.0], [71.2, 595.0], [71.3, 595.0], [71.4, 595.0], [71.5, 595.0], [71.6, 595.0], [71.7, 607.0], [71.8, 607.0], [71.9, 607.0], [72.0, 607.0], [72.1, 607.0], [72.2, 607.0], [72.3, 607.0], [72.4, 607.0], [72.5, 607.0], [72.6, 607.0], [72.7, 607.0], [72.8, 607.0], [72.9, 607.0], [73.0, 607.0], [73.1, 607.0], [73.2, 608.0], [73.3, 608.0], [73.4, 608.0], [73.5, 608.0], [73.6, 608.0], [73.7, 608.0], [73.8, 608.0], [73.9, 608.0], [74.0, 608.0], [74.1, 608.0], [74.2, 608.0], [74.3, 608.0], [74.4, 608.0], [74.5, 608.0], [74.6, 608.0], [74.7, 608.0], [74.8, 608.0], [74.9, 608.0], [75.0, 608.0], [75.1, 608.0], [75.2, 608.0], [75.3, 608.0], [75.4, 608.0], [75.5, 608.0], [75.6, 608.0], [75.7, 608.0], [75.8, 608.0], [75.9, 608.0], [76.0, 608.0], [76.1, 608.0], [76.2, 608.0], [76.3, 608.0], [76.4, 609.0], [76.5, 609.0], [76.6, 609.0], [76.7, 609.0], [76.8, 609.0], [76.9, 609.0], [77.0, 609.0], [77.1, 609.0], [77.2, 609.0], [77.3, 609.0], [77.4, 609.0], [77.5, 609.0], [77.6, 609.0], [77.7, 609.0], [77.8, 609.0], [77.9, 609.0], [78.0, 609.0], [78.1, 609.0], [78.2, 609.0], [78.3, 609.0], [78.4, 609.0], [78.5, 609.0], [78.6, 609.0], [78.7, 609.0], [78.8, 609.0], [78.9, 609.0], [79.0, 609.0], [79.1, 609.0], [79.2, 609.0], [79.3, 609.0], [79.4, 609.0], [79.5, 609.0], [79.6, 609.0], [79.7, 610.0], [79.8, 610.0], [79.9, 610.0], [80.0, 610.0], [80.1, 610.0], [80.2, 610.0], [80.3, 610.0], [80.4, 615.0], [80.5, 615.0], [80.6, 615.0], [80.7, 615.0], [80.8, 615.0], [80.9, 632.0], [81.0, 632.0], [81.1, 632.0], [81.2, 632.0], [81.3, 647.0], [81.4, 647.0], [81.5, 647.0], [81.6, 647.0], [81.7, 655.0], [81.8, 655.0], [81.9, 655.0], [82.0, 655.0], [82.1, 658.0], [82.2, 658.0], [82.3, 658.0], [82.4, 658.0], [82.5, 661.0], [82.6, 661.0], [82.7, 661.0], [82.8, 661.0], [82.9, 692.0], [83.0, 692.0], [83.1, 692.0], [83.2, 692.0], [83.3, 714.0], [83.4, 714.0], [83.5, 714.0], [83.6, 714.0], [83.7, 733.0], [83.8, 733.0], [83.9, 733.0], [84.0, 733.0], [84.1, 752.0], [84.2, 752.0], [84.3, 752.0], [84.4, 752.0], [84.5, 768.0], [84.6, 768.0], [84.7, 768.0], [84.8, 768.0], [84.9, 792.0], [85.0, 792.0], [85.1, 792.0], [85.2, 792.0], [85.3, 799.0], [85.4, 799.0], [85.5, 799.0], [85.6, 799.0], [85.7, 806.0], [85.8, 806.0], [85.9, 806.0], [86.0, 806.0], [86.1, 817.0], [86.2, 817.0], [86.3, 817.0], [86.4, 817.0], [86.5, 824.0], [86.6, 824.0], [86.7, 824.0], [86.8, 824.0], [86.9, 838.0], [87.0, 838.0], [87.1, 838.0], [87.2, 838.0], [87.3, 844.0], [87.4, 844.0], [87.5, 844.0], [87.6, 844.0], [87.7, 849.0], [87.8, 849.0], [87.9, 849.0], [88.0, 849.0], [88.1, 855.0], [88.2, 855.0], [88.3, 855.0], [88.4, 855.0], [88.5, 863.0], [88.6, 863.0], [88.7, 863.0], [88.8, 863.0], [88.9, 874.0], [89.0, 874.0], [89.1, 874.0], [89.2, 874.0], [89.3, 896.0], [89.4, 896.0], [89.5, 896.0], [89.6, 896.0], [89.7, 903.0], [89.8, 903.0], [89.9, 903.0], [90.0, 903.0], [90.1, 904.0], [90.2, 904.0], [90.3, 904.0], [90.4, 904.0], [90.5, 904.0], [90.6, 904.0], [90.7, 904.0], [90.8, 904.0], [90.9, 904.0], [91.0, 904.0], [91.1, 904.0], [91.2, 904.0], [91.3, 905.0], [91.4, 905.0], [91.5, 905.0], [91.6, 905.0], [91.7, 905.0], [91.8, 905.0], [91.9, 905.0], [92.0, 905.0], [92.1, 905.0], [92.2, 905.0], [92.3, 905.0], [92.4, 905.0], [92.5, 905.0], [92.6, 905.0], [92.7, 905.0], [92.8, 905.0], [92.9, 905.0], [93.0, 905.0], [93.1, 905.0], [93.2, 905.0], [93.3, 906.0], [93.4, 906.0], [93.5, 906.0], [93.6, 906.0], [93.7, 906.0], [93.8, 906.0], [93.9, 906.0], [94.0, 906.0], [94.1, 907.0], [94.2, 907.0], [94.3, 907.0], [94.4, 907.0], [94.5, 907.0], [94.6, 907.0], [94.7, 907.0], [94.8, 907.0], [94.9, 907.0], [95.0, 907.0], [95.1, 907.0], [95.2, 907.0], [95.3, 912.0], [95.4, 912.0], [95.5, 912.0], [95.6, 912.0], [95.7, 914.0], [95.8, 914.0], [95.9, 914.0], [96.0, 914.0], [96.1, 914.0], [96.2, 914.0], [96.3, 914.0], [96.4, 914.0], [96.5, 918.0], [96.6, 918.0], [96.7, 918.0], [96.8, 918.0], [96.9, 929.0], [97.0, 929.0], [97.1, 929.0], [97.2, 929.0], [97.3, 951.0], [97.4, 951.0], [97.5, 951.0], [97.6, 951.0], [97.7, 968.0], [97.8, 968.0], [97.9, 968.0], [98.0, 968.0], [98.1, 979.0], [98.2, 979.0], [98.3, 979.0], [98.4, 979.0], [98.5, 1008.0], [98.6, 1008.0], [98.7, 1008.0], [98.8, 1008.0], [98.9, 1026.0], [99.0, 1026.0], [99.1, 1026.0], [99.2, 1026.0], [99.3, 1043.0], [99.4, 1043.0], [99.5, 1043.0], [99.6, 1043.0], [99.7, 1063.0], [99.8, 1063.0], [99.9, 1063.0], [100.0, 1063.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 89.0, "series": [{"data": [[0.0, 1.0], [600.0, 29.0], [300.0, 24.0], [700.0, 6.0], [800.0, 10.0], [400.0, 62.0], [200.0, 3.0], [900.0, 22.0], [1000.0, 4.0], [500.0, 89.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 93.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 157.0, "series": [{"data": [[0.0, 93.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 157.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 45.248000000000005, "minX": 1.77914472E12, "maxY": 45.248000000000005, "series": [{"data": [[1.77914472E12, 45.248000000000005]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77914472E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 195.5, "minX": 2.0, "maxY": 611.8415841584158, "series": [{"data": [[33.0, 496.0], [32.0, 495.75], [2.0, 195.5], [34.0, 498.0], [37.0, 498.0], [36.0, 497.0], [39.0, 495.5], [43.0, 494.0], [45.0, 486.0], [46.0, 488.0], [48.0, 487.5], [50.0, 611.8415841584158], [4.0, 296.0], [6.0, 316.0], [7.0, 318.0], [8.0, 317.0], [10.0, 318.0], [11.0, 317.0], [13.0, 318.0], [14.0, 316.0], [15.0, 316.0], [17.0, 315.0], [18.0, 314.0], [19.0, 315.5], [21.0, 313.0], [22.0, 314.0], [24.0, 312.5], [26.0, 312.0], [28.0, 311.3333333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[45.248000000000005, 568.0359999999995]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 487.5, "minX": 1.77914472E12, "maxY": 5954.166666666667, "series": [{"data": [[1.77914472E12, 5954.166666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77914472E12, 487.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77914472E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 568.0359999999995, "minX": 1.77914472E12, "maxY": 568.0359999999995, "series": [{"data": [[1.77914472E12, 568.0359999999995]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77914472E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 567.6359999999997, "minX": 1.77914472E12, "maxY": 567.6359999999997, "series": [{"data": [[1.77914472E12, 567.6359999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77914472E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 4.620000000000003, "minX": 1.77914472E12, "maxY": 4.620000000000003, "series": [{"data": [[1.77914472E12, 4.620000000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77914472E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 92.0, "minX": 1.77914472E12, "maxY": 1063.0, "series": [{"data": [[1.77914472E12, 1063.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77914472E12, 903.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77914472E12, 1034.3300000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77914472E12, 909.25]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77914472E12, 92.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77914472E12, 536.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77914472E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 318.0, "minX": 51.0, "maxY": 609.5, "series": [{"data": [[99.0, 537.0], [100.0, 609.5], [51.0, 318.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 318.0, "minX": 51.0, "maxY": 609.5, "series": [{"data": [[99.0, 537.0], [100.0, 609.5], [51.0, 318.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.166666666666667, "minX": 1.77914472E12, "maxY": 4.166666666666667, "series": [{"data": [[1.77914472E12, 4.166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77914472E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.166666666666667, "minX": 1.77914472E12, "maxY": 4.166666666666667, "series": [{"data": [[1.77914472E12, 4.166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77914472E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.166666666666667, "minX": 1.77914472E12, "maxY": 4.166666666666667, "series": [{"data": [[1.77914472E12, 4.166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77914472E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.166666666666667, "minX": 1.77914472E12, "maxY": 4.166666666666667, "series": [{"data": [[1.77914472E12, 4.166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77914472E12, "title": "Total Transactions Per Second"}},
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

