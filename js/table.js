

function table() {
    function chart(selector, data) {
    
        d3.select('tbody')
            // alert(data)
            .selectAll('tr')
            .data(data)
            .enter()
            .append('tr')
        
            .html(function(data){
                
                return '<th scope="row">' + data.year +
                '</th><td>' + data.poverty +
                '</td><td>' + data.unemployment + 
                '</td><td>' + data.murder + '</td>'
            }
            )
            .on("mouseover", function(d){
                d3.select(this)
                    .style("background-color", "orange");
            })
            .on("mouseout", function(d){
                d3.select(this)
                    .style("background-color","transparent");
            });
        }
    return chart;


}
