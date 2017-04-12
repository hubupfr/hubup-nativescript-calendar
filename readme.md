#A simple native calendar implementation for nativescript


# Nativescript + Angular setup :

in your file `app/main.ts`, add this code snippet to register the calendar 

```

import {registerElement} from "nativescript-angular/element-registry";
registerElement("HubupCalendar", () => require("hubup-nativescript-calendar").HubupCalendar);

```