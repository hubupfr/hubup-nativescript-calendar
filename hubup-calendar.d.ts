declare module "hubup-nativescript-calendar" {
    import { ContentView } from 'ui/content-view';
    
    export class HubupCalendar extends ContentView {
        android: any; /* android.widget.CalendarView   */
        ios:any;

    }

}