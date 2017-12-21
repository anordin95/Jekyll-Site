var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "Using Sentiment to predict the Market",
      excerpt: "A friend of mine, Dillon Dumesnil and I worked on a project to predict the direction of the S&amp;P500’s price...",
      categories: ["Edge Case"],
      tags: ["content","css","edge case","lists","markup"],
      id: 0
    });
    
  
    idx.add({
      title: "Neuroscience Research: Queensland Brain Institute",
      excerpt: "I spent 7 weeks performing neuroscience research with Geoffrey Goodhill and his team at the Queensland Brain Institute. The team...",
      categories: ["Post Formats"],
      tags: ["Post Formats","readability","standard"],
      id: 1
    });
    
  
    idx.add({
      title: "Automating Prediction Problem Generation",
      excerpt: "I’ll be spending the next year working under Kalyan Veeramachaneni at the Data to AI Lab at MIT. Two years...",
      categories: ["Edge Case"],
      tags: ["content","css","edge case","lists","markup"],
      id: 2
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Using Sentiment to predict the Market",
        "url": "http://localhost:4000/edge%20case/Market-Sentiment/",
        "excerpt": "A friend of mine, Dillon Dumesnil and I worked on a project to predict the direction of the S&amp;P500’s price...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Neuroscience Research: Queensland Brain Institute",
        "url": "http://localhost:4000/post%20formats/Neuroscience-Research/",
        "excerpt": "I spent 7 weeks performing neuroscience research with Geoffrey Goodhill and his team at the Queensland Brain Institute. The team...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Automating Prediction Problem Generation",
        "url": "http://localhost:4000/edge%20case/MEng-Thesis-Work/",
        "excerpt": "I’ll be spending the next year working under Kalyan Veeramachaneni at the Data to AI Lab at MIT. Two years...",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p>'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
