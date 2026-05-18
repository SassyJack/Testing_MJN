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
        data: {"result": {"minY": 264.0, "minX": 0.0, "maxY": 1253.0, "series": [{"data": [[0.0, 264.0], [0.1, 264.0], [0.2, 265.0], [0.3, 265.0], [0.4, 527.0], [0.5, 527.0], [0.6, 527.0], [0.7, 528.0], [0.8, 528.0], [0.9, 528.0], [1.0, 529.0], [1.1, 529.0], [1.2, 529.0], [1.3, 529.0], [1.4, 529.0], [1.5, 529.0], [1.6, 529.0], [1.7, 529.0], [1.8, 529.0], [1.9, 529.0], [2.0, 530.0], [2.1, 530.0], [2.2, 530.0], [2.3, 530.0], [2.4, 530.0], [2.5, 530.0], [2.6, 530.0], [2.7, 530.0], [2.8, 530.0], [2.9, 530.0], [3.0, 530.0], [3.1, 530.0], [3.2, 530.0], [3.3, 530.0], [3.4, 530.0], [3.5, 530.0], [3.6, 530.0], [3.7, 530.0], [3.8, 531.0], [3.9, 531.0], [4.0, 531.0], [4.1, 531.0], [4.2, 531.0], [4.3, 531.0], [4.4, 531.0], [4.5, 531.0], [4.6, 531.0], [4.7, 531.0], [4.8, 532.0], [4.9, 532.0], [5.0, 532.0], [5.1, 532.0], [5.2, 710.0], [5.3, 710.0], [5.4, 710.0], [5.5, 710.0], [5.6, 710.0], [5.7, 711.0], [5.8, 711.0], [5.9, 711.0], [6.0, 711.0], [6.1, 711.0], [6.2, 711.0], [6.3, 711.0], [6.4, 711.0], [6.5, 711.0], [6.6, 711.0], [6.7, 711.0], [6.8, 711.0], [6.9, 711.0], [7.0, 712.0], [7.1, 712.0], [7.2, 712.0], [7.3, 712.0], [7.4, 712.0], [7.5, 712.0], [7.6, 712.0], [7.7, 712.0], [7.8, 712.0], [7.9, 712.0], [8.0, 712.0], [8.1, 712.0], [8.2, 712.0], [8.3, 712.0], [8.4, 713.0], [8.5, 713.0], [8.6, 713.0], [8.7, 713.0], [8.8, 713.0], [8.9, 713.0], [9.0, 713.0], [9.1, 713.0], [9.2, 713.0], [9.3, 714.0], [9.4, 714.0], [9.5, 714.0], [9.6, 714.0], [9.7, 714.0], [9.8, 714.0], [9.9, 714.0], [10.0, 714.0], [10.1, 715.0], [10.2, 715.0], [10.3, 742.0], [10.4, 742.0], [10.5, 742.0], [10.6, 742.0], [10.7, 742.0], [10.8, 743.0], [10.9, 743.0], [11.0, 743.0], [11.1, 743.0], [11.2, 743.0], [11.3, 743.0], [11.4, 743.0], [11.5, 743.0], [11.6, 743.0], [11.7, 743.0], [11.8, 743.0], [11.9, 743.0], [12.0, 744.0], [12.1, 744.0], [12.2, 744.0], [12.3, 744.0], [12.4, 744.0], [12.5, 744.0], [12.6, 744.0], [12.7, 744.0], [12.8, 744.0], [12.9, 744.0], [13.0, 744.0], [13.1, 744.0], [13.2, 744.0], [13.3, 744.0], [13.4, 744.0], [13.5, 744.0], [13.6, 744.0], [13.7, 744.0], [13.8, 744.0], [13.9, 744.0], [14.0, 745.0], [14.1, 745.0], [14.2, 746.0], [14.3, 746.0], [14.4, 747.0], [14.5, 747.0], [14.6, 794.0], [14.7, 794.0], [14.8, 804.0], [14.9, 804.0], [15.0, 807.0], [15.1, 807.0], [15.2, 810.0], [15.3, 810.0], [15.4, 815.0], [15.5, 815.0], [15.6, 817.0], [15.7, 817.0], [15.8, 821.0], [15.9, 821.0], [16.0, 824.0], [16.1, 824.0], [16.2, 824.0], [16.3, 824.0], [16.4, 828.0], [16.5, 828.0], [16.6, 833.0], [16.7, 833.0], [16.8, 833.0], [16.9, 833.0], [17.0, 841.0], [17.1, 841.0], [17.2, 841.0], [17.3, 841.0], [17.4, 842.0], [17.5, 842.0], [17.6, 842.0], [17.7, 842.0], [17.8, 842.0], [17.9, 842.0], [18.0, 842.0], [18.1, 842.0], [18.2, 842.0], [18.3, 842.0], [18.4, 842.0], [18.5, 842.0], [18.6, 842.0], [18.7, 842.0], [18.8, 842.0], [18.9, 842.0], [19.0, 842.0], [19.1, 842.0], [19.2, 842.0], [19.3, 842.0], [19.4, 842.0], [19.5, 842.0], [19.6, 842.0], [19.7, 842.0], [19.8, 843.0], [19.9, 843.0], [20.0, 843.0], [20.1, 843.0], [20.2, 843.0], [20.3, 843.0], [20.4, 843.0], [20.5, 843.0], [20.6, 843.0], [20.7, 843.0], [20.8, 843.0], [20.9, 843.0], [21.0, 843.0], [21.1, 843.0], [21.2, 843.0], [21.3, 843.0], [21.4, 843.0], [21.5, 843.0], [21.6, 855.0], [21.7, 855.0], [21.8, 855.0], [21.9, 855.0], [22.0, 862.0], [22.1, 862.0], [22.2, 863.0], [22.3, 863.0], [22.4, 872.0], [22.5, 872.0], [22.6, 873.0], [22.7, 873.0], [22.8, 880.0], [22.9, 880.0], [23.0, 883.0], [23.1, 883.0], [23.2, 892.0], [23.3, 892.0], [23.4, 892.0], [23.5, 892.0], [23.6, 901.0], [23.7, 901.0], [23.8, 902.0], [23.9, 902.0], [24.0, 911.0], [24.1, 911.0], [24.2, 911.0], [24.3, 911.0], [24.4, 922.0], [24.5, 922.0], [24.6, 923.0], [24.7, 923.0], [24.8, 931.0], [24.9, 931.0], [25.0, 931.0], [25.1, 931.0], [25.2, 931.0], [25.3, 931.0], [25.4, 931.0], [25.5, 931.0], [25.6, 932.0], [25.7, 932.0], [25.8, 932.0], [25.9, 932.0], [26.0, 932.0], [26.1, 932.0], [26.2, 932.0], [26.3, 932.0], [26.4, 932.0], [26.5, 932.0], [26.6, 932.0], [26.7, 932.0], [26.8, 932.0], [26.9, 932.0], [27.0, 932.0], [27.1, 932.0], [27.2, 932.0], [27.3, 932.0], [27.4, 932.0], [27.5, 932.0], [27.6, 932.0], [27.7, 932.0], [27.8, 932.0], [27.9, 932.0], [28.0, 932.0], [28.1, 932.0], [28.2, 932.0], [28.3, 932.0], [28.4, 932.0], [28.5, 932.0], [28.6, 933.0], [28.7, 933.0], [28.8, 933.0], [28.9, 933.0], [29.0, 933.0], [29.1, 933.0], [29.2, 933.0], [29.3, 933.0], [29.4, 934.0], [29.5, 934.0], [29.6, 941.0], [29.7, 941.0], [29.8, 942.0], [29.9, 942.0], [30.0, 946.0], [30.1, 946.0], [30.2, 947.0], [30.3, 947.0], [30.4, 947.0], [30.5, 947.0], [30.6, 947.0], [30.7, 947.0], [30.8, 948.0], [30.9, 948.0], [31.0, 948.0], [31.1, 948.0], [31.2, 948.0], [31.3, 948.0], [31.4, 948.0], [31.5, 948.0], [31.6, 948.0], [31.7, 948.0], [31.8, 948.0], [31.9, 948.0], [32.0, 948.0], [32.1, 948.0], [32.2, 948.0], [32.3, 948.0], [32.4, 948.0], [32.5, 948.0], [32.6, 948.0], [32.7, 948.0], [32.8, 948.0], [32.9, 948.0], [33.0, 948.0], [33.1, 948.0], [33.2, 949.0], [33.3, 949.0], [33.4, 949.0], [33.5, 949.0], [33.6, 949.0], [33.7, 949.0], [33.8, 949.0], [33.9, 949.0], [34.0, 949.0], [34.1, 949.0], [34.2, 949.0], [34.3, 949.0], [34.4, 949.0], [34.5, 949.0], [34.6, 949.0], [34.7, 949.0], [34.8, 949.0], [34.9, 949.0], [35.0, 949.0], [35.1, 949.0], [35.2, 949.0], [35.3, 949.0], [35.4, 949.0], [35.5, 949.0], [35.6, 949.0], [35.7, 949.0], [35.8, 949.0], [35.9, 949.0], [36.0, 950.0], [36.1, 950.0], [36.2, 950.0], [36.3, 950.0], [36.4, 950.0], [36.5, 950.0], [36.6, 950.0], [36.7, 950.0], [36.8, 951.0], [36.9, 951.0], [37.0, 951.0], [37.1, 951.0], [37.2, 951.0], [37.3, 951.0], [37.4, 951.0], [37.5, 951.0], [37.6, 951.0], [37.7, 951.0], [37.8, 951.0], [37.9, 951.0], [38.0, 951.0], [38.1, 951.0], [38.2, 951.0], [38.3, 951.0], [38.4, 951.0], [38.5, 951.0], [38.6, 951.0], [38.7, 951.0], [38.8, 952.0], [38.9, 952.0], [39.0, 952.0], [39.1, 952.0], [39.2, 952.0], [39.3, 952.0], [39.4, 952.0], [39.5, 952.0], [39.6, 952.0], [39.7, 952.0], [39.8, 952.0], [39.9, 952.0], [40.0, 952.0], [40.1, 952.0], [40.2, 952.0], [40.3, 952.0], [40.4, 952.0], [40.5, 952.0], [40.6, 952.0], [40.7, 952.0], [40.8, 952.0], [40.9, 952.0], [41.0, 952.0], [41.1, 952.0], [41.2, 952.0], [41.3, 952.0], [41.4, 952.0], [41.5, 952.0], [41.6, 952.0], [41.7, 952.0], [41.8, 952.0], [41.9, 952.0], [42.0, 952.0], [42.1, 952.0], [42.2, 952.0], [42.3, 952.0], [42.4, 952.0], [42.5, 952.0], [42.6, 952.0], [42.7, 952.0], [42.8, 952.0], [42.9, 952.0], [43.0, 953.0], [43.1, 953.0], [43.2, 953.0], [43.3, 953.0], [43.4, 953.0], [43.5, 953.0], [43.6, 953.0], [43.7, 953.0], [43.8, 953.0], [43.9, 953.0], [44.0, 953.0], [44.1, 953.0], [44.2, 953.0], [44.3, 953.0], [44.4, 953.0], [44.5, 953.0], [44.6, 953.0], [44.7, 953.0], [44.8, 953.0], [44.9, 953.0], [45.0, 953.0], [45.1, 953.0], [45.2, 953.0], [45.3, 953.0], [45.4, 953.0], [45.5, 953.0], [45.6, 957.0], [45.7, 957.0], [45.8, 957.0], [45.9, 957.0], [46.0, 957.0], [46.1, 957.0], [46.2, 957.0], [46.3, 957.0], [46.4, 957.0], [46.5, 957.0], [46.6, 957.0], [46.7, 957.0], [46.8, 958.0], [46.9, 958.0], [47.0, 958.0], [47.1, 958.0], [47.2, 958.0], [47.3, 958.0], [47.4, 958.0], [47.5, 958.0], [47.6, 958.0], [47.7, 958.0], [47.8, 958.0], [47.9, 958.0], [48.0, 958.0], [48.1, 958.0], [48.2, 958.0], [48.3, 958.0], [48.4, 958.0], [48.5, 958.0], [48.6, 958.0], [48.7, 958.0], [48.8, 958.0], [48.9, 958.0], [49.0, 958.0], [49.1, 958.0], [49.2, 958.0], [49.3, 958.0], [49.4, 958.0], [49.5, 958.0], [49.6, 958.0], [49.7, 958.0], [49.8, 958.0], [49.9, 958.0], [50.0, 958.0], [50.1, 958.0], [50.2, 958.0], [50.3, 958.0], [50.4, 958.0], [50.5, 958.0], [50.6, 958.0], [50.7, 958.0], [50.8, 959.0], [50.9, 959.0], [51.0, 959.0], [51.1, 959.0], [51.2, 959.0], [51.3, 959.0], [51.4, 959.0], [51.5, 959.0], [51.6, 959.0], [51.7, 959.0], [51.8, 959.0], [51.9, 959.0], [52.0, 960.0], [52.1, 960.0], [52.2, 960.0], [52.3, 960.0], [52.4, 960.0], [52.5, 960.0], [52.6, 960.0], [52.7, 960.0], [52.8, 960.0], [52.9, 960.0], [53.0, 960.0], [53.1, 960.0], [53.2, 960.0], [53.3, 960.0], [53.4, 960.0], [53.5, 960.0], [53.6, 960.0], [53.7, 960.0], [53.8, 961.0], [53.9, 961.0], [54.0, 961.0], [54.1, 961.0], [54.2, 961.0], [54.3, 961.0], [54.4, 962.0], [54.5, 962.0], [54.6, 962.0], [54.7, 962.0], [54.8, 962.0], [54.9, 962.0], [55.0, 962.0], [55.1, 962.0], [55.2, 962.0], [55.3, 962.0], [55.4, 962.0], [55.5, 962.0], [55.6, 962.0], [55.7, 962.0], [55.8, 962.0], [55.9, 962.0], [56.0, 963.0], [56.1, 963.0], [56.2, 963.0], [56.3, 963.0], [56.4, 963.0], [56.5, 963.0], [56.6, 963.0], [56.7, 963.0], [56.8, 963.0], [56.9, 963.0], [57.0, 963.0], [57.1, 963.0], [57.2, 963.0], [57.3, 963.0], [57.4, 963.0], [57.5, 963.0], [57.6, 963.0], [57.7, 963.0], [57.8, 963.0], [57.9, 963.0], [58.0, 963.0], [58.1, 963.0], [58.2, 963.0], [58.3, 963.0], [58.4, 964.0], [58.5, 964.0], [58.6, 964.0], [58.7, 964.0], [58.8, 964.0], [58.9, 964.0], [59.0, 964.0], [59.1, 964.0], [59.2, 964.0], [59.3, 964.0], [59.4, 964.0], [59.5, 964.0], [59.6, 964.0], [59.7, 964.0], [59.8, 964.0], [59.9, 964.0], [60.0, 964.0], [60.1, 964.0], [60.2, 965.0], [60.3, 965.0], [60.4, 965.0], [60.5, 965.0], [60.6, 965.0], [60.7, 965.0], [60.8, 965.0], [60.9, 965.0], [61.0, 965.0], [61.1, 965.0], [61.2, 968.0], [61.3, 968.0], [61.4, 969.0], [61.5, 969.0], [61.6, 976.0], [61.7, 976.0], [61.8, 978.0], [61.9, 978.0], [62.0, 979.0], [62.1, 979.0], [62.2, 979.0], [62.3, 979.0], [62.4, 986.0], [62.5, 986.0], [62.6, 987.0], [62.7, 987.0], [62.8, 987.0], [62.9, 987.0], [63.0, 992.0], [63.1, 992.0], [63.2, 996.0], [63.3, 996.0], [63.4, 999.0], [63.5, 999.0], [63.6, 1000.0], [63.7, 1000.0], [63.8, 1000.0], [63.9, 1000.0], [64.0, 1001.0], [64.1, 1001.0], [64.2, 1001.0], [64.3, 1001.0], [64.4, 1001.0], [64.5, 1001.0], [64.6, 1001.0], [64.7, 1001.0], [64.8, 1001.0], [64.9, 1001.0], [65.0, 1001.0], [65.1, 1001.0], [65.2, 1001.0], [65.3, 1001.0], [65.4, 1002.0], [65.5, 1002.0], [65.6, 1002.0], [65.7, 1002.0], [65.8, 1002.0], [65.9, 1002.0], [66.0, 1002.0], [66.1, 1002.0], [66.2, 1002.0], [66.3, 1002.0], [66.4, 1002.0], [66.5, 1002.0], [66.6, 1002.0], [66.7, 1002.0], [66.8, 1002.0], [66.9, 1002.0], [67.0, 1002.0], [67.1, 1002.0], [67.2, 1002.0], [67.3, 1002.0], [67.4, 1003.0], [67.5, 1003.0], [67.6, 1003.0], [67.7, 1003.0], [67.8, 1003.0], [67.9, 1003.0], [68.0, 1003.0], [68.1, 1003.0], [68.2, 1003.0], [68.3, 1003.0], [68.4, 1003.0], [68.5, 1003.0], [68.6, 1004.0], [68.7, 1004.0], [68.8, 1007.0], [68.9, 1007.0], [69.0, 1009.0], [69.1, 1009.0], [69.2, 1010.0], [69.3, 1010.0], [69.4, 1010.0], [69.5, 1010.0], [69.6, 1010.0], [69.7, 1010.0], [69.8, 1010.0], [69.9, 1010.0], [70.0, 1010.0], [70.1, 1010.0], [70.2, 1010.0], [70.3, 1010.0], [70.4, 1010.0], [70.5, 1010.0], [70.6, 1010.0], [70.7, 1011.0], [70.8, 1011.0], [70.9, 1011.0], [71.0, 1011.0], [71.1, 1011.0], [71.2, 1011.0], [71.3, 1011.0], [71.4, 1011.0], [71.5, 1011.0], [71.6, 1011.0], [71.7, 1012.0], [71.8, 1012.0], [71.9, 1012.0], [72.0, 1012.0], [72.1, 1012.0], [72.2, 1012.0], [72.3, 1012.0], [72.4, 1013.0], [72.5, 1013.0], [72.6, 1013.0], [72.7, 1013.0], [72.8, 1013.0], [72.9, 1013.0], [73.0, 1013.0], [73.1, 1013.0], [73.2, 1013.0], [73.3, 1013.0], [73.4, 1014.0], [73.5, 1014.0], [73.6, 1014.0], [73.7, 1014.0], [73.8, 1014.0], [73.9, 1014.0], [74.0, 1015.0], [74.1, 1015.0], [74.2, 1017.0], [74.3, 1017.0], [74.4, 1017.0], [74.5, 1017.0], [74.6, 1017.0], [74.7, 1017.0], [74.8, 1017.0], [74.9, 1017.0], [75.0, 1017.0], [75.1, 1017.0], [75.2, 1017.0], [75.3, 1017.0], [75.4, 1017.0], [75.5, 1017.0], [75.6, 1017.0], [75.7, 1017.0], [75.8, 1017.0], [75.9, 1017.0], [76.0, 1018.0], [76.1, 1018.0], [76.2, 1018.0], [76.3, 1018.0], [76.4, 1018.0], [76.5, 1018.0], [76.6, 1018.0], [76.7, 1018.0], [76.8, 1018.0], [76.9, 1018.0], [77.0, 1018.0], [77.1, 1018.0], [77.2, 1018.0], [77.3, 1018.0], [77.4, 1018.0], [77.5, 1018.0], [77.6, 1018.0], [77.7, 1018.0], [77.8, 1018.0], [77.9, 1018.0], [78.0, 1018.0], [78.1, 1018.0], [78.2, 1019.0], [78.3, 1019.0], [78.4, 1019.0], [78.5, 1019.0], [78.6, 1019.0], [78.7, 1020.0], [78.8, 1020.0], [78.9, 1020.0], [79.0, 1020.0], [79.1, 1025.0], [79.2, 1025.0], [79.3, 1025.0], [79.4, 1025.0], [79.5, 1035.0], [79.6, 1035.0], [79.7, 1036.0], [79.8, 1036.0], [79.9, 1046.0], [80.0, 1046.0], [80.1, 1053.0], [80.2, 1053.0], [80.3, 1054.0], [80.4, 1054.0], [80.5, 1055.0], [80.6, 1055.0], [80.7, 1055.0], [80.8, 1055.0], [80.9, 1055.0], [81.0, 1055.0], [81.1, 1056.0], [81.2, 1056.0], [81.3, 1056.0], [81.4, 1056.0], [81.5, 1056.0], [81.6, 1056.0], [81.7, 1056.0], [81.8, 1056.0], [81.9, 1056.0], [82.0, 1056.0], [82.1, 1056.0], [82.2, 1056.0], [82.3, 1057.0], [82.4, 1057.0], [82.5, 1057.0], [82.6, 1057.0], [82.7, 1057.0], [82.8, 1057.0], [82.9, 1057.0], [83.0, 1057.0], [83.1, 1057.0], [83.2, 1057.0], [83.3, 1057.0], [83.4, 1057.0], [83.5, 1057.0], [83.6, 1057.0], [83.7, 1057.0], [83.8, 1057.0], [83.9, 1057.0], [84.0, 1057.0], [84.1, 1058.0], [84.2, 1058.0], [84.3, 1058.0], [84.4, 1058.0], [84.5, 1058.0], [84.6, 1058.0], [84.7, 1058.0], [84.8, 1058.0], [84.9, 1058.0], [85.0, 1058.0], [85.1, 1058.0], [85.2, 1058.0], [85.3, 1064.0], [85.4, 1064.0], [85.5, 1067.0], [85.6, 1067.0], [85.7, 1067.0], [85.8, 1067.0], [85.9, 1067.0], [86.0, 1067.0], [86.1, 1068.0], [86.2, 1068.0], [86.3, 1068.0], [86.4, 1068.0], [86.5, 1068.0], [86.6, 1068.0], [86.7, 1069.0], [86.8, 1069.0], [86.9, 1069.0], [87.0, 1069.0], [87.1, 1069.0], [87.2, 1069.0], [87.3, 1071.0], [87.4, 1071.0], [87.5, 1071.0], [87.6, 1071.0], [87.7, 1072.0], [87.8, 1072.0], [87.9, 1072.0], [88.0, 1072.0], [88.1, 1072.0], [88.2, 1072.0], [88.3, 1072.0], [88.4, 1072.0], [88.5, 1072.0], [88.6, 1072.0], [88.7, 1072.0], [88.8, 1072.0], [88.9, 1073.0], [89.0, 1073.0], [89.1, 1073.0], [89.2, 1073.0], [89.3, 1073.0], [89.4, 1073.0], [89.5, 1073.0], [89.6, 1073.0], [89.7, 1073.0], [89.8, 1073.0], [89.9, 1074.0], [90.0, 1074.0], [90.1, 1074.0], [90.2, 1074.0], [90.3, 1074.0], [90.4, 1074.0], [90.5, 1074.0], [90.6, 1074.0], [90.7, 1083.0], [90.8, 1083.0], [90.9, 1092.0], [91.0, 1092.0], [91.1, 1103.0], [91.2, 1103.0], [91.3, 1110.0], [91.4, 1110.0], [91.5, 1111.0], [91.6, 1111.0], [91.7, 1111.0], [91.8, 1111.0], [91.9, 1111.0], [92.0, 1111.0], [92.1, 1111.0], [92.2, 1111.0], [92.3, 1111.0], [92.4, 1111.0], [92.5, 1111.0], [92.6, 1111.0], [92.7, 1112.0], [92.8, 1112.0], [92.9, 1112.0], [93.0, 1112.0], [93.1, 1112.0], [93.2, 1112.0], [93.3, 1112.0], [93.4, 1112.0], [93.5, 1112.0], [93.6, 1112.0], [93.7, 1112.0], [93.8, 1112.0], [93.9, 1112.0], [94.0, 1112.0], [94.1, 1112.0], [94.2, 1112.0], [94.3, 1113.0], [94.4, 1113.0], [94.5, 1113.0], [94.6, 1113.0], [94.7, 1113.0], [94.8, 1113.0], [94.9, 1114.0], [95.0, 1114.0], [95.1, 1115.0], [95.2, 1115.0], [95.3, 1115.0], [95.4, 1115.0], [95.5, 1116.0], [95.6, 1116.0], [95.7, 1118.0], [95.8, 1118.0], [95.9, 1120.0], [96.0, 1120.0], [96.1, 1121.0], [96.2, 1121.0], [96.3, 1121.0], [96.4, 1121.0], [96.5, 1121.0], [96.6, 1121.0], [96.7, 1122.0], [96.8, 1122.0], [96.9, 1130.0], [97.0, 1130.0], [97.1, 1138.0], [97.2, 1138.0], [97.3, 1148.0], [97.4, 1148.0], [97.5, 1151.0], [97.6, 1151.0], [97.7, 1159.0], [97.8, 1159.0], [97.9, 1168.0], [98.0, 1168.0], [98.1, 1169.0], [98.2, 1169.0], [98.3, 1177.0], [98.4, 1177.0], [98.5, 1188.0], [98.6, 1188.0], [98.7, 1196.0], [98.8, 1196.0], [98.9, 1200.0], [99.0, 1200.0], [99.1, 1205.0], [99.2, 1205.0], [99.3, 1212.0], [99.4, 1212.0], [99.5, 1215.0], [99.6, 1215.0], [99.7, 1226.0], [99.8, 1226.0], [99.9, 1253.0], [100.0, 1253.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 200.0, "maxY": 200.0, "series": [{"data": [[1100.0, 39.0], [1200.0, 6.0], [700.0, 48.0], [800.0, 44.0], [200.0, 2.0], [900.0, 200.0], [1000.0, 137.0], [500.0, 24.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 498.0, "series": [{"data": [[0.0, 2.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 498.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 90.41200000000003, "minX": 1.7791449E12, "maxY": 90.41200000000003, "series": [{"data": [[1.7791449E12, 90.41200000000003]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7791449E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 353.6666666666667, "minX": 3.0, "maxY": 1039.3333333333333, "series": [{"data": [[33.0, 712.0], [34.0, 711.0], [36.0, 711.5], [38.0, 711.6666666666666], [40.0, 711.0], [43.0, 710.5], [46.0, 713.0], [49.0, 713.3333333333334], [3.0, 353.6666666666667], [53.0, 744.0], [52.0, 723.6666666666666], [55.0, 744.5], [58.0, 744.6666666666666], [60.0, 744.0], [62.0, 743.6666666666666], [67.0, 743.3333333333334], [4.0, 528.0], [68.0, 743.6666666666666], [75.0, 953.0], [74.0, 781.3333333333334], [78.0, 1039.3333333333333], [83.0, 1013.5], [82.0, 1013.0], [81.0, 1014.0], [85.0, 1013.3333333333334], [88.0, 1013.0], [92.0, 1011.6666666666666], [6.0, 527.0], [100.0, 985.3431372549019], [7.0, 528.0], [9.0, 531.0], [10.0, 529.0], [11.0, 529.0], [12.0, 529.5], [14.0, 530.0], [16.0, 530.6666666666666], [19.0, 531.0], [20.0, 530.0], [22.0, 530.0], [25.0, 530.3333333333334], [27.0, 591.6666666666666], [28.0, 713.0], [31.0, 712.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[90.41000000000005, 937.312]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 975.0, "minX": 1.7791449E12, "maxY": 11908.333333333334, "series": [{"data": [[1.7791449E12, 11908.333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7791449E12, 975.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7791449E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 937.312, "minX": 1.7791449E12, "maxY": 937.312, "series": [{"data": [[1.7791449E12, 937.312]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7791449E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 936.9759999999995, "minX": 1.7791449E12, "maxY": 936.9759999999995, "series": [{"data": [[1.7791449E12, 936.9759999999995]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7791449E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.0160000000000005, "minX": 1.7791449E12, "maxY": 2.0160000000000005, "series": [{"data": [[1.7791449E12, 2.0160000000000005]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7791449E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 264.0, "minX": 1.7791449E12, "maxY": 1253.0, "series": [{"data": [[1.7791449E12, 1253.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7791449E12, 1074.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7791449E12, 1204.95]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7791449E12, 1114.95]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7791449E12, 264.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7791449E12, 958.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7791449E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 842.0, "minX": 27.0, "maxY": 1011.0, "series": [{"data": [[78.0, 1002.0], [173.0, 1011.0], [100.0, 952.0], [27.0, 842.0], [122.0, 952.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 173.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 836.0, "minX": 27.0, "maxY": 1011.0, "series": [{"data": [[78.0, 1002.0], [173.0, 1011.0], [100.0, 952.0], [27.0, 836.0], [122.0, 952.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 173.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.7791449E12, "maxY": 8.333333333333334, "series": [{"data": [[1.7791449E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7791449E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.7791449E12, "maxY": 8.333333333333334, "series": [{"data": [[1.7791449E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7791449E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.7791449E12, "maxY": 8.333333333333334, "series": [{"data": [[1.7791449E12, 8.333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7791449E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.7791449E12, "maxY": 8.333333333333334, "series": [{"data": [[1.7791449E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7791449E12, "title": "Total Transactions Per Second"}},
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

