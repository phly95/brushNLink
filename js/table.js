function table() {
    let mdown = false; // defines whether the mouseclick is up or down
    let selit = false; // defines whether to be in selection mode or deselection mode
    let dispatch; // gets dispatch ready
    function chart(selector, data) {
        let tabley = //get the table started
        
        d3.select('tbody')
            .selectAll('tr')
            .data(data)
            .enter()
            .append('tr');

            tabley //put the table in the page
        
            .html(function(data){ // add the data to the table
                
                return '<th scope="row">' + data.year +
                '</th><td>' + data.poverty +
                '</td><td>' + data.unemployment + 
                '</td><td>' + data.murder + '</td>'
            }
            )
            .on("mousedown", function(d){ // select the first item clicked on mousedown
                if (selit == false) {
                    d3.select(this)
                        .classed('selected', true);
                }
                if (selit == true) {
                    d3.select(this)
                    .classed('selected', false);
                }
                mdown = true; // tell the rest of the cells that the mouse is being clicked

                // Get the name of our dispatcher's event
                let dispatchString = Object.getOwnPropertyNames(dispatcher._)[0];

                // Let other charts know about our selection
                dispatcher.call(dispatchString, this, d3.select('table').selectAll('.selected').data());
            })
            .on("mouseup", function(d){
                mdown = false; // tell the cells that the mouse is no longer being clicked
                if (selit == false) { // switch between selection and deselection
                    selit = true;
                }
                else if (selit == true) {
                    selit = false;
                };
            })
            .on("mouseenter", function(d){ // when mouse enters a cell, if the mouse is being clicked,
                if (mdown == true) {       // do the selection/deselection tasks, otherwise, do nothing
                    if (selit == false) {
                        d3.select(this)
                        .classed('selected', true);
                    }
                    if (selit == true) {
                        d3.select(this)
                        .classed('selected', false);
                    }
                }
                // Get the name of our dispatcher's event
                let dispatchString = Object.getOwnPropertyNames(dispatcher._)[0];

                // Let other charts know about our selection
                dispatcher.call(dispatchString, this, d3.select('table').selectAll('.selected').data());
                console.log(d3.select('table').selectAll('.selected').data())

            })


            return chart;
        }

        // Gets or sets the dispatcher we use for selection events
        chart.selectionDispatcher = function (_) {
            if (!arguments.length) return dispatcher;
            dispatcher = _;
            return chart;
          };


          // Given selected data from another visualization 
          // select the relevant elements here (linking)
          chart.updateSelection = function (selectedData) {
            if (!arguments.length) return;
        
            // Select an element if its datum was selected
            d3.selectAll('tr').classed("selected", d =>
              selectedData.includes(d)
            );
        
          };
    return chart;
          //hover style is handled by css's :hover function

}
