
//Load json and construct array for a day
function draw(username, date, fromHour, toHour)
{
            //alert(fromHour);
            //alert(toHour);
            var points =[];
            var myTrip = [];
            console.log(username);
            console.log(date);
            console.log(fromHour.toString());
            console.log(toHour.toString());
            var x=new google.maps.LatLng(40.1154708,-88.2212035);
            console.log(json[username][date.toString()]);
            if(json[username].hasOwnProperty(date))
            {
              for(var hour=0; hour<=23; hour++){
                if(hour>=fromHour && hour<=toHour)
                {
                  if(json[username][date].hasOwnProperty(hour.toString()))
                  {
                        points = points.concat(json[username][date][hour.toString()]);
                  }
                }
              }
              for(var i=0; i<points.length; i++)
              {
                var position = new google.maps.LatLng(points[i]['latitude'],points[i]['longitude']);
                myTrip.push(position);
                if(i==0)
                {
                  x=position;
                }
              }
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
              strokeColor:"red",
              strokeOpacity:0.6,
              strokeWeight:3
              });

            flightPath.setMap(map);
            }

            initialize();
}