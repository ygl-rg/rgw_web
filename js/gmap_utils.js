/**
 * Created by mathgl on 14-5-7.
 */

define([], function () {
    return {
        //google.maps.LatLng
        ToPoint: function (LatLng) {
            return [LatLng.lng(), LatLng.lat()];
        },

        //point is an array of two elements with the first is lon and the second is lat
        ToLatLng: function (point) {
            return new google.maps.LatLng(point[1], point[0]);
        },
        
        GeoJSON2LatLng: function(geojson_tbl) {
            return this.ToLatLng(geojson_tbl['coordinates']);
        },

        //polygon has no interior
        PolygonPathFromGeoJSON: function (geometry_obj) {
            var coords = geometry_obj.coordinates[0];
            var path = [];
            for (var i = 0; i != coords.length; ++i) {
                path.push(new google.maps.LatLng(coords[i][1], coords[i][0]));
            }
            return path;
        },

        AnimatedShowFeature: function (feature_obj, map_obj, wait_ms, count) {
            var flag = false;
            for (var i = 0; i != count; ++i) {
                flag = !flag;
                setTimeout((function (f_obj, m_obj, show_feature) {
                    return function () {
                        return (show_feature)?(f_obj.setMap(m_obj)):(f_obj.setMap(undefined));
                    };
                })(feature_obj, map_obj, flag), wait_ms * i);
            }
        }
    };
});