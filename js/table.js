

function table() {
    
    d3.select('tbody')
        .selectAll('tr')
        .data(d3.json("data/texas.json"))
        .enter()
        .append('tr')
    
        .html(function(data){
            alert('data');
            return '<th scope="row">' + d.year +
            '</th><td>' + d.poverty +
            '</td><td>' + d.unemployment + 
            '</td><td>' + d.murder + '</td>'
        }
        )

}
