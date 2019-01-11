/**
 * Created by gaaklam yim on 4/24/14.
 * due to IE has no window.location.origin so we have to add it here
 */

(function() {
    if(!window.location.origin) {
        window.location.origin = window.location.protocol+"//"+window.location.hostname+(window.location.port?(":"+window.location.port):"");
    }
})();
