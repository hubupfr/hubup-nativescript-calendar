import { ContentView } from 'ui/content-view';

export class HubupCalendar extends ContentView {
    private _ios:any;

    get ios() {
        return this._ios;
    }

    get _nativeView(): any {
        return this._ios;
    }


}
