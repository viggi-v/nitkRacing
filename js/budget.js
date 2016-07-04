var selectedOption="";
 function popupClose(){
            device = $("#"+selectedOption).find(".explanation_content");
            device.animate({
              width:"0px",
              height:"0px"
            },"slow");
            document.getElementById(selectedOption).style.display="none";
        }
function generateGraph(){
     // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Category');
        data.addColumn('number', 'Expense');
        data.addRows([
            ['engine', 3  ],
            ['marketing', 1],
            ["chassis" , 3],
            ["registration" , 1.5],
            ["logistics" , 6],
            ["testing"  ,1],
            ["suspension" , 2],
            ["electronics" , 2]
        ]);
        if($(window).width() > 768){
          /* If it not a mobile*/
            var width= 0.5 * $(".content").outerWidth();
            var height= screen.availHeight-260;
        }
            
        else{
          var width= $(".content").outerWidth();
          var height = 250;
        }
            

        // Set chart options
        var options = {'title':'',
                       'width':width,
                       'height':height,
                        'is3D':true,
                       legend:'none'};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
        function selectHandler() {
          var selectedItem = chart.getSelection()[0];
          if (selectedItem) {
            selectedOption = data.getValue(selectedItem.row, 0);
            console.log(selectedOption);
            document.getElementById(selectedOption).style.display="block";
            device = $("#"+selectedOption).find(".explanation_content");
            device.animate({
              width:"80%",
              height:"80vh"
            });
          }
        }
        google.visualization.events.addListener(chart, 'select', selectHandler);
      }

}
generateGraph();
