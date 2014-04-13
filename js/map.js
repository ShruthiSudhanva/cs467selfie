
//Load json and construct array for a day
            var date = "2014-04-12";
            var points = json[0][date];
            var myTrip = [];
            var x=new google.maps.LatLng(40.1154708,-88.2212035);
            for(var i=0; i<points.length; i++)
            {
              var position = new google.maps.LatLng(points[i]['latitude'],points[i]['longitude']);
              myTrip.push(position);
            }
            
            function initialize()
            {
            var mapProp = {
              center:x,
              zoom:14,
              mapTypeId:google.maps.MapTypeId.ROADMAP
              };
              
            var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

            var flightPath=new google.maps.Polyline({
              path:myTrip,
              strokeColor:"#0000FF",
              strokeOpacity:0.8,
              strokeWeight:3
              });

            flightPath.setMap(map);
            }

            google.maps.event.addDomListener(window, 'load', initialize);